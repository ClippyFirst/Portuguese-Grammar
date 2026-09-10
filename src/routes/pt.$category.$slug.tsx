import { createFileRoute, notFound } from "@tanstack/react-router";
import { loadPage } from "@/content/load";
import { GrammarArticle } from "@/components/grammar-article";

export const Route = createFileRoute("/pt/$category/$slug")({
  loader: async ({ params }) => {
    const page = await loadPage(params.category, params.slug);
    if (!page) throw notFound();
    return { page };
  },
  component: TopicRoute,
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.page.titleUk} — Gramática` },
          { name: "description", content: loaderData.page.summary },
        ]
      : [],
  }),
});

function TopicRoute() {
  const { page } = Route.useLoaderData();
  return <GrammarArticle page={page} />;
}
