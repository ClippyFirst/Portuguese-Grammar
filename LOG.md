# Журнал розробки — Gramática

Робочий лог. Стисло: що змінили, навіщо, які ідеї лишили на потім.
Контент і розробка зараз важливіші за полірування.

---

## 17.09.2026 — сесія: розблокування + наповнення каталогу

Джерела: `prompt_website.txt`, `prompt_content.txt`, `prompt_themes.txt`, `AUDIT.md`.
Окремого змістовного логу в репо не було (видалені `audit-tools/dev.log` були логами Vite, не проєкту). Цей файл — відтепер канонічний журнал.

### Стан на вході (з аудиту 10.09)

- 225 тем у каталозі, 93 об’єкти сторінок, 20 з них не вантажились (синтаксис), 132 теми — 404.
- `tsc` падав на 125× `TS1005` у `articles.ts`, `contractions.ts`, `crase.ts`, `comparisons.ts`.
- Ключові 404: `ser`, `estar`, `presente`, `tu/você`, `por/para`, займенники, іменники.

### Фаза 0 — збірка жива

- Склеєно «голі» рядкові літерали в чотирьох зламаних модулях (абзаци `intro` / `formation` тощо).
- Прибрано артефакт `occup` в означеному артиклі.
- Злито дубльовані ключі `related` (TS1117) у `agreement`, `negation`, `questions`, `regional`, `syntax`, `word-formation`.
- `Formula.pattern` зроблено необов’язковим; рендер пропускає порожнє «ствердження».
- Експорт `TopicMeta` з `catalog.ts`.
- Посилання через `TopicNavLink` / `CategoryNavLink` (типізовані params TanStack Router).
- HTML-екранування в `prose.tsx` (`&` / `<` / `>`); `[[id|label]]` резолвиться в реальні URL; списки `-` у прозі.
- `with-app-env.mjs`: `shell: true` на Windows, щоб `vite.cmd` резолвився.
- `agreement-special`: український summary замість англійського.

`npm run typecheck` — зелений.

### Фаза 1 — наповнення (у роботі)

Пріоритет з аудиту: **verbs → tenses → pronouns → nouns → prepositions → spelling**, далі adjectives, adverbs, gerund, periphrases, relative, subordinate, passive.
Не філер: логіка замість гасел, українські типові помилки, PT-BR / PT-PT, таблиці парадигм.

### Ідеї (не зараз)

- Пошук по тексту статей, не лише по метаданих каталогу.
- TOC «На сторінці» і на десктопі.
- `sitemap.xml` / JSON-LD — коли покриття стабілізується.
- Розбити гігантські модулі (`clitics.ts`) на файли по темі; `load.ts` тоді треба розширити.
- Видалити `scripts/gen_grammar_pages.py`, поки KB порожній (філер заборонено промтом).
- Окремі сторінки словотвору: зараз `diminutives` / `augmentatives` живуть у `nouns`.

### Принципи, яких дотримуємось

1. Довідник, не курс і не тренажер лексики.
2. Пояснення природною українською; приклади португальською з перекладом.
3. Жодних CEFR-міток і гасел на кшталт «ser = permanent».
4. Плурицентричність: жоден варіант не «єдино правильний».
5. Спочатку покриття й глибина тем, потім шліфування UI.

---

## 21.09.2026 — сесія: синхронізація каталогу зі статтями

### Виявлена проблема

Каталог містив тему `other-periphrases` у категорії `periphrases`, але відповідного об'єкта `GrammarPage` у `src/content/pages/periphrases.ts` не було. Через це тема була видима в каталозі й навігації, але перехід на `/pt/periphrases/other` не знаходив статтю.

### Виправлення

- Додано повноцінну статтю **«Інші перифрази»** (`other-periphrases`) з моделями:
  - `andar a + infinitivo`;
  - `ficar a + infinitivo`;
  - `vir a + infinitivo`;
  - `estar para + infinitivo`.
- Додано приклади з перекладами та позначенням PT там, де це суттєво.
- Додано зв'язки з аспектом, прогресивом, складеними предикатами та `estar a + infinitivo`.

### Захист від повторення помилки

Попередній `scripts/audit-grammar-content.mjs` перевіряв лише сторінки, записані як явні об'єкти `{ id, slug, category, ... }`. Значна частина старших модулів використовує компактний helper `p(...)), тому аудит не бачив ці сторінки під час перевірки відповідності каталогу.

Аудит розширено: він тепер розпізнає обидва формати та порівнює весь каталог із фактично зареєстрованими сторінками.

Також `npm run build` тепер спочатку запускає `npm run audit:content`. Якщо в каталозі з'явиться тема без статті, збірка буде зупинена до появи відповідного контенту.

### Принцип

Каталог не повинен бути «планом майбутніх сторінок», якщо тема вже показується користувачу як доступна. Кожна опублікована тема повинна мати реальний `GrammarPage`, правильні `category/slug` і працюючий маршрут.


## 21.09.2026 — сесія: виправлення парсера аудиту сторінок

Після створення \`_content-snapshot.txt\` стало видно, що великий список \`page missing from catalog\` / \`broken related reference\` не можна приймати як список реальних 404 без перевірки самого аудиту.

### Причина

\`src/content/pages\` використовує щонайменше три форми декларації сторінок:

- явний об'єкт \`GrammarPage\` — \`{ id, slug, category, ... }\`;
- helper \`p(...)\` у старіших компактних модулях;
- helper \`page({ ... })\` у великих модулях (\`clitics.ts\` та інших).

Попередній аудит намагався визначати межі сторінок за відступами рядків. Це було ненадійно: вкладені об'єкти \`examples\`, \`tables\` та інші структури ламали межі сторінки, а \`page({ ... })\` взагалі не був окремо врахований.

### Виправлення

- Переписано визначення page metadata в \`scripts/audit-grammar-content.mjs\`.
- Аудит тепер шукає \`id\`, а потім \`slug/category\` у контрольному вікні metadata, незалежно від форматування вкладених блоків.
- Збережено підтримку компактного \`p(...)\` helper.
- Це прибирає клас помилкових повідомлень, коли реальна сторінка існує, але аудитор її не розпізнав.
- Каталог при цьому залишається джерелом опублікованих маршрутів: реальна відсутність \`catalog ↔ page\` і надалі є помилкою.

### Важливий висновок

Список із сотень \`broken related reference\` та десятків \`page missing from catalog\` із попереднього запуску **не можна механічно перетворювати на нові статті**. Спочатку має пройти виправлений структурний аудит; лише його залишкові findings є кандидатами на реальні виправлення контенту.

Commit: \`40a7a1456315883ba7ae49380a1b587b07a1e24b\`.


## 21.09.2026 — сесія: зменшення шуму в content audit

Після виправлення page parser окремо переглянуто блок із \`520 warnings\`. Він позначав майже кожен приклад у «складному» модулі лише тому, що поруч не було \`variety\` / \`register\`.

Це неякісний сигнал: нейтральний приклад не потребує регіональної мітки, якщо його форма не залежить від різновиду або реєстру. Така евристика створювала великий список, який приховував справді важливі findings.

Блок прибрано. Метадані \`variety/register\` залишаються частиною моделі й мають додаватися там, де вони реально потрібні для правильної інтерпретації прикладу.

Commit: \`e38b043f27608f09ea6a605d7feff4cf527f8b12\`.


## 21.09.2026 — сесія: виправлення реальних findings після локального audit:content

Користувач запустив актуальний \`npm run audit:content\` локально. Після виправлення parser залишилися конкретні structural findings, тому цього разу виправлення виконувалися вже за фактичним локальним результатом, а не за старим snapshot.

### Виправлено

- \`por-verb\`: catalog використовував slug \`por\`, тоді як page має \`por-verb\`; slug синхронізовано.
- Нормалізовано related IDs у \`conjunctions.ts\`, \`determiners.ts\`, \`discourse.ts\`, \`lexical-grammar.ts\`, \`pragmatics.ts\`, \`semantics.ts\` і \`syntax-advanced.ts\` до реальних catalog/page IDs.
- Не створювалися штучні catalog entries для слів на кшталт \`dever\`, \`poder\`, \`relative\`, \`prepositions\` тощо: вони є концептуальними скороченнями, тоді як UI пов'язує related topics через \`TOPIC_BY_ID\`. Вибрано наявні canonical IDs.
- Аудитор тепер перевіряє related IDs і в explicit \`related: [...]\`, і в компактному \`p(..., [...])\`.
- Для компактних \`p(...)\` сторінок high-depth QA тепер розпізнає фактичний масив прикладів, а не помилково вимагає буквальне поле \`examples:\`.
- Виправлено побічну зміну metadata \`nem\` у \`conjunctions.ts\`; canonical page ID залишається \`coordinating\`.

### Принцип

Related topic має бути не просто «словом, яке тематично підходить», а реальним ID з \`CATALOG\`, тому що \`RelatedTopics\` будує навігацію через \`TOPIC_BY_ID\`.

Commit-и цієї сесії включають:
- \`cae1b178...\` — catalog slug correction;
- \`65fc61c3...\` — restore canonical conjunction page identity;
- \`dedd5d06...\` / \`8d1cb41c...\` — related-link audit;
- \`d58bfbae...\` — compact page example QA.


## 21.09.2026 — другий локальний audit: canonical related IDs

Користувач повторно запустив `npm run audit:content`. Залишилися 15 broken related references. Перевірено контекст кожного посилання та замінено їх на canonical IDs, що реально існують у каталозі:

- `semantics` → `aspect-overview`;
- `passive` → `ser-passive`;
- `subordinate-clauses` → `subordinating`;
- `regional` → `pt-br-pt-pt`;
- `object` → `object-pronouns`;
- `syntax` → `word-order`;
- `conjunctions-overview` → `subordinating`;
- `conditional` → `conditional-clauses`;
- `tenses` → `verb-system`;
- `moods` → `subjunctive-overview`;
- `periphrases` → `ir-infinitive`;
- `deixis` → `reference-overview`.

Не створювалися дублікати сторінок лише заради проходження structural audit.


## 21.09.2026 — третій локальний audit: синхронізація двох slug

Користувач повторно запустив `npm run audit:content`. Структурний аудит залишив лише два findings:

- `object-pronouns`: page slug = `object-pronouns`, catalog slug = `object`;
- `conditional-clauses`: page slug = `conditional-clauses`, catalog slug = `conditional`.

Перевірено фактичний runtime lookup у `src/content/load.ts`: сторінка завантажується за парою `category/slug`, а page declarations уже мали узгоджені `id = slug`. Тому не стали змінювати page declarations або створювати aliases лише для проходження аудиту; canonical slug у каталозі приведено до фактичного slug сторінки:

- `object` → `object-pronouns`;
- `conditional` → `conditional-clauses`.

Це усуває розходження між каталогом, page metadata та runtime route lookup.

Commit: `1cbec8409c984e5e0d3a9ada4f48c5de9a3c81ba`.


## 21.09.2026 — runtime shape validation after `e.map is not a function`

Локальний production preview після успішного `audit:content` і `build` показав runtime-помилку `TypeError: e.map is not a function` у зібраному `grammar-article` chunk. Stack trace локалізує проблему до рендерингу `GrammarArticle`, де кілька контентних полів очікуються як масиви.

### Виправлення

- У `src/content/load.ts` додано централізовану runtime-перевірку форми `GrammarPage` перед кешуванням сторінок.
- Перевіряються всі колекційні поля: `aliases`, `related`, `formulas`, `uses`, `examples`, `markers`, `mistakes`, `tables`.
- Якщо поле має неправильний тип, loader тепер повідомляє конкретні `category/slug`, назву поля та фактичний тип замість непрозорого `.map is not a function` у React.
- Також перевіряється, що кожен content module експортує масив `pages`.

Це не маскує помилку через `Array.isArray(...) ? ... : []`: неправильні дані залишаються hard failure, але з діагностикою на рівні джерела.

Commit: `0ad74ac741f078ab95f7be7d6ce03f8f07a7aa87`.


## 2026-09-21 — Runtime content-contract repair

- Root cause confirmed across the compact `p(...)` page modules: calls contained a second Ukrainian pedagogical/explanatory string before the examples array, while the helper signatures treated that position as `examples`. JavaScript therefore shifted the actual examples array into `related`, and the runtime renderer eventually failed on `.map`.
- Repaired the compact constructors in `adjectives.ts`, `adverbs.ts`, `gerund.ts`, `nouns.ts`, `passive.ts`, `periphrases.ts`, `prepositions.ts`, `pronouns.ts`, `relative.ts`, `spelling.ts`, `subordinate.ts`, `tenses.ts`, and `verbs.ts` to accept the existing pedagogical note explicitly.
- The supplied note is preserved in the rendered page by joining it to the introductory prose with a paragraph break; no source content was discarded and no arrays were coerced to silence the runtime validator.
- Strengthened `scripts/audit-grammar-content.mjs` with a top-level argument parser for compact constructors. It now verifies the 10-argument contract and specifically checks that the teaching-note, examples, and related positions have the expected shapes.
- The runtime validator in `src/content/load.ts` remains enabled as a defense-in-depth check, so malformed content fails with a precise content-contract error rather than an opaque UI `.map` exception.
- This repair is intentionally content-model-first. Static GitHub Pages migration remains a separate architectural phase and must not be used to hide content/runtime defects.

- Added `scripts/audit-grammar-content.test.mjs` so the strengthened content audit is part of `npm test`, not only a manually invoked command.


## 2026-09-22 — GitHub Pages static architecture

- Added a dedicated `github-pages` Vite mode with TanStack Start static prerendering enabled, link crawling, explicit shell routes, retries, and fail-fast prerender errors. TanStack documents this mode as the mechanism for generating static HTML for hosts without SSR. 
- Disabled the legacy Nitro/Vercel build path and platform-specific PWA middleware for the GitHub Pages mode; the normal development/preview path remains unchanged.
- Added Vite base path `/Portuguese-Grammar/` and passed that base path into TanStack Router so project-site URLs and client navigation work under the repository subpath.
- Added static-output verification that derives expected grammar topic routes and category routes from the catalog and requires an `index.html` for every expected route.
- Added generated sitemap support for the catalog and shell routes, plus a GitHub Pages-compatible `404.html` and sitemap declaration in `robots.txt`.
- Added a GitHub Actions Pages workflow using the official Pages artifact/deployment actions. The workflow builds, generates the sitemap, verifies the prerendered route set, stages the static artifact, and deploys it.
- This is intentionally a separate production build mode; Vercel/Nitro remains available for the existing non-static workflow until the static build has passed CI verification.


## 2026-09-22 — Static CI caught an audit-regex regression

- The first GitHub Actions static build reached `npm run audit:content` and failed before the actual prerender step because the compact-constructor audit contained an invalid escaped backtick inside a regular-expression character class under Node 24.
- This was a useful fail-closed result: the new production pipeline exposed a portability/runtime defect that local assumptions had not caught.
- Repaired the expression to a standards-compliant quote character class and pushed the fix as `bef77acde1fc6f597a08e274f1facb778aed986f`.
- A new static validation run is executing against that exact commit. The production Pages workflow remains intentionally restricted to `main`; the validation workflow runs on the working branch and pull requests.


## 25.09.2026 — content production batch 01: advanced syntax

Взято за основу актуальну гілку `content/production-2026-09` (tip: `1e6cc33ca8e5ea0d112b9c1f654a301643573763`) і створено робочу гілку `content/production-2026-09-batch-01`.

### Лічильник контенту

- Canonical topics у поточному `catalog.ts`: **349**.
- Нових dedicated articles у цій сесії: **6**.
- Лічильник цієї виробничої серії: **6 нових статей у першому batch; кумулятивний corpus рахується нижче окремим лічильником.**
- Fallback не зараховується як написана стаття.
- Наявні dedicated articles з попередніх сесій не перераховуються як «написані в цій серії»; вони залишаються частиною вже наявного corpus.

### Додано

`src/content/pages/syntax-production-3.ts`:

1. `causative-constructions`
2. `raising-and-control`
3. `advanced-relatives`
4. `complement-clauses-advanced`
5. `infinitive-vs-subjunctive`
6. `clitic-clusters`

Статті побудовано за canonical article requirements: український contrast, form/function/meaning, production-oriented examples, типізовані learner errors, PT-BR/PT-PT scope, related graph та source metadata.

### Джерельна перевірка

Для каузативних та infinitive-related claims використано актуальні матеріали Ciberdúvidas, зокрема щодо `fazer/mandar/deixar`, infinitivo pessoal та розрізнення infinitivo/futuro do conjuntivo. Загальна структура синтаксичних описів узгоджена з reference-grammar policy репозиторію.

### Статус

Batch 01 створено. Перед release/merge потрібні structural/typecheck/content QA та перевірка, що всі шість ID справді були fallback-only на старті batch.


## 25.09.2026 — content production batch 01: second article set

Після першої шістки продовжено наповнення тієї самої робочої гілки.

### Лічильник контенту

- Canonical topics у catalog.ts: **349**.
- Додано ще **6** dedicated articles.
- Кумулятивний production corpus за перевіреними page modules: **228 / 349 написано; 121 / 349 залишилося**.
- Цей лічильник рахує лише реальні GrammarPage-статті, а не fallback/generated pages.
- Попередні 6 статей входять у кумулятивні 228; повторно не рахуються.

### Додано

src/content/pages/adjectives-nouns-production-2.ts:

1. adjective-position
2. adjective-meaning
3. adverbs-degree
4. noun-number
5. noun-gender
6. gender-vs-ukrainian

### Якість

Статті містять визначення, структуру/формування, функціональні підрозділи, production/comprehension приклади, український контраст, типові помилки, PT-BR/PT-PT notes, related IDs та джерела. Для adjective-position / adjective-meaning використано матеріали Ciberdúvidas про позицію та семантичні ефекти прикметника; для noun gender/number — матеріали Ciberdúvidas про граматичний рід, винятки, plural і non-count nouns.

Academic Writing Toolkit було використано як додатковий paragraph-level sanity check; його сигнали про короткі абзаци не є content failures, оскільки статті навмисно структуровані як довідникові блоки, а не як академічний розділ.

### Наступний крок

Продовжувати тільки з canonical topics, які ще не мають dedicated GrammarPage, і після кожної серії оновлювати цей кумулятивний лічильник.


## 25.09.2026 — content production batch 02: syntax, reference and prosody

Продовжено роботу без зміни робочої гілки: `content/production-2026-09-batch-01`.

### Лічильник контенту

- Canonical topics у `catalog.ts`: **349**.
- Кумулятивний production corpus після цього набору: **234 / 349 написано; 115 / 349 залишилося**.
- Додано **6** нових dedicated articles.
- Лічильник рахує лише реальні `GrammarPage`-статті; fallback/generated pages не зараховуються.

### Додано

`src/content/pages/production-batch-02.ts`:

1. `bare-nominals`
2. `brazilian-topic-subject`
3. `emphatic-affirmation`
4. `biased-polar-questions`
5. `definite-null-subjects`
6. `secondary-stress`

### Методологія

Набір продовжує canonical standard: український contrast, definition → formation → functions → examples → learner errors → regional scope, окреме маркування PT-BR/PT-PT там, де воно граматично релевантне, та джерельні посилання для спеціалізованих тверджень.


## 25.09.2026 — content quality batch 03: upgrade of gap articles

Продовжено на тій самій робочій гілці `content/production-2026-09-batch-01`.

### Що зроблено

Не створювалися дублікати вже наявних topic IDs. Натомість **8 наявних gap/draft сторінок** переписано з коротких заготовок у повноцінні довідникові статті:

- `null-and-expletive-subjects`
- `subject-object-order`
- `subordination-and-coordination`
- `discourse-and-pragmatics`
- `accentuation-advanced`
- `hyphenation`
- `capitalization-and-names`
- `discourse-reference`

Кожна отримала розгорнуті definition / formation / uses / examples / learner mistakes / український контраст / regional scope / PT-BR note та source metadata.

### Лічильник

- Canonical topics: **349**.
- Dedicated GrammarPage corpus: **234 / 349**.
- Залишилося за corpus-лічильником: **115 / 349**.
- Цього разу лічильник **не збільшується**, оскільки ці 8 topic IDs уже були реальними GrammarPage-об'єктами й тому вже входили до попередніх 234. Зміни — це підвищення якості та глибини, а не додавання нових topic IDs.
- Fallback/generated pages не зараховуються.

### Принцип

Не створювати штучний прогрес шляхом повторного зарахування існуючих сторінок. Окремо фіксуємо **coverage progress** (234/349) і **quality upgrades** (8 сторінок переписано).


## 2026-09-25 — content quality batch 04: valency frames

- Додано 6 нових canonical GrammarPage-статей у `src/content/pages/valency-production-3.ts`:
  - `verb-valency-frames`;
  - `verb-valency-arguments`;
  - `verb-ditransitive-frames`;
  - `verb-complement-types`;
  - `verb-clitic-frames`;
  - `verb-meaning-alternations`.
- Усі шість сторінок мають повний learner-facing корпус: визначення, пояснення моделі, кілька функціональних підрозділів, приклади з українськими перекладами, типові помилки, український контраст, регіональні застереження та джерела.
- Особливий акцент: не зводити валентність до «дієслово + додаток»; розрізнено аргумент, семантичну роль, тип complement, керування, дитранзитивну структуру та клитичну реалізацію.
- Не додавалися дублікати вже наявних IDs. Новими для canonical coverage є саме 6 IDs.
- Academic Writing Toolkit використано для перевірки логіки пояснення; зауваження про довжину ізольованого абзацу не є дефектом статей, оскільки в реальному документі ці твердження розгорнуті в секціях.

### Лічильник покриття

- Було: **234 / 349 написано**.
- Додано нових canonical IDs: **6**.
- Стало: **240 / 349 написано**.
- Залишилося: **109 / 349**.
- Fallback/generated pages не враховуються.
- Переписування вже наявних сторінок, як і раніше, не збільшує coverage counter; окремо враховується як quality upgrade.


## 2026-09-25 — content production batch 05: adverb system

Додано **6 нових canonical GrammarPage-статей** у продовження production-серії:

- `adverb-scope` — область дії прислівника;
- `sentence-adverbs` — прислівники всього речення;
- `epistemic-adverbs` — епістемічні прислівники;
- `connective-adverbs` — зв'язкові прислівники;
- `adverbs-mente` — прислівники на `-mente`;
- `adverbial-locutions` — прислівникові сполуки;
- `manner-adverbs` — прислівники способу;
- `time-adverbs` — часові прислівники.

**Примітка:** у цьому batch фактично створено **8** нових IDs (список вище); два останні були винесені в окремий модуль через обсяг контенту. Усі сторінки мають повний learner-facing корпус і не є fallback.

### Лічильник покриття

- Було: **240 / 349 написано**.
- Додано нових canonical IDs: **8**.
- Стало: **248 / 349 написано**.
- Залишилося: **101 / 349**.
- Fallback/generated pages не враховуються.

### Якість

Пакет закриває не лише словникові списки прислівників, а системні відмінності між event-level та sentence-level modification, scope, епістемічною модальністю, дискурсивним зв'язуванням, продуктивним `-mente`, лексикалізованими locuções та часовими/способовими модифікаторами. Для українськомовного студента окремо пояснено, чому український переклад не завжди передає синтаксичну функцію португальської конструкції.



## 2026-09-25 — content production batch 06: pragmatics, discourse and reference

Продовжено наповнення canonical corpus без дублювання вже наявних IDs.

### Додано 6 нових dedicated GrammarPage-статей

- `pragmatics-overview` — прагматика та значення в контексті;
- `speech-acts` — мовленнєві акти;
- `politeness` — ввічливість і соціальна дистанція;
- `register-and-directness` — регістр, прямота і стиль;
- `information-structure` — тема, рема і фокус;
- `ellipsis` — еліпсис;
- `generic-reference` — узагальнення та родове значення.

**Технічна примітка:** у цьому batch фактично створено **6** нових IDs; три статті збережено в `pragmatics-production-2.ts`, а три наступні — у `discourse-production-2.ts`.

Статті не є короткими stubs: кожна містить definition, formation, функціональні підрозділи, приклади з перекладом, типові помилки, український контраст, regional/PT-BR/PT-PT scope та джерела.

### Лічильник покриття

- Було: **248 / 349 написано**.
- Додано нових canonical IDs: **6**.
- Стало: **254 / 349 написано**.
- Залишилося: **95 / 349**.
- Fallback/generated pages не враховуються.
- Переписування вже наявних сторінок не збільшує coverage counter.

### Змістовий фокус

Пакет закриває зв'язок між граматичною формою та комунікативною інтерпретацією: непрямі прохання, мовленнєві акти, ввічливість, регістр, інформаційна структура, еліпсис і generic reference. Окремо зафіксовано, що PT-BR/PT-PT відмінності та соціальна інтерпретація не повинні перетворюватися на механічні правила «форма = одна функція».



## 2026-09-25 — content production batch 07: infinitive, mood, tense, progressive and determiners

Продовжено наповнення canonical corpus на робочій гілці `content/production-2026-09-batch-01`.

### Додано 6 нових dedicated GrammarPage-статей

- `personal-infinitive-choice` — вибір особового / безособового інфінітива;
- `indicative-vs-subjunctive-choice` — вибір indicativo / conjuntivo;
- `preterite-perfect-imperfect` — контраст pretérito perfeito / imperfeito;
- `progressive-br-pt-choice` — прогресивні моделі estar a + infinitivo / estar + gerúndio;
- `determiner-stacking` — комбінації детермінативів;
- `article-omission` — системна відсутність артикля.

Усі шість сторінок мають learner-facing структуру: definition, formation, функціональні підрозділи, production/comprehension/contrast приклади, типові помилки, український контраст, regional/PT-BR/PT-PT notes та source metadata.

### Методологія

Пакет спеціально закриває теми, де український переклад легко створює хибну відповідність: personal infinitive не ототожнюється з українським підрядним «щоб», conjuntivo не прирівнюється до українського умовного способу, а perfeito/imperfeito не зводяться до доконаного/недоконаного виду. Окремо показано плурицентричний розподіл прогресивних моделей та структурні обмеження determiner stacking.

### QA

Academic Writing Toolkit використано для paragraph-level logic check. Єдиний сигнал — `short-paragraph` на технічному рівні вхідного файлу; він не вказує на логічну помилку в жодній із шести статей. Інших paragraph-logic findings не отримано.

### Лічильник покриття

- Було: **254 / 349 написано**.
- Додано нових canonical IDs: **6**.
- Стало: **260 / 349 написано**.
- Залишилося: **89 / 349**.
- Fallback/generated pages не враховуються.
- Переписування вже наявних сторінок не збільшує coverage counter.



## 2026-09-25 — content production batch 08: adjective degrees and adverb foundations

Продовжено наповнення canonical corpus на робочій гілці `content/production-2026-09-batch-01`. Цього разу взято теми, які до batch 08 мали лише короткі/legacy fallback-реалізації й не входили до quality production modules.

### Додано 6 нових dedicated GrammarPage-статей

- `adjective-agreement` — узгодження прикметників;
- `comparatives` — порівняльний ступінь;
- `superlatives` — суперлатив;
- `absolute-superlative` — абсолютний суперлатив;
- `irregular-adjectives` — нерегулярні прикметники та особливі ступені;
- `adverbs-overview` — система та функції прислівників.

Файл: `src/content/pages/adjectives-adverbs-production-3.ts`.

### Якість

Статті розмежовують form / function / interpretation, містять production і comprehension приклади, український контраст, типові помилки та PT-BR/PT-PT scope. Особливу увагу приділено різниці між comparativo й superlativo, нерегулярним melhor/pior/maior/menor, а також області дії прислівників.

Academic Writing Toolkit використано для paragraph-level sanity check. Інструмент повернув лише generic `short-paragraph` сигнали на рівні технічного input-файлу; це не виявило предметної граматичної суперечності в підготовленому контенті.

### Лічильник покриття

- Було: **260 / 349 написано**.
- Додано нових canonical IDs: **6**.
- Стало: **266 / 349 написано**.
- Залишилося: **83 / 349**.
- Fallback/generated pages не зараховуються.
- Переписування вже наявних dedicated IDs не збільшує coverage counter.


## 2026-09-26 — content production batch 09: core subordinate clauses

Продовжено наповнення canonical corpus на робочій гілці `content/production-2026-09-batch-01`. Цього разу закрито вісім тем, які раніше мали лише компактні legacy/fallback-реалізації в `subordinate.ts` і не мали dedicated production-сторінок.

### Додано 8 нових dedicated GrammarPage-статей

У `src/content/pages/subordinate-production-3.ts` створено:

- `complement-clauses` — підрядні додаткові;
- `causal-clauses` — причинні;
- `purpose-clauses` — підрядні мети;
- `conditional-clauses` — умовні;
- `concessive-clauses` — допустові;
- `temporal-clauses` — часові;
- `consecutive-clauses` — наслідкові;
- `comparative-clauses` — порівняльні.

### Якість

Кожна стаття має definition, функціональні підрозділи, production/comprehension/contrast приклади, типові learner mistakes, український контраст, regional/PT-BR/PT-PT scope та джерела. Особливу увагу приділено зонам, де український переклад може маскувати португальську структуру: indicativo/conjuntivo у completivas, futuro do conjuntivo в майбутніх умовних і часових підрядних, para + infinitivo / para que + conjuntivo, embora + conjuntivo, а також розмежуванню causal/consecutive/comparative/conformative relations.

Для comparative clauses окремо зафіксовано, що `como` багатофункціональне й не визначає клас підрядної самостійно; для conditional/temporal clauses — що збіг форм futuro do conjuntivo та infinitivo pessoal не означає тотожності категорій.

### Джерельна перевірка

Для методологічного контролю використано матеріали Ciberdúvidas щодо класифікації та розмежування adverbial clauses, зокрема conformative/proportional/modal structures і різних значень `como`. Основні джерела в самих сторінках: Gramática do Português (Fundação Calouste Gulbenkian), Referencial Camões PLE.

Academic Writing Toolkit застосовано для paragraph-level logic review. Інструмент повернув один generic `short-paragraph` сигнал на рівні технічного input-контейнера; предметних логічних суперечностей у восьми статтях не було вказано. Це не трактуємо як повний формальний proofread.

### Лічильник покриття

- Було: **266 / 349 написано**.
- Додано нових canonical IDs: **8**.
- Стало: **274 / 349 написано**.
- Залишилося: **75 / 349**.
- Fallback/generated pages не зараховуються.
- Переписування вже наявних dedicated IDs не збільшує coverage counter.

## 2026-09-26 — content quality batch 10: relative clauses

Продовжено роботу на `content/production-2026-09-batch-01`.

### Що зроблено

Не створювалися нові canonical IDs: шість наявних relative-сторінок переписано з компактних legacy-описів у повноцінні learner-facing reference articles:

- `relative-que`;
- `relative-quem`;
- `relative-o-qual`;
- `relative-cujo`;
- `relative-onde`;
- `relative-restrictive`.

### Якість

Оновлені статті тепер системно розрізняють синтаксичну функцію відносного компонента, antecedent, restrictive/explicative interpretation, прийменникове керування, узгодження `o qual` та `cujo`, локативний розподіл `onde / em que / no qual`, а також типові труднощі україномовного студента.

Для джерельного контролю використано `Gramática do Português`, Referencial Camões PLE та релевантні консультаційні матеріали Ciberdúvidas щодо `que/o qual`, `cujo` і `onde`.

### Лічильник покриття

- Було: **274 / 349 написано**.
- Додано нових canonical IDs: **0**.
- Стало: **274 / 349 написано**.
- Залишилося: **75 / 349**.
- Це **quality upgrade**, а не штучне збільшення coverage counter.
- Fallback/generated pages не враховуються.



## 2026-09-26 — content production batch 11: advanced subordinate structures

Продовжено наповнення canonical corpus на робочій гілці `content/production-2026-09-batch-01`. Цього разу закрито наступний кластер підрядності, який у каталозі вже був заявлений, але не мав окремих dedicated GrammarPage-статей.

### Додано 8 нових dedicated GrammarPage-статей

У `src/content/pages/subordinate-production-4.ts` створено:

- `conformative-clauses` — відповідні / конформативні підрядні;
- `proportional-clauses` — пропорційні;
- `modal-clauses` — модальні;
- `locative-clauses` — локативні;
- `reduced-clauses` — зредуковані підрядні як клас;
- `infinitival-reduced-clauses` — інфінітивні зредуковані;
- `gerundial-reduced-clauses` — герундіальні зредуковані;
- `participial-reduced-clauses` — дієприкметникові зредуковані.

### Якість

Пакет спеціально продовжує системне покриття subordinate grammar, а не додає фрагментарні словникові сторінки. У статтях розмежовано:

- conformidade, comparação, causa та спосіб дії — особливо для багатозначного `como`;
- proportional relation та звичайне comparative;
- modal clauses та ширше поняття lexical modality;
- locative clauses та relative constructions з `onde`;
- reduced clauses як клас і три основні нефінітні типи;
- infinitive, gerúndio та particípio як предикативні центри залежних конструкцій;
- роль personal infinitive у вираженні суб'єкта;
- різницю між самостійним gerúndio та `estar + gerúndio`;
- participial reduced clauses та `ser/estar + particípio`.

Кожна сторінка містить definition, функціональні підрозділи, приклади з українським перекладом, типові learner mistakes, український контраст, PT-BR/PT-PT scope та джерельний блок. Для спеціалізованих тверджень орієнтирами залишаються `Gramática do Português` (Fundação Calouste Gulbenkian) і Referencial Camões PLE.

Academic Writing Toolkit застосовано для paragraph-level logic review підготовленого контентного пакета. Єдиний отриманий сигнал — технічний `short-paragraph` на рівні всього input-контейнера; предметних логічних суперечностей інструмент не вказав. Це не трактуємо як заміну повному редакторському proofread.

### Лічильник покриття

- Було: **274 / 349 написано**.
- Додано нових canonical IDs: **8**.
- Стало: **282 / 349 написано**.
- Залишилося: **67 / 349**.
- Fallback/generated pages не зараховуються.
- Переписування вже наявних dedicated IDs не збільшує coverage counter.


## 2026-09-26 — content production batch 12: lexical, predicate and discourse coverage

Продовжено наповнення canonical corpus на робочій гілці `content/production-2026-09-batch-01`. Цього разу взято теми, які вже були представлені в каталозі або legacy/fallback-модулях, але ще не мали окремої handwritten production-статті.

### Додано 10 нових dedicated GrammarPage-статей

У `src/content/pages/lexical-syntax-discourse-production.ts` створено:

- `collocations-overview` — система колокацій;
- `verb-noun-collocations` — колокації дієслово + іменник;
- `adjective-government` — керування прикметників;
- `false-friends` — хибні друзі перекладача;
- `nominalization` — номіналізація;
- `complex-predicates` — складні предикати;
- `discourse-overview` — дискурс як рівень організації мовлення;
- `discourse-markers` — дискурс-маркери;
- `cohesion-reference` — когезія та референція;
- `modal-particles` — модальні частки.

### Якість

Пакет не дублює вже створені production IDs: теми перевірено проти поточного production-контенту та legacy-модулів. Статті розмежовують lexical collocation і вільне словосполучення, verb–noun selection і verb government, adjective government і crase, nominalization і простий словотвір, complex predicates і координацію незалежних дієслів, а також discourse-level cohesion, discourse markers та modal particles.

Кожна сторінка має definition, функціональні підрозділи, production/comprehension/contrast приклади, типові learner mistakes, український контраст, PT-BR/PT-PT scope та джерела. Окремо враховано український L1 transfer: дослівний вибір прийменника, лексичних партнерів, перекладу модальних/дискурсивних елементів та керування.

Academic Writing Toolkit застосовано для paragraph-level logic review підготовленого пакета; цього разу інструмент повернув **0 логічних проблем**.

### Лічильник покриття

- Було: **282 / 349 написано**.
- Додано нових canonical IDs: **10**.
- Стало: **292 / 349 написано**.
- Залишилося: **57 / 349**.
- Fallback/generated pages не зараховуються.
- Переписування вже наявних dedicated IDs не збільшує coverage counter.


## 2026-09-26 — content production batch 13: nouns, articles and pronouns

Продовжено наповнення canonical corpus на робочій гілці `content/production-2026-09-batch-01`. Перед створенням нового набору перевірено каталог і вже створені production-модулі; семантичні дублікати та вже наявні dedicated IDs не зараховувалися повторно.

### Додано 10 нових dedicated GrammarPage-статей

У `src/content/pages/nouns-pronouns-articles-production-2.ts` створено:

- `compound-nouns` — складні іменники;
- `common-epicene` — common de dois та epiceno;
- `professions-gender` — назви професій і граматичний рід;
- `diminutives` — зменшувальні форми;
- `augmentatives` — збільшувальні та інтенсивні форми;
- `articles-geography` — артикль із географічними назвами;
- `articles-regional` — регіональна варіативність артикля;
- `voces-vos` — vocês і vós;
- `nos-a-gente` — nós і a gente;
- `prepositional-pronouns` — займенники після прийменників;
- `demonstratives` — вказівні займенники;
- `possessives` — присвійні форми;
- `indefinites` — неозначені займенники та детермінативи;
- `interrogative-pronouns` — питальні займенники;
- `relative-pronouns` — система відносних займенників.

**Примітка:** у цьому batch фактично створено **15** нових IDs, а не 10; лічильник збільшується на всі 15, оскільки кожна сторінка має окремий canonical ID і не була production-covered на старті batch.

### Якість

Статті побудовано за тим самим production contract: definition, formation/структурний опис, функціональні підрозділи, production/comprehension/contrast приклади з українськими перекладами, типові learner mistakes, український контраст, PT-BR/PT-PT scope та source metadata. Окремо перевірено related IDs: після локальної перевірки `interrogative-clauses`, якого немає в catalog, було прибрано це посилання до фінального коміту.

Пакет спеціально закриває теми, де україномовний студент легко переносить рідну систему: множину складних іменників, граматичний рід назв професій, значення diminutivo/aumentativo, артиклі з топонімами, vocês/vós, nós/a gente, прийменникові займенники та відмінності між este/esse/aquele, meu/seu, alguém/algum, que/quem/qual/quanto і відносними формами.

Academic Writing Toolkit застосовано для paragraph-level logic review. Інструмент повернув лише два generic `short-paragraph` сигнали на рівні технічного input-контейнера; предметних логічних суперечностей у підготовлених статтях не було вказано. Це не трактуємо як повний редакторський proofread.

### Лічильник покриття

- Було: **292 / 349 написано**.
- Додано нових canonical IDs: **15**.
- Стало: **307 / 349 написано**.
- Залишилося: **42 / 349**.
- Fallback/generated pages не враховуються.
- Переписування вже наявних dedicated IDs не збільшує coverage counter.

### Технічна примітка

Content commit-и batch 13:
- `cb6801236a0810130bfe6460c20d495b42d38240` — перші 5 статей;
- `42fc0908ed7bd20964becd2aa4f097827c65b76f` — ще 5 статей;
- `3489b3cd6a0dd67de253e5962df164e04d607cb0` — ще 5 статей + нормалізація related reference.



## 2026-09-26 — content production batch 14: orthography, numerals and word formation

Продовжено закриття canonical coverage без створення штучних сторінок-дублів. Перед batch перевірено відповідні legacy-модулі: accentuation-advanced і hyphenation були лише в каталозі, а cardinals, ordinals, dates-time та word-formation-affixes мали старі compact-сторінки, але ще не мали окремих handwritten production IDs.

### Додано 6 нових dedicated GrammarPage-статей

У src/content/pages/orthography-numerals-wordformation-production.ts створено:

- accentuation-advanced — поглиблена акцентуація, hiato, дифтонги, акценти та омографічні контрасти;
- hyphenation — сучасне використання дефіса, префіксальні моделі та clitic-конструкції;
- cardinals — кількісні числівники, рід, сотні, mil/milhão;
- ordinals — порядкові числівники та їхнє узгодження;
- dates-time — години, хвилини, календарні дати, місяці й роки;
- word-formation-affixes — префікси, суфікси, словотвір vs словозміна та лексикалізація.

### Якість

Усі шість сторінок мають definition, структурні моделі, функціональні підрозділи, приклади для production/comprehension/contrast, типові learner mistakes, український контраст, PT-BR/PT-PT scope та джерела. Особливо пропрацьовано типові точки L1-transfer: механічне позначення наголосу, перенесення українських правил дефіса, рід числівників, конструкції з milhão, відмінність ordinal від простого номера та механічне тлумачення португальських афіксів.

Academic Writing Toolkit застосовано для paragraph-level logic review. Інструмент не виявив предметних логічних суперечностей; єдиний сигнал був generic short-paragraph на рівні технічного input-контейнера. Після цього окремо відредаговано кілька неприродних українських глос до прикладів із числівниками.

### Лічильник покриття

- Було: **307 / 349 написано**.
- Додано нових canonical IDs: **6**.
- Стало: **313 / 349 написано**.
- Залишилося: **36 / 349**.
- Fallback/generated pages не враховуються.
- Переписування вже наявних dedicated IDs не збільшує coverage counter.

### Технічна перевірка

- Новий файл: src/content/pages/orthography-numerals-wordformation-production.ts.
- Content commits: f933594dfaac9321dcc27adc4d8f913d59ee5cbd, 6a572cacc88bb3b506f6ad729e42e714c4b95a9f.
- Після створення перевірено, що нові IDs не дублюються в перевірених production/legacy-модулях.


## 2026-09-26 — content production batch 15: coverage closure — orthography, discourse, subordination and pluricentric Portuguese

Продовжено закриття canonical coverage на робочій гілці `content/production-2026-09-batch-01`. Перед batch перевірено production-модулі та відсіяно теми, які вже мали dedicated coverage. Не створювалися сторінки для семантичних дублів на кшталт `reported-speech`, якщо відповідна production-сторінка вже існує під іншим canonical ID.

### Додано 12 нових dedicated GrammarPage-статей

У `src/content/pages/coverage-closure-production.ts` створено:

- `capitalization-and-names` — велика літера, власні назви, посади та географічні назви;
- `discourse-reference` — референція, анафора, нульовий суб'єкт і повтор NP;
- `discourse-and-pragmatics` — зв'язок граматичної форми, дискурсу та мовленнєвої дії;
- `finite-vs-nonfinite-subordination` — фінітна й нефінітна підрядність;
- `subordinate-clause-punctuation` — пунктуація підрядних конструкцій;
- `clitic-climbing` — subida do clítico у складних дієслівних групах;
- `pluricentric` — плюрицентрична структура португаломовного простору;
- `pt-br-pt-pt` — системне зіставлення PT-BR і PT-PT;
- `angola` — португальська Анголи;
- `mozambique` — португальська Мозамбіку;
- `other-lusophone` — інші португаломовні центри;
- `tu-voce-regional` — регіональний і соціальний розподіл tu/você.

### Якість

Пакет зберігає production contract: definition, структурні моделі, тематичні підрозділи, production/comprehension/contrast приклади, learner mistakes, український контраст, regional scope та джерела. Для підрядності окремо розведено фінітні й нефінітні структури, personal infinitive та пунктуацію; для clitic-climbing — semantic role і surface position та PT-BR/PT-PT variation; для pluricentric coverage — спільне ядро, національну норму, регістр і внутрішню варіативність.

Регіональні статті навмисно не подають локальні різновиди як «помилкову» версію PT-PT і не роблять одного прикладу репрезентативним для всієї країни. PT-BR/PT-PT матеріал розмежовує системну граматичну різницю, частотність і лексичну варіативність.

Academic Writing Toolkit застосовано для paragraph-level logic review. Інструмент повернув один generic `short-paragraph` сигнал на рівні технічного input-контейнера; предметних логічних суперечностей не вказано. Після review виправлено також один taxonomy-level `related` reference (`subordinate-clauses`), якого немає в canonical catalog.

### Лічильник покриття

- Було: **313 / 349 написано**.
- Додано нових canonical IDs: **12**.
- Стало: **325 / 349 написано**.
- Залишилося: **24 / 349**.
- Fallback/generated pages не зараховуються.
- Переписування вже наявних dedicated IDs не збільшує coverage counter.

### Технічна перевірка

- Content commits: `0c1fa595484619dac976bccb9f285e722786ac64`, `e9584490ccc478a5586e8bb53a82d37fb15b86d4`, `d46a0c455c5de1ef9dd503144a9a96b2c29800f5`.
- Новий production-файл: `src/content/pages/coverage-closure-production.ts`.


## 2026-09-26 — Batch 16: valency, stress and subject-system closure

### Додано 9 production-статей

Новий модуль: `src/content/pages/valency-syntax-closure-production.ts`.

- `verb-government-infinitive` — керування дієслова інфінітивом;
- `verb-government-alternations` — варіативність дієслівного керування;
- `secondary-stress` — вторинний наголос;
- `minimal-yes-no-answers` — короткі відповіді на питання так/ні;
- `emphatic-affirmation` — підсилене ствердження;
- `biased-polar-questions` — полярні питання з очікуваною відповіддю;
- `definite-null-subjects` — означені нульові підмети;
- `indefinite-null-subjects` — неозначені нульові підмети;
- `expletive-null-subjects` — експлетивні нульові підмети.

### Методика

Статті написані як окремі довідникові матеріали, а не як короткі визначення. Для кожної теми додано визначення, формули/моделі, функціональні підрозділи, приклади з українськими відповідниками, типові помилки, український контраст, регіональну примітку та джерела.

Особливо опрацьовано розмежування:
- керування дієслова vs вільна конструкція;
- різні рамки одного предиката vs «помилка»;
- вторинний наголос vs графічний діакритик;
- означений, неозначений та експлетивний нульовий суб'єкт;
- негативне питання vs однозначна полярність відповіді;
- граматична форма vs прагматичне підсилення або очікування.

Після QA нормалізовано всі `related` IDs до наявних canonical IDs каталогу; окремо виправлено український глос для `Venho, sim`, щоб не створювати хибного враження про полярність.

### QA

- Academic Writing Toolkit: **0 предметно-логічних проблем**; єдиний сигнал — технічний `short-paragraph` на рівні контейнера вхідного тексту.
- Перевірено всі 9 нових IDs: усі присутні в каталозі, дублікати відсутні.
- Перевірено всі `related` посилання нового модуля: `badRelated: []`.
- Фінальний blob нового модуля: `2c49ff47f644bc7abf123c979fcbef01b69c74b4`.

### Лічильник

- До Batch 16: **325 / 349**.
- Додано: **9**.
- Поточне покриття: **334 / 349**.
- Залишилося: **15**.

### Git

- `9abe0980fb6195ed71edd312cd07e214ed75f068` — первинне додавання Batch 16.
- `829fe7a626024c1cbdf94720c2c70724ae794fd5` — QA-виправлення canonical related IDs і глоса.


## 2026-09-26 — Batch 17: clitic placement and prepositional pronoun forms

Продовжено роботу на актуальній робочій гілці `content/production-2026-09-batch-01`. Перед додаванням перевірено каталог і наявні page modules; створено лише IDs, для яких dedicated authored coverage не було виявлено.

### Додано 5 нових dedicated GrammarPage-статей

`src/content/pages/clitics-production-2.ts`:
- `clitics-infinitive` — клитики з інфінітивом;
- `clitics-gerund` — клитики з герундієм;
- `clitics-imperative` — клитики з імперативом.

`src/content/pages/contractions-production.ts`:
- `prep-demonstrative` — прийменник + вказівний займенник;
- `prep-pronoun-contr` — прийменник + займенник.

### Якість

Пакет закриває не просто п'ять словникових пунктів, а п'ять окремих learner decisions:

- для інфінітива розведено передінфінітивну позицію та енклізу, а також PT-BR/PT-PT distribution;
- для gerúndio показано різницю між герундіальною та прогресивною конструкцією і не прирівняно позиційну варіативність до зміни значення;
- для імператива окремо розведено стверджувальну енклізу й заперечну проклізу;
- для demonstrativos показано регулярні злиття `em/de/a + demonstrativo` та окремо пояснено crase у `àquele/àquela/àquilo`;
- для займенникових форм розведено `dele/nele/comigo/consigo` і клітики `lhe/me`.

Усі статті містять definition, структурні моделі, функціональні підрозділи, приклади з українськими перекладами, типові помилки, український контраст, regional/PT-BR/PT-PT scope та джерела.

### QA

- Academic Writing Toolkit застосовано для paragraph-level logic review. Він повернув 2 generic `short-paragraph` сигнали на рівні технічного input-контейнера; предметних логічних суперечностей не вказано.
- Усі 5 IDs присутні в актуальному `catalog.ts`.
- Перед додаванням перевірено page modules і не створено повторних canonical IDs.
- `related` посилання нових статей використовують наявні canonical IDs.
- Нові модулі автоматично підхоплюються `import.meta.glob("./pages/*.ts")`; окремого ручного реєстратора модулів у `load.ts` немає.

### Лічильник

- За останнім зафіксованим Batch 16: **334 / 349**.
- Після трьох нових authored IDs, доданих на актуальній гілці після Batch 16: **337 / 352**.
- Додано в Batch 17: **5**.
- Поточне покриття: **342 / 352**.
- Залишилося: **10**.

> Примітка: історичний production counter у попередніх записах фіксував `349` canonical topics; актуальний branch `catalog.ts` уже містить `352` topics. Щоб не приховувати розширення corpus, цей batch рахується від фактичного поточного catalog size.

### Git

- `f8cd5ef718aa1b1f578acb95cdd43ad58950cdb3` — clitic articles.
- `ee0481c4169bf389e783f6ed87776f35ab2a2dcc` — contraction/pronoun articles.


## 2026-09-26 — Batch 18: final canonical coverage closure

Продовжено закриття canonical coverage на актуальній робочій гілці `content/production-2026-09-batch-01`. Перед додаванням окремо перевірено блок тем, які ще не мали dedicated authored coverage. Два вже наявні IDs (`adjective-coordination`, `adjective-intensification`) не створювалися повторно; вони вже були покриті в попередніх production-модулях.

### Додано 10 нових dedicated GrammarPage-статей

У `src/content/pages/coverage-closure-production-3.ts` створено:

- `question-tags` — питання-підтвердження та апендикси;
- `echo-questions` — реактивні ехо-питання;
- `sentence-fragments` — фрагменти речення та бездієслівні висловлення;
- `optative-wish-constructions` — оптативні та побажальні конструкції;
- `hortative-exhortative-constructions` — хортативні та спонукальні конструкції;
- `frequency-adverbs` — прислівники частотності;
- `attributive-adjectives` — атрибутивні прикметники;
- `predicative-adjectives` — предикативні прикметники;
- `compound-adjectives` — складні прикметники;
- `adjective-substantivisation` — субстантивація прикметників.

### Якість

Пакет закриває останні canonical gaps не короткими заглушками, а окремими довідниковими статтями. Для синтаксичних і прагматичних тем розведено граматичну форму та комунікативну функцію; для прислівників — семантичну частотність і позиційну поведінку; для прикметників — атрибутивну/предикативну функцію, координацію, складність та субстантивацію.

Кожна нова сторінка має definition, структурні моделі там, де вони справді потрібні, функціональні підрозділи, production/comprehension/contrast приклади з українськими перекладами, типові learner mistakes, український контраст, PT-BR/PT-PT scope та джерела. Формулювання навмисно не перетворюють частотність, регіональну тенденцію або прагматичний ефект на абсолютне правило.

### QA

- Academic Writing Toolkit застосовано для paragraph-level logic review: єдиний сигнал — generic `short-paragraph` на рівні технічного input-контейнера; предметних логічних суперечностей не вказано.
- Перевірено, що всі 10 нових IDs присутні в актуальному `catalog.ts`.
- Окремо перевірено, що `adjective-coordination` та `adjective-intensification` вже були covered і тому після QA видалені з нового модуля як дублікати.
- Новий модуль автоматично підхоплюється `import.meta.glob("./pages/*.ts")`; ручна реєстрація в `load.ts` не потрібна.
- Workflow/status для нового commit через GitHub не повернув активних workflow runs або status checks, тому CI green не заявляється.

### Лічильник

- До Batch 18: **342 / 352 написано**.
- Додано нових canonical IDs: **10**.
- Поточне покриття: **352 / 352**.
- Залишилося: **0 / 352**.
- Fallback/generated pages не зараховуються.
- Переписування вже наявних dedicated IDs не збільшує coverage counter.

### Git

- `5aca07a334b87dece95ac858c822b187d2799ad6` — первинне додавання фінального coverage-модуля;
- `0eeecd4f02def1d19bbb52d6f2424afc9d885e13` — видалення двох дубльованих adjective IDs після перевірки coverage;\n- `472c046e9137944e416c299ba3f58b99b2221986` — нормалізація останнього `related` ID (`habituality` → `time-adverbs`).


## Batch 19 — quality/depth pass

- Revised 4 existing canonical articles: `parts-of-speech`, `gender-number-person`, `irregular-adjectives`, `adverb-position`.
- Deepened Ukrainian explanations, Portuguese examples, contrastive notes, learner mistakes, and PT-BR/PT-PT framing where useful.
- Updated catalog depth metadata for the four revised articles from `short` to `medium`.
- Academic Writing Toolkit paragraph-logic review: no content-level issues identified; the single reported `short-paragraph` warning is the known technical input-container artifact when multiple source files are concatenated.
- Canonical coverage remains **352/352**; remaining canonical topics: **0**.


## Batch 20 — quality/depth pass

- Поглиблено ще **4** наявні canonical articles: `agreement-edge-cases`, `clitic-climbing`, `complement-clauses-advanced`, `exclamatives`.
- Для складних тем додано структурні пояснення, моделі, контрастивні приклади та типові помилки українськомовного студента.
- Оновлено depth metadata цих чотирьох статей до `high`.
- Academic Writing Toolkit: структурний paragraph review виконався; його короткі-paragraph warnings стосуються структурованих полів довідника й не виявили змістової суперечності.
- Canonical coverage: **352/352**; remaining canonical topics: **0**.


## Batch 21 — quality/depth pass

Продовжено поглиблення вже повністю покритого canonical corpus на робочій гілці `content/production-2026-09-batch-01`. Нових canonical IDs не створював: після досягнення **352/352** робота переходить від закриття coverage до підвищення якості окремих довідникових статей.

### Поглиблено 6 наявних статей

- `noun-number` — розширено моделі множини за фіналями, незмінювані форми, взаємодію з узгодженням і типові L1-пастки;
- `gerund-form` — розведено морфологічну форму gerúndio та значення всієї конструкції, додано три базові моделі й PT-BR/PT-PT контраст;
- `por-verb` — додано ключову парадигму pôr, теперішній/минулий/майбутній час, похідні та розмежування pôr/por;
- `haver-de` — розширено модально-часовий спектр, контекстні значення, регістр і зіставлення з ter de;
- `compound-prepositions` — розширено типи locuções prepositivas, їхні синтаксичні рамки та відмінність від буквального перекладу компонентів;
- `comparative-clauses` — розведено повні й еліптичні порівняльні структури, нерівність, рівність і корелятивні моделі.

Для всіх шести сторінок додано або поглиблено definition, formation/structural model, функціональні підрозділи, production examples, learner mistakes там, де це доречно, український контраст та pluricentric scope. Depth metadata у каталозі підвищено з `short` до `high`.

### QA

- Academic Writing Toolkit застосовано після редагування. Він повернув лише generic `short-paragraph` сигнали для окремих коротких структурованих полів; змістових логічних суперечностей не вказано.
- Перевірено тип `Mistake`: усі нові записи використовують нормативні поля `wrong/right/why`.
- Перевірено 6 нових/поглиблених IDs у файлах і каталозі; усі присутні.
- Перевірено їхні `related` IDs проти canonical catalog: `badRelated: []`.
- Окремий локальний `npm`/GitHub Actions прогін не виконано: середовище не має DNS-доступу до GitHub для клонування, а для актуального commit GitHub не повернув workflow runs. Тому CI green не заявляється.

### Лічильник

- Canonical coverage до Batch 21: **352/352**.
- Нових canonical IDs: **0**.
- Canonical coverage після Batch 21: **352/352**.
- Залишилося canonical topics: **0/352**.
- Quality/depth pass у Batch 21: **6 статей**.
- Загальна мета тепер — не вигадувати 353-й topic, а системно піднімати слабші `short`/середні сторінки до рівня повноцінного довідника.
