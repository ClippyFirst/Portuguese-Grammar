# Gramática

Довідник португальської граматики для україномовних.

Це **довідник, а не курс і не тренажер**: знайти конструкцію → зрозуміти правило → порівняти PT-BR / PT-PT → перейти до пов'язаних тем.

## Що є в проєкті

- 225 тем у єдиному каталозі;
- окремі глибокі модулі для вже вичитаних тем;
- структурований fallback-шар, який не допускає 404 для тем каталогу;
- українські пояснення, португальські приклади та позначення варіантів;
- пошук за українськими, португальськими та англійськими назвами й аліасами;
- breadcrumbs, пов'язані теми, таблиці, responsive/mobile navigation;
- accessibility basics: skip-link, keyboard search, focus-visible, reduced motion;
- автоматичний content audit і CI quality gate.

## Архітектурний принцип

Контент є даними, незалежними від UI. Спеціалізовані модулі в `src/content/pages/` мають пріоритет. Для тем, які ще не пройшли окрему лінгвістичну вичитку, використовується `src/content/generated-pages.ts`.

Це **не маскує відсутність роботи**: fallback потрібен для цілісності навігації та тестування повного каталогу, а теми з fallback мають бути поступово замінені на фактологічно вичитані статті.

## Локально

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## QA

```bash
npm run typecheck
npm run lint
npm run audit:content
npm run qa:static
```

`audit:content` перевіряє:

- унікальність ID;
- покриття каталогу;
- наявність page provider для кожної теми;
- цілісність `related`;
- `ESSENTIAL_IDS` і `COMPARISON_IDS`.

CI запускає ті самі перевірки для кожного push / pull request.

## Структура

- `src/content/catalog.ts` — каталог тем і навігаційні ID;
- `src/content/pages/` — вичитані тематичні модулі;
- `src/content/generated-pages.ts` — безпечний coverage fallback;
- `src/content/load.ts` — завантаження сторінок;
- `src/components/` — presentation components;
- `scripts/content-audit.mjs` — структурний аудит;
- `AUDIT.md` — історичний аудит і зафіксовані проблеми/рішення.

## Принцип якості

Кількість сторінок не є головним KPI. Для довідника важливіші **фактична точність, природна українська, коректні PT-BR / PT-PT відмінності, приклади без вигаданих правил, цілісні перехресні посилання та передбачувана навігація**.
