import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/content/pages");
const files = fs.readdirSync(root).filter((name) => name.endsWith(".ts"));
const pages = files.map((name) => ({ name, content: fs.readFileSync(path.join(root, name), "utf8") }));

const issues = [];
const ids = new Map();
const slugs = new Map();

for (const { name, content } of pages) {
  for (const match of content.matchAll(/id:\s*"([^"]+)"/g)) {
    const list = ids.get(match[1]) ?? [];
    list.push(name);
    ids.set(match[1], list);
  }
  for (const match of content.matchAll(/slug:\s*"([^"]+)"/g)) {
    const list = slugs.get(match[1]) ?? [];
    list.push(name);
    slugs.set(match[1], list);
  }
}

for (const [id, filesForId] of ids) {
  if (filesForId.length > 1) issues.push(`duplicate page id "${id}": ${filesForId.join(", ")}`);
}
for (const [slug, filesForSlug] of slugs) {
  if (filesForSlug.length > 1) issues.push(`duplicate page slug "${slug}": ${filesForSlug.join(", ")}`);
}

const absolute = /\b(?:завжди|ніколи|обов['’]язково|неможливо|always|never|must|impossible)\b/iu;
for (const { name, content } of pages) {
  content.split("\n").forEach((line, index) => {
    if (absolute.test(line) && !line.includes("mistake(")) {
      issues.push(`${name}:${index + 1}: absolute-language review: ${line.trim()}`);
    }
  });
}

if (issues.length) {
  console.error("Grammar content audit found potential issues:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(`Grammar content audit passed: ${pages.length} modules, ${ids.size} unique page IDs, ${slugs.size} unique slugs.`);
}
