import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "adverb-scope", slug: "adverb-scope", category: "adverbs",
    titleUk: "Область дії прислівника", titlePt: "Escopo dos advérbios", titleEn: "Adverb scope",
    summary: "Як визначати, до чого саме належить прислівник: до дієслова, групи або всього висловлення.",
    aliases: ["область дії прислівника", "adverb scope", "escopo dos advérbios"],
    related: ["adverb-position", "scope-and-reference", "semantic-ambiguity", "adverbs-degree"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Одна з головних причин неоднозначності прислівників — їхня область дії. Só, também, provavelmente, quase та інші форми можуть стосуватися різних компонентів висловлення. Щоб правильно інтерпретувати речення, недостатньо перекласти прислівник окремим словом: треба встановити, який компонент він модифікує.",
    definition: "Область дії прислівника — той компонент або рівень висловлення, на який поширюється його семантичний чи прагматичний вплив.",
    uses: [
      { title: "Обмеження компонента", body: "Só може обмежувати конкретну групу, а не все речення; позиція допомагає встановити інтерпретацію.", examples: [ex("Só a Ana veio.", "Прийшла лише Ана.")] },
      { title: "Додавання", body: "Também може приєднувати новий факт до вже відомого контексту.", examples: [ex("A Ana também veio.", "Ана теж прийшла.")] },
      { title: "Оцінка всієї пропозиції", body: "Епістемічний прислівник може мати широку область дії.", examples: [ex("Provavelmente, a Ana vem amanhã.", "Імовірно, Ана прийде завтра.")] }
    ],
    examples: [ex("Só a Ana veio.", "Прийшла лише Ана.", { purpose: "comprehension" }), ex("A Ana também veio.", "Ана теж прийшла.", { purpose: "production" }), ex("Provavelmente, a Ana vem amanhã.", "Імовірно, Ана прийде завтра.", { purpose: "contrast" })],
    mistakes: [mistake("перекладати прислівник правильно, але не визначати, який компонент він обмежує або коментує", "перефразувати речення українською так, щоб було видно область дії", "Український переклад може зберігати слово, але втрачати його точний структурний зв'язок із компонентом.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська теж має прислівники з різною областю дії, особливо лише, теж, майже, ймовірно та подібні. Корисно порівнювати не слова, а структуру: що саме обмежується, оцінюється або додається.",
    regional: "Область дії часто взаємодіє з інтонацією та інформаційною структурою, особливо в усному мовленні; письмова позиція не завжди однозначно визначає інтерпретацію.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }]
  }),
  page({
    id: "sentence-adverbs", slug: "sentence-adverbs", category: "adverbs",
    titleUk: "Прислівники всього речення", titlePt: "Advérbios de frase", titleEn: "Sentence adverbs",
    summary: "Прислівники, що коментують пропозицію або ставлення мовця до неї.",
    aliases: ["прислівники речення", "sentence adverbs", "advérbios de frase"],
    related: ["adverbs-overview", "epistemic-adverbs", "discourse-markers", "adverb-position"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Деякі прислівники не описують спосіб виконання дії, а коментують усе висловлення. Вони можуть виражати оцінку, ступінь упевненості або ставлення мовця. Через це їх варто відрізняти від прислівників способу, які безпосередньо модифікують подію.",
    definition: "Прислівник речення — прислівниковий елемент, чия семантична або прагматична область дії охоплює пропозицію чи ставлення мовця до неї.",
    uses: [
      { title: "Епістемічна оцінка", body: "Прислівник виражає оцінку ймовірності істинності висловлення.", examples: [ex("Provavelmente, ele já chegou.", "Імовірно, він уже прийшов.")] },
      { title: "Оцінка ситуації", body: "Оціночний прислівник може характеризувати ситуацію з погляду мовця.", examples: [ex("Infelizmente, não podemos ficar.", "На жаль, ми не можемо залишитися.")] },
      { title: "Дискурсивна організація", body: "Деякі прислівникові елементи організовують зв'язок між висловленнями, а не описують саму дію.", examples: [ex("Enfim, vamos continuar.", "Зрештою, продовжімо.")] }
    ],
    examples: [ex("Provavelmente, ele já chegou.", "Імовірно, він уже прийшов.", { purpose: "comprehension" }), ex("Infelizmente, não podemos ficar.", "На жаль, ми не можемо залишитися.", { purpose: "production" })],
    mistakes: [mistake("вважати всі прислівники однаковими обставинами способу", "визначати, чи прислівник описує подію, чи коментує всю пропозицію", "Українські відповідники «на жаль» та «імовірно» також можуть мати широке охоплення, тому дослівний переклад не пояснює їхньої синтаксичної ролі.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має подібну відмінність між обставинними прислівниками та словами або сполуками, що коментують усе повідомлення. Це позитивна аналогія, але португальські класи й позиції не треба ототожнювати один до одного.",
    regional: "Розмежування прислівника речення та дискурсивного маркера може залежати від конкретної лексеми й контексту; не всі елементи на периферії речення мають однаковий статус.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "epistemic-adverbs", slug: "epistemic-adverbs", category: "adverbs",
    titleUk: "Епістемічні прислівники", titlePt: "Advérbios epistémicos", titleEn: "Epistemic adverbs",
    summary: "Як прислівники виражають ступінь упевненості, припущення та оцінку істинності.",
    aliases: ["епістемічні прислівники", "epistemic adverbs", "advérbios epistémicos"],
    related: ["sentence-adverbs", "modality-overview", "adverb-scope", "modal-particles"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Епістемічні прислівники повідомляють не стільки про саму подію, скільки про ставлення мовця до істинності висловлення. Provavelmente, talvez, certamente та possivelmente можуть розташовуватися на різних позиціях і взаємодіяти з модальністю, способом та інтонацією.",
    definition: "Епістемічний прислівник — прислівниковий засіб, що кодує або сигналізує оцінку ймовірності, впевненості чи іншого епістемічного ставлення до пропозиції.",
    uses: [
      { title: "Висока впевненість", body: "Елемент може подавати пропозицію як таку, яку мовець оцінює як дуже ймовірну або певну.", examples: [ex("Certamente, ele sabe a resposta.", "Безперечно, він знає відповідь.")] },
      { title: "Імовірність", body: "Provavelmente послаблює категоричність твердження й указує на оцінку ймовірності.", examples: [ex("Provavelmente, ela chega amanhã.", "Імовірно, вона приїде завтра.")] },
      { title: "Можливість", body: "Talvez може вводити припущення; вибір форми треба розглядати разом із конструкцією й способом.", examples: [ex("Talvez ele venha amanhã.", "Можливо, він прийде завтра.")] }
    ],
    examples: [ex("Certamente, ele sabe a resposta.", "Безперечно, він знає відповідь.", { purpose: "comprehension" }), ex("Provavelmente, ela chega amanhã.", "Імовірно, вона приїде завтра.", { purpose: "production" }), ex("Talvez ele venha amanhã.", "Можливо, він прийде завтра.", { purpose: "contrast" })],
    mistakes: [mistake("вважати епістемічний прислівник простим синонімом модального дієслова", "визначати, чи модальність виражена прислівником, дієсловом, способом або комбінацією засобів", "Українське «можливо» може перекладатися різними португальськими конструкціями залежно від синтаксису й комунікативної мети.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має функціональні відповідники: «ймовірно», «можливо», «безперечно», «напевно». Водночас португальський вибір між прислівником, модальним дієсловом і conjuntivo не зводиться до прямого словникового перекладу.",
    regional: "Частотність і позиційні переваги епістемічних прислівників можуть залежати від регістру та різновиду; конкретні частотні твердження потребують корпусного підтвердження.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "connective-adverbs", slug: "connective-adverbs", category: "adverbs",
    titleUk: "Зв'язкові прислівники", titlePt: "Advérbios conectivos", titleEn: "Connective adverbs",
    summary: "Як portanto, contudo, além disso та подібні елементи організовують зв'язок між висловленнями.",
    aliases: ["зв'язкові прислівники", "connective adverbs", "advérbios conectivos"],
    related: ["adverbs-overview", "discourse-markers", "coordinating", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Деякі прислівникові елементи виконують зв'язкову функцію: показують додавання, протиставлення, наслідок, висновок або перехід у дискурсі. Їх легко сплутати зі сполучниками, але синтаксичний статус і пунктуаційна поведінка можуть бути іншими.",
    definition: "Зв'язковий прислівник — прислівниковий або прислівниково-подібний елемент, який організовує логічний чи дискурсивний зв'язок між частинами тексту.",
    uses: [
      { title: "Наслідок або висновок", body: "Portanto може сигналізувати висновок; його синтаксична поведінка не зводиться до простого підрядного сполучника.", examples: [ex("Estava cansado; portanto, foi para casa.", "Він був утомлений; тому пішов додому.")] },
      { title: "Протиставлення", body: "Contudo може вводити контраст із попереднім висловленням.", examples: [ex("Queria ir; contudo, fiquei em casa.", "Я хотів/хотіла піти, проте залишився/залишилася вдома.")] },
      { title: "Додавання", body: "Além disso додає новий аргумент або факт.", examples: [ex("É barato e, além disso, funciona bem.", "Це дешево й, крім того, добре працює.")] }
    ],
    examples: [ex("Estava cansado; portanto, foi para casa.", "Він був утомлений; тому пішов додому.", { purpose: "comprehension" }), ex("Queria ir; contudo, fiquei em casa.", "Я хотів/хотіла піти, проте залишився/залишилася вдома.", { purpose: "production" })],
    mistakes: [mistake("називати всі зв'язкові слова сполучниками", "перевіряти синтаксичний статус елемента та його зв'язок із сусідніми висловленнями", "Українські «тому», «проте», «крім того» теж можуть мати різний синтаксичний статус, тому буквальна відповідність ненадійна.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська також має зв'язкові прислівники та прислівникові сполуки. Корисно порівнювати їх за функцією — додавання, контраст, наслідок, висновок — і окремо за синтаксичним статусом.",
    regional: "Частина зв'язкових елементів має різну частотність у писемному та усному мовленні. Регістр і пунктуація особливо важливі для формальніших елементів.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "adverbs-mente", slug: "adverbs-mente", category: "adverbs",
    titleUk: "Прислівники на -mente", titlePt: "Advérbios em -mente", titleEn: "Adverbs ending in -mente",
    summary: "Як утворюються та інтерпретуються прислівники на -mente.",
    aliases: ["прислівники на -mente", "adverbs in -mente", "advérbios em -mente"],
    related: ["mente-formation", "adverb-position", "sentence-adverbs", "adjective-agreement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Суфікс -mente утворює велику кількість прислівників від прикметників: claro → claramente, rápido → rapidamente, possível → possivelmente. Але навчальне правило не повинно зводитися до «додай -mente до будь-якого прикметника»: треба враховувати форму прикметника, орфографію, значення та синтаксичну роль утвореного прислівника.",
    definition: "Прислівник на -mente — прислівникова форма, історично пов'язана з жіночою формою прикметника та компонентом mente, яка в сучасній португальській функціонує як прислівниковий утворювач.",
    uses: [
      { title: "Утворення від прикметника", body: "У багатьох випадках до жіночої форми прикметника додається -mente.", examples: [ex("clara → claramente", "чітка → чітко")] },
      { title: "Незмінність", body: "Прислівник на -mente не узгоджується з підметом чи іменником.", examples: [ex("Eles falaram claramente.", "Вони говорили чітко.")] },
      { title: "Різна функція", body: "Та сама словотвірна модель може давати прислівники способу або елементи з ширшою областю дії.", examples: [ex("Felizmente, chegámos cedo.", "На щастя, ми прийшли рано.")] }
    ],
    examples: [ex("Ela explicou claramente o problema.", "Вона чітко пояснила проблему.", { purpose: "production" }), ex("Felizmente, chegámos cedo.", "На щастя, ми прийшли рано.", { purpose: "contrast" })],
    mistakes: [mistake("вважати, що будь-яке слово на -mente є механічним перекладом українського прислівника на -о", "визначати твірний прикметник, правильну форму та функцію утвореного прислівника", "Українські прислівники мають іншу словотвірну систему; формальна аналогія за суфіксом не є прямою.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська широко утворює прислівники від прикметників, часто за допомогою -о, тому загальна словотвірна аналогія корисна. Проте португальську модель -mente треба засвоювати як окрему морфологічну конструкцію.",
    regional: "Усі форми на -mente не мають однакової частотності чи стилістичного профілю. Конкретні твердження про продуктивність і частотність потребують словникової або корпусної перевірки.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  })
];
