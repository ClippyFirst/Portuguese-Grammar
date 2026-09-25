import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "clitic-climbing",
    slug: "clitic-climbing",
    category: "syntax",
    titleUk: "Підняття клітики",
    titlePt: "Subida do clítico",
    titleEn: "Clitic climbing",
    summary: "Розміщення клітики біля матричного дієслова в складених дієслівних конструкціях.",
    aliases: ["clitic climbing","subida do clítico","підняття клітики"],
    related: ["clitic-placement","personal-infinitive","complex-predicates"],
    status: "draft",
    origin: "handwritten",
    depth: "medium",
    ukrainianContrast: "high",
    intro: "У деяких складених дієслівних конструкціях клітика може реалізуватися не безпосередньо біля інфінітива, до якого вона семантично належить. Це не вільне переміщення: можливість і форма залежать від конкретної конструкції, різновиду та регістру.",
    definition: "Clitic climbing — синтаксичне розміщення клітики поза тим дієслівним компонентом, з яким вона пов’язана як аргумент.",
    examples: [
      { pt: "Quero-o ver.", uk: "Я хочу його побачити.", variety: "PT" },
      { pt: "Não o quero ver.", uk: "Я не хочу його бачити.", variety: "PT" }
    ],
    mistakes: [
      mistake("вважати позицію клітики вільною","визначати тип перифрази та цільовий стандарт","Розподіл залежить від конструкції, а не лише від бажання мовця.","predicted-l1-transfer","medium")
    ],
    ukrainian: "Українська не має тотожної системи клітичного розміщення, тому позицію треба вчити разом із конструкцією.",
    regional: "Не узагальнюйте одну модель на всі перифрази та всі різновиди португальської.",
  }
];
