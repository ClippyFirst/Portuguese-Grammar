import { createFileRoute, notFound } from "@tanstack/react-router";
import { loadPage } from "@/content/load";
import { GrammarArticle } from "@/components/grammar-article";

export const Route = createFileRoute("/regional/$slug")({
  loader: async ({ params }) => {
    const page = await loadPage("regional", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  component: RegionalRoute,
    const { page } = Route.useLoaderData();
    return <GrammarArticle page={page} />;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.page.titleUk} — Gramática` },
          { name: "description", content: loaderData.page.summary },
        ]
      : [],
  }),
});

function RegionalRoute() {
  const { page } = Route.useLoaderData();
  return <GrammarArticle page={page} />;
}
