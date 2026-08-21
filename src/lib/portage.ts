import raw from "@/data/portage.json";

export type Answer = "Sim" | "Não" | "Às vezes" | "NA";
export const ANSWERS: Answer[] = ["Sim", "Não", "Às vezes", "NA"];

export type Area = "SOCIALIZAÇÃO" | "LINGUAGEM" | "COGNIÇÃO" | "AUTOCUIDADOS" | "DESENV MOTOR";
export const AREAS: Area[] = ["SOCIALIZAÇÃO", "LINGUAGEM", "COGNIÇÃO", "AUTOCUIDADOS", "DESENV MOTOR"];
export const AGE_RANGES = [
  "0 a 1 anos",
  "1 a 2 anos",
  "2 a 3 anos",
  "3 a 4 anos",
  "4 a 5 anos",
  "5 a 6 anos",
] as const;
export type AgeRange = (typeof AGE_RANGES)[number];

export interface Item {
  area: Area;
  age_range: AgeRange;
  num: string;
  text: string;
  material: string;
  atividade: string;
}

export const ITEMS: Item[] = raw as Item[];

export function itemKey(i: Item) {
  return `${i.area}::${i.age_range}::${i.num}`;
}

export type Answers = Record<string, Answer>;

export function scoreOf(a: Answer | undefined): number | null {
  if (a === "Sim") return 1;
  if (a === "Às vezes") return 0.5;
  if (a === "Não") return 0;
  return null; // NA or unanswered
}

export interface AreaAgeStat {
  area: Area;
  age: AgeRange;
  answered: number;
  total: number;
  points: number;
  percent: number;
}

export function computeStats(answers: Answers): AreaAgeStat[] {
  const map = new Map<string, AreaAgeStat>();
  for (const it of ITEMS) {
    const key = `${it.area}::${it.age_range}`;
    if (!map.has(key)) {
      map.set(key, { area: it.area, age: it.age_range, answered: 0, total: 0, points: 0, percent: 0 });
    }
    const s = map.get(key)!;
    s.total += 1;
    const score = scoreOf(answers[itemKey(it)]);
    if (score !== null) {
      s.answered += 1;
      s.points += score;
    }
  }
  for (const s of map.values()) {
    s.percent = s.answered ? Math.round((s.points / s.answered) * 100) : 0;
  }
  return Array.from(map.values());
}

export function priorityObjectives(answers: Answers): Item[] {
  return ITEMS.filter((i) => answers[itemKey(i)] === "Às vezes");
}
export function otherObjectives(answers: Answers): Item[] {
  return ITEMS.filter((i) => answers[itemKey(i)] === "Não");
}
