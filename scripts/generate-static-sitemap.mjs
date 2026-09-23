import fs from "node:fs";
import path from "node:path";

const siteRoot = [".output/public", "dist/client", "dist"]
  .map((relative) => ({ relative, absolute: path.resolve(relative) }))
  .find(({ absolute }) => fs.existsSync(path.join(absolute, "index.html")));

if (!siteRoot) {
  throw new Error("Static output not found while generating sitemap.");
}

const source = fs.readFileSync(path.resolve("src/content/catalog.ts"), "utf8");
const pattern =
  /^\s*\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",.*?,\s*"(high|medium|short)"\],?\s*$/u;
const rows = [];
for (const line of source.split("\n")) {
  const match = line.match(pattern);
  if (match) rows.push({ category: match[2], slug: match[3] });
}

const routes = new Set(["/", "/pt", "/search", "/comparisons", "/regional", "/tables"]);
for (const row of rows) {
  if (row.category === "comparisons") routes.add(`/comparisons/${row.slug}`);
  else if (row.category === "regional") routes.add(`/regional/${row.slug}`);
  else routes.add(`/pt/${row.category}/${row.slug}`);
}
for (const category of new Set(rows.filter((row) => !["comparisons", "regional"].includes(row.category)).map((row) => row.category))) {
  routes.add(`/pt/${category}`);
}

const base = "https://clippyfirst.github.io/Portuguese-Grammar";
const body = [...routes]
  .sort()
  .map((route) => `  <url><loc>${base}${route === "/" ? "/" : route + "/"}</loc></url>`)
  .join("\n");

fs.writeFileSync(
  path.join(siteRoot.absolute, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
);
console.log(`Generated sitemap.xml with ${routes.size} URLs in ${siteRoot.relative}.`);
