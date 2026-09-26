import type { GrammarPage } from "./types";
import { TOPIC_BY_ID, TOPIC_BY_PATH, type TopicMeta } from "./catalog";
import { enrichPage, generatedPageFor } from "./generated-pages";

const loaders = import.meta.glob("./pages/*.ts") as Record<string, () => Promise<{ pages: GrammarPage[] }>>;
const cache = new Map<string, GrammarPage[]>();
const byPath = new Map<string, GrammarPage>();
let allLoaded = false;
let allPagesPromise: Promise<GrammarPage[]> | null = null;

const ARRAY_FIELDS = ["aliases", "related", "formulas", "uses", "examples", "markers", "mistakes", "tables"] as const;

function assertGrammarPageShape(page: GrammarPage, source: string): void {
  for (const field of ARRAY_FIELDS) {
    const value = page[field];
    if (value !== undefined && !Array.isArray(value)) {
      throw new TypeError(`Invalid grammar page data in ${source}: ${page.category}/${page.slug} has ${field}=${typeof value}; expected an array.`);
    }
  }
  if (page.uses) {
    for (const [index, use] of page.uses.entries()) {
      if (!use || typeof use !== "object") throw new TypeError(`Invalid grammar page data in ${source}: ${page.category}/${page.slug} has uses[${index}]=${String(use)}; expected a use-case object.`);
      if (use.examples !== undefined && !Array.isArray(use.examples)) throw new TypeError(`Invalid grammar page data in ${source}: ${page.category}/${page.slug} has uses[${index}].examples=${typeof use.examples}; expected an array.`);
    }
  }
  if (!page.category || !page.slug || !page.id) throw new TypeError(`Invalid grammar page metadata in ${source}: id/category/slug are required.`);
}

function sourceScore(key: string): number {
  const file = key.split("/").pop() ?? key;
  let score = 0;
  if (file.includes("deep")) score += 80;
  if (!file.includes("production") && !file.includes("closure") && !file.includes("gaps")) score += 40;
  if (file.includes("production-4")) score += 5;
  else if (file.includes("production-3")) score += 4;
  else if (file.includes("production-2")) score += 3;
  else if (file.includes("production")) score += 2;
  return score;
}

async function loadAllModulePages(): Promise<Array<{ key: string; pages: GrammarPage[] }>> {
  const keys = Object.keys(loaders).sort();
  const modules = await Promise.all(keys.map(async (key) => ({ key, module: await loaders[key]() })));
  return modules.map(({ key, module }) => {
    const pages = module.pages ?? [];
    if (!Array.isArray(pages)) throw new TypeError(`Invalid grammar module ${key}: exported pages must be an array.`);
    const enrichedPages = pages.map(enrichPage);
    for (const page of enrichedPages) assertGrammarPageShape(page, key);
    return { key, pages: enrichedPages };
  });
}

function chooseCanonicalPages(modules: Array<{ key: string; pages: GrammarPage[] }>): GrammarPage[] {
  const candidates = new Map<string, Array<{ key: string; page: GrammarPage }>>();
  for (const { key, pages } of modules) for (const page of pages) {
    const list = candidates.get(page.id) ?? [];
    list.push({ key, page });
    candidates.set(page.id, list);
  }

  const selected: GrammarPage[] = [];
  for (const meta of TOPIC_BY_ID.values()) {
    const options = candidates.get(meta.id) ?? [];
    if (!options.length) {
      const generated = generatedPageFor(meta.category, meta.slug);
      if (generated) selected.push(generated);
      continue;
    }
    options.sort((a, b) => {
      const aExact = a.page.category === meta.category && a.page.slug === meta.slug ? 1 : 0;
      const bExact = b.page.category === meta.category && b.page.slug === meta.slug ? 1 : 0;
      return bExact - aExact || sourceScore(b.key) - sourceScore(a.key) || Number(b.page.depth === "high") - Number(a.page.depth === "high") || a.key.localeCompare(b.key);
    });
    const chosen = options[0].page;
    selected.push({ ...chosen, id: meta.id, category: meta.category, slug: meta.slug });
  }
  return selected;
}

async function loadCanonicalPages(): Promise<GrammarPage[]> {
  if (!allPagesPromise) allPagesPromise = loadAllModulePages().then(chooseCanonicalPages);
  return allPagesPromise;
}

export async function loadCategoryPages(category: string): Promise<GrammarPage[]> {
  if (cache.has(category)) return cache.get(category)!;
  const pages = (await loadCanonicalPages()).filter((page) => page.category === category);
  cache.set(category, pages);
  for (const page of pages) { byPath.set(`${page.category}/${page.slug}`, page); byPath.set(page.id, page); }
  return pages;
}

export async function loadPage(category: string, slug: string): Promise<GrammarPage | null> {
  const direct = byPath.get(`${category}/${slug}`);
  if (direct) return direct;
  const all = await loadCanonicalPages();
  const page = all.find((candidate) => candidate.category === category && candidate.slug === slug) ?? all.find((candidate) => candidate.id === slug) ?? generatedPageFor(category, slug);
  if (page) { byPath.set(`${page.category}/${page.slug}`, page); byPath.set(page.id, page); }
  return page;
}

export async function loadPageById(id: string): Promise<GrammarPage | null> {
  const cached = byPath.get(id);
  if (cached) return cached;
  const meta = [...TOPIC_BY_PATH.values()].find((topic: TopicMeta) => topic.id === id);
  if (!meta) return null;
  return loadPage(meta.category, meta.slug);
}

export async function loadAllPages(): Promise<GrammarPage[]> {
  if (allLoaded) return [...byPath.values()].filter((page) => page.slug);
  const pages = await loadCanonicalPages();
  allLoaded = true;
  for (const page of pages) { byPath.set(`${page.category}/${page.slug}`, page); byPath.set(page.id, page); }
  return [...pages];
}