import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { searchTopics } from "@/content/search";
import { cn } from "@/lib/cn";

export function SearchTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="inline-flex h-11 min-w-11 items-center gap-2 rounded-md border border-line bg-surface px-3 text-sm text-muted transition-colors hover:border-azulejo hover:text-azulejo"
      aria-label="Відкрити пошук"
    >
      <Search className="size-4" aria-hidden />
      <span className="hidden sm:inline">Пошук</span>
      <kbd className="ml-2 hidden rounded-sm bg-paper-2 px-1.5 py-0.5 font-mono text-[0.65rem] text-muted lg:inline">
        /
      </kbd>
    </button>
  );
}

export function SearchPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const hits = useMemo(() => searchTopics(q, 12), [q]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  if (!open) return null;

  function go(href: string) {
    onClose();
    void navigate({ to: href });
  }

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Пошук граматики">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Закрити пошук"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-[10vh] w-[min(40rem,calc(100%-1.5rem))] rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <div className="flex items-center gap-2 border-b border-line px-3">
          <Search className="size-4 text-muted" aria-hidden />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose();
              if (e.key === "Enter" && hits[0]) go(hits[0].href);
            }}
            aria-label="Пошук граматичної теми"
            placeholder="ser, кон'юнктив, à, особовий інфінітив…"
            className="h-12 w-full bg-transparent text-base text-ink outline-none placeholder:text-muted"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center text-muted hover:text-ink"
            aria-label="Закрити"
          >
            <X className="size-4" />
          </button>
        </div>
        <ul className="max-h-[min(24rem,50vh)] overflow-y-auto p-2">
          {q && hits.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted">Нічого не знайдено</li>
          ) : null}
          {hits.map((h, i) => (
            <li key={h.topic.id}>
              <button
                type="button"
                onClick={() => go(h.href)}
                className={cn(
                  "flex w-full flex-col items-start rounded-md px-3 py-2.5 text-left hover:bg-azulejo-soft",
                  i === 0 && q ? "bg-azulejo-soft" : "",
                )}
              >
                <span className="font-medium text-ink">{h.topic.titleUk}</span>
                <span className="text-sm text-muted">
                  {h.topic.titlePt}
                  {h.reason ? ` · ${h.reason}` : ""}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="border-t border-line px-4 py-2 text-xs text-muted">
          Шукайте українською, португальською або англійським терміном.
        </p>
      </div>
    </div>
  );
}
