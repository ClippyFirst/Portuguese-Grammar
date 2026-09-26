import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "question-tags", slug: "question-tags", category: "syntax",
    titleUk: "Питальні хвостики й питання-підтвердження",
    titlePt: "Perguntas de confirmação e apêndices interrogativos",
    titleEn: "Question tags and confirmation questions",
    summary: "Як уточнювати або підтверджувати вже сформоване припущення.",
    aliases: ["питальні хвостики", "question tags", "confirmation questions", "perguntas de confirmação"],
    related: ["questions-yesno", "biased-polar-questions", "emphatic-affirmation", "discourse-markers"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальське питання може бути не просто запитом «так чи ні», а проханням підтвердити припущення. Для цього використовують різні конструкції, зокрема короткі додані елементи на кшталт `não?`, `certo?` або `não é?`. Їх не варто зводити до однієї морфологічної парадигми: форма, інтонація, регістр і попередній контекст разом визначають функцію.",
    definition: "Питальний хвостик або конструкція підтвердження — доданий до висловлення елемент, який перетворює його на перевірку згоди чи підтвердження припущення.",
    uses: [
      { title: "Перевірка згоди", body: "Мовець формулює припущення й просить співрозмовника його підтвердити.", examples: [ex("Vens amanhã, não?", "Ти прийдеш завтра, так?")] },
      { title: "Підтвердження факту", body: "Короткий елемент після твердження може сигналізувати, що мовець очікує підтвердження, а не відкритої відповіді.", examples: [ex("A reunião é hoje, certo?", "Зустріч сьогодні, правда?")] }
    ],
    examples: [ex("Vens amanhã, não?", "Ти прийдеш завтра, так?", { purpose: "comprehension" }), ex("A reunião é hoje, certo?", "Зустріч сьогодні, правда?", { purpose: "production" })],
    mistakes: [mistake("вважати, що кожен український «так?» має один фіксований португальський відповідник", "вибирати конструкцію відповідно до функції підтвердження, регістру й контексту", "Українські й португальські питання-підтвердження частково збігаються функціонально, але не утворюють простого словникового відповідника.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українські «так?», «правда?», «чи не так?» виконують подібну дискурсивну роботу. Водночас конкретну португальську форму не слід вибирати лише за буквальним перекладом.",
    regional: "Розподіл коротких підтверджувальних елементів чутливий до регіону, регістру та інтонації; приклади не слід подавати як єдиний стандартний шаблон для всіх різновидів.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "echo-questions", slug: "echo-questions", category: "syntax",
    titleUk: "Ехо-питання", titlePt: "Perguntas-eco", titleEn: "Echo questions",
    summary: "Питання, що повторюють частину попередньої репліки для уточнення, здивування або перевірки.",
    aliases: ["ехо-питання", "echo questions", "perguntas-eco"],
    related: ["questions-yesno", "wh-questions", "biased-polar-questions", "discourse-reference"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Ехо-питання виникає як реакція на вже почуту інформацію. Мовець може повторити слово або фразу й зробити її центром перепитування: не просто запитати про факт, а показати, що інформація була несподіваною, не почутою або потребує уточнення. Ехо-питання не слід ототожнювати зі звичайним спеціальним питанням.",
    definition: "Ехо-питання — реактивне питання, яке повторює або відтворює частину попереднього висловлення, щоб уточнити, перепитати чи виразити реакцію на почуте.",
    uses: [
      { title: "Перепитування", body: "Повторення почутого допомагає перевірити, чи правильно мовець почув інформацію.", examples: [ex("— Vou amanhã. — Amanhã?", "— Я піду завтра. — Завтра?")] },
      { title: "Уточнення компонента", body: "Питальне слово може замінити конкретний елемент попередньої репліки.", examples: [ex("— Encontrei o Rui. — Encontraste quem?", "— Я зустрів Руя. — Кого ти зустрів?")] },
      { title: "Реакція на несподіванку", body: "Інтонація й повтор можуть виражати здивування; це прагматичний ефект, а не окремий час чи спосіб.", examples: [ex("— Custou mil euros. — Mil euros?", "— Це коштувало тисячу євро. — Тисячу євро?")] }
    ],
    examples: [ex("— Vou amanhã. — Amanhã?", "— Я піду завтра. — Завтра?", { purpose: "comprehension" }), ex("— Encontrei o Rui. — Encontraste quem?", "— Я зустрів Руя. — Кого ти зустрів?", { purpose: "contrast" })],
    mistakes: [mistake("вважати ехо-питання просто «неправильним порядком слів»", "аналізувати його як реактивну конструкцію, пов'язану з попередньою реплікою", "Його функція визначається дискурсивним контекстом, а не лише поверхневим порядком компонентів.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська також має ехо-питання: «Завтра?», «Кого ти зустрів?». Тому інтуїція щодо реактивного перепитування корисна; треба лише не переносити конкретну пунктуацію або інтонацію механічно.",
    regional: "Ехо-питання особливо залежать від усного контексту та інтонації. Письмове оформлення може лише частково передати реактивний ефект.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "rhetorical-questions", slug: "rhetorical-questions", category: "syntax",
    titleUk: "Риторичні питання", titlePt: "Perguntas retóricas", titleEn: "Rhetorical questions",
    summary: "Питальна форма, яка виконує не лише функцію пошуку інформації.",
    aliases: ["риторичні питання", "rhetorical questions", "perguntas retóricas"],
    related: ["questions-yesno", "wh-questions", "speech-acts", "emphasis-focus"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Риторичне питання має граматичну форму питання, але його комунікативна функція може бути іншою: підкреслення очевидності, докір, оцінка, сумнів або спонукання до роздумів. Сам знак питання не доводить риторичність; її визначає контекст і очікувана інтерпретація.",
    definition: "Риторичне питання — питальна конструкція, використана в контексті, де основною метою є не отримання невідомої відповіді, а інша дискурсивна дія.",
    uses: [
      { title: "Очевидна відповідь", body: "Питання може підкреслювати, що відповідь уже передбачається контекстом.", examples: [ex("Quem poderia acreditar nisso?", "Хто міг би в це повірити?")] },
      { title: "Оцінка або докір", body: "Питальна форма може посилити оцінку чи докір без реального очікування інформаційної відповіді.", examples: [ex("Como pudeste fazer isso?", "Як ти міг/могла так зробити?")] }
    ],
    examples: [ex("Quem poderia acreditar nisso?", "Хто міг би в це повірити?", { purpose: "comprehension" }), ex("Como pudeste fazer isso?", "Як ти міг/могла так зробити?", { purpose: "contrast" })],
    mistakes: [mistake("визначати риторичне питання лише за знаком ?", "перевіряти, чи контекст справді робить інформаційну відповідь основною метою", "Риторичність належить до прагматичної інтерпретації, а не до окремої граматичної форми.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська використовує риторичні питання так само, тому базова функціональна аналогія корисна. Не слід, однак, вважати конкретну українську частку або порядок слів обов'язковим португальським еквівалентом.",
    regional: "Риторичний ефект значною мірою залежить від інтонації, жанру й контексту; письмовий текст часто потребує ширшого контексту для правильної інтерпретації.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "sentence-fragments", slug: "sentence-fragments", category: "syntax",
    titleUk: "Фрагменти речення та бездієслівні висловлення", titlePt: "Fragmentos de frase e enunciados sem verbo", titleEn: "Sentence fragments and verbless clauses",
    summary: "Неповні або бездієслівні структури, які в контексті можуть бути повноцінними висловленнями.",
    aliases: ["фрагменти речення", "sentence fragments", "verbless clauses", "enunciados sem verbo"],
    related: ["ellipsis", "minimal-yes-no-answers", "direct-speech", "discourse-reference"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Не кожне висловлення в португальській має повну форму простого речення з явним дієсловом. У відповідях, заголовках, розмовних репліках і певних стилістичних конструкціях можуть уживатися іменні, прийменникові або інші фрагменти. Їх треба відрізняти від випадкового обриву граматично очікуваної конструкції.",
    definition: "Фрагмент речення — висловлення, яке не має повної клаузальної структури, але в конкретному контексті виконує самостійну комунікативну функцію.",
    uses: [
      { title: "Коротка відповідь", body: "Відповідь може повторювати лише релевантний компонент попереднього питання.", examples: [ex("— Quem chegou? — A Ana.", "— Хто прийшов? — Ана.")] },
      { title: "Називання або уточнення", body: "Іменна група може функціонувати як самостійна репліка без дієслова.", examples: [ex("Só mais cinco minutos.", "Ще лише п'ять хвилин.")] },
      { title: "Заголовковий або стилістичний фрагмент", body: "Письмовий жанр може використовувати фрагменти для компактності; це не автоматично помилка.", examples: [ex("Uma decisão difícil.", "Складне рішення.")] }
    ],
    examples: [ex("— Quem chegou? — A Ana.", "— Хто прийшов? — Ана.", { purpose: "production" }), ex("Só mais cinco minutos.", "Ще лише п'ять хвилин.", { purpose: "comprehension" }), ex("Uma decisão difícil.", "Складне рішення.", { purpose: "comprehension" })],
    mistakes: [mistake("вважати кожен бездієслівний фрагмент неповним реченням, яке треба «виправити»", "спочатку визначати жанр і комунікативну функцію висловлення", "Фрагментарність може бути системною властивістю відповіді, заголовка або розмовної репліки.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська також широко використовує неповні речення та короткі відповіді. Це корисна аналогія: не потрібно штучно додавати дієслово, якщо контекст уже відновлює пропущений матеріал.",
    regional: "Частотність і прийнятність фрагментів залежать від жанру, каналу й контексту. Усне мовлення особливо багате на контекстуально завершені короткі репліки.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "optative-wish-constructions", slug: "optative-wish-constructions", category: "syntax",
    titleUk: "Оптативні та побажальні конструкції", titlePt: "Construções optativas e desiderativas", titleEn: "Optative and wish constructions",
    summary: "Граматичні способи виражати побажання, прокляття або побажаний стан.",
    aliases: ["побажальні конструкції", "optative", "wish constructions", "construções optativas"],
    related: ["subjunctive-overview", "speech-acts", "exclamatives"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Побажання в португальській може оформлюватися різними засобами: самостійним conjuntivo, лексичними формулами на кшталт `tomara que` та іншими конструкціями. Тут важливо відрізняти граматичний спосіб від комунікативної функції: conjuntivo не означає автоматично «побажання», а побажання не має однієї обов'язкової форми.",
    definition: "Оптативна конструкція — висловлення, у якому мовець виражає бажаний стан справ, побажання або прокляття; португальська реалізує цю функцію кількома граматичними й лексичними засобами.",
    uses: [
      { title: "Побажання з tomara que", body: "Формула `tomara que` вводить бажану ситуацію й зазвичай поєднується з conjuntivo.", examples: [ex("Tomara que tudo corra bem.", "Хотілося б, щоб усе добре склалося.")] },
      { title: "Самостійний conjuntivo", body: "У певних контекстах форма conjuntivo може функціонувати як самостійне побажання або спонукання.", examples: [ex("Que tudo corra bem!", "Нехай усе добре складеться!")] }
    ],
    examples: [ex("Tomara que tudo corra bem.", "Хотілося б, щоб усе добре склалося.", { purpose: "production" }), ex("Que tenhas sorte!", "Нехай тобі щастить!", { purpose: "comprehension" })],
    mistakes: [mistake("виводити побажання лише з наявності conjuntivo", "спочатку визначати комунікативну функцію, а потім аналізувати форму й конструкцію", "Conjuntivo має ширше коло функцій, тому спосіб сам по собі не є семантичним ярликом «побажання».", "predicted-l1-transfer", "high")],
    ukrainian: "Українські «нехай», «хай», «хотілося б, щоб» дають корисну функціональну аналогію. Португальські побажання не слід перекладати механічною заміною українського маркера на conjuntivo.",
    regional: "Формули побажання залежать від стилю та контексту; окремі моделі можуть бути книжними, розмовними або формульними. Їхню продуктивність не слід узагальнювати без джерельної перевірки.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "hortative-exhortative-constructions", slug: "hortative-exhortative-constructions", category: "syntax",
    titleUk: "Хортативні та спонукальні конструкції", titlePt: "Construções hortativas e exortativas", titleEn: "Hortative and exhortative constructions",
    summary: "Як мовець спонукає співрозмовника або групу до спільної дії.",
    aliases: ["спонукальні конструкції", "hortative", "exhortative", "construções exortativas"],
    related: ["imperative-affirmative", "speech-acts", "optative-wish-constructions", "forms-of-address"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Спонукання не зводиться до наказового способу. Португальська може виражати пропозицію спільної дії через конструкції з `vamos`, першу особу множини, імперативні форми та інші контекстуальні засоби. Вибір форми залежить від того, кого саме мовець залучає до дії та наскільки прямим є спонукання.",
    definition: "Хортативна або ексортативна конструкція — висловлення, що спонукає адресата або групу, включно з мовцем, до певної дії.",
    uses: [
      { title: "Спільна дія", body: "`Vamos + infinitivo` може пропонувати дію, яку мовець виконує разом зі співрозмовником.", examples: [ex("Vamos começar.", "Почнімо.")] },
      { title: "Пряме спонукання", body: "Імператив та інші директивні форми можуть виконувати спонукальну функцію, але не кожне спонукання має форму імператива.", examples: [ex("Vamos embora!", "Ходімо!")] }
    ],
    examples: [ex("Vamos começar.", "Почнімо.", { purpose: "production" }), ex("Vamos embora!", "Ходімо!", { purpose: "comprehension" })],
    mistakes: [mistake("ототожнювати будь-яке спонукання з імперативом", "визначати учасників дії та комунікативну функцію перед вибором форми", "Хортативна функція може реалізовуватися не лише наказовим способом.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українське «ходімо», «почнімо», «давайте почнемо» показує, що спільне спонукання теж має окремі моделі. Португальське `vamos` не слід механічно прирівнювати до одного українського варіанта в усіх контекстах.",
    regional: "Спонукальні конструкції сильно залежать від ситуації, соціальної дистанції та регістру; `vamos` має ширше значення, ніж лише формальна граматична категорія хортатива.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  })
];
