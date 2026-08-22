export const NO_MEDICATION_OPTION = "Não faz uso de medicação";
export const OTHER_MEDICATION_OPTION = "Outra(s) medicação(ões) — descrever abaixo";

export const CLINICAL_MEDICATION_OPTIONS = [
  NO_MEDICATION_OPTION,
  "Risperidona",
  "Aripiprazol",
  "Metilfenidato",
  "Lisdexanfetamina",
  "Atomoxetina",
  OTHER_MEDICATION_OPTION,
] as const;

export function resolveClinicalMedication(selection?: string, otherMedication?: string) {
  if (selection === OTHER_MEDICATION_OPTION) return otherMedication?.trim() ?? "";
  return selection?.trim() ?? "";
}
