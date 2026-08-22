export const CLINICAL_DIAGNOSIS_GROUPS = [
  {
    label: "TEA e atenção",
    options: [
      "Transtorno do Espectro Autista (TEA) — CID-10 F84.0",
      "Autismo atípico — CID-10 F84.1",
      "Transtorno de déficit de atenção/hiperatividade (TDAH) — CID-10 F90.0",
      "Transtorno hipercinético de conduta — CID-10 F90.1",
      "Transtorno hipercinético não especificado — CID-10 F90.9",
    ],
  },
  {
    label: "Linguagem, aprendizagem e desenvolvimento",
    options: [
      "Transtorno específico da fala e linguagem expressiva — CID-10 F80.1",
      "Transtorno receptivo da linguagem — CID-10 F80.2",
      "Transtorno específico da leitura (dislexia) — CID-10 F81.0",
      "Transtorno misto das habilidades escolares — CID-10 F81.3",
      "Transtorno específico do desenvolvimento motor — CID-10 F82",
      "Transtornos mistos do desenvolvimento — CID-10 F83",
    ],
  },
  {
    label: "Condições associadas frequentemente registradas",
    options: [
      "Transtorno desafiador de oposição — CID-10 F91.3",
      "Transtorno de ansiedade não especificado — CID-10 F41.9",
      "Deficiência intelectual leve — CID-10 F70",
      "Epilepsia — CID-10 G40",
    ],
  },
] as const;

export function resolveClinicalDiagnoses({
  diagnoses,
  otherDiagnosis,
  legacyDiagnosis,
}: {
  diagnoses?: string[];
  otherDiagnosis?: string;
  legacyDiagnosis?: string;
}) {
  const selected = (diagnoses?.length ? diagnoses : [])
    .map((diagnosis) => diagnosis.trim())
    .filter(Boolean);
  const manual = otherDiagnosis?.trim() || (!selected.length ? legacyDiagnosis?.trim() : "");
  return [...Array.from(new Set(selected)), ...(manual ? [manual] : [])].join("; ");
}
