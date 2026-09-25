# MASTER GRAMMAR AUDIT — Portuguese Grammar for Ukrainian Speakers

**Дата:** 25.09.2026  
**Репозиторій:** `ClippyFirst/Portuguese-Grammar`  
**Гілка:** `main`  
**Тип документа:** canonical grammar coverage specification + architecture audit + completeness audit

---

## 1. Executive verdict

### Одним словом: **НЕЗАВЕРШЕНИЙ**

Проєкт має **сильну архітектурну основу і вже дуже широкий каталог**, але його не можна вважати завершеним довідником португальської граматики для носіїв української.

Ключова причина: у каталозі вже є **260 тем**, але значна частина з них поки що є лише каталогізованими темами або обережним fallback-контентом. Fallback гарантує навігаційне покриття, але **не є еквівалентом лінгвістично вичитаної статті**.

Поточна модель завантаження справді розділяє спеціалізований контент і fallback: модулі `src/content/pages/` мають пріоритет, а `src/content/generated-pages.ts` надає coverage-layer для тем без окремої статті. Це хороше інженерне рішення для цілісності сайту, але його не слід трактувати як доказ повного змістового покриття.

### Головний висновок

**Каталог граматичних напрямів уже близький до повноцінної карти проєкту, але сама граматична база ще не завершена.**

---

# 2. Що саме було проаудитовано

Перевірено:

- актуальний `README.md`;
- актуальний `src/content/catalog.ts`;
- `src/content/generated-pages.ts`;
- `src/content/load.ts`;
- `scripts/content-audit.mjs`;
- `scripts/audit-grammar-content.mjs`;
- `src/content/pages/`;
- `AUDIT.md`;
- `prompt_content.txt`;
- `prompt_themes.txt`;
- заявлену модель PT-BR / PT-PT / AFR / OTHER;
- українсько-центричний принцип пояснення;
- структуру довідника як reference, а не course;
- відповідність карти тем ширшим сучасним описам бразильської португальської та системним джерелам.

Для зовнішньої перевірки карти використано, зокрема, структуру *Modern Brazilian Portuguese Grammar: A Practical Guide* (Routledge, 3rd ed.), яка окремо виділяє pronunciation/spelling, gender, number, articles, adjectives/adverbs, numbers, personal pronouns, demonstratives, possessives, relatives, interrogatives, exclamations, indefinite pronouns/determiners, negatives, regular/irregular verbs, gerunds/participles/compound tenses/passive, tense usage, infinitive, subjunctive, imperative, reflexive verbs, ser/estar/ficar, auxiliary/modal/impersonal constructions, prepositions, conjunctions, word order and word formation. citeturn4search4turn4search1

---

# 3. Поточний стан репозиторію

## 3.1 Каталог

Актуальний `catalog.ts` містить:

- **260 тем**
- **38 категорій**
- окремі шари morphology, syntax, semantics, discourse, pragmatics, valency та regional variation.

Це важливе уточнення: README все ще говорить про **225 тем**, тоді як актуальний каталог уже містить **260**.

### Категорії

| Категорія | Тем |
|---|---:|
| lexical-grammar | 4 |
| syntax | 13 |
| pragmatics | 5 |
| discourse | 5 |
| semantics | 4 |
| phonetics | 5 |
| determiners | 4 |
| valency | 3 |
| fundamentals | 5 |
| spelling | 9 |
| nouns | 11 |
| articles | 8 |
| comparisons | 1 |
| adjectives | 7 |
| adverbs | 6 |
| pronouns | 17 |
| clitics | 10 |
| numerals | 3 |
| prepositions | 11 |
| contractions | 7 |
| crase | 4 |
| conjunctions | 3 |
| verbs | 22 |
| tenses | 13 |
| moods | 12 |
| infinitive | 5 |
| gerund | 10 |
| periphrases | 7 |
| se | 8 |
| negation | 4 |
| questions | 5 |
| agreement | 3 |
| relative | 6 |
| subordinate | 8 |
| passive | 5 |
| word-formation | 1 |
| regional | 6 |

---

# 4. Найважливіша архітектурна знахідка

## 4.1 Правильна ідея

Поточна архітектура використовує:

`catalog → dedicated content → fallback → renderer`

тобто:

1. `catalog.ts` визначає повний набір тем;
2. спеціалізовані сторінки в `src/content/pages/` мають пріоритет;
3. `generated-pages.ts` забезпечує coverage для тем без спеціалізованої статті;
4. `load.ts` вирішує, яку сторінку віддати;
5. UI лише відображає `GrammarPage`.

Це правильний принцип **content-as-data**.

## 4.2 Що треба змінити концептуально

Потрібно чітко розрізнити:

- **catalog coverage** — тема існує в карті;
- **provider coverage** — для теми існує сторінка;
- **linguistic coverage** — тема має справжній фактологічний матеріал;
- **verified coverage** — матеріал пройшов джерельну/лінгвістичну перевірку;
- **Ukrainian-contrastive coverage** — матеріал реально адаптований для носія української.

Ці показники не можна об'єднувати в одне число.

### Канонічна модель статусів

`CATALOG`

→ `FALLBACK`

→ `DRAFT`

→ `LINGUISTICALLY_REVIEWED`

→ `UKRAINIAN_CONTRASTIVE_REVIEWED`

→ `REGIONAL_REVIEWED`

→ `RELEASED`

Саме це має стати основою майбутнього content QA.

---

# 5. Генеральний аудит контенту

## 5.1 Сильні сторони

У проєкті вже правильно закладено:

- природну українську як основну мову пояснення;
- португальські приклади + українські переклади;
- PT-BR / PT-PT як системну вісь;
- українські типові помилки;
- спеціальну увагу до артиклів;
- український вид vs португальська часово-аспектна система;
- особовий інфінітив;
- future subjunctive;
- clitic placement;
- систему `se`;
- `ser / estar / ficar`;
- `ter / haver`;
- `por / para`;
- валентність і керування;
- discourse/pragmatics;
- fallback без 404;
- статичний content audit.

Це значно сильніша база, ніж типовий довідник, побудований як переклад англомовного підручника.

## 5.2 Основний недолік

Поточний fallback має **структурну повноту, але не змістову повноту**.

Наприклад, generic page може містити:

- загальну формулу;
- кілька прикладів;
- загальний Ukrainian note;
- загальний regional note;

але це не замінює окремої статті про конкретне граматичне явище.

Тому:

> **Fallback = navigation integrity, not linguistic completion.**

Це треба закріпити як офіційну політику проєкту.

---

# 6. Критичні прогалини карти тем

Порівняння каталогу з повноцінною структурою сучасної reference grammar показує кілька системних прогалин.

## 6.1 Числівники

Наразі є лише:

- cardinal numbers;
- ordinal numbers;
- dates/time.

Потрібно додати:

- collective numerals;
- fractions;
- decimal fractions;
- percentages;
- monetary amounts;
- numerals in names/titles;
- `N`, `enésimo` та невизначені числові значення;
- рід числівників;
- число числівників;
- узгодження числівникових конструкцій;
- decimal notation BR/PT.

Повна reference grammar окремо виділяє collective numbers, fractions, decimals, percentages, monetary amounts та numerals in names/titles. citeturn4search1turn4search5

---

# 7. Займенники й детермінативи

Поточний каталог дуже сильний, але його треба довести до системної повноти.

Обов'язково:

- особові займенники;
- subject vs object;
- tonic vs clitic;
- direct vs indirect object;
- emphatic object pronouns;
- pronouns after prepositions;
- non-standard/spoken Brazilian forms;
- `tu / você`;
- `nós / a gente`;
- `vocês / vós`;
- forms of address;
- demonstratives;
- neuter demonstratives;
- demonstrative adverbs `aqui / aí / ali / lá`;
- possessives;
- omission of possessives;
- `próprio`;
- ambiguity of `seu/sua`;
- relative pronouns;
- interrogative pronouns;
- indefinite pronouns;
- indefinite determiners;
- quantitative determiners;
- distributive determiners;
- negative determiners;
- scope.

У reference grammar окремо виділяються neuter demonstratives, demonstrative adverbs, omission of possessives, `próprio`, special uses of `seu/sua`, interrogatives, exclamatives та широка система indefinite adjectives/pronouns. citeturn4search18turn4search0

---

# 8. Окрема відсутня велика тема: EXCLAMATIONS

У каталозі є питання, але **немає окремої системної теми окличних конструкцій**.

Потрібен окремий блок:

- `que` в окличних конструкціях;
- `quanto/quanta/quantos/quantas`;
- `como`;
- exclamative clauses;
- prosody;
- punctuation;
- colloquial exclamatives;
- зв'язок з intensification.

Це не просто пунктуація: це окремий синтаксично-прагматичний тип конструкції. У системній граматиці Whitlam exclamations мають окремий розділ. citeturn4search0

---

# 9. Прикметники

Поточні теми:

- agreement;
- position;
- meaning by position;
- comparatives;
- superlatives;
- absolute superlative;
- irregular adjectives.

Потрібно додати:

- adjectives always preceding nouns;
- adjectives used as nouns;
- adjectives used adverbially;
- colloquial intensifiers;
- adjective agreement with coordinated nouns;
- singular adjective with plural noun;
- adjective coordination;
- semantic classes affecting position;
- adjective government;
- participial adjectives;
- relational vs descriptive adjectives.

Такі підтемы прямо присутні в сучасній reference grammar. citeturn4search1

---

# 10. Прислівники

Потрібно розширити:

- adverbs of manner;
- adverbs of time;
- adverbs of place;
- adverbs of degree;
- sentence adverbs;
- focus adverbs;
- scalar adverbs;
- adverbial phrases;
- position and scope;
- adverbs modifying adjectives;
- adverbs modifying clauses;
- adverbial use of adjectives.

---

# 11. Дієслівна система — найбільший контентний блок

Каталог уже має хорошу основу, але саме тут потрібна найбільша глибина.

## Обов'язково повністю покрити

### Indicative

- presente;
- pretérito perfeito simples;
- pretérito imperfeito;
- pretérito mais-que-perfeito simples;
- futuro;
- condicional / futuro do pretérito.

### Compound forms

- perfeito composto;
- mais-que-perfeito composto;
- futuro composto;
- condicional composto;
- perfect infinitive;
- perfect gerund;
- perfect subjunctive;
- pluperfect subjunctive;
- future perfect subjunctive.

### Subjunctive / conjunctive

- present;
- imperfect;
- future;
- perfect;
- pluperfect;
- future perfect;
- sequence of tenses;
- subordinate clauses;
- conditional clauses;
- concessive clauses;
- purpose clauses;
- temporal clauses;
- main-clause subjunctive;
- idiomatic subjunctive;
- colloquial avoidance.

Сучасна граматика окремо виділяє sequence of tenses, subordinate subjunctive, future/imperfect subjunctive, conditional subjunctive, main-clause uses, idiomatic uses та subjunctive vs infinitive. citeturn3search0turn3search1

---

# 12. Особовий інфінітив

Це одна з центральних тем проєкту і вона має бути значно глибшою за одну сторінку.

Потрібно охопити:

- impersonal infinitive;
- personal infinitive;
- explicit subject;
- implicit subject;
- same-subject constructions;
- different-subject constructions;
- infinitive after prepositions;
- infinitive in adverbial clauses;
- infinitive vs subjunctive;
- perfect infinitive;
- personal perfect infinitive;
- object clitics with infinitive;
- clitic placement after `para`, `de`, `por`, `sem`;
- infinitive in formal vs spoken usage;
- PT-BR / PT-PT differences.

Джерела з Ciberdúvidas прямо підкреслюють, що personal infinitive має особові закінчення та активно функціонує в підрядних конструкціях; також окремо розглядаються позиція object pronouns з infinitive. citeturn1search0turn1search10

---

# 13. Gerund / progressive

Потрібно розділити:

- formation;
- simple gerund;
- perfect gerund;
- gerund as adverbial;
- gerund in coordination;
- gerund after auxiliary verbs;
- `estar + gerúndio`;
- `andar + gerúndio`;
- `ficar + gerúndio`;
- `continuar + gerúndio`;
- `vir + gerúndio`;
- `ir + gerúndio`;
- PT-BR progressive;
- PT-PT `estar a + infinitive`;
- regional use of gerund in Portugal;
- non-progressive gerund constructions.

PT-BR / PT-PT progressive is a genuine grammatical distribution issue, not merely vocabulary. Contemporary descriptions identify `estar + gerúndio` and `estar a + infinitivo` as major variety differences, while noting that individual constructions may vary. citeturn1search1turn1search7

---

# 14. Participles

Потрібен окремий логічний блок, навіть якщо він технічно лишається поруч із gerund.

Обов'язково:

- regular participles;
- irregular participles;
- double participles;
- `ter/haver + participle`;
- `ser + participle`;
- `estar + participle`;
- participial agreement;
- passive;
- resultative interpretation;
- adjective vs participle;
- lexicalized participles;
- Brazilian/European preferences.

---

# 15. Auxiliary, modal and impersonal constructions

Поточні перифрази недостатньо покривають цю систему.

Обов'язково додати:

- `estar`;
- `ter`;
- `haver`;
- `ser`;
- `ir`;
- `vir`;
- `andar`;
- `ficar`;
- `continuar`;
- `começar`;
- `acabar`;
- `voltar`;
- `deixar`;
- `passar`;
- `costumar`;
- `poder`;
- `dever`;
- `ter de`;
- `ter que`;
- `haver de`;
- `precisar`;
- `dar` in impersonal constructions;
- `fazer` in temporal/weather constructions;
- `haver` existential;
- `ser preciso`;
- `é possível`;
- `é necessário`;
- `parecer`;
- `bastar`;
- `faltar`;
- `acontecer`.

Reference grammar explicitly separates auxiliary, modal and impersonal constructions as a major structural domain. citeturn4search4

---

# 16. Passive / impersonal / existential

Поточний блок правильний за напрямом, але його треба розгорнути.

Обов'язково:

- `ser + participle`;
- passive with all major tenses;
- passive participle agreement;
- agent with `por`;
- agent omission;
- `estar + participle` vs passive;
- resultative;
- `se` passive;
- `se` impersonal;
- existential `haver`;
- existential `ter` in Brazilian speech;
- impersonal `fazer`;
- impersonal `dar`;
- impersonal weather verbs;
- subject agreement contrasts;
- passive vs middle vs reflexive.

---

# 17. SE — не можна об'єднувати все в одну тему

Поточний поділ уже правильний. Канонічно треба зберегти окремо:

1. reflexive `se`;
2. reciprocal `se`;
3. pronominal `se`;
4. impersonal `se`;
5. passive `se`;
6. middle / anticausative `se`;
7. lexicalized `se`;
8. agreement;
9. ambiguity between functions;
10. `se` with clitics;
11. `se` in Brazilian vs European usage.

---

# 18. Прийменники

Потрібно забезпечити повну систему:

- `a`;
- `até`;
- `com`;
- `contra`;
- `de`;
- `desde`;
- `em`;
- `entre`;
- `para`;
- `por`;
- `sem`;
- `sob`;
- `sobre`;
- `perante`;
- `após`;
- `ante`;
- `trás`;
- compound prepositions;
- temporal prepositions;
- spatial prepositions;
- government;
- verb + preposition;
- adjective + preposition;
- noun + preposition;
- preposition choice with infinitive;
- preposition vs conjunction.

---

# 19. CONTRACTIONS + CRASE

Це має залишатися окремою системою:

### Contractions

- de + articles;
- em + articles;
- a + articles;
- por + articles;
- preposition + demonstrative;
- preposition + pronoun;
- `deste/dessa/daquele` families;
- `neste/nessa/naquele` families;
- `àquele/àquela/àquilo`;
- PT-BR / PT-PT spelling and usage.

### Crase

- `a + a = à`;
- mandatory crase;
- optional crase;
- forbidden crase;
- crase with feminine nouns;
- crase with demonstratives;
- crase with pronouns;
- locutions;
- time expressions;
- geographical names;
- proper names;
- plural forms;
- diagnostic tests.

ABL treats crase, regência, concordância and clitic placement as distinct grammar domains rather than mere spelling details. citeturn1search2

---

# 20. Syntax — потрібен повний hierarchy

## Clause structure

- SVO;
- subject omission;
- subject placement;
- predicate structure;
- complements vs adjuncts;
- argument structure;
- valency;
- information structure;
- topic;
- focus;
- contrastive focus;
- topicalization;
- inversion;
- clefts;
- `é que`;
- emphatic constructions;
- existential constructions;
- presentational constructions.

## Coordination

- additive;
- adversative;
- alternative;
- conclusive;
- explanatory;
- correlatives;
- `nem`;
- coordination without conjunction.

## Subordination

- complement clauses;
- subject clauses;
- object clauses;
- causal;
- concessive;
- conditional;
- temporal;
- final/purpose;
- consecutive;
- comparative;
- relative;
- modal;
- locative;
- proportional;
- conformative;
- restrictive;
- explanatory.

---

# 21. Reported speech

Потрібно окремо охопити:

- direct speech;
- indirect speech;
- tense backshift;
- pronoun changes;
- deictic changes;
- time/place expressions;
- reported questions;
- reported commands;
- reported requests;
- reported yes/no answers;
- quotation structures;
- punctuation;
- PT-BR/PT-PT usage.

---

# 22. Questions

Поточний блок треба розширити:

- yes/no questions;
- wh-questions;
- interrogative pronouns;
- `quem`;
- `qual`;
- `quanto`;
- `como`;
- `onde`;
- `quando`;
- `por que`;
- `para que`;
- `quão`;
- intonation;
- inversion;
- declarative question;
- echo question;
- rhetorical question;
- negative question;
- polite question;
- tag question;
- indirect question;
- PT-BR / PT-PT syntax.

---

# 23. Negation

Потрібно включити:

- `não`;
- `nunca`;
- `jamais`;
- `ninguém`;
- `nada`;
- `nenhum`;
- `nem`;
- `sem`;
- negative concord;
- double negation;
- negative subjects;
- negative objects;
- negative adjectives;
- negative nouns;
- negative questions;
- scope of negation;
- postverbal negative elements;
- colloquial variation.

---

# 24. Word formation

Поточна карта тут занадто вузька.

Потрібно окремо:

- prefixation;
- suffixation;
- nominalization;
- deverbal nouns;
- adjective formation;
- adverb formation;
- diminutives;
- augmentatives;
- evaluative suffixes;
- depreciative suffixes;
- `-ão/-aço`;
- `-eco`;
- `-inho/-zinho`;
- `-ão` and other expressive suffixes;
- verbal nouns in `-ada/-ida`;
- instrumental nouns;
- collective nouns;
- compounds;
- lexicalized compounds;
- prefix semantic classes;
- suffix semantic classes.

Сучасна reference grammar прямо виділяє diminutives, augmentatives, appreciative/depreciative suffixes та deverbal/instrumental/collective nouns. citeturn3search0

---

# 25. Орфографія і фонетика

Потрібно додати до поточної карти:

- syllabification;
- hyphenation;
- word boundaries;
- stress;
- accent rules;
- acute/circumflex;
- tilde;
- cedilla;
- grave accent/crase;
- distinctive accents;
- capitalisation;
- punctuation;
- spelling reform;
- BR/PT spelling;
- pronunciation/spelling correspondence;
- open/closed `e/o`;
- vowel reduction;
- nasalization;
- consonant variation;
- `r`;
- `s`;
- `x`;
- `lh`;
- `nh`;
- `ch`;
- phonological stress;
- connected speech;
- major PT-BR/PT-PT pronunciation contrasts.

Reference grammar окремо виділяє syllabification та hyphenation, а не лише alphabet/stress. citeturn3search2

---

# 26. Рід і число

Обов'язково:

- noun gender;
- semantic gender;
- morphological gender;
- irregular gender;
- common gender;
- epicene;
- ambiguous gender;
- gender-changing nouns;
- professions;
- gender vs Ukrainian;
- plural formation;
- `-ão`;
- `-l`;
- `-m`;
- `-r`;
- `-s`;
- `-z`;
- invariant nouns;
- plural-only nouns;
- compound nouns;
- number agreement.

---

# 27. Determiners / articles

Канонічний блок:

- definite article;
- indefinite article;
- zero article;
- article omission;
- generic reference;
- specific reference;
- generic vs specific;
- article with proper names;
- article with geographical names;
- article with possessives;
- article after prepositions;
- article in titles;
- article in names;
- article with body parts;
- article with abstract nouns;
- article in institutional expressions;
- article variation BR/PT;
- Ukrainian contrast.

---

# 28. Agreement

Потрібно охопити:

- noun–adjective;
- determiner–noun;
- subject–verb;
- predicative agreement;
- participle agreement;
- collective nouns;
- coordinated subjects;
- multiple adjectives;
- singular/plural special cases;
- `ser` agreement;
- impersonal constructions;
- existential constructions;
- `se` agreement;
- agreement in passive;
- agreement in relative clauses.

---

# 29. Pragmatics and discourse

Це сильна особливість проєкту, яку варто зберегти.

## Pragmatics

- speech acts;
- requests;
- commands;
- invitations;
- advice;
- politeness;
- social distance;
- directness;
- indirectness;
- register;
- pragmatic particles;
- discourse particles;
- `já`;
- `ainda`;
- `mesmo`;
- `só`;
- `afinal`;
- `então`;
- stance;
- evidential-like meanings;
- conversational implicature.

## Discourse

- cohesion;
- reference;
- anaphora;
- cataphora;
- ellipsis;
- topic;
- focus;
- contrastive focus;
- discourse markers;
- paragraph-level cohesion;
- lexical repetition;
- substitution;
- information structure.

---

# 30. PT-BR / PT-PT — окремий cross-cutting layer

Це не одна сторінка. Це **metadata dimension across the entire grammar**.

Обов'язково перевіряти на кожній релевантній темі:

- pronouns;
- forms of address;
- clitic placement;
- object pronouns;
- progressive;
- gerund;
- `estar a + infinitive`;
- possessives;
- demonstratives;
- article usage;
- prepositions;
- contractions;
- question syntax;
- imperative;
- future constructions;
- informal speech;
- formal speech;
- subject expression;
- object expression;
- spoken vs written norms.

Research on BP/EP identifies clitic placement and information structure as major grammatical differences, not merely lexical differences. citeturn1search7turn1search8

---

# 31. African Portuguese and other Lusophone varieties

Потрібно зберегти принцип:

**не створювати штучну єдину «африканську португальську».**

Мінімальний шар:

- Angola;
- Mozambique;
- Cape Verde;
- Guinea-Bissau;
- São Tomé and Príncipe;
- Timor-Leste;
- OTHER.

Регіональні сторінки повинні описувати лише граматично релевантні відмінності, а не перетворюватися на country profiles.

---

# 32. Українсько-контрастивний шар

Це має бути **окремою QA-віссю кожної великої теми**.

Для кожної high-depth теми перевіряти:

1. Чи є аналогічна категорія в українській?
2. Якщо є — чи вона функціонує так само?
3. Якщо немає — чи пояснено відсутність?
4. Чи є ризик калькування?
5. Чи може український відмінок спричинити помилку?
6. Чи може український вид спричинити помилку?
7. Чи може українська нульова артиклева система спричинити помилку?
8. Чи може український порядок слів створити хибну модель?
9. Чи є реальна типова помилка?
10. Чи не вигадана ця «помилка» лише для заповнення шаблону?

Особливо високий пріоритет:

- articles;
- gender;
- agreement;
- prepositions;
- object pronouns;
- clitics;
- ser/estar/ficar;
- ter/haver;
- se;
- infinitive;
- subjunctive;
- future subjunctive;
- tense/aspect;
- word order;
- passive;
- impersonal constructions.

---

# 33. Рекомендована canonical information architecture

## Layer 1 — Foundations

- grammar concepts;
- parts of speech;
- sentence;
- grammatical categories;
- person;
- number;
- gender;
- agreement.

## Layer 2 — Sound and writing

- phonetics;
- phonology;
- pronunciation;
- spelling;
- stress;
- punctuation.

## Layer 3 — Nominal grammar

- nouns;
- gender;
- number;
- adjectives;
- determiners;
- articles;
- quantifiers;
- numerals.

## Layer 4 — Pronouns

- personal;
- tonic;
- clitic;
- demonstrative;
- possessive;
- indefinite;
- interrogative;
- relative.

## Layer 5 — Prepositions and government

- prepositions;
- contractions;
- crase;
- verb government;
- adjective government;
- valency.

## Layer 6 — Verb morphology

- conjugation;
- regular verbs;
- irregular verbs;
- stem changes;
- spelling changes.

## Layer 7 — Verb system

- indicative;
- subjunctive/conjunctive;
- imperative;
- infinitive;
- personal infinitive;
- gerund;
- participle;
- compound forms.

## Layer 8 — Aspect / tense / modality

- tense;
- aspect;
- modality;
- sequence of tenses;
- Ukrainian contrast.

## Layer 9 — Periphrasis and auxiliaries

- aspectual;
- temporal;
- modal;
- phase;
- progressive;
- causative;
- impersonal.

## Layer 10 — Clause syntax

- word order;
- subject;
- objects;
- complements;
- coordination;
- subordination;
- relatives;
- conditionals;
- reported speech.

## Layer 11 — Negation and questions

- negation;
- negative concord;
- questions;
- interrogatives;
- exclamatives.

## Layer 12 — Passive / se / impersonals

- passive;
- passive se;
- impersonal se;
- reflexive;
- reciprocal;
- middle;
- existential.

## Layer 13 — Information structure

- topic;
- focus;
- clefts;
- emphasis;
- inversion;
- ellipsis.

## Layer 14 — Word formation

- derivation;
- nominalization;
- diminutives;
- augmentatives;
- compounds.

## Layer 15 — Discourse and pragmatics

- discourse markers;
- cohesion;
- speech acts;
- politeness;
- register.

## Layer 16 — Variation

- PT-BR;
- PT-PT;
- African varieties;
- other Lusophone varieties.

## Layer 17 — Contrastive Portuguese ↔ Ukrainian

- dedicated comparison pages;
- cross-links from every high-risk topic.

---

# 34. Recommended project architecture

```
src/
├── content/
│   ├── catalog.ts
│   ├── types.ts
│   ├── load.ts
│   ├── generated-pages.ts
│   └── pages/
│       ├── foundations/
│       ├── phonology/
│       ├── spelling/
│       ├── nouns/
│       ├── articles/
│       ├── adjectives/
│       ├── determiners/
│       ├── pronouns/
│       ├── clitics/
│       ├── numerals/
│       ├── prepositions/
│       ├── contractions/
│       ├── crase/
│       ├── verbs/
│       ├── tenses/
│       ├── moods/
│       ├── infinitive/
│       ├── gerund/
│       ├── participles/
│       ├── periphrases/
│       ├── se/
│       ├── negation/
│       ├── questions/
│       ├── exclamations/
│       ├── syntax/
│       ├── relatives/
│       ├── subordinate/
│       ├── passive/
│       ├── word-formation/
│       ├── discourse/
│       ├── pragmatics/
│       ├── valency/
│       ├── regional/
│       └── comparisons/
├── components/
└── routes/

docs/
├── MASTER-GRAMMAR-AUDIT-2026-09-25.md
├── CONTENT-POLICY.md
├── VARIETY-POLICY.md
├── UKRAINIAN-CONTRASTIVE-POLICY.md
└── CONTENT-QA.md

scripts/
├── content-audit.mjs
├── audit-grammar-content.mjs
└── ...

tests/
├── catalog/
├── content/
├── navigation/
└── linguistic/
```

The directory structure above is a target architecture; it does not mean every current module must be moved immediately.

---

# 35. Canonical content object

Every substantial grammar page should support:

```ts
type GrammarPage = {
  id: string
  slug: string
  category: string

  titleUk: string
  titlePt: string
  titleEn?: string

  summary: string

  definition?: string
  formula?: Formula[]
  formation?: string
  uses?: Use[]
  nonUses?: Use[]
  examples?: Example[]
  markers?: string[]
  exceptions?: string
  mistakes?: Mistake[]

  ukrainian?: string
  comparisonUk?: Comparison[]
  brPt?: string
  regional?: string

  terminology?: Terminology[]
  register?: Register
  variety?: Variety[]

  related?: string[]

  status?: ContentStatus
  sources?: Source[]
  reviewedAt?: string
}
```

The current schema already points in this direction, but **status, sources, review state and explicit Ukrainian comparison should become first-class metadata**.

---

# 36. Content quality contract

A high-depth page is not complete unless it has:

- correct definition;
- formation;
- multiple genuine uses;
- non-use/contrast where relevant;
- natural examples;
- Ukrainian translation;
- Ukrainian-specific explanation;
- common real mistakes;
- PT-BR/PT-PT note where relevant;
- exceptions;
- related topics;
- terminology;
- source/review status.

### Forbidden

- invented rules;
- filler paragraphs;
- generic fallback presented as authoritative;
- fake Ukrainian mistakes;
- mechanically translated Ukrainian;
- CEFR structure;
- exercises unless explicitly requested;
- vocabulary dumps;
- Spanish grammar mechanically projected onto Portuguese;
- treating Portuguese as a single-country language;
- equating Portuguese tense with Ukrainian aspect.

---

# 37. QA architecture

## Structural QA

Must verify:

- unique IDs;
- unique paths;
- catalog/provider consistency;
- related links;
- essential links;
- comparison links;
- no orphan pages;
- no catalog-only pages marked RELEASED;
- no duplicate topics.

## Linguistic QA

Must verify:

- examples;
- conjugations;
- agreement;
- clitic placement;
- PT-BR/PT-PT claims;
- regional claims;
- terminology;
- source claims.

## Contrastive QA

Must verify:

- Ukrainian explanation exists for high-risk topics;
- no false one-to-one equivalents;
- no invented interference errors.

## Source QA

High-risk pages should contain explicit sources.

Especially:

- clitic placement;
- infinitive;
- subjunctive;
- tense/aspect;
- regional variation;
- crase;
- agreement;
- passive/se;
- PT-BR/PT-PT differences.

The current project correctly notes that static QA does not replace linguistic source verification; this distinction should remain explicit.

---

# 38. Search architecture

Current search based primarily on catalog metadata is insufficient for a mature reference.

Target:

`query → title → aliases → terminology → examples → article body → related topics`

Search should understand:

- Ukrainian terms;
- Portuguese terms;
- English terminology;
- alternative Portuguese terminology;
- PT-BR / PT-PT terminology;
- grammatical abbreviations.

Example:

`особовий інфінітив`

should find:

- `personal-infinitive`;
- `infinitivo pessoal`;
- `infinitivo flexionado`;
- `personal infinitive`.

---

# 39. What should NOT be done

Do not solve coverage by generating 260 generic pages.

Do not increase the KPI by page count.

Do not treat:

`260 catalog entries = 260 completed grammar topics`

That is false.

The correct metric is:

`Verified linguistic coverage / required grammar map`

---

# 40. Final master checklist

Before declaring the project grammatically complete, verify:

### Foundations
- [ ] parts of speech
- [ ] grammatical categories
- [ ] sentence structure
- [ ] agreement
- [ ] valency

### Nominal
- [ ] nouns
- [ ] gender
- [ ] number
- [ ] adjectives
- [ ] determiners
- [ ] articles
- [ ] quantifiers
- [ ] numerals

### Pronouns
- [ ] personal
- [ ] subject
- [ ] object
- [ ] tonic
- [ ] clitic
- [ ] demonstrative
- [ ] possessive
- [ ] interrogative
- [ ] relative
- [ ] indefinite
- [ ] forms of address

### Verbs
- [ ] regular conjugation
- [ ] spelling changes
- [ ] stem changes
- [ ] irregular verbs
- [ ] ser
- [ ] estar
- [ ] ficar
- [ ] ter
- [ ] haver
- [ ] modal verbs
- [ ] auxiliary verbs
- [ ] impersonal verbs

### Tense / mood
- [ ] present
- [ ] preterite perfect
- [ ] imperfect
- [ ] pluperfect
- [ ] future
- [ ] conditional
- [ ] compound forms
- [ ] subjunctive/conjunctive
- [ ] future subjunctive
- [ ] sequence of tenses
- [ ] imperative

### Non-finite
- [ ] impersonal infinitive
- [ ] personal infinitive
- [ ] perfect infinitive
- [ ] gerund
- [ ] perfect gerund
- [ ] participle
- [ ] irregular participles
- [ ] double participles

### Syntax
- [ ] word order
- [ ] subject placement
- [ ] inversion
- [ ] topicalization
- [ ] focus
- [ ] clefts
- [ ] coordination
- [ ] subordination
- [ ] complement clauses
- [ ] relative clauses
- [ ] conditionals
- [ ] reported speech
- [ ] ellipsis

### Prepositions
- [ ] all major simple prepositions
- [ ] compound prepositions
- [ ] temporal prepositions
- [ ] spatial prepositions
- [ ] government
- [ ] verb + preposition
- [ ] adjective + preposition
- [ ] noun + preposition
- [ ] contractions
- [ ] crase

### Negation / questions
- [ ] não
- [ ] negative concord
- [ ] ninguém
- [ ] nada
- [ ] nenhum
- [ ] nunca
- [ ] jamais
- [ ] nem
- [ ] questions
- [ ] indirect questions
- [ ] rhetorical questions
- [ ] tag questions
- [ ] negative questions
- [ ] exclamations

### Passive / se
- [ ] ser passive
- [ ] passive se
- [ ] impersonal se
- [ ] reflexive se
- [ ] reciprocal se
- [ ] pronominal se
- [ ] middle/anticausative se
- [ ] existential
- [ ] impersonal constructions

### Word formation
- [ ] prefixes
- [ ] suffixes
- [ ] nominalization
- [ ] diminutives
- [ ] augmentatives
- [ ] compounds
- [ ] expressive morphology

### Discourse / pragmatics
- [ ] cohesion
- [ ] reference
- [ ] anaphora
- [ ] discourse markers
- [ ] information structure
- [ ] speech acts
- [ ] politeness
- [ ] register
- [ ] pragmatic particles

### Variation
- [ ] PT-BR
- [ ] PT-PT
- [ ] Angola
- [ ] Mozambique
- [ ] Cape Verde
- [ ] Guinea-Bissau
- [ ] São Tomé and Príncipe
- [ ] Timor-Leste
- [ ] other Lusophone varieties

### Ukrainian contrast
- [ ] articles
- [ ] gender
- [ ] agreement
- [ ] prepositions
- [ ] pronouns
- [ ] clitics
- [ ] aspect
- [ ] tense
- [ ] subjunctive
- [ ] infinitive
- [ ] word order
- [ ] passive
- [ ] se
- [ ] ser/estar/ficar

---

# 41. Release definition

The project should be declared **GRAMMATICALLY COMPLETE** only when:

1. every canonical topic has a dedicated or explicitly approved merged article;
2. fallback is not the authoritative source for any high-depth topic;
3. all high-risk topics have linguistic review;
4. Ukrainian contrastive review is complete;
5. PT-BR/PT-PT claims are verified;
6. regional claims are sourced;
7. all internal links resolve;
8. content audit passes;
9. typecheck/build/lint/tests pass;
10. README and catalog counts are synchronized;
11. the documentation in this file matches the actual architecture;
12. search can retrieve article-body concepts, not only metadata.

---

# 42. Bottom line

The repository already contains the **skeleton of a genuinely comprehensive Portuguese grammar reference**.

It does **not yet contain a genuinely comprehensive finished grammar reference**.

The correct next stage is therefore not to redesign the UI and not to manufacture more fallback pages.

The correct sequence is:

```
MASTER TOPIC MAP
      ↓
CATALOG NORMALIZATION
      ↓
DEDICATED CONTENT
      ↓
LINGUISTIC SOURCE REVIEW
      ↓
UKRAINIAN-CONTRASTIVE REVIEW
      ↓
PT-BR / PT-PT REVIEW
      ↓
REGIONAL REVIEW
      ↓
QA
      ↓
RELEASE
```

This document is the canonical baseline against which future Portuguese-Grammar content work should be audited.
