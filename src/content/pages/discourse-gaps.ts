import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({ ...p, status: "draft", origin: "handwritten" });

export const pages: GrammarPage[] = [
  draft({
    id:"discourse-reference",slug:"reference",category:"discourse",
    titleUk:"Референція в дискурсі",titlePt:"Referência no discurso",titleEn:"Discourse reference",
    summary:"Як мовець вводить, підтримує, уточнює та змінює референт за допомогою іменних груп і займенників.",
    aliases:["discourse reference","referência","anaphora","анафора"],
    related:["discourse-overview","cohesion-reference","articles-definite","definite-null-subjects","generic-reference"],
    depth:"high",ukrainianContrast:"high",
    intro:"Референція — це не просто питання «який предмет означає слово». У тексті мовець постійно вводить нових учасників, повертається до вже згаданих, змінює фокус і передає відповідальність за ідентифікацію читачеві. Португальська використовує для цього означені й неозначені іменні групи, займенники, нульові підмети, лексичний повтор та вказівні форми. Вибір між ними залежить від того, наскільки референт доступний у дискурсі.",
    definition:"Дискурсивна референція — організація способів, якими мовна форма і контекст дозволяють ідентифікувати учасника, об'єкт або поняття в межах тексту чи розмови.",
    formation:"Уведення нового референта часто використовує um/uma або іншу невизначену форму: Vi um homem. Коли той самий референт стає доступним, природним є O homem entrou. Якщо референт легко відновлюється, можливі займенник або нульовий підмет: A Maria entrou. Ø Sentou-se. При кількох потенційних референтах повтор іменника може бути яснішим за займенник.",
    uses:[
      {title:"Введення нового референта",body:"Невизначена іменна група може представити учасника вперше.",examples:[{pt:"Vi um homem na rua.",uk:"Я побачив/побачила чоловіка на вулиці.",purpose:"production"}]},
      {title:"Анафоричне продовження",body:"Після введення референта означена група або займенник може підтримувати його в дискурсі.",examples:[{pt:"Vi um homem. O homem entrou numa loja.",uk:"Я побачив/побачила чоловіка. Чоловік зайшов у магазин.",purpose:"production"},{pt:"Vi a Maria. Ela estava cansada.",uk:"Я побачив/побачила Марію. Вона була втомлена.",purpose:"production"}]},
      {title:"Нульовий підмет",body:"Коли референт достатньо доступний, повторювати займенник необов'язково.",examples:[{pt:"A Maria entrou e Ø sentou-se.",uk:"Марія увійшла і сіла.",purpose:"production"}]},
      {title:"Уточнення при конкуренції",body:"Якщо займенник може мати кілька антецедентів, іменна група може зменшити двозначність.",examples:[{pt:"O João falou com o Pedro. O João saiu primeiro.",uk:"Жуан поговорив із Педру. Жуан вийшов першим.",purpose:"comprehension"}]}
    ],
    examples:[
      {pt:"Vi um homem na rua.",uk:"Я побачив/побачила чоловіка на вулиці.",purpose:"production"},
      {pt:"Vi um homem. O homem entrou numa loja.",uk:"Я побачив/побачила чоловіка. Чоловік зайшов у магазин.",purpose:"production"},
      {pt:"Vi a Maria. Ela estava cansada.",uk:"Я побачив/побачила Марію. Вона була втомлена.",purpose:"production"},
      {pt:"A Maria entrou e Ø sentou-se.",uk:"Марія увійшла і сіла.",purpose:"production"},
      {pt:"O João falou com o Pedro. O João saiu primeiro.",uk:"Жуан поговорив із Педру. Жуан вийшов першим.",purpose:"comprehension"}
    ],
    mistakes:[
      mistake("використовувати um/uma для вже ідентифікованого референта без контекстної причини","розрізняти введення та підтримку референта","Неозначена форма часто представляє нового учасника.","predicted-l1-transfer","high"),
      mistake("повторювати іменник у кожному реченні","оцінювати доступність референта та можливість займенника або нульового підмета","Надмірний повтор може бути неприродним, якщо референт очевидний.","editorial","medium"),
      mistake("використовувати займенник при двох потенційних антецедентах","перевіряти кореференцію та ясність","Займенник може створити двозначність.","documented","high")
    ],
    ukrainian:"Українська також розрізняє введення й повторну згадку референта та широко використовує нульовий підмет. Головна додаткова складність португальської — взаємодія референції з артиклями та системою явних/нульових підметів.",
    regional:"Механізми референції спільні, але частотність займенників, нульових підметів і деяких означених груп змінюється між різновидами.",
    brPt:"У PT-BR явні особові займенники в дискурсі частіші, ніж у PT-PT, тому український студент може зустрічати більше форм типу ele/ela там, де в PT-PT референт легше залишають нульовим.",
    sources:[
      {label:"Ciberdúvidas — Sujeito nulo subentendido",url:"https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/sujeito-nulo-subentendido/30517"},
      {label:"Dicionário Terminológico — Direção-Geral da Educação",url:"https://area.dge.mec.pt/gramatica/DT_2008.pdf"}
    ]
  })
];
