import { createFileRoute, notFound } from "@tanstack/react-router";
import { CATALOG } from "@/content/catalog";
import { loadPage } from "@/content/load";
import { GrammarArticle } from "@/components/grammar-article";

export const Route = createFileRoute("/comparisons/$slug")({
  loader: async ({ params }) => {
    const meta =
      CATALOG.find((t) => t.category === "comparisons" && t.slug === params.slug) ??
      CATALOG.find((t) => t.slug === params.slug || t.id === params.slug);
    if (!meta) throw notFound();
    const page = await loadPage(meta.category, meta.slug);
    if (!page) throw notFound();
    return { page };
  },
  component: ComparisonRoute,
    const { page } = Route.useLoaderData();
    return <GrammarArticle page={page} />;
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.page.titleUk} — Gramática` },
          { name: "description", content: loaderData.page.summary },
        ]
      : [],
  }),
});

function ComparisonRoute() {
  const { page } = Route.useLoaderData();
  return <GrammarArticle page={page} />;
}
