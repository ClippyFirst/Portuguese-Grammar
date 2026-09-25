import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
  reviewStatus: undefined as never,
});

export const pages: GrammarPage[] = [
  draft({
    id: "clitic-clusters", slug: "clitic-clusters", category: "pronouns",
    titleUk: "Кластери клітик", titlePt: "Combinações de clíticos", titleEn: "Clitic clusters",
    summary: "Поєднання двох клітик та їхній порядок.",
    aliases: "clitic clusters,clitic combinations,mo,lho,no-lo",
    related: ["clitic-pronouns","object-pronouns","clitic-placement"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Коли один предикат має два займенникові аргументи, португальська може поєднувати клітики в один кластер. Форма кластера залежить від ролей і морфологічного злиття, а не від буквального перекладу українських «йому/його».",
    definition: "Кластер клітик — послідовність ненаголошених займенникових форм, яка реалізує більше одного аргументного компонента.",
    uses: "",
    examples: [{"pt":"Dei-lho ontem.","uk":"Я дав/дала йому це вчора.","variety":"PT"}],
    mistakes: [mistake("вчити lho як окреме слово","розкладати кластер на ролі та форми","lhe + o → lho в відповідній моделі.","editorial","high")],
    ukrainian: "Українська має окремі форми «йому це», тому структура португальського кластера не прозора з перекладу.",
    regional: "Кластери особливо чутливі до стандарту, письмового/усного каналу та різновиду.",
    brPt: "",
    reviewStatus: "review-needed"
  }),
  draft({
    id: "clitic-climbing", slug: "clitic-climbing", category: "pronouns",
    titleUk: "Підняття клітики", titlePt: "Subida do clítico", titleEn: "Clitic climbing",
    summary: "Розташування клітики щодо інфінітивної конструкції.",
    aliases: "clitic climbing,subida do clítico",
    related: ["clitic-placement","personal-infinitive","complex-predicates"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "У деяких складених дієслівних конструкціях клітика може реалізуватися біля матричного дієслова або при інфінітиві залежно від конструкції, регістру та різновиду. Це окрема проблема від загального правила proclisis/enclisis.",
    definition: "Clitic climbing — синтаксичне розміщення клітики поза тим дієслівним компонентом, до якого вона семантично належить.",
    uses: "",
    examples: [{"pt":"Quero-o ver.","uk":"Я хочу його побачити.","variety":"PT"}],
    mistakes: [mistake("вважати позицію клітики вільною","спочатку визначати тип перифрази та норму","Розподіл залежить від конструкції, а не лише від бажання мовця.","predicted-l1-transfer","medium")],
    ukrainian: "Українська не має тотожної системи клітичного розміщення, тому позицію треба вчити разом із конструкцією.",
    regional: "Не узагальнюйте одну модель на всі перифрази та різновиди.",
    brPt: "",
    reviewStatus: "review-needed"
  }),
];
