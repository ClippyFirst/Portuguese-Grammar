# Модель контенту Portuguese-Grammar

Дата: 25 вересня 2026
Статус: canonical data model

## 1. Принцип
Каталог описує що існує в довіднику. Article content описує що ми знаємо про тему. Ontology описує як теми пов'язані. Evidence описує на чому ґрунтується твердження.

Ці рівні не можна змішувати.

## 2. Article types
- concept — граматичне поняття;
- form — форма або парадигма;
- construction — конструкція;
- contrast — системний контраст;
- usage — вживання;
- reference — системний довідковий матеріал;
- error — типова проблема;
- variation — варіативність;
- system — великий огляд підсистеми.

Тип не є рівнем складності.

## 3. Canonical TypeScript shape
Цільова модель впроваджується поступово і не повинна ламати старі сторінки.

    type GrammarArticle = {
      id: string
      type: ArticleType
      category: string
      title: { uk: string; pt: string; en?: string }
      aliases: { uk: string[]; pt: string[]; en?: string[] }
      summary: string
      depth: 'core' | 'extended' | 'advanced'
      definition: ContentBlock
      forms?: ContentBlock
      functions?: ContentBlock
      usage?: ContentBlock
      distribution?: ContentBlock
      constraints?: ContentBlock
      ukrainianContrast?: ContrastiveBlock
      examples: Example[]
      minimalPairs?: MinimalPair[]
      diagnostics?: Diagnostic[]
      commonErrors?: LearnerError[]
      exceptions?: ContentBlock
      variation?: VariationRecord[]
      register?: ContentBlock
      terminology?: TerminologyBlock
      related: RelatedTopic[]
      evidence?: EvidenceRecord[]
      sources?: string[]
      cefr?: string[]
      lastReviewed?: string
      reviewStatus: ReviewStatus
    }

Типи Example, LearnerError, ContrastiveBlock, VariationRecord, RelatedTopic та EvidenceRecord мають бути визначені в спільному content model, а не дублюватися у сторінках.

## 4. Semantic responsibilities
Definition встановлює межі поняття. Form описує форму. Function/meaning розділяють роль і значення. Distribution/constraints описують середовище та обмеження. Ukrainian contrast є pedagogical layer. Examples є навчальним та доказовим матеріалом. Common errors містять provenance. Variation відокремлює різновид від загальної моделі. Evidence зберігає provenance.

## 5. Ontology
Довідник має поступово перейти від моделі «сторінка = ізольована тема» до «тема = вузол граматичного графа».

> gostar de → verb → valency → preposition de → complement → Ukrainian contrast

> pretérito perfeito → tense → past reference → aspectual interpretation → Ukrainian aspect

Пошук і навігація мають використовувати ці відношення, а не лише текстові збіги.

## 6. Catalog vs article
Catalog залишається компактним: identity, routing, titles, aliases, summary, domain, depth, navigation metadata. Повний grammar content не переноситься в catalog.

## 7. CEFR
CEFR — окремий metadata layer. Він не визначає grammar ontology і не замінює depth.

## 8. Migration
1. Зафіксувати schema.
2. Додати adapter для legacy format.
3. Нові та переглянуті сторінки переводити на canonical model.
4. Мігрувати поступово.
5. Видалити adapter після повного переходу.

Мета — уникнути масового rewrite 260 сторінок лише через зміну структури даних.