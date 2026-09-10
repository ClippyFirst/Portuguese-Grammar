import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GitCompare, Globe, Search } from "lucide-react";
import { CATEGORIES, GROUP_LABELS } from "@/content/categories";
import { CATALOG, ESSENTIAL_IDS, TOPIC_BY_ID, topicHref } from "@/content/catalog";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gramática — португальська граматика українською" },
      {
        name: "description",
        content:
          "Швидкий довідник португальської граматики для україномовних: формули, приклади, PT-BR і PT-PT, типові помилки.",
      },
    ],
  }),
});

function Home() {
  const essential = ESSENTIAL_IDS.map((id) => TOPIC_BY_ID.get(id)).filter(Boolean);

  return (
    <div>
      <section className="max-w-3xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-azulejo">
          Довідник, не курс
        </p>
        <h1 className="mt-3 font-display text-[2.2rem] leading-[1.15] text-ink sm:text-5xl">
          Португальська граматика для україномовних
        </h1>
        <p className="mt-4 max-w-[62ch] text-lg text-ink-soft">
          Знайдіть конструкцію, побачте формулу, порівняйте PT-BR і PT-PT, зрозумійте, чому
          українська калька тут не працює.
        </p>
        <form action="/search" className="mt-8">
          <label htmlFor="home-search" className="sr-only">
            Пошук граматичної теми
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <input
                id="home-search"
                type="search"
                name="q"
                placeholder="ser, crase, особовий інфінітив, quando eu for…"
                className="h-12 w-full rounded-lg border border-line bg-surface pl-10 pr-3 text-base text-ink outline-none placeholder:text-muted focus:border-azulejo"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-azulejo px-5 font-medium text-surface transition-colors hover:bg-azulejo-hover"
            >
              Шукати
            </button>
          </div>
        </form>
        <p className="mt-3 text-sm text-muted">{CATALOG.length} тем · PT-BR і PT-PT як рівноправні норми</p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-ink">Ключові теми</h2>
        <p className="mt-1 text-sm text-muted">Те, що україномовні шукають найчастіше.</p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {essential.map((t) =>
            t ? (
              <li key={t.id}>
                <Link
                  to={topicHref(t)}
                  className="flex h-full flex-col rounded-lg border border-line bg-surface px-4 py-3 hover:border-azulejo hover:bg-azulejo-soft"
                >
                  <span className="font-medium text-ink">{t.titleUk}</span>
                  <span className="font-display text-sm text-azulejo">{t.titlePt}</span>
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      </section>

      <section className="mt-14 grid gap-3 sm:grid-cols-3">
        <Link
          to="/comparisons"
          className="rounded-xl border border-line bg-surface p-5 hover:border-azulejo"
        >
          <GitCompare className="size-5 text-azulejo" aria-hidden />
          <h2 className="mt-3 font-display text-xl">Порівняння</h2>
          <p className="mt-1 text-sm text-muted">ser/estar, por/para, perfeito/imperfeito.</p>
        </Link>
        <Link
          to="/regional"
          className="rounded-xl border border-line bg-surface p-5 hover:border-azulejo"
        >
          <Globe className="size-5 text-azulejo" aria-hidden />
          <h2 className="mt-3 font-display text-xl">Варіанти</h2>
          <p className="mt-1 text-sm text-muted">Бразилія, Португалія, Африка, форми звертання.</p>
        </Link>
        <Link to="/tables" className="rounded-xl border border-line bg-surface p-5 hover:border-azulejo">
          <BookOpen className="size-5 text-azulejo" aria-hidden />
          <h2 className="mt-3 font-display text-xl">Таблиці</h2>
          <p className="mt-1 text-sm text-muted">Дієвідміни, займенники, контракції, crase.</p>
        </Link>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl text-ink">Розділи</h2>
          <Link to="/pt" className="inline-flex items-center gap-1 text-sm text-azulejo hover:underline">
            Усі теми
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        {(["core", "verb", "syntax", "ref"] as const).map((group) => (
          <div key={group} className="mt-8">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {GROUP_LABELS[group]}
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.filter((c) => c.group === group).map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/pt/${c.slug}`}
                    className="block rounded-lg border border-line bg-surface px-4 py-3 hover:border-azulejo hover:bg-azulejo-soft"
                  >
                    <span className="font-medium text-ink">{c.titleUk}</span>
                    <span className="mt-0.5 block text-sm text-muted">{c.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
