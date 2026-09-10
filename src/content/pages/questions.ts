import type { GrammarPage } from "../types";

export const pages: GrammarPage[] = [
  {
    id: "questions-yesno",
    slug: "yes-no",
    category: "questions",
    titleUk: "Загальні питання",
    titlePt: "Perguntas totais",
    titleEn: "Yes/no questions",
    summary: "Інтонація, чи, inversion у PT-PT.",
    aliases: ["загальні питання", "sim não"],
    related: ["question-word-order", "questions-br-pt"],
    intro:
      "Питання так/ні в португальській часто має той самий порядок, що й розповідь, плюс питальна інтонація і `?` на письмі: `Você vem?` / `Vens?`\n\nІнверсія `Vem o João?` живіша в PT-PT і в формальному стилі. Частка на кшталт українського «чи» не обов'язкова; `é que` може пом'якшувати або фокусувати: `É que tu vens?`",
    formulas: [
      { pattern: "S + V ?", br: "Você vem?", ptEu: "Vens? / Vem o João?" },
    ],
    examples: [
      { pt: "Estás bem?", uk: "Ти в порядку?", variety: "PT" },
      { pt: "Você está bem?", uk: "Ти в порядку?", variety: "BR" },
      { pt: "Chegou o correio?", uk: "Пошта вже прийшла?" },
      { pt: "Não queres café?", uk: "Не хочеш кави?" },
    ],
    mistakes: [
      {
        wrong: "Estás bem? Чи ти добре?",
        right: "Estás bem?",
        why: "Не калькуйте українське «чи» окремим словом у кожне загальне питання.",
      },
    ],
    related: ["question-word-order", "questions-br-pt", "inversion"],
  },
  {
    id: "wh-questions",
    slug: "wh",
    category: "questions",
    titleUk: "Спеціальні питання",
    titlePt: "Perguntas parciais",
    titleEn: "Wh-questions",
    summary: "o que, quem, onde, quando, como, por que.",
    aliases: ["спеціальні питання", "o que", "quem"],
    related: ["interrogative-pronouns", "porque-forms"],
    intro:
      "Питальне слово зазвичай стоїть на початку: `O que queres?`, `Onde moras?`, `Quando chegas?`, `Como está?`, `Quanto custa?`\n\n`Que` перед іменником: `Que horas são?` `O que` — коли немає іменника. `Quem` — про особу. Після прийменника: `Com quem falas?`, `De que se trata?`",
    examples: [
      { pt: "O que aconteceu?", uk: "Що сталося?" },
      { pt: "Quem é aquela pessoa?", uk: "Хто та людина?" },
      { pt: "A que horas começa?", uk: "О котрій починається?" },
      { pt: "Por que / Porque é que não vieste?", uk: "Чому ти не прийшов/прийшла?" },
    ],
    mistakes: [
      {
        wrong: "Que tu queres?",
        right: "O que tu queres? / Que queres tu?",
        why: "Самостійне «що?» — `o que` (або `que` в деяких фіксованих схемах), не голе `que tu`.",
      },
    ],
    related: ["interrogative-pronouns", "porque-forms", "question-word-order"],
  },
  {
    id: "question-word-order",
    slug: "word-order",
    category: "questions",
    titleUk: "Порядок слів у питанні",
    titlePt: "Ordem na interrogação",
    titleEn: "Question word order",
    summary: "З інверсією і без.",
    aliases: ["порядок слів питання"],
    related: ["questions-yesno", "questions-br-pt"],
    intro:
      "Два продуктивні порядки: без інверсії (`Onde você mora?`) і з інверсією (`Onde mora você?` / `Onde moras?`). Другий природніший у PT-PT і на письмі; перший — у розмовному PT-BR.\n\nДовгий підмет частіше лишається перед дієсловом навіть у Європі, якщо інакше речення важке.",
    examples: [
      { pt: "Onde é que tu moras?", uk: "Де ти живеш?", note: "é que — розмовний каркас питання в обох варіантах." },
      { pt: "O que o teu irmão disse?", uk: "Що сказав твій брат?" },
    ],
    mistakes: [
      {
        wrong: "обов'язкова інверсія як в англійській",
        right: "інтонація + питальне слово вже роблять питання",
        why: "Do/does-інверсія не переноситься. Португальська не потребує допоміжного дієслова для питання.",
      },
    ],
    related: ["questions-yesno", "questions-br-pt", "clefts"],
  },
  {
    id: "questions-br-pt",
    slug: "br-pt",
    category: "questions",
    titleUk: "Питання: PT-BR vs PT-PT",
    titlePt: "Interrogação BR/PT",
    titleEn: "Questions BR vs PT",
    summary: "Você vai? vs Vai o João?",
    aliases: ["питання бразилія португалія"],
    related: ["questions-yesno", "pt-br-pt-pt"],
    intro:
      "У розмовному PT-BR питання так/ні майже завжди зберігає розповідний порядок: `Você vai no cinema?` У PT-PT частіша інверсія або голе дієслово 2-ї особи: `Vais ao cinema?`\n\nКаркас `é que` (`Onde é que tu estás?`) поширений в обох варіантах і часто найбезпечніший нейтральний вибір.",
    examples: [
      { pt: "Você já comeu?", uk: "Ти вже їв/їла?", variety: "BR" },
      { pt: "Já comeste?", uk: "Ти вже їв/їла?", variety: "PT" },
    ],
    brPt: "Препозиція `a` vs `em` у напрямку (ao cinema / no cinema) часто йде в пакеті з цими питальними схемами. Див. прийменники.",
    related: ["questions-yesno", "pt-br-pt-pt", "prep-em", "prep-a"],
  },
  {
    id: "porque-forms",
    slug: "porque",
    category: "questions",
    titleUk: "porque / por que / porquê / por quê",
    titlePt: "porque e variantes",
    titleEn: "porque forms",
    summary: "Чотири написання причини й питання.",
    aliases: ["porque", "por que", "porquê"],
    related: ["wh-questions", "prep-por"],
    intro:
      "Бразильська шкільна традиція розрізняє чотири написання. У Португалії система простіша: `porque` (причина), `porque é que` / `por que` (питання), `porquê` (іменник «причина»).\n\nПрактично:\n- причина: `porque`\n- питання «чому?»: PT-BR `por que` (у середині) / `por quê` (в кінці); PT-PT часто `porque` або `porque é que`\n- іменник: `o porquê`",
    tables: [
      {
        headers: ["Функція", "PT-BR (шкільна норма)", "PT-PT (типово)"],
        rows: [
          ["Причина «бо»", "porque", "porque"],
          ["Питання «чому»", "por que ... ?", "porque / porque é que"],
          ["Питання в кінці", "por quê?", "porquê?"],
          ["Іменник", "o porquê", "o porquê"],
        ],
      },
    ],
    examples: [
      { pt: "Fiquei em casa porque chovia.", uk: "Я лишився/лишилася вдома, бо йшов дощ." },
      { pt: "Por que você ficou em casa?", uk: "Чому ти лишився/лишилася вдома?", variety: "BR" },
      { pt: "Porque é que ficaste em casa?", uk: "Чому ти лишився/лишилася вдома?", variety: "PT" },
      { pt: "Não entendi o porquê.", uk: "Я не зрозумів/зрозуміла причини." },
    ],
    mistakes: [
      {
        wrong: "писати porquê замість porque в причині",
        right: "Fiquei porque chovia.",
        why: "`Porquê` з циркумфлексом — іменник або ізольоване питання, не сполучник причини.",
      },
    ],
    related: ["wh-questions", "causal-clauses", "prep-por"],
  },
];
