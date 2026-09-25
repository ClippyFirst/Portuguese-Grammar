# Архітектура проєкту Portuguese-Grammar

Дата: 25 вересня 2026
Репозиторій: ClippyFirst/Portuguese-Grammar
Статус: canonical architecture

## 1. Призначення
Проєкт — довідник граматики португальської для носіїв української. Архітектура має підтримувати чотири незалежні рівні: grammar domain, pedagogy, variation/evidence, presentation.

UI не повинен знати граматичну логіку. Контент є даними; route лише ідентифікує тему; presentation components відображають структуровані дані.

## 2. Канонічний потік

Catalog → Content loader → GrammarPage → Content QA → Presentation → Route/search/related navigation.

Основний принцип: content ≠ UI; grammar model ≠ route; route ≠ source of truth.

## 3. Шари

### Catalog — src/content/catalog.ts
- id
- category
- slug
- titleUk/titlePt/titleEn
- summary
- aliases
- related
- depth

Catalog є картою довідника, а не самою статтею.

### Content — src/content/pages/
Містить визначення, форму, функцію, приклади, таблиці, винятки, типові помилки, український контраст, PT-BR/PT-PT та регіональні примітки.

### Loader — src/content/load.ts
Відповідає за route key, пріоритет reviewed page над fallback, нормалізацію та захист від 404.

### Search — src/content/search.ts
Індексує українські, португальські та англійські назви, aliases, summary, slug/category і, за можливості, body. Українські aliases мають особливу вагу для цільової аудиторії.

## 4. Логічні домени
fundamentals; nouns; articles; determiners; adjectives; adverbs; pronouns; clitics; numerals; verbs; tenses; moods; infinitive; gerund; periphrases; se; negation; prepositions; contractions; crase; conjunctions; subordinate; relative; passive; agreement; syntax; valency; comparisons; semantics; pragmatics; discourse; lexical-grammar; word-formation; phonetics; spelling; regional.

Це canonical domain map. Нові теми повинні спочатку отримати місце в цій карті.

## 5. Педагогічний контракт
Кожна substantive page для українського носія бажано будується так:
1. Portuguese form.
2. Portuguese function.
3. Portuguese meaning.
4. Ukrainian structural contrast.
5. Typical Ukrainian interference.
6. Correct Portuguese examples.
7. PT-BR/PT-PT variation, якщо релевантно.

Приклад: не просто gostar = «любити», а gostar → verb → selects de → gostar de algo/alguém → українське «любити» не містить цього прийменника → типова інтерференція *gosto música → правильно gosto de música.

## 6. Варіативність
Не моделювати мову як BR = X і PT = Y. Для кожної варіативної конструкції окремо фіксувати grammaticality, standard status, frequency, register, region, social context та evidence.

## 7. Evidence
Для high-risk claims поступово варто мати evidence status: reference, normative, descriptive, corpus, academic, editorial, needs-review.
Особливо це стосується PT-BR/PT-PT, African Portuguese, clitic placement, personal infinitive, mood variation, article usage, agreement variation і spoken language.

## 8. QA
Structural QA: catalog/provider, related IDs, route-key uniqueness, metadata, fallback detection.
Linguistic QA: form, meaning, syntax, morphology, government, agreement, examples.
Contrastive QA: Ukrainian explanation, L1 transfer, false equivalents, natural Ukrainian translation.
Variation QA: PT-BR, PT-PT, African varieties, register, spoken/written, frequency.

## 9. Fallback policy
generated-pages.ts — coverage safety mechanism, not proof of completed content.
Правило: fallback ≠ reviewed grammar page. Core topic вважається завершеним лише після dedicated page, review, verified examples і перевіреного related graph.

## 10. Related graph
related — не декоративні посилання. Граф має зв'язувати prerequisite → advanced, form → function → exception, а також contrastive pairs. Не допускаються dead ends і broken IDs.

## 11. Depth
depth = глибина статті, а не CEFR level. Не змішувати ці поняття. У майбутньому CEFR можна зберігати окремим metadata layer.

## 12. Рекомендована фізична структура
При зростанні corpus до 300+ reviewed topics доцільно перейти від flat src/content/pages/*.ts до доменних підкаталогів: pages/fundamentals, nouns, determiners, pronouns, verbs, tenses, moods, syntax, subordinate, semantics, pragmatics, discourse, lexical-grammar, word-formation, phonetics, spelling, regional тощо.

Не робити цей refactor лише заради естетики: спочатку canonical inventory, потім міграція.

## 13. Anti-patterns
- grammar inside React components;
- duplicated source of truth in catalog and UI;
- hard-coded related links in presentation;
- BR/PT claims without scope;
- fallback counted as reviewed content;
- English used as implicit explanatory bridge;
- frequency presented as grammaticality;
- every se called reflexive;
- every prepositional phrase called adjunct;
- Ukrainian translation treated as grammatical rule.

## 14. Definition of Done
- canonical ID;
- route key;
- Ukrainian/Portuguese/English titles;
- definition;
- form and function;
- verified examples;
- Ukrainian contrast;
- L1 mistakes;
- scoped variation/register;
- valid related graph;
- evidence status for high-risk claims;
- structural QA passes.

## 15. Архітектурний принцип одним реченням
Граматика є структурованими даними; український контраст є педагогічним шаром; варіативність є окремим виміром; UI лише відображає цю модель.