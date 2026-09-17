import type { Formula } from "@/content/types";

const KNOWN = new Set([
  "S",
  "V",
  "INF",
  "GER",
  "NEG",
  "CL",
  "PREP",
  "ART",
  "AUX",
  "P.P.",
  "PP",
]);

function tokenize(pattern: string) {
  return pattern.split(/(\s|\+)/).filter((p) => p.length > 0);
}

function FormulaLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
      <div className="shrink-0 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted sm:w-28">
        {label}
      </div>
      <div className="font-mono text-[0.92rem] leading-relaxed text-ink">
        {tokenize(value).map((part, i) => {
          if (part === "+" || part === " ") {
            return (
              <span key={i} className="px-0.5 text-muted">
                {part === "+" ? " + " : " "}
              </span>
            );
          }
          if (KNOWN.has(part) || /^[A-Z.]{1,6}$/.test(part)) {
            return (
              <span key={i} className="token">
                {part}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </div>
    </div>
  );
}

export function FormulaBlock({ formulas }: { formulas: Formula[] }) {
  return (
    <section
      aria-labelledby="formula-heading"
      className="my-8 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6"
    >
      <h2
        id="formula-heading"
        className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-azulejo"
      >
        Швидка довідка
      </h2>
      <div className="flex flex-col gap-4">
        {formulas.map((f, i) => (
          <div key={i} className="flex flex-col gap-2">
            {f.label ? (
              <div className="text-sm font-medium text-ink-soft">{f.label}</div>
            ) : null}
            {f.pattern ? <FormulaLine label="Ствердження" value={f.pattern} /> : null}
            {f.negative ? <FormulaLine label="Заперечення" value={f.negative} /> : null}
            {f.question ? <FormulaLine label="Питання" value={f.question} /> : null}
            {f.br ? <FormulaLine label="PT-BR" value={f.br} /> : null}
            {f.ptEu ? <FormulaLine label="PT-PT" value={f.ptEu} /> : null}
            {f.note ? <p className="mt-1 text-sm text-muted">{f.note}</p> : null}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">
        <span className="token">S</span> підмет · <span className="token">V</span> дієслово ·{" "}
        <span className="token">INF</span> інфінітив · <span className="token">GER</span> gerúndio ·{" "}
        <span className="token">CL</span> клитик · <span className="token">NEG</span> заперечення
      </p>
    </section>
  );
}
