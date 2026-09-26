import { ex, mistake, page } from "../helpers";
import type { GrammarPage } from "../types";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "adverbial-locutions", slug: "adverbial-locutions", category: "adverbs",
    titleUk: "Прислівникові сполуки", titlePt: "Locuções adverbiais", titleEn: "Adverbial locutions",
    summary: "Багатослівні одиниці, які разом виконують прислівникову функцію та виражають час, місце, спосіб, причину й інші обставини.",
    aliases: ["прислівникові сполуки","adverbial locutions","locuções adverbiais"],
    related: ["adverbs-overview","adverb-position","prepositions-overview","adverb-scope"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівникова функція в португальській виражається не лише одним прислівником. Сполуки на зразок de repente, às vezes, em breve, de manhã та com certeza можуть бути багатослівними, але функціонувати в реченні як єдиний обставинний або модальний компонент. Їх треба вчити не як випадкові набори прийменника та іменника, а як усталені конструкційні моделі.",
    definition: "Прислівникова сполука — стійка або конструкційно закріплена послідовність двох чи більше слів, яка виконує прислівникову функцію. Межа між вільною прийменниковою групою та лексикалізованою locução adverbial не завжди різка.",
    formation: "Типові моделі включають прийменник + іменну групу: de manhã, à noite; прийменникові фрази: de repente, em breve; а також інші закріплені поєднання. Артикль, прийменник і форма іменника часто є частиною всієї конструкції, тому не варто перекладати її слово в слово.",
    uses: [
      { title: "Час", body: "Сполука може позначати часову точку, період або регулярність.", examples: [ex("De manhã, trabalho melhor.", "Уранці я працюю краще.", { purpose: "production" }), ex("Às vezes jantamos tarde.", "Іноді ми вечеряємо пізно.", { purpose: "production" })] },
      { title: "Спосіб або обставина", body: "Деякі сполуки описують спосіб перебігу дії.", examples: [ex("Ele respondeu de repente.", "Він раптом відповів.", { purpose: "comprehension" })] },
      { title: "Модальне ставлення", body: "Сполуки можуть коментувати достовірність або ставлення мовця.", examples: [ex("Com certeza, ela vem.", "Безперечно, вона прийде.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("De manhã, leio durante meia hora.", "Уранці я читаю протягом пів години.", { purpose: "production" }),
      ex("Às vezes, trabalhamos até tarde.", "Іноді ми працюємо допізна.", { purpose: "production" }),
      ex("Ele apareceu de repente.", "Він раптом з'явився.", { purpose: "comprehension" }),
      ex("Em breve teremos novidades.", "Незабаром у нас будуть новини.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати будь-яку прийменникову групу прислівниковою сполукою", "перевіряти її лексикалізацію та синтаксичну функцію", "Прийменникова група може бути аргументом або вільним модифікатором.", "editorial", "high"),
      mistake("довільно замінювати прийменник усередині усталеної сполуки", "запам'ятовувати конструкцію як цілісну модель", "de manhã, à noite та em breve мають власну форму.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також має прислівникові сполуки: «зранку», «час від часу», «раптом», «безперечно» та багатослівні конструкції. Тому функція зрозуміла, але португальські прийменникові моделі не завжди мають буквальний український відповідник.",
    regional: "Базові прислівникові сполуки спільні для PT-BR і PT-PT. Частотність окремих одиниць і вибір варіанта можуть залежати від регістру та регіону.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES }
    ]
  }),
  page({
    id: "manner-adverbs", slug: "manner-adverbs", category: "adverbs",
    titleUk: "Прислівники способу", titlePt: "Advérbios de modo", titleEn: "Manner adverbs",
    summary: "Як описати спосіб виконання дії та відрізнити прислівник способу від оцінки всього висловлення.",
    aliases: ["прислівники способу","manner adverbs","advérbios de modo"],
    related: ["adverbs-overview","adverb-position","adverbs-mente","sentence-adverbs"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівник способу відповідає на питання про те, як відбувається дія або в якому способі реалізується предикат. Часто такі прислівники стоять близько до дієслівної групи, але їхнє розташування залежить від довжини групи, фокусу та інших модифікаторів. Особливо важливо відрізняти спосіб дії від прислівників, які коментують істинність усього речення.",
    definition: "Прислівник способу модифікує предикат, характеризуючи спосіб, манеру або характер виконання дії чи перебігу стану.",
    formation: "До цієї групи належать прості прислівники та продуктивні форми на -mente: rapidamente, cuidadosamente, claramente. Не всі слова, що перекладаються українським прислівником, належать до одного синтаксичного класу.",
    uses: [
      { title: "Характеристика дії", body: "Прислівник уточнює манеру виконання дії.", examples: [ex("Ela falou calmamente.", "Вона спокійно говорила.", { purpose: "production" })] },
      { title: "Контраст способу", body: "Можна зіставити різні способи виконання тієї самої дії.", examples: [ex("Ele escreveu rapidamente, mas reviu o texto cuidadosamente.", "Він швидко написав, але уважно перевірив текст.", { purpose: "contrast" })] },
      { title: "Не плутати з реченнєвим коментарем", body: "Місце та сфера дії допомагають розрізнити «говорити чітко» і «очевидно, що...».", examples: [ex("Ela explicou claramente o problema.", "Вона чітко пояснила проблему.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Ela falou calmamente.", "Вона спокійно говорила.", { purpose: "production" }),
      ex("Ele respondeu rapidamente.", "Він швидко відповів.", { purpose: "production" }),
      ex("O professor explicou claramente a regra.", "Викладач чітко пояснив правило.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ставити всі прислівники способу в одну фіксовану позицію", "ураховувати дієслівну групу, фокус та інші модифікатори", "Позиція прислівника є структурно та прагматично варіативною.", "editorial", "high"),
      mistake("ототожнювати прислівник на -mente з будь-яким прислівником", "розрізняти морфологічний спосіб творення та синтаксичну функцію", "Форма на -mente часто є прислівником способу, але контекст визначає її сферу дії.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські прислівники способу функціонально дуже близькі: «спокійно», «швидко», «уважно». Найбільша різниця для навчання — продуктивність португальського -mente та порядок компонентів.",
    regional: "Базові прислівники способу стабільні в обох основних національних різновидах. Розмовна частотність і позиція можуть відрізнятися залежно від регістру.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES }
    ]
  }),
  page({
    id: "time-adverbs", slug: "time-adverbs", category: "adverbs",
    titleUk: "Часові прислівники", titlePt: "Advérbios de tempo", titleEn: "Time adverbs",
    summary: "Прислівники й конструкції, що локалізують подію в часі або характеризують її часовий зв'язок.",
    aliases: ["часові прислівники","time adverbs","advérbios de tempo"],
    related: ["adverbs-overview","adverb-position","tense-aspect","duration-adverbs"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Часові прислівники уточнюють, коли відбувається подія, чи повторюється вона, чи вже завершилася, чи очікується. Вони взаємодіють із часом і аспектом дієслова: já не просто «перекладається» як «вже», а змінює часову перспективу висловлення; ainda може позначати продовження стану або очікувану незавершеність.",
    definition: "Часовий прислівник або прислівникова одиниця локалізує подію в часі, задає часовий інтервал, послідовність або фазу відносно моменту мовлення чи іншої події.",
    formation: "До ядра належать hoje, ontem, amanhã, agora, depois, antes, já, ainda, cedo, tarde, sempre, nunca. Частина часових значень реалізується прислівниковими сполуками: de manhã, à noite, em breve.",
    uses: [
      { title: "Часова локалізація", body: "Слова hoje, ontem, amanhã та подібні прив'язують подію до календарного або дейктичного часу.", examples: [ex("Amanhã trabalho em casa.", "Завтра я працюю вдома.", { purpose: "production" })] },
      { title: "Послідовність", body: "antes і depois встановлюють порядок подій.", examples: [ex("Primeiro estudámos e depois saímos.", "Спочатку ми вчилися, а потім вийшли.", { purpose: "production" })] },
      { title: "Тривалість стану", body: "ainda та já можуть бути важливими для фазового прочитання події.", examples: [ex("Ela ainda está a trabalhar.", "Вона ще працює.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Hoje não trabalho.", "Сьогодні я не працюю.", { purpose: "production" }),
      ex("Ontem choveu muito.", "Учора багато дощило.", { purpose: "production" }),
      ex("Já terminei.", "Я вже закінчив/закінчила.", { purpose: "production" }),
      ex("Ainda estamos aqui.", "Ми ще тут.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вивчати já та ainda лише як словникові відповідники «вже» і «ще»", "аналізувати їх разом із часом, аспектом та контекстом", "Їхня інтерпретація залежить від стану або події.", "editorial", "high"),
      mistake("припускати, що часовий прислівник завжди стоїть на початку", "перевіряти нейтральну позицію та дискурсивний фокус", "Часові модифікатори можуть переміщуватися.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська має дуже близьку систему: «сьогодні», «учора», «завтра», «вже», «ще», «потім». Тому базова семантика доступна без значного переносу; складність полягає у взаємодії já/ainda з португальським аспектом і позицією.",
    regional: "Основна система спільна для PT-BR і PT-PT. Відмінності частіше стосуються перифраз, дискурсивного вживання та частотності окремих конструкцій, а не базових часових значень.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  }),
  page({
    id: "frequency-adverbs", slug: "frequency-adverbs", category: "adverbs",
    titleUk: "Прислівники частотності", titlePt: "Advérbios de frequência", titleEn: "Frequency adverbs",
    summary: "Як позначати регулярність, повторюваність і частоту подій.",
    aliases: ["прислівники частотності","frequency adverbs","advérbios de frequência"],
    related: ["adverbs-overview","adverb-position","adverb-scope","habituality"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівники частотності відповідають на питання, як регулярно відбувається подія. Вони охоплюють шкалу від sempre і frequentemente до raramente та nunca, а також частотні конструкції на зразок às vezes. Їхня позиція особливо важлива, бо вона може взаємодіяти з дієсловом, запереченням та фокусом.",
    definition: "Прислівник частотності модифікує подію щодо регулярності або повторюваності: від постійного чи типового повторення до рідкісної або нульової частоти.",
    formation: "Ядро утворюють sempre, frequentemente, normalmente, geralmente, muitas vezes, às vezes, raramente, quase nunca, nunca. Деякі одиниці є прислівниками, інші — багатослівними прислівниковими сполуками.",
    uses: [
      { title: "Висока частотність", body: "sempre, frequentemente та muitas vezes сигналізують регулярність.", examples: [ex("Ela sempre chega cedo.", "Вона завжди приходить рано.", { purpose: "production" })] },
      { title: "Низька частотність", body: "raramente та quase nunca позначають рідкісні події.", examples: [ex("Raramente saio à noite.", "Я рідко виходжу ввечері.", { purpose: "production" })] },
      { title: "Нульова частотність", body: "nunca виражає відсутність випадків і зазвичай взаємодіє із запереченням.", examples: [ex("Nunca fumo.", "Я ніколи не курю.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Eu sempre estudo de manhã.", "Я завжди вчуся вранці.", { purpose: "production" }),
      ex("Às vezes trabalhamos ao sábado.", "Іноді ми працюємо в суботу.", { purpose: "production" }),
      ex("Ela raramente vê televisão.", "Вона рідко дивиться телевізор.", { purpose: "production" }),
      ex("Nunca faço isso.", "Я ніколи цього не роблю.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати всі прислівники частотності взаємозамінними", "враховувати шкалу частотності та прагматичний ефект", "sempre, geralmente, às vezes і raramente виражають різні ступені регулярності.", "editorial", "high"),
      mistake("застосовувати український порядок слів механічно", "перевіряти позицію прислівника щодо дієслова, заперечення та фокусу", "Португальська допускає кілька позицій із різними інформаційними ефектами.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «завжди», «часто», «іноді», «рідко», «ніколи» майже прямо відповідають португальським одиницям. Основна навчальна робота — порядок слів і взаємодія nunca з негацією.",
    regional: "Базові прислівники частотності спільні для PT-BR і PT-PT. Позиційні переваги можуть залежати від стилю та конкретної конструкції.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES }
    ]
  }),
  page({
    id: "attributive-adjectives", slug: "attributive-adjectives", category: "adjectives",
    titleUk: "Атрибутивні прикметники", titlePt: "Adjetivos atributivos", titleEn: "Attributive adjectives",
    summary: "Як прикметник характеризує іменник усередині іменної групи та як позиція впливає на інтерпретацію.",
    aliases: ["атрибутивні прикметники","attributive adjectives","adjetivos atributivos"],
    related: ["adjective-agreement","adjective-position","adjective-meaning","noun-gender"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Атрибутивний прикметник безпосередньо модифікує іменник у складі іменної групи: uma casa grande, um problema difícil. У португальській позиція прикметника — перед або після іменника — часто має значення не лише стилістичне. Для частини прикметників постпозиція є нейтральною, тоді як препозиція може додавати оцінний, класифікаційний або інший відтінок.",
    definition: "Атрибутивний прикметник є компонентом іменної групи та узгоджується з іменником у роді й числі, коли це передбачено його морфологією.",
    formation: "Найтиповіша модель — іменник + прикметник: uma casa grande. Частина прикметників регулярно стоїть перед іменником: um bom livro. Для інших можливі обидві позиції з різними інтерпретаціями.",
    uses: [
      { title: "Нейтральна характеристика", body: "Постпозиція часто є базовою для якісного прикметника.", examples: [ex("Comprei um carro novo.", "Я купив/купила нову машину.", { purpose: "production" })] },
      { title: "Класифікаційна або оцінна препозиція", body: "Передіменникова позиція може створювати особливий тип характеристики.", examples: [ex("Foi uma grande surpresa.", "Це було велике потрясіння.", { purpose: "contrast" })] },
      { title: "Узгодження", body: "Прикметник узгоджується з означуваним іменником.", examples: [ex("As casas antigas foram vendidas.", "Старі будинки були продані.", { purpose: "production" })] }
    ],
    examples: [
      ex("uma casa grande", "великий будинок", { purpose: "production" }),
      ex("um problema difícil", "складна проблема", { purpose: "production" }),
      ex("uma grande surpresa", "велике потрясіння", { purpose: "contrast" }),
      ex("as casas antigas", "старі будинки", { purpose: "production" })
    ],
    mistakes: [
      mistake("ставити прикметник перед іменником за українською звичкою", "спочатку перевіряти тип прикметника та нейтральну португальську позицію", "Українська переважно використовує препозицію, а португальська часто — постпозицію.", "predicted-l1-transfer", "high"),
      mistake("вважати зміну позиції суто стилістичною", "перевіряти, чи не змінюється значення або референція", "Деякі прикметники змінюють інтерпретацію залежно від позиції.", "editorial", "high")
    ],
    ukrainian: "Для українськомовного студента це одна з важливих зон переносу: українське «великий будинок» природно ставить прикметник перед іменником, тоді як португальське нейтральне «uma casa grande» часто має постпозицію.",
    regional: "Позиційні моделі в PT-BR і PT-PT мають спільну граматичну основу. Різниця частотності окремих препозитивних моделей не повинна перетворюватися на правило про «бразильський» чи «європейський» порядок.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES }
    ]
  }),
  page({
    id: "predicative-adjectives", slug: "predicative-adjectives", category: "adjectives",
    titleUk: "Предикативні прикметники", titlePt: "Adjetivos predicativos", titleEn: "Predicative adjectives",
    summary: "Як прикметник стає частиною присудка та узгоджується з суб'єктом або іншим носієм ознаки.",
    aliases: ["предикативні прикметники","predicative adjectives","adjetivos predicativos"],
    related: ["adjective-agreement","ser-estar","adjective-position","complex-predicates"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Предикативний прикметник не просто стоїть при іменнику, а входить до предиката й приписує ознаку суб'єкту або іншому аргументу: A casa é grande; O João está cansado. Найчастіше він з'являється після copular verbs, але його інтерпретація залежить від вибору зв'язки та структури речення.",
    definition: "Предикативний прикметник — прикметниковий компонент предиката, який характеризує суб'єкт або інший предикативний аргумент і зазвичай узгоджується з ним.",
    formation: "Типова модель: sujeito + ser/estar/ficar + adjetivo. Узгодження видно в gênero та número: O aluno está cansado; As alunas estão cansadas.",
    uses: [
      { title: "Постійна або класифікаційна характеристика", body: "ser може вводити властивість, ідентифікацію або класифікаційну характеристику.", examples: [ex("A cidade é grande.", "Місто велике.", { purpose: "production" })] },
      { title: "Стан", body: "estar часто подає тимчасовий або ситуативний стан.", examples: [ex("A cidade está tranquila hoje.", "Сьогодні місто спокійне.", { purpose: "contrast" })] },
      { title: "Зміна стану", body: "ficar може позначати перехід до стану.", examples: [ex("Ele ficou cansado.", "Він утомився / став утомленим.", { purpose: "production" })] }
    ],
    examples: [
      ex("A casa é grande.", "Будинок великий.", { purpose: "production" }),
      ex("As portas estão abertas.", "Двері відчинені.", { purpose: "production" }),
      ex("Ele ficou cansado.", "Він утомився.", { purpose: "production" })
    ],
    mistakes: [
      mistake("аналізувати предикативний прикметник як звичайне означення", "визначати, чи він входить до присудка", "У «A casa é grande» grande не є атрибутом усередині NP.", "editorial", "high"),
      mistake("вважати ser і estar механічними відповідниками «бути»", "аналізувати тип предиката та часово-ситуативну інтерпретацію", "Вибір зв'язки впливає на значення.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також має іменний складений присудок: «Будинок великий», «Вона втомлена». Тому синтаксична функція знайома; складнішим є португальське розмежування ser, estar і ficar.",
    regional: "Предикативні прикметники є спільною системою PT-BR і PT-PT. Відмінності стосуються насамперед деяких copular/periphrastic patterns та частотності, а не базового принципу.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKINKAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  }),
  page({
    id: "adjective-coordination", slug: "adjective-coordination", category: "adjectives",
    titleUk: "Однорідні прикметники", titlePt: "Coordenação de adjetivos", titleEn: "Adjective coordination",
    summary: "Як поєднувати кілька прикметників у межах однієї іменної групи та визначати узгодження.",
    aliases: ["однорідні прикметники","adjective coordination","coordenação de adjetivos"],
    related: ["adjective-agreement","adjective-position","coordinating","adjective-meaning"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Кілька прикметників можуть одночасно характеризувати один іменник: uma decisão difícil e importante. Вони можуть бути координованими, тобто перебувати на одному синтаксичному рівні, або утворювати різні шари модифікації. Кома, сполучник і порядок прикметників допомагають читачеві визначити структуру.",
    definition: "Координація прикметників — поєднання двох або більше прикметникових компонентів як рівноправних характеристик того самого означуваного.",
    formation: "Найтиповіші моделі: A e B; A, B e C. Узгодження кожного прикметника відбувається з іменником: uma casa grande e confortável; casas grandes e confortáveis.",
    uses: [
      { title: "Дві рівноправні ознаки", body: "Сполучник e поєднує характеристики.", examples: [ex("É uma solução simples e eficaz.", "Це просте й ефективне рішення.", { purpose: "production" })] },
      { title: "Перелік", body: "Кілька прикметників можуть утворювати перелік із комами.", examples: [ex("Era um lugar pequeno, tranquilo e agradável.", "Це було маленьке, спокійне й приємне місце.", { purpose: "production" })] },
      { title: "Не плутати координацію з вкладеною модифікацією", body: "Порядок може створювати різні структурні читання.", examples: [ex("uma antiga casa portuguesa", "старий португальський будинок", { purpose: "contrast" })] }
    ],
    examples: [
      ex("uma solução simples e eficaz", "просте й ефективне рішення", { purpose: "production" }),
      ex("casas grandes e confortáveis", "великі й зручні будинки", { purpose: "production" }),
      ex("um lugar pequeno, tranquilo e agradável", "маленьке, спокійне й приємне місце", { purpose: "production" })
    ],
    mistakes: [
      mistake("погоджувати прикметники лише з найближчим словом", "визначати спільний означуваний іменник", "Узгодження стосується відповідного іменника, а не просто сусіднього прикметника.", "predicted-l1-transfer", "high"),
      mistake("ставити кому перед кожним e", "розрізняти кому в переліку та просту координацію через e", "Пунктуація залежить від структури переліку.", "editorial", "medium")
    ],
    ukrainian: "Українська має майже ідентичну координацію прикметників: «просте й ефективне рішення». Головна відмінність — португальська позиція прикметника та узгодження в роді/числі.",
    regional: "Базова координація однакова в PT-BR і PT-PT. Розбіжності можуть виникати в пунктуаційних і стилістичних уподобаннях.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES }
    ]
  }),
  page({
    id: "adjective-intensification", slug: "adjective-intensification", category: "adjectives",
    titleUk: "Підсилення прикметників", titlePt: "Intensificação dos adjetivos", titleEn: "Adjective intensification",
    summary: "Як виражати високий або низький ступінь ознаки за допомогою прислівників, морфології та конструкцій.",
    aliases: ["підсилення прикметників","adjective intensification","intensificação dos adjetivos"],
    related: ["adverbs-degree","absolute-superlative","comparatives","superlatives"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Інтенсивність прикметника можна виражати не лише синтетичним суперлативом. Дуже широкий набір конструкцій дозволяє сказати muito interessante, extremamente importante, bastante difícil, tão grande або абсолютно унікальний у відповідному контексті. Вибір засобу залежить від ступеня, стилю та семантики прикметника.",
    definition: "Інтенсифікація — зміна або уточнення ступеня прояву ознаки без обов'язкового переходу до порівняння двох конкретних об'єктів.",
    formation: "Основні засоби: прислівники ступеня (muito, bastante, extremamente, tão), морфологічні суперлативні форми та лексичні конструкції. Потрібно розрізняти абсолютну інтенсивність і відносне порівняння.",
    uses: [
      { title: "Нейтральне підсилення", body: "muito є базовим способом підсилення багатьох прикметників.", examples: [ex("É muito importante.", "Це дуже важливо.", { purpose: "production" })] },
      { title: "Сильне стилістичне підсилення", body: "extremamente та подібні засоби підвищують інтенсивність і часто звучать формальніше.", examples: [ex("A situação é extremamente difícil.", "Ситуація надзвичайно складна.", { purpose: "production" })] },
      { title: "Ступінь у конструкції tão...que", body: "tão може встановлювати інтенсивність із наслідком.", examples: [ex("Estava tão cansado que adormeci.", "Я був такий утомлений, що заснув.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("um problema muito difícil", "дуже складна проблема", { purpose: "production" }),
      ex("uma questão extremamente importante", "надзвичайно важливе питання", { purpose: "production" }),
      ex("Ela estava tão cansada que dormiu cedo.", "Вона була така втомлена, що рано заснула.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ототожнювати інтенсифікацію із суперлативом", "відрізняти шкалу ознаки від порівняння та найвищого ступеня", "muito і extremamente не означають автоматично «най-».", "editorial", "high"),
      mistake("вважати всі підсилювачі стилістично нейтральними", "ураховувати регістр і семантичну сумісність", "Деякі форми мають сильніший формальний або експресивний ефект.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «дуже», «надзвичайно», «настільки... що» мають близькі функції, тому базова логіка легко переноситься. Важливо не плутати «дуже» з найвищим ступенем «най-».",
    regional: "Основні засоби інтенсифікації спільні. Частотність окремих підсилювачів залежить від регістру, жанру та національного різновиду.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES }
    ]
  }),
  page({
    id: "compound-adjectives", slug: "compound-adjectives", category: "adjectives",
    titleUk: "Складні прикметники", titlePt: "Adjetivos compostos", titleEn: "Compound adjectives",
    summary: "Як кілька основ утворюють прикметникову одиницю та як визначати її морфологічну й орфографічну структуру.",
    aliases: ["складні прикметники","compound adjectives","adjetivos compostos"],
    related: ["word-formation-affixes","adjective-agreement","hyphenation","adjective-substantivisation"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "medium",
    intro: "Складний прикметник утворюється з кількох лексичних основ або компонентів, які разом функціонують як одна прикметникова одиниця. Для португальської важливо розрізняти справжнє словотвірне складення, вільну словосполуку та термінологічне поєднання. Орфографічний запис не завжди дозволяє безпосередньо визначити синтаксичну структуру.",
    definition: "Складний прикметник — прикметникова одиниця, внутрішня структура якої містить більше однієї основи або лексичного компонента й функціонує як цілісний номінативний елемент.",
    formation: "Складення може поєднувати іменникові, прикметникові або інші основи. У частині випадків компоненти пишуться разом, в інших — через дефіс або окремо залежно від конкретної нормативної моделі. Тому написання треба перевіряти за словником та чинними орфографічними правилами.",
    uses: [
      { title: "Термінологічні назви", body: "Складні прикметники часто закріплюються в термінології.", examples: [ex("um acordo político-económico", "політико-економічна угода", { purpose: "production" })] },
      { title: "Координовані компоненти", body: "Два компоненти можуть спільно описувати один іменник.", examples: [ex("uma análise histórico-cultural", "історико-культурний аналіз", { purpose: "production" })] },
      { title: "Орфографічна обережність", body: "Не можна виводити написання лише з українського відповідника.", examples: [ex("uma relação luso-brasileira", "португальсько-бразильські відносини", { purpose: "contrast" })] }
    ],
    examples: [
      ex("um acordo político-económico", "політико-економічна угода", { purpose: "production" }),
      ex("uma análise histórico-cultural", "історико-культурний аналіз", { purpose: "production" }),
      ex("uma relação luso-brasileira", "португальсько-бразильські відносини", { purpose: "production" })
    ],
    mistakes: [
      mistake("додавати дефіс за аналогією з українською", "перевіряти конкретну португальську орфографічну модель", "Дефіс не є універсальним маркером складного прикметника.", "predicted-l1-transfer", "high"),
      mistake("вважати будь-які два прикметники одним складним словом", "розрізняти складення та синтаксичну координацію", "uma casa grande e antiga містить два окремі прикметники.", "editorial", "high")
    ],
    ukrainian: "Українська також активно творить складні прикметники, тому поняття знайоме. Але правила дефісного написання й словотвірні моделі не збігаються автоматично.",
    regional: "Частина складних прикметників може мати орфографічні та лексичні варіанти в різних нормативних джерелах. У довіднику пріоритет має конкретна нормативна форма, а не механічна аналогія.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES }
    ]
  }),
  page({
    id: "adjective-substantivisation", slug: "adjective-substantivisation", category: "adjectives",
    titleUk: "Субстантивація прикметників", titlePt: "Substantivação dos adjetivos", titleEn: "Adjective substantivisation",
    summary: "Як прикметник уживається без явно вираженого іменника та набуває іменного референта з контексту.",
    aliases: ["субстантивація прикметників","adjective substantivisation","substantivação"],
    related: ["adjective-agreement","articles-definite","nominalization","ellipsis"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальський прикметник може вживатися субстантивовано, коли іменник опускається, але прикметник разом із детермінативом або контекстом ідентифікує відповідну групу чи об'єкт: os jovens, os mais velhos, uma pequena. Тут важливо відрізнити справжню лексикалізацію від контекстуального еліпсису іменника.",
    definition: "Субстантивація прикметника — уживання прикметникової форми в іменній функції, часто з детермінативом, коли означуваний іменник не виражений поверхнево.",
    formation: "Найтиповіша модель: artigo + adjetivo, особливо os/as + прикметник, що позначає людей або групу: os jovens, as responsáveis. Форма прикметника зберігає морфологічне узгодження, хоча іменник не вимовляється.",
    uses: [
      { title: "Група людей", body: "Прикметник може позначати клас людей із певною властивістю.", examples: [ex("Os jovens usam muito esta plataforma.", "Молоді люди часто користуються цією платформою.", { purpose: "production" })] },
      { title: "Еліптично відновлюваний іменник", body: "Контекст може дозволяти зрозуміти конкретний опущений іменник.", examples: [ex("Prefiro a pequena.", "Я віддаю перевагу маленькій [речі/машині тощо].", { purpose: "comprehension" })] },
      { title: "Суперлативна форма", body: "Прикметник із найвищим ступенем може виконувати іменну функцію.", examples: [ex("Ele escolheu a mais barata.", "Він вибрав найдешевшу [річ].", { purpose: "production" })] }
    ],
    examples: [
      ex("Os jovens chegaram cedo.", "Молоді люди прийшли рано.", { purpose: "production" }),
      ex("A mais interessante é esta.", "Найцікавіша — ось ця.", { purpose: "production" }),
      ex("Prefiro a pequena.", "Я віддаю перевагу маленькій [речі].", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати будь-який прикметник без іменника повністю субстантивованим", "визначати, чи маємо лексикалізовану групу або контекстуальний еліпсис", "Не кожен пропущений іменник створює нову лексему.", "editorial", "high"),
      mistake("забувати про детермінатив", "перевіряти роль артикля, вказівного чи іншого визначника", "Детермінатив часто робить іменну інтерпретацію прозорою.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська теж має субстантивовані прикметники: «молоді», «старші», «найдешевша». Отже, принцип знайомий. Важливо перенести не форму артикля, а ідею переходу прикметникової характеристики в іменну референцію.",
    regional: "Субстантивація є спільною для PT-BR і PT-PT. Конкретні моделі позначення груп людей, ступенів і еліптичних іменних груп залежать від контексту.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  })
];
