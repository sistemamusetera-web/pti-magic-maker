import { describe, expect, it } from "vitest";
import { CLINICAL_DIAGNOSIS_GROUPS, resolveClinicalDiagnoses } from "../src/lib/clinical-diagnoses";

describe("Clinical diagnosis registration", () => {
  it("offers TEA and TDAH codes among the selectable diagnostic options", () => {
    const options = CLINICAL_DIAGNOSIS_GROUPS.flatMap((group) => group.options);

    expect(options).toContain("Transtorno do Espectro Autista (TEA) — CID-10 F84.0");
    expect(options).toContain("Transtorno de déficit de atenção/hiperatividade (TDAH) — CID-10 F90.0");
  });

  it("combines several selected diagnoses with a complementary manual record", () => {
    expect(resolveClinicalDiagnoses({
      diagnoses: ["Transtorno do Espectro Autista (TEA) — CID-10 F84.0", "Transtorno de déficit de atenção/hiperatividade (TDAH) — CID-10 F90.0"],
      otherDiagnosis: "Diagnóstico adicional informado em laudo",
    })).toBe("Transtorno do Espectro Autista (TEA) — CID-10 F84.0; Transtorno de déficit de atenção/hiperatividade (TDAH) — CID-10 F90.0; Diagnóstico adicional informado em laudo");
  });
});
