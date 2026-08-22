import { describe, expect, it } from "vitest";
import { generateOfficialClinicalHistory } from "../src/lib/clinical-history";

describe("Official clinical history generator", () => {
  it("fills the institutional text with guided patient-specific fields", () => {
    const text = generateOfficialClinicalHistory({
      patientName: "Ana",
      unit: "Unidade Centro",
      diagnosis: "Transtorno do Espectro Autista (TEA) (CID-10 F84)",
      medication: "risperidona",
      responsibleReport: "dificuldades de comunicação e de autonomia na rotina",
      developmentProfile: "apresenta dificuldade de interação social e necessita de apoio em atividades de vida diária",
      behaviorDescription: "Apresenta baixa tolerância à frustração e pode arremessar objetos ao chão",
      hasAutoaggression: true,
      hasHeteroaggression: true,
      assessmentProtocol: "Portage",
    });

    expect(text).toContain("Ana passou por avaliação na unidade Unidade Centro");
    expect(text).toContain("faz uso da medicação risperidona");
    expect(text).toContain("dificuldades de comunicação e de autonomia na rotina");
    expect(text).toContain("comportamentos autolesivos e heterolesivos");
    expect(text).toContain("protocolo Portage");
  });

  it("keeps the official text usable when optional details are not informed", () => {
    const text = generateOfficialClinicalHistory({
      patientName: "",
      unit: "",
      diagnosis: "",
      medication: "",
      responsibleReport: "",
      developmentProfile: "",
      behaviorDescription: "",
      hasAutoaggression: false,
      hasHeteroaggression: false,
      assessmentProtocol: "",
    });

    expect(text).toContain("O avaliado passou por avaliação");
    expect(text).toContain("Transtorno do Espectro Autista (TEA) (CID-10 F84)");
    expect(text).not.toContain("faz uso da medicação");
  });

  it("uses a grammatically correct sentence when no medication is registered", () => {
    const text = generateOfficialClinicalHistory({
      patientName: "Ana",
      unit: "Hapvida Janga",
      diagnosis: "TEA (CID-10 F84)",
      medication: "Não faz uso de medicação",
      responsibleReport: "",
      developmentProfile: "",
      behaviorDescription: "",
      hasAutoaggression: false,
      hasHeteroaggression: false,
      assessmentProtocol: "Portage",
    });

    expect(text).toContain("no momento, não faz uso de medicação");
    expect(text).not.toContain("faz uso da medicação Não faz uso");
  });
});
