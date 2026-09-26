import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({ ...p, status: "draft", origin: "handwritten" });

export const pages: GrammarPage[] = [
  draft({
    id:"discourse-and-pragmatics",slug:"discourse-pragmatics",category:"pragmatics",
    titleUk:"Дискурс і прагматика",titlePt:"Discurso e pragmática",titleEn:"Discourse and pragmatics",
    summary:"Як граматична форма, контекст і мовленнєва ситуація разом визначають інтерпретацію висловлення.",
    aliases:["discourse pragmatics","discurso","pragmática"],
    related:["discourse-overview","pragmatics-overview","speech-acts","information-structure","register-and-directness"],
    depth:"high",ukrainianContrast:"high",
    intro:"Граматика описує форму, але форма не завжди визначає повну комунікативну функцію. Pode fechar a janela? формально є питанням про можливість, проте в реальній ситуації може бути ввічливим проханням. Isso eu não sei має передній компонент як тему, а не просто «неправильний» порядок слів. Дискурс і прагматика потрібні саме для пояснення таких випадків: що вже відомо, що є новим, яку дію виконує мовець і як контекст змінює інтерпретацію.",
    definition:"Дискурс — організація висловлень у зв'язному тексті або взаємодії; прагматика — інтерпретація мовних форм у контексті, включно з наміром мовця, спільним знанням та соціальною ситуацією.",
    formation:"Аналізуйте висловлення на кількох рівнях: 1) буквальний зміст; 2) граматичний тип; 3) інформаційна структура; 4) мовленнєвий акт; 5) регістр і відносини між співрозмовниками. Один рівень не повинен замінювати інший. Особливо важливо не робити висновок про намір мовця лише з пунктуації або перекладу.",
    uses:[
      {title:"Питання як прохання",body:"Питальна форма може мати директивну функцію, якщо контекст робить це природним.",examples:[{pt:"Pode fechar a janela?",uk:"Можете зачинити вікно?",purpose:"production"},{pt:"Pode trazer o relatório amanhã?",uk:"Можете принести звіт завтра?",purpose:"production"}]},
      {title:"Тема перед коментарем",body:"Передній компонент може задавати тему, щодо якої дається повідомлення.",examples:[{pt:"Isso eu não sei.",uk:"Ось цього я не знаю.",purpose:"contrast"},{pt:"Esse livro, já o li.",uk:"Цю книжку я вже прочитав/прочитала.",purpose:"contrast"}]},
      {title:"Корекція та контраст",body:"Одна репліка може коригувати попереднє припущення, не змінюючи базової граматичної форми.",examples:[{pt:"Ele veio, sim.",uk:"Він таки прийшов.",purpose:"contrast"}]},
      {title:"Регістр",body:"Та сама пропозиція може бути реалізована різними формами залежно від дистанції та ситуації.",examples:[{pt:"Pode esperar?",uk:"Можете зачекати?",purpose:"production"},{pt:"Espera aí.",uk:"Зачекай-но.",purpose:"contrast"}]}
    ],
    examples:[
      {pt:"Pode fechar a janela?",uk:"Можете зачинити вікно?",purpose:"production"},
      {pt:"Isso eu não sei.",uk:"Ось цього я не знаю.",purpose:"contrast"},
      {pt:"Ele veio, sim.",uk:"Він таки прийшов.",purpose:"contrast"},
      {pt:"Pode esperar?",uk:"Можете зачекати?",purpose:"production"}
    ],
    mistakes:[
      mistake("вважати граматичний тип тотожним мовленнєвому акту","розділяти форму речення і комунікативну функцію","Питання може функціонувати як прохання, а розповідне речення — як попередження чи обіцянка.","editorial","high"),
      mistake("перекладати буквальний зміст без урахування контексту","перевіряти спільне знання та ситуацію","Прагматичний ефект часто не має одного сталого перекладу.","predicted-l1-transfer","high"),
      mistake("вважати fronting помилкою через невідповідність українському SVO","визначати тему й фокус","Передній компонент може бути інформаційно мотивованим.","predicted-l1-transfer","medium")
    ],
    ukrainian:"Українська також має непрямі прохання, тематизацію, корекцію та регістрові відмінності. Позитивний перенос корисний на рівні принципу, але конкретні португальські форми не слід перекладати механічно.",
    regional:"Прагматика особливо чутлива до країни, регістру, віку, соціальних відносин та конкретної ситуації. Одна граматична форма не має гарантованого прагматичного ефекту поза контекстом.",
    brPt:"PT-BR та PT-PT мають спільні базові прагматичні механізми, але відрізняються частотністю займенників, форм звертання, розмовних конструкцій і деяких способів пом'якшення.",
    sources:[
      {label:"Dicionário Terminológico — Direção-Geral da Educação",url:"https://area.dge.mec.pt/gramatica/DT_2008.pdf"},
      {label:"Ciberdúvidas — Ato ilocutório diretivo e intenção perlocutória",url:"https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/ato-ilocutorio-diretivo-e-intencao-perlocutoria/37803"}
    ]
  })
];
