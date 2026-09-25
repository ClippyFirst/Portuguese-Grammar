import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
  reviewStatus: undefined as never,
});

export const pages: GrammarPage[] = [
  draft({
    id: "accentuation-advanced", slug: "accentuation-advanced", category: "spelling",
    titleUk: "Розширена акцентуація", titlePt: "Acentuação avançada", titleEn: "Advanced accentuation",
    summary: "Системний вибір графічного акценту з урахуванням наголосу та структури слова.",
    aliases: "accentuation,advanced accentuation,stress",
    related: ["stress","diacritics","homograph-accents"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Графічний акцент залежить від наголосу, закінчення, дифтонга/гіатусу та нормативної орфографії. Вивчати його як список окремих слів менш продуктивно, ніж розуміти групи правил.",
    definition: "Розширена акцентуація — застосування нормативних правил графічного позначення наголосу до складніших типів слів.",
    uses: "",
    examples: [{"pt":"lâmpada","uk":"лампа"},{"pt":"país","uk":"країна"},{"pt":"órgão","uk":"орган"}],
    mistakes: [mistake("вважати будь-яку наголошену голосну акцентованою","розрізняти словесний наголос і графічний акцент","Не кожен наголошений склад має діакритичний знак.","editorial","high")],
    ukrainian: "Українська також має графічний наголос в іншому форматі, тому не переносіть португальські правила на українські слова.",
    regional: "Потрібні окремі статті для конкретних класів акцентуації.",
    brPt: "",
    reviewStatus: "review-needed"
  }),
  draft({
    id: "hyphenation", slug: "hyphenation", category: "spelling",
    titleUk: "Дефіс і перенос", titlePt: "Hifenização", titleEn: "Hyphenation",
    summary: "Дефіс у складних словах, словоскладанні та випадках, що регулюються орфографічною нормою.",
    aliases: "hyphenation,hífen,дефіс",
    related: ["acordo-ortografico","spelling-br-pt","word-formation-affixes"],
    depth: "medium",
    ukrainianContrast: "medium",
    intro: "Дефіс належить до орфографії й не зводиться до механічного позначення «складного слова». Його вживання залежить від конкретної морфологічної та орфографічної конструкції.",
    definition: "Гіфенізація — правила використання дефіса в португальському написанні.",
    uses: "",
    examples: [{"pt":"guarda-chuva","uk":"парасоля"},{"pt":"segunda-feira","uk":"понеділок"}],
    mistakes: [mistake("ставити дефіс у кожному складному слові","перевіряти конкретну орфографічну модель","Словоскладання може писатися разом, окремо або через дефіс залежно від правила.","editorial","high")],
    ukrainian: "Українська має власні правила дефіса й складних слів, тому механічний перенос небезпечний.",
    regional: "Acordo Ortográfico змінив частину правил; конкретний випадок треба перевіряти за актуальною нормою.",
    brPt: "",
    reviewStatus: "review-needed"
  }),
  draft({
    id: "capitalization-and-names", slug: "capitalization-names", category: "spelling",
    titleUk: "Великі літери у власних назвах", titlePt: "Maiúsculas e nomes próprios", titleEn: "Capitalization and proper names",
    summary: "Капіталізація особових, географічних та інституційних назв.",
    aliases: "capitalization,proper names,maiúsculas",
    related: ["capitalization","articles-proper-names","articles-geography"],
    depth: "medium",
    ukrainianContrast: "medium",
    intro: "Капіталізація власних назв має нормативні конвенції, які не завжди збігаються з українськими. Окремо перевіряйте назви установ, географічні назви, свята й титули.",
    definition: "Правила великих літер для власних назв та офіційних найменувань.",
    uses: "",
    examples: [{"pt":"Portugal","uk":"Португалія"},{"pt":"Universidade de Lisboa","uk":"Лісабонський університет"}],
    mistakes: [mistake("копіювати українську капіталізацію назв місяців","перевіряти португальську орфографічну конвенцію","У португальській дні тижня й місяці зазвичай пишуться з малої літери.","predicted-l1-transfer","medium")],
    ukrainian: "Частина українських правил капіталізації не переноситься на португальську.",
    regional: "Офіційні назви можуть мати власні конвенції.",
    brPt: "",
    reviewStatus: "review-needed"
  }),
];
