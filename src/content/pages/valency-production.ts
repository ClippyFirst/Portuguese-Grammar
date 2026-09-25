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
    id: "verb-government-infinitive", slug: "verb-government-infinitive", category: "valency",
    titleUk: "Керування дієслів з інфінітивом", titlePt: "Regência verbal com infinitivo", titleEn: "Verb government with infinitive",
    summary: "Вибір прийменника або його відсутність перед інфінітивом у дієслівних моделях.",
    aliases: "verb infinitive government,regência,infinitivo",
    related: ["government-overview","verb-valency-frames","personal-infinitive"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Дієслова можуть керувати інфінітивом без прийменника або з a/de та іншими моделями. Український переклад не передбачає цей вибір автоматично.",
    definition: "Керування інфінітивом — вибір синтаксичної моделі інфінітивного доповнення конкретною лексемою.",
    uses: "",
    examples: [{"pt":"Comecei a estudar.","uk":"Я почав/почала вчитися."},{"pt":"Tentei resolver o problema.","uk":"Я спробував/спробувала розв'язати проблему."}],
    mistakes: [mistake("вибирати прийменник за українським перекладом","вчити дієслово разом із рамкою","Прийменник є частиною конкретної моделі керування.","predicted-l1-transfer","high")],
    ukrainian: "Український інфінітив часто не показує тієї самої прийменникової рамки, тому дієслово + модель треба вчити разом.",
    regional: "Частина моделей відрізняється за різновидами; їх треба позначати окремо.",
    brPt: "",
    reviewStatus: "review-needed"
  }),
  draft({
    id: "verb-government-alternations", slug: "verb-government-alternations", category: "valency",
    titleUk: "Альтернації дієслівного керування", titlePt: "Alternâncias de regência verbal", titleEn: "Verb government alternations",
    summary: "Зміни рамки, які можуть супроводжувати зміну значення, конструкції або різновиду.",
    aliases: "verb government alternations,alternâncias,regência",
    related: ["verb-valency-frames","government-overview","verb-meaning-alternations"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Одна лексема може мати кілька рамок. Альтернація не означає автоматичну взаємозамінність: перевіряйте значення, аргументи, різновид і регістр.",
    definition: "Альтернація керування — систематична відмінність у способі реалізації аргумента певної лексеми.",
    uses: "",
    examples: [{"pt":"Lembro-me do nome.","uk":"Я пам'ятаю ім'я.","variety":"PT"},{"pt":"Esqueci o nome.","uk":"Я забув/забула ім'я."}],
    mistakes: [mistake("вважати всі рамки вільними синонімами","перевіряти значення та лексичну модель","se або прийменник можуть бути частиною окремої лексико-синтаксичної моделі.","editorial","high")],
    ukrainian: "Одна українська форма може відповідати кільком португальським рамкам, тому переклад недостатній для вибору.",
    regional: "Потрібні окремі докази для конкретних BR/PT альтернатив.",
    brPt: "",
    reviewStatus: "review-needed"
  }),
];
