import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { searchTopics } from "@/content/search";
import { Breadcrumbs } from "@/components/breadcrumbs";

type SearchParams = { q?: string };

export const Route = createFileRoute("/search")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    q: typeof s.q === "string" ? s.q : "",
  }),
  component: SearchPage,
  head: ({ match }) => {
    const q = (match.search as SearchParams).q ?? "";
    return {
      meta: [
        { title: q ? `Пошук: ${q} — Gramática` : "Пошук — Gramática" },
        { name: "description", content: "Пошук граматичних тем українською, португальською та англійською." },
      ],
    };
  },
});

function SearchPage() {
  const { q = "" } = Route.useSearch();
  const hits = useMemo(() => searchTopics(q, 30), [q]);

  return (
    <div>
      <Breadcrumbs items={[{ label: "Пошук" }]} />
      <h1 className="font-display text-4xl text-ink">Пошук</h1>
      <form className="mt-6 max-w-xl">
        <label htmlFor="q" className="sr-only">
          Запит
        </label>
        <input
          id="q"
          name="q"
          defaultValue={q}
          placeholder="subjuntivo, crase, бути, gostar…"
          className="h-12 w-full rounded-lg border border-line bg-surface px-4 text-base outline-none focus:border-azulejo"
        />
      </form>
      {q ? (
        <p className="mt-4 text-sm text-muted">
          {hits.length ? `${hits.length} результатів` : "Нічого не знайдено"}
        </p>
      ) : (
        <p className="mt-4 text-sm text-muted">
          Можна шукати за українською назвою, португальським терміном, формою (à, lhe, tenho feito)
          або англійським терміном (subjunctive, clitics).
        </p>
      )}
      <ul className="mt-6 flex flex-col gap-2">
        {hits.map((h) => (
          <li key={h.topic.id}>
            <Link
              to={h.href}
              className="block rounded-lg border border-line bg-surface px-4 py-3 hover:border-azulejo hover:bg-azulejo-soft"
            >
              <span className="font-medium text-ink">{h.topic.titleUk}</span>
              <span className="ml-2 font-display text-sm text-azulejo">{h.topic.titlePt}</span>
              <span className="mt-1 block text-sm text-muted">{h.topic.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
