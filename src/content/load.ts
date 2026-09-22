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

function loaderKey(category: string): string | undefined {
  const exact = `./pages/${category}.ts`;
  if (exact in loaders) return exact;
  return Object.keys(loaders).find((k) => k.endsWith(`/${category}.ts`));
}

export async function loadCategoryPages(category: string): Promise<GrammarPage[]> {
  if (cache.has(category)) return cache.get(category)!;
  const key = loaderKey(category);
  if (!key) {
    cache.set(category, []);
    return [];
  }
  const mod = await loaders[key]();
  const pages = mod.pages ?? [];
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
  const cats = new Set(
    Object.keys(loaders).map((k) => k.replace("./pages/", "").replace(".ts", "")),
  );
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
