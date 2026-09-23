import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "valency-overview", slug: "overview", category: "valency",
    titleUk: "Валентність дієслова", titlePt: "Valência verbal", titleEn: "Verb valency",
    summary: "Які аргументи дієслово відкриває та чим вони відрізняються від вільних модифікаторів.",
    aliases: ["валентність","valency","valência","аргумент","argument"],
    related: ["government-overview","word-order","direct-object","indirect-object","complement-clauses"],
    intro: "Валентність описує, скільки і яких учасників ситуації вимагає або типово ліцензує предикат. Це корисніше за правило «після цього дієслова ставимо прийменник X»: dar має агента, тему й адресата; gostar вибирає прийменниковий компонент de.",
    formulas: [{ label: "Аргументи", pattern: "V + ARG1 + ARG2 (+ MODIFIER)", note: "Аргумент пов'язаний із лексичним значенням предиката; модифікатор додається вільніше." }],
    uses: [
      { title: "Одновалентний", body: "dormir може утворити повне речення без об'єкта.", examples: [ex("A criança dormiu.","Дитина спала.")] },
      { title: "Двовалентний", body: "comer типово має підмет і об'єкт.", examples: [ex("A criança comeu a sopa.","Дитина з'їла суп.")] },
      { title: "Тривалентний", body: "dar має агента, тему та адресата.", examples: [ex("A Ana deu o livro ao João.","Ана дала книжку Жуану.")] },
    ],
    examples: [ex("O João mora em Lisboa.","Жуан живе в Лісабоні."),ex("A Ana pôs o livro na mesa.","Ана поклала книжку на стіл.")],
    mistakes: [mistake("вважати em Lisboa завжди вільною обставиною","дивитися, чи предикат потребує локативного компонента","morar семантично відкриває позицію місця, хоча аналіз залежить від теоретичної моделі."),mistake("вивчати gostar без de","gostar de + complemento","Прийменник є частиною моделі керування.")],
    ukrainian: "Українська також має керування: потребувати чого, залежати від чого. Але розподіл прийменників і відмінків не збігається з португальським.",
    brPt: "Назви синтаксичних типів можуть відрізнятися між BR та PT; принцип лексичної селекції спільний.",
    regional: "Варіантність керування слід позначати окремо, а не змішувати її з помилкою.",
    tables: [{ caption: "Базові моделі", headers: ["Дієслово","Модель","Приклад"], rows: [["dormir","S + V","A criança dormiu."],["comer","S + V + OD","Comeu a sopa."],["gostar","S + V + de + complemento","Gosta de música."],["dar","S + V + OD + OI","Deu o livro ao João."],["pôr","S + V + OD + lugar","Pôs o livro na mesa."]] }],
  },
  {
    id: "government-overview", slug: "government", category: "valency",
    titleUk: "Керування: дієслово + прийменник", titlePt: "Regência verbal", titleEn: "Verb government",
    summary: "Коли прийменник є частиною лексичної моделі дієслова.",
    aliases: ["керування","regência verbal","government","verb-preposition"],
    related: ["valency-overview","verb-preposition","prep-por","prep-para","prep-de"],
    intro: "Керування — конкретний прояв валентності: лексема визначає, який тип доповнення їй потрібен і, в частині випадків, який прийменник його вводить. gostar de, precisar de та інші моделі не можна надійно вивести з українського перекладу.",
    uses: [
      { title: "de", body: "gostar de, precisar de, lembrar-se de та багато інших моделей.", examples: [ex("Gosto de música.","Я люблю музику."),ex("Preciso de ajuda.","Мені потрібна допомога.")] },
      { title: "a", body: "Деякі дієслова вимагають a; модель треба перевіряти за значенням і різновидом.", examples: [ex("Assisti ao filme.","Я подивився фільм.",{ variety: "PT" })] },
      { title: "Без прийменника", body: "Інші дієслова беруть прямий додаток без прийменника.", examples: [ex("Comprei o livro.","Я купив книжку.")] },
    ],
    mistakes: [mistake("gostar música","gostar de música","Українське «любити музику» не дає португальської моделі автоматично."),mistake("переносити прийменник із українського перекладу","вивчати дієслово разом із моделлю доповнення","Керування є властивістю лексеми.")],
    ukrainian: "Український відмінок часто кодує те, що португальська кодує прийменником. Напрямок керування треба вчити для португальської окремо.",
    brPt: "Частина моделей і частотностей відрізняється між BR та PT. Для спірних випадків треба вказувати різновид.",
    regional: "Керування — зона, де словникова й граматична норма можуть мати варіанти; перевіряйте сучасні словники та корпуси.",
  },
  {
    id: "argument-vs-adjunct", slug: "argument-vs-adjunct", category: "valency",
    titleUk: "Аргумент чи обставина?", titlePt: "Complemento ou modificador?", titleEn: "Argument vs adjunct",
    summary: "Як не називати всі прийменникові групи «обставинами».",
    aliases: ["аргумент","обставина","adjunct","complemento","modificador"],
    related: ["valency-overview","government-overview","word-order"],
    intro: "Не кожна група після дієслова є вільною обставиною. O João mora em Lisboa і O João trabalhou em Lisboa обидва мають місце, але локативний компонент у першому випадку тісніше пов'язаний із предикатом.",
    uses: [
      { title: "Компонент, пов'язаний із предикатом", body: "Якщо прибрати компонент, структура або значення предиката істотно змінюється.", examples: [ex("A Ana pôs o livro na mesa.","Ана поклала книжку на стіл."),ex("A Ana pôs o livro.","Форма можлива лише в спеціальному контексті.")] },
      { title: "Вільний модифікатор", body: "Час, спосіб або місце часто можна додати до широкого класу предикатів.", examples: [ex("A Ana trabalhou ontem.","Ана працювала вчора."),ex("A Ana trabalhou em Lisboa ontem.","Ана працювала в Лісабоні вчора.")] },
    ],
    ukrainian: "Українська шкільна традиція часто групує такі компоненти як обставини. Для довідника корисніше окремо показувати, що вибирає дієслово, а що додає мовець.",
    brPt: "Термінологія синтаксису BR та PT може відрізнятися. Важливіше показувати структуру й приклад, ніж нав'язувати одну школу аналізу.",
    regional: "Дивіться також сторінки про конкретні прийменники та дієслівне керування.",
  },
];