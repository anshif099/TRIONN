import { access, copyFile, cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { staticRoutes } from "./routes.mjs";


const projectRoot = dirname(fileURLToPath(import.meta.url));
const sourceRoot = resolve(projectRoot, "trionn.com");
const outputRoot = resolve(projectRoot, "dist");

const aliases = new Map([
  ["_next/static/chunks/0.t3mu8kba-e.js", "_next/static/chunks/0.t3mu8kba~-e.js"],
  ["_next/static/chunks/0.924d2y-587.js", "_next/static/chunks/0.924d2y-5~87.js"],
  ["_next/static/chunks/0eoxaw2ff066.js", "_next/static/chunks/0eox~aw2ff066.js"],
  ["_next/static/chunks/0y3cortxor.js", "_next/static/chunks/0y3~cortx~or~.js"],
  ["_next/static/chunks/0xt8hh0aijjr.css", "_next/static/chunks/0xt8hh0aijjr~.css"],
]);

const staticNavigation = `<script data-static-navigation>(function(){var routes=new Set(${JSON.stringify(staticRoutes)});addEventListener("click",function(event){if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;var anchor=event.target.closest&&event.target.closest("a[href]");if(!anchor||anchor.target==="_blank"||anchor.hasAttribute("download"))return;var url=new URL(anchor.href,location.href);if(url.origin===location.origin&&routes.has(url.pathname)){event.preventDefault();event.stopImmediatePropagation();location.assign(url.pathname+url.search+url.hash)}},true)})();</script>`;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else if (entry.isFile()) {
      files.push(path);
    }
  }

  return files;
}

function repairJavaScript(source) {
  return source
    .replace(/\?\s+\.(?=[$A-Za-z_(\[])/g, "?.")
    .replace(/\?\s+\?/g, "??")
    .replace(/\?\?\s+=/g, "??=");
}

function enhanceHtml(source) {
  if (source.includes("data-static-navigation")) return source;
  return source.replace("</head>", `${staticNavigation}</head>`);
}

async function build() {
  await rm(outputRoot, { recursive: true, force: true });
  await cp(sourceRoot, outputRoot, { recursive: true });

  let repairedFiles = 0;
  let enhancedPages = 0;
  const outputFiles = await walk(outputRoot);

  for (const path of outputFiles) {
    const extension = extname(path);
    if (extension !== ".js" && extension !== ".html") continue;

    const original = await readFile(path, "utf8");
    const transformed = extension === ".js" ? repairJavaScript(original) : enhanceHtml(original);
    if (transformed !== original) {
      await writeFile(path, transformed, "utf8");
      if (extension === ".js") repairedFiles += 1;
      else enhancedPages += 1;
    }
  }

  for (const [source, destination] of aliases) {
    const destinationPath = resolve(outputRoot, destination);
    if (await exists(destinationPath)) continue;
    await mkdir(dirname(destinationPath), { recursive: true });
    await copyFile(resolve(outputRoot, source), destinationPath);
  }

  console.log(`Built ${outputRoot}`);
  console.log(`Repaired ${repairedFiles} JavaScript files and enhanced ${enhancedPages} HTML documents.`);
}

await build();
