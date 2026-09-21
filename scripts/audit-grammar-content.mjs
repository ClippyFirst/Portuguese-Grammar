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
const ids = new Map();
const slugs = new Map();
const pageMeta = new Map();

function add(map, key, value) {
  const list = map.get(key) ?? [];
  list.push(value);
  map.set(key, list);
}

for (const { name, content } of pages) {
  for (const match of content.matchAll(/id:\s*"([^"]+)"/g)) add(ids, match[1], name);
  for (const match of content.matchAll(/slug:\s*"([^"]+)"/g)) add(slugs, match[1], name);

  for (const meta of content.matchAll(
    /id:\s*"([^"]+)"\s*,\s*slug:\s*"([^"]+)"\s*,\s*category:\s*"([^"]+)"/g,
  )) {
    pageMeta.set(meta[1], {
      file: name,
      slug: meta[2],
      category: meta[3],
    });
  }
}

for (const [id, filesForId] of ids) {
  if (filesForId.length > 1) {
    issues.push(`duplicate page id "${id}": ${filesForId.join(", ")}`);
  }
}
for (const [slug, filesForSlug] of slugs) {
  if (filesForSlug.length > 1) {
    issues.push(`duplicate page slug "${slug}": ${filesForSlug.join(", ")}`);
  }
}

const catalogRows = new Map();
for (const match of catalog.matchAll(
  /^\s*\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",/gm,
)) {
  catalogRows.set(match[1], { category: match[2], slug: match[3] });
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

for (const { name, content } of pages) {
  for (const match of content.matchAll(
    /related:\s*\[((?:[^\]]|\][^\]])*)\]/gs,
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

for (const { name, content } of pages) {
  content.split("\n").forEach((line, index) => {
    if (absolute.test(line) && !line.includes("mistake(")) {
      issues.push(
        `${name}:${index + 1}: absolute-language review: ${line.trim()}`,
      );
    }
  });
}

if (issues.length) {
  console.error("Grammar content audit found potential issues:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(
    `Grammar content audit passed: ${pages.length} modules, ${pageMeta.size} pages, ${catalogRows.size} catalog entries, ${slugs.size} unique slugs.`,
  );
}
