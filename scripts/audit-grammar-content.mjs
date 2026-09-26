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

function splitTopLevelArguments(source) {
  const args = [];
  let start = 0;
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === "(" || char === "[" || char === "{") {
      depth += 1;
      continue;
    }
    if (char === ")" || char === "]" || char === "}") {
      depth -= 1;
      continue;
    }

    if (char === "," && depth === 0) {
      args.push(source.slice(start, i).trim());
      start = i + 1;
    }
  }

  args.push(source.slice(start).trim());
  return args;
}

function auditCompactPageConstructors(content, file) {
  const hasTeachingNoteHelper =
    /const\s+p\s*=\s*\([^)]*\bteachingNote:string\b[^)]*\):GrammarPage/u.test(
      content,
    );
  if (!hasTeachingNoteHelper) return;

  for (const match of content.matchAll(/\bp\(/gu)) {
    const open = match.index + match[0].length;
    let depth = 1;
    let quote = null;
    let escaped = false;
    let close = -1;

    for (let i = open; i < content.length; i += 1) {
      const char = content[i];

      if (quote) {
        if (escaped) {
          escaped = false;
        } else if (char === "\\") {
          escaped = true;
        } else if (char === quote) {
          quote = null;
        }
        continue;
      }

      if (char === '"' || char === "'" || char === "`") {
        quote = char;
        continue;
      }

      if (char === "(") depth += 1;
      if (char === ")") {
        depth -= 1;
        if (depth === 0) {
          close = i;
          break;
        }
      }
    }

    if (close < 0) {
      issues.push(`unterminated compact page constructor in ${file}`);
      continue;
    }

    const args = splitTopLevelArguments(content.slice(open, close));
    if (args.length !== 10) {
      issues.push(
        `compact page constructor in ${file} has ${args.length} arguments; expected 10 (including teaching note)`,
      );
      continue;
    }

    if (!/^["'`]/u.test(args[7])) {
      issues.push(
        `compact page constructor in ${file} has invalid teaching-note argument at position 8`,
      );
    }
    if (!/^\s*\[/u.test(args[8])) {
      issues.push(
        `compact page constructor in ${file} has non-array examples argument at position 9`,
      );
    }
    if (!/^\s*\[/u.test(args[9])) {
      issues.push(
        `compact page constructor in ${file} has non-array related argument at position 10`,
      );
    }
  }
}

function registerPage({ id, slug, category, file }) {
  if (!id || !slug || !category) return;
  add(ids, id, file);
  add(paths, `${category}/${slug}`, file);
  pageMeta.set(id, { file, slug, category });
}

function extractPageMetadata(content, file) {
  const metadata = [];
  const seen = new Set();

  /*
   * Page modules are intentionally allowed to use several representations:
   *   - { id, slug, category, ... }
   *   - page({ id, slug, category, ... })
   *   - p("id", "slug", ..., ...)
   *
   * Do not parse object nesting by indentation. Examples/tables contain nested
   * objects and made the previous line-based parser split pages incorrectly.
   * Metadata is declared near the beginning of every page, so extracting a
   * bounded window after each id is both simpler and resilient to formatting.
   */
  for (const match of content.matchAll(/\bid:\s*"([^"]+)"/gu)) {
    const id = match[1];
    if (seen.has(id)) continue;

    const window = content.slice(match.index ?? 0, (match.index ?? 0) + 1800);
    const slug = window.match(/\bslug:\s*"([^"]+)"/u)?.[1];
    const category = window.match(/\bcategory:\s*"([^"]+)"/u)?.[1];
    if (!slug || !category) continue;

    seen.add(id);
    metadata.push({ id, slug, category, file });
  }

  for (const match of content.matchAll(
    /\bp\(\s*"([^"]+)"\s*,\s*"([^"]+)"/gu,
  )) {
    const id = match[1];
    if (seen.has(id)) continue;
    seen.add(id);
    metadata.push({
      id,
      slug: match[2],
      category: content.match(/\bcategory:\s*"([^"]+)"/u)?.[1] ?? "",
      file,
    });
  }

  return metadata;
}

for (const { name, content } of pages) {
  for (const meta of extractPageMetadata(content, name)) {
    registerPage(meta);
  }
}
for (const [id, filesForId] of ids) {
  if (filesForId.length > 1) {
    warnings.push(`duplicate page id "${id}": ${filesForId.join(", ")}`);
  }
}
for (const [topicPath, filesForPath] of paths) {
  if (filesForPath.length > 1) {
    warnings.push(`duplicate category/slug "${topicPath}": ${filesForPath.join(", ")}`);
  }
}

const catalogRows = new Map();
for (const line of catalog.split("\n")) {
  const match = line.match(
    /^\s*\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",.*?,\s*"(high|medium|short)"\],?\s*$/u,
  );
  if (!match) continue;
  catalogRows.set(match[1], {
    category: match[2],
    slug: match[3],
    depth: match[4],
  });
}

for (const [id, meta] of pageMeta) {
  const row = catalogRows.get(id);
  if (!row) {
    warnings.push(`page missing from catalog: ${id} (${meta.file})`);
    continue;
  }
  if (row.category !== meta.category) {
    warnings.push(
      `category mismatch for "${id}": page=${meta.category}, catalog=${row.category}`,
    );
  }
  if (row.slug !== meta.slug) {
    warnings.push(`slug mismatch for "${id}": page=${meta.slug}, catalog=${row.slug}`);
  }
}

function isResolvablePageId(id) {
  if (pageMeta.has(id)) return true;
  const row = catalogRows.get(id);
  // Most catalog topics have an explicit module OR a generated fallback page.
  // Comparisons and regional topics use dedicated loaders and are excluded from
  // generated-pages.ts, so they still require an explicit page/module.
  return Boolean(row && row.category !== "comparisons" && row.category !== "regional");
}

for (const [id, row] of catalogRows) {
  if (!isResolvablePageId(id)) {
    issues.push(`catalog entry has no resolvable page: ${id} (${row.category}/${row.slug})`);
  }
}

for (const [id, row] of catalogRows) {
  if (row.depth !== "high") continue;
  const meta = pageMeta.get(id);
  if (!meta) continue;
  const source = pages.find((p) => p.name === meta.file)?.content ?? "";
  const start = source.indexOf(`id: "${id}"`);
  const next = source.indexOf('id: "', start + 1);
  const block = start >= 0 ? source.slice(start, next >= 0 ? next : undefined) : "";

  // Compact `p(...)` pages do not expose named `examples:` / `uses:`
  // properties. Their page payload still contains the examples array, so
  // inspect the complete helper call when the object-field lookup is absent.
  const compactStart = source.indexOf(`p("${id}"`);
  const compactNext = compactStart >= 0
    ? source.indexOf('p("', compactStart + 1)
    : -1;
  const compactBlock =
    compactStart >= 0
      ? source.slice(compactStart, compactNext >= 0 ? compactNext : undefined)
      : "";

  const hasExamplesOrUses =
    /\b(?:examples|uses):/u.test(block) ||
    /\[\s*\{\s*pt:/u.test(compactBlock);

  if (!hasExamplesOrUses) {
    warnings.push(
      `high-depth topic without examples/uses field: ${id} (${meta.file})`,
    );
  }
}

for (const { name, content } of pages) {
  auditCompactPageConstructors(content, name);

  for (const match of content.matchAll(
    /related:\s*\[([\s\S]*?)\]/g,
  )) {
    for (const ref of match[1].matchAll(/"([^"]+)"/g)) {
      if (!isResolvablePageId(ref[1])) {
        warnings.push(`broken related reference "${ref[1]}" in ${name}`);
      }
    }
  }

  // Compact p(...) pages store related IDs in the final array argument.
  // Keep this check separate from metadata extraction so it validates every
  // link the UI can render, regardless of the page declaration style.
  for (const call of content.matchAll(
    /\bp\([\s\S]*?,\s*\[([^\]]*)\]\s*\)/gu,
  )) {
    for (const ref of call[1].matchAll(/"([^"]+)"/gu)) {
      if (!isResolvablePageId(ref[1])) {
        issues.push(`broken related reference "${ref[1]}" in ${name}`);
      }
    }
  }
}

const absolute =
  /\b(?:завжди|ніколи|обов['’]язково|неможливо|always|never|must|impossible)\b/iu;
const proseFields =
  /^(?:\s*)(?:intro|formation|exceptions|ukrainian|regional|brPt|body|note):/u;
const highRisk = /(?:crase|infinitive|moods|clitics|se|questions|articles|agreement|valency)/iu;

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
/*
 * Do not flag every example in a "high-risk" module merely because it lacks
 * variety/register metadata. Most neutral examples do not need an annotation,
 * and the previous heuristic generated hundreds of low-value warnings.
 *
 * Regional/register metadata remains part of the content model and should be
 * added where the example itself depends on a particular variety or register.
 */
void highRisk;

if (warnings.length) {
  console.warn(`Grammar content audit warnings: ${warnings.length}`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}
