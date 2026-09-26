import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const C = "https://ciberduvidas.iscte-iul.pt/consultorio/areas/gramatica/3";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "information-structure", slug: "information-structure", category: "discourse",
    titleUk: "Тема, рема і фокус", titlePt: "Estrutura informacional", titleEn: "Information structure",
    summary: "Як португальське речення розподіляє дану, нову, контрастивну та фокусну інформацію.",
    aliases: ["інформаційна структура", "information structure", "estrutura informacional", "тема рема фокус"],
    related: ["discourse-overview", "topicalization", "clefts", "emphasis-focus", "word-order"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Граматично правильний порядок слів не завжди є нейтральним інформаційно. Речення Ele comprou o livro може бути нейтральним повідомленням, але контекст може зробити Ele або o livro контрастивним фокусом. Португальська використовує порядок слів, інтонацію, topicalization та cleft-конструкції для керування тим, що слухач має сприйняти як дане, нове або особливо виділене.",
    definition: "Інформаційна структура — організація висловлення відповідно до статусу інформації: теми, фокусу, даного, нового та контрастивного.",
    formation: "Тема зазвичай задає, про що будується висловлення, а фокус виділяє інформацію, яка є новою або контрастивною. У португальській це може виражатися базовим порядком SVO, інтонацією, винесенням компонента або cleft: Foi a Ana que comprou o livro. Не кожна початкова іменна група є темою, а не кожна кінцева — автоматично фокусом: потрібен контекст.",
    uses: [
      { title: "Нейтральне повідомлення", body: "SVO часто забезпечує нейтральний розподіл учасників і події.", examples: [
        ex("A Ana comprou o livro.", "Ана купила книжку.", { purpose: "production" }),
        ex("O João encontrou a Maria.", "Жуан зустрів Марію.", { purpose: "production" })
      ] },
      { title: "Контрастивний фокус", body: "Інтонація та контекст можуть виділити один компонент як відповідь на контраст.", examples: [
        ex("Foi a Ana que comprou o livro, não o João.", "Саме Ана купила книжку, а не Жуан.", { purpose: "contrast" }),
        ex("Eu quero ESTE livro.", "Я хочу саме ЦЮ книжку.", { purpose: "contrast" })
      ] },
      { title: "Тематизація", body: "Компонент може бути винесений для встановлення дискурсивної рамки.", examples: [
        ex("Esse livro, já o li.", "Цю книжку я вже читав/читала.", { purpose: "production" }),
        ex("Quanto ao projeto, falamos amanhã.", "Щодо проєкту, поговоримо завтра.", { purpose: "production" })
      ] },
      { title: "Cleft як фокусування", body: "Конструкція ser ... que може експліцитно виділяти компонент.", examples: [
        ex("Foi a Maria que telefonou.", "Саме Марія зателефонувала.", { purpose: "production" }),
        ex("É amanhã que começa o curso.", "Саме завтра починається курс.", { purpose: "comprehension" })
      ] }
    ],
    examples: [
      ex("A Ana comprou o livro.", "Ана купила книжку.", { purpose: "production" }),
      ex("Foi a Ana que comprou o livro.", "Саме Ана купила книжку.", { purpose: "production" }),
      ex("Esse livro, já o li.", "Цю книжку я вже читав/читала.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати SVO єдиним можливим порядком", "розрізняти базовий порядок і інформаційно мотивовані варіанти", "Португальська допускає тематизацію та інші структури.", "predicted-l1-transfer", "high"),
      mistake("називати будь-який початковий компонент темою", "враховувати контекст", "Синтаксична позиція сама не визначає інформаційний статус.", "editorial", "high"),
      mistake("перекладати cleft дослівно без передачі фокусу", "передавати контрастивне виділення", "Foi a Ana que... природно передається українським «саме Ана...» або подібною конструкцією.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська також активно використовує вільніший порядок слів, інтонацію й конструкції «саме X», тому принцип фокусування знайомий. Відмінність полягає в тому, як португальська розподіляє нейтральний порядок, topicalization та cleft.",
    regional: "Інформаційна структура є спільною системою, але просодичні та синтаксичні стратегії можуть мати різну частотність у PT-BR і PT-PT.",
    brPt: "PT-BR та PT-PT використовують спільні засоби фокусування, але розмовні стратегії, займенникові дублювання та позиції компонентів можуть різнитися.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "ellipsis", slug: "ellipsis", category: "discourse",
    titleUk: "Еліпсис", titlePt: "Elipse", titleEn: "Ellipsis",
    summary: "Коли частину висловлення не вимовляють, бо її зміст відновлюється з граматики або контексту.",
    aliases: ["еліпсис", "ellipsis", "elipse", "пропуск"],
    related: ["discourse-overview", "null-subject", "coordination", "information-structure", "discourse-markers"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Еліпсис — це не просто «пропущене слово». Компонент може не мати фонетичної реалізації, але його інтерпретація відновлюється з попереднього тексту, ситуації або структури конструкції. Португальська особливо часто опускає підмети, але ширший еліпсис охоплює й інші компоненти: у відповідях, координації, порівняннях та діалогах.",
    definition: "Еліпсис — відсутність у поверхневій формі компонента, інтерпретація якого відновлюється з контексту або граматичної структури.",
    formation: "Розрізняйте null subject і ширший еліпсис. У Eu comprei o livro e ela também можна відновити предикат після também: ela também [comprou o livro]. У короткій відповіді Sim, [vou] або Não, [quero] контекст відновлює дієслово. Не кожен відсутній компонент є еліпсисом: деякі мови та конструкції просто дозволяють нульову реалізацію.",
    uses: [
      { title: "Еліпсис у координації", body: "Повторювану частину можна не повторювати, якщо вона однозначно відновлюється.", examples: [
        ex("Eu comprei o livro e ela também.", "Я купив/купила книжку, і вона теж.", { purpose: "production" }),
        ex("O João foi ao Porto e a Maria, a Lisboa.", "Жуан поїхав до Порту, а Марія — до Лісабона.", { variety: "PT", purpose: "comprehension" })
      ] },
      { title: "Короткі відповіді", body: "У діалозі попереднє питання дозволяє скоротити відповідь.", examples: [
        ex("Vais amanhã? — Vou.", "Ти йдеш завтра? — Іду.", { variety: "PT", purpose: "production" }),
        ex("Você quer café? — Quero.", "Хочете кави? — Хочу.", { variety: "BR", purpose: "production" })
      ] },
      { title: "Null subject як окремий випадок", body: "Опущений підмет є частиною ширшої системи нульових компонентів, але не тотожний усьому еліпсису.", examples: [
        ex("Cheguei cedo.", "Я прийшов/прийшла рано.", { purpose: "contrast" }),
        ex("Quando cheguei, já tinham saído.", "Коли я прийшов/прийшла, вони вже пішли.", { purpose: "production" })
      ] },
      { title: "Еліпсис і фокус", body: "Пропуск може підкреслювати контраст, залишаючи в явній формі лише релевантну інформацію.", examples: [
        ex("Eu quero o azul; ela, o vermelho.", "Я хочу синій, а вона — червоний.", { purpose: "contrast" }),
        ex("Uns estudam; outros trabalham.", "Одні навчаються, інші працюють.", { purpose: "production" })
      ] }
    ],
    examples: [
      ex("Eu comprei o livro e ela também.", "Я купив/купила книжку, і вона теж.", { purpose: "production" }),
      ex("Vais amanhã? — Vou.", "Ти йдеш завтра? — Іду.", { variety: "PT", purpose: "production" }),
      ex("Eu quero o azul; ela, o vermelho.", "Я хочу синій, а вона — червоний.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати кожен нульовий підмет повним еліпсисом", "розрізняти null subject та інші типи ellipsis", "Пропуск підмета має власну граматичну систему.", "editorial", "high"),
      mistake("повторювати всі компоненти, які українська зазвичай опускає", "аналізувати дискурсивну відновлюваність", "Надмірне повторення може зробити португальський текст неприродним.", "predicted-l1-transfer", "medium"),
      mistake("вважати короткі відповіді неповними реченнями і тому неправильними", "враховувати діалогічний контекст", "У діалозі відновлення з питання є нормальною частиною граматики.", "editorial", "high")
    ],
    ukrainian: "Українська також активно використовує еліпсис: «Я — чай, а вона — каву» або «Ти прийдеш? — Прийду». Тому концепція не чужа; важливо навчитися розпізнавати її конкретну португальську реалізацію.",
    regional: "Еліптичні стратегії існують у всіх різновидах португальської. Відмінності частіше пов'язані з розмовним стилем та конкретною конструкцією, ніж із базовим принципом.",
    brPt: "У PT-BR та PT-PT діалогічний еліпсис дуже продуктивний. PT-BR частіше має явні займенникові підмети в деяких контекстах, але це не означає відсутності еліпсису.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "generic-reference", slug: "generic-reference", category: "semantics",
    titleUk: "Узагальнення та родове значення", titlePt: "Referência genérica", titleEn: "Generic reference",
    summary: "Як говорити про цілий клас, вид або типові властивості без посилання на одного конкретного референта.",
    aliases: ["родове значення", "generic reference", "referência genérica", "узагальнення"],
    related: ["reference-overview", "articles-definite", "zero-article", "scope-and-reference", "noun-number"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "У реченні O cão é um animal мовець не обов'язково має на увазі одного конкретного собаку. Іменна група може посилатися на клас або вид загалом. Португальська використовує для generic reference означені, неозначені та нульові конструкції залежно від типу іменника, числа та висловлюваного узагальнення. Тому правило «означений артикль = конкретний предмет» є надто грубим.",
    definition: "Generic reference — інтерпретація іменної групи як позначення класу, виду або загальної закономірності, а не одного конкретного індивіда.",
    formation: "Родове значення часто виражається означеною іменною групою в однині: O cão é um mamífero. Множина також може мати generic reading: Os cães são mamíferos. У деяких контекстах можливі нульові конструкції, особливо з нерахованими іменниками або сталими предикативними структурами. Інтерпретація залежить від предиката: «O João é médico» не є generic reference до класу Жуанів.",
    uses: [
      { title: "Вид у цілому", body: "Означений артикль може позначати весь клас.", examples: [
        ex("O cão é um mamífero.", "Собака — ссавець.", { purpose: "production" }),
        ex("A baleia é um mamífero.", "Кит — ссавець.", { purpose: "production" })
      ] },
      { title: "Generic plural", body: "Множина може позначати клас без одного конкретного набору індивідів.", examples: [
        ex("Os cães são animais domésticos.", "Собаки — домашні тварини.", { purpose: "production" }),
        ex("Os estudantes precisam de descanso.", "Студентам потрібен відпочинок / Студенти потребують відпочинку.", { purpose: "comprehension" })
      ] },
      { title: "Не плутати generic із конкретним", body: "Контекст може перемкнути ту саму форму між родовим та конкретним читанням.", examples: [
        ex("Os cães são animais domésticos.", "Собаки — домашні тварини.", { purpose: "contrast" }),
        ex("Os cães estão no jardim.", "Собаки в саду.", { purpose: "contrast" })
      ] },
      { title: "Рахованість і нульовий артикль", body: "Неозначені та нульові конструкції мають власні закономірності; вибір не визначається лише бажанням «говорити загалом».", examples: [
        ex("Água é essencial à vida.", "Вода необхідна для життя.", { purpose: "production" }),
        ex("Um cão precisa de cuidados.", "Собака потребує догляду / Будь-який собака потребує догляду.", { purpose: "comprehension" })
      ] }
    ],
    examples: [
      ex("O cão é um mamífero.", "Собака — ссавець.", { purpose: "production" }),
      ex("Os cães são animais domésticos.", "Собаки — домашні тварини.", { purpose: "production" }),
      ex("Os cães estão no jardim.", "Собаки в саду.", { purpose: "contrast" }),
      ex("Água é essencial à vida.", "Вода необхідна для життя.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати означений артикль доказом конкретності", "розрізняти specific і generic reference", "O cão може позначати весь вид.", "predicted-l1-transfer", "high"),
      mistake("вважати множину автоматично родовою", "дивитися на предикат і контекст", "Os cães estão no jardim зазвичай стосується конкретної групи.", "editorial", "high"),
      mistake("переносити український нульовий артикль механічно", "аналізувати португальський determiner system", "Українське «вода необхідна» не означає, що португальська завжди матиме ту саму форму.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська не має артиклів, тому generic reference часто виражається самим іменником і контекстом: «Собака — ссавець», «Собаки — домашні тварини». Для україномовного студента головна складність — не саме узагальнення, а вибір португальського детермінатива.",
    regional: "Generic reference є спільною семантичною системою. Частотність нульового артикля та деяких конструкцій може залежати від різновиду й регістру.",
    brPt: "PT-BR та PT-PT використовують означені та неозначені конструкції для generic readings. Відмінності в артиклях перед іменниками й у нульових конструкціях треба вивчати на конкретних моделях.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  })
];
