export const NO_MEDICATION_OPTION = "Não faz uso de medicação";
export const OTHER_MEDICATION_OPTION = "Outra(s) medicação(ões) — descrever abaixo";

export const CLINICAL_MEDICATION_GROUPS = [
  {
    label: "Atenção e impulsividade",
    options: ["Metilfenidato", "Lisdexanfetamina", "Atomoxetina", "Guanfacina", "Clonidina", "Bupropiona"],
  },
  {
    label: "Comportamento e irritabilidade",
    options: ["Risperidona", "Aripiprazol", "Quetiapina", "Olanzapina"],
  },
  {
    label: "Sono, ansiedade e humor",
    options: ["Melatonina", "Sertralina", "Fluoxetina", "Escitalopram", "Trazodona"],
  },
] as const;

export function resolveClinicalMedications({
  medications,
  otherMedication,
  legacyMedication,
}: {
  medications?: string[];
  otherMedication?: string;
  legacyMedication?: string;
}) {
  const selected = (medications?.length ? medications : legacyMedication && legacyMedication !== OTHER_MEDICATION_OPTION ? [legacyMedication] : [])
    .map((medication) => medication.trim())
    .filter(Boolean);
  const uniqueSelected = Array.from(new Set(selected));
  const manual = otherMedication?.trim();

  if (uniqueSelected.includes(NO_MEDICATION_OPTION)) return NO_MEDICATION_OPTION;
  return [...uniqueSelected, ...(manual ? [manual] : [])].join(", ");
}
