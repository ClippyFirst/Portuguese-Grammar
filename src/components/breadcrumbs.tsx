import { Link } from "@tanstack/react-router";
import { CATEGORY_BY_SLUG } from "@/content/categories";

export type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ href: "/", label: "Головна" }, ...items];
  return (
    <nav aria-label="Навігаційний ланцюжок" className="mb-5">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {all.map((item, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 ? (
                <span aria-hidden="true" className="text-line">
                  /
                </span>
              ) : null}
              {item.href && !last ? (
                <Link
                  to={item.href}
                  className="hover:text-azulejo hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-ink-soft" : undefined} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- utility intentionally co-located with the breadcrumb component
export function categoryCrumb(slug: string): Crumb {
  const cat = CATEGORY_BY_SLUG[slug];
  return {
    href: `/pt/${slug}`,
    label: cat?.titleUk ?? slug,
  };
}
