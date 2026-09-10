import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TOPIC_BY_ID, topicHref } from "@/content/catalog";

const TABLE_LINKS = [
  "verb-system",
  "presente",
  "subjunctive-overview",
  "futuro-subjuntivo",
  "personal-infinitive",
  "imperative-affirmative",
  "clitic-pronouns",
  "clitic-combinations",
  "personal-pronouns",
  "articles-definite",
  "contractions-overview",
  "crase",
  "demonstratives",
  "possessives",
  "irregular-verbs",
  "pt-br-pt-pt",
] as const;

export const Route = createFileRoute("/tables/")({
  component: TablesIndex,
  head: () => ({
    meta: [
      { title: "Таблиці — Gramática" },
      { name: "description", content: "Зведення дієвідмін, займенників, артиклів і контракцій." },
    ],
  }),
});

function TablesIndex() {
  const topics = TABLE_LINKS.map((id) => TOPIC_BY_ID.get(id)).filter(Boolean);
  return (
    <div>
      <Breadcrumbs items={[{ label: "Таблиці" }]} />
      <h1 className="font-display text-4xl text-ink">Таблиці</h1>
      <p className="mt-3 max-w-[62ch] text-ink-soft">
        Швидкий доступ до парадигм і зведень. Повні пояснення — на сторінках відповідних тем.
      </p>
      <ul className="mt-8 grid gap-2 sm:grid-cols-2">
        {topics.map((t) =>
          t ? (
            <li key={t.id}>
              <Link
                to={topicHref(t)}
                className="block rounded-lg border border-line bg-surface px-4 py-3 hover:border-azulejo hover:bg-azulejo-soft"
              >
                <span className="font-medium text-ink">{t.titleUk}</span>
                <span className="mt-0.5 block font-display text-sm text-azulejo">{t.titlePt}</span>
              </Link>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
}
