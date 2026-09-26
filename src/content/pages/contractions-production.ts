import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G1="https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/";
const G2="https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const C="https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";
const draft=(p:GrammarPage):GrammarPage=>({...p,status:"draft",origin:"handwritten"});

export const pages:GrammarPage[]=[
draft(page({
id:"prep-demonstrative",slug:"demonstrative",category:"contractions",titleUk:"Прийменник + вказівний займенник",titlePt:"Preposição + demonstrativo",titleEn:"Preposition + demonstrative",
summary:"Як прийменники поєднуються з este/esse/aquele та isto/isso/aquilo: neste, deste, àquele, nisso, daquilo.",
aliases:["прийменник + вказівний","preposição + demonstrativo","neste","deste","àquele","daquilo"],
related:["demonstratives","prep-a","prep-de","prep-em","crase","contractions-overview"],depth:"medium",ukrainianContrast:"high",
intro:"Форми neste, deste, naquele, nisso та daquilo прозоро пов'язані з прийменником і вказівною формою. Для україномовного студента вони легко перетворюються на список винятків, хоча значна частина системи є регулярною: спочатку визначається прийменник, потім demonstrativo, а далі — нормативна форма злиття.",
definition:"Прийменникова форма з demonstrativo — поєднання прийменника з вказівним займенником або детермінативом, часто із нормативним злиттям.",
formulas:[
{pattern:"em + este/esse/aquele → neste/nesse/naquele",note:"Злиття em з вказівною формою."},
{pattern:"de + este/esse/aquele → deste/desse/daquele",note:"Злиття de з вказівною формою."},
{pattern:"a + aquele/aquela/aquilo → àquele/àquela/àquilo",note:"a зливається з початковим a demonstrativo; це crase."},
{pattern:"em + isto/isso/aquilo → nisto/nisso/naquilo",note:"Нейтральні demonstrativos також мають злиті форми з em."}],
uses:[
{title:"em + demonstrativo",body:"Злиття поєднує значення em із референційною або просторовою функцією demonstrativo.",examples:[ex("Pensei nisso ontem.","Я думав/думала про це вчора.",{purpose:"production"}),ex("Moro naquela cidade.","Я живу в тому місті.",{purpose:"production"})]},
{title:"de + demonstrativo",body:"Форми deste, desse, daquele, daquilo виникають із de + demonstrativo.",examples:[ex("A cor deste livro é bonita.","Колір цієї книжки гарний.",{purpose:"contrast"}),ex("Não me lembro daquilo.","Я не пам'ятаю того.",{purpose:"contrast"})]},
{title:"a + aquele-type forms",body:"Форми àquele, àquela, àquilo демонструють взаємодію прийменника a з demonstrativo та crase.",examples:[ex("Entreguei o documento àquele funcionário.","Я передав/передала документ тому працівникові.",{purpose:"production"}),ex("Referi-me àquilo durante a reunião.","Я послався/послалася на це під час зустрічі.",{purpose:"production"})]},
{title:"Не плутати demonstrativo з артиклем",body:"Вказівні este/esse/aquele та їхні нейтральні форми виконують іншу функцію, ніж означений артикль.",examples:[ex("Pensei neste problema.","Я думав/думала про цю проблему.",{purpose:"contrast"}),ex("Vi o problema.","Я побачив/побачила проблему.",{purpose:"contrast"})]}],
examples:[ex("Pensei nisso ontem.","Я думав/думала про це вчора.",{purpose:"production"}),ex("A cor deste livro é bonita.","Колір цієї книжки гарний.",{purpose:"contrast"}),ex("Entreguei o documento àquele funcionário.","Я передав/передала документ тому працівникові.",{purpose:"contrast"}),ex("Não me lembro daquilo.","Я не пам'ятаю того.",{purpose:"comprehension"})],
mistakes:[mistake("вчити neste та daquele як непов'язані словникові одиниці","розкладати форму на прийменник + demonstrativo","Злиття є регулярною частиною морфосинтаксису.","predicted-l1-transfer","high"),mistake("вважати àquele артиклем + іменником","перевіряти a + aquele-type form","Тут працює злиття прийменника a з початковим a demonstrativo.","predicted-l1-transfer","high")],
ukrainian:"Українська має прийменники та відмінкові форми, але не має португальської системи таких злитих прийменниково-вказівних форм. Морфологічний аналіз тому корисніший за механічний переклад.",
regional:"Базові злиті форми спільні для PT-BR і PT-PT; варіативність частіше стосується вибору este/esse/aquele та їхньої дискурсивної функції.",
sources:[{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. I",url:G1},{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. II",url:G2},{label:"Camões — Referencial Camões PLE",url:C}]
})),
draft(page({
id:"prep-pronoun-contr",slug:"pronoun",category:"contractions",titleUk:"Прийменник + займенник",titlePt:"Preposição + pronome",titleEn:"Preposition + pronoun",
summary:"Злиті та спеціальні форми прийменників із займенниками: dele, nele, comigo, contigo, consigo.",
aliases:["прийменник + займенник","preposição + pronome","dele","nele","comigo","consigo"],
related:["prepositional-pronouns","possessives","prep-de","prep-em","prep-com","contractions-overview"],depth:"medium",ukrainianContrast:"high",
intro:"Португальські dele, nela, comigo та consigo не є звичайними клітиками. Частина форм виникає через злиття прийменника з тонічним займенником, а com має окремий набір спеціальних форм. Український відмінок часто передає те саме відношення без такого морфологічного злиття.",
definition:"Прийменникова займенникова форма — форма, що реалізує прийменникову групу з тонічним займенниковим компонентом; деякі поєднання мають усталену злиту форму.",
formulas:[
{pattern:"de + ele/ela/eles/elas → dele/dela/deles/delas",note:"Злиття de з формою третьої особи."},
{pattern:"em + ele/ela/eles/elas → nele/nela/neles/nelas",note:"Злиття em з формою третьої особи."},
{pattern:"com + mim/ti/si → comigo/contigo/consigo",note:"Спеціальні форми після com."}],
uses:[
{title:"de + третя особа",body:"dele/dela тощо можуть виражати належність або інші відношення, які задає de.",examples:[ex("O carro é dele.","Машина його.",{purpose:"production"}),ex("Falei dela ontem.","Я говорив/говорила про неї вчора.",{purpose:"contrast"})]},
{title:"em + третя особа",body:"Форми nele/nela тощо поєднують em із займенником.",examples:[ex("Pensei nele.","Я думав/думала про нього.",{purpose:"production"}),ex("Confio nela.","Я довіряю їй.",{purpose:"contrast"})]},
{title:"com + займенник",body:"com має спеціальні форми comigo, contigo, consigo, connosco/conosco, convosco.",examples:[ex("Vem comigo.","Іди зі мною.",{purpose:"production"}),ex("Ela levou o documento consigo.","Вона взяла документ із собою.",{purpose:"contrast"})]},
{title:"Не плутати з клітикою",body:"dele/nele/comigo є прийменниковими формами, тоді як me/te/lhe — клітики; вони займають різні синтаксичні позиції.",examples:[ex("Pensei nele.","Я думав/думала про нього.",{purpose:"contrast"}),ex("Telefonei-lhe.","Я зателефонував/зателефонувала йому.",{purpose:"contrast"})]}],
examples:[ex("O carro é dele.","Машина його.",{purpose:"production"}),ex("Pensei nela ontem.","Я думав/думала про неї.",{purpose:"contrast"}),ex("Vem comigo.","Іди зі мною.",{purpose:"production"}),ex("Ela levou o documento consigo.","Вона взяла документ із собою.",{purpose:"comprehension"})],
mistakes:[mistake("вважати dele звичайним присвійним займенником на кшталт meu","розрізняти de + ele та possessivo","Структура dele є прийменниковою, навіть коли значення посесивне.","predicted-l1-transfer","high"),mistake("замінювати nele або comigo клітикою lhe/me","визначати, чи потрібна прийменникова група","Клитика не є універсальною заміною прийменникового займенника.","predicted-l1-transfer","high")],
ukrainian:"Українська передає частину цих відношень відмінковими формами, тому португальські злиття можуть здаватися надлишковими. Вони є нормальною частиною морфосинтаксису прийменникової групи.",
regional:"Базові форми є спільними; варіювати може система звертання та вибір займенника, а не сам механізм dele/nele/comigo.",
sources:[{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. I",url:G1},{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. II",url:G2},{label:"Camões — Referencial Camões PLE",url:C}]
}))
];