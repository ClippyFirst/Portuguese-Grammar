import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II =
  "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CAMOES_PLE =
  "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";
const CIBERDUVIDAS_RELATIVOS =
  "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/os-pronomes-relativos/37143";
const CIBERDUVIDAS_QUE_QUAL =
  "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-diferenca-entre-que-e-o-qual/28632";
const CIBERDUVIDAS_CUJO =
  "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/pronome-cujo/3553";
const CIBERDUVIDAS_ONDE =
  "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/onde-em-que-ou-no-qual/14487";

const commonSources = [
  { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
  { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE },
];

export const pages: GrammarPage[] = [
  page({
    id: "relative-que",
    slug: "que",
    category: "relative",
    titleUk: "Відносний que",
    titlePt: "Pronome relativo que",
    titleEn: "Relative que",
    summary: "Найуживаніший відносний елемент і його роль як підмета або додатка у відносній частині.",
    aliases: ["відносний que", "pronome relativo que", "relative que"],
    related: ["relative-pronouns", "relative-quem", "relative-o-qual", "relative-restrictive", "advanced-relatives"],
    status: "review",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro:
      "Відносний **que** з'єднує іменну групу з підрядною відносною частиною та одночасно виконує синтаксичну функцію всередині цієї частини. Тому його не слід вчити лише як переклад українського «який/яка/яке». У реченні **O livro que comprei** форма que є прямим додатком до comprei, а в **A pessoa que chegou** — підметом.",
    definition:
      "Відносний que — незмінний відносний займенник, який може стосуватися осіб і предметів та реалізувати різні синтаксичні функції у відносній конструкції.",
    formulas: [
      { label: "Підмет", pattern: "antecedente + que + V", note: "Que є підметом відносної частини." },
      { label: "Прямий додаток", pattern: "antecedente + que + sujeito + V", note: "Que заповнює позицію прямого додатка." },
      { label: "Прийменникова рамка", pattern: "antecedente + prep. + que", note: "Прийменник може бути частиною валентної моделі відносного речення." },
    ],
    uses: [
      {
        title: "Que як підмет",
        body: "У відносній частині немає іншого явного підмета: саме antecedente інтерпретується через que.",
        examples: [ex("A pessoa que chegou já saiu.", "Людина, яка прийшла, вже пішла.")],
      },
      {
        title: "Que як прямий додаток",
        body: "Інший компонент є підметом відносної частини, а que представляє об'єкт.",
        examples: [ex("O livro que comprei é novo.", "Книжка, яку я купив/купила, нова.")],
      },
      {
        title: "Que після прийменника",
        body: "Якщо предикат відносної частини вимагає прийменника, він може з'являтися перед que: a que, com que, de que, em que, por que тощо.",
        examples: [ex("A razão por que saí foi simples.", "Причина, через яку я пішов/пішла, була проста.")],
      },
    ],
    examples: [
      ex("A pessoa que chegou já saiu.", "Людина, яка прийшла, вже пішла.", { purpose: "production" }),
      ex("O livro que comprei é novo.", "Книжка, яку я купив/купила, нова.", { purpose: "contrast" }),
      ex("A cidade em que vivo é pequena.", "Місто, у якому я живу, невелике.", { purpose: "comprehension" }),
      ex("O assunto de que falámos é importante.", "Тема, про яку ми говорили, важлива.", { variety: "PT" }),
    ],
    mistakes: [
      mistake(
        "визначати que лише за українським перекладом «який»",
        "визначати синтаксичну роль que всередині відносної частини",
        "Одна форма que може бути підметом, прямим додатком або частиною прийменникової конструкції.",
        "predicted-l1-transfer",
        "high",
      ),
      mistake(
        "ставити прийменник лише за аналогією з українським перекладом",
        "перевіряти керування дієслова або іншого предиката у відносній частині",
        "Португальський прийменник належить до граматичної моделі конкретної конструкції, а не до перекладу слова «який».",
        "predicted-l1-transfer",
        "high",
      ),
    ],
    ukrainian:
      "Українське «який» змінюється за родом, числом і відмінком, тоді як португальське que не має такої парадигми. Саме синтаксична роль та прийменник показують те, що в українській часто виражається відмінковою формою.",
    regional:
      "Базове вживання que є спільним для PT-BR і PT-PT. Розподіл прийменникових відносних конструкцій, розмовні стратегії та частотність окремих альтернатив можуть відрізнятися між різновидами.",
    brPt:
      "У PT-BR поряд із стандартним que широко засвідчені розмовні стратегії з прийменником і різними відносними моделями. Для формального письма не слід автоматично переносити розмовну конструкцію в PT-PT або навпаки.",
    sources: [...commonSources, { label: "Ciberdúvidas — Os pronomes relativos", url: CIBERDUVIDAS_RELATIVOS }],
  }),

  page({
    id: "relative-quem",
    slug: "quem",
    category: "relative",
    titleUk: "Відносний quem",
    titlePt: "Pronome relativo quem",
    titleEn: "Relative quem",
    summary: "Відносний займенник для людських антецедентів та прийменникових конструкцій.",
    aliases: ["відносний quem", "quem relativo", "relative quem"],
    related: ["relative-pronouns", "relative-que", "relative-o-qual", "prepositional-pronouns"],
    status: "review",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro:
      "**Quem** у відносній конструкції типово стосується особи або групи осіб. Його особливо легко впізнати після прийменника: **a pessoa com quem falei**. Водночас quem не є просто «людським варіантом que»: його розподіл залежить від структури всієї відносної частини.",
    definition:
      "Quem — відносний займенник, який у сучасній португальській типово має людський антецедент і може виконувати різні функції, часто в конструкціях із прийменником.",
    formulas: [
      { label: "Людський антецедент", pattern: "pessoa + quem + V", note: "Quem пов'язує особу з відносною частиною." },
      { label: "Прийменник", pattern: "pessoa + prep. + quem", note: "Комбінація особливо продуктивна: com quem, de quem, a quem, para quem." },
    ],
    uses: [
      {
        title: "Після іменника на позначення особи",
        body: "Quem може представляти людину, яка є підметом або додатком відносної частини.",
        examples: [ex("A pessoa que chegou é a minha irmã.", "Людина, яка прийшла, — моя сестра.")],
      },
      {
        title: "Прийменникова конструкція",
        body: "Після com, de, a, para та інших прийменників quem часто є природним способом позначити людський антецедент.",
        examples: [ex("A pessoa com quem falei chegou.", "Людина, з якою я говорив/говорила, прийшла.")],
      },
      {
        title: "Без названого антецедента",
        body: "Quem також бере участь у вільних відносних конструкціях на кшталт quem quiser, але це вже не та сама структура, що відносне речення з іменним antecedente.",
        examples: [ex("Quem quiser pode entrar.", "Хто хоче, може зайти.")],
      },
    ],
    examples: [
      ex("A pessoa com quem falei chegou.", "Людина, з якою я говорив/говорила, прийшла.", { purpose: "production" }),
      ex("Não sei a quem devo perguntar.", "Я не знаю, кого/до кого мені слід запитати.", { purpose: "comprehension" }),
      ex("O professor de quem falei chegou.", "Викладач, про якого я говорив/говорила, прийшов.", { purpose: "contrast" }),
      ex("Quem quiser pode participar.", "Хто хоче, може взяти участь.", { purpose: "contrast" }),
    ],
    mistakes: [
      mistake(
        "використовувати quem для будь-якого antecedente, включно з предметами",
        "спочатку встановлювати, чи антецедент людський і яку функцію має відносний компонент",
        "Quem має спеціалізований людський розподіл; для предметів стандартними альтернативами є que, o qual та інші форми залежно від конструкції.",
        "predicted-l1-transfer",
        "high",
      ),
      mistake(
        "вважати, що українське «хто» і португальське quem завжди утворюють одну й ту саму синтаксичну конструкцію",
        "відрізняти relative quem від free relative quem",
        "Українське «хто» може бути самостійним займенником, тоді як португальське quem функціонує в кількох структурних моделях.",
        "predicted-l1-transfer",
        "high",
      ),
    ],
    ukrainian:
      "Українське «хто/кого/кому/з ким» змінюється за відмінком. У португальській значну частину цієї інформації бере на себе прийменник, а quem залишається незмінним.",
    regional:
      "Базове розрізнення людських і нелюдських антецедентів є спільним для основних стандартів, хоча розмовні конструкції можуть мати інші стратегії.",
    brPt:
      "PT-BR і PT-PT обидва широко використовують quem у відносних та free-relative конструкціях. Розмовні варіанти слід аналізувати окремо від формального письма.",
    sources: [...commonSources, { label: "Ciberdúvidas — Os pronomes relativos", url: CIBERDUVIDAS_RELATIVOS }],
  }),

  page({
    id: "relative-o-qual",
    slug: "o-qual",
    category: "relative",
    titleUk: "o qual та його форми",
    titlePt: "o qual, a qual, os quais, as quais",
    titleEn: "The o qual relative forms",
    summary: "Узгоджені відносні форми для уточнення антецедента та прийменникових конструкцій.",
    aliases: ["o qual", "a qual", "os quais", "as quais", "relative qual"],
    related: ["relative-que", "relative-restrictive", "relative-cujo", "prepositions-overview"],
    status: "review",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro:
      "Форми **o qual, a qual, os quais, as quais** узгоджуються з антецедентом за родом і числом. Їх не слід викладати як просто «більш формальне que»: розподіл залежить від типу відносної конструкції, прийменника, відстані між антецедентом і відносною частиною та потреби усунути неоднозначність.",
    definition:
      "O qual і споріднені форми — узгоджені відносні форми, які можуть виконувати синтаксичні функції у відносних реченнях і особливо корисні після прийменників та в уточнювальних конструкціях.",
    formulas: [
      { label: "Узгодження", pattern: "o qual / a qual / os quais / as quais", note: "Рід і число визначаються антецедентом." },
      { label: "Прийменник", pattern: "prep. + o/a/os/as qual(is)", note: "Форма зливається з прийменником за звичайними правилами контракції, якщо вони застосовні." },
    ],
    uses: [
      {
        title: "Зняття неоднозначності",
        body: "Форма qual може показати, до якого з кількох можливих антецедентів належить відносна частина.",
        examples: [ex("O irmão da apresentadora com o qual falei respondeu.", "Брат ведучої, з яким я говорив/говорила, відповів.")],
      },
      {
        title: "Після складніших прийменників",
        body: "З прийменниками на кшталт sobre, durante, perante або прийменниковими locuções форма o qual часто є природнішою або нормативно потрібною.",
        examples: [ex("O assunto sobre o qual falámos voltou a surgir.", "Тема, про яку ми говорили, знову виникла.")],
      },
      {
        title: "Апозиційна відносна частина",
        body: "Без прийменника o qual особливо природний у пояснювальних конструкціях, де відносна частина виділяється комами.",
        examples: [ex("A Ana, a qual vive em Lisboa, chega amanhã.", "Ана, яка живе в Лісабоні, приїде завтра.")],
      },
    ],
    examples: [
      ex("A razão pela qual saí foi simples.", "Причина, через яку я пішов/пішла, була проста.", { purpose: "production" }),
      ex("O assunto sobre o qual falámos é complexo.", "Тема, про яку ми говорили, складна.", { purpose: "comprehension" }),
      ex("A Ana, a qual vive em Lisboa, chega amanhã.", "Ана, яка живе в Лісабоні, приїде завтра.", { purpose: "contrast" }),
      ex("Os alunos aos quais expliquei a regra compreenderam.", "Учні, яким я пояснив/пояснила правило, зрозуміли.", { purpose: "production" }),
    ],
    mistakes: [
      mistake(
        "замінювати кожне que на o qual, вважаючи qual просто формальнішим",
        "визначати тип відносної частини, прийменник і функцію відносного компонента",
        "Розподіл форм не є вільною стилістичною заміною в усіх конструкціях.",
        "predicted-l1-transfer",
        "high",
      ),
      mistake(
        "узгоджувати qual з іменником усередині відносної частини",
        "узгоджувати qual з antecedente",
        "Рід і число форми qual визначаються антецедентом, а не наступним іменником.",
        "predicted-l1-transfer",
        "high",
      ),
    ],
    ukrainian:
      "Українське «який» одночасно показує рід, число та відмінок. У португальській o qual/a qual/os quais/as quais показують рід і число, а синтаксичну роль часто виражає прийменник або позиція.",
    regional:
      "Основний принцип існує в PT-BR і PT-PT. Ciberdúvidas зазначає реальний розподіл між que та o qual у португальській, зокрема обмеження o qual у деяких restritivas без прийменника.",
    brPt:
      "У PT-BR o qual та його форми широко використовуються у формальному письмі, але в розмовному мовленні можуть поступатися простішим стратегіям. Не переносіть частотність письмового регістру на живу мову.",
    sources: [...commonSources, { label: "Ciberdúvidas — A diferença entre que e o qual", url: CIBERDUVIDAS_QUE_QUAL }],
  }),

  page({
    id: "relative-cujo",
    slug: "cujo",
    category: "relative",
    titleUk: "Cujo: присвійний відносний займенник",
    titlePt: "Cujo, cuja, cujos, cujas",
    titleEn: "Cujo relatives",
    summary: "Як виражати відношення належності у відносній конструкції без артикля перед наступним іменником.",
    aliases: ["cujo", "cuja", "cujos", "cujas", "присвійний відносний"],
    related: ["relative-pronouns", "relative-o-qual", "articles-definite", "possessives"],
    status: "review",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro:
      "**Cujo** виражає відношення належності між antecedente та іменником у відносній частині. Ключова особливість: форма cujo узгоджується не з antecedente, а з іменником, який стоїть після неї: **o autor cujo livro li**, **a autora cujas obras conheço**. Після cujo не ставиться означений артикль.",
    definition:
      "Cujo, cuja, cujos, cujas — відносні форми з посесивним значенням; вони зв'язують antecedente з наступним іменником, який є носієм узгодження.",
    formulas: [
      { label: "Чоловічий однина", pattern: "antecedente + cujo + nome", note: "Cujo узгоджується з наступним іменником: cujo livro." },
      { label: "Жіночий множина", pattern: "antecedente + cujas + nome plural", note: "Форма визначається родом і числом наступного іменника." },
    ],
    uses: [
      {
        title: "Належність",
        body: "Cujo дозволяє уникнути конструкції з окремим possessivo або de quem, коли посесивний зв'язок є частиною відносного речення.",
        examples: [ex("O autor cujo livro li ganhou um prémio.", "Автор, книжку якого я прочитав/прочитала, отримав премію.")],
      },
      {
        title: "Узгодження з наступним іменником",
        body: "У frases com cujo livro, cuja obra, cujos livros, cujas obras саме іменник визначає форму cujo.",
        examples: [ex("A autora cujas obras conheço vive aqui.", "Авторка, чиї твори я знаю, живе тут.")],
      },
      {
        title: "Без артикля",
        body: "Після cujo не додається означений артикль: cujo livro, а не cujo o livro.",
        examples: [ex("O cientista cujo trabalho estudámos publicou outro artigo.", "Науковець, чию працю ми вивчали, опублікував ще одну статтю.")],
      },
    ],
    examples: [
      ex("O autor cujo livro li ganhou um prémio.", "Автор, книжку якого я прочитав/прочитала, отримав премію.", { purpose: "production" }),
      ex("A autora cujas obras conheço vive aqui.", "Авторка, чиї твори я знаю, живе тут.", { purpose: "contrast" }),
      ex("Os estudantes cujos resultados melhoraram continuaram o projeto.", "Студенти, чиї результати покращилися, продовжили проєкт.", { purpose: "comprehension" }),
      ex("A empresa cujo diretor conheci mudou de sede.", "Компанія, директор якої мені знайомий, змінила місцезнаходження.", { purpose: "contrast" }),
    ],
    mistakes: [
      mistake(
        "писати cujo o livro або cuja a obra",
        "писати cujo livro / cuja obra",
        "Cujo вже є відносною посесивною формою; означений артикль після нього не ставиться.",
        "predicted-l1-transfer",
        "high",
      ),
      mistake(
        "узгоджувати cujo з antecedente",
        "узгоджувати cujo з наступним іменником",
        "У конструкції o autor cujo livro... форма cujo має чоловічий рід через livro, а не через autor.",
        "predicted-l1-transfer",
        "high",
      ),
    ],
    ukrainian:
      "Українське «який/яка/чиї» не показує такої самої механіки. Для україномовного студента найважливіше окремо запам'ятати напрямок узгодження: antecedente визначає, про кого/що йдеться, але форму cujo визначає наступний іменник.",
    regional:
      "Cujo належить до спільного граматичного ядра португальської. Конкретна частотність у розмовній мові може бути нижчою, ніж у письмових формальних текстах.",
    brPt:
      "У сучасній PT-BR конструкції cujo нормативна, але в живому мовленні часто конкурує з перифрастичними моделями з de quem/de que та іншими способами вираження посесії. Для формального письма cujo залишається важливим.",
    sources: [...commonSources, { label: "Ciberdúvidas — Pronome «cujo»", url: CIBERDUVIDAS_CUJO }],
  }),

  page({
    id: "relative-onde",
    slug: "onde",
    category: "relative",
    titleUk: "Відносне onde та локативні конструкції",
    titlePt: "Onde relativo",
    titleEn: "Relative onde",
    summary: "Коли onde означає місце і коли доречні em que або no qual.",
    aliases: ["відносне onde", "onde relativo", "onde em que no qual"],
    related: ["relative-que", "relative-o-qual", "prep-em", "relative-pronouns"],
    status: "review",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro:
      "**Onde** — відносний прислівник місця. Його не слід механічно перекладати як українське «де» в кожній конструкції. Ключове питання — чи antecedente справді має локативну інтерпретацію. Якщо йдеться про ширший абстрактний або текстовий antecedente, часто природнішими будуть **em que** або **no qual**.",
    definition:
      "Відносне onde вводить відносну конструкцію з локативним значенням і типово стосується місця, простору або місцевості.",
    formulas: [
      { label: "Локативний antecedente", pattern: "lugar + onde + oração", note: "Onde безпосередньо виражає локативний зв'язок." },
      { label: "Прийменниковий еквівалент", pattern: "lugar + em que / no qual + oração", note: "У відповідних контекстах можливі альтернативні відносні конструкції." },
    ],
    uses: [
      {
        title: "Конкретне місце",
        body: "Для міста, будинку, країни чи іншого просторового antecedente onde є природним.",
        examples: [ex("A cidade onde vivo é pequena.", "Місто, де я живу, невелике.")],
      },
      {
        title: "Em que / no qual",
        body: "Коли antecedente легко структурується як locative PP, можливі em que та no qual.",
        examples: [ex("A cidade em que vivo é pequena.", "Місто, у якому я живу, невелике."), ex("A cidade na qual vivo é pequena.", "Місто, у якому я живу, невелике.")],
      },
      {
        title: "Не лише фізичний простір",
        body: "Уживання треба перевіряти за тим, чи antecedente справді може бути інтерпретований як місце або простір. Абстрактні іменники не автоматично дозволяють onde.",
        examples: [ex("O texto em que aparece esta palavra é antigo.", "Текст, у якому з'являється це слово, давній.")],
      },
    ],
    examples: [
      ex("A casa onde moro fica perto daqui.", "Будинок, де я живу, неподалік.", { purpose: "production" }),
      ex("A cidade em que nasci mudou muito.", "Місто, у якому я народився/народилася, сильно змінилося.", { purpose: "contrast" }),
      ex("O país no qual trabalhei tinha outra legislação.", "Країна, у якій я працював/працювала, мала інше законодавство.", { register: "formal", purpose: "comprehension" }),
      ex("O texto em que escreveste a palavra está aqui.", "Текст, у якому ти написав/написала це слово, тут.", { purpose: "comprehension" }),
    ],
    mistakes: [
      mistake(
        "використовувати onde для будь-якого antecedente, який перекладається українським «де»",
        "перевіряти, чи antecedente має локативну інтерпретацію та яку прийменникову рамку вимагає конструкція",
        "Українське «де» має ширший розподіл, ніж португальське відносне onde.",
        "predicted-l1-transfer",
        "high",
      ),
      mistake(
        "вважати em que і onde різними «часами» або рівнями формальності без структурної причини",
        "аналізувати antecedente та синтаксичну роль локативного компонента",
        "Вибір між формами залежить від структури, стилю та конкретного antecedente, а не від простого правила «onde = розмовне».",
        "editorial",
        "medium",
      ),
    ],
    ukrainian:
      "Українське «де/в якому/у якому» розподіляється за відмінковою структурою та семантикою. У португальській onde, em que та no qual мають частково перетинний, але не тотожний розподіл.",
    regional:
      "Onde як локативна відносна форма є спільною для основних різновидів. Частотність onde, em que та no qual залежить від жанру, antecedente та стилю.",
    brPt:
      "У PT-BR onde дуже поширене в природному мовленні. Формальні тексти також широко використовують em que та no qual; вибір не слід зводити до простого протиставлення BR/PT.",
    sources: [...commonSources, { label: "Ciberdúvidas — Onde, em que ou no qual?", url: CIBERDUVIDAS_ONDE }],
  }),

  page({
    id: "relative-restrictive",
    slug: "restrictive",
    category: "relative",
    titleUk: "Обмежувальні та пояснювальні відносні речення",
    titlePt: "Orações relativas restritivas e explicativas",
    titleEn: "Restrictive and non-restrictive relatives",
    summary: "Як відносна частина або обмежує референцію, або додає побічну інформацію.",
    aliases: ["restrictive relatives", "explicative relatives", "обмежувальні відносні", "пояснювальні відносні"],
    related: ["relative-que", "relative-o-qual", "punctuation", "information-structure"],
    status: "review",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro:
      "Різниця між обмежувальною та пояснювальною відносною конструкцією — це не лише питання коми. В обмежувальній конструкції відносна частина допомагає визначити, про яку частину множини йдеться; у пояснювальній вона додає інформацію про вже ідентифікований референт. Пунктуація є важливим письмовим сигналом, але інтерпретація залежить від контексту та інформаційної структури.",
    definition:
      "Обмежувальна relative звужує множину можливих референтів; пояснювальна/апозитивна relative додає коментар до вже ідентифікованого antecedente.",
    formulas: [
      { label: "Обмежувальна", pattern: "NP + que/o qual + oração", note: "Без ком, коли relative є частиною ідентифікації референта." },
      { label: "Пояснювальна", pattern: "NP, que/o qual + oração,", note: "Коми сигналізують додаткову, а не ідентифікаційну інформацію." },
    ],
    uses: [
      {
        title: "Ідентифікація підмножини",
        body: "Відносна частина визначає, які саме члени множини маються на увазі.",
        examples: [ex("Os alunos que estudaram passaram.", "Учні, які вчилися, склали іспит.")],
      },
      {
        title: "Додаткова інформація",
        body: "Antecedente вже ідентифікований, а relative додає коментар.",
        examples: [ex("O João, que estudou muito, passou.", "Жуан, який багато вчився, склав іспит.")],
      },
      {
        title: "Інформаційна структура",
        body: "Одна й та сама лексика може мати різну інтерпретацію залежно від того, чи група relative є частиною референції або окремим повідомленням.",
        examples: [ex("A Ana que trabalha comigo chegou.", "Ана, яка працює зі мною, прийшла.", { purpose: "contrast" }), ex("A Ana, que trabalha comigo, chegou.", "Ана, яка працює зі мною, прийшла.", { purpose: "contrast" })],
      },
    ],
    examples: [
      ex("Os alunos que estudaram passaram.", "Учні, які вчилися, склали іспит.", { purpose: "production" }),
      ex("O João, que estudou muito, passou.", "Жуан, який багато вчився, склав іспит.", { purpose: "contrast" }),
      ex("As pessoas que trabalham aqui conhecem o procedimento.", "Люди, які тут працюють, знають процедуру.", { purpose: "comprehension" }),
      ex("A Ana, que trabalha comigo, chega amanhã.", "Ана, яка працює зі мною, приїде завтра.", { purpose: "production" }),
    ],
    mistakes: [
      mistake(
        "ставити кому автоматично перед будь-яким українським «який»",
        "визначати, чи relative ідентифікує референт, а потім застосовувати пунктуацію",
        "Українська й португальська мають подібну ідею відносних конструкцій, але пунктуаційні правила не можна переносити без аналізу структури.",
        "predicted-l1-transfer",
        "high",
      ),
      mistake(
        "вважати пояснювальну relative просто «більш формальною»",
        "читати різницю як зміну референції та інформаційної структури",
        "Коми можуть змінити те, чи relative є частиною ідентифікації референта.",
        "editorial",
        "high",
      ),
    ],
    ukrainian:
      "Українська також розрізняє обмежувальні та пояснювальні відносні частини, тому тут можливий корисний прямий контраст. Проте конкретну пунктуацію та синтаксичні засоби треба перевіряти португальською.",
    regional:
      "Базовий контраст є спільним для PT-BR і PT-PT. Частотність окремих відносних форм і позиційні переваги можуть різнитися.",
    brPt:
      "Вибір que, o qual та інших форм у PT-BR і PT-PT має власні частотні профілі, але функціональний контраст restrictive vs explicative не зводиться до національної варіантності.",
    sources: [...commonSources, { label: "Ciberdúvidas — Os relativos que e a qual", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/os-relativos-que-e-a-qual/38122" }],
  }),
];
