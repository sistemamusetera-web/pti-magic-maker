import { readFileSync } from "node:fs";
import { generateOfficialClinicalHistory, synchronizeClinicalHistory } from "../src/lib/clinical-history";
import { describe, expect, it } from "vitest";

describe("Clinical history patient-data link", () => {
  it("updates generated text when patient data changes without overwriting manual text", () => {
    const generatedBeforeDiagnosis = generateOfficialClinicalHistory({
      patientName: "Ana",
      unit: "Unidade Centro",
      diagnosis: "TEA (CID-10 F84)",
      medication: "",
      responsibleReport: "",
      developmentProfile: "",
      behaviorDescription: "",
      hasAutoaggression: false,
      hasHeteroaggression: false,
      assessmentProtocol: "Portage",
    });
    const generatedAfterDiagnosis = generateOfficialClinicalHistory({
      patientName: "Ana",
      unit: "Unidade Centro",
      diagnosis: "TEA nível 2 (CID-10 F84)",
      medication: "",
      responsibleReport: "",
      developmentProfile: "",
      behaviorDescription: "",
      hasAutoaggression: false,
      hasHeteroaggression: false,
      assessmentProtocol: "Portage",
    });

    const initialNarrative = { diagnosis: "TEA (CID-10 F84)", clinical_history: "" };
    const initiallySynchronized = synchronizeClinicalHistory({
      narrative: initialNarrative,
      nextGeneratedHistory: generatedBeforeDiagnosis,
    });
    expect(initiallySynchronized?.clinical_history).toBe(generatedBeforeDiagnosis);

    const diagnosisUpdatedNarrative = synchronizeClinicalHistory({
      narrative: { diagnosis: "TEA nível 2 (CID-10 F84)", clinical_history: generatedBeforeDiagnosis },
      previousGeneratedHistory: generatedBeforeDiagnosis,
      nextGeneratedHistory: generatedAfterDiagnosis,
    });
    expect(diagnosisUpdatedNarrative?.clinical_history).toBe(generatedAfterDiagnosis);

    const manuallyEditedNarrative = synchronizeClinicalHistory({
      narrative: { diagnosis: "TEA nível 2 (CID-10 F84)", clinical_history: "Texto personalizado pelo profissional." },
      previousGeneratedHistory: generatedBeforeDiagnosis,
      nextGeneratedHistory: generatedAfterDiagnosis,
    });
    expect(manuallyEditedNarrative).toBeNull();
  });

  it("reuses patient name and diagnosis while keeping duplicate fields out of the clinical-history guide", () => {
    const source = readFileSync(new URL("../src/lib/use-clinical-history-auto-sync.ts", import.meta.url), "utf8");

    expect(source).toContain("patientName: patient.name");
    expect(source).toContain("diagnosis: narrative.diagnosis || patient.diagnosis || \"\"");
    expect(source).toContain("synchronizeClinicalHistory");
  });
});
