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
    definition: "Доповнювальна підрядна — залежна частина, яка заповнює валентну позицію предиката.",
    uses: [{ title: "Однаковий підмет", body: "Quero estudar: один референт є суб'єктом обох дій, тому інфінітив дає компактну конструкцію." }, { title: "Різні підмети", body: "Quero que ele estude: eu є суб'єктом querer, а ele — суб'єктом estude." }, { title: "Indicativo", body: "Acho que ele vem подає пропозицію як твердження/оцінку мовця." }, { title: "Conjuntivo", body: "Quero que ele venha та É possível que ele venha показують волю або можливість; конкретний тригер треба вчити разом із конструкцією." }, { title: "Особовий інфінітив", body: "É importante estudarmos: інфінітив має власний виражений суб'єкт і особову форму." }],
    examples: [{"pt":"Acho que ele vem amanhã.","uk":"Думаю, що він прийде завтра."},{"pt":"Não acho que ele venha amanhã.","uk":"Не думаю, що він прийде завтра."},{"pt":"Quero estudar português.","uk":"Я хочу вивчати португальську."},{"pt":"Quero que ele estude português.","uk":"Я хочу, щоб він вивчав португальську."},{"pt":"É possível que chova.","uk":"Можливо, буде дощ."},{"pt":"É importante estudarmos todos os dias.","uk":"Важливо, щоб ми вчилися щодня."}],
    mistakes: [mistake("вибирати спосіб лише за українським «що/щоб»","визначати семантичну операцію головного предиката","Українські сполучники не є прямою таблицею португальських способів.","predicted-l1-transfer","high")],
    ukrainian: "Українське «що/щоб» допомагає побачити залежність, але не передбачає португальський спосіб механічно.",
    regional: "Дивіться також окремі сторінки про indicativo/conjuntivo та infinitivo.",
    brPt: "",
  }),
];
