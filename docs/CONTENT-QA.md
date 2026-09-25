# Content QA Portuguese-Grammar

Дата: 25 вересня 2026
Статус: canonical quality gates

## 1. Принцип
QA має перевіряти не «чи стаття довга», а чи вона придатна як точний learner reference. Шари QA незалежні: pass одного не компенсує fail іншого.

## 2. Structural QA
Перевіряє unique IDs, unique route keys, catalog ↔ page correspondence, valid article type/category/review status, valid related IDs, graph integrity, required metadata та example IDs.

## 3. Linguistic QA
Перевіряє morphology, syntax, semantics, government/regência, agreement/concordância, form, distribution, examples і terminology. Окремо перевіряються claims на кшталт «X means Y», «X requires Z», «X cannot occur...».

## 4. Contrastive QA
Для релевантних тем перевіряються Ukrainian contrast, analogy/difference, translation trap та коректність маркування predicted interference.

## 5. Variation/evidence QA
Перевіряє PT-BR/PT-PT scope, African variety scope, register, spoken/written channel, frequency claims, evidence status, source references та lastReviewed для high-risk topics.

## 6. Pedagogical QA
Перевіряє quick answer, приклади, actionable contrast, minimal pairs за потреби, diagnostics для recurring decision problems та learning path через related links.

## 7. Ukrainian-language QA
Окремо перевіряти нормативність української, термінологічну послідовність, відсутність кальок, природність перекладу та відмінність українських і португальських категорій.

## 8. Portuguese-language QA
Окремо перевіряти orthography, accents, agreement, idiomaticity, variety labels, register labels, sentence naturalness та consistency of Portuguese terminology.

## 9. High-risk claim linting
Автоматичний audit може ловити підозрілі категоричні маркери: завжди, ніколи, лише, виключно, всі, ніхто, always, never, only, exclusively. Це warnings, а не автоматичні linguistic failures.

Так само lint має знаходити claims про frequency, typical learner errors, BR/PT differences та «українці часто...».

## 10. Fallback QA
Fallback може існувати для navigation safety, але не має статусу reviewed, не рахується content-complete і не повинен містити вигаданих specific grammar facts.

## 11. Related graph QA
Перевіряти destination exists, relation type valid, no dead ends for core systems, prerequisite links, contrast discoverability та common-error links.

## 12. Release gates
Gate A — structural; Gate B — linguistic; Gate C — contrastive; Gate D — evidence; Gate E — pedagogical; Gate F — presentation. Усі gates мають бути pass для reviewed.

## 13. Audit output
QA output має давати pass, warning або fail із поясненням і конкретним шляхом виправлення. Це внутрішній engineering/editorial status, а не рейтинг якості для користувача.

## 14. Representative validation
Після зміни content schema потрібен representative sample: noun; article/determiner; pronoun/clitic; verb/tense; mood; preposition; syntax; subordinate; semantics/pragmatics; regional variation; phonetics/spelling.

## 15. Definition of Done для migration
Migration завершується, коли legacy adapter більше не потрібен; core articles мають new schema; fallback clearly separated; QA працює на canonical model; old duplicate fields removed; docs/types agree; search/related/navigation use canonical IDs.