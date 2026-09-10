import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-lg text-azulejo">Gramática</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Довідник португальської граматики для україномовних. PT-BR і PT-PT як рівноправні
            норми.
          </p>
        </div>
        <nav aria-label="Підвал" className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <Link to="/pt" className="text-ink-soft hover:text-azulejo">
            Усі теми
          </Link>
          <Link to="/comparisons" className="text-ink-soft hover:text-azulejo">
            Порівняння
          </Link>
          <Link to="/regional" className="text-ink-soft hover:text-azulejo">
            Варіанти
          </Link>
          <Link to="/tables" className="text-ink-soft hover:text-azulejo">
            Таблиці
          </Link>
          <Link to="/search" className="text-ink-soft hover:text-azulejo">
            Пошук
          </Link>
          <Link to="/pt/moods/futuro-subjuntivo" className="text-ink-soft hover:text-azulejo">
            Futuro do conjuntivo
          </Link>
        </nav>
      </div>
    </footer>
  );
}
