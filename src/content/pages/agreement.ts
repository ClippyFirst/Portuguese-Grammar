import type { GrammarPage } from "../types";

export const pages: GrammarPage[] = [
  {
    id: "agreement-sv",
    slug: "subject-verb",
    category: "agreement",
    titleUk: "Узгодження підмета з дієсловом",
    titlePt: "Concordância verbal",
    titleEn: "Subject-verb agreement",
    summary: "Кілька підметів, колективи, a gente, haver.",
    aliases: ["узгодження дієслова", "concordância verbal"],
    related: ["se-agreement", "nos-a-gente", "haver", "existential"],
    intro:
      "Дієслово узгоджується з підметом у особі й числі: `os miúdos chegaram`. Кілька однорідних підметів зазвичай дають множину: `O João e a Ana chegaram`.\n\nВинятки, які ламають інтуїцію: екзистенційне `haver` не узгоджується (`havia muitas pessoas`); `a gente` бере 3-тю особу однини; з `se` пасивним дієслово часто узгоджується з іменною групою.",
    examples: [
      { pt: "Tu e eu sabemos disso.", uk: "Ти й я це знаємо." },
      { pt: "A gente vai sair.", uk: "Ми вийдемо.", note: "a gente + 3sg, не vamos." },
      { pt: "Havia três cadeiras.", uk: "Було три стільці." },
      { pt: "Vendem-se casas.", uk: "Продаються будинки.", note: "Пасивне se: множина." },
    ],
    mistakes: [
      {
        wrong: "A gente vamos.",
        right: "A gente vai. / Nós vamos.",
        why: "`A gente` граматично 3sg, навіть коли означає «ми».",
      },
      {
        wrong: "Haviam problemas.",
        right: "Havia problemas.",
        why: "Екзистенційне haver безособове.",
      },
    ],
    ukrainian: "Українське узгодження з «ми з тобою» ближче до множини. Не переносьте це на `a gente`.",

  },
  {
    id: "agreement-na",
    slug: "noun-adjective",
    category: "agreement",
    titleUk: "Узгодження іменника з прикметником",
    titlePt: "Concordância nominal",
    titleEn: "Nominal agreement",
    summary: "Кілька іменників, predicative, particípio.",
    aliases: ["узгодження прикметника"],
    related: ["adjective-agreement", "participle", "noun-gender", "gender-vs-ukrainian"],
    intro:
      "Прикметник, артикль, вказівний і присвійний узгоджуються з іменником у роді й числі: `estas casas antigas`.\n\nПри кількох іменниках різного роду предикативний прикметник зазвичай чоловічий множини: `O rapaz e a rapariga estão cansados.` Атрибутив після групи може хилитися до ближчого іменника.",
    examples: [
      { pt: "Uma questão difícil.", uk: "Складне питання." },
      { pt: "Os livros e as revistas novos / novas.", uk: "Нові книжки й журнали.", note: "Можливе узгодження з ближчим або спільне чоловіче множини." },
    ],
    mistakes: [
      {
        wrong: "uma problema séria",
        right: "um problema sério",
        why: "`Problema` — чоловічий рід, попри -a. Прикметник іде за родом іменника, не за українським «проблема».",
      },
    ],

  },
  {
    id: "agreement-special",
    slug: "special",
    category: "agreement",
    titleUk: "Особливі випадки узгодження",
    titlePt: "Casos especiais",
    titleEn: "Special agreement",
    summary: "todo, é / são, збірні іменники, смислове узгодження.",
    aliases: ["особливе узгодження", "são", "é"],
    related: ["agreement-sv", "existential", "dates-time", "indefinites"],
    intro:
      "`É` vs `são` з числівниками: `São duas horas.` (множина), але `É uma hora.` Колективи (`a maioria`, `um grupo`) допускають формальну однину або смислову множину: `A maioria concordou` / `A maioria concordaram` — друга частіша в мовленні.\n\n`Tudo` — середній/нейтральний квантор: `Tudo bem.` `Todos` узгоджується: `Todos os dias`.",
    examples: [
      { pt: "São três da tarde.", uk: "Треття година дня." },
      { pt: "A maioria dos alunos chegou tarde.", uk: "Більшість учнів прийшла пізно." },
      { pt: "Fui eu.", uk: "Це був/була я.", note: "Узгодження з 1sg, не з «це»." },
    ],
    mistakes: [
      {
        wrong: "É duas horas.",
        right: "São duas horas.",
        why: "Години в множині вимагають são — окрім uma hora.",
      },
    ],

  },
];
