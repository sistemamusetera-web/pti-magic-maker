import { useEffect, useMemo, useRef } from "react";
import { generateOfficialClinicalHistory, synchronizeClinicalHistory } from "./clinical-history";
import { resolveClinicalMedication } from "./clinical-medications";
import type { PTINarrative } from "./pti-pdf";

interface ClinicalHistoryPatientData {
  name: string;
  diagnosis?: string | null;
}

interface UseClinicalHistoryAutoSyncParams {
  narrative: PTINarrative;
  onChange: (narrative: PTINarrative) => void;
  patient: ClinicalHistoryPatientData;
}

export function useClinicalHistoryAutoSync({ narrative, onChange, patient }: UseClinicalHistoryAutoSyncParams) {
  const guidedClinicalHistory = useMemo(() => generateOfficialClinicalHistory({
    patientName: patient.name,
    unit: narrative.clinical_unit ?? "",
    diagnosis: narrative.diagnosis || patient.diagnosis || "",
    medication: resolveClinicalMedication(narrative.clinical_medication, narrative.clinical_medication_other),
    responsibleReport: narrative.clinical_responsible_report ?? "",
    developmentProfile: narrative.clinical_development_profile ?? "",
    behaviorDescription: narrative.clinical_behavior_description ?? "",
    hasAutoaggression: Boolean(narrative.clinical_autoaggression),
    hasHeteroaggression: Boolean(narrative.clinical_heteroaggression),
    assessmentProtocol: narrative.clinical_assessment_protocol ?? "Portage",
  }), [
    narrative.clinical_assessment_protocol,
    narrative.clinical_autoaggression,
    narrative.clinical_behavior_description,
    narrative.clinical_development_profile,
    narrative.clinical_heteroaggression,
    narrative.clinical_medication,
    narrative.clinical_medication_other,
    narrative.clinical_responsible_report,
    narrative.clinical_unit,
    narrative.diagnosis,
    patient.diagnosis,
    patient.name,
  ]);
  const lastGeneratedClinicalHistory = useRef<string | null>(null);

  useEffect(() => {
    const synchronizedNarrative = synchronizeClinicalHistory({
      narrative,
      previousGeneratedHistory: lastGeneratedClinicalHistory.current,
      nextGeneratedHistory: guidedClinicalHistory,
    });
    if (synchronizedNarrative) {
      lastGeneratedClinicalHistory.current = guidedClinicalHistory;
      if (synchronizedNarrative !== narrative) onChange(synchronizedNarrative);
    }
  }, [guidedClinicalHistory, narrative, onChange]);

  return guidedClinicalHistory;
}
