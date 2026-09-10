import type { GrammarPage } from "../types";

export const pages: GrammarPage[] = [
  {
    id: "word-formation-affixes",
    slug: "affixes",
    category: "word-formation",
    titleUk: "Префікси і суфікси",
    titlePt: "Prefixos e sufixos",
    titleEn: "Prefixes and suffixes",
    summary: "Продуктивна морфологія.",
    aliases: ["префікси", "суфікси", "des-", "in-", "-ção"],
    related: ["diminutives", "augmentatives"],
    intro:
      "Португальська активно утворює слова префіксами й суфіксами. Для граматики важливі не списки лексики, а продуктивні моделі: заперечення (`in-`, `des-`, `i-`), номіналізація (`-ção`, `-mento`, `-idade`), прикметники (`-ável`, `-oso`), дієслова (`-izar`, `-ecer`).\n\nЗменшувальні `-inho/-zinho` і збільшувальні `-ão` мають граматичні наслідки (рід, оцінка) — див. окремі статті.",
    examples: [
      { pt: "feliz → infeliz; fazer → desfazer", uk: "щасливий → нещасливий; робити → скасовувати/розбирати" },
      { pt: "formar → formação; mover → movimento", uk: "формувати → формування; рухати → рух" },
      { pt: "casa → casinha; papel → papelzinho", uk: "будинок → будиночок; папір → папірчик" },
    ],
    mistakes: [
      {
        wrong: "inlegal",
        right: "ilegal",
        why: "Перед l префікс in- асимілюється: ilegal, ilimitado.",
      },
    ],
    related: ["diminutives", "augmentatives", "noun-gender"],
  },
];
