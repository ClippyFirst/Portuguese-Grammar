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
    related: ["question-word-order", "questions-br-pt", "inversion"],
    intro:
      "Питання так/ні в португальській часто має той самий порядок, що й розповідь, плюс питальна інтонація і `?` на письмі: `Você vem?` / `Vens?`\n\nІнверсія на кшталт `Vem o João?` засвідчена в PT-PT та в певних письмових/стилістичних контекстах; розподіл залежить від типу конструкції й різновиду. Окремий еквівалент українського «чи» для звичайного питання так/ні не є обов'язковим; конструкція `é que` широко вживається в питальних моделях і може організовувати фокус: `Onde é que tu estás?`",
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
    related: ["interrogative-pronouns", "porque-forms", "question-word-order"],
    intro:
      "Питальне слово зазвичай стоїть на початку: `O que queres?`, `Onde moras?`, `Quando chegas?`, `Como está?`, `Quanto custa?`\n\n`Que` вживається, зокрема, як визначник перед іменником: `Que horas são?`; `o que` — поширена займенникова модель, коли запитується про річ/ситуацію без названого іменника. `Quem` — про особу. Після прийменника: `Com quem falas?`, `De que se trata?`",
    examples: [
      { pt: "O que aconteceu?", uk: "Що сталося?" },
      { pt: "Quem é aquela pessoa?", uk: "Хто та людина?" },
      { pt: "A que horas começa?", uk: "О котрій починається?" },
      { pt: "Por que você não veio?", uk: "Чому ти не прийшов/прийшла?", variety: "BR" },
      { pt: "Porque é que não vieste?", uk: "Чому ти не прийшов/прийшла?", variety: "PT" },
    ],
    mistakes: [
      {
        wrong: "Que tu queres?",
        right: "O que tu queres? / Que queres tu?",
        why: "Самостійне «що?» — `o que` (або `que` в деяких фіксованих схемах), не голе `que tu`.",
      },
    ],

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
    related: ["questions-yesno", "questions-br-pt", "clefts"],
    intro:
      "Порядок слів у спеціальних питаннях залежить від структури питання, різновиду, регіону й регістру. `Onde você mora?` і `Onde moras?` — звичайні моделі; постпозиція підмета (`Onde mora o João?`) теж можлива, особливо коли підмет є новою інформацією. Не зводьте це до механічного правила «PT-PT інвертує, PT-BR не інвертує».\n\nДовгий підмет часто лишається перед дієсловом, якщо постпозиція зробила б речення важчим; інформаційна структура важливіша за просту формулу інверсії.",
    examples: [
      { pt: "Onde é que tu moras?", uk: "Де ти живеш?", note: "`é que` — поширена питальна конструкція в обох різновидах; її дистрибуція залежить від типу питання, регістру й регіону." },
      { pt: "O que o teu irmão disse?", uk: "Що сказав твій брат?" },
    ],
    mistakes: [
      {
        wrong: "обов'язкова інверсія як в англійській",
        right: "інтонація + питальне слово вже роблять питання",
        why: "Do/does-інверсія не переноситься. Португальська не потребує допоміжного дієслова для формування питання, хоча порядок слів може змінюватися з інших синтаксичних та інформаційних причин.",
      },
    ],

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
    related: ["questions-yesno", "pt-br-pt-pt", "prep-em", "prep-a"],
    intro:
      "У розмовному PT-BR питання так/ні дуже часто зберігає розповідний порядок: `Você vai no cinema?` У PT-PT частіша інверсія або голе дієслово 2-ї особи: `Vais ao cinema?`\n\nКаркас `é que` (`Onde é que tu estás?`) поширений в обох різновидах; його не слід подавати як обов'язковий нейтральний шаблон для всіх питань.",
    examples: [
      { pt: "Você já comeu?", uk: "Ти вже їв/їла?", variety: "BR" },
      { pt: "Já comeste?", uk: "Ти вже їв/їла?", variety: "PT" },
    ],
    brPt: "Препозиція `a` vs `em` у напрямку (ao cinema / no cinema) часто йде в пакеті з цими питальними схемами. Див. прийменники.",

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
    related: ["wh-questions", "prep-por", "causal-clauses"],
    intro:
      "У бразильській шкільній орфографічній практиці розрізняють чотири написання: У PT-PT в питальних реченнях нормативно вживається `porque` як питальний прислівник: `Porque vieste?`, `Porque é que vieste?`. `Por que` теж можливе, коли `por` є прийменником перед `que` у моделях на кшталт `por que motivo`, `por que razão`. `Porquê` може бути іменником «причина» (`o porquê`) або питальним прислівником у відповідних позиціях; у PT-PT форма `porquê` може стояти й у кінці питання (`Porquê?`). У PT-BR для питального «чому?» типове окреме написання `por que`, а в кінці `por quê`.\n\nПрактично:\n- причина: `porque`\n- питання «чому?»: PT-BR `por que` (у середині) / `por quê` (в кінці); PT-PT `porque` / `porque é que`; окреме `por que` зберігається в моделях `por que motivo`, `por que razão`\n- іменник: `o porquê`",
    tables: [
      {
        headers: ["Функція", "PT-BR (шкільна норма)", "PT-PT (типово)"],
        rows: [
          ["Причина «бо»", "porque", "porque"],
          ["Питання «чому»", "por que ... ?", "porque / porque é que"],
          ["Питання в кінці", "por quê?", "porquê? / por que motivo?"],
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

  },
];
