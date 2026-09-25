# Архітектура проєкту Portuguese-Grammar

Дата: 25 вересня 2026
Репозиторій: ClippyFirst/Portuguese-Grammar
Статус: canonical architecture

## 1. Призначення

Проєкт — контрастивний цифровий довідник граматики португальської для носіїв української. Це не курс, не тренажер і не колекція ізольованих статей.

Архітектура підтримує чотири незалежні рівні:

1. grammar domain;
2. pedagogy;
3. variation/evidence;
4. presentation.

UI не повинен знати граматичну логіку. Контент є даними; route лише ідентифікує тему; presentation components відображають структуровані дані.

## 2. Канонічний потік

Canonical grammar inventory (`docs/CANONICAL-GRAMMAR-INVENTORY.md`) → ontology/topic definition → catalog → article content → content QA → search/related graph → GrammarPage → presentation.

`docs/CANONICAL-GRAMMAR-INVENTORY.md` is the **coverage source of truth**. `src/content/catalog.ts` is the navigation/runtime catalog and must not silently redefine grammar scope.

Основні принципи:

- content ≠ UI;
- grammar model ≠ route;
- route ≠ source of truth;
- catalog ≠ full article;
- fallback ≠ reviewed content;
- frequency ≠ grammaticality;
- translation ≠ grammatical equivalence.

## 3. Шари

### Catalog — src/content/catalog.ts

Catalog містить:

- id;
- category;
- slug;
- titleUk/titlePt/titleEn;
- summary;
- aliases;
- related metadata;
- depth.

Catalog є картою довідника, а не повною статтею.

### Content — src/content/pages/

Містить структуровану граматичну інформацію: definition, forms, functions, distribution, constraints, examples, Ukrainian contrast, errors, variation, register, evidence та related relations — лише ті модулі, які потрібні конкретній темі.

### Loader — src/content/load.ts

Відповідає за route key, normalization, provider resolution, reviewed page priority та 404 safety.

### Search — src/content/search.ts

Пошук має індексувати українські, португальські та англійські назви, aliases, summary, forms, concepts, common errors, examples та related terms.

Особливо важливі українські пошукові формулювання, бо користувач може шукати не назву португальської категорії, а проблему українською.

## 4. Логічні домени

fundamentals; nouns; articles; determiners; adjectives; adverbs; pronouns; clitics; numerals; verbs; tenses; moods; infinitive; gerund; periphrases; se; negation; prepositions; contractions; crase; conjunctions; subordinate; relative; passive; agreement; syntax; valency; comparisons; semantics; pragmatics; discourse; lexical-grammar; word-formation; phonetics; spelling; regional.

Це canonical domain map. Нові теми спочатку отримують місце в цій карті або документоване обґрунтування нового домену.

## 5. Педагогічний контракт

Для substantive article базовий логічний порядок:

1. Portuguese form;
2. Portuguese function;
3. meaning;
4. distribution/constraints;
5. Ukrainian structural contrast;
6. examples;
7. learner-error information, якщо є;
8. variation/register, якщо релевантно;
9. related topics.

Не всі статті повинні мати однакову кількість секцій. Використовується mandatory core + conditional modules.

## 6. Контрастивний шар

Українська є L1 layer, а не просто мовою інтерфейсу.

Для релевантних тем перевіряються:

- функціональний аналог;
- відсутність категорії;
- формальна схожість із різною функцією;
- перекладна пастка;
- потенційний L1 transfer;
- позитивний transfer.

Learner claims мають розділяти documented evidence, predicted interference та editorial warning.

## 7. Article data model

Canonical schema і пояснення полів зафіксовано в docs/CONTENT-MODEL.md.

Основні сутності:

- GrammarArticle;
- Example;
- LearnerError;
- ContrastiveBlock;
- VariationRecord;
- RelatedTopic;
- EvidenceRecord.

Це цільова модель, яка впроваджується поступово через adapter для legacy content.

## 8. Варіативність

Не моделювати мову як BR = X і PT = Y.

Для релевантних claims окремо фіксувати:

- grammaticality;
- standard status;
- frequency;
- register;
- variety;
- spoken/written channel;
- social/contextual scope;
- evidence.

PT-BR/PT-PT — різновиди; formal/informal — регістри. Вони не є одним виміром.

## 9. Evidence

Evidence policy зафіксована в docs/EVIDENCE-POLICY.md.

Для high-risk claims потрібен provenance status. Особливо це стосується:

- normative claims;
- frequency;
- BR/PT differences;
- African Portuguese;
- register;
- spoken language;
- learner errors;
- L1 transfer;
- disputed usage.

Evidence status є provenance metadata, а не рейтингом істинності.

## 10. QA

QA розділений на незалежні gates:

1. Structural QA;
2. Linguistic QA;
3. Contrastive QA;
4. Variation/evidence QA;
5. Pedagogical QA;
6. Ukrainian-language QA;
7. Portuguese-language QA;
8. Presentation QA.

Детальні release gates зафіксовані в docs/CONTENT-QA.md.

## 11. Fallback policy

generated-pages.ts — coverage safety mechanism.

Fallback:

- може запобігати 404;
- не є доказом опрацьованого контенту;
- не має статусу reviewed;
- не повинен містити вигаданих specific grammar facts.

Core topic вважається завершеною лише після dedicated reviewed content або свідомо документованого inclusion в іншу reviewed article.

## 12. Related graph

related — не декоративні посилання.

Типи зв'язків:

- prerequisite;
- advanced;
- contrast;
- extension;
- exception;
- form;
- function;
- common-error;
- next.

Приклади логіки:

gostar de → verb → valency → preposition de → complement → Ukrainian contrast.

pretérito perfeito → tense → past reference → aspectual interpretation → Ukrainian aspect.

Граф має підтримувати prerequisite paths, contrastive discovery та navigation from problem to solution.

## 13. Search model

Користувач повинен мати щонайменше три шляхи discovery:

### Form-first
Пошук за португальською формою або терміном.

### Meaning-first
Пошук за тим, що користувач хоче виразити.

### Problem/error-first
Пошук за українським описом проблеми або неправильною моделлю.

Тому search index поступово має включати не лише catalog metadata, а й structured article content.

## 14. Terminology

Canonical terminology зафіксована в docs/TERMINOLOGY.md.

Glossary є спільним editorial layer для content і UI.

Особливо не можна змішувати:

- час і вид;
- граматичність, нормативність і частотність;
- різновид мови та регістр;
- артикль і весь клас determinantes;
- клітику та займенник як тотожні поняття.

## 15. Фізична структура

Поки corpus не перевищує приблизно 300 reviewed topics, flat pages directory не треба рефакторити лише заради естетики.

Після стабілізації ontology та schema можливий перехід до domain folders:

src/content/pages/fundamentals
src/content/pages/nouns
src/content/pages/determiners
src/content/pages/pronouns
src/content/pages/clitics
src/content/pages/verbs
src/content/pages/tenses
src/content/pages/moods
src/content/pages/syntax
src/content/pages/subordinate
src/content/pages/semantics
src/content/pages/pragmatics
src/content/pages/discourse
src/content/pages/word-formation
src/content/pages/phonetics
src/content/pages/spelling
src/content/pages/regional

Це migration task, а не вимога негайно перемістити всі файли.

## 16. Content pipeline

Канонічний pipeline:

1. canonical grammar inventory;
2. topic definition;
3. article type;
4. source research;
5. Portuguese analysis;
6. Ukrainian contrastive analysis;
7. examples;
8. learner-error classification;
9. variation/register;
10. related graph;
11. terminology QA;
12. linguistic QA;
13. structural QA;
14. evidence QA;
15. reviewed.

Після reviewed зміни джерельного консенсусу або нормативних рекомендацій запускають повторний review.

## 17. Anti-patterns

- grammar inside React components;
- duplicated source of truth;
- hard-coded related links in presentation;
- unscope BR/PT claims;
- fallback counted as reviewed;
- English as implicit explanatory bridge;
- frequency presented as grammaticality;
- every se called reflexive;
- every prepositional phrase called adjunct;
- Ukrainian translation treated as grammatical rule;
- invented claims about typical Ukrainian errors;
- identical template forced onto every article.

## 18. Coverage closure

The repository must distinguish **coverage ontology** from **page count**. The canonical inventory currently defines 742 coverage units across foundations, morphology, syntax, semantics, pragmatics, discourse, phonology/orthography, lexical grammar and variation. These are not 742 mandatory URLs: a unit may be an article, an explicit module, or a typed cross-link. Coverage is closed only when every unit has a documented disposition and no major phenomenon is covered accidentally.

Before mass rewriting, the team must produce a machine-checkable mapping:

`canonical unit → current topic ID(s) → disposition → article type → depth → prerequisites → related topics → evidence requirements → review status`.

## 19. Definition of Done

Article-level DoD визначено в docs/ARTICLE-REQUIREMENTS.md.

Architecture-level DoD:

- canonical ontology documented;
- content schema documented;
- terminology documented;
- evidence policy documented;
- QA gates documented;
- fallback status explicit;
- related graph typed;
- search paths defined;
- migration strategy documented;
- representative sample validated before mass migration.

## 20. Порядок міграції

Не переписувати всі 260 topics одночасно.

Порядок:

1. canonical docs;
2. shared types;
3. legacy adapter;
4. representative sample;
5. QA implementation;
6. search/index upgrade;
7. gradual article migration;
8. removal of legacy format;
9. domain-folder refactor, якщо він став виправданим.

## 21. Архітектурний принцип одним реченням

Граматика є структурованими даними; український контраст є педагогічним шаром; learner evidence і variation мають provenance; ontology зв'язує теми; UI лише відображає модель.

### Scope re-audit (2026-09-25)

The canonical inventory was re-audited against the Camões PLE grammatical inventory and the published scope of *Gramática do Português*. Four underrepresented domains were identified and added to the canonical ontology: **adverbs/adverbial locutions; conjunctions/connective expressions; interjections/exclamatives; sentence types, polarity and illocutionary force**. The canonical inventory now contains **887 coverage units**. This is an ontology count, not a target number of pages.


### Scope re-audit extension (2026-09-25)

A final constituent/discourse pass added explicit coverage for adjectival and adverbial phrase structure, noun/adjective complements, apposition, phrase-vs-clause coordination, ellipsis/zeugma, free indirect discourse, and denotative words/particles. The canonical inventory therefore now contains **887 coverage units**. These are coverage identities, not mandatory page counts.


### Final bounded reference-scope check (2026-09-25)

An independent cross-check against Cambridge's *The Syntax of Portuguese* and Wiley-Blackwell's *The Handbook of Portuguese Linguistics* found a small set of explicit syntax/reference identities that were not yet separately discoverable in the canonical ontology: null direct objects, null oblique objects, null possessors, VP ellipsis, emphatic affirmation, biased polar questions, minimal yes/no answers, bare nominals, Brazilian Portuguese topic-subject constructions, and the definite/indefinite/expletive null-subject subtypes. These are now closed as explicit canonical units. The personal infinitive, clitic placement, topicalisation, focus, information structure and broad null-subject syntax were already represented and were not duplicated.

The canonical baseline is therefore **887 coverage units**. This is a bounded coverage ontology, not a target page count. Further expansion requires a documented reference gap or a distinct learner-facing phenomenon; specialist theoretical subdivisions should normally remain modules unless they create an independently searchable learner problem.
