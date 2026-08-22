export interface OfficialClinicalHistoryFields {
  patientName: string;
  unit: string;
  diagnosis: string;
  medication: string;
  responsibleReport: string;
  developmentProfile: string;
  behaviorDescription: string;
  hasAutoaggression: boolean;
  hasHeteroaggression: boolean;
  assessmentProtocol: string;
}

const clean = (value?: string) => value?.trim() ?? "";

export function generateOfficialClinicalHistory(fields: OfficialClinicalHistoryFields) {
  const patientName = clean(fields.patientName) || "O avaliado";
  const unit = clean(fields.unit) || "unidade de atendimento";
  const diagnosis = clean(fields.diagnosis) || "Transtorno do Espectro Autista (TEA) (CID-10 F84)";
  const medication = clean(fields.medication);
  const responsibleReport = clean(fields.responsibleReport) || "as informações pertinentes relatadas pelos responsáveis";
  const developmentProfile = clean(fields.developmentProfile) || "apresenta déficit na interação social, atraso no desenvolvimento da fala e déficit na autonomia, necessitando de suporte para realização de atividades de vida diária";
  const behaviorDescription = clean(fields.behaviorDescription) || "Apresenta baixa tolerância à frustração; em algumas situações, além de fuga e recusa, pode apresentar comportamentos de autolesão e agressividade. Pode morder as próprias mãos, arremessar objetos ao chão e morder pessoas próximas";
  const assessmentProtocol = clean(fields.assessmentProtocol) || "Portage";

  const aggressionTypes = [
    fields.hasAutoaggression ? "autolesivos" : "",
    fields.hasHeteroaggression ? "heterolesivos" : "",
  ].filter(Boolean);
  const aggressionNote = aggressionTypes.length
    ? ` Conforme relato dos responsáveis, há presença de comportamentos ${aggressionTypes.join(" e ")}.`
    : "";
  const medicationSentence = medication
    ? ` e, no momento, faz uso da medicação ${medication}`
    : "";

  return [
    `${patientName} passou por avaliação na unidade ${unit}. O avaliado apresenta diagnóstico de ${diagnosis}, está em acompanhamento com Neuropediatra${medicationSentence}. As informações aqui presentes foram colhidas em formato de entrevista presencial com a mãe. Em acolhimento com a mãe, uma das principais queixas trazidas está relacionada a ${responsibleReport}.`,
    `${patientName} ${developmentProfile}. ${behaviorDescription}.${aggressionNote}`,
    "O objetivo deste documento é a criação de um Protocolo de Ensino Individualizado (PEI), visando ao aumento de repertório, autonomia e ao ensino das habilidades em déficit.",
    `Para esta avaliação, utilizou-se como base o protocolo ${assessmentProtocol}, que oferece uma análise do desenvolvimento e das competências funcionais da criança, auxiliando na definição de metas personalizadas e estratégias de intervenção. A escolha do protocolo foi feita de acordo com o perfil e a faixa etária, podendo ser revista conforme a evolução do processo.`,
  ].join("\n\n");
}

export function shouldSynchronizeClinicalHistory({
  currentHistory,
  previousGeneratedHistory,
  nextGeneratedHistory,
}: {
  currentHistory?: string;
  previousGeneratedHistory?: string | null;
  nextGeneratedHistory: string;
}) {
  const current = clean(currentHistory);
  if (!current) return true;
  if (current === nextGeneratedHistory) return true;
  return Boolean(previousGeneratedHistory && current === previousGeneratedHistory);
}

export function synchronizeClinicalHistory<T extends { clinical_history?: string }>({
  narrative,
  previousGeneratedHistory,
  nextGeneratedHistory,
}: {
  narrative: T;
  previousGeneratedHistory?: string | null;
  nextGeneratedHistory: string;
}): T | null {
  if (!shouldSynchronizeClinicalHistory({
    currentHistory: narrative.clinical_history,
    previousGeneratedHistory,
    nextGeneratedHistory,
  })) {
    return null;
  }

  if (narrative.clinical_history === nextGeneratedHistory) return narrative;
  return { ...narrative, clinical_history: nextGeneratedHistory };
}
