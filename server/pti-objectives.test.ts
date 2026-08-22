import { describe, expect, it } from "vitest";
import { OBJECTIVES_TEMPLATES } from "../src/lib/pti-templates";
import { appendUniqueObjectives, countPopulatedObjectives, OBJECTIVE_CATALOG } from "../src/lib/objective-catalog";

describe("PTI objectives templates", () => {
  it("groups AVDs and AIVDs as subareas of occupational therapy", () => {
    const removedOccupationalTherapy = OBJECTIVES_TEMPLATES.find((template) => template.id === "to-desempenho-ocupacional");
    const avds = OBJECTIVES_TEMPLATES.find((template) => template.id === "avds-autonomia");
    const aivds = OBJECTIVES_TEMPLATES.find((template) => template.id === "aivds-autonomia");

    expect(removedOccupationalTherapy).toBeUndefined();
    expect(avds).toMatchObject({ area: "Terapia Ocupacional", label: "AVDs — Atividades de Vida Diária" });
    expect(aivds).toMatchObject({ area: "Terapia Ocupacional", label: "AIVDs — Atividades Instrumentais de Vida Diária" });
  });

  it("provides at least seven selectable objectives for every clinical area", () => {
    const countsByArea = OBJECTIVE_CATALOG.reduce<Record<string, number>>((counts, option) => {
      counts[option.area] = (counts[option.area] ?? 0) + 1;
      return counts;
    }, {});

    expect(Object.keys(countsByArea)).toEqual([
      "Musicoterapia",
      "Psicologia",
      "Fonoaudiologia",
      "Nutrição",
      "Psicomotricidade",
      "Terapia Ocupacional",
      "Psicopedagogia",
    ]);
    expect(Object.values(countsByArea).every((count) => count >= 7)).toBe(true);
  });

  it("adds multiple selected objectives without replacing or duplicating the PTI", () => {
    const [first, second] = OBJECTIVE_CATALOG.filter((option) => option.area === "Fonoaudiologia").slice(0, 2);
    const existing = [{ objetivo: first.objetivo, atividade: first.atividade, material: first.material }];

    const result = appendUniqueObjectives(existing, [first, second]);

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject(existing[0]);
    expect(result[1]).toMatchObject({ objetivo: second.objetivo, atividade: second.atividade, material: second.material });
  });

  it("replaces the initial blank PTI row with the selected objective fields", () => {
    const selected = OBJECTIVE_CATALOG.find((option) => option.area === "Terapia Ocupacional");
    const initialObjectives = [{ objetivo: "", atividade: "", material: "" }];
    const result = appendUniqueObjectives(initialObjectives, [selected!]);

    expect(result).toEqual([
      {
        objetivo: selected!.objetivo,
        atividade: selected!.atividade,
        material: selected!.material,
      },
    ]);
    expect(countPopulatedObjectives(result) - countPopulatedObjectives(initialObjectives)).toBe(1);
  });

  it("counts every selected objective when multiple choices replace the blank PTI row", () => {
    const selected = OBJECTIVE_CATALOG.filter((option) => option.area === "Fonoaudiologia").slice(0, 2);
    const initialObjectives = [{ objetivo: "", atividade: "", material: "" }];
    const result = appendUniqueObjectives(initialObjectives, selected);

    expect(result).toHaveLength(2);
    expect(countPopulatedObjectives(result) - countPopulatedObjectives(initialObjectives)).toBe(2);
    expect(result).toEqual(selected.map(({ objetivo, atividade, material }) => ({ objetivo, atividade, material })));
  });
});
