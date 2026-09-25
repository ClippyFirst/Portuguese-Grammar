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

**Технічна примітка:** у цьому batch фактично створено **7** нових IDs; три перші статті збережено в `pragmatics-production-2.ts`, а чотири наступні — у `discourse-production-2.ts`.

Статті не є короткими stubs: кожна містить definition, formation, функціональні підрозділи, приклади з перекладом, типові помилки, український контраст, regional/PT-BR/PT-PT scope та джерела.

### Лічильник покриття

- Було: **248 / 349 написано**.
- Додано нових canonical IDs: **7**.
- Стало: **255 / 349 написано**.
- Залишилося: **94 / 349**.
- Fallback/generated pages не враховуються.
- Переписування вже наявних сторінок не збільшує coverage counter.

### Змістовий фокус

Пакет закриває зв'язок між граматичною формою та комунікативною інтерпретацією: непрямі прохання, мовленнєві акти, ввічливість, регістр, інформаційна структура, еліпсис і generic reference. Окремо зафіксовано, що PT-BR/PT-PT відмінності та соціальна інтерпретація не повинні перетворюватися на механічні правила «форма = одна функція».

