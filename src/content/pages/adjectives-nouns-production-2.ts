import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "adjective-position",
    slug: "adjective-position",
    category: "adjectives",
    titleUk: "Позиція прикметника: перед чи після іменника",
    titlePt: "Posição do adjetivo",
    titleEn: "Adjective position",
    summary: "Коли прикметник стоїть перед іменником, коли після нього та чому це не зводиться до одного жорсткого правила.",
    aliases: ["позиція прикметника", "adjective position", "antes", "depois", "anteposição", "posposição"],
    related: ["adjective-meaning", "adjective-agreement", "attributive-adjectives", "word-order"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Для українськомовного студента найпростіша модель португальської — прикметник після іменника: um livro interessante, uma casa grande. Це справді дуже важливий базовий шаблон, але португальська допускає і значну кількість конструкцій із прикметником перед іменником. Позиція залежить від типу прикметника, його значення, ступеня закріпленості словосполучення, інформаційного фокусу та стилю. Тому правило «прикметник завжди після іменника» так само неточне, як і протилежне «прикметник можна вільно ставити де завгодно».",
    definition: "Позиція прикметника — синтаксичний вибір між anteposição (adjetivo + nome) та posposição (nome + adjetivo). Цей вибір може бути нейтральним, стилістично маркованим або пов'язаним зі зміною інтерпретації.",
    formation: "Базова нейтральна модель для багатьох кваліфікативних прикметників — nome + adjetivo: uma casa grande, um problema difícil. Anteposição з'являється, зокрема, у частині оцінних і суб'єктивних характеристик, у стійких словосполученнях та з деякими прикметниками, для яких позиція є частиною їхньої лексико-семантичної поведінки.",
    uses: [
      { title: "Нейтральна постпозиція", body: "Коли прикметник просто класифікує або описує властивість іменника, постпозиція часто є найприроднішою.", examples: [ex("Comprei um carro novo.", "Я купив/купила нову машину.", { purpose: "production" }), ex("É uma decisão importante.", "Це важливе рішення.", { purpose: "production" })] },
      { title: "Антепозиція з оцінним відтінком", body: "Перед іменником прикметник може отримувати більш суб'єктивне, оцінне або стилістично виділене читання.", examples: [ex("Foi uma grande oportunidade.", "Це була чудова / велика можливість.", { purpose: "comprehension" })] },
      { title: "Класифікаційні прикметники", body: "Реляційні та технічні прикметники зазвичай стоять після іменника: їхня функція ближча до класифікації, ніж до суб'єктивної оцінки.", examples: [ex("água mineral", "мінеральна вода", { purpose: "production" })] },
      { title: "Закріплені сполуки", body: "Деякі словосполучення мають усталену позицію, яку краще засвоювати як готову модель.", examples: [ex("boa noite", "добрий вечір / добраніч", { purpose: "production" }), ex("próxima semana", "наступного тижня", { purpose: "comprehension" })] },
      { title: "Позиція як частина стилю", body: "В окремих контекстах антепозиція може підсилювати прикметник або надавати висловленню формальнішого, літературнішого чи експресивнішого звучання.", examples: [ex("a triste notícia", "сумна новина", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Comprei um livro interessante.", "Я купив/купила цікаву книжку.", { purpose: "production" }),
      ex("Foi uma grande oportunidade.", "Це була чудова / велика можливість.", { purpose: "contrast" }),
      ex("Ele apresentou uma solução simples.", "Він запропонував просте рішення.", { purpose: "production" }),
      ex("Ela teve uma excelente ideia.", "Вона мала чудову ідею.", { purpose: "comprehension" }),
      ex("Precisamos de uma solução técnica.", "Нам потрібне технічне рішення.", { purpose: "production" }),
      ex("Na próxima semana viajamos.", "Наступного тижня ми подорожуємо.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати, що кожен прикметник має одну фіксовану позицію", "визначати тип прикметника, значення та конкретну конструкцію", "У португальській частина прикметників допускає обидві позиції з різною або близькою інтерпретацією.", "predicted-l1-transfer", "high"),
      mistake("перекладати український порядок слів буквально", "спочатку будувати португальську іменну групу, потім перевіряти позицію прикметника", "Українська допускає значно вільніший порядок означень у багатьох стилях.", "predicted-l1-transfer", "high"),
      mistake("робити висновок про значення лише з позиції", "перевіряти лексичний клас і контекст", "Позиція може впливати на значення, але не кожна зміна позиції автоматично створює нове значення.", "documented", "high")
    ],
    ukrainian: "Українська також дозволяє різні позиції означень, але португальські моделі не слід відтворювати через українську інтуїцію. Для навчання корисно спершу засвоїти нейтральний шаблон nome + adjetivo, а потім додавати типові випадки anteposição.",
    regional: "Базовий розподіл позицій спільний для PT-BR і PT-PT. В окремих усталених виразах, формальних моделях та частотності варіантів можливі регіональні відмінності; їх не варто перетворювати на універсальне правило.",
    sources: [
      { label: "Ciberdúvidas — Colocação do adjectivo (antes ou depois do substantivo)", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/colocacao-do-adjectivo-antes-ou-depois-do-substantivo/26245" },
      { label: "Ciberdúvidas — A ordem dos adjetivos em português", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-ordem-dos-adjetivos-em-portugues/35785" },
      { label: "Ciberdúvidas — A colocação do adjetivo em «na próxima semana»", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-colocacao-do-adjetivo-em-na-proxima-semana/38144" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "adjective-meaning",
    slug: "adjective-meaning",
    category: "adjectives",
    titleUk: "Зміна значення від позиції прикметника",
    titlePt: "Sentido e posição do adjetivo",
    titleEn: "Meaning and adjective position",
    summary: "Як anteposição та posposição можуть змінювати об'єктивне, оцінне або лексикалізоване значення прикметника.",
    aliases: ["значення прикметника", "adjective meaning", "grande homem", "homem grande", "pobre", "certo", "próprio"],
    related: ["adjective-position", "attributive-adjectives", "adjective-intensification"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Позиція прикметника в португальській іноді впливає не тільки на стиль, а й на те, що саме стверджує мовець. Найвідоміші приклади — grande homem та homem grande, pobre mulher та mulher pobre, novo livro та livro novo. Важливо, однак, не перетворювати це на механічну формулу «перед іменником = переносне значення, після = буквальне». Реальна інтерпретація залежить від конкретного прикметника, іменника, контексту та того, чи утворилася вже лексикалізована сполука.",
    definition: "Семантичний ефект позиції прикметника — зміна або уточнення інтерпретації прикметника залежно від його розташування відносно іменника. Ефект може бути мінімальним, стилістичним або лексично значущим.",
    uses: [
      { title: "grande homem / homem grande", body: "Перед іменником grande може характеризувати людину оцінно або метафорично; після іменника grande може описувати фізичний розмір.", examples: [ex("Ele é um grande homem.", "Він видатна / чудова людина.", { purpose: "contrast" }), ex("Ele é um homem grande.", "Він великий / високий чоловік.", { purpose: "contrast" })] },
      { title: "pobre mulher / mulher pobre", body: "Anteposição може створювати оцінне або емоційне читання, тоді як postposição часто дає буквальнішу характеристику.", examples: [ex("A pobre mulher estava cansada.", "Бідна жінка була втомлена.", { purpose: "comprehension" }), ex("A mulher pobre precisava de ajuda.", "Бідна жінка / жінка без грошей потребувала допомоги.", { purpose: "contrast" })] },
      { title: "novo livro / livro novo", body: "novo перед іменником часто описує новизну як характеристику об'єкта в дискурсі; після іменника може підкреслювати, що предмет фізично новий або щойно придбаний, залежно від контексту.", examples: [ex("Ele escreveu um novo livro.", "Він написав нову книжку / ще одну нову книжку.", { purpose: "contrast" }), ex("Comprei um livro novo.", "Я купив/купила нову книжку.", { purpose: "contrast" })] },
      { title: "Не всі прикметники поводяться однаково", body: "Для багатьох прикметників зміна позиції лише змінює фокус або стиль; для інших вона створює чіткіший семантичний контраст.", examples: [ex("uma excelente oportunidade", "чудова можливість", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Ele é um grande homem.", "Він видатна / чудова людина.", { purpose: "contrast" }),
      ex("Ele é um homem grande.", "Він великий / високий чоловік.", { purpose: "contrast" }),
      ex("Foi uma pobre desculpa.", "Це було жалюгідне / слабке виправдання.", { purpose: "comprehension" }),
      ex("A mulher pobre recebeu ajuda.", "Бідна жінка отримала допомогу.", { purpose: "production" }),
      ex("Ela comprou um novo computador.", "Вона купила новий комп'ютер.", { purpose: "production" }),
      ex("Ela comprou um computador novo.", "Вона купила новий комп'ютер.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати кожну anteposição переносною", "визначати значення конкретної лексеми в контексті", "Позиція є лише одним із чинників інтерпретації.", "predicted-l1-transfer", "high"),
      mistake("перекладати grande лише як «великий» незалежно від позиції", "перевіряти, чи йдеться про розмір, оцінку або ступінь", "grande має широку семантичну поведінку і може бути частиною оцінної характеристики.", "predicted-l1-transfer", "high"),
      mistake("вважати novo перед іменником і novo після іменника повністю взаємозамінними", "читати всю іменну групу разом із контекстом", "Позиція може змінювати інформаційний фокус та інтерпретацію.", "documented", "medium")
    ],
    ukrainian: "В українській прикметникова позиція теж може мати стилістичний ефект, але learner не повинен переносити українські асоціації на португальські слова. Найкраща стратегія — вчити контраст як частину конкретної лексеми: grande homem ≠ homem grande.",
    regional: "Семантичні контрасти позиції є спільною рисою португальської. Частотність конкретних конструкцій та стилістичні переваги можуть змінюватися між PT-BR і PT-PT, але це не скасовує базового контрасту.",
    sources: [
      { label: "Ciberdúvidas — O significado do adjectivo novo", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/o-significado-do-adjectivo-novo/29691" },
      { label: "Ciberdúvidas — A anteposição e a posposição do adjectivo grande", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-anteposicao-e-a-posposicao-do-adjectivo-grande/16114" },
      { label: "Ciberdúvidas — Colocação do adjectivo (antes ou depois do substantivo)", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/colocacao-do-adjectivo-antes-ou-depois-do-substantivo/26245" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "adverbs-degree",
    slug: "adverbs-degree",
    category: "adverbs",
    titleUk: "Прислівники ступеня та кількості: muito, pouco, bastante, demais, tão, tanto",
    titlePt: "Advérbios de grau e quantidade",
    titleEn: "Degree and quantity adverbs",
    summary: "Як виражати інтенсивність, ступінь і кількість та як не плутати advérbio з quantificador.",
    aliases: ["прислівники ступеня", "degree adverbs", "muito", "pouco", "bastante", "demais", "tão", "tanto"],
    related: ["adverbs-overview", "adverb-scope", "comparatives", "superlatives", "quantifiers-overview"],
    status: "draft",
    origin: "handwritten",
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Слова muito, pouco, bastante, demais, tão і tanto часто вивчають як простий список перекладів: «дуже», «мало», «досить», «занадто», «так», «стільки». Такий список швидко ламається, бо одна й та сама форма може належати до різних класів і мати різну область дії. Muito, наприклад, є quantificador, коли поєднується з іменником, і advérbio, коли модифікує дієслово, прикметник або інший прислівник. Для production потрібно бачити не лише переклад, а й те, який компонент модифікується.",
    definition: "Прислівник ступеня/кількості — незмінний модифікатор, який виражає міру, інтенсивність або кількісну характеристику іншого компонента чи ситуації. Деякі близькі форми також функціонують як детермінативи або займенники.",
    formation: "Найтиповіша модель: advérbio de grau + adjetivo/advérbio, наприклад muito grande, bastante rápido, tão cedo. З дієсловом такі елементи можуть модифікувати саму кількість або інтенсивність дії: trabalhar muito. З іменником потрібна інша категорія: muitos livros, pouca água.",
    uses: [
      { title: "muito + прикметник", body: "muito підсилює ступінь ознаки і не узгоджується з прикметником.", examples: [ex("A casa é muito grande.", "Будинок дуже великий.", { purpose: "production" })] },
      { title: "muito + дієслово", body: "muito може позначати значну кількість або інтенсивність виконання дії.", examples: [ex("Trabalho muito.", "Я багато працюю.", { purpose: "production" })] },
      { title: "muito/muitos перед іменником", body: "Перед іменником форма є quantificador і узгоджується за родом і числом: muito trabalho, muita água, muitos livros, muitas pessoas.", examples: [ex("Tenho muitos livros.", "У мене багато книжок.", { purpose: "production" })] },
      { title: "tão / tanto", body: "tão типово модифікує прикметник або прислівник, тоді як tanto пов'язаний із кількістю та може виступати біля дієслова або іменника.", examples: [ex("Ela é tão rápida!", "Вона така швидка!", { purpose: "production" }), ex("Ele trabalha tanto!", "Він так багато працює!", { purpose: "contrast" })] },
      { title: "demais і bastante", body: "demais часто виражає надмірність, а bastante може означати достатній або значний ступінь; точне читання залежить від контексту.", examples: [ex("Está quente demais.", "Занадто спекотно.", { purpose: "production" }), ex("É bastante difícil.", "Це досить / доволі складно.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Ela é muito inteligente.", "Вона дуже розумна.", { purpose: "production" }),
      ex("Eles trabalham muito.", "Вони багато працюють.", { purpose: "production" }),
      ex("Tenho muitas perguntas.", "У мене багато запитань.", { purpose: "contrast" }),
      ex("O exercício é bastante difícil.", "Вправа досить складна.", { purpose: "production" }),
      ex("Está quente demais.", "Занадто спекотно.", { purpose: "production" }),
      ex("Ele chegou tão cedo!", "Він прийшов так рано!", { purpose: "comprehension" }),
      ex("Ela estudou tanto que passou.", "Вона так багато вчилася, що склала іспит.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вживати muito перед іменником без узгодження", "розрізняти muito advérbio та muito/muita/muitos/muitas quantificador", "Порівняйте muito grande і muitos livros.", "predicted-l1-transfer", "high"),
      mistake("перекладати tão і tanto однаково в усіх контекстах", "дивитися, що саме модифікується", "Розподіл форм пов'язаний із категорією та структурою групи.", "predicted-l1-transfer", "high"),
      mistake("вважати demais простим синонімом muito", "перевіряти значення надмірності та позицію", "demais часто сигналізує перевищення міри.", "editorial", "high")
    ],
    ukrainian: "Українське «дуже» охоплює лише частину функцій muito. «Багато» може відповідати muito з дієсловом, але перед іменником португальська потребує узгоджуваного quantificador: muitas pessoas. Тому переклад треба використовувати після синтаксичного аналізу, а не замість нього.",
    regional: "Система ступеня спільна для PT-BR і PT-PT. Частотність окремих слів, інтонаційні відтінки та розмовні альтернативи можуть відрізнятися, але розрізнення advérbio/quantificador є базовим.",
    sources: [
      { label: "Ciberdúvidas — Muito: quantificador e advérbio", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/muito-quantificador-e-adverbio/33978" },
      { label: "Ciberdúvidas — Advérbio muito", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/adverbio-muito/17796" },
      { label: "Ciberdúvidas — «É de mais» vs. «É demais»", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/e-de-mais-vs-e-demais/38955" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "noun-number",
    slug: "noun-number",
    category: "nouns",
    titleUk: "Число іменників: однина, множина та нераховані іменники",
    titlePt: "Número dos nomes",
    titleEn: "Noun number",
    summary: "Як португальська утворює множину та чому злічуваність і значення можуть впливати на вживання числа.",
    aliases: ["число іменників", "noun number", "singular", "plural", "plural formation"],
    related: ["plural-formation", "irregular-plurals", "noun-gender", "articles-definite"],
    status: "draft",
    origin: "handwritten",
    depth: "short",
    ukrainianContrast: "high",
    intro: "Категорія числа в португальській на поверхні здається простою: singular протиставляється plural, а найпоширеніша модель множини додає -s. На практиці форма множини залежить від закінчення слова, наголосу, типу запозичення та лексичної історії. Окремо треба відрізняти граматичне число від злічуваності: іменник може бути граматично одниною, але позначати речовину або абстрактне поняття, яке не рахується без додаткового лічильного виразу.",
    definition: "Число — граматична категорія, що протиставляє singular і plural та бере участь у concordância з детермінативами, прикметниками й іншими залежними компонентами.",
    formation: "Базова модель: livro → livros, casa → casas. Для слів на голосний найчастіше додається -s; для багатьох слів на приголосний, -r, -z, -m та інших закінчень діють окремі морфологічні моделі. Нерегулярні та складні множини треба вчити разом із лексемою, а не виводити лише з українського відповідника.",
    uses: [
      { title: "Злічувані іменники", body: "Злічувані іменники легко утворюють множину для позначення кількох окремих об'єктів.", examples: [ex("um livro → dois livros", "одна книжка → дві книжки", { purpose: "production" })] },
      { title: "Множина після приголосних", body: "Форма множини може вимагати зміни закінчення, наприклад papel → papéis, país → países.", examples: [ex("dois países", "дві країни", { purpose: "production" })] },
      { title: "Нераховані іменники", body: "Іменники на позначення речовин або абстракцій можуть мати обмежене вживання множини або змінювати значення в plural.", examples: [ex("Bebi água.", "Я випив/випила воду.", { purpose: "production" }), ex("Existem várias águas minerais.", "Є різні мінеральні води.", { purpose: "contrast" })] },
      { title: "Множина власних назв", body: "Власні назви також можуть переходити в plural, коли позначають кілька людей з однаковим іменем або групу, що поділяє назву.", examples: [ex("Há três Marias na sala.", "У кімнаті є три Марії.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Tenho dois livros.", "У мене дві книжки.", { purpose: "production" }),
      ex("As casas são antigas.", "Будинки старі.", { purpose: "production" }),
      ex("Comprei três cafés.", "Я замовив/замовила три кави.", { purpose: "comprehension" }),
      ex("Bebi dois sumos.", "Я випив/випила два соки.", { purpose: "contrast" }),
      ex("Vendem várias farinhas.", "Вони продають різні види/сорти борошна.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("додавати -s до будь-якого іменника", "вивчати модель множини за закінченням і конкретною лексемою", "Множина португальських іменників має кілька продуктивних моделей.", "predicted-l1-transfer", "high"),
      mistake("вважати, що plural завжди означає просто «більше одного» без зміни значення", "перевіряти злічуваність і контекст", "Для нерахованих іменників plural може означати види, порції або окремі прояви.", "documented", "high"),
      mistake("переносити українське вживання однини та множини без перевірки португальської норми", "перевіряти лексичну модель", "Категорія числа не завжди має однакову дистрибуцію в двох мовах.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська має таке саме базове протиставлення однини й множини, але конкретна морфологія та злічуваність не збігаються. Особливо корисно запам'ятовувати plural разом із моделлю слова: país → países, papel → papéis, а не виводити форму автоматично.",
    regional: "Базові моделі числа спільні для PT-BR і PT-PT. Окремі вимовні характеристики множини та частотність певних лексичних plural можуть різнитися, але це не створює двох окремих систем числа.",
    sources: [
      { label: "Ciberdúvidas — O plural de dossiê, ateliê e guiché", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/o-plural-de-dossie-atelie-e-guiche/30453" },
      { label: "Ciberdúvidas — Os nomes que não admitem plural", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/os-nomes-que-nao-admitem-plural/25549" },
      { label: "Ciberdúvidas — O plural de nomes não-contáveis", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/o-plural-de-nomes-nao-contaveis/28624" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "noun-gender",
    slug: "noun-gender",
    category: "nouns",
    titleUk: "Рід іменників: masculino, feminino та граматичний рід",
    titlePt: "Género dos nomes",
    titleEn: "Noun gender",
    summary: "Як працює граматичний рід португальських іменників та чому закінчення не завжди надійно його передбачає.",
    aliases: ["рід іменників", "noun gender", "género", "gênero", "masculino", "feminino"],
    related: ["gender-vs-ukrainian", "noun-number", "articles-definite", "adjective-agreement", "professions-gender"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "У португальській кожен іменник має граматичний рід, але граматичний рід не дорівнює біологічній статі. Для назв людей та частини тварин рід часто має семантичний зв'язок із статтю референта, проте для неживих іменників він є лексичною властивістю: mapa — чоловічий, mesa — жіночий. Закінчення допомагають робити прогноз, але не гарантують правильну відповідь. Тому рід треба вчити разом з артиклем і, за можливості, з типовим прикладом узгодження.",
    definition: "Граматичний рід — морфосинтаксична категорія іменника з двома основними значеннями в португальській: masculino та feminino. Він впливає на узгодження детермінативів, прикметників та інших залежних елементів.",
    formation: "Типові, але не абсолютні кореляції: -o часто відповідає masculino, -a часто feminino. Є численні винятки й лексеми з іншими закінченнями: o mapa, o problema, a mão, a ponte. У назв осіб можуть використовуватися окремі лексеми, морфологічні пари або форми, спільні для обох родів.",
    uses: [
      { title: "Рід неживих іменників", body: "У неживих іменників рід не треба намагатися вивести з природної статі: це лексична граматична властивість.", examples: [ex("O mapa é novo.", "Карта нова.", { purpose: "contrast" }), ex("A mesa é grande.", "Стіл / стільниця велика.", { purpose: "production" })] },
      { title: "Закінчення як підказка", body: "Закінчення допомагає сформувати початкову гіпотезу, але після нього треба перевірити конкретне слово.", examples: [ex("o livro", "книжка — чоловічий рід у португальській", { purpose: "comprehension" }), ex("a casa", "будинок — жіночий рід у португальській", { purpose: "comprehension" })] },
      { title: "Назви осіб", body: "У назвах людей граматичний рід часто співвідноситься зі статтю, але існують epicenos, sobrecomuns та comuns de dois.", examples: [ex("o jornalista / a jornalista", "журналіст / журналістка", { purpose: "production" }), ex("a vítima", "жертва — граматично жіночий рід незалежно від статі особи", { purpose: "comprehension" })] },
      { title: "Рід і concordância", body: "Рід стає видимим у детермінативі та прикметнику: o mapa novo, a casa nova.", examples: [ex("A ponte é antiga.", "Міст старий.", { purpose: "production" })] }
    ],
    examples: [
      ex("O mapa está na mesa.", "Карта лежить на столі.", { purpose: "production" }),
      ex("A mão está fria.", "Рука холодна.", { purpose: "comprehension" }),
      ex("O problema é difícil.", "Проблема складна.", { purpose: "production" }),
      ex("A foto ficou bonita.", "Фотографія вийшла гарною.", { purpose: "production" }),
      ex("A jornalista chegou cedo.", "Журналістка прийшла рано.", { purpose: "production" }),
      ex("A vítima recebeu ajuda.", "Потерпіла / жертва отримала допомогу.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("визначати рід лише за останньою літерою", "використовувати закінчення як прогноз, а не як доказ", "o mapa і o problema показують, що -a та -e не гарантують feminino.", "predicted-l1-transfer", "high"),
      mistake("плутати граматичний рід із біологічною статтю", "розрізняти género gramatical і sex у референта", "Для неживих іменників рід є граматичною властивістю без природної статі.", "documented", "high"),
      mistake("вчити слово без артикля", "вчити іменник разом із o/a на початковому етапі", "Артикль одразу кодує рід і зменшує кількість помилок у concordância.", "editorial", "high")
    ],
    ukrainian: "Українська також має граматичний рід, тому сама категорія не є новою. Проте розподіл лексем не збігається: українське «карта» жіночого роду, тоді як португальське mapa — чоловічого; українське «фото» середнього роду, а португальське foto — жіночого. Саме такі розбіжності роблять механічний переклад небезпечним.",
    regional: "Базова система masculino/feminino спільна для PT-BR і PT-PT. Окремі лексеми можуть мати варіантність або різну частотність у регіонах; для learner важливо фіксувати конкретну норму, якщо джерела розходяться.",
    sources: [
      { label: "Ciberdúvidas — Género e temporalidade", url: "https://ciberduvidas.iscte-iul.pt/artigos/rubricas/idioma/genero-e-temporalidade/5586" },
      { label: "Ciberdúvidas — Sobre índices temáticos e género gramatical", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/sobre-indices-tematicos-e-genero-gramatical/27981" },
      { label: "Ciberdúvidas — Exceções na atribuição de género gramatical", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/excecoes-na-atribuicao-de-genero-gramatical/32516" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "gender-vs-ukrainian",
    slug: "gender-vs-ukrainian",
    category: "nouns",
    titleUk: "Рід португальських іменників vs український: mapa, foto, problema",
    titlePt: "Género e o ucraniano",
    titleEn: "Portuguese gender vs Ukrainian",
    summary: "Системний спосіб запам'ятовувати лексеми, у яких португальський рід не збігається з українським.",
    aliases: ["рід українська", "gender vs Ukrainian", "mapa", "foto", "problema", "хибний рід"],
    related: ["noun-gender", "articles-definite", "adjective-agreement", "false-friends"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Для українськомовного студента одна з найнебезпечніших пасток — автоматично переносити граматичний рід із рідної мови. Португальське слово може мати ту саму або близьку форму, але інший рід: o mapa проти українського «карта», o problema проти «проблема», a foto проти «фото». Це не випадкові помилки окремих слів: рід є лексичною категорією кожної мови, тому його треба засвоювати незалежно. Найефективніша стратегія — запам'ятовувати слово разом із артиклем і створювати контрастні міні-пари.",
    definition: "Міжмовний контраст роду — випадок, коли семантично або формально відповідні іменники в португальській та українській мають різні граматичні роди. Це джерело систематичного L1 transfer.",
    formation: "Не існує правила, яке перетворює український рід на португальський. Практична модель навчання: o mapa, o problema, a foto, a ponte, o leite. Артикль є частиною навчальної одиниці, а прикметник дає другий сигнал: o mapa antigo, a foto antiga.",
    uses: [
      { title: "o mapa", body: "Португальське mapa — masculino, хоча український відповідник «карта» — жіночого роду.", examples: [ex("O mapa está aqui.", "Карта тут.", { purpose: "production" })] },
      { title: "o problema", body: "Португальське problema — masculino, незважаючи на закінчення -a та жіночий рід українського «проблема».", examples: [ex("O problema é complexo.", "Проблема складна.", { purpose: "production" })] },
      { title: "a foto", body: "foto є скороченням від fotografia і в португальській уживається як feminino; українське «фото» має інший граматичний рід.", examples: [ex("A foto ficou ótima.", "Фото вийшло чудовим.", { purpose: "production" })] },
      { title: "Не робити списку без системи", body: "Корисніше групувати помилки за механізмом і завжди повторювати артикль разом із лексемою.", examples: [ex("o mapa novo / a foto nova", "нова карта / нове фото", { purpose: "contrast" })] }
    ],
    examples: [
      ex("O mapa novo está na mochila.", "Нова карта в рюкзаку.", { purpose: "production" }),
      ex("O problema continua difícil.", "Проблема залишається складною.", { purpose: "production" }),
      ex("A foto antiga desapareceu.", "Старе фото зникло.", { purpose: "production" }),
      ex("A ponte é muito longa.", "Міст дуже довгий.", { purpose: "comprehension" }),
      ex("O leite está quente.", "Молоко гаряче.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("казати *a mapa через українське «карта»", "вчити mapa як o mapa", "Рід не переноситься між мовами автоматично.", "predicted-l1-transfer", "high"),
      mistake("казати *a problema через закінчення -a", "запам'ятати o problema як lexical gender", "Формальна підказка -a тут не визначає португальський рід.", "predicted-l1-transfer", "high"),
      mistake("покладатися на середній рід українського «фото»", "вживати a foto та узгоджувати залежні слова у feminino", "Португальське foto походить від fotografia і має жіночий рід.", "documented", "high"),
      mistake("вчити список винятків без контексту", "повторювати слово з артиклем та прикметником", "Так формується не лише пам'ять про слово, а й автоматична concordância.", "editorial", "high")
    ],
    ukrainian: "Ця тема спеціально побудована для українськомовного студента: не намагайтеся «виправляти» португальський рід українським. Корисна картка має вигляд o mapa — mapa novo — a foto — foto nova, а не просто «mapa = карта».",
    regional: "Контраст із українською не залежить від PT-BR/PT-PT. Якщо конкретне слово має варіантність у португаломовному світі, це треба позначати окремо; базові приклади o mapa, o problema та a foto є навчально стабільними.",
    sources: [
      { label: "Ciberdúvidas — Género e temporalidade", url: "https://ciberduvidas.iscte-iul.pt/artigos/rubricas/idioma/genero-e-temporalidade/5586" },
      { label: "Ciberdúvidas — Sobre índices temáticos e género gramatical", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/sobre-indices-tematicos-e-genero-gramatical/27981" },
      { label: "Ciberdúvidas — Fotinha / fotinho", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/fotinha--fotinho/9564" }
    ],
    reviewedAt: "2026-09-25"
  }
];
