import type { TopicMeta } from "@/content/types";
import { cn } from "@/lib/cn";
import { TopicNavLink } from "./topic-nav-link";

export function TopicList({
  topics,
  columns = true,
}: {
  topics: TopicMeta[];
  columns?: boolean;
}) {
  return (
    <ul className={cn("grid gap-2", columns && "sm:grid-cols-2")}>
      {topics.map((t) => (
        <li key={t.id}>
          <TopicNavLink
            topic={t}
            className="block rounded-lg border border-line bg-surface px-4 py-3 transition-colors hover:border-azulejo hover:bg-azulejo-soft"
          >
            <span className="block font-medium text-ink">{t.titleUk}</span>
            <span className="mt-0.5 block font-display text-sm text-azulejo">{t.titlePt}</span>
            <span className="mt-1 block text-sm text-muted">{t.summary}</span>
          </TopicNavLink>
        </li>
      ))}
    </ul>
  );
}
