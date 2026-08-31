const GITHUB_USER = "anshif099";

function getGitHubHeaders(authenticated = false) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "trionn-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (authenticated && process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

const contributionLevels = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function parseContributionCalendar(html) {
  const heading = html.match(
    /<h2[^>]*id="js-contribution-activity-description"[^>]*>([\s\S]*?)<\/h2>/i,
  );
  const totalMatch = heading?.[1]?.match(/[\d,]+/);
  const total = Number((totalMatch?.[0] || "0").replaceAll(",", ""));
  const days = [];
  const dayPattern = /<td[^>]*data-date="([^"]+)"[^>]*data-level="([0-4])"[^>]*>/gi;

  for (const match of html.matchAll(dayPattern)) {
    days.push({ date: match[1], level: Number(match[2]) });
  }

  return { total, days, source: "public" };
}

async function getAuthenticatedUser() {
  if (!process.env.GITHUB_TOKEN) return null;

  const authenticatedUserResponse = await fetch("https://api.github.com/user", {
    headers: getGitHubHeaders(true),
  });

  if (!authenticatedUserResponse.ok) {
    throw new Error(`GitHub authenticated user returned ${authenticatedUserResponse.status}`);
  }

  const authenticatedUser = await authenticatedUserResponse.json();
  if (authenticatedUser.login?.toLowerCase() !== GITHUB_USER.toLowerCase()) {
    throw new Error("GITHUB_TOKEN must belong to the displayed GitHub account");
  }

  return authenticatedUser;
}

async function getAuthenticatedContributions() {
  if (!process.env.GITHUB_TOKEN) return null;

  const graphqlResponse = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      ...getGitHubHeaders(true),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query DeveloperContributions($login: String!) {
          viewer { login }
          user(login: $login) {
            contributionsCollection {
              restrictedContributionsCount
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `,
      variables: { login: GITHUB_USER },
    }),
  });

  if (!graphqlResponse.ok) {
    throw new Error(`GitHub GraphQL returned ${graphqlResponse.status}`);
  }

  const payload = await graphqlResponse.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }
  if (payload.data?.viewer?.login?.toLowerCase() !== GITHUB_USER.toLowerCase()) {
    throw new Error("GITHUB_TOKEN must belong to the displayed GitHub account");
  }

  const collection = payload.data?.user?.contributionsCollection;
  const calendar = collection?.contributionCalendar;
  if (!calendar) throw new Error("Authenticated contribution calendar was not returned");

  return {
    total: calendar.totalContributions,
    restricted: collection.restrictedContributionsCount,
    source: "authenticated",
    days: calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: contributionLevels[day.contributionLevel] ?? 0,
      })),
    ),
  };
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const githubHeaders = getGitHubHeaders();
    const [
      profileResponse,
      repositoriesResponse,
      contributionsResponse,
      authenticatedUser,
      authenticatedContributions,
    ] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`, { headers: githubHeaders }),
      fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?type=owner&sort=updated&per_page=6`,
        { headers: githubHeaders },
      ),
      fetch(`https://github.com/users/${GITHUB_USER}/contributions`, {
        headers: { "User-Agent": githubHeaders["User-Agent"] },
      }),
      getAuthenticatedUser().catch((error) => {
        console.warn("Authenticated GitHub user unavailable; using public profile data", error);
        return null;
      }),
      getAuthenticatedContributions().catch((error) => {
        console.warn("Authenticated contributions unavailable; using public data", error);
        return null;
      }),
    ]);

    if (!profileResponse.ok || !repositoriesResponse.ok || !contributionsResponse.ok) {
      throw new Error("GitHub returned an unsuccessful response");
    }

    const [profile, repositories, contributionsHtml] = await Promise.all([
      profileResponse.json(),
      repositoriesResponse.json(),
      contributionsResponse.text(),
    ]);

    response.setHeader(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=3600",
    );

    return response.status(200).json({
      profile: {
        login: profile.login,
        name: profile.name || profile.login,
        avatarUrl: profile.avatar_url,
        bio: profile.bio,
        location: profile.location,
        followers: profile.followers,
        following: profile.following,
        publicRepositories:
          typeof authenticatedUser?.owned_private_repos === "number"
            ? authenticatedUser.public_repos + authenticatedUser.owned_private_repos
            : profile.public_repos,
      },
      repositories: repositories.map((repository) => ({
        name: repository.name,
        description: repository.description,
        language: repository.language,
        stars: repository.stargazers_count,
        forks: repository.forks_count,
      })),
      contributions: authenticatedContributions || parseContributionCalendar(contributionsHtml),
    });
  } catch (error) {
    console.error("Unable to load GitHub profile", error);
    return response.status(502).json({ error: "Unable to load GitHub profile right now" });
  }
}
