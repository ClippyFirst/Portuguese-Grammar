import { CATALOG, topicHref, type TopicMeta } from "./catalog";

export type SearchHit = {
  topic: TopicMeta;
  href: string;
  score: number;
  reason: string;
};

function fold(s: string): string {
  return s
    .toLocaleLowerCase("uk")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[-’'`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s: string): string[] {
  return fold(s).split(" ").filter((t) => t.length > 0);
}

export function searchTopics(query: string, limit = 20): SearchHit[] {
  const q = fold(query);
  if (!q) return [];
  const qTokens = tokens(query);
  const hits: SearchHit[] = [];

  for (const topic of CATALOG) {
    const titleUk = fold(topic.titleUk);
    const titlePt = fold(topic.titlePt);
    const titleEn = fold(topic.titleEn);
    const id = fold(topic.id);
    const slug = fold(topic.slug);
    const summary = fold(topic.summary);
    const aliases = topic.aliases.map(fold);

    let score = 0;
    let reason = topic.summary;

    if (titleUk === q || titlePt === q || titleEn === q || id === q) {
      score = 100;
      reason = "Точна назва";
    } else if (titleUk.startsWith(q) || titlePt.startsWith(q) || titleEn.startsWith(q)) {
      score = 88;
      reason = topic.titlePt;
    } else if (titleUk.includes(q) || titlePt.includes(q) || titleEn.includes(q)) {
      score = 76;
      reason = topic.titlePt;
    } else if (aliases.some((a) => a === q || a.startsWith(q))) {
      score = 82;
      reason = aliases.find((a) => a === q || a.startsWith(q)) ?? topic.summary;
    } else if (aliases.some((a) => a.includes(q))) {
      score = 64;
      reason = topic.summary;
    } else if (id.includes(q) || slug.includes(q)) {
      score = 60;
      reason = topic.titlePt;
    } else if (summary.includes(q)) {
      score = 48;
      reason = topic.summary;
    } else {
      const blob = [titleUk, titlePt, titleEn, id, summary, ...aliases].join(" ");
      const matched = qTokens.filter((t) => t.length > 1 && blob.includes(t)).length;
      if (matched === 0) continue;
      score = 30 + matched * 8;
      reason = topic.summary;
    }

    if (topic.depth === "high") score += 4;
    hits.push({ topic, href: topicHref(topic), score, reason });
  }

  hits.sort((a, b) => b.score - a.score || a.topic.titleUk.localeCompare(b.topic.titleUk, "uk"));
  return hits.slice(0, limit);
}
