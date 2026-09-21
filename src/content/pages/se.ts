import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "se-overview",
    slug: "overview",
    category: "se",
    titleUk: "se: огляд функцій",
    titlePt: "se",
    titleEn: "se overview",
    summary:
      "Один елемент se виконує кілька різних граматичних ролей. Не зводьте все до «зворотного займенника».",
    aliases: ["se", "функції se", "se reflexivo", "se passivo", "se impessoal"],
    related: [
      "se-reflexive",
      "se-reciprocal",
      "se-pronominal",
      "se-impersonal",
      "se-passive",
      "se-middle",
      "se-agreement",
      "pronominal-verbs",
      "clitic-placement",
    ],
    intro:
      "Форма `se` в португальській — це не одне явище, а кілька різних граматичних механізмів, які випадково виглядають однаково. Українською їх часто все підряд називають «зворотним займенником», і саме звідси починається плутанина.\n\nРефлексивне `se` означає, що підмет є водночас об'єктом дії (`Ela lava-se`). Взаємне `se` описує симетричну дію між учасниками (`Eles abraçaram-se`). Прономінальне `se` — частина самої лексеми (`queixar-se`, `lembrar-se`). Пасивне `se` робить пацієнса підметом (`Alugam-se quartos`). Безособове `se` приховує агенса без зміни аргументної структури (`Vive-se bem aqui`). Медіальне `se` позначає подію без агенса (`A porta abriu-se`).\n\nОкремо стоїть сполучник `se` («якщо») — це інша одиниця, з іншою синтаксичною поведінкою. На цій сторінці йдеться лише про займенникове / морфологічне `se`.\n\nДіагностика функції завжди йде від аргументної структури, узгодження й можливості перефразування, а не від самої форми `se`.",
    formulas: [
      {
        label: "Рефлексив / взаємне / прономінальне",
        pattern: "S + CL-se + V",
        br: "S + se + V",
        ptEu: "S + V-se",
        note: "CL = клитик se. Позиція залежить від colocação pronominal.",
      },
      {
        label: "Пасивне se (дієслово узгоджується з пацієнсом)",
        pattern: "V-se + S-пацієнс",
        note: "Alugam-se quartos. Підмет = пацієнс; число дієслова = число пацієнса.",
      },
      {
        label: "Безособове se (дієслово в 3-й особі однини)",
        pattern: "V-se + (додаток)",
        note: "Vive-se bem. Precisa-se de ajuda. Дієслово не узгоджується з іменною групою після нього.",
      },
    ],
    formation:
      "Морфологічно `se` — ненаголошений клитичний займенник 3-ї особи. Парадигма рефлексивних / прономінальних форм: `me`, `te`, `se`, `nos`, `vos`, `se`. Для 3-ї особи однини й множини, а також для `você` / `vocês` / `o senhor` форма одна — `se`.\n\nПозиція клитика — окрема система (`colocação pronominal`). У європейській португальській нейтральний порядок часто енкліза: `lava-se`, `vende-se`. У бразильській розмовній нормі домінує прокліза: `se lava`, `se vende`. Заперечення, питальні слова, сполучники й квантори в обох варіантах тягнуть проклізу: `não se vende`, `como se faz`.",
    uses: [
      {
        title: "Справжня рефлексія",
        body: "Підмет одночасно є агенсом і пацієнсом. Українською це зазвичай `-ся` або займенник `себе`. Перевірка: можна додати `a si mesmo` / `a si própria`.",
        examples: [
          ex("Ela lava-se depressa.", "Вона швидко вмивається.", {
            variety: "PT",
          }),
          ex("Ela se lava depressa.", "Вона швидко вмивається.", {
            variety: "BR",
          }),
        ],
      },
      {
        title: "Взаємна дія",
        body: "Два або більше учасників діють один на одного. Маркери: `um ao outro`, `mutuamente`, множина підмета.",
        examples: [
          ex("Os dois cumprimentaram-se à porta.", "Вони двоє привіталися біля дверей."),
        ],
      },
      {
        title: "Прономінальне (лексичне) se",
        body: "`se` входить до словникової форми дієслова і не означає «себе». `queixar-se` — це не «жаліти себе», а «скаржитися». Часто зберігається прийменник: `lembrar-se de`, `queixar-se de`.",
        examples: [
          ex("Lembro-me daquela rua.", "Я пам'ятаю ту вулицю."),
        ],
      },
      {
        title: "Пасивне se",
        body: "Пацієнс стає підметом, агенс не названий. Дієслово узгоджується з пацієнсом. Парафраза: `ser` + particípio.",
        examples: [
          ex("Alugam-se quartos.", "Здаються кімнати. / Кімнати здаються."),
        ],
      },
      {
        title: "Безособове se",
        body: "Підмет невизначений («люди», «хтось»). Дієслово стоїть у 3-й особі однини. Типове з неперехідними дієсловами та з `de` + іменник.",
        examples: [
          ex("Vive-se bem nesta cidade.", "У цьому місті добре живеться."),
          ex("Precisa-se de pedreiros.", "Потрібні муляри. / Шукають мулярів."),
        ],
      },
      {
        title: "Медіальне / антикаузативне se",
        body: "Подія відбувається з учасником, але агенс не мислиться. Двері не «відчиняють себе» і не «були кимось відчинені» як у фокусі — вони просто відчинилися.",
        examples: [
          ex("A janela abriu-se com o vento.", "Вікно відчинилося від вітру."),
        ],
      },
    ],
    examples: [
      ex("Não se fala disso em casa.", "Про це вдома не говорять."),
      ex("Como se diz isto em português?", "Як це сказати португальською?"),
      ex("Vendam-se casas ou vende-se casas?", "Здаються будинки / продають будинки?", {
        note: "Це вже питання узгодження: пасив vs безособове. Див. se-agreement.",
      }),
      ex("Se chover, fico em casa.", "Якщо піде дощ, лишусь удома.", {
        note: "Тут se — сполучник умови, не займенник.",
      }),
    ],
    markers: [
      "se",
      "me / te / nos / vos",
      "a si mesmo",
      "um ao outro",
      "vender-se",
      "viver-se",
      "abrir-se",
    ],
    exceptions:
      "Не кожне `-ся` в українській відповідає португальському `se`. `Сміятися` — `rir` (не `rir-se` у значенні «сміятися»). `Боятися` — `ter medo` або `assustar-se` (різні конструкції). І навпаки: португальське `ir-se embora` не калькується як «йти себе».\n\nСполучник `se` і займенник `se` омонімічні. Після прийменника займенник має форму `si`: `para si`, `por si`, `consigo`.",
    mistakes: [
      mistake(
        "Me lavo. (як іспанське)",
        "Lavo-me. / Eu me lavo.",
        "Іспанська прокліза `me lavo` без підсилювача нормальна; у португальській на початку речення в PT-PT енкліза обов'язкова, у PT-BR — `Eu me lavo` або `Me lavo` (розмовно, з регіональною варіативністю).",
      ),
      mistake(
        "Queixo o chefe.",
        "Queixo-me do chefe.",
        "`queixar-se` — прономінальне дієслово з `de`. Без `se` і без `de` речення або неграматичне, або змінює значення.",
      ),
      mistake(
        "Усе se — це «себе».",
        "Спочатку визначте функцію: рефлексив, взаємне, лексичне, пасив, безособове, медіум.",
        "Однакова форма маскує різні структури. Від цього залежить узгодження й переклад.",
      ),
    ],
    ukrainian:
      "Українське `-ся` теж багатозначне: рефлексив (`митися`), взаємне (`обійматися`), безособове (`живеться`), медіальне (`двері відчинилися`), лексичне (`сміятися`, `боятися`). Це допомагає інтуїції, але не дає правила відповідності один до одного.\n\nПортугальська додатково розрізняє **пасивне** і **безособове** `se` через узгодження дієслова — українська цього морфологічно не робить. Тому `Alugam-se quartos` і `Vive-se bem` для українця виглядають «однаково зі se», хоча граматично це різні конструкції.\n\nОкремий тиск дає іспанська, якщо ви її вже вчили: `se venden casas` там однозначніше пасивне, а португальська має живу варіативність `vendem-se` / `vende-se`.",
    brPt:
      "Головна відмінність — **позиція** `se`, а не його функції. PT-PT: `Faz-se assim.` PT-BR: `Se faz assim.` / `Faz-se assim` у вивісках і формальному письмі. Функції (рефлексив, пасив, безособове) спільні; розбіжність у частоті безособового `vende-se casas` (див. `se-agreement`).",
    regional:
      "В африканських різновидах (Ангола, Мозамбік) система функцій `se` загалом та сама, що в європейській нормі; енкліза в письмі ближча до PT-PT. У вивісках по всьому лузофонному світі часто застигла формула `Vende-se` навіть перед множиною.",
  },
  {
    id: "se-reflexive",
    slug: "reflexive",
    category: "se",
    titleUk: "Рефлексивне se",
    titlePt: "se reflexivo",
    titleEn: "Reflexive se",
    summary: "Підмет є водночас агенсом і пацієнсом: ela lava-se, eu feri-me.",
    aliases: ["рефлексив se", "lavar-se", "зворотний", "a si mesmo"],
    related: [
      "se-overview",
      "se-reciprocal",
      "se-pronominal",
      "reflexive-pronouns",
      "object-pronouns",
      "clitic-placement",
    ],
    intro:
      "Рефлексивне `se` — це той випадок, де українська інтуїція майже не зраджує: дія спрямована на самого діяча. `Ela lava-se` ≈ `Вона вмивається` / `Вона миє себе`.\n\nГраматично це клитичний об'єктний займенник, кореферентний із підметом. Для 1-ї та 2-ї особи форми інші: `me`, `te`, `nos`, `vos`. `se` з'являється з 3-ю особою, з `você` / `vocês` і з `o senhor` / `a senhora`.\n\nНе все, що має `se`, є рефлексивом. Якщо не можна вставити `a si mesmo` без абсурду, шукайте іншу функцію.",
    formulas: [
      {
        label: "Рефлексив 3-ї особи",
        pattern: "S + V + se",
        br: "S + se + V",
        ptEu: "S + V-se",
        negative: "S + NEG + se + V",
      },
      {
        label: "Підсилення",
        pattern: "S + V-se + a si mesmo / a si própria",
        note: "Підкреслює, що пацієнс = підмет, на противагу іншому об'єктові.",
      },
    ],
    formation:
      "Парадигма з `lavar`:\n\n`eu lavo-me` · `tu lavas-te` · `ele/ela/você lava-se` · `nós lavamo-nos` · `vós lavais-vos` · `eles/elas/vocês lavam-se`.\n\nЗверніть увагу на `lavamo-nos`: випадає `-s` основи перед `nos` (`lavamos` + `nos` → `lavamo-nos`). Це загальне правило енклізи `nos` після 1-ї особи множини.\n\nУ PT-BR частіше: `eu me lavo`, `você se lava`, `a gente se lava`.",
    uses: [
      {
        title: "Гігієна, догляд, одягання",
        body: "Класичний рефлексив: `lavar-se`, `pentear-se`, `vestir-se`, `maquiar-se` / `maquilhar-se`, `barbear-se`.",
        examples: [
          ex("Vista-se depressa, que o táxi já chegou.", "Одягайтеся швидко, таксі вже приїхало."),
          ex("As crianças ainda não se pentearam.", "Діти ще не зачесалися.", {
            variety: "BR",
          }),
        ],
      },
      {
        title: "Тілесна шкода або зміна",
        body: "`ferir-se`, `cortar-se`, `queimar-se`, `magoar-se`. Часто це ненавмисна дія: підмет не обов'язково хотів результату.",
        examples: [
          ex("Cortei-me a fazer o jantar.", "Я порізався, готуючи вечерю.", {
            variety: "PT",
          }),
        ],
      },
      {
        title: "Контраст «себе, а не когось»",
        body: "З `a si mesmo` рефлексив стає контрастивним.",
        examples: [
          ex("Ele não se critica a si mesmo: critica os outros.", "Він не критикує себе — він критикує інших."),
        ],
      },
      {
        title: "Рефлексив із прийменником",
        body: "Після прийменника клитик неможливий: потрібна наголошена форма `si` (3-тя особа) або `mim` / `ti`. `falar consigo`, `pensar em si`.",
        examples: [
          ex("Ela fala sempre de si.", "Вона завжди говорить про себе."),
          ex("Leva o casaco contigo.", "Візьми пальто з собою."),
        ],
      },
    ],
    examples: [
      ex("Olhei-me ao espelho e não gostei.", "Я подивився на себе в дзеркало й не сподобався собі."),
      ex("Não te magoes.", "Не забийся. / Не скривди себе."),
      ex("O senhor sente-se bem?", "Ви добре себе почуваєте?", {
        variety: "PT",
        register: "formal",
      }),
      ex("Você se machucou?", "Ти забився?", { variety: "BR" }),
    ],
    markers: [
      "lavar-se",
      "vestir-se",
      "cortar-se",
      "a si mesmo",
      "me / te / se / nos",
    ],
    exceptions:
      "Деякі дієслова виглядають рефлексивно, але є лексично прономінальними: `arrepender-se`, `queixar-se`, `dignar-se`. Їх не можна вільно замінити на перехідне без `se` зі збереженням значення.\n\n`sentar-se` vs `sentar`: `Sente-se` — «сідайте»; `Sente a criança` — «посадіть дитину». Тут `se` справді рефлексивне / каузативне чергування.",
    mistakes: [
      mistake(
        "Ele lava ele.",
        "Ele lava-se. / Ele se lava.",
        "Особовий займенник `ele` не замінює рефлексивний клитик у стандартній граматиці. `Ele lava ele` звучить як «він миє того іншого чоловіка».",
      ),
      mistake(
        "Nós lavamos-nos. (із -s)",
        "Nós lavamo-nos.",
        "Перед енклітичним `nos` кінцеве `-s` форми 1-ї особи множини випадає.",
      ),
      mistake(
        "Lavo-se.",
        "Lavo-me.",
        "`se` не стоїть з 1-ю особою. Особа клитика має збігатися з особою підмета.",
      ),
    ],
    ukrainian:
      "Українське `-ся` в `митися`, `одягатися`, `порізатися` добре відповідає рефлексиву. Пастка в іншому: українською можна сказати `миє себе` з наголошеним займенником для емфази; португальською емфаза — `a si mesmo`, а не повтор `ele`.\n\nЩе: українське `почуватися` (`я почуваюся добре`) — це `sentir-se` (`sinto-me bem`), обов'язково з клитиком. Без `se` `sentir` означає «відчувати (щось)»: `sinto frio`, `sinto saudade`.",
    brPt:
      "PT-PT: `Lavo-me todas as manhãs.` PT-BR: `Eu me lavo todas as manhãs.` Функція та сама. У наказовому способі: PT-PT `Lava-te!` / `Lave-se!`; PT-BR частіше `Se lava!` рідше, нормативне `Lava-se` майже не вживають у 2-й особі, бо домінує `você`: `Se lava` розмовно, `Lava` без займенника теж зустрічається.",
  },
  {
    id: "se-reciprocal",
    slug: "reciprocal",
    category: "se",
    titleUk: "Взаємне se",
    titlePt: "se recíproco",
    titleEn: "Reciprocal se",
    summary: "Множинний підмет, симетрична дія: eles abraçaram-se, conhecemo-nos em 2019.",
    aliases: ["взаємне", "recíproco", "um ao outro", "один одного"],
    related: ["se-overview", "se-reflexive", "reflexive-pronouns"],
    intro:
      "Взаємне `se` описує симетричну дію: A діє на B, і B діє на A. Формально воно збігається з рефлексивом 3-ї особи множини, тому потрібен контекст або уточнювач `um ao outro` / `uns aos outros`.\n\nПідмет майже завжди в множині (або координація: `o João e a Maria`). `A gente se abraça` граматично однина, семантично множина — типова бразильська конструкція.",
    formulas: [
      {
        label: "Взаємне",
        pattern: "S-мн + V-se",
        note: "За потреби: um ao outro / uma à outra / mutuamente.",
      },
    ],
    formation:
      "Ті самі клитики, що й у рефлексиві. Різниця не морфологічна, а семантична: кожен учасник є і агенсом, і пацієнсом **іншого** учасника, а не лише себе.",
    uses: [
      {
        title: "Фізичний контакт, привітання",
        body: "`abraçar-se`, `beijar-se`, `cumprimentar-se`, `encontrar-se`.",
        examples: [
          ex("Eles abraçaram-se longamente.", "Вони довго обіймалися."),
          ex("A gente se encontra amanhã?", "Зустрінемося завтра?", {
            variety: "BR",
          }),
        ],
      },
      {
        title: "Соціальні відносини",
        body: "`conhecer-se`, `odiar-se`, `entender-se`, `casar-se` (останнє вже на межі з лексичним).",
        examples: [
          ex("Conhecemo-nos na faculdade.", "Ми познайомилися в університеті."),
          ex("Eles não se falam há anos.", "Вони не розмовляють уже роки."),
        ],
      },
      {
        title: "Уникнення двозначності",
        body: "`Eles mataram-se` може бути рефлексивом (самогубство кожного) або взаємним (убили один одного). `um ao outro` знімає двозначність.",
        examples: [
          ex("Eles criticam-se uns aos outros, não a si mesmos.", "Вони критикують одні одних, а не самих себе."),
        ],
      },
    ],
    examples: [
      ex("Olharam-se e riram.", "Вони подивилися одне на одного й розсміялися."),
      ex("Escrevemo-nos durante a pandemia.", "Ми листувалися під час пандемії."),
    ],
    markers: ["um ao outro", "uns aos outros", "mutuamente", "entre si"],
    exceptions:
      "`casar-se com` в сучасній мові часто лексикалізоване («одружитися»), хоча етимологічно взаємне. `divorciar-se` подібно. Не обов'язково підкреслювати взаємність, якщо вона вже в лексиці.",
    mistakes: [
      mistake(
        "Eles se abraçam eles.",
        "Eles abraçam-se. / Eles se abraçam (um ao outro).",
        "Повтор наголошеного займенника не будує взаємність. Потрібен клитик і, за потреби, `um ao outro`.",
      ),
    ],
    ukrainian:
      "Українське `-ся` у `обійматися`, `вітатися`, `листуватися` — прямий аналог. Різниця в тому, що португальська частіше потребує множини підмета: `*Ele abraça-se com ela` можливе, але природніше `Eles abraçam-se` або `Ele abraça-a`.",
    brPt:
      "Різниця знову в позиції клитика, не в семантиці. PT-BR широко вживає `a gente se + V-3sg` зі взаємним значенням.",
  },
  {
    id: "se-pronominal",
    slug: "pronominal",
    category: "se",
    titleUk: "Прономінальне se",
    titlePt: "se pronominal",
    titleEn: "Pronominal se",
    summary:
      "se як частина лексеми: queixar-se, lembrar-se, arrepender-se — не «себе», а словникова вимога.",
    aliases: [
      "прономінальне se",
      "queixar-se",
      "lembrar-se",
      "esquecer-se",
      "verbos pronominais",
    ],
    related: [
      "pronominal-verbs",
      "se-overview",
      "se-reflexive",
      "verb-preposition",
      "gostar",
    ],
    intro:
      "Прономінальні дієслова вимагають клитика як частини своєї валентності. `Queixar-se` не означає «жаліти себе»: означає «скаржитися». Без `se` або змінюється значення, або речення стає неграматичним.\n\nБагато з них керують прийменником: `lembrar-se de`, `esquecer-se de`, `queixar-se de`, `arrepender-se de`, `acostumar-se a`, `referir-se a`. Це треба вчити як конструкцію, а не як «дієслово + себе».\n\nМежа з рефлексивом не завжди різка. Практичний тест: чи можна природно додати `a si mesmo`? Якщо ні — перед вами лексичне `se`.",
    formulas: [
      {
        label: "Типова рамка",
        pattern: "S + V-se + PREP + X",
        note: "lembrar-se de, queixar-se de, referir-se a, acostumar-se a",
      },
    ],
    formation:
      "Клитик узгоджується з підметом, як у рефлексиві: `lembro-me`, `lembras-te`, `lembra-se`, `lembramo-nos`. Інфінітив у словнику записують із дефісом: `lembrar-se`.\n\nУ PT-BR розмовно `lembrar` і `esquecer` часто вживають **без** `se` і без `de`: `Não lembro o nome`. Це жива норма Бразилії, не «помилка бразильців». У PT-PT нормативне `Não me lembro do nome`.",
    uses: [
      {
        title: "Пам'ять і забування",
        body: "`lembrar-se de` / `esquecer-se de`. Об'єкт — прийменникова група, не прямий додаток (у європейській нормі).",
        examples: [
          ex("Lembra-te de desligar o gás.", "Не забудь вимкнути газ.", {
            variety: "PT",
          }),
          ex("Não me lembro do endereço.", "Я не пам'ятаю адреси."),
          ex("Não lembro o endereço.", "Я не пам'ятаю адреси.", {
            variety: "BR",
            register: "colloquial",
            note: "Без se і без de — поширено в PT-BR.",
          }),
        ],
      },
      {
        title: "Скарга, каяття, звичка",
        body: "`queixar-se de`, `arrepender-se de`, `acostumar-se a`, `dar-se conta de`.",
        examples: [
          ex("Ela queixou-se do barulho.", "Вона поскаржилася на шум."),
          ex("Arrependo-me de ter dito aquilo.", "Я жалкую, що це сказав."),
        ],
      },
      {
        title: "Рух «геть» і аспект",
        body: "`ir-se embora`, `chegar-se`, `pôr-se a + inf`. Тут `se` ближче до аспектуального / дискурсивного маркера, ніж до об'єкта.",
        examples: [
          ex("Vai-te embora.", "Іди геть.", { variety: "PT" }),
          ex("Ele se pôs a chorar.", "Він розплакався.", { variety: "BR" }),
        ],
      },
    ],
    examples: [
      ex("Isso não se refere a ti.", "Це не стосується тебе."),
      ex("Nunca me acostumei ao horário.", "Я так і не звик до цього розкладу."),
      ex("Ela deu-se conta do erro tarde demais.", "Вона зрозуміла помилку надто пізно."),
    ],
    markers: [
      "lembrar-se de",
      "esquecer-se de",
      "queixar-se de",
      "arrepender-se de",
      "referir-se a",
      "acostumar-se a",
      "ir-se embora",
    ],
    exceptions:
      "Деякі дієслова існують у двох рамках: `esquecer alguma coisa` (перехідне, частіше PT-BR) і `esquecer-se de alguma coisa` (прономінальне, обидва варіанти). `chamar-se` («зватися») — обов'язково прономінальне: `Chamo-me Oksana`, не `*Chamo Oksana`.",
    mistakes: [
      mistake(
        "Lembro de ti.",
        "Lembro-me de ti. (PT-PT) / Lembro de você. або Me lembro de você. (PT-BR)",
        "У європейській нормі обов'язкові і клитик, і `de`. Калька з української «пам'ятаю тебе» без прийменника в PT-PT не працює.",
      ),
      mistake(
        "Me chamo é Oksana.",
        "Chamo-me Oksana. / Me chamo Oksana.",
        "Не вставляйте `é` між ім'ям і дієсловом. Це не `мене звати є`.",
      ),
      mistake(
        "Queixo de barulho.",
        "Queixo-me do barulho.",
        "І `se`, і `de` (з артиклем — `do`) обов'язкові.",
      ),
    ],
    ukrainian:
      "Українські лексикалізовані `-ся` (`сміятися`, `боятися`, `старатися`) — той самий тип явища. Не шукайте в них «себе». Так само `chamar-se` ближче до `мене звати` / `я називаюся`, ніж до «я кличу себе».\n\n`lembrar-se de` структурно ближче до `пам'ятати про` + знахідний/прийменник, ніж до голого знахідного `пам'ятати щось`.",
    brPt:
      "PT-PT зберігає прономінальну рамку послідовніше. PT-BR часто «знімає» `se` з `lembrar` / `esquecer` і ставить прямий додаток. Обидва варіанти треба вміти читати; для формального письма в Бразилії прономінальна рамка теж прийнятна і навіть престижніша.",
  },
  {
    id: "se-impersonal",
    slug: "impersonal",
    category: "se",
    titleUk: "Безособове se",
    titlePt: "se impessoal",
    titleEn: "Impersonal se",
    summary:
      "Невизначений агенс, дієслово в 3-й особі однини: vive-se bem, precisa-se de ajuda, como se faz?",
    aliases: [
      "безособове se",
      "impessoal",
      "índice de indeterminação",
      "vive-se",
      "precisa-se",
    ],
    related: [
      "se-overview",
      "se-passive",
      "se-agreement",
      "existential",
      "ser-passive",
      "haver",
    ],
    intro:
      "Безособове `se` (índice de indeterminação do sujeito) не робить пацієнса підметом. Воно позначає невизначеного діяча: «люди», «хтось», «у нас так прийнято». Дієслово стоїть у **3-й особі однини** і не узгоджується з іменною групою, яка може стояти поруч.\n\nЦе не рефлексив: ніхто не діє на себе. Це не класичний пасив: пацієнс не став підметом.\n\nТипові середовища: неперехідні дієслова (`vive-se`, `dorme-se`, `chega-se`); дієслова з прийменниковим додатком (`precisa-se de`, `trata-se de`); загальні твердження й інструкції (`como se faz`, `não se fala disso`).",
    formulas: [
      {
        label: "Неперехідне",
        pattern: "V3sg-se + (обставина)",
        note: "Vive-se bem aqui.",
      },
      {
        label: "З прийменниковим додатком",
        pattern: "V3sg-se + PREP + SN",
        note: "Precisa-se de pedreiros. Trata-se de um erro.",
      },
      {
        label: "Перехідне без узгодження (варіант, особливо PT-BR)",
        pattern: "V3sg-se + SN",
        note: "Vende-se casas. Нормативний статус спірний; див. se-agreement.",
      },
    ],
    formation:
      "У безособовій конструкції з `se` дієслово стоїть у 3-й особі однини: `vive-se`, `viveu-se`, `viver-se-á`, `se vive`, `se viveu`. Це стосується саме безособового аналізу; не поширюйте правило на пасивне `se`, де дієслово узгоджується з пацієнсом: `Vendem-se casas`.\n\n`tratar-se de` застигло в безособовій рамці: `Trata-se de um problema sério` («Йдеться про серйозну проблему»), не `*Tratam-se de problemas` у цьому значенні.",
    uses: [
      {
        title: "Загальний стан речей",
        body: "Оцінка місця, звичаю, атмосфери без конкретного суб'єкта.",
        examples: [
          ex("Vive-se bem no Porto.", "У Порту добре живеться."),
          ex("Come-se muito bacalhau em Portugal.", "У Португалії багато їдять тріски."),
        ],
      },
      {
        title: "Потреба, пошук, оголошення",
        body: "`precisar-se de`, `procurar-se`. Оголошення часто в однині навіть перед множиною іменників.",
        examples: [
          ex("Precisa-se de vendedores.", "Потрібні продавці."),
          ex("Aluga-se quarto.", "Здається кімната."),
        ],
      },
      {
        title: "Інструкція, загальне «як роблять»",
        body: "Близько до українського узагальнено-особового.",
        examples: [
          ex("Como se chega à estação?", "Як дістатися до вокзалу?"),
          ex("Não se fala de dinheiro à mesa.", "За столом про гроші не говорять."),
        ],
      },
      {
        title: "tratar-se de",
        body: "Ідентифікація теми, не «трактувати себе».",
        examples: [
          ex("Não se trata de preguiça: trata-se de cansaço.", "Йдеться не про лінь — ідеться про втому."),
        ],
      },
    ],
    examples: [
      ex("Aqui trabalha-se até tarde.", "Тут працюють допізна."),
      ex("Naquela época acreditava-se nisso.", "Тоді в це вірили."),
      ex("Pode-se entrar?", "Можна увійти?"),
      ex("Se come bem aqui.", "Тут добре харчуються.", {
        variety: "BR",
        note: "Прокліза на початку речення — розмовна бразильська норма.",
      }),
    ],
    markers: [
      "vive-se",
      "come-se",
      "precisa-se de",
      "trata-se de",
      "como se",
      "pode-se",
    ],
    exceptions:
      "`Pode-se` + інфінітив часто лексикалізується як дозвіл: `Pode-se fumar aqui?` Паралельно існує `Pode fumar?` / `Pode-se fumar?` без різниці для мовця.\n\nНе плутати зі сполучником: `Se se vive assim, muda-se` — перше `se` умовне, друге безособове. На письмі це виглядає важко; у мовленні допомагає ритм.",
    mistakes: [
      mistake(
        "Vivem-se bem aqui.",
        "Vive-se bem aqui.",
        "Неперехідне безособове не має пацієнса-підмета. Множина нізвідки не береться.",
      ),
      mistake(
        "Precisam-se funcionários.",
        "Precisa-se de funcionários.",
        "`precisar` у цьому значенні вимагає `de`. Без `de` нормальна граматика підштовхує до пасиву, але природна формула оголошення — `precisa-se de`.",
      ),
      mistake(
        "Se trata um problema.",
        "Trata-se de um problema.",
        "Рамка застигла: клитик + `de`. Калька з «це стосується проблеми» без `de` ламає конструкцію.",
      ),
    ],
    ukrainian:
      "Найближчі українські відповідники — узагальнено-особові (`тут добре живеться`, `так не роблять`, `як пройти?`) і безособові на `-ся` (`потрібно`, `йдеться про`). Не шукайте називного підмета: його немає, як немає його в `живуть же люди` в узагальненому сенсі.\n\nУкраїнське `потрібні муляри` має узгодження в множині; португальське оголошення `Precisa-se de pedreiros` узгодження з `pedreiros` не має — число «заховане» в прийменниковій групі.",
    brPt:
      "Безособове `se` живе в обох варіантах. PT-BR частіше виносить `se` вперед (`Se vive bem aqui`) і частіше поширює однину на перехідні контексти (`Vende-se casas`, `Aluga-se apartamentos`). PT-PT у письмі сильніше тримається пасивного узгодження (`Vendem-se casas`). У вивісках по всьому світі формула `Vende-se` застигла.",
    regional:
      "В Анголі й Мозамбіку безособове `se` в письмі ближче до європейської моделі. У розмовному PT-BR альтернатива безособовому `se` — `a gente` і гола 3-тя особа множини (`Aqui trabalham até tarde`).",
  },
  {
    id: "se-passive",
    slug: "passive",
    category: "se",
    titleUk: "Пасивне se",
    titlePt: "se passivo",
    titleEn: "Passive se",
    summary:
      "Пацієнс стає підметом, дієслово узгоджується: alugam-se quartos, falam-se várias línguas.",
    aliases: [
      "пасивне se",
      "passiva pronominal",
      "passiva sintética",
      "alugam-se",
      "vendem-se",
    ],
    related: [
      "se-overview",
      "se-impersonal",
      "se-agreement",
      "ser-passive",
      "clitic-placement",
    ],
    intro:
      "Пасивне `se` (passiva sintética, passiva pronominal) — це спосіб сказати, що дія відбувається з пацієнсом, не називаючи агенса. Пацієнс **є підметом**, і дієслово з ним узгоджується.\n\n`Alugam-se quartos` ≈ `Quartos são alugados`. Це не «кімнати здають себе».\n\nКонструкція вимагає перехідного дієслова: має бути пацієнс, який може стати підметом. З неперехідними (`viver`, `chegar`) пасивного `se` немає — там безособове.\n\nАгенс із `por` теоретично можливий (`Vendem-se casas por particulares`), але на практиці рідкісний: якщо агенс важливий, мовці беруть `ser` + particípio або актив.",
    formulas: [
      {
        label: "Пасивне se",
        pattern: "V-se + S-пацієнс",
        note: "Число й особа дієслова = число пацієнса. Час — будь-який.",
      },
      {
        label: "Парафраза",
        pattern: "S + ser + P.P. + (por + агенс)",
        note: "Alugam-se quartos ≈ Quartos são alugados.",
      },
    ],
    formation:
      "Дієслово в 3-й особі однини або множини залежно від пацієнса: `vende-se a casa`, `vendem-se as casas`. Час вільний: `venderam-se`, `vendiam-se`, `vender-se-ão` (книжна мезокліза), `se venderam` (PT-BR).\n\nПацієнс може стояти після дієслова (дуже часто) або перед ним: `Estas casas vendem-se bem`.",
    uses: [
      {
        title: "Оголошення, етикетки, інструкції",
        body: "Найвидиміший жанр пасивного `se`.",
        examples: [
          ex("Alugam-se quartos.", "Здаються кімнати."),
          ex("Falam-se inglês e francês.", "Говорять англійською та французькою."),
          ex("Aceitam-se cartões.", "Картки приймаються."),
        ],
      },
      {
        title: "Узагальнення без агенса",
        body: "Факти про «те, що роблять із X».",
        examples: [
          ex("Aqui cultivam-se uvas há séculos.", "Тут уже століттями вирощують виноград."),
          ex("Não se resolvem problemas desta maneira.", "Так проблеми не вирішують."),
        ],
      },
      {
        title: "Минулі події з невідомим агенсом",
        body: "Близько до українського пасиву на `-но/-то` або 3-ї особи множини.",
        examples: [
          ex("Roubaram-se vários carros naquela noite.", "Тієї ночі вкрали кілька машин."),
        ],
      },
    ],
    examples: [
      ex("Vendem-se frutos tropicais.", "Продаються тропічні фрукти."),
      ex("Inaugurou-se a ponte em 1998.", "Міст відкрили 1998 року."),
      ex("Ainda se escrevem cartas?", "Чи ще пишуть листи?"),
      ex("Se alugam kitnets.", "Здаються квартири-студії.", {
        variety: "BR",
        register: "colloquial",
        note: "Розмовний PT-BR; прокліза, узгодження в множині.",
      }),
    ],
    markers: ["alugam-se", "vendem-se", "aceitam-se", "falam-se", "inaugurou-se"],
    exceptions:
      "Якщо пацієнс — особовий займенник, пасивне `se` стикається з клитиками і часто уникається: замість `*viu-se-o` скажуть `ele foi visto` або актив. З людьми взагалі частіший аналітичний пасив `ser` + particípio, бо `se` може прочитатися як рефлексив: `Matou-se o rei` двозначне.\n\nУ перфекті з `ter` конструкція рідкісна: `*têm-se alugado quartos` звучить важко; беруть простий час або `ser`.",
    mistakes: [
      mistake(
        "Aluga-se quartos. (як єдина «правильна» форма)",
        "Alugam-se quartos. (пасивна норма) або Aluga-se quartos. (безособовий варіант, частіше PT-BR)",
        "Шкільна норма більшості граматик вимагає узгодження. Однина перед множиною — інша конструкція (безособова), не «та сама з помилкою в числі». Див. se-agreement.",
      ),
      mistake(
        "Alugam-se os quartos pelo João.",
        "Os quartos são alugados pelo João. / O João aluga os quartos.",
        "Агенс із `por` у пасивному `se` незграбний. Якщо агенс потрібен — `ser` + particípio або актив.",
      ),
    ],
    ukrainian:
      "Паралелі: `здаються кімнати`, `приймаються картки`, `виноград вирощують`. Українська теж може узгоджувати (`кімнати здаються`) або ставити узагальнену 3-тю множину без називного пацієнса (`здають кімнати`). Португальська пасивна конструкція ближча до першого.\n\nНе перекладайте механічно українським `-ся`: `falam-se várias línguas` — це не «мови розмовляються себе», а «є / використовують кілька мов».",
    brPt:
      "Пасивне узгодження є базовою нормативною моделлю в обох різновидах. У PT-BR в усному та рекламному вжитку широко засвідчується також однина з множинним іменником (`vende-se casas`). Позиція клитика окремо варіює за нормою та конструкцією: PT-PT типово `Vendem-se casas`; PT-BR ширше засвідчує проклізу в живому вжитку.",
  },
  {
    id: "se-middle",
    slug: "middle",
    category: "se",
    titleUk: "Медіальне se",
    titlePt: "se médio",
    titleEn: "Middle se",
    summary:
      "Подія без агенса: a porta abriu-se, o gelo derreteu-se. Не пасив і не «двері відкрили себе».",
    aliases: ["медіальне", "anticausative", "abrir-se", "quebrar-se", "médio"],
    related: ["se-overview", "se-passive", "se-reflexive", "ficar", "estar"],
    intro:
      "Медіальне (антикаузативне) `se` позначає зміну стану, яка **відбувається з учасником**, без того щоб ми мислили агенса. `A porta abriu-se` — двері відчинилися. Це не «двері відчинили себе» (рефлексив) і не обов'язково «двері були кимось відчинені» (пасив).\n\nУкраїнською тут природне `-ся` саме в медіальному читанні: `відчинилося`, `розбилося`, `розтопилося`.\n\nЧасто поруч стоїть причина-обставина (`com o vento`, `sozinha`), а не агенс із `por`.",
    formulas: [
      {
        label: "Антикаузатив",
        pattern: "S-пацієнс + V-se",
        note: "S — сутність, що змінює стан; агенса немає.",
      },
    ],
    formation:
      "Дієслово узгоджується з іменником, який змінює стан — як із звичайним підметом. Багато таких дієслів мають каузативну пару без `se`: `abrir a porta` (хтось відчиняє) vs `a porta abre-se` (двері відчиняються).",
    uses: [
      {
        title: "Стихійна / спонтанна зміна",
        body: "`abrir-se`, `fechar-se`, `quebrar-se`, `partir-se`, `derrubar-se` рідше, `derrubar` частіше каузативне.",
        examples: [
          ex("A porta abriu-se com o vento.", "Двері відчинилися від вітру."),
          ex("O copo partiu-se no lava-loiças.", "Склянка розбилася в раковині.", {
            variety: "PT",
          }),
          ex("O copo quebrou na pia.", "Склянка розбилася в раковині.", {
            variety: "BR",
            note: "У PT-BR quebrar часто без se.",
          }),
        ],
      },
      {
        title: "Природні процеси",
        body: "`derreter-se`, `secar-se`, `estragar-se`, `acabar-se`.",
        examples: [
          ex("O gelo derreteu-se ao sol.", "Лід розтанув на сонці."),
          ex("Acabou-se o pão.", "Хліб скінчився."),
        ],
      },
      {
        title: "Межа з пасивом і результативним станом",
        body: "Після події стан часто описують через `estar` / `ficar` + прикметник, уже без `se`: `A porta está aberta`. `se` — про подію, не про статичний результат.",
        examples: [
          ex("A porta abriu-se. Agora está aberta.", "Двері відчинилися. Тепер вони відчинені."),
          ex("A porta ficou aberta a noite toda.", "Двері лишилися відчиненими всю ніч."),
        ],
      },
    ],
    examples: [
      ex("A reunião atrasou-se.", "Зустріч затрималася."),
      ex("A situação resolveu-se sozinha.", "Ситуація розрулилася сама."),
      ex("O leite ferveu-se?", "Молоко втекло / закипіло?", {
        note: "ferver часто без se; з se — більш «подія з рідиною».",
      }),
    ],
    markers: [
      "abrir-se",
      "fechar-se",
      "quebrar-se",
      "partir-se",
      "derreter-se",
      "acabar-se",
      "estragar-se",
    ],
    exceptions:
      "Не всі мови вимагають `se` на тих самих лексемах. PT-BR частіше опускає `se` в `quebrar`, `abrir`, `fechar` в медіальному читанні: `A porta abriu`. PT-PT зберігає `abriu-se` уважніше. Обидва зрозумілі.\n\n`morrer` не бере медіального `se` (`*morreu-se` як «помер» — ні; `morreu-se` може з'явитися в інших регіональних / архаїчних рамках).",
    mistakes: [
      mistake(
        "A porta abriu-se pelo João.",
        "O João abriu a porta. / A porta foi aberta pelo João.",
        "Агенс із `por` перетворює медіум на незграбний пасив. Медіум саме про відсутність агенса.",
      ),
      mistake(
        "Двері відкрили себе.",
        "Двері відчинилися.",
        "Не перекладайте медіальне `se` як свідомий рефлексив. Підмет не є вольовим агенсом.",
      ),
    ],
    ukrainian:
      "Українське `-ся` в `відчинитися`, `розбитися`, `розтопитися` — майже точний відповідник. Звідси спокуса вважати **все** португальське `se` таким. Не варто: пасивне `alugam-se quartos` і лексичне `queixo-me` працюють інакше, навіть якщо українською іноді теж буде `-ся`.",
    brPt:
      "PT-BR часто має голу антикаузативну рамку без `se` (`A porta abriu`, `O copo quebrou`). PT-PT частіше з `se`. Це не змінює значення; це різний ступінь морфологічної маркировки медіума.",
  },
  {
    id: "se-agreement",
    slug: "agreement",
    category: "se",
    titleUk: "Узгодження з se",
    titlePt: "Concordância com se",
    titleEn: "Agreement with se",
    summary:
      "Пасив vs безособове: vendem-se casas чи vende-se casas? Норма, варіативність і як обирати.",
    aliases: [
      "узгодження se",
      "vendem-se",
      "vende-se casas",
      "concordância",
      "passiva vs impessoal",
    ],
    related: [
      "se-overview",
      "se-impersonal",
      "se-passive",
      "ser-passive",
      "existential",
      "pt-br-pt-pt",
    ],
    intro:
      "Це одне з найживіших нормативних питань португальської. Коли після `se` стоїть іменник у множині, дієслово може або **узгоджуватися** (`Vendem-se casas`), або лишатися в **однині** (`Vende-se casas`).\n\nШкільна граматика (Бразилія і Португалія) здебільшого вчить: якщо дієслово перехідне і іменник — прямий додаток, який можна зробити підметом, це **пасив**, отже множина. Якщо дієслово неперехідне або додаток прийменниковий, це **безособове**, отже однина.\n\nМовлення, особливо бразильське, часто ставить однину і там, де школа вимагає множини. Це не хаос: мовці переінтерпретовують конструкцію як безособову («хтось продає будинки»), а іменник лишають додатком.\n\nВам потрібні обидва шари: нормативний (іспити, редактура) і описовий (розуміти вивіски, чати, газети).",
    formulas: [
      {
        label: "Нормативна пасивна узгодженість",
        pattern: "V-мн-se + SN-мн",
        note: "Vendem-se casas. Alugam-se quartos.",
      },
      {
        label: "Нормативне безособове (однина)",
        pattern: "V3sg-se + PREP + SN",
        note: "Precisa-se de casas. Trata-se de problemas sérios.",
      },
      {
        label: "Розмовна / варіативна безособова однина з прямим додатком",
        pattern: "V3sg-se + SN-мн",
        br: "Vende-se casas",
        note: "Поширено в PT-BR і на вивісках. Шкільна норма часто відхиляє.",
      },
    ],
    formation:
      "Діагностичний тест школи:\n\n1) Чи є прямий додаток, який може стати підметом пасиву `ser` + particípio? Так → узгоджуйте (`Casas são vendidas` ⇒ `Vendem-se casas`).\n2) Чи дієслово неперехідне або вимагає прийменника? → однина (`Vive-se bem`, `Precisa-se de vendedores`).\n3) Чи іменник невизначений, а мовець мислить «люди роблять X»? У мовленні PT-BR часто оберуть (1) або однину (3) без різниці для себе.",
    uses: [
      {
        title: "Коли множина безсумнівна",
        body: "Пацієнс визначений або тематичний, конструкцію можна перефразувати пасивом `ser`.",
        examples: [
          ex("Nestas lojas vendem-se produtos portugueses.", "У цих крамницях продають португальські товари."),
          ex("Falam-se três línguas na fronteira.", "На кордоні говорять трьома мовами."),
        ],
      },
      {
        title: "Коли однина безсумнівна",
        body: "Немає пацієнса-підмета: неперехідні, `de`-додатки, `tratar-se de`.",
        examples: [
          ex("Vive-se depressa demais.", "Живуть надто швидко."),
          ex("Precisa-se de pessoas com paciência.", "Потрібні люди з терпінням."),
          ex("Trata-se de duas questões distintas.", "Йдеться про два різні питання."),
        ],
      },
      {
        title: "Зона варіативності",
        body: "Невизначений іменник після перехідного дієслова, жанр оголошення.",
        examples: [
          ex("Vendem-se casas.", "Продаються будинки.", {
            note: "Нормативна пасивна форма.",
          }),
          ex("Vende-se casas.", "Продають будинки.", {
            variety: "BR",
            register: "colloquial",
            note: "Безособова інтерпретація; на вивісках по всьому лузофонному світі.",
          }),
          ex("Aluga-se apartamentos mobiliados.", "Здають мебльовані квартири.", {
            variety: "BR",
            register: "colloquial",
          }),
        ],
      },
      {
        title: "Як обирати на письмі",
        body: "Для формального тексту, перекладу, іспиту: узгоджуйте з пацієнсом, якщо дієслово перехідне (`vendem-se`). Залишайте однину, якщо є `de` або немає пацієнса. У розмовному PT-BR однина не маркує вас як «неписьменного», але в редакторській правці її часто виправлять.",
      },
    ],
    examples: [
      ex("Compram-se livros usados.", "Купують уживані книжки."),
      ex("Não se fazem milagres.", "Чудес не роблять."),
      ex("Aqui se faz uns bolos incríveis.", "Тут роблять неймовірні торти.", {
        variety: "BR",
        register: "colloquial",
        note: "Однина se faz + множина uns bolos — типовий розмовний зсув.",
      }),
      ex("Alugam-se lojas no centro.", "У центрі здаються приміщення під крамниці."),
    ],
    markers: [
      "vendem-se / vende-se",
      "alugam-se",
      "precisa-se de",
      "trata-se de",
      "falam-se",
    ],
    exceptions:
      "`Trata-se de` ніколи не узгоджується з іменником після `de`: `Trata-se de problemas`, не `*Tratam-se de problemas` у значенні «йдеться».\n\nЯкщо іменник стоїть **перед** дієсловом і виглядає як підмет, узгодження майже обов'язкове навіть у PT-BR: `Casas como estas vendem-se rápido`, рідко `*Casas como estas vende-se rápido`.\n\nЗбірні іменники (`a gente`, `o povo`) мають власні правила узгодження, незалежні від `se`.",
    mistakes: [
      mistake(
        "Tratam-se de erros graves.",
        "Trata-se de erros graves.",
        "`tratar-se de` безособове і застигле в однині. Множина `erros` не керує дієсловом.",
      ),
      mistake(
        "Precisam-se vendedores. (без de, з множиною, як єдиний варіант)",
        "Precisa-se de vendedores. / Procuram-se vendedores.",
        "`precisar` тут бере `de` і безособову однину. Якщо хочете пасивне узгодження — змініть дієслово на `procurar`: `Procuram-se vendedores`.",
      ),
      mistake(
        "Вважати vende-se casas завжди помилкою.",
        "Розуміти як безособовий варіант; у формальному письмі віддавати перевагу vendem-se casas.",
        "Граматика не одна точка, а розподіл. Вивіска `Vende-se casas` — факт мови, навіть якщо підручник її закреслює.",
      ),
    ],
    ukrainian:
      "Українською ви теж вагаєтесь між `продаються будинки` (узгодження з пацієнсом) і `продають будинки` (узагальнена 3-тя множина). Португальська додає ще опцію: 3-тя **однина** з `se`. Саме вона чужа українському вуху і тому її або уникають, або гіперкорегують.\n\nНе переносіть українське обов'язкове узгодження прикметника/дієслова з іменником на безособове `precisa-se de`. Там іменник не підмет.",
    brPt:
      "PT-PT (письмова норма, журналістика, школа): сильний тиск до `vendem-se casas`. Вивіски все одно часто мають `Vende-se`.\n\nPT-BR: школа вчить того самого (`vendem-se`), але розмовна й рекламна практика широко використовує `vende-se` + множина. Для розуміння мовлення Бразилії однина не повинна вас зупиняти. Для диплома, перекладу, редагування — множина безпечніша, коли пацієнс явний.\n\nАфриканські стандарти в офіційному письмі ближчі до PT-PT.",
    tables: [
      {
        caption: "Швидка діагностика узгодження",
        headers: ["Конструкція", "Приклад", "Число дієслова", "Тип"],
        rows: [
          ["неперехідне", "Vive-se bem", "однина", "безособове"],
          ["V + de + SN", "Precisa-se de casas", "однина", "безособове"],
          ["tratar-se de", "Trata-se de casas", "однина", "застигле безособове"],
          ["перехідне + SN-мн (норма)", "Vendem-se casas", "множина", "пасивне se"],
          ["перехідне + SN-мн (варіант)", "Vende-se casas", "однина", "безособове читання"],
          ["SN-мн на початку", "Casas vendem-se bem", "множина", "пасив / підмет"],
        ],
        scroll: true,
      },
    ],
  },
];
