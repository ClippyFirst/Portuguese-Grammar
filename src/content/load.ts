import type { GrammarPage } from "./types";
import { TOPIC_BY_PATH, type TopicMeta } from "./catalog";
import { generatedPageFor } from "./generated-pages";

const loaders = import.meta.glob("./pages/*.ts") as Record<
  string,
  () => Promise<{ pages: GrammarPage[] }>
>;

const cache = new Map<string, GrammarPage[]>();
const byPath = new Map<string, GrammarPage>();
let allLoaded = false;

const ARRAY_FIELDS = [
  "aliases",
  "related",
  "formulas",
  "uses",
  "examples",
  "markers",
  "mistakes",
  "tables",
] as const;

function assertGrammarPageShape(page: GrammarPage, source: string): void {
  for (const field of ARRAY_FIELDS) {
    const value = page[field];
    if (value !== undefined && !Array.isArray(value)) {
      throw new TypeError(
        `Invalid grammar page data in ${source}: ${page.category}/${page.slug} has ${field}=${typeof value}; expected an array.`,
      );
    }
  }

  if (!page.category || !page.slug || !page.id) {
    throw new TypeError(
      `Invalid grammar page metadata in ${source}: id/category/slug are required.`,
    );
  }
}

function loaderKeys(category: string): string[] {
  const exact = `./pages/${category}.ts`;
  const prefix = `./pages/${category}-`;
  return Object.keys(loaders).filter((k) => k === exact || k.startsWith(prefix));
}

export async function loadCategoryPages(category: string): Promise<GrammarPage[]> {
  if (cache.has(category)) return cache.get(category)!;
  const keys = loaderKeys(category);
  if (!keys.length) {
    cache.set(category, []);
    return [];
  }
  const modules = await Promise.all(keys.map((key) => loaders[key]()));
  const pages = modules
    .flatMap((mod, index) => {
      const modulePages = mod.pages ?? [];
      if (!Array.isArray(modulePages)) {
        throw new TypeError(
          `Invalid grammar module ${keys[index]}: exported pages must be an array.`,
        );
      }
      return modulePages;
    })
    .filter((p) => p.category === category);
  for (const page of pages) {
    assertGrammarPageShape(page, "content loader");
  }
  cache.set(category, pages);
  for (const p of pages) {
    byPath.set(`${p.category}/${p.slug}`, p);
    byPath.set(p.id, p);
  }
  return pages;
}

export async function loadPage(
  category: string,
  slug: string,
): Promise<GrammarPage | null> {
  const direct = byPath.get(`${category}/${slug}`);
  if (direct) return direct;
  const pages = await loadCategoryPages(category);
  return pages.find((p) => p.slug === slug || p.id === slug) ?? generatedPageFor(category, slug);
}

export async function loadPageById(id: string): Promise<GrammarPage | null> {
  const cached = byPath.get(id);
  if (cached) return cached;
  const meta = [...TOPIC_BY_PATH.values()].find((t: TopicMeta) => t.id === id);
  if (!meta) return null;
  return loadPage(meta.category, meta.slug);
}

export async function loadAllPages(): Promise<GrammarPage[]> {
  if (allLoaded) return [...byPath.values()].filter((p) => p.slug);
  const cats = new Set([...TOPIC_BY_PATH.values()].map((topic) => topic.category));
  await Promise.all([...cats].map((c) => loadCategoryPages(c)));
  allLoaded = true;
  const seen = new Set<string>();
  const out: GrammarPage[] = [];
  for (const p of byPath.values()) {
    const key = `${p.category}/${p.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}
