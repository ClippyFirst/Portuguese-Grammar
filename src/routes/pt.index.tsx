import { createFileRoute } from "@tanstack/react-router";
import { CategoryNavLink, TopicNavLink } from "@/components/topic-nav-link";
import { CATEGORIES, GROUP_LABELS } from "@/content/categories";
import { CATALOG, topicsInCategory } from "@/content/catalog";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const Route = createFileRoute("/pt/")({
  component: GrammarIndex,
  head: () => ({
    meta: [
      { title: "Граматика — Gramática" },
      { name: "description", content: "Повний перелік тем португальської граматики українською." },
    ],
  }),
});

function GrammarIndex() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Граматика" }]} />
      <h1 className="font-display text-4xl text-ink">Граматика</h1>
      <p className="mt-3 max-w-[62ch] text-ink-soft">
        {CATALOG.length} довідкових статей. Оберіть розділ або скористайтеся пошуком.
      </p>
      {(["core", "verb", "syntax", "ref"] as const).map((group) => (
        <section key={group} className="mt-10">
          <h2 className="font-display text-2xl text-ink">{GROUP_LABELS[group]}</h2>
          <div className="mt-4 flex flex-col gap-8">
            {CATEGORIES.filter((c) => c.group === group).map((c) => {
              const topics = topicsInCategory(c.slug);
              return (
                <div key={c.id}>
                  <div className="mb-3 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl">
                      <CategoryNavLink slug={c.slug} className="text-azulejo hover:underline">
                        {c.titleUk}
                      </CategoryNavLink>
                    </h3>
                    <span className="text-xs text-muted">{topics.length}</span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <li key={t.id}>
                        <TopicNavLink
                          topic={t}
                          className="inline-flex rounded-sm bg-surface px-2.5 py-1 text-sm text-ink-soft ring-1 ring-line hover:bg-azulejo-soft hover:text-azulejo"
                        >
                          {t.titlePt}
                        </TopicNavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
