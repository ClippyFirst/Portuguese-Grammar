import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

export const pages: GrammarPage[] = [
  page({
    id:"zero-article",slug:"zero",category:"articles",
    titleUk:"Нульова детермінація",titlePt:"Ausência de artigo",titleEn:"Zero article",
    summary:"Коли іменна група вживається без означеного або неозначеного артикля.",
    aliases:["нульовий артикль","zero article","ausência de artigo","іменник без артикля"],
    related:["articles-definite","articles-indefinite","generic-reference-articles","articles-geography","articles-ukrainian"],
    status:"draft",origin:"handwritten",depth:"high",ukrainianContrast:"high",
    intro:"Відсутність артикля — не просто «артикль пропущено». Нульова детермінація є нормальною частиною системи іменних груп: вона можлива, наприклад, у частині узагальнених множин, із деякими власними назвами та в окремих сталих моделях. Треба описувати саме умови нульової форми.",
    definition:"Нульова детермінація — іменна група без overt означеного або неозначеного артикля там, де така форма є граматичною та інтерпретаційно релевантною.",
    uses:[
      {title:"Узагальнена множина",body:"Множинна іменна група без артикля може мати generic reading.",examples:[ex("Cães precisam de exercício.","Собакам потрібні фізичні навантаження.")]},
      {title:"Деякі власні назви",body:"Частина географічних і особових назв уживається без артикля.",examples:[ex("Portugal fica na Europa.","Португалія розташована в Європі.")]},
      {title:"Мовні сталі моделі",body:"Деякі конструкції фіксують іменник без артикля; їх слід учити як конструкції, а не як випадкові пропуски.",examples:[ex("Em casa.","Вдома.")]},
      {title:"Не плутати з пропуском",body:"Якщо контекст вимагає означеної групи, відсутність артикля може змінити референцію або зробити висловлення неприродним.",examples:[ex("Vi um cão. O cão fugiu.","Я побачив/побачила собаку. Собака втекла.")]}
    ],
    examples:[ex("Crianças gostam de brincar.","Діти люблять гратися.",{purpose:"contrast"}),ex("Portugal é um país europeu.","Португалія — європейська країна.")],
    mistakes:[mistake("вставляти o/a перед кожним іменником","визначати тип іменної групи та референцію","Португальська має нульову детермінацію; відсутність артикля може бути граматичною.","predicted-l1-transfer","high"),mistake("вважати zero article тотожним українській відсутності артикля","перевіряти португальську конструкцію","Українська не має самої опозиції article/zero article, тому поверхнева відсутність форми не пояснює португальську систему.","predicted-l1-transfer","high")],
    ukrainian:"Українська часто має голу іменну групу там, де португальська робить вибір між артиклем і нульовою детермінацією. Вивчайте не «коли нічого не ставити», а тип референції та конструкцію.",
    regional:"Нульова детермінація взаємодіє з власними назвами, присвійними, родом і числом, generic reference та регіональними моделями.",
  }),
  page({
    id:"articles-indefinite",slug:"indefinite",category:"articles",
    titleUk:"Неозначений артикль",titlePt:"Artigo indefinido",titleEn:"Indefinite article",
    summary:"um/uma/uns/umas: введення референта, неідентифікований екземпляр і деякі кількісні читання.",
    aliases:["неозначений артикль","um","uma","uns","umas","artigo indefinido"],
    related:["articles-definite","zero-article","generic-reference-articles","quantifiers-overview"],
    status:"draft",origin:"handwritten",depth:"high",ukrainianContrast:"high",
    intro:"Неозначений артикль um/uma/uns/umas вводить референта як один екземпляр класу або як референта, якого слухач ще не може однозначно ідентифікувати. У множині uns/umas має додаткові кількісні та дискурсивні відтінки.",
    definition:"Неозначений артикль — детермінатив, що подає референта як неідентифікований або як представника певного класу.",
    formulas:[{label:"Однина",pattern:"um/uma + N"},{label:"Множина",pattern:"uns/umas + N"}],
    uses:[
      {title:"Введення нового референта",body:"Класична анафорична пара: um при першій згадці, o при повторній.",examples:[ex("Vi um homem. O homem entrou no café.","Я побачив/побачила чоловіка. Чоловік зайшов у кафе.")]},
      {title:"Один представник класу",body:"um N може означати типовий або один неідентифікований екземпляр.",examples:[ex("Preciso de um computador.","Мені потрібен комп'ютер.")]},
      {title:"Uns/umas",body:"Множина може виражати невизначену невелику кількість або приблизність.",examples:[ex("Comprei uns livros.","Я купив/купила кілька книжок.")]}
    ],
    examples:[ex("Tenho uma pergunta.","У мене є запитання."),ex("Vi uns amigos no centro.","Я зустрів/зустріла кількох друзів у центрі.")],
    mistakes:[mistake("перекладати um завжди як «один»","визначати референцію та кількісне читання","Неозначений артикль не завжди має наголошене числове значення.","editorial","high")],
    ukrainian:"Українська може передавати неозначеність словом «якийсь», порядком слів або самим контекстом. «Один» не є універсальним перекладом um.",
    regional:"Uns/umas та інші кількісні читання залежать від контексту; не прирівнюйте їх механічно до одного українського квантора.",
  })
];
