import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "finite-vs-nonfinite-subordination",
    slug: "finite-vs-nonfinite",
    category: "subordinate",
    titleUk: "Фінітні й нефінітні підрядні конструкції",
    titlePt: "Subordinação finita e não finita",
    titleEn: "Finite vs non-finite subordination",
    summary: "Як вибір особової або нефінітної форми змінює структуру підрядної конструкції.",
    aliases: ["фінітні нефінітні", "finite vs non-finite", "subordinação finita e não finita"],
    related: ["complement-clauses", "reduced-clauses", "personal-infinitive", "gerundial-reduced-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Фінітна підрядна має особову дієслівну форму й виражає категорії особи, часу та способу безпосередньо. Нефінітна конструкція використовує інфінітив, gerúndio або particípio, тому частина цієї інформації кодується інакше або відновлюється з контексту.",
    definition: "Фінітна/нефінітна опозиція — розрізнення залежних конструкцій за типом предикації та морфологічним статусом дієслівної форми.",
    uses: [
      { title: "Фінітна конструкція", body: "Окрема особова форма дозволяє явно кодувати час, спосіб і особу.", examples: [ex("Quando chegares, liga-me.", "Коли прийдеш, подзвони мені.")] },
      { title: "Нефінітна конструкція", body: "Інфінітивна модель може бути компактнішою, але її суб'єкт і часовий зв'язок визначаються конструкцією.", examples: [ex("Antes de chegares, avisa-me.", "Перед тим як приїдеш, попередь мене.")] }
    ],
    examples: [
      ex("Quando terminares, avisa-me.", "Коли закінчиш, повідом мені.", { purpose: "contrast" }),
      ex("Antes de terminares, revê o texto.", "Перед тим як закінчиш, переглянь текст.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати нефінітну форму просто скороченням фінітної", "аналізувати суб'єкт, часове відношення та тип керування", "Перехід до інфінітива або іншої нефінітної форми може змінювати синтаксичну організацію.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також протиставляє особові й нефінітні форми, але португальський особовий інфінітив створює окремі можливості, яких немає як прямого аналога в українській.",
    regional: "Вибір фінітної та нефінітної конструкції залежить від лексичної рамки, контролю суб'єкта, регістру та різновиду.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "subordinate-clause-punctuation",
    slug: "punctuation",
    category: "subordinate",
    titleUk: "Пунктуація в підрядних реченнях",
    titlePt: "Pontuação nas orações subordinadas",
    titleEn: "Subordinate-clause punctuation",
    summary: "Як синтаксична структура, позиція підрядної та інформаційна організація впливають на пунктуацію.",
    aliases: ["пунктуація підрядних", "subordinate-clause punctuation", "pontuação nas subordinadas"],
    related: ["subordination-and-coordination", "punctuation", "relative-que", "direct-speech"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Кома в складному реченні не визначається одним універсальним правилом «підрядне = кома». Важливі тип підрядності, її позиція, синтаксичний зв'язок і, в окремих моделях, інформаційна організація. Для україномовного студента це особливо важливо, бо українські пунктуаційні правила не можна переносити механічно.",
    definition: "Пунктуація підрядних — система графічного оформлення меж і зв'язків між головною та підрядною частинами.",
    uses: [
      { title: "Позиція підрядної", body: "Початкова, вставлена та постпозитивна підрядна можуть мати різне пунктуаційне оформлення залежно від конструкції.", examples: [ex("Quando cheguei, ele saiu.", "Коли я прийшов/прийшла, він вийшов.")] },
      { title: "Відносні конструкції", body: "Обмежувальні та пояснювальні відносні речення мають різну синтаксичну й пунктуаційну організацію.", examples: [ex("O livro que comprei é novo.", "Книжка, яку я купив/купила, нова.")] }
    ],
    examples: [
      ex("Se tiveres tempo, liga-me.", "Якщо матимеш час, подзвони мені.", { purpose: "production" }),
      ex("A Ana, que mora aqui, trabalha connosco.", "Ана, яка живе тут, працює з нами.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("переносити українську кому на португальське речення без перевірки конструкції", "спочатку визначити тип підрядності та її синтаксичну роль", "Пунктуація є частиною португальської системи письма, а не прямою калькою українських правил.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також розрізняє типи підрядних і використовує кому, але конкретні пунктуаційні норми не збігаються. Особливо обережно треба ставитися до відносних речень і меж вставленої інформації.",
    regional: "Пунктуація чутлива до письмового регістру, синтаксичної структури та редакційної норми; розмовна інтонація не є достатньою підставою для механічного запису коми.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  })
];
