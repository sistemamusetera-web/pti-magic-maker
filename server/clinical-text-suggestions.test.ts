import { describe, expect, it } from "vitest";
import { appendClinicalText, appendClinicalTexts, CLINICAL_TEXT_SUGGESTIONS } from "../src/lib/clinical-text-suggestions";

describe("Clinical text suggestions", () => {
  it("provides suggestions for all guided clinical-history fields", () => {
    expect(CLINICAL_TEXT_SUGGESTIONS.responsibleReport.length).toBeGreaterThanOrEqual(5);
    expect(CLINICAL_TEXT_SUGGESTIONS.developmentProfile.length).toBeGreaterThanOrEqual(5);
    expect(CLINICAL_TEXT_SUGGESTIONS.behaviorDescription.length).toBeGreaterThanOrEqual(5);
  });

  it("adds a suggestion without discarding the professional's existing notes", () => {
    expect(appendClinicalText("A família relata dificuldades na rotina.", "necessidade de apoio nas transições")).toBe(
      "A família relata dificuldades na rotina. necessidade de apoio nas transições",
    );
  });

  it("accumulates several selected suggestions without duplicating a text already present", () => {
    expect(appendClinicalTexts("Nota existente.", ["primeira sugestão", "segunda sugestão", "primeira sugestão"])).toBe(
      "Nota existente. primeira sugestão segunda sugestão",
    );
  });
});
