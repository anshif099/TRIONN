import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";


const projectRoot = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(projectRoot, "trionn.com");
const origin = "https://trionn.com";
const routes = ["/work", "/services", "/about", "/contact", "/trionn-story"];
const staticPrefixes = [
  "/_next/static/",
  "/images/",
  "/gallery/",
  "/video/",
  "/audio/",
  "/assets/",
];
const teamMembers = [
  "prabhat",
  "gaurav",
  "rushi",
  "dhruv",
  "sandip",
  "hardik",
  "viral",
  "umang",
  "rahul",
  "bhagirath",
  "ayaz",
  "dhaval",
  "vaishnavi",
  "nilesh",
];

const queue = [];
const queuedPaths = new Set();
const failures = [];
let downloadedFiles = 0;
let downloadedBytes = 0;
let reusedFiles = 0;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function toStaticUrl(reference, base = origin) {
  if (!reference) return null;

  const decoded = reference
    .replaceAll("&amp;", "&")
    .replaceAll("\\/", "/")
    .replace(/^['\"]|['\"]$/g, "");

  let url;
  try {
    url = new URL(decoded, base);
  } catch {
    return null;
  }

  if (url.origin !== origin || !staticPrefixes.some((prefix) => url.pathname.startsWith(prefix))) {
    return null;
  }

  const decodedPath = decodeURIComponent(url.pathname);
  if (
    (decodedPath.startsWith("/_next/static/") && !/\.[A-Za-z0-9]+$/.test(decodedPath)) ||
    decodedPath.endsWith("/") ||
    decodedPath.endsWith(".") ||
    decodedPath.endsWith("_") ||
    decodedPath.endsWith("&") ||
    /[$#{}]/.test(decodedPath)
  ) {
    return null;
  }

  return url;
}

function enqueue(reference, base) {
  const url = toStaticUrl(reference, base);
  if (!url || queuedPaths.has(url.pathname)) return;
  queuedPaths.add(url.pathname);
  queue.push(url);
}

function discoverReferences(source, base) {
  const attributePattern = /\b(?:src|href|poster)=["']([^"'#]+)["']/gi;
  for (const match of source.matchAll(attributePattern)) enqueue(match[1], base);

  const srcsetPattern = /\bsrcset=["']([^"']+)["']/gi;
  for (const match of source.matchAll(srcsetPattern)) {
    for (const candidate of match[1].split(",")) enqueue(candidate.trim().split(/\s+/)[0], base);
  }

  const rootAssetPattern = /\/(?:_next\/static|images|gallery|video|audio|assets)\/[A-Za-z0-9_./~@%+?=:-]+/g;
  for (const match of source.matchAll(rootAssetPattern)) enqueue(match[0], base);

  const chunkPattern = /(?:^|["'])static\/chunks\/[A-Za-z0-9._~\-]+\.(?:js|css)/g;
  for (const match of source.matchAll(chunkPattern)) {
    const chunk = match[0].replace(/^["']/, "");
    enqueue(`/_next/${chunk}`, base);
  }

  const cssUrlPattern = /url\(([^)]+)\)/g;
  for (const match of source.matchAll(cssUrlPattern)) enqueue(match[1].trim(), base);
}

function localPathFor(url) {
  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const path = resolve(siteRoot, relative);
  if (path !== siteRoot && !path.startsWith(`${siteRoot}\\`) && !path.startsWith(`${siteRoot}/`)) {
    throw new Error(`Unsafe output path: ${url.pathname}`);
  }
  return path;
}

function isTextAsset(url) {
  return [".js", ".css", ".svg", ".json"].includes(extname(url.pathname).toLowerCase());
}

async function fetchResponse(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "TRIONN static archive sync" },
    redirect: "follow",
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response;
}

async function syncRoute(route) {
  const url = new URL(route, origin);
  const response = await fetchResponse(url);
  const html = await response.text();
  const output = resolve(siteRoot, route.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
  discoverReferences(html, url);
  console.log(`Saved ${route}`);
}

async function syncAsset(url) {
  const output = localPathFor(url);
  let content;

  if (await exists(output)) {
    reusedFiles += 1;
    if (isTextAsset(url)) content = await readFile(output, "utf8");
  } else {
    try {
      const response = await fetchResponse(url);
      const bytes = Buffer.from(await response.arrayBuffer());
      await mkdir(dirname(output), { recursive: true });
      await writeFile(output, bytes);
      downloadedFiles += 1;
      downloadedBytes += bytes.length;
      if (isTextAsset(url)) content = bytes.toString("utf8");
    } catch (error) {
      failures.push(`${url.pathname}: ${error.message}`);
      return;
    }
  }

  if (content) discoverReferences(content, url);
}

for (const route of routes) await syncRoute(route);

// The About page builds these image URLs at runtime, so they cannot be found
// by scanning literal asset references in the downloaded JavaScript.
for (const member of teamMembers) {
  enqueue(`/images/team/${member}.webp`);
  enqueue(`/images/team/${member}_m.webp`);
}

let cursor = 0;
const concurrency = 8;
while (cursor < queue.length) {
  const batch = queue.slice(cursor, cursor + concurrency);
  cursor += batch.length;
  await Promise.all(batch.map(syncAsset));
}

console.log(`Downloaded ${downloadedFiles} assets (${(downloadedBytes / 1024 / 1024).toFixed(2)} MB).`);
console.log(`Reused ${reusedFiles} existing assets.`);
if (failures.length) {
  console.warn(`Failed assets (${failures.length}):`);
  for (const failure of failures) console.warn(`- ${failure}`);
  process.exitCode = 1;
}
