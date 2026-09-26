import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { TOP_NAV } from "@/content/categories";
import { cn } from "@/lib/cn";
import { SearchPalette, SearchTrigger } from "./search-palette";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    // Route changes must close the transient mobile drawer; this is intentional
    // state synchronization with the router rather than derived render state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable;
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setSearch(true);
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearch(true);
      }
      if (e.key === "Escape") {
        setSearch(false);
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open || search ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, search]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="h-[5px] bg-azulejo" aria-hidden />
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-baseline gap-2 no-underline">
          <span className="font-display text-xl font-semibold tracking-tight text-azulejo">
            Gramática
          </span>
          <span className="hidden truncate text-xs text-muted sm:inline">для україномовних</span>
        </Link>
        <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Головне меню">
          {TOP_NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-azulejo-soft text-azulejo" : "text-ink-soft hover:bg-paper-2 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <SearchTrigger onOpen={() => setSearch(true)} />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-surface text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Закрити меню" : "Відкрити меню"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper px-4 py-3 md:hidden">
          <nav className="flex flex-col" aria-label="Мобільне меню">
            {TOP_NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-11 items-center border-b border-line text-base font-medium text-ink last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/search"
              className="flex min-h-11 items-center text-base font-medium text-azulejo"
            >
              Пошук
            </Link>
          </nav>
        </div>
      ) : null}
      <SearchPalette open={search} onClose={() => setSearch(false)} />
    </header>
  );
}
