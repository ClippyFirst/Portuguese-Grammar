import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "exclamatives",
    slug: "exclamatives",
    category: "syntax",
    titleUk: "Окличні конструкції",
    titlePt: "Construções exclamativas",
    titleEn: "Exclamative constructions",
    summary: "Конструкції, що виражають високу інтенсивність, оцінку або емоційну реакцію.",
    aliases: ["окличні речення","exclamatives","exclamativas","інтенсивність"],
    related: ["speech-acts","information-structure","punctuation","interjections"],
    status: "draft", origin: "handwritten", depth: "medium", ukrainianContrast: "medium",
    intro: "Окличність — не просто знак оклику. Португальська має конструкції, у яких граматична форма й порядок компонентів допомагають виразити високу міру, здивування або оцінку: Que livro interessante!, Como ele trabalha!, Que bom que vieste! Пунктуація підсилює інтерпретацію, але не створює її сама.",
    definition: "Оклична конструкція — висловлення або конструкція, організована для вираження інтенсивної оцінки, емоційної реакції чи іншої експресивної інтерпретації.",
    uses: [
      { title: "Que + іменна група", body: "Que може входити до моделі оцінки високого ступеня.", examples: [ex("Que dia lindo!", "Який чудовий день!")] },
      { title: "Como + предикат", body: "Como може вводити окличну оцінку інтенсивності дії або властивості.", examples: [ex("Como ele corre!", "Як він швидко біжить!")] },
      { title: "Que bom que...", body: "Окличність може поєднуватися з оцінкою ситуації, вираженою підрядною частиною.", examples: [ex("Que bom que vieste!", "Як добре, що ти прийшов/прийшла!")] }
    ],
    examples: [
      ex("Que surpresa!", "Який сюрприз!", { purpose: "production" }),
      ex("Como está frio!", "Як холодно!", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати знак ! достатнім для утворення окличної конструкції","аналізувати синтаксичну модель та експресивну функцію","Розповідне речення може бути емоційним і без спеціальної exclamative-конструкції.","editorial","high"),
      mistake("перекладати que як одне значення в усіх окличних моделях","розпізнавати конкретну конструкцію","Форма que може виконувати різні граматичні функції; її не слід зводити до одного перекладу.","predicted-l1-transfer","medium")
    ],
    ukrainian: "Українська теж має окличні речення та моделі на кшталт «Який чудовий день!». Однак португальські моделі que/como мають власний синтаксичний розподіл; переклад не є достатнім правилом.",
    regional: "Окличні конструкції чутливі до інтонації, контексту та жанру. Ця стаття не прирівнює всі регіональні й розмовні моделі до одного стандарту.",
  }
];
