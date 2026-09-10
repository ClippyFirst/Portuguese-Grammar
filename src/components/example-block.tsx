import type { Example } from "@/content/types";
import { VarietyBadge } from "./variety-badge";

export function ExampleCard({ example }: { example: Example }) {
  return (
    <figure className="rounded-lg border border-line bg-surface px-4 py-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <blockquote className="font-display text-[1.05rem] leading-snug text-ink">
          {example.pt}
        </blockquote>
        <VarietyBadge variety={example.variety} register={example.register} />
      </div>
      <figcaption className="mt-1.5 text-sm text-muted">{example.uk}</figcaption>
      {example.annotation ? (
        <p className="mt-2 font-mono text-xs text-azulejo">{example.annotation}</p>
      ) : null}
      {example.note ? <p className="mt-1 text-sm text-ink-soft">{example.note}</p> : null}
    </figure>
  );
}

export function ExampleList({
  examples,
  title = "Приклади",
}: {
  examples: Example[];
  title?: string;
}) {
  if (!examples.length) return null;
  return (
    <section className="my-8">
      <h2 className="mb-3 font-display text-xl text-ink">{title}</h2>
      <div className="flex flex-col gap-2.5">
        {examples.map((ex, i) => (
          <ExampleCard key={i} example={ex} />
        ))}
      </div>
    </section>
  );
}
