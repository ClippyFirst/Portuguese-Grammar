export function Prose({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={className ?? "prose-grammar text-[1.02rem] leading-[1.65] text-ink-soft"}
      dangerouslySetInnerHTML={{ __html: toHtml(html) }}
    />
  );
}

/** Lightweight markup: paragraphs split by blank lines; `*em*`; **strong**; `code`; [[id|label]] links are left as text (resolved in renderer). */
export function toHtml(src: string): string {
  const escaped = src
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">");
  const withMarks = escaped
    .replace(/`([^`]+)`/g, "<code class=\"font-mono text-[0.9em] text-azulejo\">$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong class=\"font-semibold text-ink\">$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return withMarks
    .split(/\n{2,}/)
    .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
    .join("");
}
