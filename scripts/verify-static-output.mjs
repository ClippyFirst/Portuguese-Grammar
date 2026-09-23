import fs from "node:fs";
import path from "node:path";

const candidates = [".output/public", "dist/client", "dist"];
const siteRoot = candidates
  .map((relative) => ({ relative, absolute: path.resolve(relative) }))
  .find(({ absolute }) => fs.existsSync(path.join(absolute, "index.html")));

if (!siteRoot) {
  console.error("Static output not found. Expected one of:", candidates.join(", "));
  process.exit(1);
}

function catalogRows() {
  const source = fs.readFileSync(path.resolve("src/content/catalog.ts"), "utf8");
  const rows = [];
  const pattern =
    /^\s*\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",.*?,\s*"(high|medium|short)"\],?\s*$/u;
  for (const line of source.split("\n")) {
    const match = line.match(pattern);
    if (match) rows.push({ id: match[1], category: match[2], slug: match[3] });
  }
  return rows;
}

function routeFor(row) {
  if (row.category === "comparisons") return `/comparisons/${row.slug}`;
  if (row.category === "regional") return `/regional/${row.slug}`;
  return `/pt/${row.category}/${row.slug}`;
}

function expectedFile(route) {
  const clean = route.replace(/^\/+|\/+$/gu, "");
  return path.join(siteRoot.absolute, clean, "index.html");
}

const rows = catalogRows();
const routes = new Set([
  "/",
  "/pt",
  "/search",
  "/comparisons",
  "/regional",
  "/tables",
]);

for (const row of rows) routes.add(routeFor(row));
for (const category of new Set(rows.filter((row) => !["comparisons", "regional"].includes(row.category)).map((row) => row.category))) {
  routes.add(`/pt/${category}`);
}

const missing = [...routes].filter((route) => !fs.existsSync(expectedFile(route)));
const htmlCount = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(absolute);
    else if (entry.name === "index.html") htmlCount.push(absolute);
  }
}
walk(siteRoot.absolute);

if (missing.length) {
  console.error(`Static output root: ${siteRoot.relative}`);
  console.error(`Expected ${routes.size} route HTML files; missing ${missing.length}.`);
  for (const route of missing.slice(0, 50)) console.error(`- ${route}`);
  if (missing.length > 50) console.error(`- …and ${missing.length - 50} more`);
  process.exit(1);
}

console.log(
  `Static output verified: ${rows.length} catalog pages + ${routes.size - rows.length} shell routes; ${htmlCount.length} index.html files under ${siteRoot.relative}.`,
);
