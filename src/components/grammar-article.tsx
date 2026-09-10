import type { GrammarPage } from "@/content/types";
import { CATEGORY_BY_SLUG } from "@/content/categories";
import { Breadcrumbs } from "./breadcrumbs";
import { ExampleList } from "./example-block";
import { ExampleCard } from "./example-block";
import { FormulaBlock } from "./formula-block";
import { MistakeBlock } from "./mistake-block";
import { Prose } from "./prose";
import { RelatedTopics } from "./related-topics";
import { TableBlock } from "./table-block";

function headingId(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9а-яіїєґ]+/gi, "-")
    .replace(/^-|-$/g, "");
}

export function GrammarArticle({ page }: { page: GrammarPage }) {
  const cat = CATEGORY_BY_SLUG[page.category];
  const catHref =
    page.category === "comparisons"
      ? "/comparisons"
      : page.category === "regional"
        ? "/regional"
        : `/pt/${page.category}`;
  const catLabel =
    page.category === "comparisons"
      ? "Порівняння"
      : page.category === "regional"
        ? "Варіанти"
        : (cat?.titleUk ?? page.category);

  const toc: { id: string; label: string }[] = [];
  if (page.formulas?.length) toc.push({ id: "formula-heading", label: "Швидка довідка" });
  if (page.formation) toc.push({ id: "formation", label: "Утворення" });
  if (page.uses?.length) toc.push({ id: "uses", label: "Використання" });
  if (page.examples?.length) toc.push({ id: "examples", label: "Приклади" });
  if (page.markers?.length) toc.push({ id: "markers", label: "Маркери" });
  if (page.tables?.length) toc.push({ id: "tables", label: "Таблиці" });
  if (page.exceptions) toc.push({ id: "exceptions", label: "Винятки" });
  if (page.mistakes?.length) toc.push({ id: "mistakes", label: "Помилки" });
  if (page.ukrainian) toc.push({ id: "ukrainian", label: "Українська" });
  if (page.brPt) toc.push({ id: "brpt", label: "PT-BR / PT-PT" });
  if (page.regional) toc.push({ id: "regional", label: "Регіони" });

  return (
    <article>
      <Breadcrumbs
        items={[
          { href: "/pt", label: "Граматика" },
          { href: catHref, label: catLabel },
          { label: page.titleUk },
        ]}
      />

      <p className="mb-2 font-display text-sm text-azulejo">{page.titlePt}</p>
      <h1 className="font-display text-[1.85rem] leading-tight text-ink sm:text-[2.15rem]">
        {page.titleUk}
      </h1>
      <p className="mt-3 max-w-[62ch] text-lg text-ink-soft">{page.summary}</p>
      {page.titleEn ? (
        <p className="mt-1 text-sm text-muted">{page.titleEn}</p>
      ) : null}

      {toc.length > 2 ? (
        <nav
          aria-label="Зміст сторінки"
          className="mt-6 rounded-lg border border-line bg-surface px-4 py-3 sm:hidden"
        >
          <p className="mb-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
            На сторінці
          </p>
          <ul className="flex flex-col gap-1 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-azulejo hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div className="mt-6">
        <Prose html={page.intro} />
      </div>

      {page.formulas?.length ? <FormulaBlock formulas={page.formulas} /> : null}

      {page.formation ? (
        <section className="my-8" id="formation">
          <h2 className="mb-3 font-display text-xl text-ink">Утворення</h2>
          <Prose html={page.formation} />
        </section>
      ) : null}

      {page.uses?.length ? (
        <section className="my-8" id="uses">
          <h2 className="mb-4 font-display text-xl text-ink">Використання</h2>
          <ol className="flex flex-col gap-6">
            {page.uses.map((u, i) => (
              <li key={i} id={headingId(u.title)} className="rounded-lg border border-line bg-surface p-4 sm:p-5">
                <h3 className="font-display text-lg text-ink">
                  <span className="mr-2 font-mono text-sm text-azulejo">{i + 1}.</span>
                  {u.title}
                </h3>
                <div className="mt-2">
                  <Prose html={u.body} />
                </div>
                {u.examples?.length ? (
                  <div className="mt-3 flex flex-col gap-2">
                    {u.examples.map((ex, j) => (
                      <ExampleCard key={j} example={ex} />
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {page.examples?.length ? (
        <div id="examples">
          <ExampleList examples={page.examples} />
        </div>
      ) : null}

      {page.markers?.length ? (
        <section className="my-8" id="markers">
          <h2 className="mb-3 font-display text-xl text-ink">Маркери та типові слова</h2>
          <ul className="flex flex-wrap gap-2">
            {page.markers.map((m) => (
              <li
                key={m}
                className="rounded-sm bg-azulejo-soft px-2.5 py-1 font-mono text-sm text-azulejo"
              >
                {m}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {page.tables?.length ? (
        <section className="my-8" id="tables">
          <h2 className="mb-3 font-display text-xl text-ink">Таблиці</h2>
          {page.tables.map((t, i) => (
            <TableBlock key={i} table={t} />
          ))}
        </section>
      ) : null}

      {page.exceptions ? (
        <section className="my-8" id="exceptions">
          <h2 className="mb-3 font-display text-xl text-ink">Особливі випадки та винятки</h2>
          <Prose html={page.exceptions} />
        </section>
      ) : null}

      {page.mistakes?.length ? (
        <div id="mistakes">
          <MistakeBlock mistakes={page.mistakes} />
        </div>
      ) : null}

      {page.ukrainian ? (
        <section className="my-8" id="ukrainian">
          <h2 className="mb-3 font-display text-xl text-ink">Порівняння з українською</h2>
          <Prose html={page.ukrainian} />
        </section>
      ) : null}

      {page.brPt ? (
        <section className="my-8" id="brpt">
          <h2 className="mb-3 font-display text-xl text-ink">Порівняння PT-BR / PT-PT</h2>
          <Prose html={page.brPt} />
        </section>
      ) : null}

      {page.regional ? (
        <section className="my-8" id="regional">
          <h2 className="mb-3 font-display text-xl text-ink">Регіональні відмінності</h2>
          <Prose html={page.regional} />
        </section>
      ) : null}

      <RelatedTopics ids={page.related} />
    </article>
  );
}
