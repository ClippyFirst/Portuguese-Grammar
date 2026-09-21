import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "cardinals",
    slug: "cardinals",
    category: "numerals",
    titleUk: "Кількісні числівники",
    titlePt: "Cardinais",
    titleEn: "Cardinal numbers",
    summary:
      "um/uma, dois/duas, milhão: узгодження роду й різниця між mil milhões і bilhões.",
    aliases: ["числівники", "números", "milhão", "cardinais", "кількісні"],
    related: ["ordinals", "dates-time", "adjective-agreement", "gender-number-person"],
    intro:
      "Кількісні числівники (`numerais cardinais`) відповідають на «скільки?». Більшість незмінні (`três`, `quatro`, `vinte`), але найчастотніші **узгоджуються в роді**: `um` / `uma`, `dois` / `duas`. Це місце, де українці часто ставлять `dois` перед жіночим іменником.\n\n`Mil` незмінне: `dois mil`, `duas mil` (рід бере `duas`, не `mil`). Починаючи з `milhão`, числівник поводиться як **іменник**: `um milhão de pessoas`, `dois milhões de euros`. Перед ним — артикль або інший числівник, після — `de` + іменник.\n\nОкремо стоїть шкала великих чисел. **PT-PT** традиційно тримає довгу шкалу: `mil milhões` = 10⁹, `bilião` = 10¹². **PT-BR** у пресі й фінансах часто короткошкальний: `bilhão` = 10⁹. Не змішуйте ці системи в одному тексті.",
    formulas: [
      {
        label: "Узгодження 1 і 2",
        pattern: "um / uma + N    dois / duas + N",
        note: "Рід числівника = рід іменника: uma casa, duas casas, dois livros.",
      },
      {
        label: "Мільйон і вище",
        pattern: "Num + milhão(ões) + de + N",
        note: "um milhão de habitantes; dois milhões de euros. Не: um milhão habitantes.",
      },
    ],
    formation:
      "0–15 мають окремі слова (`zero`, `um`, `dois` … `quinze`). 16–19 — `dezasseis` (PT-PT) / `dezesseis` (PT-BR), `dezassete`/`dezessete`, `dezoito`, `dezanove`/`dezenove`. Десятки: `vinte`, `trinta`, `quarenta`… Зв'язок одиниці через `e`: `vinte e um`, `trinta e duas`.\n\nСотні: `cem` (рівно 100), `cento e…` (101+), `duzentos`/`duzentas`, `trezentos`/`trezentas` — рід узгоджується. `Mil` зазвичай уживається без `um`: `mil pessoas`. Форма `um mil` теж трапляється в певних контекстах, зокрема в бразильському юридичному й фінансовому письмі; це не варто зводити лише до розмовної мови.",
    uses: [
      {
        title: "Лічба й кількість",
        body: "Числівник стоїть перед іменником. Артикль з'являється, коли кількість означена: `os dois irmãos` «обоє братів / ті двоє братів». Без артикля — гола кількість: `dois irmãos`.",
      },
      {
        title: "Приблизна кількість",
        body: "`uns` / `umas` перед числівником дає «десь»: `umas vinte pessoas`. `cerca de`, `mais ou menos` — ті самі значення аналітично.",
      },
    ],
    examples: [
      ex("Um copo e uma chávena.", "Одна склянка й одна чашка."),
      ex("Dois irmãos e duas irmãs.", "Двоє братів і дві сестри."),
      ex("Cento e uma páginas.", "Сто одна сторінка. (`cento e uma`, не `cem e uma`)"),
      ex("Duzentos euros. / Duzentas pessoas.", "Двісті євро. / Двісті людей."),
      ex("Um milhão de habitantes.", "Мільйон мешканців."),
      ex("Dois milhões de euros.", "Два мільйони євро."),
      ex(
        "Mil milhões de pessoas.",
        "Мільярд людей (10⁹).",
        { variety: "PT", note: "У PT-PT 10⁹ — mil milhões; bilião зазвичай 10¹²." },
      ),
      ex(
        "Um bilhão de pessoas.",
        "Мільярд людей (10⁹, коротка шкала).",
        { variety: "BR", note: "У PT-BR bilhão часто = 10⁹. Уточнюйте шкалу в технічних текстах." },
      ),
    ],
    markers: ["um", "uma", "dois", "duas", "cem", "cento", "mil", "milhão", "mil milhões", "bilhão", "bilião"],
    exceptions:
      "`ambos` / `ambas` «обидва» узгоджується й часто бере артикль: `ambos os irmãos`. Після прийменника `entre` числівник звичайний. У часі `uma` обов'язкове: `é uma hora`, не `é um hora`. Телефонні номери й роки читають групами, не як «мільйони».",
    mistakes: [
      mistake(
        "dois casas, dois horas",
        "duas casas, duas horas",
        "`dois` — чоловічий, `duas` — жіночий. `casa` і `hora` жіночі.",
      ),
      mistake(
        "um milhão pessoas",
        "um milhão de pessoas",
        "Від `milhão` іменник іде з `de`. `Mil` навпаки: `mil pessoas` без `de`.",
      ),
      mistake(
        "cem e um livros",
        "cento e um livros",
        "`cem` уживається для 100 без наступної числової частини; перед подальшим числом — `cento e…`: `cento e um`, `cento e vinte`.",
      ),
    ],
    ukrainian:
      "Українське *два/дві/двоє* частково paralleлить `dois`/`duas`, але португальська не має окремої збірної форми на кшталт *двоє*. `dois irmãos` покриває і «два брати», і «двоє братів». Середнього роду немає: українське *одне вікно* буде `uma janela` або `um quarto`, залежно від роду іменника, не від «речовості».\n\nСлово *мільярд* — головна пастка. Український мільярд = 10⁹. У Португалії це `mil milhões` (а `bilião` часто 10¹²). У Бразилії `bilhão` у ЗМІ зазвичай 10⁹. Якщо сума важлива, пишіть цифру.",
    brPt:
      "Орфографія 16–19 і `cinquenta`/`cinqüenta` (після угоди — `cinquenta`): `dezasseis` (PT-PT) vs `dezesseis` (PT-BR), `dezanove` vs `dezenove`. Великі числа: PT-PT `mil milhões` / `bilião` (довга шкала в традиційній нормі); PT-BR `bilhão` / `trilhão` (коротка шкала в звичайному вжитку). `Um mil` частотніше в PT-BR; PT-PT віддає перевагу голому `mil`.",
    regional:
      "В африканських різновидах писемна норма ближча до PT-PT (`dezasseis`, `mil milhões`). У мовленні можуть з'являтися місцеві назви великих чисел — у формальному тексті тримайте європейську або явно бразильську шкалу.",
    tables: [
      {
        caption: "Форми, що змінюються",
        headers: ["Ч. р.", "Ж. р.", "Приклад"],
        rows: [
          ["um", "uma", "um livro / uma casa"],
          ["dois", "duas", "dois dias / duas noites"],
          ["duzentos", "duzentas", "duzentos euros / duzentas páginas"],
          ["trezentos", "trezentas", "так само до 900"],
          ["ambos", "ambas", "ambos os lados / ambas as mãos"],
        ],
      },
      {
        caption: "10⁹ і 10¹²",
        headers: ["Значення", "PT-PT (типово)", "PT-BR (типово)"],
        rows: [
          ["10⁶", "milhão", "milhão"],
          ["10⁹", "mil milhões", "bilhão (коротка шкала)"],
          ["10¹²", "bilião", "trilhão"],
        ],
        note: "У юридичних і фінансових текстах завжди дублюйте цифрою: 1 000 000 000.",
        scroll: true,
      },
    ],
  },
  {
    id: "ordinals",
    slug: "ordinals",
    category: "numerals",
    titleUk: "Порядкові числівники",
    titlePt: "Ordinais",
    titleEn: "Ordinals",
    summary:
      "primeiro, segundo, décimo: порядкові узгоджуються в роді й числі, як прикметники.",
    aliases: ["порядкові", "primeiro", "décimo", "ordinais"],
    related: ["cardinals", "dates-time", "adjective-agreement"],
    intro:
      "Порядкові (`numerais ordinais`) відповідають на «котрий за чергою?». Вони поводяться як **прикметники**: `o primeiro dia`, `a primeira vez`, `os primeiros passos`, `as primeiras linhas`.\n\nУ датах порядковий числівник типовий для **першого** числа місяця: `no dia 1.º de maio` / `no primeiro de maio`. Для решти днів уживають кількісні: `no dia 2 de maio`. Форми можуть залежати від жанру й локальної практики.\n\nНа письмі скорочення: `1.º`, `1.ª`, `2.º`, `2.ª` (крапка + підкреслений º/ª в традиції; у Unicode часто `1.º`).",
    formulas: [
      {
        label: "Узгодження",
        pattern: "ART + ordinal (рід/число) + N",
        note: "a terceira casa; os décimos lugares.",
      },
    ],
    formation:
      "`primeiro`, `segundo`, `terceiro`, `quarto`, `quinto`, `sexto`, `sétimo`, `oitavo`, `nono`, `décimo`. Далі — складені: `décimo primeiro`, `vigésimo`, `trigésimo`, `centésimo`, `milésimo`.\n\nЖіночий рід: `-o` → `-a` (`primeiro` / `primeira`). Множина: `primeiros` / `primeiras`. У складених узгоджуються **обидві** частини або принаймні останній елемент за нормою: `a vigésima primeira página`.",
    examples: [
      ex("É a primeira vez.", "Це вперше."),
      ex("Mora no segundo andar.", "Живе на другому поверсі."),
      ex("Os primeiros capítulos são lentos.", "Перші розділи повільні."),
      ex("A vigésima primeira página.", "Двадцять перша сторінка."),
      ex("1.º de janeiro / primeiro de janeiro", "Перше січня."),
      ex("Dia 3 de janeiro", "Третє січня. (кількісний, не terceiro)"),
    ],
    markers: ["primeiro", "segundo", "terceiro", "décimo", "1.º", "1.ª"],
    exceptions:
      "У змаганнях і класифікаціях часто `o primeiro`, `a segunda`. Королі й папи: `D. João VI` читається `Dom João Sexto`. Поверхи: PT-PT `rés do chão` (перший = рівень вулиці), `primeiro andar` — поверх вище; PT-BR `térreo` / `primeiro andar` — перевірте місцеву нумерацію.",
    mistakes: [
      mistake(
        "no segundo de maio (про дату 2 травня)",
        "no dia 2 de maio / em 2 de maio",
        "Порядковий у даті — майже лише для 1-го числа місяця.",
      ),
      mistake(
        "o primeiro vez",
        "a primeira vez",
        "Порядковий узгоджується з іменником: `vez` жіночий.",
      ),
    ],
    ukrainian:
      "Українське *перше травня*, *друге травня* всі порядкові. Португальська так не робить: лише 1-е число — `primeiro`, далі кількісні. Це не стилістика, а конвенція дат.",
    brPt:
      "Форми спільні (`primeiro`, `décimo`). Відрізняється нумерація поверхів і деякі скорочення в офіційних бланках. У PT-BR у розмові дати часто `dois de maio`; у PT-PT те саме, з варіантом `dois de Maio` у старій капіталізації місяців (після угоди місяці зазвичай з малої).",
    tables: [
      {
        caption: "1–10",
        headers: ["Ч. р. одн.", "Ж. р. одн.", "Ч. р. мн.", "Ж. р. мн."],
        rows: [
          ["primeiro", "primeira", "primeiros", "primeiras"],
          ["segundo", "segunda", "segundos", "segundas"],
          ["terceiro", "terceira", "terceiros", "terceiras"],
          ["quarto", "quarta", "quartos", "quartas"],
          ["quinto", "quinta", "quintos", "quintas"],
          ["décimo", "décima", "décimos", "décimas"],
        ],
      },
    ],
  },
  {
    id: "dates-time",
    slug: "dates-time",
    category: "numerals",
    titleUk: "Дати й час",
    titlePt: "Datas e horas",
    titleEn: "Dates and time",
    summary:
      "São duas horas, no dia 3, em 2024: артиклі, прийменники й узгодження в годиннику та календарі.",
    aliases: ["час", "дата", "horas", "dias", "datas", "години"],
    related: ["cardinals", "ordinals", "prep-em", "prep-a", "articles-definite"],
    intro:
      "Години в португальській — іменник `hora` у потрібному числі, узгоджений з дієсловом: `É uma hora.` `São duas horas.` Це не калька українського *зараз дві години* з середнім родом.\n\nДати будуються з прийменником `em` (скорочено `no dia`, `em 2024`) і кількісним числівником, окрім першого дня місяця. Рік зазвичай без артикля: `em 2024`. День тижня з артиклем означає «цього / наступного»: `no sábado`; без артикля — регулярність: `ao sábado` (PT-PT) / `sábado` як обставина.\n\nPT-BR і PT-PT розходяться в дрібницях на кшталт `quinze para as três` vs `três menos quinze` і в `às 18h` як 6-годинний чи 24-годинний циферблат.",
    formulas: [
      {
        label: "Години",
        pattern: "é + uma hora     são + Num + horas",
        negative: "não é uma hora ainda",
        question: "Que horas são?",
        note: "Найтиповіше питання про поточний час — `Que horas são?`; форма `Que hora é?` теж засвідчена, зокрема в розмовному вжитку й у контекстах, де `hora` мислиться як одиничний момент.",
      },
      {
        label: "Дата",
        pattern: "em + (ART) + dia + Num + de + mês + de + ano",
        note: "no dia 3 de setembro de 2024; em setembro; em 2024.",
      },
    ],
    uses: [
      {
        title: "Которая година",
        body: "`Que horas são?` — `São três e quinze.` `É uma hora.` Хвилини: `e` додає, `menos` / `para as` віднімає. `em ponto` — рівно.",
        examples: [
          ex("São duas em ponto.", "Друга рівно."),
          ex("São três e dez.", "Третя десять / 3:10."),
        ],
      },
      {
        title: "О котрій (напрямок у часі)",
        body: "Прийменник `a` + артикль: `às duas`, `à uma`. Це crase / контракція `a + as` / `a + a`.",
        examples: [
          ex("O comboio chega às sete.", "Поїзд прибуває о сьомій.", { variety: "PT" }),
          ex("O trem chega às sete.", "Поїзд прибуває о сьомій.", { variety: "BR" }),
        ],
      },
    ],
    examples: [
      ex("Que horas são? — São quatro e meia.", "Котра година? — Пів на п'яту (4:30)."),
      ex("É uma e vinte.", "Перша двадцять."),
      ex("Chego às nove da manhã.", "Прийду о дев'ятій ранку."),
      ex("No dia 3 de setembro de 2024.", "3 вересня 2024 року."),
      ex("1.º de maio é feriado.", "Перше травня — вихідний."),
      ex("Em 2024 mudámos de casa.", "2024 року ми переїхали.", { variety: "PT" }),
      ex("São quinze para as três.", "За п'ятнадцять третя.", { variety: "BR" }),
      ex("São três menos um quarto.", "За чверть третя.", { variety: "PT" }),
    ],
    markers: ["Que horas são?", "é uma", "são duas", "às", "à uma", "em ponto", "no dia", "de manhã"],
    exceptions:
      "`Meio-dia` і `meia-noite` — однина: `É meio-dia.` `É meia-noite.` Ранок/вечір: `da manhã`, `da tarde`, `da noite`. PT-BR часто 12-годинний циферблат із цими маркерами; офіційний розклад — 24h (`às 18h`). `Às tantas` — «о такій-то годині / колись тоді», не літеральна година.",
    mistakes: [
      mistake(
        "É duas horas.",
        "São duas horas.",
        "Від двох годин типовою є множина: `São duas horas`. Однина вживається з `uma hora`, `meio-dia`, `meia-noite` та в інших конструкціях, де граматичний центр — однина.",
      ),
      mistake(
        "a duas horas (про «о другій»)",
        "às duas horas / às duas",
        "Потрібна контракція `a + as` → `às`. Це той самий механізм, що crase в `à uma`.",
      ),
      mistake(
        "no segundo de maio",
        "no dia 2 de maio",
        "Дати після першого числа місяця — кількісні.",
      ),
    ],
    ukrainian:
      "Українське *зараз друга* / *о другій* розрізняє називний і знахідний/місцевий. Португальська розрізняє **назву години** (`são duas`) і **момент** (`às duas`). Калька *є дві години* як `é duas` ламає узгодження. *Пів на п'яту* = `quatro e meia`, не `cinco e meia` (це 5:30).",
    brPt:
      "Способи називати хвилини (`quinze para as três`, `três menos quinze`, `um quarto para as três`) варіюють за різновидом, регіоном і стилем; не варто приписувати кожну формулу лише BR або лише PT. `comboio` (PT) / `trem` (BR) — лексична, а не граматична відмінність. Обидва різновиди вживають `às 8h`.",
    regional:
      "В офіційному письмі в африканських різновидах можуть траплятися формати, близькі до європейської канцелярської практики; конкретні норми варто прив'язувати до країни та жанру. Усне позначення часу варіює між моделями `para as` і `menos`.",
    tables: [
      {
        caption: "Годинник",
        headers: ["Час", "Типова формула", "Українською"],
        rows: [
          ["1:00", "É uma hora.", "Перша."],
          ["2:00", "São duas horas.", "Друга."],
          ["2:15", "São duas e quinze. / duas e um quarto", "П'ятнадцята хвилина другої."],
          ["2:30", "São duas e meia.", "Пів на третю."],
          ["2:45", "São quinze para as três. / três menos um quarto", "За чверть третя."],
          ["12:00", "É meio-dia.", "Полудень."],
          ["00:00", "É meia-noite.", "Північ."],
        ],
        scroll: true,
      },
    ],
  },
];
