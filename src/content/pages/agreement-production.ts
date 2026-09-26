import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

export const pages: GrammarPage[] = [
  page({
    id: "agreement-edge-cases", slug: "edge-cases", category: "agreement",
    titleUk: "Складні випадки узгодження", titlePt: "Casos especiais de concordância", titleEn: "Agreement edge cases",
    summary: "Як визначати граматичний центр підмета, коли найближче слово дає хибну підказку.",
    aliases: ["agreement edge cases", "concordância", "складне узгодження"],
    related: ["agreement-sv", "adjective-agreement", "noun-number"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Узгодження стає складним не тому, що правило раптом зникає, а тому, що поверхнева форма речення містить кілька іменників, координовані компоненти або вставні модифікатори. Правильна стратегія — спочатку знайти синтаксичний центр, потім визначити його число й особу, і лише після цього узгоджувати дієслово або прикметник.",
    definition: "Складні випадки узгодження — конструкції, у яких лінійна близькість слів, координація або особливий тип підмета ускладнюють визначення узгоджувального контролера.",
    uses: [
      { title: "Іменник + прийменникова група", body: "Дієслово узгоджується з головним іменником підмета, а не з найближчим іменником усередині додатка або означення.", examples: [ex("A mãe dos gémeos vive aqui.", "Мати близнюків живе тут.")] },
      { title: "Координація", body: "Два або більше узгоджувальних центрів, поєднаних e, утворюють множинний підмет.", examples: [ex("A Ana e o Pedro vivem aqui.", "Ана і Педро живуть тут.")] },
      { title: "Підмет після дієслова", body: "Незвичний порядок слів не скасовує узгодження. Не можна вибирати число лише за позицією підмета.", examples: [ex("Chegaram os convidados.", "Прийшли гості.")] },
      { title: "Колективні та кількісні назви", body: "Конструкції з колективними іменниками та кількісними виразами потребують окремого аналізу формальної структури й можливого семантичного впливу.", examples: [ex("A maioria dos alunos chegou cedo.", "Більшість студентів прийшла рано.")] },
      { title: "Вставні модифікатори", body: "Довга іменна група може створити ілюзію, що керування переходить до внутрішнього компонента.", examples: [ex("O conjunto de medidas foi aprovado.", "Комплекс заходів було схвалено.")] }
    ],
    examples: [
      ex("A lista de documentos está na mesa.", "Список документів лежить на столі.", { purpose: "production" }),
      ex("A Ana e o Pedro chegaram cedo.", "Ана і Педро прийшли рано.", { purpose: "comprehension" }),
      ex("Chegaram os convidados.", "Гості прийшли.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("узгоджувати дієслово з найближчим іменником", "поставити питання «хто є головним компонентом підмета?»", "Лінійна близькість не визначає синтаксичний контролер.", "predicted-l1-transfer", "high"),
      mistake("сприймати прийменникову групу як другий підмет", "відрізняти head noun від dependent noun", "Іменник усередині de/додаткової групи не стає контролером автоматично.", "predicted-l1-transfer", "high"),
      mistake("вважати постпозицію підмета ознакою безособовості", "перевіряти число реального підмета", "Постпозитивний підмет може мати звичайне узгодження.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська має подібний принцип узгодження з головним компонентом, тому контраст тут менший, ніж у системі клітик. Проте в португальській треба окремо стежити за порядком слів і конструкціями, у яких підмет стоїть після дієслова.",
    regional: "Основні правила формального узгодження є спільними для PT-PT і PT-BR. Варіативність особливо важлива в колективних, кількісних та розмовних конструкціях, де формальна й семантична мотивація можуть взаємодіяти.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" }, { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }]
  }),
  page({
    id: "agreement-collective-subjects", slug: "collective-subjects", category: "agreement",
    titleUk: "Колективні та кількісні підмети", titlePt: "Sujeitos coletivos e quantificacionais", titleEn: "Collective and quantified subjects",
    summary: "Формальне число, семантична множинність і вибір дієслівної форми.",
    aliases: ["collective agreement", "quantified subjects", "sujeitos coletivos"],
    related: ["agreement-edge-cases", "agreement-sv", "quantifiers-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Іменник може бути граматично одниною, але позначати множину осіб: maioria, grupo, equipa/equipe, conjunto та інші колективні назви. У таких випадках студент має розрізняти формальне число головного іменника та семантичну множинність членів групи.",
    definition: "Колективне узгодження — вибір форми узгодження в конструкціях, де формальний центр має однину, але семантично позначає сукупність.",
    uses: [
      { title: "Формальний центр в однині", body: "За стандартного формального аналізу дієслово узгоджується з головним колективним іменником.", examples: [ex("A maioria dos alunos chegou cedo.", "Більшість студентів прийшла рано.")] },
      { title: "Семантична множинність", body: "У деяких контекстах семантична множинність може впливати на варіант узгодження, особливо в мовленні; таку тенденцію не слід викладати як безумовне правило.", examples: [ex("A maioria dos alunos chegou cedo.", "Це формально однинна конструкція; інші варіанти потребують оцінки контексту й норми.")] },
      { title: "Кількісні вирази", body: "Expressões як um grupo de, uma parte de, a maior parte de мають власну синтаксичну структуру; перевіряйте головний компонент перед вибором числа.", examples: [ex("Uma parte dos dados foi analisada.", "Частину даних було проаналізовано.")] },
      { title: "Узгодження прикметника", body: "Не лише дієслово, а й прикметник або participle може створювати питання про те, який компонент контролює рід і число.", examples: [ex("A maioria das propostas foi aprovada.", "Більшість пропозицій було схвалено.")] }
    ],
    examples: [
      ex("O grupo chegou cedo.", "Група прийшла рано.", { purpose: "production" }),
      ex("A maioria dos estudantes participou.", "Більшість студентів взяла участь.", { purpose: "comprehension" }),
      ex("Uma parte do relatório foi revista.", "Частину звіту було переглянуто.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("автоматично погоджувати з множинним іменником після de", "спочатку визначати head noun", "Множинний компонент усередині групи не обов'язково контролює дієслово.", "predicted-l1-transfer", "high"),
      mistake("перетворювати семантичну множинність на універсальне правило", "позначати варіант як тенденцію, якщо він залежить від контексту або різновиду", "Узгодження колективних конструкцій може бути варіативним.", "editorial", "high")
    ],
    ukrainian: "Українська також має колективні та кількісні конструкції, тому базова логіка доступна. Водночас не слід переносити українські моделі узгодження автоматично: португальський head noun і нормативна традиція визначають базовий шаблон.",
    regional: "Варіативність формального й семантичного узгодження варто описувати з прив'язкою до корпусу, регістру та різновиду. PT-BR і PT-PT не повинні зводитися до одного прикладу без маркування.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" }, { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }]
  })
];
