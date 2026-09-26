import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
});

export const pages: GrammarPage[] = [
  draft({
    id: "complement-clauses-advanced", slug: "complement-advanced", category: "subordinate",
    titleUk: "Складні доповнювальні підрядні", titlePt: "Orações completivas avançadas", titleEn: "Advanced complement clauses",
    summary: "Як тип головного предиката, підмети та вибір між infinitivo, indicativo і conjuntivo визначають форму доповнювальної конструкції.",
    aliases: ["advanced complement clauses","orações completivas"],
    related: ["complement-clauses","indicative-vs-subjunctive","personal-infinitive"],
    depth: "high",
    ukrainianContrast: "high",
    intro: "Доповнювальна частина заповнює валентну позицію головного предиката: Acho que ele vem, Quero que ele venha, É provável que ele venha. Вибір форми не визначається українським перекладом «що/щоб» сам по собі. Треба врахувати значення головного предиката, відношення між підметами та синтаксичну модель. Коли підмети збігаються, часто можливий інфінітив: Quero estudar. Коли підмети різні, природною моделлю є que + фінiтна форма: Quero que ele estude. Це не абсолютне правило, бо конкретний предикат має власну валентну рамку. Indicativo та conjuntivo також пов'язані з дискурсивною й модальною інтерпретацією: Acho que ele vem протиставляється Não acho que ele venha.",
    definition: "Доповнювальна підрядна — залежна частина, яка заповнює валентну позицію предиката. Для вибору форми важливі три рівні: тип матричного предиката, синтаксична структура вкладеної частини та відношення між її суб'єктом і суб'єктом матриці.",
    formation: "Зручно будувати аналіз послідовно. Спочатку визначте матричний предикат: знання/повідомлення, бажання, сумнів, оцінка, необхідність тощо. Потім визначте, чи вкладена предикація має власного вираженого суб'єкта. Нарешті порівняйте доступні моделі: que + indicativo, que + conjuntivo, infinitivo impessoal або infinitivo pessoal. Наприклад, Acho que ele vem і Não acho que ele venha відрізняються не перекладом українського «що», а ставленням мовця до пропозиції; Quero estudar і Quero que ele estude мають різних суб'єктів.",

    uses: [
      { title: "Однаковий підмет", body: "Quero estudar: один референт є суб'єктом обох дій, тому інфінітив дає компактну конструкцію." },
      { title: "Різні підмети", body: "Quero que ele estude: eu є суб'єктом querer, а ele — суб'єктом estude." },
      { title: "Indicativo", body: "Acho que ele vem подає пропозицію як твердження/оцінку мовця. Після предикатів знання, повідомлення чи оцінки факту indicativo часто є базовою моделлю." },
      { title: "Conjuntivo", body: "Quero que ele venha та É possível que ele venha показують волю або можливість; конкретний тригер треба вчити разом із конструкцією. Заперечення, сумнів і оцінка можуть змінювати спосіб." },
      { title: "Особовий інфінітив", body: "É importante estudarmos: інфінітив має власний виражений суб'єкт і особову форму. Це не просто «скорочений conjuntivo», а окрема нефінітна конструкція." },
      { title: "Предикат керує моделлю", body: "Деякі дієслова та прикметники мають лексично закріплену модель керування. Тому навіть за однакових суб'єктів не можна автоматично замінювати finite clause на infinitivo." },
      { title: "Негативне судження", body: "Не плутайте заперечення матричного предиката з автоматичною заміною способу: Não acho que ele venha — типовий приклад зміни епістемічної позиції, а не простого механічного правила." }
    ],
    examples: [{"pt":"Acho que ele vem amanhã.","uk":"Думаю, що він прийде завтра."},{"pt":"Não acho que ele venha amanhã.","uk":"Не думаю, що він прийде завтра."},{"pt":"Quero estudar português.","uk":"Я хочу вивчати португальську."},{"pt":"Quero que ele estude português.","uk":"Я хочу, щоб він вивчав португальську."},{"pt":"É possível que chova.","uk":"Можливо, буде дощ."},{"pt":"É importante estudarmos todos os dias.","uk":"Важливо, щоб ми вчилися щодня."}],
    mistakes: [
      mistake("вибирати спосіб лише за українським «що/щоб»","визначати семантичну операцію головного предиката","Українські сполучники не є прямою таблицею португальських способів.","predicted-l1-transfer","high"),
      mistake("використовувати conjuntivo після кожного que","визначати, чи que є тригером способу, чи просто сполучником","Que саме по собі не визначає modo; важлива матрична конструкція.","editorial","high"),
      mistake("вважати «однаковий суб'єкт = infinitivo» універсальним правилом","перевіряти керування конкретного предиката","Співвідношення суб'єктів — лише один фактор у виборі конструкції.","predicted-l1-transfer","high"),
      mistake("вважати Acho que ele vem і Não acho que ele vem однаковими за граматичною моделлю","враховувати заперечення й епістемічну інтерпретацію","Після негативних предикатів типовим є conjuntivo, хоча конкретний контекст може змінювати вибір.","documented","high")
    ],
    ukrainian: "Українське «що/щоб» допомагає побачити залежність, але не передбачає португальський спосіб механічно.",
    regional: "Базові моделі спільні для PT-BR та PT-PT, але частотність infinitivo pessoal, позиція clitics і деякі перифразні конструкції можуть відрізнятися. Тому приклади мають бути прив'язані до конкретної моделі, а не до абстрактного правила «варіант А/варіант Б».",
    brPt: "У PT-BR та PT-PT que + conjuntivo, indicativo і infinitivo мають спільну граматичну основу. Відмінності частіше стосуються частотності окремих нефінітних конструкцій та інших пов'язаних синтаксичних моделей.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/" },
      { label: "Ciberdúvidas — Infinitivo pessoal, ou impessoal?", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/infinitivo-pessoal-ou-impessoal/30188" }
    ],
  }),
];
