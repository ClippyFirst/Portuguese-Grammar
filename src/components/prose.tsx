import { TOPIC_BY_ID, topicHref } from "@/content/catalog";

export function Prose({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={className ?? "prose-grammar text-[1.02rem] leading-[1.65] text-ink-soft"}
      dangerouslySetInnerHTML={{ __html: toHtml(html) }}
    />
  );
}

function wikiHref(id: string): string | null {
  const topic = TOPIC_BY_ID.get(id);
  return topic ? topicHref(topic) : null;
}

function wikiAnchor(id: string, label: string): string {
  const href = wikiHref(id);
  if (!href) {
    return `<span class="font-medium text-ink">${label}</span>`;
  }
  return `<a class="text-azulejo underline decoration-azulejo/30 underline-offset-2 hover:decoration-azulejo" href="${href}">${label}</a>`;
}

/** Lightweight markup: paragraphs split by blank lines; `*em*`; **strong**; `code`; [[id|label]] wiki-links. */
export function toHtml(src: string): string {
  const escaped = src
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">");
  const withMarks = escaped
    .replace(/`([^`]+)`/g, '<code class="font-mono text-[0.9em] text-azulejo">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-ink">$1</strong>')
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_m, id: string, label: string) =>
      wikiAnchor(id, label),
    )
    .replace(/\[\[([^\]]+)\]\]/g, (_m, id: string) => wikiAnchor(id, id));
  return withMarks
    .split(/\n{2,}/)
    .map((p) => {
      const lines = p.split("\n");
      const isList = lines.every((l) => /^\s*[-•]\s+/.test(l) || l.trim() === "");
      if (isList) {
        const items = lines
          .filter((l) => l.trim())
          .map((l) => `<li>${l.replace(/^\s*[-•]\s+/, "")}</li>`)
          .join("");
        return `<ul class="my-2 list-disc space-y-1 pl-5">${items}</ul>`;
      }
      return `<p>${p.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("");
}
