import { copyFile, cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";


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

async function build() {
  await rm(outputRoot, { recursive: true, force: true });
  await cp(sourceRoot, outputRoot, { recursive: true });

  let repairedFiles = 0;
  const outputFiles = await walk(outputRoot);

  for (const path of outputFiles) {
    if (extname(path) !== ".js") continue;

    const original = await readFile(path, "utf8");
    const repaired = repairJavaScript(original);
    if (repaired !== original) {
      await writeFile(path, repaired, "utf8");
      repairedFiles += 1;
    }
  }

  for (const [source, destination] of aliases) {
    const destinationPath = resolve(outputRoot, destination);
    await mkdir(dirname(destinationPath), { recursive: true });
    await copyFile(resolve(outputRoot, source), destinationPath);
  }

  console.log(`Built ${outputRoot}`);
  console.log(`Repaired ${repairedFiles} JavaScript files and created ${aliases.size} asset aliases.`);
}

await build();
