import { Link } from "@tanstack/react-router";
import { TOPIC_BY_ID, topicHref } from "@/content/catalog";
import { ArrowRight } from "lucide-react";

export function RelatedTopics({ ids }: { ids: string[] }) {
  const topics = ids
    .map((id) => TOPIC_BY_ID.get(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  if (!topics.length) return null;
  return (
    <section className="my-10 border-t border-line pt-8">
      <h2 className="mb-4 font-display text-xl text-ink">Пов'язані теми</h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {topics.map((t) => (
          <li key={t.id}>
            <Link
              to={topicHref(t)}
              className="group flex items-start justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3 transition-colors hover:border-azulejo hover:bg-azulejo-soft"
            >
              <span>
                <span className="block font-medium text-ink group-hover:text-azulejo">
                  {t.titleUk}
                </span>
                <span className="mt-0.5 block font-display text-sm text-muted">{t.titlePt}</span>
              </span>
              <ArrowRight
                className="mt-1 size-4 shrink-0 text-muted group-hover:text-azulejo"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
