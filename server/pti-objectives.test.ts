import { describe, expect, it } from "vitest";
import { OBJECTIVES_TEMPLATES } from "../src/lib/pti-templates";

describe("PTI objectives templates", () => {
  it("keeps occupational therapy, AVDs and AIVDs as distinct objective areas", () => {
    const occupationalTherapy = OBJECTIVES_TEMPLATES.find((template) => template.id === "to-desempenho-ocupacional");
    const avds = OBJECTIVES_TEMPLATES.find((template) => template.id === "avds-autonomia");
    const aivds = OBJECTIVES_TEMPLATES.find((template) => template.id === "aivds-autonomia");

    expect(occupationalTherapy).toMatchObject({
      area: "Terapia Ocupacional",
      label: "TO — Desempenho Ocupacional",
    });
    expect(avds).toMatchObject({ area: "AVDs", label: "AVDs — Atividades de Vida Diária" });
    expect(aivds).toMatchObject({ area: "AIVDs", label: "AIVDs — Atividades Instrumentais de Vida Diária" });
  });
});
