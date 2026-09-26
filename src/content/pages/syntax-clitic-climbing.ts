import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "clitic-climbing",
    slug: "clitic-climbing",
    category: "syntax",
    titleUk: "Підняття клітики",
    titlePt: "Subida do clítico",
    titleEn: "Clitic climbing",
    summary: "Як клітика може з'являтися біля матричного дієслова у складених конструкціях, замість позиції біля інфінітива.",
    aliases: ["clitic climbing","subida do clítico","підняття клітики"],
    related: ["clitic-placement","personal-infinitive","complex-predicates"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "У складених дієслівних конструкціях клітика може бути пов'язана семантично з інфінітивом, але поверхнево стояти біля іншого дієслова. Порівняйте Quero vê-lo і Quero-o ver: у другій моделі o стоїть біля querer, але інтерпретується як об'єкт нижчого ver. Це не довільне пересування: можливість залежить від типу складеного предиката, різновиду та регістру. За запереченням маємо Não o quero ver, де não впливає на позицію клітики.",
    definition: "Clitic climbing — синтаксичне розміщення клітики поза тим дієслівним компонентом, з яким вона пов’язана як аргумент. У португальських описах важливо розрізняти саме лінійну позицію клітики та її синтаксичну роль: o у Quero-o ver не стає додатком querer лише тому, що стоїть після нього.",
    formation: "Для аналізу спочатку знайдіть предикат, який семантично приймає об'єкт: у Quero vê-lo об'єкт належить a ver. Далі перевірте, чи конструкція допускає клитичне підняття до матричного дієслова. У європейській нормі це особливо помітно з певними модальними, аспектуальними та іншими перипразами; конкретний розподіл залежить від конструкції. Заперечення, підрядні сполучники та інші proclisis triggers можуть змінювати поверхневу позицію: Não o quero ver.",
    uses: [
      { title: "Два допустимі розташування", body: "У конструкціях, де підняття доступне, клітика може залишатися при інфінітиві або з'являтися при матричному дієслові. Ці варіанти не означають дві різні аргументні структури.", examples: [{ pt: "Quero vê-lo.", uk: "Я хочу побачити його." }, { pt: "Quero-o ver.", uk: "Я хочу його побачити.", variety: "PT" }] },
      { title: "Заперечення", body: "Слово não є сильним тригером проклізи, тому клітика може стояти перед матричним дієсловом.", examples: [{ pt: "Não o quero ver.", uk: "Я не хочу його бачити.", variety: "PT" }] },
      { title: "Не кожна перифраза", body: "Не переносіть правило з querer на будь-яку послідовність дієслів. Сумісність залежить від синтаксичного статусу другого дієслова, типу конструкції та різновиду португальської.", examples: [{ pt: "É importante vê-lo.", uk: "Важливо побачити його.", purpose: "contrast" }] },
      { title: "Аргументна роль", body: "Клітика може бути об'єктом нижчого дієслова навіть тоді, коли поверхнево стоїть біля матричного. Це особливо важливо під час синтаксичного розбору.", examples: [{ pt: "Quero-o ver amanhã.", uk: "Я хочу побачити його завтра.", variety: "PT" }] }
    ],
    examples: [
      { pt: "Quero vê-lo.", uk: "Я хочу побачити його.", purpose: "contrast" },
      { pt: "Quero-o ver.", uk: "Я хочу його побачити.", variety: "PT", purpose: "contrast" },
      { pt: "Não o quero ver.", uk: "Я не хочу його бачити.", variety: "PT", purpose: "contrast" },
      { pt: "Vou vê-lo amanhã.", uk: "Я побачу його завтра.", variety: "PT", purpose: "comprehension" },
      { pt: "Não o vou ver amanhã.", uk: "Я не побачу його завтра.", variety: "PT", purpose: "contrast" },
      { pt: "Quero ver-te amanhã.", uk: "Я хочу побачити тебе завтра.", variety: "PT", purpose: "production" }
    ],
    mistakes: [
      mistake("вважати позицію клітики вільною","визначати тип складеного предиката та цільовий стандарт","Clitic climbing має конструкційні обмеження.","predicted-l1-transfer","high"),
      mistake("Quero-o ver → трактувати o як об'єкт querer","аналізувати o як клітику, пов'язану з ver","Лінійна позиція не тотожна аргументній ролі.","predicted-l1-transfer","high"),
      mistake("переносити Quero-o ver на будь-які два дієслова","перевіряти конкретну перифразну конструкцію","Clitic climbing має лексико-синтаксичні обмеження.","editorial","high"),
      mistake("вважати Quero vê-lo і Quero-o ver абсолютно тотожними в усіх різновидах","позначати стандарт і регістр","Розподіл позицій клітики варіює між PT-PT і PT-BR та залежить від конструкції.","documented","high")
    ],
    ukrainian: "Українська не має тотожної системи клітичного розміщення, тому позицію треба вчити разом із конструкцією.",
    regional: "У PT-PT clitic climbing у конструкціях на кшталт Quero-o ver є важливою частиною формальної системи. У PT-BR сучасне розмовне мовлення значно частіше використовує проклітичні або аналітичні моделі, тому не слід подавати одну позицію як універсальну для всіх різновидів.",
    brPt: "Контраст PT-BR/PT-PT тут особливо корисний: форма, яку читач має впізнавати у формальному PT-PT, не обов'язково є найтиповішою для розмовного PT-BR. Навчальний матеріал має розділяти граматичну можливість, частотність і регістр.",
    sources: [
      { label: "Ciberdúvidas — Colocação dos pronomes átonos", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/colocacao-dos-pronomes-atonos/2452" },
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/" }
    ],
  }
];
