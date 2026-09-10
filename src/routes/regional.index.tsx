import { createFileRoute } from "@tanstack/react-router";
import { topicsInCategory } from "@/content/catalog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TopicList } from "@/components/topic-list";

export const Route = createFileRoute("/regional/")({
  component: RegionalIndex,
  head: () => ({
    meta: [
      { title: "Варіанти португальської — Gramática" },
      {
        name: "description",
        content: "Плурицентрична португальська: PT-BR, PT-PT, Ангола, Мозамбік та інші.",
      },
    ],
  }),
});

function RegionalIndex() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Варіанти" }]} />
      <h1 className="font-display text-4xl text-ink">Варіанти португальської</h1>
      <p className="mt-3 max-w-[62ch] text-ink-soft">
        Бразильська та європейська португальська — головні референсні норми цього довідника. Жодна
        не подається як «єдино правильна». Африканські різновиди згадані там, де є стала граматична
        специфіка.
      </p>
      <div className="mt-8">
        <TopicList topics={topicsInCategory("regional")} />
      </div>
    </div>
  );
}
