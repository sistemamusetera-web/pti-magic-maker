import { describe, expect, it } from "vitest";
import { OBJECTIVES_TEMPLATES } from "../src/lib/pti-templates";

describe("PTI objectives templates", () => {
  it("groups AVDs and AIVDs as subareas of occupational therapy", () => {
    const removedOccupationalTherapy = OBJECTIVES_TEMPLATES.find((template) => template.id === "to-desempenho-ocupacional");
    const avds = OBJECTIVES_TEMPLATES.find((template) => template.id === "avds-autonomia");
    const aivds = OBJECTIVES_TEMPLATES.find((template) => template.id === "aivds-autonomia");

    expect(removedOccupationalTherapy).toBeUndefined();
    expect(avds).toMatchObject({ area: "Terapia Ocupacional", label: "AVDs — Atividades de Vida Diária" });
    expect(aivds).toMatchObject({ area: "Terapia Ocupacional", label: "AIVDs — Atividades Instrumentais de Vida Diária" });
  });
});
