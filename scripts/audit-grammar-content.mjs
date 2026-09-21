import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/content/pages");
const catalogPath = path.resolve("src/content/catalog.ts");
const files = fs.readdirSync(root).filter((name) => name.endsWith(".ts"));
const pages = files.map((name) => ({
  name,
  content: fs.readFileSync(path.join(root, name), "utf8"),
}));
const catalog = fs.readFileSync(catalogPath, "utf8");

const issues = [];
const warnings = [];
const ids = new Map();
const paths = new Map();
const pageMeta = new Map();

function add(map, key, value) {
  const list = map.get(key) ?? [];
  list.push(value);
  map.set(key, list);
}

function extractPageBlocks(content) {
  const lines = content.split("\n");
  const starts = lines
    .map((line, index) => (/^  \{$/u.test(line) ? index : -1))
    .filter((index) => index >= 0);

  return starts.map((start, i) => lines.slice(start, starts[i + 1] ?? lines.length).join("\n"));
}

for (const { name, content } of pages) {
  for (const block of extractPageBlocks(content)) {
    const id = block.match(/\bid:\s*"([^"]+)"/u)?.[1];
    const slug = block.match(/\bslug:\s*"([^"]+)"/u)?.[1];
    const category = block.match(/\bcategory:\s*"([^"]+)"/u)?.[1];
    if (!id || !slug || !category) continue;

    add(ids, id, name);
    add(paths, `${category}/${slug}`, name);
    pageMeta.set(id, { file: name, slug, category });
  }
}

for (const [id, filesForId] of ids) {
  if (filesForId.length > 1) {
    issues.push(`duplicate page id "${id}": ${filesForId.join(", ")}`);
  }
}
for (const [topicPath, filesForPath] of paths) {
  if (filesForPath.length > 1) {
    issues.push(`duplicate category/slug "${topicPath}": ${filesForPath.join(", ")}`);
  }
}

const catalogRows = new Map();
for (const match of catalog.matchAll(
  /^\s*\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",[\s\S]*?,\s*"([^"]+)",\s*$/gm,
)) {
  catalogRows.set(match[1], { category: match[2], slug: match[3], depth: match[4] });
}

for (const [id, meta] of pageMeta) {
  const row = catalogRows.get(id);
  if (!row) {
    issues.push(`page missing from catalog: ${id} (${meta.file})`);
    continue;
  }
  if (row.category !== meta.category) {
    issues.push(
      `category mismatch for "${id}": page=${meta.category}, catalog=${row.category}`,
    );
  }
  if (row.slug !== meta.slug) {
    issues.push(`slug mismatch for "${id}": page=${meta.slug}, catalog=${row.slug}`);
  }
}

for (const [id, row] of catalogRows) {
  if (!pageMeta.has(id)) {
    issues.push(`catalog entry has no page module: ${id} (${row.category}/${row.slug})`);
  }
}

for (const [id, row] of catalogRows) {
  if (row.depth !== "high") continue;
  const meta = pageMeta.get(id);
  if (!meta) continue;
  const source = pages.find((p) => p.name === meta.file)?.content ?? "";
  const start = source.indexOf(`id: "${id}"`);
  const next = source.indexOf("id: \"", start + 1);
  const block = start >= 0 ? source.slice(start, next >= 0 ? next : undefined) : "";
  if (!/\b(?:examples|uses):/u.test(block)) {
    warnings.push(
      `high-depth topic without examples/uses field: ${id} (${meta.file})`,
    );
  }
}

for (const { name, content } of pages) {
  for (const match of content.matchAll(
    /related:\s*\[([\s\S]*?)\]/g,
  )) {
    for (const ref of match[1].matchAll(/"([^"]+)"/g)) {
      if (!pageMeta.has(ref[1])) {
        issues.push(`broken related reference "${ref[1]}" in ${name}`);
      }
    }
  }
}

const absolute =
  /\b(?:завжди|ніколи|обов['’]язково|неможливо|always|never|must|impossible)\b/iu;
const proseFields =
  /^(?:\s*)(?:intro|formation|exceptions|ukrainian|regional|brPt|body|note):/u;

for (const { name, content } of pages) {
  content.split("\n").forEach((line, index) => {
    if (
      absolute.test(line) &&
      proseFields.test(line) &&
      !line.includes("mistake(")
    ) {
      warnings.push(
        `${name}:${index + 1}: absolute-language review: ${line.trim()}`,
      );
    }
  });
}

if (issues.length) {
  console.error("Grammar content audit found structural/content issues:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(
    `Grammar content audit passed: ${pages.length} modules, ${pageMeta.size} pages, ${catalogRows.size} catalog entries, ${paths.size} unique category/slug paths.`,
  );
}
if (warnings.length) {
  console.warn(`Grammar content audit warnings: ${warnings.length}`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}
