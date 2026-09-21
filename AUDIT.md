> **Статус документа:** цей файл містить історичний аудит попереднього стану репозиторію. Його цифри про кількість відсутніх сторінок не слід трактувати як поточний стан гілки. 21.09.2026 виправлено виявлену розбіжність каталогу зі сторінками (`other-periphrases`) і посилено `scripts/audit-grammar-content.mjs`, щоб аудит бачив як явні `GrammarPage`-об'єкти, так і сторінки, створені через helper `p(...)`. `npm run build` та `npm run build:dev` тепер блокуються, якщо каталог містить тему без відповідної сторінки.

---

# Аудит проєкту «Gramática» — довідник португальської граматики для україномовних

**Дата аудиту:** 10.09.2026
**Гілка / коміт:** `main` @ `788824c` («first commit»)
**Джерела вимог:** `prompt_website.txt`, `prompt_content.txt`, `prompt_themes.txt` (+ копії в `attachments/`)

---

## 0. Вердикт (стисло)

Проєкт **у стані, який не збирається**:

- `npm run typecheck` → **125 помилок** `TS1005: ':' expected` у 4 файлах контенту;
- `vite build` (прод-збірка) → падає на тій самій причині;
- **73 з 225** тем каталогу реально доступні як сторінки (20 сторінок віддають HTTP 500 через синтаксичний брак, 132 теми — 404);
- головна сторінка, сторінки розділів, пошук і теми з «здорових» модулів працюють у dev-режимі.

Сильна сторона — **якість уже написаного «здорового» контенту** (moods, se, clitics, infinitive, articles-…): природна українська, логіка замість гасел, мінімальні пари, блоки типових помилок, увага до PT-BR / PT-PT. Слабкі сторони — **збірка**, **покриття каталогу**, **мертві посилання** та залишки зламаного процесу генерації.

---

## 1. Що перевірялося

| Область | Що зроблено |
|---|---|
| Вимоги | повністю прочитано 3 `.txt`-промти (≈ 170 тис. символів) |
| Структура | каталог `catalog.ts` (225 тем), 17 модулів контенту, маршрути, компоненти |
| Збірка | `tsc --noEmit` (125 помилок), `vite build` (падіння), dev-сервер + HTTP-перевірка 12 маршрутів |
| Цілісність | посилання `related`, `ESSENTIAL_IDS`, `COMPARISON_IDS`, `TABLE_LINKS`; сироти (orphans) |
| Якість контенту | зразкова вибірка з усіх модулів; пошук «сміттєвих» токенів; покриття блоків статей |

> Навколишнє середовище мало порожній `node_modules` (проєкт, ймовірно, ніколи не збирався на цьому коміті). Для перевірки виконано `npm install` (420 пакетів); це не змінило треківні файли.

---

## 2. Вимоги з промтів (коротко)

### `prompt_website.txt` — технічний/UX задум

- Сайт-**довідник** (не курс, не тренажер): «Find → understand → compare → remember».
- Статичний сайт: Astro / TypeScript / Markdown-MDX / Content Collections / Pagefind-пошук / мінімум JS, **не SPA**.
- Архітектура різновидів: спільне ядро + PT-BR / PT-PT / AFR / OTHER метадані; жоден варіант не «єдино правильний».
- UX: спокійний, «reference»-стиль (не Duolingo), CLARITY > DECORATION.
- Структура IA: `/pt/fundamentals, pronunciation, spelling, nouns, articles, adjectives, adverbs, pronouns, determiners, prepositions, conjunctions, verbs, tenses, moods, infinitive, participles, gerund, verbal-periphrases, sentence-structure, word-formation, negation, questions, agreement, clitics, regional-variants` + `comparisons/` + `search/`.
- Змістова модель: id, language, slug, category, title_uk/pt/en, short_description, formula, formation, usage, examples, time_markers, exceptions, common_mistakes, ukrainian_notes, regional_notes, variant_notes, terminology, comparison, related_topics + метадані різновидів на прикладі.
- Кожна сторінка: формули, мінімальні пари, «Типові помилки україномовних» (❌/✅/Чому), PT-BR vs PT-PT, навігація між темами.
- **DoD:** 100–300+ сторінок без зміни фронтенду; контент незалежний від UI; fast, clean, deep, searchable, SEO-friendly, static-first.

### `prompt_content.txt` — правила контенту

- Пояснення **природною українською**; португальські приклади + переклад; жодних CEFR-міток.
- **Логіка граматики** (ніяких «ser = permanent» без обмовок); увага до типових помилок українців; аспект укр. vs порт. часово-видової системи; тематичний перелік (≈ 232 пункти).
- **Без філера**, без вигаданих правил, без вигаданої симетрії «порт. = іспанська», точність плурицентричності.

### `prompt_themes.txt` — карта тем

Повна системна карта граматики: від базових до рідкісних/регіональних конструкцій (≈ 50 великих блоків; сотні мікроконструкцій: `é que`, cleft, `sim`-емфаза, `se`-система, контракції, crase, відносні, умовні тощо).

---

## 3. Що вже є (реалізовано)

### Архітектура (адаптована під наявне шаблонне середовище)

- **TanStack Start (React 19) + TypeScript + Tailwind v4 + nitro(vercel)** (замість Astro — див. відхилення, §5).
- Каталог тем `src/content/catalog.ts` — **225 тем** (`id, category, slug, titleUk/TitlePt/TitleEn, summary, aliases, related, depth`).
- Контент окремий від UI: 17 модулів `src/content/pages/*.ts`, тип `GrammarPage` з повним набором блоків (formulas, formation, uses, examples, markers, exceptions, mistakes, ukrainian, regional, brPt, tables).
- Маршрути: `/` (головна), `/pt` + `/pt/$category` + `/pt/$category/$slug`, `/comparisons[/]`, `/regional[/]`, `/tables`, `/search?q=`; хлібні крихти; «пов'язані теми»; 404/error компоненти.
- Пошук: `/search?q=` + командне меню (клік, `/` або `Ctrl/Cmd+K`); індексує **метадані каталогу** (не текст сторінок).
- Дизайн: книжкова «reference»-естетика (папір/чорнило/azulejo), шрифти Literata / Source Sans 3 / IBM Plex Mono; бейджі варіантів PT-BR / PT-PT / AFR / регістр; таблиці з горизонтальним скролом; mobile-меню; skip-link; focus-visible; `prefers-reduced-motion`.
- Регіональний шар: категорія `regional`, бейджі `variety`/`register`, `brPt`-блоки.
- Генератор `scripts/gen_grammar_pages.py` (залишок процесу генерації; порожні KB ⇒ генерує філер — див. §4.5).

### Покриття контенту (93 об'єкти сторінок у 17 модулях)

| Категорія | Тем у каталозі | Сторінок | Стан |
|---|--:|--:|---|
| moods | 12 | 12 | ✅ повністю |
| clitics | 10 | 10 | ✅ повністю |
| articles | 8 | 8 | ✅, але **модуль зламаний (500)** |
| se | 8 | 8 | ✅ повністю |
| syntax | 8 | 8 | ✅ повністю |
| contractions | 7 | 7 | ✅, але **модуль зламаний (500)** |
| regional | 6 | 6 | ✅ повністю |
| fundamentals | 5 | 5 | ✅ повністю |
| infinitive | 5 | 5 | ✅ повністю |
| questions | 5 | 5 | ✅ повністю |
| crase | 4 | 4 | ✅, але **модуль зламаний (500)** |
| negation | 4 | 4 | ✅ повністю |
| numerals | 3 | 3 | ✅ повністю |
| conjunctions | 3 | 3 | ✅ повністю |
| agreement | 3 | 3 | ✅ повністю |
| comparisons | 1 | 1 | ⚠️ **модуль зламаний (500)** |
| word-formation | 1 | 1 | ⚠️ стаття-заглушка, 1.8 КБ |
| spelling | 9 | 0 | ❌ немає сторінок |
| nouns | 11 | 0 | ❌ немає сторінок |
| adjectives | 7 | 0 | ❌ немає сторінок |
| adverbs | 6 | 0 | ❌ немає сторінок |
| pronouns | 17 | 0 | ❌ немає сторінок |
| prepositions | 11 | 0 | ❌ немає сторінок |
| verbs | 22 | 0 | ❌ немає сторінок |
| tenses | 13 | 0 | ❌ немає сторінок |
| gerund | 10 | 0 | ❌ немає сторінок |
| periphrases | 7 | 0 | ❌ немає сторінок |
| relative | 6 | 0 | ❌ немає сторінок |
| subordinate | 8 | 0 | ❌ немає сторінок |
| passive | 5 | 0 | ❌ немає сторінок |
| **Разом** | **225** | **93** | **132 теми без контенту** |

### Якість наявних «здорових» сторінок (зразки)

Переглянуті `moods/indicative-vs-subjunctive`, `se/overview`, `clitics/*`, `infinitive/*`, `articles/definite` (до місця зламу), `comparisons`-сторінка. Оцінка: **висока**. Дотримано:

- логіку замість гасел («не *впевненість vs невпевненість*», а операції над пропозицією);
- український погляд (артиклі, клітики, аспект — окремі пояснення);
- PT-BR / PT-PT з частотою/нормою, а не «X каже Y»;
- мінімальні пари, маркери, таблиці, «Типові помилки україномовних» (❌/✅/Чому);
- уникнення CEFR, англійської як «прихованої» мови пояснення.

Покриття блоків (по 93 об'єктах): formulas **74** (80 %), mistakes **92** (99 %), ukrainian **78** (84 %), brPt **68** (73 %), exceptions **65** (70 %), tables **60** (65 %), markers **60** (65 %), uses **68** (73 %), formation **56** (60 %), regional **41** (44 %).

---

## 4. Критичні знахідки (blockers)

### 🔴 4.1 Збірка падає: 125 синтаксичних помилок у 4 модулях контенту

`tsc --noEmit` → **125× `TS1005: ':' expected`**; `vite build` падає з `Expected ':' but found ','` / `Unexpected string`.

| Файл | Помилок | Сторінок у модулі |
|---|--:|--:|
| `src/content/pages/articles.ts` | 63 | 8 |
| `src/content/pages/contractions.ts` | 38 | 7 |
| `src/content/pages/crase.ts` | 17 | 4 |
| `src/content/pages/comparisons.ts` | 7 | 1 |
| **Разом** | **125** | **20** |

**Причина:** багатоабзацні текстові поля (`intro`, `formation`, `exceptions` тощо) записані як **«голі» рядкові літерали без ключа** всередині об'єктів, напр. у `articles.ts`:

```ts
intro: "Означений артикль …",
"В українській …",        // ← TS1005: ':' expected
"Форма узгоджується …",   // ← TS1005: ':' expected
"Після прийменників …",   // ← TS1005: ':' expected
formulas: [
```

Тобто **зміст цих абзаців синтаксично мертвий**: він не тільки не рендериться, але й блокує збірку всього проєкту. Dev-сервер стартує, але будь-який маршрут, що завантажує ці модулі, → **HTTP 500** (перевірено: `/pt/articles/definite`, `/pt/contractions/de-article`, `/pt/crase/overview`).

**Рекомендація (перший пріоритет):** «склеїти» голі рядки в один ключ (напр. `intro: "…\n\n…\n\n…"` або конкатенацію) у цих 4 файлах. Це одночасно повертає контент і розблоковує збірку. Варто додати перевірку в CI (typecheck у `npm run build`).
### 🔴 4.2 132 теми каталогу не мають контенту → масові 404

Цілими категоріями відсутні сторінки: **verbs (22), pronouns (17), tenses (13), nouns (11), prepositions (11), gerund (10), spelling (9), subordinate (8), adjectives (7), periphrases (7), adverbs (6), relative (6), passive (5)** — 132 теми, серед них найважливіші для довідника: `ser`, `estar`, `presente`, `pretérito perfeito/imperfeito`, `por/para`, `tu/você` тощо.

Наслідок: розділи `/pt/verbs`, `/pt/tenses` тощо показують списки тем (з каталогу), але **кожне посилання веде на 404** (`/pt/verbs/ser` — перевірено: HTTP 404).

### 🔴 4.3 Мертві посилання в UI

| Звідки | Мертвих / усього |
|---|---|
| Головна «Ключові теми» (`ESSENTIAL_IDS`) | **5/12**: `ser-estar`, `tu-voce`, `por-para`, `perfeito-vs-imperfeito`, `progressive-br-pt` |
| Сторінка «Порівняння» (`COMPARISON_IDS`) | **10/17**: `ser-estar`, `ser-estar-ficar`, `ter-haver`, `por-para`, `perfeito-vs-imperfeito`, `lhe-vs-o`, `progressive-br-pt`, `saber-conhecer`, `levar-trazer`, `tense-vs-ukrainian` |
| Сторінка «Таблиці» (`TABLE_LINKS`) | **6/16**: `verb-system`, `presente`, `personal-pronouns`, `demonstratives`, `possessives`, `irregular-verbs` |
| «Пов'язані теми» (`related`) | **345** посилань на теми без сторінки (прикидка), зокрема справді «биті» цілі: `prep-other → ha-faz-desde`, `coordinating → nem`, `acabar-de → deixar-de` |

### 🔴 4.4 Windows-блокер для локальних команд (`npm run dev/build/preview`)

`scripts/with-app-env.mjs` запускає Vite через `spawn("vite", …)`. На Windows такий spawn **не резолвить `vite.cmd`** ⇒ `[with-app-env] failed to run vite: spawn vite ENOENT` (підтверджено: `npm run build` → exit 127). На Linux-пісочниці, для якої це писалося, працює; але локально в Windows потрібно `spawn(command, args, { …, shell: process.platform === "win32" })` або явно `vite.cmd` під Windows.

### 🟠 4.5 Втрачений контент, артефакти та «філер-генератор»

- `articles.ts` (р. 36): «…а не **« occup додаткове слово»**» — залишок англійського токена в українському тексті.
- `agreement.ts` (р. 69): `summary: "todo, é / são, collective, semantic agreement."` — англомовна витяжка замість українського опису.
- `word-formation.ts` — 1 стаття на 1.8 КБ (заглушка); `related` посилаються на `diminutives`/`augmentatives`, яких немає в каталозі (404).
- `scripts/gen_grammar_pages.py`: **порожні** `KB` і `EXAMPLE_BANK`; при запуску генерує всім відсутнім темам **однакові «фолбек» статті** (формула `S + V`, банк із 4 речень) — це прямо суперечить вимозі §47 «Never generate filler». Інструмент або наповнити реальним KB, або видалити; не запускати в поточному вигляді.

### 🟠 4.6 Дрібні дефекти коду

- `src/components/prose.tsx` — HTML-екранування **не працює**: `.replace(/&/g, "&")` замість `"&amp;"` (те саме для `<`, `>`). У поточному контенті лише 2 символи `<`, тож практичний вплив малий, але з `dangerouslySetInnerHTML` це прихована пастка.
- У коментарі `prose.tsx` згадано `[[id|label]]`-лінки «resolved in renderer» — **жоден рендерер їх не обробляє** (6 входжень у контенті лишилися б текстом).
- Інтро рендериться лише як абзаци (`<p>`): марковані списки в прозі не підтримуються.
- TOC «На сторінці» показується лише на мобільних; на десктопі немає бічної навігації по розділу.
---

## 5. Відхилення від ТЗ (важливі, не критичні)

| Вимога | Факт | Оцінка |
|---|---|---|
| Astro + MDX + Content Collections | TanStack Start (React/TS) + TS-модулі контенту | ⚠️ Контент окремий від UI — добре; але не-редагуємі без коду, файли величезні (до 131 КБ `clitics.ts`) |
| Статичний сайт, **не SPA**, мінімум JS | SSR через nitro, vercel-preset; React-гідрація | ⚠️ Не «static-first» у сенсі ТЗ; варто перевірити SSR-поведінку `load.ts` (glob + глоби fs) |
| Pagefind static search | Власний клієнтський пошук | ⚠️ Працює, але індексує **лише метадані каталогу** (назви/аліаси/описи), **не текст статей** — «estou fazendo», «para que» всередині прикладів не знайдуться |
| Категорії IA: `pronunciation/`, `determiners/`, `participles/` окремо | `pronunciation` злито у `spelling`; `determiners` немає; `participles` у `gerund` | 🟠 Прийнятна адаптація, але позначити в навігації |
| Content model поля `language`, `terminology`, `comparison`, `variant_notes` | Немає в `GrammarPage` | 🟠 Додати за потреби мультимовності/порівняльних сторінок |
| DoD: 100–300+ сторінок | 93 з 225 (73 реально доступні) | ❌ Не готово |
| SEO: sitemap, hreflang, JSON-LD | немає (`robots.txt` є, `og.jpg` є, PWA-інжектор додає meta) | 🟠 Додати `sitemap.xml`/JSON-LD, коли контент стабілізується |

Шаблонні залежності пісочниці (`src/lib/auth/*`, `src/lib/app-data/*`, `src/lib/multiplayer/*`, `migrations/auth/*`) **не використовуються** проєктом (auth не потрібен — OFF): лишити як шаблон або прибрати з бандла (перевірити, що нічого не імпортується).

---

## 6. План робіт (що робити далі, за пріоритетом)

**Фаза 0 — розблокувати збірку (≈1 день)**
1. Виправити 125 `TS1005` у `articles.ts`, `contractions.ts`, `crase.ts`, `comparisons.ts` (склеїти «голі» рядки). Додати `npm run typecheck` як gate.
2. Полагодити `with-app-env.mjs` spawn для Windows (або офіційно підтримувати Linux).
3. Прогнати `npm run typecheck` + `npm run build` до зеленого; перевірити dev і preview.

**Фаза 1 — закрити 404 на першій лінії (≈тиждень)**
4. Написати контент для тем, на які ведуть `ESSENTIAL_IDS` (ser/estar, tu/você, por/para, perfeito/imperfeito, progressive) та `TABLE_LINKS` (verb-system, presente, займенники, демонстративи, присвійні, неправильні дієслова).
5. Категорії з нулем сторінок — за порядком важливості: **verbs (22) → tenses (13) → pronouns (17) → nouns (11) → prepositions (11) → spelling (9)** — це кістяк довідника.
6. Виправити 3 биті цілі `related` і почистити мертві посилання.
7. Покращити пошук: індексувати intro+uses+examples (або Pagefind); підсвітка збігів.

**Фаза 2 — якість (паралельно)**
8. Прибрати «occup», англійський summary в `agreement.ts`; дописати `word-formation`.
9. Виправити екранування в `prose.tsx`; реалізувати або прибрати синтаксис `[[…]]`; підтримати списки в прозі.
10. Розширити модель `GrammarPage` (`language`, `terminology`, `comparison`) за потреби; розбити великі модулі на файли по темі.
11. Видалити/доробити `gen_grammar_pages.py` (філер заборонено); додати лінт «голих» рядків.

**Фаза 3 — SEO / деплой**
12. `sitemap.xml`, JSON-LD (`DefinedTerm`/`EducationalOrganization`), перевірка прод-виводу на Vercel.

---

## 7. Перевірені маршрути (емпірика, dev-сервер)

| Маршрут | Результат |
|---|---|
| `/`, `/pt`, `/comparisons`, `/search?q=crase` | ✅ 200 |
| `/pt/moods/indicative-vs-subjunctive`, `/pt/clitics/clitic-placement`, `/pt/se/overview` | ✅ 200 |
| `/pt/articles/definite`, `/pt/contractions/de-article`, `/pt/crase/overview` | ❌ 500 (синтаксис модуля) |
| `/pt/verbs/ser`, `/pt/tenses/presente` | ❌ 404 (немає контенту) |

---

## 8. Команди перевірки (для відтворення)

```bash
npm install
npm run typecheck   # 125 помилок TS1005 (articles 63, contractions 38, crase 17, comparisons 7)
npm run build       # падає: Expected ':' but found ',' (Windows ще й spawn vite ENOENT)
npx vite build      # обхід Windows-spawn: падає на тих самих файлах
```

---

## 9. Примітки щодо середовища

- Під час аудиту виконано `npm install`; `node_modules/` лишається в робочій теці (ігнорується новим `.gitignore`). Додано `.gitignore` (у базовому коміті його не було) — це запобігає випадковому коміту `node_modules`.
- Випадкові авто-коміти пісочниці (`b37296b`, `1053bb1` з тимчасовими audit-файлами) прибрано локально через `git reset --hard 788824c`; локальна історія — чистий базовий коміт. Якщо вони видимі на `origin/main`, їх можна безпечно видалити (`git push origin main --force` після перевірки).

## 21.09.2026 — уточнення після content snapshot

Після формування повного \`_content-snapshot.txt\` виявлено, що частина старих structural findings була артефактом самого \`scripts/audit-grammar-content.mjs\`. Репозиторій використовує не один формат сторінок: поряд із явними об'єктами є \`p(...)\` і \`page({ ... })\`, а вкладені об'єкти прикладів/таблиць робили попередній indentation-based parser ненадійним.

Тому записи на кшталт \`page missing from catalog\` та \`broken related reference\` з цього старого запуску **не є доказом відсутньої статті самі по собі**. Аудитор виправлено у commit \`40a7a1456315883ba7ae49380a1b587b07a1e24b\`: metadata сторінок тепер визначається незалежно від відступів і враховує всі три формати.

Після цього залишкові findings нового запуску мають використовуватися як фактичний список робіт; старий список не слід копіювати в каталог або перетворювати на дублікати статей.


## 21.09.2026 — findings після реального локального запуску

Після запуску \`npm run audit:content\` у робочій копії залишилися вже не parser false positives, а конкретні проблеми маршрутизації/related IDs:

- \`por-verb\` мав розбіжність slug між page та catalog;
- частина \`related\` використовувала концептуальні назви замість canonical catalog IDs.

Ці проблеми виправлено на гілці \`chore/local-development\`.

Окремо audit було посилено так, щоб він перевіряв compact \`p(...)\` related arrays і не вважав наявність прикладів у compact pages відсутньою лише через відсутність literal \`examples:\` field.

Попередні findings про десятки/сотні відсутніх сторінок не слід змішувати з цим запуском: вони були отримані старим parser і вже документовані як historical/invalid structural findings.
