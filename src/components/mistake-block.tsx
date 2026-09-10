import type { Mistake } from "@/content/types";

export function MistakeBlock({ mistakes }: { mistakes: Mistake[] }) {
  if (!mistakes.length) return null;
  return (
    <section className="my-8">
      <h2 className="mb-3 font-display text-xl text-ink">Типові помилки україномовних</h2>
      <div className="flex flex-col gap-3">
        {mistakes.map((m, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-line bg-surface">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="bg-wrong-bg px-4 py-3">
                <div className="mb-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-wrong">
                  Неправильно
                </div>
                <p className="font-display text-ink">{m.wrong}</p>
              </div>
              <div className="bg-correct-bg px-4 py-3">
                <div className="mb-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-correct">
                  Правильно
                </div>
                <p className="font-display text-ink">{m.right}</p>
              </div>
            </div>
            <p className="px-4 py-3 text-sm text-ink-soft">{m.why}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
