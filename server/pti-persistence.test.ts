import { describe, expect, it } from "vitest";
import { createEmptyPTI, hydratePTI } from "../src/lib/pti-pdf";

describe("PTI persistence", () => {
  it("preserves all saved narrative fields, including parent names, when hydrating a PTI", () => {
    const saved = {
      ...createEmptyPTI(),
      mother_name: "Mariana Souza",
      father_name: "Rafael Souza",
      clinical_history: "Histórico clínico salvo.",
      clinical_medications: ["Risperidona", "Metilfenidato"],
      clinical_medications_other: "Medicamento registrado manualmente",
      objectives: [{ objetivo: "Objetivo salvo", atividade: "Atividade salva", material: "Material salvo" }],
      behavior_problems: ["Comportamento salvo"],
    };

    expect(hydratePTI(saved)).toEqual(saved);
  });

  it("creates independent default arrays only when saved PTI fields are absent", () => {
    const loaded = hydratePTI({ mother_name: "Ana", father_name: "Carlos" });

    expect(loaded.mother_name).toBe("Ana");
    expect(loaded.father_name).toBe("Carlos");
    expect(loaded.clinical_medications).toEqual([]);
    expect(loaded.clinical_medications_other).toBe("");
    expect(loaded.objectives).toEqual([{ objetivo: "", atividade: "", material: "" }]);
    expect(loaded.behavior_problems).toEqual([""]);
  });
});
