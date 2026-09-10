import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "indicative-vs-subjunctive",
    slug: "indicative-vs-subjunctive",
    category: "moods",
    titleUk: "Indicativo vs conjuntivo",
    titlePt: "Indicativo vs conjuntivo",
    titleEn: "Indicative vs subjunctive",
    summary: "Факт / пресупозиція vs не-факт.",
    aliases: [
      "індикатив кон'юнктив",
      "subjuntivo",
      "indicativo vs conjuntivo",
      "indicativo vs subjuntivo",
      "дійсний спосіб",
    ],
    related: ["subjunctive-overview", "subjunctive-logic", "subjunctive-triggers", "subjunctive-not"],
    intro:
      "Португальське дієслово в особовій формі стоїть в одному зі способів (*modos*). Два головні в підрядному реченні — *indicativo* (дійсний спосіб) і *conjuntivo* / *subjuntivo* (кон'юнктив).\n\nЦе не «впевненість vs невпевненість» у побутовому сенсі. Індикатив **стверджує пропозицію як частину реальності** (або подає її так). Кон'юнктив **не стверджує** її: він подає ситуацію як бажану, оцінену, можливу, потрібну, ще не насталу, або як зміст волі / емоції / сумніву.\n\n`Sei que ele está em casa` — я подаю «він удома» як факт. `Quero que ele esteja em casa` — я не кажу, що він удома; я хочу цього. Один і той самий зміст «він удома» змінює спосіб, бо змінюється *мовленнєва операція*.",
    formulas: [
      {
        label: "Індикатив: пропозиція як факт",
        pattern: "Vfact + que + Vind",
        note: "sei / vejo / é verdade / noto + que + indicativo",
      },
      {
        label: "Кон'юнктив: пропозиція не стверджується",
        pattern: "Vvolition/eval/doubt + que + Vconj",
        note: "quero / é pena / duvido / não creio + que + conjuntivo",
      },
    ],
    formation:
      "Спосіб вибирається не «за списком слів», а за тим, що головне речення *робить* із підрядною пропозицією. Те саме `que ele vem / que ele venha` можливе після різних предикатів.\n\nАфірмативне `achar que`, `pensar que`, `acreditar que` в португальській зазвичай беруть **індикатив**: мовець подає думку як свій варіант реальності. Заперечення (`não acho que`) часто перемикає на кон'юнктив, бо пропозиція більше не стверджується.\n\nІспанська тут агресивніша до суб'юнктива; не переносьте іспанські тригери один до одного.",
    uses: [
      {
        title: "Факт vs воля",
        body: "Мінімальна пара, з якої варто починати.",
        examples: [
          ex("Vejo que estás cansado.", "Бачу, що ти стомлений. (факт сприйняття)"),
          ex("Quero que estejas descansado amanhã.", "Хочу, щоб завтра ти був відпочилий. (воля)"),
        ],
      },
      {
        title: "Знання vs оцінка",
        body: "`É verdade que` стверджує. `É pena que` оцінює вже відоме або гіпотетичне, не стверджуючи його як нову інформацію в індикативі — типовий кон'юнктив оцінки.",
        examples: [
          ex("É verdade que ele mora aqui.", "Правда, що він тут живе."),
          ex("É pena que ele more tão longe.", "Шкода, що він живе так далеко."),
        ],
      },
      {
        title: "Афірмативна vs заперечена думка",
        body: "Позитивне `penso que` / `acho que` — індикатив. `Não penso que` — часто кон'юнктив. Це не «я менш розумний», а зняття твердження.",
        examples: [
          ex("Acho que ela tem razão.", "Думаю, вона має рацію."),
          ex("Não acho que ela tenha razão.", "Не думаю, що вона має рацію."),
        ],
      },
      {
        title: "Реальний vs не-факт у відносних",
        body: "Відносне речення з конкретним референтом — індикатив. З шуканим / будь-яким / ще не існуючим — кон'юнктив.",
        examples: [
          ex("Procuro o livro que está na mesa.", "Шукаю книжку, яка (конкретно) лежить на столі."),
          ex("Procuro um livro que esteja em ucraniano.", "Шукаю (яку-небудь) книжку, яка була б українською."),
        ],
      },
    ],
    examples: [
      ex("Sabemos que o comboio chega às seis.", "Знаємо, що потяг прибуває о шостій.", { variety: "PT" }),
      ex("Esperamos que o comboio chegue às seis.", "Сподіваємося, що потяг прибуде о шостій."),
      ex("É claro que precisas de ajuda.", "Ясно, що тобі потрібна допомога."),
      ex("É melhor que peças ajuda.", "Краще тобі попросити допомоги."),
    ],
    markers: [
      "sei que + ind.",
      "é verdade que + ind.",
      "quero que + conj.",
      "é pena que + conj.",
      "não acho que + conj.",
      "acho que + ind.",
    ],
    exceptions:
      "Деякі предикати допускають обидва способи зі зміною смислу: `Embora seja / embora é` — друге нестандартне. `Talvez` зазвичай кон'юнктив, але `talvez` + індикатив трапляється, коли мовець майже стверджує.\n\n`Se` умовне майбутнє — не presente do conjuntivo, а **futuro do conjuntivo**: `se vier`. Іспанське `si viene` (індикатив) тут теж не копіюється один в один: португальське відкрите майбутнє — `se vier`.",
    mistakes: [
      mistake(
        "Quero que tu vens.",
        "Quero que tu venhas.",
        "Воля не стверджує прихід як факт — потрібен кон'юнктив.",
      ),
      mistake(
        "Sei que ele esteja doente.",
        "Sei que ele está doente.",
        "Знання стверджує факт — індикатив. Кон'юнктив після `sei que` звучить як внутрішнє протиріччя.",
      ),
      mistake(
        "Acho que seja tarde.",
        "Acho que é tarde.",
        "Афірмативне `achar que` в португальській бере індикатив. Кон'юнктив — калька з іспанської (`creo que sea`).",
      ),
    ],
    ukrainian:
      "Українська майже не має живого морфологічного кон'юнктива в підрядних (`що він прийде` / `щоб він прийшов` — це інший розподіл: `що` vs `щоб`, а не зміна способу того самого сполучника). Португальське `que` одне, а спосіб на дієслові міняється.\n\nНе шукайте «український умовний» як переклад кон'юнктива: `Penso que venha` якраз *не* норма, на відміну від інтуїції «це ж неточно». Навпаки, думка як твердження — індикатив.",
    brPt:
      "Логіка способу спільна. Терміни: PT-PT *conjuntivo*, PT-BR *subjuntivo*. Частотність `não acho que` + conj. висока в обох. У дуже розмовному PT-BR інколи чути індикатив там, де норма очікує кон'юнктив (`quero que você vem`) — це не стандарт.",
    regional:
      "Писемні норми Анголи й Мозамбіку дотримуються того самого поділу indicativo / conjuntivo. Усна спрощеність ближча до розмовного PT-BR.",
    tables: [
      {
        caption: "Що робить головне речення з пропозицією",
        headers: ["Операція", "Спосіб", "Приклад"],
        rows: [
          ["стверджує як факт", "indicativo", "sei que está"],
          ["сприймає як факт", "indicativo", "vejo que chove"],
          ["хоче / вимагає", "conjuntivo", "quero que esteja"],
          ["оцінює", "conjuntivo", "é bom que venhas"],
          ["сумнівається / заперечує факт", "conjuntivo", "duvido que saiba"],
          ["шукає невизначений референт", "conjuntivo", "quero uma casa que tenha jardim"],
        ],
      },
    ],
  },
  {
    id: "subjunctive-overview",
    slug: "subjunctive",
    category: "moods",
    titleUk: "Conjuntivo / Subjuntivo",
    titlePt: "Conjuntivo",
    titleEn: "Subjunctive overview",
    summary: "Термінологія PT-PT / PT-BR і система форм.",
    aliases: [
      "кон'юнктив",
      "суб'юнктив",
      "subjuntivo",
      "conjuntivo",
      "modo conjuntivo",
      "modo subjuntivo",
    ],
    related: [
      "presente-subjuntivo",
      "futuro-subjuntivo",
      "indicative-vs-subjunctive",
      "imperfeito-subjuntivo",
      "subjunctive-logic",
    ],
    intro:
      "Кон'юнктив — спосіб не-факту. У європейській граматичній традиції його називають **conjuntivo**, у бразильській — **subjuntivo**. Це той самий спосіб, не дві різні системи. У цьому довіднику вживаються обидва терміни.\n\nСистема має три прості часи й три складені:\n\nпрості — *presente*, *pretérito imperfeito*, *futuro*\nскладені — *pretérito perfeito* (`tenha feito`), *mais-que-perfeito* (`tivesse feito`), *futuro composto* (`tiver feito`)\n\nМайбутній кон'юнктив — не «ще один відтінок теперішнього». Це окрема, дуже жива форма португальської, якої майже немає в інших романських мовах. Їй присвячена окрема стаття.\n\nКон'юнктив рідко стоїть у незалежному реченні (`Talvez venha`, `Oxalá corra bem`, побажання). Його типове місце — підрядне.",
    formulas: [
      {
        label: "Ядро підрядного",
        pattern: "Vmatrix + que + Vconj",
        note: "Час кон'юнктива залежить від часу головного й від часової перспективи підрядного.",
      },
    ],
    formation:
      "Кожен час має власну основу:\n\n**Presente** — від 1-ї особи однини теперішнього індикатива (`falo` → `fale`; `ouço` → `ouça`), з окремими суплетивними основами (`seja`, `vá`, `saiba`).\n\n**Imperfeito** — від 3-ї особи множини pretérito perfeito (`falaram` → `falasse`; `foram` → `fosse`; `disseram` → `dissesse`).\n\n**Futuro** — для правильних збігається з особовим інфінітивом; для неправильних — та сама основа 3-ї множини pretérito (`forem`, `tiverem`, `disserem`).\n\nСкладені: `ter` у відповідному часі кон'юнктива + дієприкметник.",
    uses: [
      {
        title: "Карта часів кон'юнктива",
        body: "Presente — не-факт, одночасний або наступний відносно теперішнього / майбутнього головного: `quero que venhas`, `é pena que esteja doente`.\n\nImperfeito — не-факт відносно минулого головного, ввічливість, контрфакт: `queria que viesses`, `se eu soubesse`.\n\nFuturo — відкрита майбутня умова або час: `se vier`, `quando chegares`.\n\nСкладені додають передування: `espero que tenha chegado`, `se tivesse sabido`, `quando tiver acabado`.",
        examples: [
          ex("Espero que estejas bem.", "Сподіваюся, ти в порядку."),
          ex("Esperava que estivesses bem.", "Я сподівався, що ти в порядку."),
          ex("Quando estiveres bem, ligas.", "Як будеш у порядку, зателефонуй."),
        ],
      },
      {
        title: "Незалежні вживання",
        body: "Обмежений набір: `talvez`, `oxalá`, `tomara que`, побажання `Que venhas cedo!`, поступка в девізах. Не робіть із цього «вільний кон'юнктив у будь-якому реченні».",
        examples: [
          ex("Talvez chova amanhã.", "Можливо, завтра дощитиме."),
          ex("Oxalá corra tudo bem.", "Хай усе мине добре."),
          ex("Que te corra bem a entrevista!", "Нехай співбесіда пройде добре!"),
        ],
      },
    ],
    examples: [
      ex("Não creio que ele saiba.", "Не вірю, що він знає."),
      ex("Embora faça frio, saímos.", "Хоч і холодно, ми виходимо."),
      ex("Se eu fosse a ti, esperava.", "На твоєму місці я б зачекав."),
      ex("Quando eu for a Lisboa, aviso.", "Коли поїду до Лісабона, попереджу."),
    ],
    markers: ["que + conj.", "para que", "embora", "talvez", "se + fut. conj.", "quando + fut. conj."],
    exceptions:
      "Немає «кон'юнктива минулої події як факту». `Quando eu era criança` — індикатив. Кон'юнктив з’являється не тому, що дія «незавершена», а тому, що пропозиція не стверджується.",
    mistakes: [
      mistake(
        "Talvez ele vem amanhã.",
        "Talvez ele venha amanhã.",
        "`talvez` у стандарті бере кон'юнктив (індикатив можливий як розмовний, коли мовець майже стверджує).",
      ),
      mistake(
        "Quando eu vou, ligo.",
        "Quando eu for, ligo. / Quando eu vou, ligo.",
        "Перше (`for`) — конкретна майбутня подія з невідомим моментом. Друге (`vou`) — звичка. Не змішуйте.",
      ),
    ],
    ukrainian:
      "Не перекладайте кон'юнктив українським умовним (`прийшов би`) за замовчуванням. `Quero que venhas` — це `хочу, щоб ти прийшов`, не `хочу, щоб ти прийшов би`. Умовний з’являється в контрфакті: `se eu soubesse` ≈ `якби я знав`.",
    brPt:
      "Назва способу: *conjuntivo* (PT-PT, PALOP, академічна Європа) vs *subjuntivo* (PT-BR). Форми збігаються. Різниця в частоті деяких тригерів і в розмовному униканні кон'юнктива в BR — див. окремі сторінки часів.",
    regional:
      "В Анголі й Мозамбіку шкільна традиція ближча до європейської (термін *conjuntivo*). У Бразилії підручники пишуть *subjuntivo*.",
    tables: [
      {
        caption: "Часи кон'юнктива (ядро ser / falar)",
        headers: ["Час", "falar (3 sg)", "ser (3 sg)", "Типове значення"],
        rows: [
          ["presente", "fale", "seja", "не-факт тепер / далі"],
          ["imperfeito", "falasse", "fosse", "минуле / контрфакт"],
          ["futuro", "falar", "for", "відкрите майбутнє після quando/se"],
          ["perf. composto", "tenha falado", "tenha sido", "передування відносно теперішнього"],
          ["m.-q.-perf.", "tivesse falado", "tivesse sido", "передування / контрфакт минулого"],
          ["fut. composto", "tiver falado", "tiver sido", "передування в майбутньому"],
        ],
      },
    ],
  },
  {
    id: "presente-subjuntivo",
    slug: "presente-subjuntivo",
    category: "moods",
    titleUk: "Presente do conjuntivo",
    titlePt: "Presente do conjuntivo",
    titleEn: "Present subjunctive",
    summary: "Утворення й основні вживання.",
    aliases: [
      "теперішній кон'юнктив",
      "que eu seja",
      "presente do subjuntivo",
      "presente do conjuntivo",
    ],
    related: ["subjunctive-triggers", "imperfeito-subjuntivo", "imperative-negative", "subjunctive-overview"],
    intro:
      "Теперішній кон'юнктив — найчастотніша форма способу. Вона стоїть після волі, оцінки, мети, сумніву, допустовості, коли головне речення в теперішньому або майбутньому, а підрядна ситуація не стверджується як факт.\n\nФорма також будує **заперечний імператив** усіх осіб і **стверджувальний імператив** `você` / `nós` / `vocês`.",
    formulas: [
      {
        label: "Підрядне після теперішнього головного",
        pattern: "Vpres + que + Vconj.pres",
        note: "Quero que venhas. É importante que estejas.",
      },
      {
        label: "Заперечний імператив",
        pattern: "NEG + Vconj.pres",
        note: "Não fales. Não fale. Não falemos.",
      },
    ],
    formation:
      "Регулярне правило: взяти 1-шу особу однини *presente do indicativo*, відкинути `-o`, додати закінчення «протилежної» дієвідміни.\n\n`-ar`: `fale, fales, fale, falemos, faleis, falem`\n`-er` / `-ir`: `coma, comas, coma, comamos, comais, comam`; `parta, partas, parta, partamos, partais, partam`\n\nТому `ouço` → `ouça`, `peço` → `peça`, `meço` → `meça`, `perco` → `perca`: основа вже чергується в індикативі.\n\nОрфографія: `ficar` → `fique`; `pagar` → `pague`; `começar` → `comece`; `averiguar` → `averigue`.\n\nСуплетивні / особливі основи треба знати як список: `ser` → `seja`; `estar` → `esteja`; `ir` → `vá`; `haver` → `haja`; `saber` → `saiba`; `dar` → `dê`; `querer` → `queira`; `poder` → `possa`; `ver` → `veja`; `vir` → `venha`; `ter` → `tenha`; `pôr` → `ponha`; `fazer` → `faça`; `dizer` → `diga`; `trazer` → `traga`; `caber` → `caiba`.\n\n`ir` у множині: `vamos, vades, vão`. `dar`: `dê, dês, dê, demos, deis, dêem`.",
    uses: [
      {
        title: "Воля, прохання, заборона",
        body: "`querer que`, `pedir que`, `exigir que`, `proibir que`, `sugerir que`, `recomendrar que`, `deixar que`.",
        examples: [
          ex("Peço que esperes um pouco.", "Прошу тебе трохи зачекати."),
          ex("Não quero que saias sozinha.", "Не хочу, щоб ти виходила сама."),
          ex("O médico recomenda que descanse.", "Лікар рекомендує, щоб він / ви відпочили."),
        ],
      },
      {
        title: "Оцінка й безособові вирази",
        body: "`é bom que`, `é importante que`, `é pena que`, `é melhor que`, `é preciso que`, `é possível que`, `faz falta que`. Узагальнення без `que` йде інфінітивом: `é preciso esperar`.",
        examples: [
          ex("É importante que estejas presente.", "Важливо, щоб ти був присутній."),
          ex("É pena que não possas vir.", "Шкода, що не можеш прийти."),
          ex("Pode ser que chova.", "Може бути, що дощитиме."),
        ],
      },
      {
        title: "Сумнів, заперечення факту",
        body: "`duvidar que`, `não crer que`, `não pensar que`, `não é verdade que`, `negar que`.",
        examples: [
          ex("Duvido que ele saiba disso.", "Сумніваюся, що він це знає."),
          ex("Não creio que seja tão simples.", "Не вірю, що це так просто."),
        ],
      },
      {
        title: "Мета й допустовість",
        body: "`para que`, `a fim de que`; `embora`, `mesmo que`, `ainda que`, `por mais que`.",
        examples: [
          ex("Falo devagar para que percebas.", "Говорю повільно, щоб ти зрозумів."),
          ex("Embora esteja cansada, continua.", "Хоч вона стомлена, продовжує."),
        ],
      },
      {
        title: "Перед подією, яка ще не сталася",
        body: "`antes que`, `até que` (поки ще не), `sem que`. Для *майбутньої відкритої* події після `quando` / `assim que` потрібен не presente, а **futuro do conjuntivo**.",
        examples: [
          ex("Sai antes que chova.", "Виходь, поки не почався дощ."),
          ex("Espera até que eu ligue.", "Чекай, доки я не зателефоную."),
        ],
      },
    ],
    examples: [
      ex("Talvez ele não queira falar.", "Можливо, він не хоче говорити."),
      ex("Oxalá não faça tanto calor.", "Хай не буде так спекотно."),
      ex("Procuro alguém que saiba ucraniano.", "Шукаю когось, хто знав би українську."),
      ex("Não há quem o substitua.", "Немає кому його замінити."),
    ],
    markers: [
      "quero que",
      "é importante que",
      "para que",
      "embora",
      "talvez",
      "antes que",
      "duvido que",
      "não acho que",
    ],
    exceptions:
      "Після `quando`, `se`, `assim que`, `logo que` у значенні *конкретної майбутньої* події — futuro do conjuntivo (`quando vier`), не presente (`quando venha`). `quando venha` можливе в інших значеннях (байдужість, «хай коли», відносне), але не як нейтральне «коли він прийде, зробимо X».\n\n`caso` навпаки часто бере саме presente: `caso chova`.",
    mistakes: [
      mistake(
        "Quero que tu vais.",
        "Quero que tu vás.",
        "`ir` у presente do conjuntivo: `vá, vás, vá, vamos, vades, vão`.",
      ),
      mistake(
        "Quando ele chegue, começamos.",
        "Quando ele chegar, começamos.",
        "Майбутня відкрита подія після `quando` — futuro do conjuntivo, не теперішній. Це калька з іспанської (`cuando llegue`).",
      ),
      mistake(
        "É importante que tu estás aqui.",
        "É importante que tu estejas aqui.",
        "Оцінка / важливість — кон'юнктив `estejas`, не індикатив.",
      ),
    ],
    ukrainian:
      "`Хочу, щоб ти прийшов` → `quero que venhas` (presente do conjuntivo), навіть якщо прихід — у майбутньому. Українське майбутнє на підрядному не переноситься: не `quero que virás`.\n\n`Можливо, він прийде` → `talvez ele venha` або `talvez ele venha a vir`. Індикатив `talvez ele vem` — розмовний.",
    brPt:
      "Форми спільні. У PT-BR з `você`: `quero que você fale` (3-тя особа). У PT-PT з `tu`: `quero que fales`. Розмовний PT-BR інколи ставить індикатив (`quero que você fala`) — ненормативно.",
    regional:
      "У південній Бразилії з `tu` нормативне `que tu fales`; у фактичному мовленні часто `que tu fale` / `que tu fala` зі змішаною узгодженістю.",
    tables: [
      {
        caption: "Presente do conjuntivo: регулярні",
        headers: ["Особа", "falar", "comer", "partir"],
        rows: [
          ["eu", "fale", "coma", "parta"],
          ["tu", "fales", "comas", "partas"],
          ["ele / você", "fale", "coma", "parta"],
          ["nós", "falemos", "comamos", "partamos"],
          ["vós", "faleis", "comais", "partais"],
          ["eles / vocês", "falem", "comam", "partam"],
        ],
      },
      {
        caption: "Ключові неправильні основи",
        headers: ["INF", "eu / ele", "tu", "nós", "eles"],
        rows: [
          ["ser", "seja", "sejas", "sejamos", "sejam"],
          ["estar", "esteja", "estejas", "estejamos", "estejam"],
          ["ir", "vá", "vás", "vamos", "vão"],
          ["haver", "haja", "hajas", "hajamos", "hajam"],
          ["saber", "saiba", "saibas", "saibamos", "saibam"],
          ["dar", "dê", "dês", "demos", "dêem"],
          ["fazer", "faça", "faças", "façamos", "façam"],
          ["dizer", "diga", "digas", "digamos", "digam"],
          ["ter", "tenha", "tenhas", "tenhamos", "tenham"],
          ["ver", "veja", "vejas", "vejamos", "vejam"],
          ["vir", "venha", "venhas", "venhamos", "venham"],
          ["pôr", "ponha", "ponhas", "ponhamos", "ponham"],
          ["poder", "possa", "possas", "possamos", "possam"],
          ["querer", "queira", "queiras", "queiramos", "queiram"],
        ],
        scroll: true,
      },
    ],
  },
  {
    id: "imperfeito-subjuntivo",
    slug: "imperfeito-subjuntivo",
    category: "moods",
    titleUk: "Imperfeito do conjuntivo",
    titlePt: "Imperfeito do conjuntivo",
    titleEn: "Imperfect subjunctive",
    summary: "se eu soubesse, como se, нереальні умови.",
    aliases: [
      "імперфект кон'юнктива",
      "se eu fosse",
      "imperfeito do subjuntivo",
      "pretérito imperfeito do conjuntivo",
    ],
    related: ["conditional-clauses", "futuro-subjuntivo", "condicional", "presente-subjuntivo"],
    intro:
      "Імперфект кон'юнктива — форма не-факту в минулій перспективі та форма гіпотези / контрфакту. `Queria que viesses` (хотів, щоб ти прийшов). `Se eu soubesse, dizia` (якби я знав).\n\nНе плутати з імперфектом індикатива (`sabia`). `sabia` описує фон факту; `soubesse` знімає факт.",
    formulas: [
      {
        label: "Минуле головне → імперфект кон'юнктива",
        pattern: "Vpast + que + Vconj.imp",
        note: "Pediu que esperássemos.",
      },
      {
        label: "Контрфакт / гіпотеза",
        pattern: "se + Vconj.imp + (condicional / imperfeito ind.)",
        note: "Se eu fosse a ti, esperava / esperaria.",
      },
    ],
    formation:
      "Основа = 3-тя особа множини pretérito perfeito без `-ram`.\n\n`falaram` → `fala-` + `-sse, -sses, -sse, -ssemos, -sseis, -ssem` → `falasse…`\n`comerem` ні: основа від `comeram` → `comesse`\n`partiram` → `partisse`\n\nНеправильні:\n`foram` (ser/ir) → `fosse, fosses, fosse, fôssemos, fôsseis, fossem`\n`tiveram` → `tivesse` (tivéssemos)\n`estiveram` → `estivesse`\n`disseram` → `dissesse`\n`fizeram` → `fizesse`\n`vieram` → `viesse`\n`viram` (ver) → `visse`\n`puseram` → `pusesse`\n`deram` → `desse`\n`souberam` → `soubesse`\n`puderam` → `pudesse`\n`quiseram` → `quisesse`\n`trouxeram` → `trouxesse`\n\nНаголос 1-ї множини: `falássemos`, `fôssemos`, `tivéssemos`, `disséssemos` — акут / циркумфлекс обов’язковий.",
    uses: [
      {
        title: "Узгодження часів: минуле головне",
        body: "Якщо головне в минулому, підрядний не-факт зазвичай в імперфекті кон'юнктива, навіть якщо з погляду «зараз» подія ще майбутня в тій точці.",
        examples: [
          ex("Pediu que eu falasse mais alto.", "Він попросив, щоб я говорив голосніше."),
          ex("Era importante que estivesses presente.", "Було важливо, щоб ти був присутній."),
          ex("Não acreditava que fosse verdade.", "Я не вірив, що це правда."),
        ],
      },
      {
        title: "Умовні контрфактичні: se + imperfeito do conjuntivo",
        body: "Відкрите майбутнє: `se vier` (futuro do conjuntivo). Гіпотеза / нереальне: `se viesse`. Минулий контрфакт: `se tivesse vindo` (складений).\n\nУ головному — condicional (`iria`) або, дуже часто в розмові, imperfeito do indicativo (`ia`).",
        examples: [
          ex("Se eu soubesse, dizia-te.", "Якби я знав, я б тобі сказав."),
          ex("Se fosses mais cedo, apanhaste o comboio.", "Якби ти пішов раніше, ти б встиг на потяг.", { variety: "PT", note: "Розмовне: головне в perfeito теж трапляється, нейтральніше — apanhavas / apanharias." }),
          ex("Se eu fosse a ti, não aceitava.", "На твоєму місці я б не погоджувався."),
        ],
      },
      {
        title: "como se",
        body: "`como se` завжди з імперфектом (або складеним) кон'юнктива: порівняння з не-фактом.",
        examples: [
          ex("Fala como se soubesse de tudo.", "Говорить так, ніби все знає."),
          ex("Olhou-me como se eu tivesse mentido.", "Він подивився на мене так, ніби я збрехав."),
        ],
      },
      {
        title: "Ввічливість",
        body: "`Queria que…`, `Gostaria que…`, `Pudesse…` — імперфект / кондиціонал пом’якшує волю. Підрядне тоді теж в імперфекті кон'юнктива.",
        examples: [
          ex("Queria que me ajudasses.", "Я хотів би, щоб ти мені допоміг."),
          ex("Gostava que viesses jantar.", "Хотів би, щоб ти прийшов на вечерю.", { variety: "PT" }),
        ],
      },
    ],
    examples: [
      ex("Embora estivesse doente, foi trabalhar.", "Хоч і був хворий, пішов на роботу."),
      ex("Caso precisasses, ligavas.", "Якби знадобилося, ти б зателефонував."),
      ex("Tomara que chovesse.", "От би пішов дощ."),
    ],
    markers: ["se eu fosse", "se eu soubesse", "como se", "queria que", "embora + imp.", "quem me dera"],
    exceptions:
      "Не ставте імперфект кон'юнктива після `quando` у звичайному минулому (`quando eu era` — індикатив). `quando eu fosse` — це «коли б я був / у той (гіпотетичний) момент, коли я був би».\n\n`Se` + imperfeito do *indicativo* (`se eu sabia`) має інше значення: «раз я знав / якщо (вже) було так, що я знав», часто докір, не контрфакт.",
    mistakes: [
      mistake(
        "Se eu sabia, te dizia. (контрфакт)",
        "Se eu soubesse, dizia-te. / Se eu soubesse, dir-te-ia.",
        "Контрфакт вимагає кон'юнктива `soubesse`. `se eu sabia` — інша конструкція («раз ти знав»).",
      ),
      mistake(
        "Queria que tu vens.",
        "Queria que tu viesses.",
        "Минуле / ввічливе головне → імперфект кон'юнктива, не теперішній індикатив і не теперішній кон'юнктив `venhas` (той був би після `quero`).",
      ),
      mistake(
        "Se eu seria rico, comprava isto.",
        "Se eu fosse rico, comprava isto.",
        "Після `se` ніколи не ставлять condicional. Гіпотеза — `fosse`.",
      ),
    ],
    ukrainian:
      "`Якби я знав` → `se eu soubesse` (не `se eu sabia` і не `se eu teria sabido` у простій гіпотезі).\n\nУкраїнський умовний на *обох* частинах (`знав би — сказав би`) у португальській не дзеркалиться: після `se` кон'юнктив, у головному — condicional або імперфект індикатива. Не ставте condicional у підрядному з `se`.",
    brPt:
      "У головній частині контрфакту PT-BR дуже часто ставить condicional (`se eu soubesse, eu te diria`) або імперфект (`se eu soubesse, eu te dizia`). PT-PT теж широко використовує імперфект індикатива в головному (`dizia-te`) і книжний condicional / mesóclise (`dir-te-ia`).",
    regional:
      "`Quem me dera que…` + imperfeito do conjuntivo живе в усіх різновидах як побажання.",
    tables: [
      {
        caption: "Imperfeito do conjuntivo",
        headers: ["Особа", "falar", "ser / ir", "ter", "fazer", "dizer"],
        rows: [
          ["eu", "falasse", "fosse", "tivesse", "fizesse", "dissesse"],
          ["tu", "falasses", "fosses", "tivesses", "fizesses", "dissesses"],
          ["ele / você", "falasse", "fosse", "tivesse", "fizesse", "dissesse"],
          ["nós", "falássemos", "fôssemos", "tivéssemos", "fizéssemos", "disséssemos"],
          ["vós", "falásseis", "fôsseis", "tivésseis", "fizésseis", "dissésseis"],
          ["eles / vocês", "falassem", "fossem", "tivessem", "fizessem", "dissessem"],
        ],
        scroll: true,
      },
    ],
  },
  {
    id: "futuro-subjuntivo",
    slug: "futuro-subjuntivo",
    category: "moods",
    titleUk: "Futuro do conjuntivo",
    titlePt: "Futuro do conjuntivo",
    titleEn: "Future subjunctive",
    summary: "quando / se + майбутній кон'юнктив — візитівка португальської.",
    aliases: [
      "майбутній кон'юнктив",
      "quando eu for",
      "se eu tiver",
      "futuro do subjuntivo",
      "futuro do conjuntivo",
      "forem",
      "tiverem",
      "vierem",
      "disserem",
      "fizerem",
    ],
    related: [
      "personal-infinitive",
      "conditional-clauses",
      "temporal-clauses",
      "imperfeito-subjuntivo",
      "indicative-vs-subjunctive",
    ],
    intro:
      "Майбутній кон'юнктив (*futuro do conjuntivo* / *futuro do subjuntivo*) — одна з найхарактерніших форм португальської. Іспанська майже втратила його; французька й італійська його не мають; української відповідної морфології немає. Його не можна «сховати» всередині загального кон'юнктива: це окремий час з окремою логікою.\n\nЙого місце — **відкрита майбутня ситуація**, яка ще не сталася, але розглядається як можлива рамка для іншої дії. Найчистіші контексти: `quando`, `se`, `assim que`, `logo que`, `enquanto`, `sempre que`, `depois que`, вільні відносні `quem`, `o que`, `onde`, `cujo` з майбутнім референтом.\n\n`Quando eu chegar, ligo.` — коли я приїду (приїзд ще попереду, момент невідомий, але рамка реальна). Це не гіпотетичне «а раптом я колись приїхав би» (тоді було б `quando eu chegasse`) і не звичка (`quando eu chego, ligo`).\n\n`Se chover, ficamos em casa.` — якщо дощитиме (відкрита можливість). Не `se chova` (іспанська калька) і не `se chovesse` (нереальна / віддалена гіпотеза).\n\nДля **правильних** дієслів форма збігається з особовим інфінітивом. Для **неправильних** — ні: майбутній кон'юнктив бере основу 3-ї особи множини pretérito perfeito. `sermos` це інфінітив; `formos` це майбутній кон'юнктив. Плутанина цих двох парадигм — найдорожча помилка теми.",
    formulas: [
      {
        label: "Часова рамка в майбутньому",
        pattern: "quando / assim que / logo que + Vfut.conj + Vfut/pres/ir+INF",
        note: "Quando eu chegar, ligo. Assim que ele vier, começamos.",
      },
      {
        label: "Відкрита умова",
        pattern: "se + Vfut.conj + Vfut/pres/ir+INF",
        negative: "se + NEG + Vfut.conj",
        note: "Se chover, não saímos. Se não vier, cancelamos.",
      },
    ],
    formation:
      "**Правильні дієслова.** Основа = інфінітив. Закінчення:\n\n`eu falar / comer / partir`\n`tu falares / comeres / partires`\n`ele falar / comer / partir`\n`nós falarmos / comermos / partirmos`\n`vós falardes / comerdes / partirdes`\n`eles falarem / comerem / partirem`\n\nЗбіг з особовим інфінітивом повний. Різниця — синтаксис: після `quando` / `se` це кон'юнктив; після `para` / `de` — інфінітив.\n\n**Неправильні дієслова.** Взяти 3-тю особу множини pretérito perfeito, відкинути `-am`, додати ті самі закінчення (нуль, `-es`, нуль, `-mos`, `-des`, `-em`).\n\n`eles foram` (ser / ir) → `for, fores, for, formos, fordes, forem`\n`eles tiveram` → `tiver, tiveres, tiver, tivermos, tiverdes, tiverem`\n`eles estiveram` → `estiver … estiverem`\n`eles houveram` / houve як основа `houver-` → `houver, houveres…`\n`eles vieram` (vir) → `vier, vieres, vier, viermos, vierdes, vierem`\n`eles viram` (ver) → `vir, vires, vir, virmos, virdes, virem`\n`eles disseram` → `disser, disseres, disser, dissermos, disserdes, disserem`\n`eles fizeram` → `fizer, fizeres, fizer, fizermos, fizerdes, fizerem`\n`eles puseram` → `puser … puserem`\n`eles deram` → `der, deres, der, dermos, derdes, derem`\n`eles souberam` → `souber … souberem`\n`eles puderam` → `puder … puderem`\n`eles quiseram` → `quiser … quiserem`\n`eles trouxeram` → `trouxer … trouxerem`\n`eles couberam` → `couber …`\n\nЗапам’ятайте мінімальний набір, без якого не обійтися в реальному тексті: `for, tiver, vier, vir, disser, fizer, puser, der, estiver, souber, puder, quiser`.\n\n**Критична пара `ver` / `vir`.**\n`quando eu vir` = коли я *побачу* (ver)\n`quando eu vier` = коли я *прийду* (vir)\nОсобовий інфінітив навпаки: `para eu ver` / `para eu vir`. Не змішуйте.\n\n**Складений майбутній кон'юнктив:** `tiver` + particípio → `quando eu tiver acabado` «коли я закінчу (до того моменту)».",
    uses: [
      {
        title: "quando + майбутня відкрита подія",
        body: "Це не звичне «коли» індикатива. `Quando chego, ligo` — звичка, кожен раз. `Quando chegar, ligo` — один (або конкретний) майбутній приїзд, момент ще не настав.\n\nГоловне речення — майбутнє будь-якої форми: просте `ligarei`, перифраза `vou ligar`, теперішній зі значенням майбутнього `ligo`, наказ `liga`. Не ставте в підрядному індикативне майбутнє: `*quando eu chegarei`.",
        examples: [
          ex("Quando eu chegar a casa, ligo-te.", "Коли я добереться додому, зателефоную."),
          ex("Quando fores a Kyiv, visita a Sofia.", "Коли будеш у Києві, відвідай Софію."),
          ex("Quando formos vizinhos, vemos-nos mais.", "Коли станемо сусідами, бачитимемось частіше."),
          ex("Quando o vir, digo-lhe.", "Коли його побачу, скажу."),
          ex("Quando ele vier, começamos.", "Коли він прийде, почнемо."),
        ],
      },
      {
        title: "assim que, logo que, depois que, até que, enquanto",
        body: "`assim que` / `logo que` «як тільки» з майбутнім — майбутній кон'юнктив. `depois que` у майбутньому теж: `depois que eu terminar`. `enquanto` зі значенням «доки (в майбутньому)»: `enquanto eu viver`. `até que` може брати futuro (`até que ele chegue` частіше presente; `até eu chegar` інфінітив) — див. винятки.\n\n`sempre que` + fut. conj. = кожного разу в майбутньому: `sempre que precisares, liga`.",
        examples: [
          ex("Assim que o avião aterrar, mando mensagem.", "Як тільки літак сяде, напишу."),
          ex("Logo que souberes, avisa.", "Як тільки дізнаєшся, попередь."),
          ex("Depois que eles tiverem saído, falamos.", "Після того як вони вийдуть, поговоримо."),
          ex("Enquanto eu for viva, esta casa fica na família.", "Доки я жива, ця хата лишається в родині."),
          ex("Sempre que vieres a Lisboa, ficas connosco.", "Щоразу як будеш у Лісабоні, зупиняйся в нас.", { variety: "PT" }),
        ],
      },
      {
        title: "se + відкрита майбутня умова (реальна)",
        body: "Португальська розрізняє три шари `se`:\n\n1. Звичка / загальне: `se` + presente indicativo — `Se chove, fico em casa` (кожен раз, коли).\n2. Відкрите майбутнє: `se` + **futuro do conjuntivo** — `Se chover amanhã, fico em casa`.\n3. Гіпотеза / контрфакт: `se` + imperfeito do conjuntivo — `Se chovesse, ficava em casa`.\n\nІспанська в шарі 2 ставить *indicativo* (`si llueve mañana`). Португальська — кон'юнктив `se chover`. Англійська `if it rains` теж не підказує форму.\n\n`caso` частіше бере presente do conjuntivo (`caso chova`), не майбутній. Це інший сполучник.",
        examples: [
          ex("Se eu tiver tempo, passo por aí.", "Якщо буде час, я заїду."),
          ex("Se não quiseres ir, ninguém te obriga.", "Якщо не захочеш іти, ніхто не змушує."),
          ex("Se for preciso, fico até mais tarde.", "Якщо буде треба, лишуся довше."),
          ex("Se disserem que não, cancelamos.", "Якщо скажуть «ні», скасуємо."),
          ex("Se fizer sol, vamos à praia.", "Якщо буде сонце, підемо на пляж."),
        ],
      },
      {
        title: "Відносні з майбутнім / невизначеним референтом",
        body: "`quem`, `o que`, `onde`, `cujo`, `quanto` у значенні «той, хто / те, що (ще буде)» часто беруть майбутній кон'юнктив. Це жива, не книжна конструкція: `Quem chegar primeiro escolhe o quarto`. `O que tu disseres, eu aceito`. `Vai para onde quiseres`.\n\nЦе не те саме, що `procuro alguém que saiba` (presente do conjuntivo: шукаю будь-кого з властивістю). Тут властивість розгорнеться в майбутньому як умова.",
        examples: [
          ex("Quem chegar último paga o jantar.", "Хто прийде останнім, платить за вечерю."),
          ex("Podes chamar o que quiseres.", "Можеш називати як хочеш."),
          ex("Faz como entenderes.", "Роби як вважаєш."),
          ex("Leva o que precisares.", "Бери що знадобиться."),
          ex("Vamos pelo caminho que for mais curto.", "Підемо тим шляхом, який виявиться коротшим."),
        ],
      },
      {
        title: "conforme, segundo, como (відповідність)",
        body: "`conforme` / `segundo` / `como` + fut. conj. = «так, як (ще) виявиться / як скажеш».",
        examples: [
          ex("Faremos conforme o chefe decidir.", "Зробимо так, як вирішить керівник."),
          ex("Podes vestir-te como quiseres.", "Можеш одягнутися як хочеш."),
          ex("A receita sai segundo a massa crescer.", "Випічка вийде залежно від того, як підніметься тісто."),
        ],
      },
      {
        title: "Складений: коли дія вже буде завершена",
        body: "`quando / se / assim que` + `tiver` + particípio — передування в майбутньому. Українською часто майбутній доконаний: `коли я закінчу`, `якщо ти вже зробиш`.",
        examples: [
          ex("Quando tiveres lido o relatório, falamos.", "Коли прочитаєш звіт, поговоримо."),
          ex("Se eu tiver acabado até às cinco, saio.", "Якщо закінчу до п’ятої, вийду."),
          ex("Assim que tiverem chegado, servimos o jantar.", "Як тільки вони прибудуть, подамо вечерю."),
        ],
      },
      {
        title: "Чого майбутній кон'юнктив НЕ робить",
        body: "Він не є «майбутнім у підрядному взагалі». Після `que` додаткового (`quero que`, `acho que`, `espero que`) його немає: там presente або perfeito do conjuntivo / індикатив.\n\nВін не замінює condicional. Він не стоїть у незалежному реченні (немає `*Amanhã eu for`). Він не стоїть після прийменника (`*para eu for` → `para eu ser` / `para eu ir`).",
        examples: [
          ex("Espero que ele venha. (не *que ele vier)", "Сподіваюся, що він прийде."),
          ex("Quero que sejas feliz. (не *que fores)", "Хочу, щоб ти був щасливий."),
        ],
      },
    ],
    examples: [
      ex("Se eu for eleito, mudo a lei.", "Якщо мене оберуть, я зміню закон."),
      ex("Quando tiveres 18 anos, decides sozinho.", "Коли тобі буде 18, вирішуватимеш сам."),
      ex("Se estiveres em casa, abre a porta.", "Якщо будеш удома, відчини двері."),
      ex("Diz-me quando souberes o resultado.", "Скажи, коли дізнаєшся результат."),
      ex("Se puderes, traz pão.", "Якщо зможеш, принеси хліба."),
      ex("Quando der meia-noite, brindamos.", "Коли проб’є північ, ми піднімемо келихи."),
      ex("Se não houver lugares, voltamos outro dia.", "Якщо місць не буде, повернемося іншого дня."),
      ex("Assina onde o cartório puser o visto.", "Підпиши там, де нотаріус поставить позначку."),
      ex("Se trouxeres vinho, eu faço o jantar.", "Якщо принесеш вино, я зроблю вечерю."),
      ex(
        "Quando formos grandes, percebemos isto. / Quando sermos honestos…",
        "Коли виростемо… — тільки formos. sermos було б інфінітивом після прийменника: para sermos honestos.",
        { note: "Друга фраза в pt навмисно контрастивна: правильне «коли виростемо» — Quando formos grandes." },
      ),
    ],
    markers: [
      "quando",
      "se (відкрите майбутнє)",
      "assim que",
      "logo que",
      "enquanto",
      "sempre que",
      "depois que",
      "conforme",
      "segundo",
      "como",
      "quem / o que / onde + fut. conj.",
    ],
    exceptions:
      "`caso` + presente do conjuntivo (`caso seja preciso`), не `caso for` як перший вибір. `caso for` існує, але `caso seja` частотніше.\n\n`talvez` не бере майбутній кон'юнктив: `talvez venha`, не `*talvez vier`.\n\nПісля `para que`, `embora`, `antes que` — presente або imperfeito, не майбутній.\n\nУ головному реченні після `quando eu chegar` можна поставити наказовий (`avisa`), теперішній (`aviso`) або `ir` + INF (`vou avisar`). Усі три нормальні. Futuro simples (`avisarei`) — формальніший.\n\nУ дуже розмовному мовленні, особливо PT-BR, інколи чути `quando eu chegar` замінене на `quando eu chegar` (це якраз правильна форма!) — помилка інша: `quando eu chegar` плутають із `quando eu chegue` або `quando eu vou chegar`. Ще розмовніше: `quando eu chegar lá, eu te ligo` — повністю стандартно. Нестандарт: `quando eu chegar` → заміна на `se eu chegar` без різниці; різниця `se`/`quando` при цьому стирається прагматично, але граматична форма лишається futuro do conjuntivo.\n\nПівнічні діалекти Португалії добре зберігають форму; ніде в стандарті вона не «мертва».",
    mistakes: [
      mistake(
        "Quando eu chegarei, ligo.",
        "Quando eu chegar, ligo.",
        "Після `quando` не ставлять індикативне майбутнє. Потрібен майбутній кон'юнктив.",
      ),
      mistake(
        "Quando eu chegue, começamos.",
        "Quando eu chegar, começamos.",
        "Іспанська модель `cuando llegue`. У португальській нейтральне майбутнє «коли приїду» — `chegar`, не `chegue`.",
      ),
      mistake(
        "Se eu vou ter tempo, passo aí.",
        "Se eu tiver tempo, passo aí.",
        "Відкрита майбутня умова — `tiver`, не `vou ter` і не `tenha`.",
      ),
      mistake(
        "Se eu chova, fico em casa.",
        "Se chover, fico em casa.",
        "`se` + presente do conjuntivo у цьому значенні — не португальська норма. Або звичка `se chove`, або відкрите майбутнє `se chover`.",
      ),
      mistake(
        "Quando sermos ricos, compramos um barco.",
        "Quando formos ricos, compramos um barco.",
        "`sermos` — особовий інфінітив. Після `quando` потрібен кон'юнктив `formos`.",
      ),
      mistake(
        "Se eu seria chefe, mudava tudo.",
        "Se eu fosse chefe, mudava tudo.",
        "Це вже не відкрите майбутнє, а гіпотеза — імперфект кон'юнктива, і ніколи condicional після `se`.",
      ),
      mistake(
        "Quando eu vir a Lisboa, aviso. (у значенні «приїду»)",
        "Quando eu vier a Lisboa, aviso.",
        "`vir` — майбутній кон'юнктив *ver* («побачити»). «Приїхати» — `vier`.",
      ),
      mistake(
        "Para eu for sincero, não gostei.",
        "Para eu ser sincero, não gostei.",
        "Після прийменника — особовий інфінітив `ser`, не майбутній кон'юнктив `for`.",
      ),
      mistake(
        "Espero que tu fores feliz.",
        "Espero que tu sejas feliz.",
        "Додаткове `que` після `espero` бере presente do conjuntivo, не майбутній.",
      ),
    ],
    ukrainian:
      "Українське майбутнє після `коли` і `якщо` стоїть в індикативі: `коли прийду`, `якщо буде час`. Португальська в цьому місці змінює *спосіб*, не лише час: не `quando chegarei` і не `quando chego` (це звичка), а `quando chegar`.\n\nДоконаний вид українського майбутнього (`прийду`, `зроблю`, `побачу`) **не** дорівнює майбутньому кон'юнктиву. Він лише часто *трапляється в тих самих реченнях*, бо українська кодує подію як цілісну. Португальська кодує відкритість рамки. Недоконане `коли буду йти` може бути `quando eu estiver a ir` / `quando estiver indo`, уже зі складеним `estiver`.\n\n`Якщо` має два головні португальські переклади:\nвідкрите майбутнє — `se` + fut. conj. (`якщо прийде` → `se vier`)\nконтрфакт — `se` + imp. conj. (`якби прийшов` → `se viesse`)\n\nНе ставте український умовний `-би` у відкрите `se chover`.\n\nПара `побачу` / `прийду` граматично важлива: `коли побачу` → `quando vir`; `коли прийду` → `quando vier`.",
    brPt:
      "Форма жива в **обох** нормах. Бразильські підручники називають її *futuro do subjuntivo*; європейські — *futuro do conjuntivo*. Парадигма ідентична.\n\nУ розмовному PT-BR `se eu for` / `quando eu chegar` звучать щодня. Спрощення інколи йде в узгодженні особи (`se você for`, `se vocês for` замість `forem`) — друге ненормативне.\n\nPT-PT зберігає `tu` (`se fores`, `quando chegares`) у неформальному мовленні більшості регіонів. У формальному PT-PT з `você` / `o senhor`: `se for`, `quando chegar`.\n\nІспанська інтерференція однаково небезпечна для тих, хто вчив іспанську незалежно від цільового різновиду португальської.",
    regional:
      "Форма нормативна в Анголі, Мозамбіку, Кабо-Верде (стандарт). У креольському впливі її можуть замінювати на теперішній індикатив; у шкільному стандарті PALOP майбутній кон'юнктив викладають як у PT-PT.\n\n`vós`-форми `fordes`, `tiverdes` практично лише в літургійному стилі.",
    tables: [
      {
        caption: "Правильні: збіг з особовим інфінітивом",
        headers: ["Особа", "falar", "comer", "partir"],
        rows: [
          ["eu", "falar", "comer", "partir"],
          ["tu", "falares", "comeres", "partires"],
          ["ele / você", "falar", "comer", "partir"],
          ["nós", "falarmos", "comermos", "partirmos"],
          ["vós", "falardes", "comerdes", "partirdes"],
          ["eles / vocês", "falarem", "comerem", "partirem"],
        ],
        note: "Після quando/se це кон'юнктив. Після para/de — інфінітив. Форма та сама, функція інша.",
      },
      {
        caption: "Неправильні: основа pretérito (3 pl) − am",
        headers: ["INF", "3 pl perfeito", "eu / ele", "tu", "nós", "eles"],
        rows: [
          ["ser / ir", "foram", "for", "fores", "formos", "forem"],
          ["ter", "tiveram", "tiver", "tiveres", "tivermos", "tiverem"],
          ["estar", "estiveram", "estiver", "estiveres", "estivermos", "estiverem"],
          ["haver", "houveram", "houver", "houveres", "houvermos", "houverem"],
          ["vir", "vieram", "vier", "vieres", "viermos", "vierem"],
          ["ver", "viram", "vir", "vires", "virmos", "virem"],
          ["fazer", "fizeram", "fizer", "fizeres", "fizermos", "fizerem"],
          ["dizer", "disseram", "disser", "disseres", "dissermos", "disserem"],
          ["pôr", "puseram", "puser", "puseres", "pusermos", "puserem"],
          ["dar", "deram", "der", "deres", "dermos", "derem"],
          ["poder", "puderam", "puder", "puderes", "pudermos", "puderem"],
          ["saber", "souberam", "souber", "souberes", "soubermos", "souberem"],
          ["querer", "quiseram", "quiser", "quiseres", "quisermos", "quiserem"],
          ["trazer", "trouxeram", "trouxer", "trouxeres", "trouxermos", "trouxerem"],
        ],
        scroll: true,
      },
      {
        caption: "Особовий інфінітив vs майбутній кон'юнктив (неправильні)",
        headers: ["Дієслово", "para nós … (INF)", "quando nós … (conj.)"],
        rows: [
          ["ser", "para sermos claros", "quando formos claros"],
          ["ir", "para irmos cedo", "quando formos cedo"],
          ["ter", "para termos tempo", "quando tivermos tempo"],
          ["ver", "para vermos o filme", "quando virmos o filme"],
          ["vir", "para virmos a pé", "quando viermos a pé"],
          ["fazer", "para fazermos isso", "quando fizermos isso"],
        ],
      },
      {
        caption: "Три шари se / quando",
        headers: ["Значення", "Форма", "Приклад"],
        rows: [
          ["звичай / факт", "indicativo presente", "Quando chove, fico em casa."],
          ["відкрите майбутнє", "futuro do conjuntivo", "Quando chover, fico em casa."],
          ["гіпотеза / контрфакт", "imperfeito do conjuntivo", "Se chovesse, ficava em casa."],
          ["минулий контрфакт", "m.-q.-perf. do conjuntivo", "Se tivesse chovido, teríamos ficado."],
        ],
      },
    ],
  },
  {
    id: "compound-subjunctive",
    slug: "compound-subjunctive",
    category: "moods",
    titleUk: "Складений кон'юнктив",
    titlePt: "Conjuntivo composto",
    titleEn: "Compound subjunctive",
    summary: "tenha feito, tivesse feito, tiver feito.",
    aliases: [
      "складений кон'юнктив",
      "tenha feito",
      "tivesse feito",
      "tiver feito",
      "pretérito perfeito do conjuntivo",
    ],
    related: ["futuro-subjuntivo", "compound-tenses", "imperfeito-subjuntivo", "perfeito-composto"],
    intro:
      "Складений кон'юнктив — `ter` (у відповідному часі кон'юнктива) + дієприкметник. Він додає **передування** до не-факту: не просто «щоб він зробив», а «щоб він (уже) зробив»; не «якщо зробить», а «якщо вже зробить / зробить до того моменту».\n\nТри ядра:\n`tenha feito` — передування відносно теперішнього / майбутнього головного\n`tivesse feito` — передування в минулому; минулий контрфакт\n`tiver feito` — передування в відкритому майбутньому",
    formulas: [
      {
        label: "Perfeito do conjuntivo",
        pattern: "ter[conj.pres] + P.P.",
        note: "tenha / tenhas / tenha / tenhamos / tenhais / tenham + feito",
      },
      {
        label: "Mais-que-perfeito do conjuntivo",
        pattern: "ter[conj.imp] + P.P.",
        note: "tivesse … + feito",
      },
      {
        label: "Futuro composto do conjuntivo",
        pattern: "ter[conj.fut] + P.P.",
        note: "tiver … + feito",
      },
    ],
    formation:
      "`ter` відмінюється в кон'юнктиві, дієприкметник незмінний (не узгоджується): `tenha feito`, `tenha escrito`, `tenham visto` — завжди чоловіча однина дієприкметника.\n\nЛітературний допоміжний `haver`: `haja feito`, `houvesse feito`, `houver feito` — книжніше.",
    uses: [
      {
        title: "tenha feito: уже / дотепер як не-факт",
        body: "Після `espero que`, `duvido que`, `é possível que`, `não creio que`, коли підрядна дія розглядається як попередня.",
        examples: [
          ex("Espero que ele tenha chegado bem.", "Сподіваюся, він (уже) добре доїхав."),
          ex("Duvido que ela tenha dito isso.", "Сумніваюся, що вона це сказала."),
          ex("É possível que tenham perdido o comboio.", "Можливо, вони запізнилися на потяг."),
        ],
      },
      {
        title: "tivesse feito: минулий контрфакт і передування в минулому",
        body: "`Se eu tivesse sabido, não vinha.` `Tinha pedido que eles tivessem acabado antes das seis.`",
        examples: [
          ex("Se eu tivesse sabido, avisava-te.", "Якби я (тоді) знав, я б тебе попередив."),
          ex("Queria que tivesses dito a verdade.", "Я хотів, щоб ти сказав правду (раніше)."),
        ],
      },
      {
        title: "tiver feito: завершення до майбутньої точки",
        body: "Після `quando`, `se`, `assim que` зі значенням «коли вже буде зроблено».",
        examples: [
          ex("Quando eu tiver acabado, descanso.", "Коли закінчу, відпочину."),
          ex("Se tiveres decidido até sexta, perfeito.", "Якщо вирішиш до п’ятниці — ідеально."),
        ],
      },
    ],
    examples: [
      ex("Lamento que não tenhas vindo.", "Шкода, що ти не прийшов."),
      ex("Como se nada tivesse acontecido.", "Ніби нічого не сталося."),
      ex("Assim que tivermos assinado, avançamos.", "Як тільки підпишемо, рухаємось далі."),
    ],
    markers: ["tenha + P.P.", "tivesse + P.P.", "tiver + P.P.", "haja + P.P."],
    exceptions:
      "Не калькуйте іспанське `espero que haya hecho` туди, де португальська поставить простий кон'юнктив. `Espero que venha` (прихід ще буде), `espero que tenha vindo` (мав би вже прийти).\n\nДієприкметник не узгоджується: `*tenha feitas as malas` у цій перифрази — архаїчне / дуже марковане; норма `tenha feito as malas`.",
    mistakes: [
      mistake(
        "Espero que ele chegou bem.",
        "Espero que ele tenha chegado bem. / Espero que ele esteja bem.",
        "Не-факт про вже відбуту подію — perfeito do conjuntivo, не індикатив perfeito (той стверджував би факт: `sei que chegou`).",
      ),
      mistake(
        "Quando eu tenho acabado, saio.",
        "Quando eu tiver acabado, saio.",
        "Майбутнє передування після `quando` — `tiver acabado`, не `tenho acabado` (той означає ітератив до теперішнього).",
      ),
    ],
    ukrainian:
      "`Сподіваюся, він уже приїхав` → `espero que tenha chegado` (не факт, тому не `espero que chegou`).\n`Якби я тоді знав` → `se tivesse sabido`.\n`Коли закінчу` → `quando tiver acabado` / `quando acabar` (простіший варіант без явного передування).",
    brPt:
      "Форми спільні. `haver` як допоміжний книжніший у обох нормах; жива мова ставить `ter`.",
    regional:
      "Складений кон'юнктив — частина спільного стандарту. У неформальному мовленні його часто обходять простішою формою (`quando eu acabar` замість `quando eu tiver acabado`), що граматично теж правильно, лише без акценту на передуванні.",
    tables: [
      {
        caption: "Парадигма ter + feito",
        headers: ["Особа", "presente", "imperfeito", "futuro"],
        rows: [
          ["eu", "tenha feito", "tivesse feito", "tiver feito"],
          ["tu", "tenhas feito", "tivesses feito", "tiveres feito"],
          ["ele / você", "tenha feito", "tivesse feito", "tiver feito"],
          ["nós", "tenhamos feito", "tivéssemos feito", "tivermos feito"],
          ["eles / vocês", "tenham feito", "tivessem feito", "tiverem feito"],
        ],
      },
    ],
  },
  {
    id: "subjunctive-triggers",
    slug: "triggers",
    category: "moods",
    titleUk: "Коли ставиться кон'юнктив",
    titlePt: "Gatilhos do conjuntivo",
    titleEn: "Subjunctive triggers",
    summary: "Бажання, оцінка, сумнів, мета, умова — і логіка, не список.",
    aliases: [
      "тригери кон'юнктива",
      "embora",
      "para que",
      "gatilhos do subjuntivo",
      "quando usar conjuntivo",
    ],
    related: ["subjunctive-not", "subjunctive-logic", "purpose-clauses", "presente-subjuntivo"],
    intro:
      "Списки «після цих слів ставте кон'юнктив» корисні як пам’ятка й шкідливі як теорія. Той самий сполучник змінює спосіб, коли змінюється операція. `quando` бере індикатив у звичці й минулому, майбутній кон'юнктив — у відкритому майбутньому. `que` бере індикатив після `sei` і кон'юнктив після `quero`.\n\nНижче — **семантичні класи**, всередині яких кон'юнктив очікуваний, плюс типові лексеми. Якщо клас не підходить, дивіться сторінку «коли кон'юнктив не ставиться».",
    formulas: [
      {
        label: "Не-факт у підрядному з que",
        pattern: "PRED[воля/оцінка/сумнів] + que + Vconj",
      },
    ],
    formation:
      "Час кон'юнктива: теперішнє головне → presente / perfeito composto; минуле головне → imperfeito / mais-que-perfeito; відкрита майбутня рамка після quando/se → futuro / futuro composto.",
    uses: [
      {
        title: "Воля, спонукання, дозвіл, заборона",
        body: "`querer, desejar, preferir, esperar` (сподівання), `pedir, exigir, mandar, proibir, permitir, aconselhar, sugerir, recomendar, insistir em que`.",
        examples: [
          ex("Prefiro que fiques.", "Краще, щоб ти лишився."),
          ex("Insisto em que leias isto.", "Наполягаю, щоб ти це прочитав."),
        ],
      },
      {
        title: "Емоція та оцінка",
        body: "`alegrar-se que, sentir (que) (шкода), ter medo que, recear que, é pena que, é bom que, é estranho que, é incrível que, lamento que`. Багато з цих предикатів *пресупонують* зміст, але не **стверджують** його як нову інформацію — звідси кон'юнктив.",
        examples: [
          ex("Alegro-me que tenhas vindo.", "Радий, що ти прийшов."),
          ex("Tenho medo que ele se perca.", "Боюся, що він заблукає."),
        ],
      },
      {
        title: "Необхідність, можливість, ймовірність як оцінка",
        body: "`é preciso que, é necessário que, é possível que, é impossível que, é provável que, pode ser que, talvez, oxalá`. `é certo que` / `é verdade que` навпаки — індикатив.",
        examples: [
          ex("É preciso que alguém fique.", "Треба, щоб хтось лишився."),
          ex("É possível que esteja doente.", "Можливо, він хворий."),
        ],
      },
      {
        title: "Сумнів і заперечене знання / думка",
        body: "`duvidar que, não crer que, não pensar que, não achar que, não imaginar que, negar que, não é verdade que`. Афірмативні `achar/pensar/acreditar que` — індикатив.",
        examples: [
          ex("Não penso que seja tarde.", "Не думаю, що пізно."),
          ex("Nega que conheça o rapaz.", "Він заперечує, що знає хлопця."),
        ],
      },
      {
        title: "Мета, допустовість, обмеження",
        body: "`para que, a fim de que, embora, ainda que, mesmo que, apesar de que, por mais que, sem que, a não ser que, a menos que, desde que` (за умови), `contanto que`.",
        examples: [
          ex("Fica embora estejas cansado.", "Залишайся, хоч ти й стомлений."),
          ex("Podes ir desde que voltes cedo.", "Можеш іти, якщо повернешся рано."),
        ],
      },
      {
        title: "Час: ще не сталося",
        body: "`antes que`; `até que` коли межа ще попереду; `quando` / `assim que` / `logo que` у майбутньому — **futuro do conjuntivo**. `depois que` як факт — індикатив.",
        examples: [
          ex("Telefono antes que eles saiam.", "Зателефоную, поки вони не вийшли."),
          ex("Quando saírem, fecha a porta.", "Коли вийдуть, зачини двері."),
        ],
      },
      {
        title: "Невизначений референт у відносних",
        body: "Шукаємо / хочемо / немає такого X, який би… — кон'юнктив. Конкретний відомий X — індикатив.",
        examples: [
          ex("Não há ninguém que saiba disto.", "Немає нікого, хто б це знав."),
          ex("Quero um quarto que tenha vista.", "Хочу кімнату з видом."),
        ],
      },
    ],
    examples: [
      ex("Mesmo que chova, vamos.", "Навіть якщо дощитиме, ми підемо."),
      ex("Faz isso sem que ninguém perceba.", "Зроби це так, щоб ніхто не помітив."),
      ex("Caso precises, liga.", "Якщо знадобиться, дзвони."),
    ],
    markers: [
      "querer que",
      "é pena que",
      "é preciso que",
      "duvidar que",
      "não achar que",
      "para que",
      "embora",
      "mesmo que",
      "antes que",
      "desde que",
      "talvez",
      "caso",
    ],
    exceptions:
      "`esperar que` («сподіватися») — кон'юнктив. `esperar que` у значенні «чекати, поки факт станеться» може піти в індикатив або іншу конструкцію (`espero aqui até ele chegar`).\n\n`sentir que` «відчувати, що (факт)» — індикатив; `sentir que` / `sentir muito que` «шкодувати» — кон'юнктив.",
    mistakes: [
      mistake(
        "Embora está frio, saímos.",
        "Embora esteja frio, saímos.",
        "`embora` майже завжди кон'юнктив.",
      ),
      mistake(
        "É verdade que ele seja médico? (нейтральне питання про факт)",
        "É verdade que ele é médico?",
        "Запит на підтвердження факту — індикатив. Кон'юнктив звучав би як оцінка / сумнів іншого типу.",
      ),
    ],
    ukrainian:
      "Українські сполучники `щоб`, `хоч`, `перш ніж`, `може` частково підказують клас, але португальське `que` саме по собі нічого не вирішує. Дивіться предикат зліва від `que`.",
    brPt:
      "Набір тригерів спільний. PT-BR частіше скаже `talvez ele venha` і `espero que você venha`; PT-PT — `talvez venha`, з пропуском підмета. `apesar de que` + conj. живе в обох, поряд із `apesar de` + інфінітив.",
    regional:
      "`oxalá` частотніше в PT-PT і PALOP; у BR живе, але поступається `tomara que`.",
    tables: [
      {
        caption: "Класи, не «магічні слова»",
        headers: ["Клас", "Типові одиниці", "Спосіб"],
        rows: [
          ["воля", "querer, pedir, exigir", "conjuntivo"],
          ["оцінка", "é pena, é bom, lamento", "conjuntivo"],
          ["сумнів / запер. думка", "duvidar, não acho", "conjuntivo"],
          ["мета", "para que, a fim de que", "conjuntivo"],
          ["допустовість", "embora, mesmo que", "conjuntivo"],
          ["відкрите майб. час/умова", "quando, se, assim que", "futuro do conjuntivo"],
          ["факт / знання", "sei, é verdade, noto", "indicativo"],
        ],
      },
    ],
  },
  {
    id: "subjunctive-not",
    slug: "not-used",
    category: "moods",
    titleUk: "Коли кон'юнктив НЕ ставиться",
    titlePt: "Quando não usar",
    titleEn: "When not to use subjunctive",
    summary: "Факти, знання, після того як, реальні відносні.",
    aliases: [
      "не кон'юнктив",
      "indicativo",
      "коли не ставити суб'юнктив",
      "не використовувати conjuntivo",
    ],
    related: ["subjunctive-triggers", "indicative-vs-subjunctive", "subjunctive-logic"],
    intro:
      "Кон'юнктив не ставиться, коли мовець **стверджує** пропозицію, подає її як відому реальність, як сприйнятий факт або як звичку. Помилка «скрізь, де є `que`, ставте кон'юнктив» ламає ядро граматики.\n\nЯкщо українською природно сказати `що` + індикатив (`знаю, що він тут`), португальською майже напевно теж індикатив.",
    formulas: [
      {
        label: "Факт",
        pattern: "Vconhecimento / percepção / afirmação + que + Vind",
      },
    ],
    formation:
      "Це сторінка не про парадигму, а про межі. Дивіться предикати факту й сполучники, які подають подію як здійснену.",
    uses: [
      {
        title: "Знання, сприйняття, доказ",
        body: "`saber, notar, perceber, ver, ouvir, sentir` (фізично), `observar, provar, demonstrar, ser verdade, ser certo, ser óbvio, estar claro`.",
        examples: [
          ex("Sei que estás aí.", "Знаю, що ти тут."),
          ex("Vi que a porta estava aberta.", "Побачив, що двері були відчинені."),
          ex("É óbvio que precisamos de tempo.", "Очевидно, що нам потрібен час."),
        ],
      },
      {
        title: "Афірмативна думка",
        body: "`achar que, pensar que, acreditar que, imaginar que, supor que` у ствердженні — індикатив. Заперечення часто перемикає спосіб.",
        examples: [
          ex("Penso que ela tem razão.", "Думаю, вона має рацію."),
          ex("Acredito que isto vai funcionar.", "Вірю, що це спрацює."),
        ],
      },
      {
        title: "Причина як факт",
        body: "`porque, pois, já que, como` (причинове на початку) — індикатив. Це не мета й не не-факт.",
        examples: [
          ex("Fico em casa porque está a chover.", "Сиджу вдома, бо дощить.", { variety: "PT" }),
          ex("Já que vieste, entra.", "Раз уже прийшов, заходь."),
        ],
      },
      {
        title: "Час як факт: минуле й звичка; depois que",
        body: "`quando` + минуле / теперішня звичка — індикатив. `depois que` / `depois de` як здійснене — індикатив / інфінітив. `enquanto` як одночасний факт — індикатив.",
        examples: [
          ex("Quando era miúdo, morava no Porto.", "Коли я був малий, жив у Порту."),
          ex("Depois que ele saiu, ligámos.", "Після того як він вийшов, ми зателефонували."),
          ex("Quando chego ao trabalho, bebo café.", "Коли приходжу на роботу, п’ю каву. (звичай)"),
        ],
      },
      {
        title: "Відносні з конкретним референтом",
        body: "Відома людина / річ: індикатив. Кон'юнктив з’явиться, якщо референт шуканий або заперечений.",
        examples: [
          ex("O médico que me tratou era excelente.", "Лікар, який мене лікував, був чудовий."),
          ex("Tenho um amigo que vive em Coimbra.", "У мене є друг, який живе в Коїмбрі."),
        ],
      },
      {
        title: "Реальна умова-звичай",
        body: "`Se chove, o trânsito piora` — загальна істина, індикатив. Майбутня відкрита — `se chover`. Не ставте кон'юнктив у «якщо»-звичку.",
        examples: [
          ex("Se misturas azul com amarelo, dá verde.", "Якщо змішати синій із жовтим, виходить зелений."),
        ],
      },
    ],
    examples: [
      ex("Notei que ela estava nervosa.", "Я помітив, що вона нервувала."),
      ex("O facto é que ninguém veio.", "Факт у тому, що ніхто не прийшов."),
      ex("Como estava tarde, voltámos.", "Оскільки було пізно, ми повернулися."),
    ],
    markers: [
      "sei que",
      "é verdade que",
      "acho que",
      "porque",
      "depois que",
      "quando (звичай / минуле)",
      "ver que",
      "o facto de que",
    ],
    exceptions:
      "`não que` + кон'юнктив існує як зняття твердження: `Não que eu queira interferir…`. Це вже не факт.\n\n`o facto de que` зазвичай індикатив; `o facto de` + особовий інфінітив — паралель без способу.",
    mistakes: [
      mistake(
        "Sei que ele esteja doente.",
        "Sei que ele está doente.",
        "Знання стверджує факт.",
      ),
      mistake(
        "Quando eu era criança, fosse feliz.",
        "Quando eu era criança, era feliz.",
        "Минулий час-рамка — індикатив. Кон'юнктив тут нізвідки.",
      ),
      mistake(
        "Acho que não tenhas razão.",
        "Acho que não tens razão. / Não acho que tenhas razão.",
        "Афірмативне `acho que` — індикатив. Кон'юнктив з’являється, коли заперечується саме `achar`.",
      ),
    ],
    ukrainian:
      "Найпевніший тест: чи можна підрядне винести як окреме твердження, яке ви готові захищати? `Він хворий` після `знаю, що` — так → індикатив. Після `хочу, щоб` окреме твердження «ти виходиш» ви якраз *не* робите → кон'юнктив.",
    brPt:
      "Межі способу спільні. У розмовному PT-BR індикатив інколи заходить на територію кон'юнктива; навпаки (кон'юнктив після `sei que`) — майже завжди помилка учня, не варіант.",
    regional:
      "Норма PALOP збігається з європейською в цій точці: факт — індикатив.",
    tables: [
      {
        caption: "Так / ні",
        headers: ["Предикат / сполучник", "Спосіб", "Чому"],
        rows: [
          ["sei que", "indicativo", "знання"],
          ["quero que", "conjuntivo", "воля"],
          ["acho que", "indicativo", "думка як твердження"],
          ["não acho que", "conjuntivo", "твердження знято"],
          ["porque", "indicativo", "причина-факт"],
          ["para que", "conjuntivo", "мета"],
          ["depois que (факт)", "indicativo", "подія подана як сталася"],
          ["antes que", "conjuntivo", "ще не сталося"],
          ["quando (звичай)", "indicativo", "факт звички"],
          ["quando (майбутня рамка)", "fut. conjuntivo", "відкрите майбутнє"],
        ],
      },
    ],
  },
  {
    id: "subjunctive-logic",
    slug: "logic",
    category: "moods",
    titleUk: "Семантична логіка кон'юнктива",
    titlePt: "Lógica do conjuntivo",
    titleEn: "Subjunctive logic",
    summary: "Не-факт, ірреальність, оцінка пропозиції.",
    aliases: ["логіка кон'юнктива", "не-факт", "irrealis", "lógica do subjuntivo"],
    related: ["indicative-vs-subjunctive", "subjunctive-triggers", "subjunctive-not"],
    intro:
      "Кон'юнктив кодує **irrealis**: пропозиція не вводиться в дискурс як частина світу, який мовець просто описує. Вона може бути бажаною, оціненою, можливою, шуканою, умовною, ще не насталою.\n\nІндикатив кодує **realis**: «ось як є / було / буде (як факт)».\n\nОцінні предикати (`é pena que`) часто пресупонують істинність змісту, але все одно беруть кон'юнктив: мовець не *стверджує* пропозицію, він її *оцінює*. Це показує, що правило не «неправда → кон'юнктив», а «не-асерція → кон'юнктив».",
    formulas: [
      {
        label: "Асерція vs не-асерція",
        pattern: "ASSERT(p) → indicativo;  NÃO-ASSERT(p) → conjuntivo",
      },
    ],
    formation:
      "Логіка не утворює форм — вона вибирає спосіб. Форми див. на сторінках часів кон'юнктива.",
    uses: [
      {
        title: "Не стверджую p",
        body: "Воля, наказ, мета, можливість, сумнів: p ще немає в світі дискурсу як факт.",
        examples: [
          ex("Quero que p. → Quero que venhas.", "Хочу p. p не твердиться."),
        ],
      },
      {
        title: "Оцінюю p, не повідомляю p",
        body: "`É estranho que ele não tenha ligado` — ми можемо вже знати, що не подзвонив; речення оцінює це. Кон'юнктив.",
        examples: [
          ex("É estranho que ele não tenha ligado.", "Дивно, що він не подзвонив."),
        ],
      },
      {
        title: "p як умова рамки, не як подія-факт",
        body: "`Se vier` не каже «він прийде». Воно відкриває гілку світу. Майбутній кон'юнктив — підтип цієї логіки, специфічний для майбутньої відкритої рамки.",
        examples: [
          ex("Se vier, falamos. Se não vier, escrevemos.", "Дві відкриті гілки, жодна не стверджена."),
        ],
      },
      {
        title: "Чому «невпевненість» — погане правило",
        body: "`Acho que ele está doente` — мовець може бути дуже невпевненим, але граматика **стверджує** його версію світу → індикатив. `É pena que esteja doente` — мовець може бути цілком певний, але він оцінює → кон'юнктив.",
        examples: [
          ex("Acho que está doente. (невпевнено, але ind.)", "Думаю, він хворий."),
          ex("É pena que esteja doente. (певне, але conj.)", "Шкода, що він хворий."),
        ],
      },
    ],
    examples: [
      ex("Não que eu queira criticar, mas isto não funciona.", "Не те щоб я хотів критикувати, але це не працює."),
      ex("Seja qual for a decisão, cumpro.", "Якою б не була ухвала, я виконаю."),
    ],
    markers: ["не-асерція", "оцінка", "воля", "відкрита гілка", "шуканий референт"],
    exceptions:
      "Лексикалізація: деякі вирази «застигли» в одному способі (`oxalá` + conj., `já que` + ind.). Логіка пояснює більшість, не обов’язково кожен ідіоматичний залишок.",
    mistakes: [
      mistake(
        "Правило: «якщо невпевнений — кон'юнктив». Acho que seja tarde.",
        "Acho que é tarde.",
        "`achar que` асертивний. Невпевненість лексична, не граматична.",
      ),
    ],
    ukrainian:
      "Українська кодує не-асерцію сполучником (`щоб` vs `що`), інфінітивом, умовним `-би`, модальними словами. Португальська часто лишає той самий `que` і змінює спосіб дієслова. Перекладайте операцію, не шукайте морфему-відповідник.",
    brPt:
      "Семантика способу спільна для PT-BR і PT-PT. Відрізняється лише термін і розмовна дисципліна дотримання кон'юнктива.",
    regional:
      "У контактних різновидах (креоли, сильна іспанська інтерференція на кордоні) логіка може спрощуватися до індикатива. Стандарт лузофонії її зберігає.",
    tables: [
      {
        caption: "Операція, не епістемічна шкала",
        headers: ["Речення", "Впевненість", "Асерція?", "Спосіб"],
        rows: [
          ["Sei que está doente", "висока", "так", "indicativo"],
          ["Acho que está doente", "нижча", "так", "indicativo"],
          ["É pena que esteja doente", "висока", "ні (оцінка)", "conjuntivo"],
          ["Quero que esteja em casa", "байдуже", "ні (воля)", "conjuntivo"],
          ["Se estiver doente, fica", "відкрито", "ні (рамка)", "fut. conj."],
        ],
      },
    ],
  },
  {
    id: "imperative-affirmative",
    slug: "imperative",
    category: "moods",
    titleUk: "Стверджувальний імператив",
    titlePt: "Imperativo afirmativo",
    titleEn: "Affirmative imperative",
    summary: "Форми tu / você / nós / vocês.",
    aliases: ["імператив", "наказ", "faz", "faça", "imperativo afirmativo"],
    related: ["imperative-negative", "clitics-imperative", "imperative-regional", "tu-voce"],
    intro:
      "Наказовий спосіб у португальській збирається з двох джерел. Для **tu** ствердження береться з 3-ї особи однини теперішнього індикатива (`fala`, `come`, `abre`) — з окремими суплетивними формами (`sê`, `vai`). Для **você / o senhor / nós / vocês** ствердження збігається з теперішнім кон'юнктивом (`fale`, `falemos`, `falem`).\n\nЗаперечення *всіх* осіб іде від кон'юнктива: це вже наступна стаття. Не утворюйте `*não fala` як нейтральний наказ до `tu`.",
    formulas: [
      {
        label: "tu ствердження",
        pattern: "V 3sg presente indicativo",
        note: "fala, come, abre, vai, faz, sê — не *fales*.",
      },
      {
        label: "você / nós / vocês ствердження",
        pattern: "V presente do conjuntivo",
        note: "fale, falemos, falem.",
      },
    ],
    formation:
      "**tu ствердження = 3 sg presente do indicativo** (мінус кінцеве `-s` 2 sg, що дає ту саму форму):\n`falas` → `fala`; `comes` → `come`; `partes` → `parte`.\n\nНеправильні tu:\n`ser` → `sê` (не `é`)\n`estar` → `está`\n`ir` → `vai`\n`fazer` → `faz`\n`dizer` → `diz`\n`ter` → `tem`\n`vir` → `vem`\n`pôr` → `põe`\n`ver` → `vê`\n`trazer` → `traz`\n`sair` → `sai`\n`dar` → `dá`\n\n**você** = 3 sg кон'юнктива: `fale, coma, parta, seja, vá, faça, diga, tenha`.\n**nós** = 1 pl кон'юнктива: `falemos, sejamos, vamos` (часто перифраза `vamos + INF`).\n**vocês** = 3 pl кон'юнктива: `falem, sejam, vão, façam`.\n**vós** (книжне): від інфінітива `-i` / `-ei`: `falai, comei, parti, sede, ide`.",
    uses: [
      {
        title: "Прямий наказ і прохання до tu",
        body: "Неформальне PT-PT і частина PT-BR.",
        examples: [
          ex("Fala mais alto.", "Говори голосніше."),
          ex("Sê paciente.", "Будь терплячим."),
          ex("Vem cá.", "Іди сюди."),
          ex("Diz a verdade.", "Скажи правду."),
        ],
      },
      {
        title: "Наказ до você / o senhor",
        body: "Форма 3-ї особи кон'юнктива. У письмовому PT-BR це базова форма на «ви/ти».",
        examples: [
          ex("Fale mais alto, por favor.", "Говоріть голосніше, будь ласка."),
          ex("Seja breve.", "Будьте стислими."),
          ex("Faça o favor de esperar.", "Будьте ласкаві зачекати."),
        ],
      },
      {
        title: "Запрошення «давайте»: nós",
        body: "`Falemos disso.` Часто замінюється на `vamos falar disso`, нейтральніше в обох різновидах.",
        examples: [
          ex("Vamos sair.", "Ходімо."),
          ex("Sejamos honestos.", "Будьмо чесними."),
        ],
      },
      {
        title: "Клитики в ствердженні",
        body: "Стверджувальний імператив у нормі ставить клитик **після** дієслова: `diz-me`, `fale-me`, `esperem-nos`. У розмовному PT-BR часто `me diz`, `me fala` — прокліза, дуже характерна.",
        examples: [
          ex("Diz-me a verdade.", "Скажи мені правду.", { variety: "PT" }),
          ex("Me diz a verdade.", "Скажи мені правду.", { variety: "BR", register: "colloquial" }),
          ex("Faz-me um favor.", "Зроби мені послугу.", { variety: "PT" }),
        ],
      },
    ],
    examples: [
      ex("Olha para mim.", "Подивись на мене."),
      ex("Abre a janela.", "Відчини вікно."),
      ex("Põe o casaco.", "Одягни пальто."),
      ex("Tenham paciência.", "Майте терпіння."),
    ],
    markers: ["sê", "vai", "faz", "diz", "fala", "fale", "vamos + INF"],
    exceptions:
      "`ser` → tu `sê`, você `seja`. Ніколи `*é` як наказ.\n`ir` → tu `vai`, você `vá`, vocês `vão`. `vai você` як емфаза існує.\nПисаний наголос: `dá`, `está`, `vê`, `põe` зберігаються в наказі.",
    mistakes: [
      mistake(
        "É bom! (як наказ «будь добрим»)",
        "Sê bom. / Seja bom.",
        "`é` — індикатив, не імператив `ser`.",
      ),
      mistake(
        "Fales com ela. (ствердження до tu)",
        "Fala com ela.",
        "Стверджувальний tu — `fala`. `fales` — заперечення `não fales` або кон'юнктив.",
      ),
      mistake(
        "Me diz, por favor. як єдина «правильна» форма для PT-PT",
        "Diz-me, por favor.",
        "У PT-PT нормі ствердження — енкліза. `me diz` — бразильська розмовна прокліза.",
      ),
    ],
    ukrainian:
      "Український наказ `говори` / `говоріть` не змінює основи між ствердженням і запереченням (`не говори`). Португальський tu змінює: `fala` vs `não fales`. Це треба ставити як окрему звичку, не як «додати não».",
    brPt:
      "PT-PT: живий tu-імператив `fala, vem, diz`. você-імператив ввічливіший / дистантніший.\nPT-BR: у більшості регіонів базовий наказ — форма `você` (`fala` як tu-форма все одно дуже частотна в розмові: `olha`, `espera`, `vem`). Південь / північ / частини Northeast зберігають `tu` з різним узгодженням.",
    regional:
      "Див. сторінку регіонального імператива. В Анголі міський наказ часто на `você` (`fale`), поряд із tu.",
    tables: [
      {
        caption: "Стверджувальний імператив",
        headers: ["Особа", "falar", "ser", "ir", "fazer", "dizer"],
        rows: [
          ["tu", "fala", "sê", "vai", "faz", "diz"],
          ["você", "fale", "seja", "vá", "faça", "diga"],
          ["nós", "falemos", "sejamos", "vamos", "façamos", "digamos"],
          ["vós", "falai", "sede", "ide", "fazei", "dizei"],
          ["vocês", "falem", "sejam", "vão", "façam", "digam"],
        ],
      },
    ],
  },
  {
    id: "imperative-negative",
    slug: "imperative-negative",
    category: "moods",
    titleUk: "Заперечний імператив",
    titlePt: "Imperativo negativo",
    titleEn: "Negative imperative",
    summary: "Завжди від presente do conjuntivo.",
    aliases: ["заперечний імператив", "não faças", "não fale", "imperativo negativo"],
    related: ["imperative-affirmative", "presente-subjuntivo", "clitics-imperative"],
    intro:
      "Заперечний наказ у всіх особах утворюється від **presente do conjuntivo**. `Não fales.` `Não fale.` `Não falemos.` `Não falem.` Не існує окремої «заперечної імперативної» парадигми.\n\nТому ствердження й заперечення для `tu` виглядають по-різному: `Fala!` / `Não fales!` Для `você` вони симетричні: `Fale!` / `Não fale!`",
    formulas: [
      {
        label: "Усі особи",
        pattern: "NEG + Vconj.pres",
        note: "Não fales / não fale / não falemos / não falem.",
      },
    ],
    formation:
      "Просто заперечіть відповідну форму теперішнього кон'юнктива. Клитик у запереченні стоїть **перед** дієсловом: `não me digas`, `não se preocupe` — бо `não` є тригером проклізи.",
    uses: [
      {
        title: "tu",
        body: "Форма 2 sg кон'юнктива.",
        examples: [
          ex("Não fales assim.", "Не говори так."),
          ex("Não vás para lá.", "Не ходи туди."),
          ex("Não sejas mau.", "Не будь злим."),
          ex("Não me digas isso.", "Не кажи мені цього."),
        ],
      },
      {
        title: "você / o senhor",
        body: "Форма 3 sg кон'юнктива. У PT-BR це базова заборона.",
        examples: [
          ex("Não fale com a boca cheia.", "Не розмовляйте з повним ротом."),
          ex("Não se preocupe.", "Не хвилюйтеся."),
          ex("Não faça barulho.", "Не шуміть."),
        ],
      },
      {
        title: "nós / vocês",
        body: "`Não saiamos ainda.` На практиці часто `não vamos sair ainda`. Vocês: `não saiam`.",
        examples: [
          ex("Não esqueçamos isto.", "Не забуваймо цього."),
          ex("Não abram a porta.", "Не відчиняйте двері."),
        ],
      },
    ],
    examples: [
      ex("Não ponhas os pés em cima da mesa.", "Не клади ноги на стіл."),
      ex("Não tenha pressa.", "Не поспішайте."),
      ex("Não nos esperem.", "Не чекайте на нас."),
    ],
    markers: ["não fales", "não fale", "não sejas", "não vás", "não me + Vconj"],
    exceptions:
      "Розмовне PT-BR `não fala` (індикатив / tu-форма зі стверджувальною основою) дуже чути. У стандарті — `não fale` (você) або `não fales` (tu). Не переносьте розмовне `não fala` в писемну норму без усвідомлення регістру.",
    mistakes: [
      mistake(
        "Não fala comigo. (як нормативний tu)",
        "Não fales comigo.",
        "Заперечний tu — кон'юнктив `fales`. `não fala` — розмовний BR або 3-тя особа індикатива («він не розмовляє»).",
      ),
      mistake(
        "Não diz-me mentiras.",
        "Não me digas mentiras. / Não me diga mentiras.",
        "Заперечення тягне проклізу й кон'юнктив: `digas` / `diga`, клитик перед дієсловом.",
      ),
      mistake(
        "Não vai embora! (нормативний tu)",
        "Não vás embora!",
        "`ir`: заперечний tu — `não vás`, не `não vai`.",
      ),
    ],
    ukrainian:
      "Не копіюйте українське `не` + та сама форма (`не говори`). Португальською форма змінюється для tu. Для вас/você зміна менша, бо ствердження вже з кон'юнктива.",
    brPt:
      "PT-PT: `não fales`, `não te preocupes` з живим tu. PT-BR стандарт: `não fale`, `não se preocupe`. Розмовний BR: `não fala`, `não vai` — широко, але не формально.",
    regional:
      "Південь Бразилії: `não fales` при свідомому tu; фактично часто `não fala`. Португалія: `não fales` — норма неформального мовлення.",
    tables: [
      {
        caption: "Заперечний імператив",
        headers: ["Особа", "falar", "ser", "ir", "fazer"],
        rows: [
          ["tu", "não fales", "não sejas", "não vás", "não faças"],
          ["você", "não fale", "não seja", "não vá", "não faça"],
          ["nós", "não falemos", "não sejamos", "não vamos", "não façamos"],
          ["vocês", "não falem", "não sejam", "não vão", "não façam"],
        ],
      },
      {
        caption: "Ствердження vs заперечення tu",
        headers: ["Дієслово", "Ствердження", "Заперечення"],
        rows: [
          ["falar", "fala", "não fales"],
          ["ser", "sê", "não sejas"],
          ["ir", "vai", "não vás"],
          ["fazer", "faz", "não faças"],
          ["dizer", "diz", "não digas"],
          ["vir", "vem", "não venhas"],
          ["ter", "tem", "não tenhas"],
        ],
      },
    ],
  },
  {
    id: "imperative-regional",
    slug: "imperative-regional",
    category: "moods",
    titleUk: "Імператив: регіональні відмінності",
    titlePt: "Imperativo regional",
    titleEn: "Regional imperative",
    summary: "tu в Португалії, você в Бразилії, змішані зони.",
    aliases: ["імператив BR PT", "tu fala", "você fale", "imperativo regional"],
    related: ["tu-voce", "imperative-affirmative", "imperative-negative", "forms-of-address"],
    intro:
      "Імператив неможливо відірвати від системи звертання. Де живе `tu`, живе `fala` / `não fales`. Де живе `você`, живе `fale` / `não fale`. Де `tu` узгоджується як `você` (частина Бразилії), форми змішуються: займенник `tu`, дієслово `fala` або навіть `fale`.\n\nЖоден різновид не «неправильний». Неправильний — змішати парадигму всередині одного речення без регіональної логіки (`você falas`) у стандартному тексті.",
    formulas: [
      {
        label: "PT-PT неформальне",
        pattern: "fala  /  não fales",
        ptEu: "tu + IMP tu",
      },
      {
        label: "PT-BR широка норма",
        pattern: "fale  /  não fale",
        br: "você + IMP 3sg conj.",
        note: "Розмовне BR також: fala / não fala.",
      },
    ],
    formation:
      "Форми ті самі, що на сторінках стверджувального й заперечного імператива. Тут — розподіл.",
    uses: [
      {
        title: "Європейська португальська",
        body: "`tu` — нормальне неформальне звертання в більшості контекстів. Імператив: `espera`, `olha`, `vem`, `não te preocupes`. `você` в багатьох регіонах більш дистантне, іноді навіть різке. Ввічливість: `o senhor` / `a senhora` + 3 sg (`espere`, `não se preocupe`).",
        examples: [
          ex("Espera aí.", "Зачекай.", { variety: "PT" }),
          ex("Não te sentes aí.", "Не сідай туди.", { variety: "PT" }),
          ex("Faça o favor de entrar.", "Будь ласка, заходьте.", { variety: "PT", register: "formal" }),
        ],
      },
      {
        title: "Бразильська португальська: широка зона você",
        body: "Писемний стандарт: `espere`, `olhe`, `venha`, `não se preocupe`. Усна повсякденна мова рясніє tu-формами як «узагальненим наказом» без займенника: `olha`, `espera`, `vem cá`, `faz assim` — навіть там, де займенник був би `você`.",
        examples: [
          ex("Espera aí um pouco.", "Зачекай трохи.", { variety: "BR", register: "colloquial" }),
          ex("Não se preocupe com isso.", "Не хвилюйтеся за це.", { variety: "BR" }),
          ex("Venha cá, por favor.", "Підійдіть сюди, будь ласка.", { variety: "BR" }),
        ],
      },
      {
        title: "Бразилія з живим tu",
        body: "Південь (РС, СК, частина Парани), частини Півночі й Північного Сходу. Нормативне узгодження: `tu falas`, наказ `fala` / `não fales`. Фактичне: часто `tu fala`, `não fala`.",
        examples: [
          ex("Tu vem aqui. / Vem aqui, tu.", "Іди сюди.", { variety: "BR", register: "colloquial" }),
        ],
      },
      {
        title: "Прокліза vs енкліза",
        body: "PT-PT ствердження: `diz-me`. PT-BR розмовне: `me diz`. Заперечення в обох: прокліза `não me digas` / `não me diga`.",
        examples: [
          ex("Diz-me tudo.", "Скажи мені все.", { variety: "PT" }),
          ex("Me conta tudo.", "Розкажи мені все.", { variety: "BR", register: "colloquial" }),
        ],
      },
    ],
    examples: [
      ex("Senta-te.", "Сідай.", { variety: "PT" }),
      ex("Senta.", "Сідай.", { variety: "BR", register: "colloquial" }),
      ex("Sente-se, por favor.", "Сідайте, будь ласка.", { register: "formal" }),
    ],
    markers: ["tu fala", "você fale", "me diz", "diz-me", "o senhor espere"],
    exceptions:
      "`olha`, `espera`, `veja bem`, `deixa` як дискурсивні маркери застигли в tu-формі по всьому лузофонному світі, включно з зонами você. Це не доказ, що мовець перейшов на tu.",
    mistakes: [
      mistake(
        "Você falas baixo.",
        "Você fala baixo. / Tu falas baixo.",
        "Не змішуйте займенник однієї системи з флексією іншої в стандарті.",
      ),
      mistake(
        "Não te preocupe. (змішане)",
        "Não te preocupes. (tu) / Não se preocupe. (você)",
        "Клитик і закінчення мають належати одній особі.",
      ),
    ],
    ukrainian:
      "Українське `ти` / `ви` не накладається на `tu` / `você` один до одного. Бразильське `você` часто відповідає українському `ти` за близькістю, але граматично це 3-тя особа. Європейське `você` ближче до холоднуватого `ви`. Імператив треба вчити разом із цією соціальною картою, не як окрему таблицю.",
    brPt:
      "Це і є сторінка порівняння. Коротко: PT-PT неформальне = tu-парадигма; PT-BR стандарт = você-парадигма + розмовні tu-форми як універсальний наказ; клитики в ствердженні — енкліза vs прокліза.",
    regional:
      "Ангола: міське `você` + форми 3 sg (`fale`), tu в неформальних мережах. Мозамбік: подібно, з впливом шкільної європейської норми в писемному імперативі. Кабо-Верде: у португальському коді часто você / vocês.\n\nВсюди `vocês` + 3 pl (`falem`, `não falem`) — жива множина. `vós` + `falai` не є розмовною нормою жодного великого міста.",
    tables: [
      {
        caption: "Наказ «зачекай / не хвилюйся»",
        headers: ["Контекст", "Ствердження", "Заперечення"],
        rows: [
          ["PT-PT, друг", "Espera. / Espera aí.", "Não te preocupes."],
          ["PT-PT, дистанція", "Espere. / Faça o favor de esperar.", "Não se preocupe."],
          ["PT-BR, письмо", "Espere.", "Não se preocupe."],
          ["PT-BR, усне", "Espera. / Espera aí.", "Não se preocupa. / Não se preocupe."],
          ["Південь BR, tu", "Espera.", "Não te preocupes. / Não te preocupa."],
        ],
      },
    ],
  },
];
