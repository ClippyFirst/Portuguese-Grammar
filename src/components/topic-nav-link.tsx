import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { TopicMeta } from "@/content/types";

export function TopicNavLink({
  topic,
  className,
  children,
}: {
  topic: TopicMeta;
  className?: string;
  children: ReactNode;
}) {
  if (topic.category === "comparisons") {
    return (
      <Link to="/comparisons/$slug" params={{ slug: topic.slug }} className={className}>
        {children}
      </Link>
    );
  }
  if (topic.category === "regional") {
    return (
      <Link to="/regional/$slug" params={{ slug: topic.slug }} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link
      to="/pt/$category/$slug"
      params={{ category: topic.category, slug: topic.slug }}
      className={className}
    >
      {children}
    </Link>
  );
}

export function CategoryNavLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to="/pt/$category" params={{ category: slug }} className={className}>
      {children}
    </Link>
  );
}
