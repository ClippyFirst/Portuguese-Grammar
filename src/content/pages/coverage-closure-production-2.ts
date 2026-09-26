import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G2 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const C = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";
const CD = "https://ciberduvidas.iscte-iul.pt/";

export const pages: GrammarPage[] = [
  page({
    id: "null-and-expletive-subjects", slug: "null-expletive", category: "syntax",
    titleUk: "Нульові та формальні підмети", titlePt: "Sujeitos nulos e expletivos", titleEn: "Null and expletive subjects",
    summary: "Розмежування референтного нульового підмета, неозначеного підмета та безособових конструкцій без семантичного підмета.",
    aliases: ["нульові та формальні підмети", "null and expletive subjects", "sujeitos nulos", "expletive subject"],
    related: ["null-subject", "definite-null-subjects", "indefinite-null-subjects", "expletive-null-subjects", "existential", "impersonal-constructions"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Нульовий підмет не завжди означає одне й те саме. В одному реченні підмет не вимовляється, але легко відновлюється як конкретна особа; в іншому маємо неозначеного агента; ще в іншому семантичного підмета взагалі немає. Для україномовного студента це особливо важливо через схожість поверхневого пропуску підмета в українській та португальській.",
    definition: "Нульовий підмет — синтаксично невиражений підмет. Він може бути референтним і контекстуально відновлюваним, неозначеним або входити до безособової/екзистенційної конструкції. Експлетивний (формальний) підмет не має звичайного референта.",
    formulas: [
      { pattern: "Ø + verbo flexionado", note: "Нульовий референтний підмет може відновлюватися з форми дієслова та дискурсу." },
      { pattern: "Ø + 3ª pessoa plural", note: "Може передавати неозначеного агента: Dizem que..." },
      { pattern: "há / faz / é preciso + ...", note: "Безособові конструкції не потребують референтного підмета." }
    ],
    uses: [
      { title: "Означений нульовий підмет", body: "Референт конкретний, але не виражений, бо його можна відновити з контексту.", examples: [ex("A Maria chegou e Ø sentou-se.", "Марія прийшла й сіла."), ex("Ø Fui ao mercado.", "Я пішов/пішла на ринок.")] },
      { title: "Неозначений підмет", body: "Мовець не називає або не ідентифікує агента. Контекст не дає одного конкретного референта.", examples: [ex("Dizem que vai chover.", "Кажуть, що буде дощ."), ex("Bateram à porta.", "Хтось постукав у двері.")] },
      { title: "Екзистенційні та безособові конструкції", body: "У há ou faz frio немає прихованої особи, яку можна було б підставити як «він/вона». Це інший тип нульовості.", examples: [ex("Há muitos problemas.", "Є багато проблем."), ex("Faz frio hoje.", "Сьогодні холодно.")] },
      { title: "Чому не можна все назвати pro-drop", body: "Здатність опускати referential subject і безособовість — різні явища. Підстановка займенника може змінити структуру або зробити речення неприродним.", examples: [ex("Ela chegou cedo. → Ø Chegou cedo.", "Вона прийшла рано. → Прийшла рано."), ex("Há um problema. → *Ele há um problema.", "Є проблема. → *Він є проблема.")] }
    ],
    examples: [
      ex("Ø Cheguei cedo.", "Я прийшов/прийшла рано.", { purpose: "production" }),
      ex("Dizem que ele saiu.", "Кажуть, що він пішов.", { purpose: "contrast" }),
      ex("Há uma solução.", "Є рішення.", { purpose: "contrast" }),
      ex("Faz dois anos que não o vejo.", "Минуло два роки, як я його не бачу.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати кожен пропущений підмет означеним", "визначати референцію", "Нульовий підмет може бути неозначеним або належати до безособової конструкції."),
      mistake("додавати ele/ela до há, faz frio та подібних конструкцій", "визначати, чи є семантичний підмет", "Екзистенційні та метеорологічні конструкції не працюють як звичайні предикати з референтним суб'єктом."),
      mistake("ототожнювати португальський pro-drop з українським пропуском підмета", "розрізняти морфологічне відновлення та дискурсивну референцію", "Механізми й обмеження мов різні.")
    ],
    ukrainian: "Українська теж часто опускає підмет, особливо коли особу видно з дієслівної форми або контексту. Проте португальська система має власні обмеження й окремі безособові моделі. Саме тому «підмет не видно» — недостатня граматична характеристика.",
    regional: "Розподіл нульових і виражених підметів помітно варіює між PT-BR і PT-PT, особливо в розмовній мові. Бразильська португальська загалом частіше виражає pronominal subjects у багатьох контекстах, тоді як європейська сильніше зберігає null-subject patterns; це тенденція, а не абсолютне правило.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G2 }, { label: "Camões — Referencial Camões PLE", url: C }]
  }),

  page({
    id: "subject-object-order", slug: "subject-object-order", category: "syntax",
    titleUk: "Порядок підмета й додатка", titlePt: "Ordem de sujeito e objeto", titleEn: "Subject-object order",
    summary: "Базовий SVO та марковані порядки підмета й додатка в португальській.",
    aliases: ["порядок підмета й додатка", "subject object order", "SVO português", "ordem de sujeito e objeto"],
    related: ["word-order", "subject-placement", "topicalization", "information-structure", "null-subject"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальська має відносно стабільний базовий порядок SVO: підмет — дієслово — прямий додаток. Але це не означає, що будь-яке відхилення є помилкою. Порядок змінюється під впливом інформаційної структури, типу предиката, референції та дискурсу. Для україномовного студента головна небезпека — переносити в португальську вільніший український порядок слів.",
    definition: "Порядок SVO є нейтральною базовою схемою для багатьох перехідних конструкцій. Марковані порядки можуть виконувати інформаційні, стилістичні або структурні функції.",
    formulas: [
      { pattern: "S + V + O", note: "Базова схема: Maria comprou o livro." },
      { pattern: "O + S + V / tópico + oração", note: "Передвинений компонент може бути темою, але структура не зводиться до простого «переставляння слів»." },
      { pattern: "V + S", note: "Інверсія можлива в певних типах конструкцій, особливо за специфічних дискурсивних умов." }
    ],
    uses: [
      { title: "Нейтральний SVO", body: "Коли підмет і об'єкт не потребують особливого інформаційного виділення, SVO є природною базовою схемою.", examples: [ex("A Maria comprou o livro.", "Марія купила книжку."), ex("O aluno leu o texto.", "Учень прочитав текст.")] },
      { title: "Топікалізація", body: "Об'єкт або інший компонент може бути винесений уперед для тематизації, але його синтаксичний статус визначається всією конструкцією.", examples: [ex("Esse livro, a Maria comprou ontem.", "Цю книжку Марія купила вчора."), ex("Quanto ao projeto, vamos discutir amanhã.", "Щодо проєкту, обговоримо завтра.")] },
      { title: "Позиція підмета", body: "Підмет може стояти після дієслова в окремих конструкціях, де цього вимагають інформаційна структура або тип предиката.", examples: [ex("Chegou o João.", "Прийшов Жуан."), ex("Apareceu uma oportunidade.", "З'явилася можливість.")] },
      { title: "Нульовий підмет змінює видиму схему", body: "Якщо підмет опущено, поверхнево може здаватися, що речення починається з дієслова. Це не те саме, що інверсія.", examples: [ex("Ø Comprei o livro.", "Я купив/купила книжку."), ex("Chegou o João.", "Жуан прийшов.")] }
    ],
    examples: [
      ex("O Pedro viu a Ana.", "Педру побачив Ану.", { purpose: "production" }),
      ex("A Ana viu o Pedro.", "Ана побачила Педру.", { purpose: "contrast" }),
      ex("Esse livro, eu já li.", "Цю книжку я вже прочитав/прочитала.", { purpose: "contrast" }),
      ex("Chegou uma mensagem.", "Надійшло повідомлення.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("переносити український вільний порядок слів у нейтральну португальську", "починати з SVO, якщо немає дискурсивної причини для іншого порядку", "Португальська сильніше покладається на базовий порядок."),
      mistake("вважати будь-який V-S інверсією підмета", "відрізняти postverbal subject від інших структур", "Нульовий підмет і postverbal subject можуть мати однаковий початок речення."),
      mistake("плутати топікалізацію з прямою перестановкою O і S", "аналізувати тему, фокус і граматичні ролі", "Інформаційна структура є частиною пояснення порядку.")
    ],
    ukrainian: "Українська дозволяє значно вільніше змінювати порядок компонентів завдяки відмінкам і просодії. У португальській порядок частіше допомагає встановити синтаксичні ролі, тому нейтральний SVO варто засвоїти як базову автоматичну модель.",
    regional: "SVO є спільним ядром PT-BR і PT-PT, але частотність вираженого підмета, topicalization та деяких postverbal-subject конструкцій відрізняється. Регіональна варіативність не означає вільного перемішування компонентів.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G2 }, { label: "Camões — Referencial Camões PLE", url: C }]
  }),

  page({
    id: "subordination-and-coordination", slug: "subordination-coordination", category: "syntax",
    titleUk: "Сурядність і підрядність", titlePt: "Coordenação e subordinação", titleEn: "Coordination and subordination",
    summary: "Як розрізняти координацію та залежність між частинами складного речення.",
    aliases: ["сурядність і підрядність", "coordination subordination", "coordenação e subordinação", "складне речення"],
    related: ["coordination", "coordinating", "subordinating", "complement-clauses", "subordinate-clauses", "finite-vs-nonfinite-subordination"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Сурядність і підрядність часто перекладаються однаково українськими сполучниками на кшталт «і», «але», «що», «коли», але синтаксичні відносини між частинами різні. У координації частини мають відносно рівний статус; у підрядності одна конструкція структурно залежить від іншої та може виконувати роль додатка, означення або обставини.",
    definition: "Координація поєднує синтаксично співвідносні компоненти, а субординація створює залежну конструкцію. Різниця визначається не лише сполучником, а й синтаксичною функцією та структурою всього речення.",
    formulas: [
      { pattern: "oração + e/mas/ou + oração", note: "Типова координація." },
      { pattern: "oração principal + que/quando/porque/... + oração dependente", note: "Типова підрядність." },
      { pattern: "coordenação ≠ просто два речення поруч", note: "Зв'язок визначається структурою, а не лише пунктуацією." }
    ],
    uses: [
      { title: "Сурядність", body: "Частини можуть бути окремими реченнями й поєднуватися сполучником ou, e, mas, porém та іншими координаційними засобами.", examples: [ex("Estudei e fiz o trabalho.", "Я вчився/вчилася і зробив/зробила роботу."), ex("Queria sair, mas estava cansado.", "Я хотів/хотіла вийти, але був/була втомлений/втомлена.")] },
      { title: "Додаткова підрядність", body: "Підрядна частина заповнює позицію, яку може відкривати предикат: dizer que, saber que, querer que тощо.", examples: [ex("Acho que ele vem.", "Я думаю, що він прийде."), ex("Quero que estudes.", "Я хочу, щоб ти вчився/вчилася.")] },
      { title: "Обставинна підрядність", body: "Підрядна частина може задавати час, причину, умову, мету, допустовість та інші відносини.", examples: [ex("Quando chegares, liga-me.", "Коли прийдеш, подзвони мені."), ex("Fiquei em casa porque estava doente.", "Я залишився/залишилася вдома, бо був/була хворий/хвора.")] },
      { title: "Не орієнтуватися лише на кому", body: "Пунктуація допомагає побачити межі, але не визначає сама по собі тип зв'язку. Потрібно встановити синтаксичну залежність.", examples: [ex("Ele chegou e sentou-se.", "Він прийшов і сів."), ex("Quando ele chegou, sentou-se.", "Коли він прийшов, він сів.")] }
    ],
    examples: [
      ex("Estudo e trabalho.", "Я навчаюся і працюю.", { purpose: "production" }),
      ex("Estudo porque preciso.", "Я навчаюся, бо мені потрібно.", { purpose: "contrast" }),
      ex("Ela disse que vinha.", "Вона сказала, що прийде.", { purpose: "contrast" }),
      ex("Quando terminares, avisa-me.", "Коли закінчиш, повідом мене.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("визначати координацію чи підрядність лише за українським перекладом", "аналізувати португальську синтаксичну структуру", "Однаковий переклад може відповідати різним граматичним моделям."),
      mistake("вважати кожну частину після коми підрядною", "визначати наявність структурної залежності", "Кома не є класифікатором синтаксису."),
      mistake("ігнорувати функцію підрядної частини", "питати, яку позицію вона заповнює або який зв'язок виражає", "Complement, relative та adverbial clauses мають різну структуру.")
    ],
    ukrainian: "Українська має дуже близьке загальне розрізнення сурядності та підрядності, тому тут менше L1-transfer. Проте сполучники й спосіб вираження способу, часу та умови не збігаються автоматично. Потрібно вчити португальські моделі окремо.",
    regional: "Основне розрізнення координації та підрядності є спільним для PT-BR і PT-PT. Варіативність стосується переважно вибору сполучників, частотності окремих конструкцій і регістру, а не базової синтаксичної опозиції.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G2 }, { label: "Camões — Referencial Camões PLE", url: C }]
  })
];
