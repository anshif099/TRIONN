const GITHUB_USER = "anshif099";

const githubHeaders = {
  Accept: "application/vnd.github+json",
  "User-Agent": "trionn-portfolio",
  "X-GitHub-Api-Version": "2022-11-28",
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

  return { total, days };
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const [profileResponse, repositoriesResponse, contributionsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`, { headers: githubHeaders }),
      fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?type=owner&sort=updated&per_page=6`,
        { headers: githubHeaders },
      ),
      fetch(`https://github.com/users/${GITHUB_USER}/contributions`, {
        headers: { "User-Agent": githubHeaders["User-Agent"] },
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
      "public, s-maxage=3600, stale-while-revalidate=86400",
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
        publicRepositories: profile.public_repos,
      },
      repositories: repositories.map((repository) => ({
        name: repository.name,
        description: repository.description,
        language: repository.language,
        stars: repository.stargazers_count,
        forks: repository.forks_count,
      })),
      contributions: parseContributionCalendar(contributionsHtml),
    });
  } catch (error) {
    console.error("Unable to load GitHub profile", error);
    return response.status(502).json({ error: "Unable to load GitHub profile right now" });
  }
}
