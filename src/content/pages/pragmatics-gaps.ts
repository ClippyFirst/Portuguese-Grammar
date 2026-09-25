import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
});

export const pages: GrammarPage[] = [
  draft({
    id: "discourse-and-pragmatics", slug: "discourse-pragmatics", category: "pragmatics",
    titleUk: "Дискурс і прагматика", titlePt: "Discurso e pragmática", titleEn: "Discourse and pragmatics",
    summary: "Як граматичні форми працюють у реальній комунікативній ситуації.",
    aliases: ["discourse pragmatics","discurso","pragmática"],
    related: ["discourse-overview","pragmatics-overview","speech-acts"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Граматична форма не визначає повністю комунікативний ефект. Питання може бути проханням, заперечення — корекцією, а порядок слів — сигналом теми або фокусу.",
    definition: "Дискурс і прагматика описують використання граматичних і лексичних засобів у контексті взаємодії.",
    uses: [],
    examples: [{"pt":"Pode fechar a janela?","uk":"Можете зачинити вікно?","purpose":"comprehension"},{"pt":"Isso eu não sei.","uk":"Ось цього я не знаю.","purpose":"contrast"}],
    mistakes: [mistake("перекладати форму без урахування мовленнєвої дії","визначати, що мовець робить висловленням","Форма питання не гарантує, що очікується лише інформаційна відповідь.","editorial","medium")],
    ukrainian: "Українська теж широко використовує непрямі мовленнєві дії, тому корисно порівнювати конкретні конвенції, а не сам принцип.",
    regional: "Прагматичні ефекти особливо залежать від ситуації, стосунків і регістру.",
    brPt: "",
  }),
];
