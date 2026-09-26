import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
});

export const pages: GrammarPage[] = [
  draft({
    id: "agreement-edge-cases", slug: "edge-cases", category: "agreement",
    titleUk: "Складні випадки узгодження", titlePt: "Casos especiais de concordância", titleEn: "Agreement edge cases",
    summary: "Як визначати граматичний центр узгодження у складних підметах, кількісних групах і конструкціях із незвичним порядком слів.",
    aliases: ["agreement edge cases","concordância"],
    related: ["agreement-sv"],
    depth: "high",
    ukrainianContrast: "high",
    intro: "У складних групах підмета, при узгодженні з колективними назвами або за незвичного порядку компонентів треба визначати граматичний центр конструкції, а не погоджувати дієслово з найближчим словом. У A mãe dos gémeos vive aqui ядром підмета є mãe, а не gémeos. У Chegaram os convidados постпозиційний підмет os convidados все одно визначає число дієслова. Для кількісних і колективних груп потрібен окремий аналіз, а не правило «узгоджуй із найближчим іменником».",
    definition: "Складні випадки узгодження — конструкції, де формальна структура та семантична інтерпретація можуть давати різні підказки.",
    uses: [{ title: "Іменник із de", body: "У групі a mãe dos gémeos головним іменником є mãe; множина gémeos не змінює форму дієслова." }, { title: "Складений підмет", body: "A Ana e o Pedro vivem aqui: координовані компоненти зазвичай утворюють множинний підмет." }, { title: "Підмет після дієслова", body: "Chegaram os convidados: інверсія не скасовує узгодження." }, { title: "Кількісні групи", body: "A maioria dos alunos chegou cedo: такі конструкції не варто зводити до механічного узгодження з найближчим словом." }],
    examples: [{"pt":"A mãe dos gémeos vive aqui.","uk":"Мати близнюків живе тут."},{"pt":"A Ana e o Pedro vivem aqui.","uk":"Ана і Педро живуть тут."},{"pt":"Chegaram os convidados.","uk":"Гості прийшли."},{"pt":"A maioria dos alunos chegou cedo.","uk":"Більшість студентів прийшла рано."}],
    mistakes: [mistake("Os resultados do estudo mostra uma diferença.","Os resultados do estudo mostram uma diferença.","Підмет — resultados; do estudo є залежним компонентом.","predicted-l1-transfer","high"), mistake("A mãe dos gémeos vivem aqui.","A mãe dos gémeos vive aqui.","Головний іменник mãe має однину.","predicted-l1-transfer","high"), mistake("Chegou os convidados.","Chegaram os convidados.","Постпозиційний підмет також визначає узгодження.","predicted-l1-transfer","high")],
    ukrainian: "Українська має подібну проблему узгодження, але поверхневі підказки й порядок слів можуть відрізнятися.",
    regional: "Конкретні edge cases треба описувати окремо, а не як одну універсальну формулу.",
    brPt: "",
  }),
];
