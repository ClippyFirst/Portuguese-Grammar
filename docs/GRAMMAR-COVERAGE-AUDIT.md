# Аудит тематичного охоплення португальського граматичного довідника

Дата аудиту: 21 вересня 2026
Гілка: chore/local-development
Об'єкт: src/content/catalog.ts та src/content/pages/
Мета: перевірити, чи нинішній довідник охоплює португальську як системну мову для україномовного користувача, а не лише набір базових граматичних правил.

## 1. Короткий висновок

У каталозі зараз 260 тем у 30 категоріях. Це вже великий і серйозний морфосинтаксичний довідник. Особливо добре представлені артиклі, іменники, займенники, клитики, прийменники, контракції, crase, дієслівна система, часи, способи, інфінітив, gerúndio, particípio, перифрази, se, узгодження, підрядність, пасив, заперечення, питання та PT-BR/PT-PT.

Водночас це ще не повний довідник португальської для україномовного користувача. Головна причина не в нестачі базової граматики. Головна причина — дисбаланс між рівнями опису мови.

Найсильніше покрито:
- морфологію;
- морфосинтаксис;
- синтаксис речення;
- дієслівну систему;
- клитики та se;
- українсько-португальські граматичні контрасти;
- PT-BR/PT-PT.

Найслабше покрито:
- фонетику;
- фонологію;
- орфоепію;
- семантику;
- прагматику;
- дискурс і текст;
- валентність та керування як окрему систему;
- детермінативи й квантифікацію;
- повний словотвір;
- лексико-граматичну сполучуваність.

Це означає: наступний етап не варто будувати як механічне додавання ще сотень дрібних граматичних сторінок. Потрібно закрити великі структурні прогалини.

## 2. Поточна матриця

| Домен | Стан | Оцінка |
|---|---|---|
| Частини мови | 🟢 | добре |
| Іменники | 🟢 | добре |
| Прикметники | 🟢 | добре |
| Артиклі | 🟢 | дуже добре |
| Займенники | 🟢 | дуже добре |
| Клитики | 🟢 | дуже добре |
| Числівники | 🟡 | потрібне розширення |
| Прийменники | 🟢 | дуже добре |
| Контракції | 🟢 | дуже добре |
| Crase | 🟢 | дуже добре |
| Дієслова | 🟢 | дуже добре |
| Часи | 🟢 | дуже добре |
| Способи | 🟢 | дуже добре |
| Інфінітив | 🟢 | добре |
| Gerúndio | 🟢 | добре |
| Particípio | 🟢 | добре |
| Перифрази | 🟢/🟡 | хороше ядро |
| Se | 🟢 | дуже добре |
| Узгодження | 🟢 | добре |
| Синтаксис | 🟢 | добре |
| Підрядність | 🟢 | добре |
| Пасив/безособові | 🟢 | добре |
| Заперечення | 🟢 | добре |
| Питання | 🟢 | добре |
| Орфографія | 🟡 | потрібне розширення |
| Фонетика | 🔴 | велика прогалина |
| Фонологія | 🔴 | велика прогалина |
| Орфоепія | 🔴 | велика прогалина |
| Семантика | 🟡/🔴 | немає системного шару |
| Прагматика | 🔴 | майже відсутня як окремий шар |
| Дискурс/текст | 🔴 | недостатньо |
| Словотвір | 🟡/🔴 | надто вузький |
| Лексична сполучуваність | 🔴 | майже відсутня |
| Варіативність | 🟢/🟡 | сильне ядро |
| Українська інтерференція | 🟢/🟡 | сильна ідея, потребує систематизації |

## 3. Методологічний висновок

Для аудиту недостатньо просто рахувати сторінки. Потрібно перевіряти, чи присутні різні рівні опису мови.

Camões PLE прямо розділяє мовну компетентність на лексичну, граматичну, семантичну, фонологічну, орфографічну та ортоепічну складові. Його Referencial також пов'язує граматичний інвентар із прагматичною та поняттєвою компетентністю. Тому довідник, який називає себе системним довідником португальської, не повинен обмежуватися морфологією і синтаксисом.

Посилання:
- Camões, Referencial Camões PLE: https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple-2
- Camões, ebook Referencial: https://www.instituto-camoes.pt/images/REFERENCIAL_ebook.pdf
- CAPLE: https://caple.letras.ulisboa.pt/exames
- Gramática do Português, Vol. I: https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/
- Gramática do Português, Vol. II: https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/
- Gramática do Português, Vol. III: https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/

## 4. Найсильніший блок: морфосинтаксис

Нинішній каталог уже охоплює значну частину традиційного граматичного ядра: рід, число, особу, артиклі, прикметники, займенники, дієслова, часи, способи, інфінітив, gerúndio, particípio, узгодження, клитики, se, прийменники та синтаксичні конструкції.

Особливо вдалими є теми, орієнтовані саме на україномовного користувача: gender-vs-ukrainian, articles-ukrainian, tense-vs-ukrainian, personal-infinitive, futuro do conjuntivo, tu-você, lhe-vs-o, por-para, a-vs-crase.

Цю модель потрібно зберегти: правило + значення + приклади + типова українська інтерференція + BR/PT.

## 5. Найбільша прогалина: фонетика, фонологія та орфоепія

Поточний блок spelling має alphabet, reading rules, stress, diacritics, distinctive accents, capitalization, punctuation, spelling agreement та BR/PT spelling. Але це не є повноцінним описом вимови.

Потрібен окремий блок phonetics/phonology.

### Обов'язкові теми
- система голосних;
- система приголосних;
- наголошені та ненаголошені голосні;
- редукція голосних;
- відкриті та закриті e/o;
- носові голосні;
- носові дифтонги;
- дифтонги та трифтонги;
- напівголосні;
- r/rr;
- s у різних позиціях;
- x;
- ch, lh, nh;
- c, ç, g, j;
- b/v;
- ão, em, en;
- d/t перед i у PT-BR;
- кінцеві голосні та приголосні;
- IPA;
- читання незнайомого слова.

### Український контраст
Окремо потрібно пояснити звуки, для яких українська не дає хорошого аналога, та типові помилки перенесення української вимови.

### PT-BR vs PT-PT
Потрібні системні сторінки про редукцію голосних, s, r, d/t, ритм, темп і типові фонетичні відмінності.

## 6. Друга велика прогалина: детермінативи та квантифікація

Артиклі опрацьовані дуже добре, але артиклі не дорівнюють усій системі determiners.

Потрібно об'єднати в один системний шар:
- demonstratives;
- possessives;
- indefinites;
- quantifiers;
- interrogatives;
- numerals;
- negative determiners;
- universal quantification;
- distributive expressions.

Особливо важливі:
- todo / todo o / tudo;
- algum / alguém;
- nenhum / ninguém / nada;
- cada;
- qualquer;
- certo;
- ambos;
- outro;
- mesmo;
- próprio;
- muito / pouco / bastante / demasiado.

Потрібно пояснювати не лише форму, а й різницю між determiner, pronoun, quantifier та adverbial use.

## 7. Третя прогалина: семантика

Семантичні явища вже є всередині сторінок ser/estar/ficar, já/ainda, tense/aspect, adjective meaning, se та focus, але немає системного semantic layer.

Потрібен розділ semantics:
- definiteness;
- specificity;
- reference;
- deixis;
- anaphora;
- aspect;
- modality;
- temporal relations;
- quantification;
- scope;
- lexical aspect;
- habituality;
- iteration;
- inception;
- termination;
- resultative meaning.

Особливо потрібно розвести форму і значення. Одна й та сама граматична форма може виконувати кілька семантичних функцій, а одне значення може виражатися кількома формами.

## 8. Четверта прогалина: прагматика

Є register, forms-of-address та emphasis-focus, але немає системної прагматики.

Потрібно додати:
- speech acts;
- requests;
- commands;
- advice;
- permission;
- prohibition;
- politeness;
- indirectness;
- hedging;
- disagreement;
- correction;
- confirmation;
- conversational markers.

Особливо корисна серія мінімальних пар:
- Fecha a porta.
- Pode fechar a porta?
- Podia fechar a porta?
- Será que pode fechar a porta?

Це показує україномовному користувачу не просто граматику, а соціальну функцію граматичної форми.

## 9. П'ята прогалина: дискурс і текст

Для B2-C2 потрібен рівень вище окремого речення.

Новий блок discourse має охопити:
- topic/comment;
- theme/rheme;
- focus/contrast;
- given/new information;
- anaphora/cataphora;
- lexical cohesion;
- ellipsis;
- discourse markers;
- paragraph structure;
- argumentation;
- narration;
- description;
- exposition;
- formal writing;
- academic writing;
- journalism.

Також потрібні операції перефразування:
- active → passive;
- direct → indirect speech;
- finite → infinitive;
- clause → nominalization;
- relative clause → reduced construction;
- topicalization;
- cleft constructions.

## 10. Шоста прогалина: валентність і керування

Є тема verb-preposition, але потрібна загальна модель valency.

Створити окремий блок:
- intransitive verbs;
- transitive verbs;
- ditransitive verbs;
- copular verbs;
- prepositional complements;
- oblique complements;
- reflexive/pronominal verbs;
- complement selection.

Наприклад:
- dar: alguém dá alguma coisa a alguém;
- gostar: alguém gosta de alguma coisa;
- obedecer: alguém obedece a alguém;
- lembrar-se: alguém lembra-se de alguma coisa;
- ser capaz: alguém é capaz de alguma coisa / de fazer alguma coisa.

Для україномовного це один із найважливіших шарів, тому що українське відмінкове керування часто не збігається з португальським прийменниковим.

## 11. Сьома прогалина: словотвір

Наявна тема prefixes/suffixes — лише початок.

Потрібна повна система:
- derivation;
- prefixation;
- suffixation;
- parasynthesis;
- conversion;
- nominalization;
- adjectivization;
- verbalization;
- adverb formation;
- composition;
- compound plural;
- productive affixes.

Корисно системно описати продуктивні моделі:
- -ção;
- -mento;
- -dade;
- -ez;
- -eiro;
- -ista;
- -ismo;
- -agem;
- -aria;
- -oso;
- -ável;
- -ivo;
- -izar;
- -ificação;
- re-;
- des-;
- in-/im-/i-/ir-;
- anti-;
- inter-;
- sub-;
- super-;
- auto-;
- co-.

## 12. Восьма прогалина: лексико-граматична сполучуваність

Потрібен блок lexical-grammar.

Теми:
- verb + preposition;
- adjective + preposition;
- noun + preposition;
- fixed complements;
- collocations;
- support/light verbs;
- idiomatic constructions;
- lexicalized grammar.

Наприклад: ter medo de, ser capaz de, estar disposto a, ter vontade de, dar-se conta de, fazer sentido, tomar uma decisão, ter em conta.

Це має бути пов'язано з українськими еквівалентами, але не зводитися до перекладу.

## 13. Орфографія потребує розширення

Нинішній spelling-блок хороший, але варто додати:
- hyphenation;
- hífen у складних словах;
- prefixes + hífen;
- compound words;
- abbreviations;
- acronyms;
- numbers in writing;
- dates;
- time notation;
- direct-speech punctuation;
- quotation marks;
- semicolon;
- colon;
- ellipsis;
- vocative commas;
- apposition;
- punctuation in subordinate clauses;
- punctuation in restrictive/non-restrictive relatives.

Особливо корисний українсько-португальський punctuation contrast.

## 14. Числівники потребують розширення

Зараз є cardinal, ordinal, dates/time.

Додати:
- decimals;
- fractions;
- percentages;
- ranges;
- currency;
- measurements;
- years;
- centuries;
- addresses;
- phone numbers;
- multiplicatives;
- distributives;
- approximate quantities;
- agreement with numerals;
- milhão / mil milhões / bilhão;
- BR/PT differences in large-number naming.

## 15. Типи речень

Окремо варто додати системний overview:
- declarative;
- interrogative;
- imperative;
- exclamative;
- rhetorical question;
- echo question;
- confirmation question;
- optative/hortative constructions.

Для PT-BR корисні tag-like forms на кшталт né?; для PT-PT — характерні відповідні дискурсивні моделі.

## 16. Багатофункціональні слова

Потрібен окремий формат сторінок: «одне слово — багато граматичних функцій».

Кандидати:
- que;
- como;
- se;
- pois;
- então;
- já;
- mesmo;
- ainda;
- bem;
- mal;
- só;
- até;
- também;
- logo;
- próprio.

Для кожного: частини мови, синтаксичні ролі, семантичні значення, регістр, BR/PT та типові помилки.

## 17. Українська інтерференція — перетворити сильну ідею на систему

Потрібен окремий cross-cutting module Ukrainian interference.

Категорії:
- articles;
- gender;
- cases → prepositions;
- aspect → tense;
- word order;
- null subject;
- clitics;
- government;
- direct/indirect object;
- infinitive;
- conjunctive;
- futuro do conjuntivo;
- ser/estar/ficar;
- ter/haver;
- por/para;
- saber/conhecer;
- levar/trazer;
- ir/vir;
- tu/você;
- pronunciation;
- punctuation;
- calques;
- false friends.

## 18. False friends і кальки

Для українського користувача це має бути окремим шаром, але не просто словником.

Потрібні типові приклади на кшталт actual, pretender, assistir, eventualmente, pasta, constipado, oficina, sucesso, largo, parentes, realizar, aplicar, candidatura, propina.

Для кожного слова бажано давати:
- український еквівалент;
- реальне португальське значення;
- керування;
- приклад;
- register;
- споріднені форми;
- типову українську кальку.

## 19. PT-BR / PT-PT

Регіональний блок уже сильний. Наступний крок — зробити BR/PT поперечним параметром для кожної релевантної теми.

Особливо:
- pronunciation;
- articles;
- possessives;
- clitics;
- progressive;
- gerund;
- infinitive;
- tu/você;
- imperative;
- numbers;
- dates;
- spelling;
- discourse markers;
- politeness.

Не варто дублювати всю граматику двічі. Базова тема має містити спільне правило, а BR/PT-блок — відмінності.

## 20. Африканські та інші лузофонні різновиди

Є Angola, Mozambique та other-lusophone. Це правильний напрям, але поки радше карта, ніж глибокий опис.

Для кожного різновиду достатньо спочатку системно описати:
- pronouns;
- articles;
- verbal morphology;
- clitics;
- characteristic syntax;
- prepositions;
- pronunciation;
- register;
- discourse markers;
- vocabulary.

Поступово можна розширити Cabo Verde, Guiné-Bissau, São Tomé e Príncipe та Timor-Leste.

## 21. C1/C2-шар

Якщо мета — справді довідник, а не базовий курс, потрібен advanced layer.

C1:
- advanced information structure;
- complex relative constructions;
- nominalization;
- discourse connectors;
- hedging;
- modality;
- reported speech;
- complex infinitival clauses;
- participial constructions;
- stylistic inversion;
- formal/academic syntax.

C2:
- marked word order;
- pragmatic ambiguity;
- implicit meaning;
- irony;
- rhetorical constructions;
- ellipsis;
- idiomatic syntax;
- literary constructions;
- high-register language;
- sociolinguistic variation.

CAPLE описує B2-C2 як рівні, де зростає роль складних лексико-синтаксичних і синтаксико-семантичних структур, різних регістрів, ідіоматизмів, аргументації та культурно маркованої мови.

## 22. Рекомендована нова верхньорівнева інформаційна архітектура

1. Основи
2. Вимова
3. Орфографія
4. Іменна група
5. Детермінативи й квантифікація
6. Прийменники та керування
7. Дієслово
8. Клитики та se
9. Синтаксис
10. Семантика
11. Прагматика
12. Дискурс і текст
13. Словотвір
14. Варіативність
15. Українська інтерференція

Це не означає, що потрібно негайно переносити всі існуючі 260 тем. Це цільова концептуальна карта для майбутньої навігації.

## 23. Пріоритети

### P0 — закрити структурні прогалини
- phonetics;
- phonology;
- orthoepy;
- determiners;
- quantification;
- valency;
- government;
- aspect;
- modality;
- semantic reference.

### P1 — зробити довідник просунутим
- pragmatics;
- speech acts;
- discourse markers;
- information structure;
- cohesion;
- ellipsis;
- nominalization;
- causative constructions;
- raising/control;
- word formation.

### P2 — глибока варіативність
- PT-BR pronunciation;
- PT-PT pronunciation;
- Brazilian regional variation;
- European regional variation;
- Angola;
- Mozambique;
- Cabo Verde;
- Guiné-Bissau;
- São Tomé e Príncipe;
- Timor-Leste.

## 24. Що не потрібно робити

Не варто перетворювати довідник на словник кожного дієслова.

Не варто створювати окрему сторінку для кожного сполучника, якщо явище можна описати через семантичний клас.

Не варто дублювати PT-BR та PT-PT як дві повністю незалежні граматики.

Не варто перетворювати reference tool на лінійний курс.

Не варто збільшувати кількість тем лише заради числа.

## 25. Стандарт завершеної теми

Для центральних тем бажано мати:
1. визначення;
2. формулу;
3. утворення;
4. значення;
5. вживання;
6. приклади;
7. типові помилки;
8. контраст з українською;
9. PT-BR;
10. PT-PT;
11. регіональні варіанти;
12. related topics;
13. exceptions;
14. minimal pairs;
15. register/context.

Мікротеми не мусять мати всі 15 пунктів, але центральні сторінки мають бути максимально системними.

## 26. Фінальний висновок

Нинішній проєкт уже не можна описувати як «маленьку граматику». 260 тем — це серйозне морфосинтаксичне ядро.

Водночас він ще не є повним системним довідником португальської для україномовного користувача.

Ключова проблема — не кількість сторінок, а неповне покриття рівнів опису.

Найкращий напрям розвитку:
1. фонетика/фонологія;
2. детермінативи та квантифікація;
3. валентність і керування;
4. семантика;
5. прагматика;
6. дискурс і текст;
7. словотвір;
8. лексико-граматична сполучуваність;
9. системна українська інтерференція;
10. C1/C2 та поглиблена варіативність.

Після цього наступні нові теми слід додавати лише тоді, коли вони закривають конкретну прогалину в цій карті.

### Основні референти
- Camões, Referencial Camões PLE — https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple-2
- CAPLE — https://caple.letras.ulisboa.pt/exames
- Fundação Calouste Gulbenkian, Gramática do Português — https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/
- Ciberdúvidas — https://ciberduvidas.iscte-iul.pt/
## 27. Оновлений implementation backlog

Після повторної перевірки файлового дерева важливо розрізняти **категорію в каталозі** та **реально опрацьований контент**. Частина понять уже згадується всередині наявних сторінок, але це не означає, що вони мають достатнє окреме покриття. Тому нові сторінки слід створювати за coverage gap, а не лише за відсутністю ключового слова.

### Wave A — мовний фундамент

Створити нові тематичні модулі:

- `phonetics`: голосні, приголосні, носалізація, дифтонги, редукція, IPA;
- `pronunciation`: r/rr, s/x/z, lh/nh/ch, b/v, d/t, кінцеві голосні;
- `phonology`: склад, наголос, фонологічні опозиції, алофонія;
- `orthoepy`: нормативна вимова, читання нових слів, BR/PT;
- `determiners`: повна система детермінативів;
- `quantification`: universal, existential, distributive, scalar та approximate quantification;
- `valency`: аргументи дієслова та типи комплементів;
- `government`: дієслівне, прикметникове та іменникове керування.

### Wave B — значення

- `aspect`: lexical + grammatical aspect;
- `modality`: epistemic, deontic, dynamic, evidential/inferential meaning;
- `reference`: definiteness, specificity, deixis, anaphora;
- `scope`: negation, quantifiers, focus;
- `comparison-semantics`: degree, equality, inequality, scalar readings;
- `temporal-semantics`: anteriority, simultaneity, posteriority, duration, habituality.

### Wave C — комунікація

- `pragmatics`: speech acts, politeness, indirectness, hedging;
- `discourse-markers`: então, pois, afinal, aliás, enfim, ou seja тощо;
- `information-structure`: topic, focus, contrast, given/new information;
- `discourse`: cohesion, coherence, reference chains, paragraph structure;
- `ellipsis`: nominal, verbal, clausal and conversational ellipsis;
- `registers`: neutral, informal, formal, academic, journalistic, literary.

### Wave D — складна граматика

- `causative`: fazer/deixar/mandar + infinitivo та альтернативні конструкції;
- `raising-control`: parecer, tentar, conseguir, decidir, prometer тощо;
- `nominalization`: derivation та syntactic nominalization;
- `reduced-clauses`: infinitival, participial and gerundial reductions;
- `advanced-relatives`: complex relative structures;
- `reported-speech`: direct, indirect and free-indirect/reporting constructions;
- `complex-predicate`: light verbs and lexicalized predicates.

### Wave E — лексико-граматична система

- `collocations`: частотні лексико-граматичні сполучення;
- `verb-preposition`: розширити до повного government reference;
- `adjective-preposition`;
- `noun-preposition`;
- `fixed-expressions`;
- `false-friends` для українськомовного користувача;
- `calques` та типові українські моделі, які не переносяться буквально.

### Wave F — словотвір та орфографія

- `derivation`: prefixation, suffixation, parasynthesis;
- `composition`: compound formation та pluralization;
- `conversion`: зміна категорії без очевидного афікса;
- `productive-suffixes`;
- `productive-prefixes`;
- `hyphenation`;
- `abbreviations`;
- `acronyms`;
- `numbers-in-writing`;
- `advanced-punctuation`.

## 28. Рекомендована модель кожної нової сторінки

Щоб не накопичувати поверхневий AI-контент, нові теми мають проходити однакову структуру перевірки.

### A. Linguistic definition
Що саме описується і до якого рівня мови належить явище.

### B. Form
Формула, морфологічна модель або синтаксична структура.

### C. Distribution
Де конструкція можлива, неможлива або обмежена.

### D. Meaning
Основні семантичні значення; не плутати форму зі значенням.

### E. Pragmatics/register
Яку комунікативну функцію має конструкція і в якому регістрі вона природна.

### F. Examples
Мінімальні пари та контрастивні приклади, а не лише ізольовані речення.

### G. BR/PT
Розділяти спільне правило і реальну варіативність між Бразилією та Португалією.

### H. Ukrainian interference
Пояснювати, де українська модель може спричинити помилку.

### I. Exceptions
Винятки, lexicalized forms, frequency-sensitive patterns.

### J. References
Для академічно спірних або нормативних тверджень потрібне джерело. Не можна подавати сумнівну норму як універсальне правило.

## 29. Контроль якості coverage

Після реалізації кожної хвилі слід перевіряти не тільки кількість сторінок, а:

- чи має кожен великий домен overview;
- чи існує navigation від overview до мікротем;
- чи немає дублювання одного правила в кількох місцях;
- чи всі BR/PT-відмінності позначені однаково;
- чи відрізняються normative rules від usage/variation;
- чи українські пояснення не створюють хибних аналогій;
- чи приклади справді демонструють правило;
- чи немає непідтверджених універсальних тверджень;
- чи related links утворюють логічний граф;
- чи теми можна знайти через пошук за португальським терміном.

## 30. Цільовий результат

Цільова система не повинна вимірюватися фразою «було 260, стало 400 тем». Значно кращий KPI:

> кожен великий рівень португальської має overview, системну карту понять, достатню кількість мікротем, контраст із українською та BR/PT-відмінності там, де вони мовно значущі.

Після закриття Wave A–E довідник стане значно ближчим до **повного практичного reference system**, а не просто великого набору граматичних статей.

## 31. Реалізована Wave A/B — вересень 2026

Після аудиту реалізовано перший substantive coverage expansion без дублювання наявних сторінок.

### Нові категорії

- Фонетика і вимова (phonetics)
- Детермінативи і квантифікація (determiners)
- Валентність і керування (valency)
- Семантика (semantics)

### Нові теми

Фонетика:
- карта фонетики;
- голосні та відкритість e/o;
- носові голосні й дифтонги;
- складні приголосні r/rr/s/x/nh/lh/ch;
- наголос і просодія.

Детермінативи:
- система детермінативів;
- квантифікація;
- сфера дії та референція;
- узгодження детермінативів.

Валентність:
- валентність дієслова;
- керування дієсловом і прийменником;
- аргумент vs вільний модифікатор.

Семантика:
- аспект;
- модальність;
- референція;
- родове/узагальнене значення.

### Принцип реалізації

Нові сторінки не дублюють уже наявні правила. Вони додають рівень опису, якого бракувало:

- фонетика пояснює, чому одних правил читання недостатньо;
- детермінативи об'єднують артиклі, вказівні, присвійні та квантори;
- валентність пояснює керування через структуру предиката;
- семантика відділяє значення часу, виду, модальності та референції від механічного перекладу.

### Нормативна обережність

Для синтаксичних термінів, особливо complemento indireto, complemento preposicionado/oblíquo та межі між аргументом і модифікатором, у довіднику свідомо не нав'язується одна-єдина теоретична школа. Це важливо, бо сучасні португаломовні граматичні традиції використовують різну термінологію для частково перекривних аналізів.

Основними контрольними референтами для подальшої редакції є Gramática do Português (Fundação Calouste Gulbenkian), Ciberdúvidas та нормативні/освітні матеріали Camões/CAPLE.

## 32. Наступний quality gate

Після Wave A/B не слід безконтрольно додавати ще десятки мікротем. Наступний етап має пройти через три перевірки:

1. content QA — фактична й нормативна верифікація;
2. graph QA — чи нові теми реально пов'язані з наявними;
3. coverage QA — чи закриті системні прогалини, а не просто збільшилася кількість сторінок.

Наступний substantive wave: прагматика, дискурсивні маркери, інформаційна структура, еліпсис, словотвір і лексико-граматична сполучуваність.


## 33. Реалізована Wave C/D/E — розширення до контекстного та просунутого рівня

Після фундаментального шару додано три пов'язані блоки.

### Прагматика

- загальна модель «граматична форма → функція в контексті»;
- мовленнєві акти: прохання, порада, наказ, запрошення;
- ввічливість і соціальна дистанція;
- прагматичні частки та контекстні значення já, ainda, só;
- регістр і ступінь прямоти.

### Дискурс і текст

- дискурс і когезія;
- дискурсивні маркери então, afinal, aliás, enfim;
- інформаційна структура: topic / focus / нова інформація;
- еліпсис;
- референційна та лексична когезія.

### Просунутий синтаксис

- каузативні конструкції fazer / mandar / deixar;
- raising і control;
- номіналізація;
- складні відносні речення;
- складені предикати й аналітичні комплекси.

### Лексико-граматичний шар

- колокації;
- дієслівно-іменні колокації;
- керування прикметників;
- false friends для українськомовного студента.

Ці блоки навмисно не дублюють базові сторінки. Їхня функція — пояснити явища, які виникають **між рівнями**: лексикою та синтаксисом, формою та контекстом, реченням і текстом.

## 34. Нова модель coverage

Після розширення довідник має розглядатися як багаторівнева система:

1. **Графіка** — орфографія та пунктуація.
2. **Звук** — фонетика, фонологія, просодія.
3. **Морфологія** — форми слів.
4. **Іменна група** — рід, число, артиклі, детермінативи, квантифікація.
5. **Дієслівна система** — час, спосіб, вид, перифрази.
6. **Аргументна структура** — валентність і керування.
7. **Синтаксис** — структура клауз і складного речення.
8. **Семантика** — референція, аспект, модальність, сфера дії.
9. **Прагматика** — мовленнєві дії, ввічливість, контекст, регістр.
10. **Дискурс** — інформаційна структура, когезія, еліпсис.
11. **Лексико-граматика** — колокації, словотвір, лексичне керування.
12. **Варіативність** — PT-BR, PT-PT та інші лузофонні різновиди.
13. **Контрастивний шар** — типові помилки саме україномовного студента.

Ця модель значно ближча до повноцінного reference work, ніж лінійний перелік частин мови.

## 35. Що ще НЕ можна вважати закритим

Кількість сторінок сама по собі не означає повне покриття. Після цього етапу залишаються окремі глибокі завдання:

- системна верифікація всіх фонетичних тверджень за IPA/корпусними джерелами;
- повний inventory determiners та quantifiers;
- системна таблиця verb/adjective/noun government;
- scope і negation на просунутому рівні;
- cohesion/discourse на рівні довгого тексту;
- пунктуація складних конструкцій;
- повний productive word-formation;
- окремий довідник української інтерференції;
- систематичний BR/PT comparison;
- доказове маркування тверджень для різних стандартів і регіонів.

Наступний quality gate тому має бути не «додати ще сторінки», а **перевірити кожне нове й старе твердження, приклад та regional label**.


## 36. Quality pass: content graph and loader architecture

The expansion exposed an architectural issue: the original content loader assumed one TypeScript module per category. That made an extension module such as an advanced syntax file invisible to the runtime even when its catalog entries existed.

The loader now supports category extension modules using the naming convention:

- `syntax.ts`
- `syntax-advanced.ts`
- `syntax-<feature>.ts`

The category loader merges those modules and filters their exported pages by category.

This is important because a reference project should not have a false-positive state in which:

> catalog entry exists → URL exists → page data is actually unavailable.

The content graph was also checked for dangling `related` IDs and the catalog references introduced during expansion were corrected.

## 37. Evidence policy

A separate `docs/CONTENT-VERIFICATION.md` document now defines the evidence hierarchy and claim-level quality gate.

The current policy prioritizes:

1. reference grammars and official institutions;
2. specialist linguistic reference works;
3. corpus/usage evidence where a claim is about frequency rather than grammatical possibility.

The policy explicitly distinguishes categorical rules from preferences, tendencies, register, regional variation and disputed usage.

This distinction is particularly important for:

- infinitive selection;
- verb government;
- BR/PT contrasts;
- clitic placement;
- relative clauses;
- pronunciation;
- colloquial vs formal constructions.

## 38. Current status

The project has passed from a topic-count audit into a structural coverage + content-quality audit.

The next high-value work is **claim-level verification of the existing 260 catalog topics**, with priority given to:

- statements using “always”, “never”, “only”;
- BR/PT contrasts;
- claims about African varieties;
- pronunciation generalizations;
- government/regency;
- infinitive rules;
- article/reference rules;
- examples marked as normative or formal.

Adding more pages before this pass would create diminishing returns and could increase the amount of unverified material.
