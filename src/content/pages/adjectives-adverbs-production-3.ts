import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G1 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";
const CIB = "https://ciberduvidas.iscte-iul.pt/";

export const pages: GrammarPage[] = [
  page({
    id: "adjective-agreement", slug: "adjective-agreement", category: "adjectives",
    titleUk: "Узгодження прикметників", titlePt: "Concordância dos adjetivos", titleEn: "Adjective agreement",
    summary: "Як прикметник узгоджується з іменником у роді та числі, зокрема в складніших іменних групах.",
    aliases: ["узгодження прикметників", "adjective agreement", "concordância dos adjetivos"],
    related: ["noun-gender", "noun-number", "adjective-position", "adjective-coordination"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "У португальській прикметник у ролі означення зазвичай узгоджується з означуваним іменником у роді та числі: livro novo, casa nova, livros novos, casas novas. Для україномовного студента сама ідея не є незвичною, але труднощі виникають там, де в іменній групі кілька іменників, прикметник стоїть перед ними, або форма прикметника не має очевидної відповідності українському роду.",
    definition: "Узгодження — це морфологічна залежність форми прикметника від граматичних властивостей іменника або іменної групи, яку він характеризує.",
    formulas: [
      { pattern: "N + Adj", note: "Післяіменниковий прикметник узгоджується з іменником." },
      { pattern: "Adj + N", note: "Передіменниковий прикметник також узгоджується, але в групах із кількома іменниками можливі окремі правила інтерпретації." }
    ],
    uses: [
      { title: "Рід", body: "У типовому випадку форма прикметника змінюється разом із родом іменника.", examples: [ex("um livro novo", "нова книга / новий книжковий предмет; буквально «нова книга»"), ex("uma casa nova", "новий будинок / нова оселя")] },
      { title: "Число", body: "Множина іменника вимагає відповідної форми прикметника.", examples: [ex("livros novos", "нові книги"), ex("casas novas", "нові будинки")] },
      { title: "Кілька узгоджуваних компонентів", body: "У складній іменній групі не можна визначати форму прикметника лише за найближчим словом без урахування синтаксичної структури.", examples: [ex("as casas e jardins antigos", "старі будинки й сади"), ex("as antigas casas e jardins", "старі будинки й сади")] },
      { title: "Прикметник із кількома іменниками", body: "Передіменникова позиція може давати узгодження з найближчим іменником, тоді як післяіменникові конструкції можуть мати множинне узгодження. Значення та бажана інтерпретація мають значення.", examples: [ex("as belas casas e jardins", "гарні будинки й сади"), ex("as casas e jardins belos", "гарні будинки й сади")] }
    ],
    examples: [
      ex("uma decisão importante", "важливе рішення", { purpose: "production" }),
      ex("dois problemas importantes", "дві важливі проблеми", { purpose: "production" }),
      ex("a antiga casa", "старий будинок", { purpose: "comprehension" }),
      ex("as casas e jardins antigos", "старі будинки й сади", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("uma problema importante", "um problema importante", "Потрібно встановити рід іменника problema, а не переносити рід із українського відповідника."),
      mistake("duas casa novo", "duas casas novas", "Іменник і прикметник мають бути узгоджені і в числі, і в роді."),
      mistake("as casas e jardins antiga", "as casas e jardins antigos", "Коли прикметник характеризує всю координовану групу, форма має відповідати її структурі, а не лише першому іменнику.")
    ],
    ukrainian: "Українська має дуже схожий принцип узгодження, тому тут корисна позитивна аналогія. Водночас рід конкретного португальського іменника не завжди збігається з родом українського перекладу: це особливо важливо для назв на кшталт problema, mapa, foto, sistema.",
    regional: "Основний принцип узгодження спільний для PT-BR і PT-PT. Регіональна різниця частіше стосується порядку слів, стилю та частотності певних конструкцій, а не базового морфологічного узгодження.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Camões — Referencial Camões PLE", url: CAM }, { label: "Ciberdúvidas — Gramática", url: CIB }]
  }),

  page({
    id: "comparatives", slug: "comparatives", category: "adjectives",
    titleUk: "Порівняльний ступінь", titlePt: "Comparativos", titleEn: "Comparatives",
    summary: "Порівняння ознак через mais, menos, tão та нерегулярні форми melhor, pior, maior, menor.",
    aliases: ["порівняльний ступінь", "comparatives", "comparativos"],
    related: ["superlatives", "absolute-superlative", "adjective-meaning", "adverb-position"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальське порівняння не зводиться до механічного додавання одного закінчення до прикметника. Найпродуктивніша модель використовує прислівникові елементи mais, menos і tão та конструкції que, do que або como. Окрему увагу потребують нерегулярні comparativos: melhor, pior, maior, menor.",
    definition: "Comparativo виражає зіставлення двох або більше учасників за певною ознакою. Порівнювати можна вищий, нижчий або рівний ступінь.",
    formulas: [
      { pattern: "mais + Adj + do que/que", note: "Вищий ступінь: більше ознаки." },
      { pattern: "menos + Adj + do que/que", note: "Нижчий ступінь: менше ознаки." },
      { pattern: "tão + Adj + como/quanto", note: "Рівний ступінь." }
    ],
    uses: [
      { title: "Вища міра", body: "mais ставиться перед прикметником, а другий член порівняння вводиться que або do que.", examples: [ex("A Ana é mais alta do que a Marta.", "Ана вища за Марту."), ex("Este livro é mais útil que o outro.", "Ця книжка корисніша за іншу.")] },
      { title: "Нижча міра", body: "menos утворює аналогічну модель із протилежним напрямком шкали.", examples: [ex("Hoje estou menos cansado do que ontem.", "Сьогодні я менш втомлений, ніж учора.")] },
      { title: "Рівність", body: "Для рівного ступеня типова модель tão + прикметник + como/quanto.", examples: [ex("Ela é tão rápida como o irmão.", "Вона така сама швидка, як її брат.")] },
      { title: "Нерегулярні форми", body: "bom → melhor, mau → pior, grande → maior, pequeno → menor мають усталені порівняльні форми. Не треба утворювати *mais bom або *mais mau там, де йдеться про звичайне порівняння цих прикметників.", examples: [ex("Este é melhor.", "Це краще."), ex("A casa é maior.", "Будинок більший.")] }
    ],
    examples: [
      ex("O segundo modelo é mais barato do que o primeiro.", "Друга модель дешевша за першу.", { purpose: "production" }),
      ex("Este caminho é menos longo.", "Цей шлях менш довгий.", { purpose: "production" }),
      ex("Os dois resultados são tão importantes como o terceiro.", "Обидва результати такі ж важливі, як третій.", { purpose: "comprehension" }),
      ex("Este método é melhor.", "Цей метод кращий.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("*mais melhor", "melhor", "У стандартному порівнянні melhor уже є порівняльною формою bom/bem."),
      mistake("mais grande у значенні звичайного «більший»", "maior", "Для звичайного порівняння grande має спеціальну форму maior."),
      mistake("tão importante que o outro", "tão importante como/quanto o outro", "Потрібно розрізняти конструкцію порівняння та підрядну конструкцію з іншою функцією.")
    ],
    ukrainian: "Українська також має конструкції з більш/менш/так само, тому логіка шкали добре переноситься. Але португальські нерегулярні comparativos треба запам'ятовувати як граматичні форми: melhor не є просто словниковим варіантом mais bom.",
    regional: "Основні моделі спільні для PT-BR і PT-PT. Вибір que / do que та деякі стилістичні варіанти можуть різнитися за регістром і різновидом, але базова система порівняння не є суто регіональною.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Ciberdúvidas — Gramática", url: CIB }]
  }),

  page({
    id: "superlatives", slug: "superlatives", category: "adjectives",
    titleUk: "Суперлатив: найвищий ступінь у португальській", titlePt: "Superlativos", titleEn: "Superlatives",
    summary: "Відмінність відносного та абсолютного суперлатива і роль означеного артикля.",
    aliases: ["суперлатив", "найвищий ступінь", "superlatives", "superlativos"],
    related: ["comparatives", "absolute-superlative", "articles-definite", "adjective-agreement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальський суперлатив має щонайменше два принципово різні способи вираження. Відносний суперлатив порівнює учасника з групою: o mais alto da turma. Абсолютний суперлатив не створює групи порівняння, а лише подає ознаку як дуже високу: muito alto або altíssimo.",
    definition: "Superlativo виражає крайній або дуже високий ступінь ознаки. Відносний суперлатив встановлює позицію в певній групі, абсолютний — інтенсивність без обов'язкового порівняльного набору.",
    formulas: [
      { pattern: "o/a/os/as + mais/menos + Adj + de", note: "Відносний суперлатив." },
      { pattern: "muito + Adj", note: "Аналітичний абсолютний суперлатив." },
      { pattern: "Adj + -íssimo/-íssima", note: "Синтетичний абсолютний суперлатив." }
    ],
    uses: [
      { title: "Відносний суперлатив", body: "Артикль разом із mais/menos показує, що йдеться про найвищу або найнижчу позицію в певній групі.", examples: [ex("Ela é a mais alta da turma.", "Вона найвища в групі."), ex("Este é o menos caro dos três.", "Це найдешевший? Ні: це найменш дорогий із трьох.")] },
      { title: "Абсолютний аналітичний", body: "muito або інший інтенсифікатор підсилює ознаку без твердження про місце в групі.", examples: [ex("O problema é muito sério.", "Проблема дуже серйозна.")] },
      { title: "Абсолютний синтетичний", body: "Суфікс -íssimo та його форми дають книжніші або стилістично марковані інтенсивні форми.", examples: [ex("Foi uma experiência interessantíssima.", "Це був надзвичайно цікавий досвід.")] }
    ],
    examples: [
      ex("A Joana é a mais rápida da equipa.", "Жоана — найшвидша в команді.", { purpose: "production" }),
      ex("Este é o melhor resultado.", "Це найкращий результат.", { purpose: "contrast" }),
      ex("O relatório é muito detalhado.", "Звіт дуже детальний.", { purpose: "production" }),
      ex("A explicação foi claríssima.", "Пояснення було надзвичайно ясним.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вживати mais без групи й називати це автоматично «суперлативом»", "розрізняти mais + Adj у порівнянні та o mais + Adj + de у відносному суперлативі", "Важлива не сама частка mais, а структура та наявність множини порівняння."),
      mistake("*o muito alto da turma", "o mais alto da turma", "Для відносного суперлатива потрібна конструкція mais/menos, а не просто muito."),
      mistake("плутати melhor з абсолютним суперлативом", "melhor = comparativo; o melhor = relativo", "better/більший ступінь і «найкращий» належать до різних конструкцій.")
    ],
    ukrainian: "Українська має найвищий ступінь, але не має артикля як структурного маркера. Тому o mais alto треба сприймати як цілісну португальську модель, а не як буквальний еквівалент українського «найвищий».",
    regional: "Базова система суперлатива спільна для PT-BR і PT-PT. Відмінності можуть стосуватися частотності синтетичних форм, стилю та конкретних лексикалізованих форм.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Ciberdúvidas — Gramática", url: CIB }]
  }),

  page({
    id: "absolute-superlative", slug: "absolute-superlative", category: "adjectives",
    titleUk: "Абсолютний суперлатив", titlePt: "Superlativo absoluto", titleEn: "Absolute superlative",
    summary: "Як виражати дуже високий ступінь ознаки без порівняння з конкретною групою.",
    aliases: ["абсолютний суперлатив", "absolute superlative", "superlativo absoluto"],
    related: ["superlatives", "comparatives", "adjective-intensification", "adverbs-degree"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Абсолютний суперлатив відповідає ситуації, коли мовець підсилює ознаку, але не встановлює, хто або що посідає найвище місце серед групи. Португальська робить це аналітично — muito interessante, extremamente difícil — або синтетично, часто за допомогою -íssimo: interessantíssimo, dificílimo.",
    definition: "Абсолютний суперлатив виражає дуже високий ступінь ознаки без необхідності порівнювати референт із визначеною множиною інших референтів.",
    formulas: [
      { pattern: "muito + Adj", note: "Найзвичайніша аналітична модель." },
      { pattern: "extremamente + Adj", note: "Сильніший лексичний інтенсифікатор." },
      { pattern: "Adj + -íssimo", note: "Синтетична модель із морфологічними змінами основи в окремих словах." }
    ],
    uses: [
      { title: "Нейтральне підсилення", body: "muito + прикметник є природним способом виразити високу інтенсивність.", examples: [ex("É muito importante.", "Це дуже важливо.")] },
      { title: "Сильне лексичне підсилення", body: "extremamente, particularmente та інші прислівники можуть задавати силу й стиль оцінки.", examples: [ex("É extremamente difícil.", "Це надзвичайно складно.")] },
      { title: "Синтетичні форми", body: "Форми на -íssimo часто мають виразніший, книжніший, риторичніший або стилістично забарвлений ефект.", examples: [ex("uma decisão importantíssima", "надзвичайно важливе рішення"), ex("uma situação dificílima", "надзвичайно складна ситуація")] }
    ],
    examples: [
      ex("Foi muito interessante.", "Це було дуже цікаво.", { purpose: "production" }),
      ex("Foi interessantíssimo.", "Це було надзвичайно цікаво.", { purpose: "contrast" }),
      ex("A questão é dificílima.", "Питання надзвичайно складне.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("ототожнювати muito + Adj з o mais + Adj", "розрізняти абсолютний та відносний суперлатив", "muito alto означає дуже високий, а o mais alto означає найвищий у певній групі."),
      mistake("*mais interessantíssimo", "mais interessante або interessantíssimo", "Не потрібно механічно поєднувати дві різні моделі підсилення."),
      mistake("вважати -íssimo нейтральною заміною muito в кожному контексті", "обирати форму з урахуванням регістру та стилю", "Синтетичний суперлатив має власну стилістичну й лексичну поведінку.")
    ],
    ukrainian: "Українське «дуже» добре відповідає аналітичному muito, але український найвищий ступінь «най-» відповідає вже іншій, відносно-суперлативній функції. Це важливе розрізнення для перекладу.",
    regional: "Аналітична модель дуже поширена в обох основних різновидах. Синтетичні форми теж є спільним ресурсом, але їхня частотність залежить від лексеми, жанру та регістру.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Ciberdúvidas — Gramática", url: CIB }]
  }),

  page({
    id: "irregular-adjectives", slug: "irregular-adjectives", category: "adjectives",
    titleUk: "Нерегулярні прикметники та особливі ступені порівняння", titlePt: "Adjetivos irregulares", titleEn: "Irregular adjectives",
    summary: "Форми bom/melhor/ótimo, mau/pior/péssimo, grande/maior/máximo та інші лексично особливі парадигми.",
    aliases: ["нерегулярні прикметники", "irregular adjectives", "adjetivos irregulares"],
    related: ["comparatives", "superlatives", "absolute-superlative", "adjective-agreement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Деякі найчастотніші португальські прикметники не будують порівняння простим додаванням mais або -íssimo. Найважливіші ряди — bom → melhor → ótimo / o melhor, mau → pior → péssimo / o pior, grande → maior → máximo / o maior, pequeno → menor → mínimo / o menor. Їх треба розуміти як парадигми, а не як винятки, які можна пояснити одним механічним правилом.",
    definition: "Нерегулярним тут називаємо прикметник, у якого ступені порівняння або суперлатива мають спеціальні лексичні форми.",
    formulas: [
      { pattern: "bom → melhor → ótimo / o melhor", note: "Добрий → кращий → відмінний / найкращий." },
      { pattern: "mau → pior → péssimo / o pior", note: "Поганий → гірший → вкрай поганий / найгірший." },
      { pattern: "grande → maior → máximo / o maior", note: "Великий → більший → максимальний / найбільший." },
      { pattern: "pequeno → menor → mínimo / o menor", note: "Малий → менший → мінімальний / найменший." }
    ],
    uses: [
      { title: "Порівняння", body: "Спеціальна форма замінює регулярну конструкцію mais + прикметник у звичайному порівнянні.", examples: [ex("Este resultado é melhor.", "Цей результат кращий."), ex("A segunda opção é menor.", "Другий варіант менший.")] },
      { title: "Відносний суперлатив", body: "Означений артикль перед формою створює конструкцію найвищого/найнижчого ступеня в групі.", examples: [ex("É o melhor resultado.", "Це найкращий результат."), ex("É a menor sala.", "Це найменша кімната.")] },
      { title: "Абсолютний суперлатив", body: "Окремі форми на -íssimo або лексичні форми типу ótimo, péssimo можуть мати абсолютну інтерпретацію.", examples: [ex("Foi uma ótima decisão.", "Це було чудове рішення."), ex("Foi péssimo.", "Це було жахливо / дуже погано.")] }
    ],
    examples: [
      ex("Este plano é melhor.", "Цей план кращий.", { purpose: "production" }),
      ex("Este é o melhor plano.", "Це найкращий план.", { purpose: "contrast" }),
      ex("O segundo edifício é maior.", "Друга будівля більша.", { purpose: "production" }),
      ex("Tivemos uma péssima experiência.", "Ми мали жахливий досвід.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("*mais melhor", "melhor", "melhor уже кодує порівняльний ступінь."),
      mistake("*mais pior", "pior", "pior є нерегулярним comparativo mau."),
      mistake("o melhor = просто «дуже добрий»", "розрізняти melhor і o melhor", "Без артикля форма типово порівняльна; з артиклем конструкція може бути відносним суперлативом."),
      mistake("вважати ótimo тотожним o melhor", "розрізняти абсолютний і відносний суперлатив", "ótimo не вимагає заданої групи порівняння.")
    ],
    ukrainian: "Українська також має нерегулярні ступені на кшталт добрий → кращий → найкращий, тому тут є сильна аналогія. Важлива відмінність — португальський артикль у конструкції o melhor, a maior тощо.",
    regional: "Парадигми спільні для PT-BR і PT-PT. Конкретна частотність окремих синтетичних форм може залежати від стилю та лексичного значення.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Ciberdúvidas — comparativos e superlativos", url: CIB }]
  }),

  page({
    id: "adverbs-overview", slug: "adverbs-overview", category: "adverbs",
    titleUk: "Прислівники: система та функції", titlePt: "Advérbios", titleEn: "Adverbs overview",
    summary: "Що таке португальський прислівник, які компоненти він модифікує і чому позиція впливає на інтерпретацію.",
    aliases: ["прислівники", "adverbs overview", "advérbios"],
    related: ["adverb-position", "adverb-scope", "sentence-adverbs", "adverbs-degree", "adverbs-mente"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівник у португальській — не просто «слово, що відповідає на питання як?». Одні прислівники модифікують подію або дію, інші — ступінь прикметника чи іншого прислівника, ще інші коментують ціле висловлення або зв'язують його з попереднім дискурсом. Тому під час вибору й перекладу важливо визначати не лише форму, а область дії.",
    definition: "Прислівник — незмінна одиниця, яка може модифікувати предикат, прикметник, інший прислівник, ціле речення або дискурсивний зв'язок залежно від типу.",
    uses: [
      { title: "Модифікація події", body: "Прислівник може описувати спосіб, час, частотність або іншу характеристику ситуації.", examples: [ex("Ele fala claramente.", "Він говорить чітко."), ex("Cheguei cedo.", "Я прийшов рано.")] },
      { title: "Ступінь", body: "Прислівники можуть змінювати інтенсивність прикметника чи іншого прислівника.", examples: [ex("muito importante", "дуже важливий"), ex("bastante rapidamente", "досить швидко")] },
      { title: "Оцінка всього висловлення", body: "Епістемічні та модальні прислівники коментують пропозицію, а не лише дієслово.", examples: [ex("Provavelmente, ele vem amanhã.", "Ймовірно, він прийде завтра.")] },
      { title: "Дискурсивний зв'язок", body: "Деякі прислівникові одиниці організують відношення між репліками або реченнями.", examples: [ex("Além disso, precisamos de mais tempo.", "Крім того, нам потрібно більше часу.")] },
      { title: "Позиція", body: "Позиція прислівника може змінювати область дії або фокус. Тому не існує одного універсального місця «для прислівника».", examples: [ex("Ainda não chegou.", "Він ще не прийшов."), ex("Não chegou ainda.", "Він ще не прийшов.")] }
    ],
    examples: [
      ex("Ela trabalha muito.", "Вона багато працює.", { purpose: "production" }),
      ex("Ela é muito competente.", "Вона дуже компетентна.", { purpose: "contrast" }),
      ex("Provavelmente, ela chegará tarde.", "Ймовірно, вона запізниться.", { purpose: "comprehension" }),
      ex("Ainda não sei.", "Я ще не знаю.", { purpose: "production" })
    ],
    mistakes: [
      mistake("перекладати всі прислівники як один клас українських «обставин»", "визначати, що саме модифікує прислівник", "Від цього залежить синтаксична позиція та інтерпретація."),
      mistake("автоматично ставити прислівник після дієслова", "перевіряти його тип, область дії та інформаційну структуру", "Для португальської позиція багатьох прислівників є структурно чутливою."),
      mistake("плутати muito як прислівник ступеня з дуже іншою функцією в реченні", "аналізувати, чи muito модифікує дієслово, прикметник, прислівник або кількісну групу", "Одна й та сама форма має різні синтаксичні функції.")
    ],
    ukrainian: "В українській також є прислівники різних типів, тому базова категорія знайома. Відмінність полягає в тому, що португальську позицію не варто виводити лише з українського перекладу: українське «ще» може відповідати ainda, але його місце в португальському реченні залежить від структури.",
    regional: "Основна система прислівників спільна. PT-BR і PT-PT можуть відрізнятися частотністю, стилем та позиційними уподобаннями окремих одиниць; це не означає, що кожен прислівник має окреме регіональне правило.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Camões — Referencial Camões PLE", url: CAM }, { label: "Ciberdúvidas — Gramática", url: CIB }]
  })
];
