import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
});

export const pages: GrammarPage[] = [
  draft({
    id: "clitic-clusters", slug: "clitic-clusters", category: "pronouns",
    titleUk: "Кластери клітик", titlePt: "Combinações de clíticos", titleEn: "Clitic clusters",
    summary: "Поєднання двох клітик та їхній порядок.",
    aliases: ["clitic clusters","clitic combinations","mo","lho","no-lo"],
    related: ["clitic-pronouns","object-pronouns","clitic-placement"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Коли один предикат має два займенникові аргументи, португальська може поєднувати клітики в один кластер. Форма кластера залежить від ролей і морфологічного злиття, а не від буквального перекладу українських «йому/його».",
    definition: "Кластер клітик — послідовність ненаголошених займенникових форм, яка реалізує більше одного аргументного компонента.",
    uses: [],
    examples: [{"pt":"Dei-lho ontem.","uk":"Я дав/дала йому це вчора.","variety":"PT"}],
    mistakes: [mistake("вчити lho як окреме слово","розкладати кластер на ролі та форми","lhe + o → lho в відповідній моделі.","editorial","high")],
    ukrainian: "Українська має окремі форми «йому це», тому структура португальського кластера не прозора з перекладу.",
    regional: "Кластери особливо чутливі до стандарту, письмового/усного каналу та різновиду.",
    brPt: "",
  }),
;
