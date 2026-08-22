import { useClinicalHistoryAutoSync } from "../lib/use-clinical-history-auto-sync";
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

export function ClinicalHistorySection({ value, onChange, patient }: ClinicalHistorySectionProps) {
  const set = <K extends keyof PTINarrative>(key: K, next: PTINarrative[K]) =>
    onChange({ ...value, [key]: next });
  const guidedClinicalHistory = useClinicalHistoryAutoSync({ narrative: value, onChange, patient });

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
          <select className={fieldClassName} value={value.clinical_unit ?? ""} onChange={(event) => set("clinical_unit", event.target.value)}>
            <option value="">Selecione a unidade</option>
            <option value="Hapvida Janga">Hapvida Janga</option>
            <option value="Hapvida Madalena">Hapvida Madalena</option>
          </select>
        </ClinicalField>
        <ClinicalField label="Medicação (se houver)">
          <input className={fieldClassName} value={value.clinical_medication ?? ""} onChange={(event) => set("clinical_medication", event.target.value)} placeholder="Nome e posologia, se pertinente" />
        </ClinicalField>
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
            <textarea className={textareaClassName} rows={3} value={value.clinical_responsible_report ?? ""} onChange={(event) => set("clinical_responsible_report", event.target.value)} placeholder="Queixas principais, rotina, demandas e demais informações pertinentes." />
          </ClinicalField>
        </div>
        <div className="sm:col-span-2">
          <ClinicalField label="Desenvolvimento, interação e autonomia">
            <textarea className={textareaClassName} rows={3} value={value.clinical_development_profile ?? ""} onChange={(event) => set("clinical_development_profile", event.target.value)} placeholder="Ex.: apresenta déficit na interação social, atraso no desenvolvimento da fala e déficit na autonomia..." />
          </ClinicalField>
        </div>
        <div className="sm:col-span-2">
          <ClinicalField label="Comportamentos e manejo">
            <textarea className={textareaClassName} rows={4} value={value.clinical_behavior_description ?? ""} onChange={(event) => set("clinical_behavior_description", event.target.value)} placeholder="Descreva tolerância à frustração, fuga, recusa, comportamentos auto ou heterolesivos e outras observações." />
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
