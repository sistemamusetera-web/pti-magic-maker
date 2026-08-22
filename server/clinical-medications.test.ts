import { describe, expect, it } from "vitest";
import { OTHER_MEDICATION_OPTION, resolveClinicalMedications } from "../src/lib/clinical-medications";

describe("Clinical medication registration", () => {
  it("combines multiple selected medications with a complementary manual record", () => {
    expect(resolveClinicalMedications({
      medications: ["Metilfenidato", "Melatonina"],
      otherMedication: "Medicamento personalizado",
    })).toBe("Metilfenidato, Melatonina, Medicamento personalizado");
  });

  it("preserves the manual detail of legacy other-medication entries without repeating the old option label", () => {
    expect(resolveClinicalMedications({
      legacyMedication: OTHER_MEDICATION_OPTION,
      otherMedication: "Medicamento previamente registrado",
    })).toBe("Medicamento previamente registrado");
  });
});
