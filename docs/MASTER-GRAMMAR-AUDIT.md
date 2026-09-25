# Генеральний аудит португальського граматичного довідника

Дата: 25 вересня 2026  
Репозиторій: ClippyFirst/Portuguese-Grammar  
Гілка аудиту: main  
Обсяг: каталог `src/content/catalog.ts`, тематичні модулі `src/content/pages/`, поточна документація та архітектурні файли.

## 1. Вердикт

> **Coverage scope is now governed by `docs/CANONICAL-GRAMMAR-INVENTORY.md`. It contains 852 canonical coverage units; these are ontology units, not 742 mandatory URLs.**


**Ні: граматичне охоплення ще не можна вважати повним.**

Станом на цей аудит каталог містить **260 тем у 37 категоріях**. Це вже не «базовий довідник», а широкий довідковий корпус: у ньому є морфологія, артиклі, детермінативи, займенники й клітики, прийменники та контракції, дієслівна система, часи й способи, інфінітив, gerúndio, particípio, перифрази, `se`, заперечення, питання, узгодження, підрядність, пасив, синтаксис, валентність, семантика, прагматика, дискурс, фонетика, орфографія та регіональна варіативність.

Але **260 сторінок ≠ 100% граматичного покриття**. Після звірки архітектури з повними описовими та навчальними референтами видно кілька системних прогалин: вокатив і вигуки, повний шар пунктуаційно-синтаксичної організації, просодія та інтонація, складні типи підрядності, повна система числівників, ширший словотвір, систематичний шар прямої/непрямої мови, а також деякі високорівневі дискурсивні та семантичні операції.

Тому правильний статус проєкту зараз:

> **широко охоплений, але ще не повністю замкнений граматичний довідник.**

Це важлива відмінність. Я не рекомендую зараз просто додавати «ще 100 тем». Спочатку треба зафіксувати **канонічну карту граматики**, а далі закривати прогалини за нею.

## 2. Чому саме така модель аудиту

Для повного довідника недостатньо традиційної шкільної схеми «іменник → прикметник → дієслово». *Gramática do Português* описує систему значно ширше: звуки, лексику й морфологію, синтаксис, семантику, прагматику та взаємодію цих рівнів; окремо враховуються європейська, бразильська, анголійська й мозамбіцька варіативність. Це відповідає тому, яким уже фактично став цей репозиторій. Див. [Gulbenkian, Vol. I](https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/) та [Vol. III](https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/).

Для PLE Camões також розділяє мовну компетентність на лексичну, граматичну, семантичну, фонологічну, орфографічну та ортоепічну, а сам Referencial організує матеріал за лінгвістичним, прагматичним і поняттєвим компонентами. Отже, довідник для тих, хто вивчає португальську, не повинен зводитися до морфології й синтаксису. Див. [Referencial Camões PLE](https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple-2).

## 3. Поточна структура

| Домен | Тем | Стан |
|---|---:|---|
| lexical-grammar | 4 | 🟡 |
| syntax | 13 | 🟢 |
| pragmatics | 5 | 🟢 |
| discourse | 5 | 🟢 |
| semantics | 4 | 🟢 |
| phonetics | 5 | 🟡 |
| determiners | 4 | 🟢 |
| valency | 3 | 🟢 |
| fundamentals | 5 | 🟢 |
| spelling | 9 | 🟡 |
| nouns | 11 | 🟢 |
| articles | 8 | 🟢 |
| comparisons | 1 | 🟡 |
| adjectives | 7 | 🟢 |
| adverbs | 6 | 🟢 |
| pronouns | 17 | 🟢 |
| clitics | 10 | 🟢 |
| numerals | 3 | 🟡 |
| prepositions | 11 | 🟢 |
| contractions | 7 | 🟢 |
| crase | 4 | 🟢 |
| conjunctions | 3 | 🟡 |
| verbs | 22 | 🟢 |
| tenses | 13 | 🟢 |
| moods | 12 | 🟢 |
| infinitive | 5 | 🟢 |
| gerund | 10 | 🟢 |
| periphrases | 7 | 🟢 |
| se | 8 | 🟢 |
| negation | 4 | 🟢 |
| questions | 5 | 🟢 |
| agreement | 3 | 🟢 |
| relative | 6 | 🟢 |
| subordinate | 8 | 🟢 |
| passive | 5 | 🟢 |
| word-formation | 1 | 🔴 |
| regional | 6 | 🟢/🟡 |

**Висновок із таблиці:** ядро граматики вже сильне. Найбільший структурний дисбаланс — не в дієсловах чи займенниках, а в **словотворі, числівниках, сполучниках/підрядності, фонології/просодії та окремих синтаксичних функціях**.

## 4. Історична канонічна карта тем

> The authoritative production inventory is now `docs/CANONICAL-GRAMMAR-INVENTORY.md`. The detailed list below remains the original audit baseline and is retained for audit history.



Цей список є **нормативною дорожньою картою проєкту**, а не просто списком майбутніх URL.

### A. Основи граматичного опису
- частини мови;
- граматичні категорії: рід, число, особа, відмінювання;
- слово, словоформа, лема, основа, закінчення;
- морфема;
- прості та складні слова;
- іменна група;
- дієслівна група;
- клаузa;
- речення;
- підмет, присудок, додаток, предикатив, модифікатор;
- вокатив;
- нульовий та експлетивний підмет.

**Поточний стан:** 🟢 основи є; **вокатив — явна прогалина**.

### B. Іменник
- рід;
- граматичний рід vs природна стать;
- рід у власних назвах;
- рід назв осіб і професій;
- число;
- регулярна множина;
- множина на `-ão`;
- чергування основи;
- незмінювані іменники;
- pluralia tantum / singularia tantum;
- складні іменники;
- узгодження;
- зменшувальні;
- збільшувальні;
- власні та загальні назви;
- речовинні, абстрактні, збірні та злічувані іменники.

**Поточний стан:** 🟢, із потребою перевірити повноту типів числа й семантичних класів.

### C. Артиклі й детермінативи
- `o/a/os/as`;
- `um/uma/uns/umas`;
- нульовий артикль;
- означеність;
- специфічність;
- референція;
- анафора;
- генеричність;
- власні назви;
- присвійні;
- вказівні;
- неозначені;
- негативні;
- універсальні;
- дистрибутивні;
- `todo`, `cada`, `algum`, `nenhum`, `qualquer`, `ambos`, `outro`, `mesmo`, `próprio`;
- сфера дії кванторів;
- узгодження детермінативів.

**Поточний стан:** 🟢. Це один із найсильніших блоків репозиторію.

### D. Прикметник
- рід і число;
- позиція;
- значення позиції;
- атрибутивне й предикативне вживання;
- ступені порівняння;
- `mais/menos/tão`;
- нерегулярні `melhor/pior/maior/menor`;
- відносний суперлатив;
- абсолютний суперлатив;
- `-íssimo`;
- складені прикметники;
- узгодження при кількох іменниках;
- керування прикметника.

**Поточний стан:** 🟢.

### E. Займенники
- особові;
- підметові;
- об'єктні;
- прямий/непрямий об'єкт;
- `lhe` vs `o/a`;
- післяприйменникові;
- зворотні;
- взаємні;
- вказівні;
- присвійні;
- неозначені;
- питальні;
- відносні;
- `quem`;
- `o qual`;
- `cujo`;
- `onde`;
- `o que`;
- `a gente`;
- `tu/você/vocês/vós`;
- форми звертання.

**Поточний стан:** 🟢/🟢+.

### F. Клитики
- me/te/se/nos/vos;
- o/a/os/as;
- lhe/lhes;
- прокліза;
- енкліза;
- мезокліза;
- тригери проклізи;
- `não`;
- питальні слова;
- підрядні;
- сполучники;
- наказовий спосіб;
- клитики з інфінітивом;
- клитики з gerúndio;
- злиття форм;
- BR/PT розподіл.

**Поточний стан:** 🟢. Це критичний блок і його слід зберегти як один із центральних контрастивних модулів.

### G. Числівники
Обов'язково закрити:
- cardinal;
- ordinal;
- multiplicative;
- fractional;
- collective;
- decimal;
- percentage;
- dates;
- years;
- time;
- money;
- measures;
- `milhão/milhão de`;
- узгодження;
- числівник як детермінатив;
- числівник як іменна група.

**Поточний стан:** 🟡. Три сторінки недостатні для повного довідкового блоку.

### H. Прийменники
- `a`, `de`, `em`, `por`, `para`, `com`, `sem`, `sobre`, `entre`, `até`, `desde`;
- місце;
- напрямок;
- час;
- причина;
- мета;
- спосіб;
- інструмент;
- походження;
- керування;
- прийменникові групи;
- прийменник + інфінітив;
- фіксовані прийменникові конструкції.

**Поточний стан:** 🟢.

### I. Контракції та crase
- `do/da/dos/das`;
- `no/na/nos/nas`;
- `ao/à/aos/às`;
- `pelo/pela/pelos/pelas`;
- `num/numa`;
- контракції з demonstratives;
- контракції з pronouns;
- `à` як crase;
- crase з часом;
- crase з жіночими групами;
- заборонена crase;
- варіантність `até`.

**Поточний стан:** 🟢.

### J. Дієслово
- особа;
- число;
- регулярні класи;
- нерегулярні дієслова;
- `ser`;
- `estar`;
- `ter`;
- `haver`;
- `ficar`;
- `ir/vir`;
- `levar/trazer`;
- `pôr`;
- модальні;
- прономінальні;
- дієслівне керування;
- валентність;
- каузація;
- raising/control.

**Поточний стан:** 🟢.

### K. Часи
- presente;
- pretérito perfeito simples;
- pretérito imperfeito;
- pretérito perfeito composto;
- pretérito mais-que-perfeito simples;
- pretérito mais-que-perfeito composto;
- futuro simples;
- futuro composto;
- condicional / futuro do pretérito;
- temporal agreement;
- sequence of tenses;
- tense + discourse reference.

**Поточний стан:** 🟢. Особливу увагу слід зберегти до різниці часу та українського виду.

### L. Способи
- indicativo;
- conjuntivo/subjuntivo;
- imperativo;
- condicional;
- presente do conjuntivo;
- imperfeito;
- futuro;
- compound subjunctives;
- triggers;
- modality;
- negation + mood;
- relative clauses + mood;
- conditionals;
- concessives;
- independent subjunctive uses.

**Поточний стан:** 🟢.

### M. Інфінітив
- infinitivo impessoal;
- infinitivo pessoal;
- subject control;
- infinitive after prepositions;
- infinitive clauses;
- infinitive with modal verbs;
- infinitive with perception/causation;
- `ao + infinitivo`;
- infinitive + clitic.

**Поточний стан:** 🟢.

### N. Gerúndio та particípio
- formation;
- uses;
- progressive;
- BR/PT progressive;
- participle;
- irregular participles;
- double participles;
- ter/haver + participle;
- ser + participle;
- estar + participle;
- resultative readings.

**Поточний стан:** 🟢.

### O. Перифрази
- beginning;
- continuation;
- completion;
- recent past;
- future;
- progressive;
- modality;
- obligation;
- ability;
- causation;
- phase;
- aspect.

**Поточний стан:** 🟢.

### P. `se`
- reflexive;
- reciprocal;
- pronominal;
- passive;
- impersonal;
- middle;
- anticausative;
- `se` conjunction;
- agreement;
- diagnostic tests.

**Поточний стан:** 🟢.

### Q. Заперечення
- `não`;
- negative concord;
- `ninguém/nada/nenhum`;
- preverbal negative;
- postverbal negative;
- constituent negation;
- double negation;
- negative indefinites;
- contrastive negation.

**Поточний стан:** 🟢, але варто перевірити повноту pragmatics of negation.

### R. Питання
- yes/no;
- wh;
- `o que`;
- `que`;
- `quem`;
- `qual`;
- `quanto`;
- preposition + interrogative;
- word order;
- inversion;
- `é que`;
- echo questions;
- alternative questions;
- negative questions.

**Поточний стан:** 🟢/🟡.

### S. Синтаксис
- SVO;
- subject placement;
- null subject;
- predicate;
- direct object;
- indirect object;
- oblique complement;
- predicative complement;
- modifiers;
- adjuncts;
- argument vs adjunct;
- inversion;
- topicalization;
- clefts;
- focus;
- causative;
- raising;
- control;
- complex predicates;
- nominalization;
- ellipsis;
- coordination;
- subordination.

**Поточний стан:** 🟢.

### T. Підрядність
Канонічно потрібні:
- completive;
- subject clauses;
- object clauses;
- relative;
- causal;
- concessive;
- conditional;
- temporal;
- final;
- consecutive;
- comparative;
- conformative;
- proportional;
- modal;
- locative;
- reduced clauses;
- infinitival clauses;
- gerundial clauses;
- participial clauses;
- mood selection;
- punctuation.

**Поточний стан:** 🟢/🟡. Основний каркас є, але **conformative та proportional** треба перевірити як окремі явно названі теми; також треба перевірити повноту reduced clauses.

### U. Пасив та безособові конструкції
- ser + participle;
- passive agent;
- passive se;
- impersonal se;
- impersonal haver;
- meteorological predicates;
- `fazer` temporal;
- existential constructions;
- resultative `estar + participle`.

**Поточний стан:** 🟢.

### V. Узгодження
- noun–adjective;
- determiner agreement;
- subject–verb;
- mixed gender;
- collective nouns;
- `a gente`;
- `haver`;
- `se`;
- predicate agreement;
- numeral agreement.

**Поточний стан:** 🟢.

### W. Сполучники
Потрібна системна карта:
- additive;
- adversative;
- alternative;
- conclusive;
- explanatory;
- causal;
- temporal;
- final;
- concessive;
- conditional;
- consecutive;
- comparative;
- conformative;
- proportional;
- subordinating conjunctions vs conjunctional phrases;
- discourse connectives.

**Поточний стан:** 🟡. Три окремі сторінки недостатні як самостійний системний каталог, хоча значна частина матеріалу вже є в `subordinate` і `discourse`.

### X. Словотвір
Окремо потрібні:
- prefixation;
- suffixation;
- nominalization;
- adjectivization;
- verbal derivation;
- adverb formation;
- diminutives;
- augmentatives;
- evaluative suffixes;
- negating prefixes;
- productive vs lexicalized derivation;
- conversion;
- compounding;
- neologism formation;
- orthographic effects of derivation.

**Поточний стан:** 🔴/🟡. Категорія `word-formation` має лише один каталоговий пункт; частина тем захована в іменниках та інших модулях. Для архітектури це вже технічний smell: домен є, але не розкладений на самостійні сторінки.

### Y. Фонетика, фонологія та орфоепія
- phoneme vs allophone;
- vowels;
- open/closed e/o;
- unstressed-vowel reduction;
- nasal vowels;
- nasal diphthongs;
- oral diphthongs;
- triphthongs;
- semivowels;
- syllable structure;
- stress;
- prosody;
- intonation;
- rhythm;
- `r/rr`;
- `s`;
- `x`;
- `lh/nh/ch`;
- `c/ç/g/j`;
- `b/v`;
- connected speech;
- elision;
- liaison-like phenomena where relevant;
- PT-BR vs PT-PT pronunciation;
- IPA;
- pronunciation of unfamiliar words.

**Поточний стан:** 🟡. Поточні п'ять сторінок — хороший каркас, але **просодія, інтонація, складова структура та connected speech мають бути явними темами**.

### Z. Орфографія та пунктуація
- alphabet;
- reading rules;
- stress marks;
- diacritics;
- distinctive accents;
- capitalization;
- punctuation;
- Acordo Ortográfico;
- BR/PT orthographic variants;
- hyphenation;
- word division;
- quotation;
- commas with subordinate/relative clauses;
- punctuation and information structure.

**Поточний стан:** 🟡. Базовий шар є; hyphenation та системний зв'язок пунктуації з синтаксисом треба посилити.

### AA. Семантика
- aspect;
- modality;
- reference;
- definiteness;
- specificity;
- genericity;
- deixis;
- anaphora;
- scope;
- quantification;
- lexical aspect;
- event structure;
- habituality;
- iteration;
- inception;
- continuation;
- termination;
- resultative meaning.

**Поточний стан:** 🟢 як окремий шар, але його треба поглиблювати в зв'язці з відповідними морфосинтаксичними сторінками.

### AB. Прагматика
- speech acts;
- requests;
- commands;
- advice;
- permission;
- prohibition;
- politeness;
- indirectness;
- hedging;
- agreement/disagreement;
- correction;
- confirmation;
- discourse particles;
- register;
- social distance.

**Поточний стан:** 🟢. Важливо не перетворювати прагматичні тенденції на граматичні правила.

### AC. Дискурс
- topic/comment;
- theme/rheme;
- focus;
- given/new;
- anaphora;
- cataphora;
- textual cohesion;
- ellipsis;
- discourse markers;
- paragraph-level organization;
- narrative;
- exposition;
- argumentation;
- formal/academic prose;
- direct and indirect speech;
- reported speech;
- paraphrase.

**Поточний стан:** 🟡/🟢. Ядро є, але **пряма/непряма мова та системна дискурсивна трансформація мають бути явніше представлені**.

### AD. Лексико-граматика
- collocations;
- verb–noun;
- adjective government;
- verb government;
- lexicalized constructions;
- false friends;
- fixed prepositional frames;
- semantic restrictions.

**Поточний стан:** 🟡. Ядро є, але це має бути більший домен, а не чотири сторінки.

### AE. Регіональна варіативність
- pluricentric Portuguese;
- PT-BR;
- PT-PT;
- Angola;
- Mozambique;
- other Lusophone varieties;
- address systems;
- pronunciation;
- clitic placement;
- progressive;
- articles;
- lexical differences;
- spelling variants;
- register.

**Поточний стан:** 🟢/🟡. Сильний каркас; кожне конкретне регіональне твердження має залишатися evidence-scoped.

## 5. Теми, яких зараз явно бракує або які треба винести окремо

### Високий пріоритет
1. **Вокатив.**
2. **Вигуки / interjeições.**
3. **Системна тема «фраза та синтаксичні функції»**, включно з vocative та predicative complements.
4. **Conformative subordinate clauses.**
5. **Proportional subordinate clauses.**
6. **Повний блок reduced clauses.**
7. **Повна система числівників.**
8. **Словотвір як окремий багатосторінковий домен.**
9. **Просодія та інтонація.**
10. **Складова структура та syllabification.**
11. **Hyphenation.**
12. **Пряма й непряма мова / reported speech.**
13. **Повна пунктуація в синтаксичному контексті.**

### Середній пріоритет
14. Echo questions.
15. Alternative questions.
16. Negative questions.
17. Comparative clauses як окрема системна тема.
18. Modal clauses / modal adjuncts.
19. Discourse-level paraphrase.
20. Lexicalized grammatical constructions.
21. Conversion / zero derivation.
22. Compound word formation.
23. Interjections and exclamative constructions.
24. Connected speech.
25. IPA + pronunciation lookup methodology.

## 6. Що вже зроблено дуже добре

Найцінніша частина репозиторію — **контрастивний шар для українця**.

Правильна модель уже реалізована в таких темах, як:

- рід португальського іменника vs український;
- артиклі vs українська;
- `gostar de` vs українське керування;
- особовий інфінітив;
- conjunctivo/subjuntivo;
- `tu/você`;
- `lhe` vs `o/a`;
- `se`;
- український вид vs португальські часи/аспект;
- PT-BR/PT-PT;
- кальки та false friends.

Це треба зробити **архітектурним стандартом для кожної нової теми**, а не просто особливістю окремих сторінок.

## 7. Критичне уточнення щодо цільової аудиторії

Довідник має бути написаний:

> **для українців / носіїв української мови, які вивчають португальську.**

Не для абстрактних «україномовних», якщо під цим мається на увазі будь-хто, хто просто читає український інтерфейс.

Отже, пояснення повинні виходити з **мовної системи українського носія**:

- що в українській є, а в португальській немає;
- чого немає в українській, але є в португальській;
- де категорії формально схожі, але функціонують інакше;
- де український переклад приховує португальську граматичну форму;
- які помилки виникають через L1 transfer;
- де українська інтуїція, навпаки, допомагає.

Не треба пояснювати португальську через англійську або іспанську, якщо це не окрема порівняльна примітка.

## 8. Методологія майбутнього контенту

Кожна substantive page бажано повинна мати:

1. визначення;
2. граматичну функцію;
3. форму;
4. розподіл;
5. мінімальні пари;
6. типові контексти;
7. винятки;
8. український контраст;
9. типові помилки українського студента;
10. PT-BR/PT-PT, якщо відмінність релевантна;
11. регістр;
12. пов'язані теми;
13. evidence/source status для high-risk claims.

Для high-risk claims:
- не використовувати «завжди» без доказу;
- не використовувати «ніколи» без доказу;
- розділяти grammaticality, standard preference, frequency, register та regionality;
- приклади перевіряти не лише на граматичність, а й на відповідність заявленому правилу.

## 9. Контрастивна матриця для українського носія

Для кожного великого домену має існувати відповідь на п'ять питань:

| Питання | Приклад |
|---|---|
| Що є в українській? | відмінки, вид, вільніший порядок слів |
| Чого немає в українській? | артиклі, personal infinitive, майбутній conjuntivo |
| Що виглядає схожим, але працює інакше? | `ser/estar`, `tu/você`, `se` |
| Який український переклад приховує структуру? | `gostar de` → «любити» |
| Яка типова L1-інтерференція? | `Gosto música` замість `Gosto de música` |

Це повинно стати **обов'язковою редакційною схемою**, а не факультативною приміткою.

## 10. Варіативність

Репозиторій правильно рухається від схеми «Бразилія = X, Португалія = Y» до:

- стандарт;
- частотність;
- регістр;
- усне/писемне;
- регіон;
- покоління/соціальна ситуація;
- конструкція.

Цю політику треба зберегти. Академічні дослідження підтверджують, що окремі властивості португальської реально по-різному реалізуються в PT-BR та PT-PT; наприклад, personal infinitive та клитична/займенникова система є зонами, де різновид має значення. Дослідження також показують, що L2/L3 learners мають окремі труднощі з клитиками та контракціями, а попередня мовна система може впливати на засвоєння. 

## 11. Архітектурний висновок

Поточна модель:

`catalog → content loader → specialized page modules → UI`

є правильною.

Не треба переносити контент у компоненти UI.

### Рекомендована остаточна ієрархія

```
src/content/
├── catalog.ts
├── types.ts
├── helpers.ts
├── load.ts
├── search.ts
├── pages/
│   ├── fundamentals/
│   ├── nouns/
│   ├── determiners/
│   ├── adjectives/
│   ├── pronouns/
│   ├── clitics/
│   ├── numerals/
│   ├── verbs/
│   ├── tenses/
│   ├── moods/
│   ├── infinitive/
│   ├── gerund/
│   ├── periphrases/
│   ├── prepositions/
│   ├── contractions/
│   ├── crase/
│   ├── conjunctions/
│   ├── syntax/
│   ├── subordinate/
│   ├── relative/
│   ├── passive/
│   ├── agreement/
│   ├── negation/
│   ├── questions/
│   ├── se/
│   ├── semantics/
│   ├── pragmatics/
│   ├── discourse/
│   ├── lexical-grammar/
│   ├── word-formation/
│   ├── phonetics/
│   ├── spelling/
│   └── regional/
└── generated-pages.ts
```

Фізичне розбиття на папки можна зробити окремим рефакторингом; **логічні домени вже мають бути зафіксовані зараз**.

## 12. Generated fallback

`generated-pages.ts` не повинен стати постійним сховищем граматики.

Правило:

> catalog entry → dedicated, reviewed page → only then considered complete.

Fallback може забезпечувати навігаційну цілісність, але не повинен рахуватися доказом контентного покриття.

## 13. QA-модель

Потрібні чотири незалежні шари:

### Structural QA
- duplicate IDs;
- duplicate route keys;
- broken related links;
- catalog/page mismatch;
- missing metadata.

### Linguistic QA
- grammar;
- semantics;
- morphology;
- syntax;
- government;
- agreement;
- examples.

### Contrastive QA
- Ukrainian explanation;
- L1 interference;
- false equivalence;
- natural Ukrainian translation.

### Variation QA
- PT-BR;
- PT-PT;
- African varieties;
- spoken/written;
- register;
- frequency.

Жоден із цих шарів не замінює іншого.

## 14. Release gate

Проєкт можна вважати **grammatically complete** лише після того, як:

- усі домени з цієї карти мають explicit coverage;
- кожна canonical topic має dedicated page або свідомо документоване включення в іншу тему;
- немає «сирих» fallback topics серед core grammar;
- high-risk claims мають evidence status;
- приклади перевірені;
- PT-BR/PT-PT claims scoped;
- українські пояснення проходять контрастивну перевірку;
- catalog↔provider↔related graph чистий;
- typecheck/lint/tests/content audit/build проходять;
- документація оновлена разом із каталогом.

## 15. Порядок роботи далі

**Не переписувати все.**

Порядок:

1. зафіксувати цю карту як canonical grammar inventory;
2. закрити явні gaps: vocative, interjections, numerals, subordinate gaps, reported speech;
3. розгорнути word-formation;
4. розгорнути phonetics → phonology → prosody;
5. поглибити punctuation/syntax;
6. пройти contrastive Ukrainian audit усіх high-depth pages;
7. пройти evidence audit;
8. лише після цього оцінювати «100% coverage».

## 16. Джерельна база

Основний reference anchor:

- Fundação Calouste Gulbenkian, *Gramática do Português*, Vol. I–III.
- Camões, *Referencial Camões PLE*.
- Specialist usage sources such as Ciberdúvidas.
- Peer-reviewed research on Portuguese L2/L3 acquisition and BR/PT variation.

Для методології контрастивного навчання особливо релевантні дослідження, що показують роль попередньої мовної системи в засвоєнні португальських контракцій та складність clitic/pronoun systems у навчанні. Див. також літературний аудит у Undermind: https://app.undermind.ai/projects/951aec74-4da2-43cd-969c-7dea9b415062?path=/Portuguese%20grammar%20reference%20coverage%20for%20Ukrainian%20learners.

## 17. Підсумок одним словом

**Незавершений.**

Не в сенсі «поганий» або «сирий»: навпаки, ядро вже дуже широке. Незавершений означає, що карта системи ще не замкнена на рівні повного reference grammar inventory.

Наступна мета — не збільшити число сторінок заради числа, а зробити так, щоб **кожна граматична система мала однозначне місце в архітектурі й контрастивне пояснення для носія української.**


### Scope re-audit (2026-09-25)

The canonical inventory was re-audited against the Camões PLE grammatical inventory and the published scope of *Gramática do Português*. Four underrepresented domains were identified and added to the canonical ontology: **adverbs/adverbial locutions; conjunctions/connective expressions; interjections/exclamatives; sentence types, polarity and illocutionary force**. The canonical inventory now contains **852 coverage units**. This is an ontology count, not a target number of pages.
