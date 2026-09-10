import { cn } from "@/lib/cn";
import type { Register, Variety } from "@/content/types";

const VARIETY: Record<string, { label: string; className: string }> = {
  universal: { label: "Спільне", className: "bg-paper-2 text-ink-soft" },
  BR: { label: "PT-BR", className: "bg-br-bg text-br" },
  PT: { label: "PT-PT", className: "bg-pteu-bg text-pteu" },
  AFR: { label: "AFR", className: "bg-afr-bg text-afr" },
  AO: { label: "Ангола", className: "bg-afr-bg text-afr" },
  MZ: { label: "Мозамбік", className: "bg-afr-bg text-afr" },
  CV: { label: "Кабо-Верде", className: "bg-afr-bg text-afr" },
  other: { label: "Інше", className: "bg-paper-2 text-ink-soft" },
};

const REGISTER: Record<string, string> = {
  colloquial: "розмовне",
  formal: "формальне",
  literary: "книжне",
  rare: "рідкісне",
  neutral: "нейтральне",
};

export function VarietyBadge({
  variety,
  register,
}: {
  variety?: Variety;
  register?: Register;
}) {
  const v = variety ? VARIETY[variety] : null;
  if (!v && !register) return null;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {v ? (
        <span
          className={cn(
            "inline-flex rounded-sm px-1.5 py-0.5 font-mono text-[0.68rem] font-medium tracking-wide",
            v.className,
          )}
        >
          {v.label}
        </span>
      ) : null}
      {register && register !== "neutral" ? (
        <span className="inline-flex rounded-sm bg-paper-2 px-1.5 py-0.5 font-mono text-[0.68rem] text-muted">
          {REGISTER[register]}
        </span>
      ) : null}
    </span>
  );
}
