import { useState } from "react";
import { useClinicalHistoryAutoSync } from "../lib/use-clinical-history-auto-sync";
import { CLINICAL_MEDICATION_GROUPS, NO_MEDICATION_OPTION, OTHER_MEDICATION_OPTION } from "../lib/clinical-medications";
import { appendClinicalTexts, CLINICAL_TEXT_SUGGESTIONS, type ClinicalTextSuggestion } from "../lib/clinical-text-suggestions";
import type { PTINarrative } from "../lib/pti-pdf";

interface ClinicalHistoryPatient {
  name: string;
  diagnosis?: string | null;
}

interface ClinicalHistorySectionProps {
  value: PTINarrative;
  onChange: (value: PTINarrative) => void;
  patient: ClinicalHistoryPatient;
}

function ClinicalField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-foreground">{label}</label>
      {children}
    </div>
  );
}

const fieldClassName = "flex h-9 w-full rounded-sm border border-input bg-background px-3 py-1 text-sm shadow-xs";
const textareaClassName = "flex w-full rounded-sm border border-input bg-background px-3 py-2 text-sm shadow-xs";

function SuggestedTextarea({
  name,
  value,
  onChange,
  suggestions,
  placeholder,
  rows,
}: {
  name: string;
  value: string;
  onChange: (next: string) => void;
  suggestions: readonly ClinicalTextSuggestion[];
  placeholder: string;
  rows: number;
}) {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const toggleSuggestion = (label: string) => {
    setSelectedLabels((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label]);
  };

  const addSelectedSuggestions = () => {
    const texts = suggestions.filter((suggestion) => selectedLabels.includes(suggestion.label)).map((suggestion) => suggestion.text);
    if (!texts.length) return;
    onChange(appendClinicalTexts(value, texts));
    setSelectedLabels([]);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-sm border border-border bg-muted/20 p-2.5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Selecione uma ou mais sugestões</p>
        <div className="grid gap-1.5 sm:grid-cols-2">
          {suggestions.map((suggestion) => (
            <label key={suggestion.label} className="flex items-center gap-2 text-xs text-foreground">
              <input
                type="checkbox"
                name={`${name}-suggestion`}
                value={suggestion.label}
                checked={selectedLabels.includes(suggestion.label)}
                onChange={() => toggleSuggestion(suggestion.label)}
                className="h-4 w-4 accent-primary"
              />
              {suggestion.label}
            </label>
          ))}
        </div>
        <button
          type="button"
          name={`${name}-apply-suggestions`}
          disabled={!selectedLabels.length}
          onClick={addSelectedSuggestions}
          className="mt-2 inline-flex h-8 items-center rounded-sm bg-primary px-3 text-xs font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          Adicionar {selectedLabels.length || ""} sugestão{selectedLabels.length === 1 ? "" : "ões"}
        </button>
      </div>
      <textarea name={name} className={textareaClassName} rows={rows} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    </div>
  );
}

export function ClinicalHistorySection({ value, onChange, patient }: ClinicalHistorySectionProps) {
  const set = <K extends keyof PTINarrative>(key: K, next: PTINarrative[K]) =>
    onChange({ ...value, [key]: next });
  const guidedClinicalHistory = useClinicalHistoryAutoSync({ narrative: value, onChange, patient });
  const selectedMedications = value.clinical_medications?.length
    ? value.clinical_medications
    : value.clinical_medication && value.clinical_medication !== OTHER_MEDICATION_OPTION ? [value.clinical_medication] : [];
  const otherMedications = value.clinical_medications_other || value.clinical_medication_other || "";
  const addMedication = (medication: string) => {
    if (!medication || medication === OTHER_MEDICATION_OPTION) return;
    if (medication === NO_MEDICATION_OPTION) {
      onChange({ ...value, clinical_medications: [NO_MEDICATION_OPTION], clinical_medications_other: "" });
      return;
    }
    const next = Array.from(new Set([...selectedMedications.filter((item) => item !== NO_MEDICATION_OPTION), medication]));
    onChange({ ...value, clinical_medications: next });
  };
  const removeMedication = (medication: string) =>
    onChange({ ...value, clinical_medications: selectedMedications.filter((item) => item !== medication) });

  return (
    <section className="sheet rounded-md">
      <div className="flex flex-wrap items-center gap-2 border-b bg-primary px-4 py-2 text-primary-foreground">
        <span className="text-sm font-bold uppercase tracking-widest">Breve História Clínica</span>
        <div className="ml-auto">
          <button
            className="inline-flex h-8 items-center rounded-sm bg-secondary px-3 text-xs font-semibold text-secondary-foreground"
            type="button"
            onClick={() => set("clinical_history", guidedClinicalHistory)}
          >
            Gerar texto oficial
          </button>
        </div>
      </div>
      <div className="grid gap-3 border-b bg-muted/20 p-4 sm:grid-cols-2">
        <ClinicalField label="Unidade">
          <select name="clinical-unit" className={fieldClassName} value={value.clinical_unit ?? ""} onChange={(event) => set("clinical_unit", event.target.value)}>
            <option value="">Selecione a unidade</option>
            <option value="Hapvida Janga">Hapvida Janga</option>
            <option value="Hapvida Madalena">Hapvida Madalena</option>
          </select>
        </ClinicalField>
        <div className="space-y-2">
          <ClinicalField label="Medicações atuais já prescritas">
            <select name="clinical-medication-picker" className={fieldClassName} value="" onChange={(event) => addMedication(event.target.value)}>
              <option value="">Adicionar medicação ao registro</option>
              <option value={NO_MEDICATION_OPTION}>{NO_MEDICATION_OPTION}</option>
              {CLINICAL_MEDICATION_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((medication) => <option key={medication} value={medication}>{medication}</option>)}
                </optgroup>
              ))}
              <option value={OTHER_MEDICATION_OPTION}>{OTHER_MEDICATION_OPTION}</option>
            </select>
          </ClinicalField>
          {selectedMedications.length > 0 && (
            <div className="flex flex-wrap gap-1.5" aria-label="Medicações selecionadas">
              {selectedMedications.map((medication) => (
                <span key={medication} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs text-foreground">
                  {medication}
                  <button type="button" aria-label={`Remover ${medication}`} onClick={() => removeMedication(medication)} className="font-bold text-primary">×</button>
                </span>
              ))}
            </div>
          )}
          <input
            name="clinical-medications-other"
            className={fieldClassName}
            value={otherMedications}
            onChange={(event) => set("clinical_medications_other", event.target.value)}
            placeholder="Outra(s) medicação(ões) já prescrita(s), se necessário"
            disabled={selectedMedications.includes(NO_MEDICATION_OPTION)}
          />
          <p className="text-[11px] leading-snug text-muted-foreground">Selecione quantas medicações forem necessárias e/ou informe outras no campo complementar. O recurso registra apenas uso já prescrito; não inclua doses nem altere tratamento sem orientação médica.</p>
        </div>
        <ClinicalField label="Protocolo de avaliação">
          <select className={fieldClassName} value={value.clinical_assessment_protocol ?? "Portage"} onChange={(event) => set("clinical_assessment_protocol", event.target.value)}>
            <option value="Portage">Portage</option>
            <option value="ABLLS-R">ABLLS-R</option>
            <option value="Portage e ABLLS-R">Portage e ABLLS-R</option>
            <option value="Outro protocolo">Outro protocolo</option>
          </select>
        </ClinicalField>
        <div className="rounded-sm border bg-paper p-3">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Comportamentos relatados</div>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-foreground">
            <label className="flex items-center gap-2"><input type="checkbox" checked={Boolean(value.clinical_autoaggression)} onChange={(event) => set("clinical_autoaggression", event.target.checked)} className="h-4 w-4 accent-primary" /> Autolesivo</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={Boolean(value.clinical_heteroaggression)} onChange={(event) => set("clinical_heteroaggression", event.target.checked)} className="h-4 w-4 accent-primary" /> Heterolesivo</label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <ClinicalField label="Informações coletadas com os responsáveis">
            <SuggestedTextarea
              name="clinical-responsible-report"
              value={value.clinical_responsible_report ?? ""}
              onChange={(next) => set("clinical_responsible_report", next)}
              suggestions={CLINICAL_TEXT_SUGGESTIONS.responsibleReport}
              rows={3}
              placeholder="Queixas principais, rotina, demandas e demais informações pertinentes."
            />
          </ClinicalField>
        </div>
        <div className="sm:col-span-2">
          <ClinicalField label="Desenvolvimento, interação e autonomia">
            <SuggestedTextarea
              name="clinical-development-profile"
              value={value.clinical_development_profile ?? ""}
              onChange={(next) => set("clinical_development_profile", next)}
              suggestions={CLINICAL_TEXT_SUGGESTIONS.developmentProfile}
              rows={3}
              placeholder="Ex.: apresenta déficit na interação social, atraso no desenvolvimento da fala e déficit na autonomia..."
            />
          </ClinicalField>
        </div>
        <div className="sm:col-span-2">
          <ClinicalField label="Comportamentos e manejo">
            <SuggestedTextarea
              name="clinical-behavior-description"
              value={value.clinical_behavior_description ?? ""}
              onChange={(next) => set("clinical_behavior_description", next)}
              suggestions={CLINICAL_TEXT_SUGGESTIONS.behaviorDescription}
              rows={4}
              placeholder="Descreva tolerância à frustração, fuga, recusa, comportamentos auto ou heterolesivos e outras observações."
            />
          </ClinicalField>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-2 text-xs text-muted-foreground">Nome e diagnóstico são trazidos automaticamente de Dados do Paciente. Os campos guiados atualizam o texto enquanto ele não tiver edição manual; o botão permite gerar novamente o modelo oficial. O texto abaixo permanece totalmente editável.</p>
        <textarea
          className={textareaClassName}
          rows={7}
          value={value.clinical_history ?? ""}
          onChange={(event) => set("clinical_history", event.target.value)}
          placeholder="O modelo institucional será preenchido automaticamente com os dados informados."
        />
      </div>
    </section>
  );
}
