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
    summary: "Як клітика може з'являтися біля матричного дієслова у складених конструкціях, замість позиції біля інфінітива.",
    aliases: ["clitic climbing","subida do clítico","підняття клітики"],
    related: ["clitic-placement","personal-infinitive","complex-predicates"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "У складених дієслівних конструкціях клітика може бути пов'язана семантично з інфінітивом, але поверхнево стояти біля іншого дієслова. Порівняйте Quero vê-lo і Quero-o ver: у другій моделі o стоїть біля querer, але інтерпретується як об'єкт нижчого ver. Це не довільне пересування: можливість залежить від типу складеного предиката, різновиду та регістру. За запереченням маємо Não o quero ver, де não впливає на позицію клітики.",
    definition: "Clitic climbing — синтаксичне розміщення клітики поза тим дієслівним компонентом, з яким вона пов’язана як аргумент.",
    examples: [
      { pt: "Quero vê-lo.", uk: "Я хочу побачити його." },
      { pt: "Quero-o ver.", uk: "Я хочу його побачити.", variety: "PT" },
      { pt: "Não o quero ver.", uk: "Я не хочу його бачити.", variety: "PT" }
    ],
    mistakes: [
      mistake("вважати позицію клітики вільною","визначати тип складеного предиката та цільовий стандарт","Clitic climbing має конструкційні обмеження.","predicted-l1-transfer","high"),
      mistake("Quero-o ver → трактувати o як об'єкт querer","аналізувати o як клітику, пов'язану з ver","Лінійна позиція не тотожна аргументній ролі.","predicted-l1-transfer","high")
    ],
    ukrainian: "Українська не має тотожної системи клітичного розміщення, тому позицію треба вчити разом із конструкцією.",
    regional: "Не узагальнюйте одну модель на всі перифрази та всі різновиди португальської.",
  }
];
