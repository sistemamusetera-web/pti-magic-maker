import { describe, expect, it } from "vitest";
import { OBJECTIVES_TEMPLATES } from "../src/lib/pti-templates";
import { appendUniqueObjectives, countPopulatedObjectives, OBJECTIVE_CATALOG } from "../src/lib/objective-catalog";

describe("PTI objectives templates", () => {
  it("groups AVDs and AIVDs as subareas of occupational therapy", () => {
    const removedOccupationalTherapy = OBJECTIVES_TEMPLATES.find((template) => template.id === "to-desempenho-ocupacional");
    const occupationalDomains = OBJECTIVES_TEMPLATES.filter((template) => template.area === "Terapia Ocupacional");

    expect(removedOccupationalTherapy).toBeUndefined();
    expect(occupationalDomains.map((template) => template.id)).toEqual([
      "to-higiene-pessoal",
      "to-vestuario-alimentacao",
      "to-rotina-autonomia",
      "to-organizacao-domestica",
      "to-preparo-planejamento",
      "to-pertences-participacao-comunitaria",
      "to-mobilidade-rotina",
    ]);
    expect(occupationalDomains.every((template) => template.area === "Terapia Ocupacional")).toBe(true);
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

  it("organizes music therapy objectives into the seven requested therapeutic domains", () => {
    const musicTherapyTemplates = OBJECTIVES_TEMPLATES.filter((template) => template.area === "Musicoterapia");

    expect(musicTherapyTemplates.map((template) => template.label)).toEqual([
      "Cognitivos",
      "Motores",
      "Comunicação e Linguagem",
      "Musicais",
      "Sociais",
      "Emocionais",
      "Comportamentais",
    ]);
    expect(musicTherapyTemplates.every((template) => template.items.length >= 7)).toBe(true);
    expect(musicTherapyTemplates.reduce((total, template) => total + template.items.length, 0)).toBe(55);
  });

  it("organizes every non-music specialty into explicit clinical domains with complete catalog content", () => {
    const expectedDomainIds = {
      Psicologia: ["psi-reconhecimento-emocional", "psi-autorregulacao", "psi-comunicacao-funcional", "psi-espera-flexibilidade", "psi-habilidades-sociais"],
      Fonoaudiologia: ["fono-linguagem-receptiva", "fono-linguagem-expressiva-csa", "fono-comunicacao-social", "fono-fala-inteligibilidade"],
      Nutrição: ["nutri-exploracao-sensorial", "nutri-aceitacao-repertorio", "nutri-autonomia-refeicao"],
      Psicomotricidade: ["pm-equilibrio-coordenacao-global", "pm-planejamento-motricidade-fina", "pm-esquema-corporal-ritmo", "pm-participacao-regulacao"],
      "Terapia Ocupacional": ["to-higiene-pessoal", "to-vestuario-alimentacao", "to-rotina-autonomia", "to-organizacao-domestica", "to-preparo-planejamento", "to-pertences-participacao-comunitaria", "to-mobilidade-rotina"],
      Psicopedagogia: ["pp-alfabetizacao-inicial", "pp-leitura-escrita-funcional", "pp-atencao-memoria-organizacao", "pp-matematica-funcional"],
    } as const;

    for (const [area, expectedIds] of Object.entries(expectedDomainIds)) {
      const templates = OBJECTIVES_TEMPLATES.filter((template) => template.area === area);
      expect(templates.map((template) => template.id)).toEqual(expectedIds);
      expect(templates.every((template) => template.label.trim().length > 0 && template.summary.trim().length > 0)).toBe(true);
      expect(templates.flatMap((template) => template.items).every((item) => item.objetivo.trim() && item.atividade.trim() && item.material.trim())).toBe(true);
      expect(OBJECTIVE_CATALOG.filter((option) => option.area === area).every((option) => option.templateLabel && option.templateSummary && option.objetivo && option.atividade && option.material)).toBe(true);
    }
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
