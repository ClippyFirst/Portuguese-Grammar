import type { GrammarPage } from "../types";

export const pages: GrammarPage[] = [
  {
    id: "negation-nao",
    slug: "nao",
    category: "negation",
    titleUk: "não",
    titlePt: "não",
    titleEn: "não",
    summary: "Реченнєве заперечення й позиція.",
    aliases: ["não", "заперечення", "не"],
    related: ["double-negation", "proclisis", "clitic-placement"],
    intro:
      "`Não` — основний маркер реченнєвого заперечення. Стоїть безпосередньо перед дієслівною групою: `Não sei.`, `Não estou a trabalhar.` / `Não estou trabalhando.`\n\nПеред клитиком `não` тягне проклізу: `Não me digas.` Це один із найжорсткіших тригерів colocação pronominal.\n\n`Não` також може заперечувати складник: `quero café, não chá`.",
    formulas: [
      { pattern: "NEG + V", negative: "não + V", note: "Клитик стоїть між não і дієсловом: não + CL + V." },
    ],
    examples: [
      { pt: "Não quero nada.", uk: "Я нічого не хочу." },
      { pt: "Ela não veio.", uk: "Вона не прийшла." },
      { pt: "Não o vi.", uk: "Я його не бачив/бачила.", variety: "PT" },
      { pt: "Não me interessa.", uk: "Мені байдуже." },
    ],
    mistakes: [
      {
        wrong: "Quero não.",
        right: "Não quero.",
        why: "Реченнєве `não` не ставиться після дієслова, як українське «хочу ні» в еліпсисі. Коротке `não` як відповідь — окреме речення.",
      },
    ],
    ukrainian: "Українське «не» клеїться до дієслова. Португальське `não` — окреме слово з фіксованим місцем і впливом на клітики.",

  },
  {
    id: "negation-ninguem",
    slug: "ninguem-nada",
    category: "negation",
    titleUk: "ninguém, nada, nenhum",
    titlePt: "ninguém, nada",
    titleEn: "ninguém, nada",
    summary: "Заперечні займенники й negative concord.",
    aliases: ["ninguém", "nada", "nenhum", "ніхто", "ніщо"],
    related: ["double-negation", "indefinites", "negation-nao"],
    intro:
      "`Ninguém`, `nada`, `nenhum/nenhuma` — заперечні квантори. Якщо вони стоять **після** дієслова, речення все одно потребує `não`: `Não vi ninguém.`\n\nЯкщо заперечне слово стоїть **перед** дієсловом, `não` не ставлять: `Ninguém veio.` Це і є negative concord, а не «подвійна помилка».",
    formulas: [
      { pattern: "NEG + V + ninguém/nada" },
      { pattern: "Ninguém/Nada + V", note: "Превербальна позиція замінює não." },
    ],
    examples: [
      { pt: "Não conheço ninguém aqui.", uk: "Я нікого тут не знаю." },
      { pt: "Ninguém sabe.", uk: "Ніхто не знає." },
      { pt: "Não disse nada.", uk: "Нічого не сказав/сказала." },
      { pt: "Nenhuma resposta chegou.", uk: "Жодної відповіді не надійшло." },
    ],
    mistakes: [
      {
        wrong: "Vi ninguém.",
        right: "Não vi ninguém.",
        why: "Поствербальний заперечний займенник вимагає não. Без нього речення неграматичне.",
      },
      {
        wrong: "Não ninguém veio.",
        right: "Ninguém veio.",
        why: "Перед дієсловом ninguém уже несе заперечення; друге não зайве.",
      },
    ],
    ukrainian:
      "Українське «ніхто не прийшов» має і ніхто, і не. Португальська розкладає це за позицією: або `Ninguém veio`, або `Não veio ninguém`.",

  },
  {
    id: "nunca-jamais",
    slug: "nunca-jamais",
    category: "negation",
    titleUk: "nunca, jamais, nem",
    titlePt: "nunca, jamais, nem",
    titleEn: "nunca, jamais, nem",
    summary: "Часове й координативне заперечення.",
    aliases: ["nunca", "jamais", "nem", "ніколи"],
    related: ["ja-ainda", "negation-nao", "double-negation"],
    intro:
      "`Nunca` — «ніколи». `Jamais` сильніше або книжніше, часто в обіцянках і клятвах. Обидва в превербальній позиції самі заперечують речення: `Nunca vi isso.` Після дієслова знову з'являється `não`: `Não vi isso nunca.`\n\n`Nem` — і «ні... ні», і додавання заперечення: `Nem eu sei.`",
    examples: [
      { pt: "Nunca fui ao Brasil.", uk: "Я ніколи не був/була в Бразилії." },
      { pt: "Não volto jamais.", uk: "Я більше ніколи не повернуся." },
      { pt: "Nem comeu nem bebeu.", uk: "Не їв/їла й не пив/пила." },
      { pt: "Não gosto de chá nem de café.", uk: "Не люблю ні чаю, ні кави." },
    ],
    markers: ["nunca", "jamais", "nem", "jamais jamais"],
    mistakes: [
      {
        wrong: "Eu não ніколи vi.",
        right: "Nunca vi. / Não vi nunca.",
        why: "Часове заперечення виражається nunca/jamais, а не калькою «не ніколи».",
      },
    ],

  },
  {
    id: "double-negation",
    slug: "double-negation",
    category: "negation",
    titleUk: "Подвійне заперечення",
    titlePt: "Negação concordante",
    titleEn: "Negative concord",
    summary: "Não vi ninguém — норма, не «плюс».",
    aliases: ["подвійне заперечення", "concordância negativa"],
    related: ["negation-ninguem", "negation-nao", "indefinites"],
    intro:
      "Португальська має **negative concord**: кілька заперечних елементів у реченні складають одне заперечення, а не скасовують одне одного.\n\n`Não vi ninguém` = «я нікого не бачив». Це нормативно. Англійська логіка «two negatives make a positive» тут шкідлива.\n\nУкраїнська ближча: «ніхто нічого не сказав» теж узгоджене заперечення, не арифметика мінусів.",
    formulas: [
      { pattern: "não + V + ninguém/nada/nunca/nenhum" },
      { note: "Превербальний заперечний квантор витісняє não: Ninguém disse nada." },
    ],
    uses: [
      {
        title: "Обов'язкове não при поствербальному кванторі",
        body: "Якщо ninguém/nada/nunca стоять після дієслова, não перед дієсловом обов'язкове.",
        examples: [{ pt: "Não disse nada a ninguém.", uk: "Нікому нічого не сказав/сказала." }],
      },
      {
        title: "Ланцюжки заперечень",
        body: "Можна комбінувати кілька елементів: вони підсилюють одне заперечення.",
        examples: [{ pt: "Nunca ninguém me explicou nada.", uk: "Ніхто мені ніколи нічого не пояснив." }],
      },
    ],
    examples: [
      { pt: "Não há nada aqui.", uk: "Тут нічого немає." },
      { pt: "Não conheço nenhum médico.", uk: "Я не знаю жодного лікаря." },
    ],
    mistakes: [
      {
        wrong: "Não vi alguém. (коли мали на увазі «нікого»)",
        right: "Não vi ninguém.",
        why: "`Alguém` у заперечному реченні зазвичай не дає значення «ніхто». Для цього потрібен ninguém.",
      },
      {
        wrong: "пояснення «два заперечення = ствердження»",
        right: "Não vi ninguém = нікого не бачив",
        why: "Це не логіка висловлювання з англійської граматики. У португальській concordância negativa — граматичне правило.",
      },
    ],
    ukrainian:
      "Не бійтеся «подвійного» заперечення: ваша українська вже так працює. Пастка радше в виборі alguém замість ninguém після não.",

  },
];
