import { createFileRoute } from "@tanstack/react-router";
import { COMPARISON_IDS, TOPIC_BY_ID } from "@/content/catalog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TopicList } from "@/components/topic-list";

export const Route = createFileRoute("/comparisons/")({
  component: ComparisonsIndex,
  head: () => ({
    meta: [
      { title: "Порівняння — Gramática" },
      {
        name: "description",
        content: "Мінімальні пари: ser/estar, por/para, кон'юнктив, PT-BR vs PT-PT.",
      },
    ],
  }),
});

function ComparisonsIndex() {
  const topics = COMPARISON_IDS.map((id) => TOPIC_BY_ID.get(id)).filter(
    (t): t is NonNullable<typeof t> => Boolean(t),
  );
  return (
    <div>
      <Breadcrumbs items={[{ label: "Порівняння" }]} />
      <h1 className="font-display text-4xl text-ink">Порівняння конструкцій</h1>
      <p className="mt-3 max-w-[62ch] text-ink-soft">
        Тут зібрані контрасти, які найчастіше плутають. Кожна сторінка побудована на мінімальних
        парах, а не на гаслах.
      </p>
      <div className="mt-8">
        <TopicList topics={topics} />
      </div>
    </div>
  );
}
