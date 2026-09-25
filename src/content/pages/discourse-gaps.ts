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
    id: "discourse-reference", slug: "reference", category: "discourse",
    titleUk: "Референція в дискурсі", titlePt: "Referência no discurso", titleEn: "Discourse reference",
    summary: "Як артиклі, займенники та лексичний повтор утримують референт у тексті.",
    aliases: "discourse reference,referência,anaphora",
    related: ["discourse-overview","cohesion-reference","articles-definite"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Референт може бути введений, підтриманий, змінений або повторно ідентифікований. Вибір між займенником, означеною групою та повтором іменника залежить від доступності референта в дискурсі.",
    definition: "Дискурсивна референція — спосіб підтримувати ідентифікацію учасників тексту між висловленнями.",
    uses: "",
    examples: [{"pt":"Vi a Maria. Ela estava cansada.","uk":"Я побачив/побачила Марію. Вона була втомлена."},{"pt":"Comprei um livro. O livro é sobre música.","uk":"Я купив/купила книжку. Книжка про музику."}],
    mistakes: [mistake("повторювати займенник без урахування референта","перевіряти, який референт доступний читачеві","Займенник може бути двозначним, а означена група може краще відновлювати референт.","editorial","medium")],
    ukrainian: "Українська також використовує анафору, але португальські артиклі додають інформацію про статус іменної групи.",
    regional: "Особливо важливо в довших текстах та при кількох потенційних референтах.",
    brPt: "",
    reviewStatus: "review-needed"
  }),
];
