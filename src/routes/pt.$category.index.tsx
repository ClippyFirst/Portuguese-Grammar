import { createFileRoute, notFound } from "@tanstack/react-router";
import { CATEGORY_BY_SLUG } from "@/content/categories";
import { topicsInCategory } from "@/content/catalog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TopicList } from "@/components/topic-list";

export const Route = createFileRoute("/pt/$category/")({
  loader: ({ params }) => {
    const cat = CATEGORY_BY_SLUG[params.category];
    if (!cat) throw notFound();
    return { cat, topics: topicsInCategory(params.category) };
  },
  component: CategoryPage,
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cat.titleUk} — Gramática` },
          { name: "description", content: loaderData.cat.description },
        ]
      : [],
  }),
});

function CategoryPage() {
  const { cat, topics } = Route.useLoaderData();
  return (
    <div>
      <Breadcrumbs items={[{ href: "/pt", label: "Граматика" }, { label: cat.titleUk }]} />
      <p className="font-display text-sm text-azulejo">{cat.titlePt}</p>
      <h1 className="mt-1 font-display text-4xl text-ink">{cat.titleUk}</h1>
      <p className="mt-3 max-w-[62ch] text-ink-soft">{cat.description}</p>
      <div className="mt-8">
        <TopicList topics={topics} />
      </div>
    </div>
  );
}
