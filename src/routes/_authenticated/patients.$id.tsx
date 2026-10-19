import { createFileRoute, useNavigate, useParams, useRouteContext } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  AGE_RANGES,
  ANSWERS,
  AREAS,
  ITEMS,
  computeStats,
  itemKey,
  otherObjectives,
  priorityObjectives,
  scoreOf,
  type Answer,
  type AgeRange,
  type Answers,
  type Area,
  type AreaAgeStat,
  type Item,
} from "@/lib/portage";
import { createEmptyPTI, generatePTIPdf, hydratePTI, type PeiSessionSummary, type PTINarrative, type PTIObjective } from "@/lib/pti-pdf";
import { ArrowLeft, Download, Save, FileSpreadsheet, Plus, Trash2, Sparkles, Shield, History, ListChecks, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClinicalHistorySection } from "@/components/clinical-history-section";
import { CLINICAL_DIAGNOSIS_GROUPS, resolveClinicalDiagnoses } from "@/lib/clinical-diagnoses";
import { applyRegisteredProfessional, getRegisteredProfessionalName } from "@/lib/professional-profile";
import {
  BEHAVIORS_TEMPLATES,
  CONCLUSION_TEMPLATES,
} from "@/lib/pti-templates";
import { appendUniqueObjectives, countPopulatedObjectives, isObjectiveIncluded, OBJECTIVE_CATALOG, type ObjectiveCatalogOption } from "@/lib/objective-catalog";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export const Route = createFileRoute("/_authenticated/patients/$id")({
  head: () => ({
    meta: [
      { title: "Avaliação Portage — PTI" },
      { name: "description", content: "Preencha o Inventário Portage e gere o Plano Terapêutico Individual em PDF." },
      { property: "og:title", content: "Avaliação Portage — PTI" },
      { property: "og:description", content: "Preencha o Inventário Portage e gere o Plano Terapêutico Individual em PDF." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PatientPage,
});

interface Patient {
  id: string;
  name: string;
  birth_date: string | null;
  guardian: string | null;
  diagnosis: string | null;
  notes: string | null;
}

interface EvaluationRow {
  id: string;
  evaluation_date: string;
  evaluator_name: string;
  patient_age: string | null;
  answers: Answers;
  pti_data?: PTINarrative | null;
  created_at: string;
}

const AJUDA_OPTIONS = ["Independente", "Gestual", "Verbal", "Física"] as const;
type Ajuda = (typeof AJUDA_OPTIONS)[number];

const PTI_OBJECTIVE_AREAS = Array.from(
  new Set(OBJECTIVE_CATALOG.map((option) => option.area)),
);

interface PeiSessionRow {
  item_key: string;
  area: Area;
  age_range: AgeRange;
  item_num: string;
  session_date: string;
  acertos: number;
  tentativas: number;
  ajuda: Ajuda;
}

const AREA_TITLE: Record<Area, string> = {
  SOCIALIZAÇÃO: "SOCIALIZAÇÃO",
  LINGUAGEM: "LINGUAGEM",
  COGNIÇÃO: "COGNIÇÃO",
  AUTOCUIDADOS: "AUTOCUIDADOS",
  "DESENV MOTOR": "DESENVOLVIMENTO MOTOR",
};

function computeAge(birth?: string | null): string {
  if (!birth) return "";
  const d = new Date(birth);
  if (isNaN(d.getTime())) return "";
  const now = new Date();
  let years = now.getFullYear() - d.getFullYear();
  let months = now.getMonth() - d.getMonth();
  if (now.getDate() < d.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return `${years} ano(s) e ${months} mês(es)`;
}

function ageLabel(age: AgeRange) {
  return age === "0 a 1 anos" ? "0 a 1 ano" : age;
}

type Tab = "PTI" | AgeRange | "CONSOLIDADO" | "PEI" | "EVOLUÇÃO";

function PatientPage() {
  const { id } = useParams({ from: "/_authenticated/patients/$id" });
  const navigate = useNavigate();
  const { role } = useRouteContext({ from: "/_authenticated/patients/$id" }) as any;

  const [patient, setPatient] = useState<Patient | null>(null);
  const [evalId, setEvalId] = useState<string | null>(null);
  const [evaluator, setEvaluator] = useState("");
  const [evalDate, setEvalDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [answers, setAnswers] = useState<Answers>({});
  const [sessions, setSessions] = useState<Record<string, PeiSessionRow>>({});
  const [allEvaluations, setAllEvaluations] = useState<EvaluationRow[]>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("PTI");
  const [pti, setPti] = useState<PTINarrative>(() => createEmptyPTI());
  const [registeredProfessionalName, setRegisteredProfessionalName] = useState("");
  const [includePdfBranding, setIncludePdfBranding] = useState(true);
  const [includePdfFooter, setIncludePdfFooter] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [{ data: p, error: pe }, { data: ev }, { data: session }] = await Promise.all([
        supabase.from("patients").select("*").eq("id", id).single(),
        supabase
          .from("evaluations")
          .select("id, evaluation_date, evaluator_name, patient_age, answers, pti_data, created_at")
          .eq("patient_id", id)
          .order("evaluation_date", { ascending: false }),
        supabase.auth.getUser(),
      ]);
      const professionalName = getRegisteredProfessionalName(session.user);
      setRegisteredProfessionalName(professionalName);
      if (pe) toast.error(pe.message);
      else setPatient(p as Patient);
      if (ev && ev.length) {
        const e = ev[0];
        setEvalId(e.id);
        setEvaluator(e.evaluator_name);
        setEvalDate(e.evaluation_date);
        setAnswers((e.answers as Answers) || {});
        setPti(applyRegisteredProfessional(hydratePTI((e as EvaluationRow).pti_data), professionalName));
        // Load latest session per item_key
        const { data: sess } = await (supabase as any)
          .from("pei_sessions")
          .select("*")
          .eq("evaluation_id", e.id)
          .order("session_date", { ascending: false });
        if (sess) {
          const map: Record<string, PeiSessionRow> = {};
          for (const s of sess as any[]) {
            if (!map[s.item_key]) {
              map[s.item_key] = {
                item_key: s.item_key,
                area: s.area,
                age_range: s.age_range,
                item_num: s.item_num,
                session_date: s.session_date,
                acertos: s.acertos,
                tentativas: s.tentativas,
                ajuda: s.ajuda,
              };
            }
          }
          setSessions(map);
        }
      } else {
        setPti((current) => applyRegisteredProfessional(current, professionalName));
      }
      setAllEvaluations((ev || []) as EvaluationRow[]);
      setLoading(false);
    })();
  }, [id]);

  const patientAge = useMemo(() => computeAge(patient?.birth_date), [patient?.birth_date]);
  const stats = useMemo(() => computeStats(answers), [answers]);
  const priorities = useMemo(() => priorityObjectives(answers), [answers]);
  const others = useMemo(() => otherObjectives(answers), [answers]);
  const totalAnswered = Object.values(answers).filter((v) => v).length;

  const setAnswer = (key: string, val: Answer) => {
    setAnswers((prev) => {
      const next = { ...prev };
      if (prev[key] === val) delete next[key];
      else next[key] = val;
      return next;
    });
  };

  const save = async () => {
    if (!patient) return;
    setSaving(true);
    const { data: session } = await supabase.auth.getUser();
    if (!session.user) {
      setSaving(false);
      return;
    }
    const evaluatorName = evaluator.trim() || pti.professional?.trim() || session.user.email || "Não informado";
    const payload: any = {
      owner_id: session.user.id,
      patient_id: patient.id,
      evaluator_name: evaluatorName,
      evaluation_date: evalDate,
      patient_age: patientAge,
      answers,
      pti_data: pti,
    };
    const q = evalId
      ? supabase.from("evaluations").update(payload).eq("id", evalId).select().single()
      : supabase.from("evaluations").insert(payload).select().single();
    const { data, error } = await q;
    if (error) toast.error(error.message);
    else {
      const saved = data as any;
      setEvalId(saved.id);
      setAllEvaluations((prev) => {
        const next = prev.filter((x) => x.id !== saved.id);
        next.unshift({
          id: saved.id,
          evaluation_date: saved.evaluation_date,
          evaluator_name: saved.evaluator_name,
          patient_age: saved.patient_age,
          answers: saved.answers as Answers,
          pti_data: (saved.pti_data as PTINarrative | null) ?? pti,
          created_at: saved.created_at,
        });
        return next;
      });
      toast.success("Avaliação salva");
    }
    setSaving(false);
  };

  const startNewEvaluation = async () => {
    if (!patient) return;
    if (evalId && Object.keys(answers).some((k) => answers[k])) {
      const ok = window.confirm("Isso cria uma nova avaliação em branco para este paciente. A avaliação atual permanece salva. Continuar?");
      if (!ok) return;
    }
    setEvalId(null);
    setEvaluator("");
    setEvalDate(new Date().toISOString().slice(0, 10));
    setAnswers({});
    setSessions({});
    setPti(createEmptyPTI({ diagnosis: patient.diagnosis || "", professional: registeredProfessionalName }));
    setTab("PTI");
    toast.success("Nova avaliação iniciada. Preencha e salve.");
  };

  const loadEvaluation = (e: EvaluationRow) => {
    setEvalId(e.id);
    setEvaluator(e.evaluator_name);
    setEvalDate(e.evaluation_date);
    setAnswers((e.answers as Answers) || {});
    setPti(applyRegisteredProfessional(hydratePTI(e.pti_data), registeredProfessionalName));
    setSessions({});
    setTab("PTI");
    toast.info(`Avaliação de ${new Date(e.evaluation_date).toLocaleDateString("pt-BR")} carregada`);
  };

  const upsertSession = async (item: Item, patch: Partial<PeiSessionRow>) => {
    if (!patient) return;
    if (!evalId) {
      toast.error("Salve a avaliação antes de registrar sessões");
      return;
    }
    const key = itemKey(item);
    const prev = sessions[key] ?? {
      item_key: key,
      area: item.area,
      age_range: item.age_range,
      item_num: item.num,
      session_date: new Date().toISOString().slice(0, 10),
      acertos: 0,
      tentativas: 0,
      ajuda: "Independente" as Ajuda,
    };
    const next = { ...prev, ...patch };
    setSessions((s) => ({ ...s, [key]: next }));
    const { data: session } = await supabase.auth.getUser();
    if (!session.user) return;
    await (supabase as any).from("pei_sessions").insert({
      owner_id: session.user.id,
      evaluation_id: evalId,
      patient_id: patient.id,
      item_key: key,
      area: item.area,
      age_range: item.age_range,
      item_num: item.num,
      session_date: next.session_date,
      acertos: next.acertos,
      tentativas: next.tentativas,
      ajuda: next.ajuda,
    });
  };

  const download = async () => {
    if (!patient) return;
    try {
      const { data: session } = await supabase.auth.getUser();
      const evaluatorName = evaluator.trim() || pti.professional?.trim() || session.user?.email || "Não informado";
      const sessionsForPdf: Record<string, PeiSessionSummary> = {};
      for (const [k, s] of Object.entries(sessions)) {
        sessionsForPdf[k] = {
          item_key: k,
          acertos: s.acertos,
          tentativas: s.tentativas,
          ajuda: s.ajuda,
          sessions: 1,
        };
      }
      await generatePTIPdf({
        patient,
        patient_age: patientAge,
        evaluator_name: evaluatorName,
        evaluation_date: evalDate,
        answers,
        sessions: sessionsForPdf,
        pti,
      }, {
        includeBranding: includePdfBranding,
        includeFooter: includePdfFooter,
      });
      toast.success("PDF gerado");
    } catch (e: any) {
      console.error("[PTI PDF]", e);
      toast.error(`Falha ao gerar PDF: ${e?.message || e}`);
    }
  };

  if (loading) return <div className="p-8 text-muted-foreground">Carregando…</div>;
  if (!patient) return <div className="p-8">Paciente não encontrado.</div>;

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b bg-paper">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-2.5 sm:px-6">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate({ to: "/dashboard" })} className="shrink-0 px-2 sm:px-3">
              <ArrowLeft className="h-4 w-4 sm:mr-1" />
              <span className="hidden sm:inline">Pacientes</span>
            </Button>
            {role === 'admin' && (
              <Button variant="default" size="sm" onClick={() => navigate({ to: "/admin" })} className="shrink-0 px-2 sm:px-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                <Shield className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Administração</span>
              </Button>
            )}

            <div className="flex min-w-0 items-center gap-2">
              <div className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <FileSpreadsheet className="h-4 w-4" />
              </div>
              <div className="min-w-0 leading-tight">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Portage</div>
                <div className="truncate text-sm font-semibold">{patient.name}</div>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <span className="hidden md:inline text-xs text-muted-foreground">
              {totalAnswered}/{ITEMS.length} itens
            </span>
            <Button variant="outline" size="sm" onClick={startNewEvaluation} className="px-2 sm:px-3">
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Nova avaliação</span>
              <span className="sm:hidden">Novo</span>
            </Button>
            <Button variant="outline" size="sm" onClick={save} disabled={saving} className="px-2 sm:px-3">
              <Save className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">{saving ? "Salvando…" : "Salvar"}</span>
            </Button>
            <Button size="sm" onClick={download} className="px-2 sm:px-3">
              <Download className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">PDF do PTI</span>
              <span className="sm:hidden">PDF</span>
            </Button>
          </div>
        </div>

        {/* Orange strip = PORTAGE title bar from the spreadsheet */}
        <div className="bg-header-strip">
          <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-3 py-1.5 text-primary-foreground sm:px-6">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest">PORTAGE</span>
            <span className="hidden sm:inline text-xs opacity-90">Avaliação e Plano de Ensino Individualizado</span>
            <span className="sm:hidden text-[11px] opacity-90 truncate">Avaliação e PEI</span>
          </div>
        </div>

      </header>

      <main className="mx-auto max-w-[1400px] px-3 py-4 sm:px-6 sm:py-6">


        {/* Aviso de direitos autorais — igual ao topo da planilha */}
        <div className="mb-3 rounded-sm border border-[color:var(--color-sim)]/40 bg-[color:var(--color-sim)]/10 px-3 py-2 text-[11px] leading-snug text-[color:var(--color-sim)]">
          TODOS OS DIREITOS RESERVADOS HAPVIDA NOTREDAME — PROIBIDO O RATEIO, A COMERCIALIZAÇÃO E A REPRODUÇÃO DESSE MATERIAL. PROPRIEDADE HAPVIDA NOTREDAME.
        </div>

        <section className="mb-3 rounded-md border bg-card px-3 py-3 shadow-sm" aria-labelledby="pdf-options-title">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground" id="pdf-options-title">
            Opções do PDF
          </div>
          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-6">
            <label className="flex cursor-pointer items-center gap-2">
              <Checkbox
                checked={includePdfBranding}
                onCheckedChange={(checked) => setIncludePdfBranding(checked === true)}
                aria-label="Incluir logos no PDF"
              />
              <span>Incluir logos Hapvida e NotreDame</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <Checkbox
                checked={includePdfFooter}
                onCheckedChange={(checked) => setIncludePdfFooter(checked === true)}
                aria-label="Incluir rodapé no PDF"
              />
              <span>Incluir rodapé e paginação</span>
            </label>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            Desmarque uma opção para gerar o PDF sem esse elemento.
          </p>
        </section>


        {/* Navegação principal do prontuário */}
        <div className="sheet mb-3 flex overflow-x-auto rounded-t-md border-b-0">
          <TabButton active={tab === "PTI"} onClick={() => setTab("PTI")}>PTI</TabButton>
          <TabButton active={tab === "CONSOLIDADO"} onClick={() => setTab("CONSOLIDADO")}>
            Consolidado
          </TabButton>
          <TabButton active={tab === "PEI"} onClick={() => setTab("PEI")}>
            PEI · Intervenção
          </TabButton>
          <TabButton active={tab === "EVOLUÇÃO"} onClick={() => setTab("EVOLUÇÃO")}>
            <History className="h-3.5 w-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Evolução</span>
            <span className="sm:hidden">Evol.</span>
          </TabButton>
          <div className="ml-auto hidden lg:flex items-center whitespace-nowrap px-3 text-[11px] uppercase tracking-widest text-muted-foreground">
            {tab === "CONSOLIDADO"
              ? "áreas × faixas etárias"
              : tab === "PEI"
                ? "objetivos prioritários · registro de sessões"
                : "5 áreas de desenvolvimento"}
          </div>
        </div>


        {tab === "PTI" ? (
          <PTIForm value={pti} onChange={setPti} patient={patient} evaluator={evaluator} evalDate={evalDate} priorities={priorities} others={others} />
        ) : tab === "CONSOLIDADO" ? (
          <ConsolidatedView stats={stats} priorities={priorities.length} others={others.length} />
        ) : tab === "PEI" ? (
          <PeiView
            priorities={priorities}
            others={others}
            sessions={sessions}
            onChange={upsertSession}
            hasEval={!!evalId}
          />
        ) : tab === "EVOLUÇÃO" ? (
          <EvolutionView evaluations={allEvaluations} onSelect={loadEvaluation} />
        ) : (
          <AgeSheet age={tab as AgeRange} answers={answers} onAnswer={setAnswer} />
        )}
      </main>
    </div>
  );
}



function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "whitespace-nowrap shrink-0 border-r px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wide transition",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-paper text-foreground hover:bg-muted",
      )}
    >
      {children}
    </button>

  );
}

function AgeSheet({
  age,
  answers,
  onAnswer,
}: {
  age: AgeRange;
  answers: Answers;
  onAnswer: (k: string, v: Answer) => void;
}) {
  // Group items per area for this age
  const perArea = useMemo(() => {
    const m = new Map<Area, typeof ITEMS>();
    for (const a of AREAS) m.set(a, ITEMS.filter((i) => i.area === a && i.age_range === age));
    return m;
  }, [age]);

  return (
    <div className="sheet overflow-hidden rounded-b-md">
      {/* Header row: 5 area titles (like row 12 in AV) */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {AREAS.map((area) => (
          <div
            key={area}
            className="grid-cell bg-primary px-3 py-2 text-center text-[11px] font-bold uppercase tracking-widest text-primary-foreground"
          >
            {AREA_TITLE[area]}
          </div>
        ))}
      </div>
      {/* Sub header row: age label per area */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {AREAS.map((area) => (
          <div
            key={area}
            className="grid-cell bg-muted px-3 py-1.5 text-[11px] font-semibold text-muted-foreground"
          >
            {area === "DESENV MOTOR" ? "Desenvolvimento Motor" : area.charAt(0) + area.slice(1).toLowerCase()} —{" "}
            {ageLabel(age)}
          </div>
        ))}
      </div>


      {/* Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {AREAS.map((area) => {
          const items = perArea.get(area) || [];
          const answered = items.filter((i) => answers[itemKey(i)]).length;
          const points = items.reduce((sum, i) => {
            const s = scoreOf(answers[itemKey(i)]);
            return sum + (s ?? 0);
          }, 0);
          return (
            <div key={area} className="grid-cell flex flex-col bg-paper">
              {items.length === 0 ? (
                <div className="p-3 text-xs italic text-muted-foreground">Sem itens nesta faixa.</div>
              ) : (
                <ul className="divide-y">
                  {items.map((it) => {
                    const key = itemKey(it);
                    const cur = answers[key];
                    return (
                      <li key={key} className="p-2.5">
                        <div className="mb-1.5 text-xs leading-snug">
                          <span className="mr-1 font-mono text-[10px] text-muted-foreground">
                            #{it.num}
                          </span>
                          {it.text}
                        </div>
                        <div className="grid grid-cols-4 gap-1">
                          {ANSWERS.map((a) => (
                            <AnswerChip key={a} value={a} active={cur === a} onClick={() => onAnswer(key, a)} />
                          ))}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
              <div className="mt-auto flex items-center justify-between border-t bg-muted/60 px-3 py-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>Total de acertos</span>
                <span className="font-mono text-foreground">
                  {points.toString().replace(".", ",")} · {answered}/{items.length}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnswerChip({
  value,
  active,
  onClick,
}: {
  value: Answer;
  active: boolean;
  onClick: () => void;
}) {
  const activeCls: Record<Answer, string> = {
    Sim: "bg-sim text-sim-foreground border-sim",
    "Às vezes": "bg-asvezes text-asvezes-foreground border-asvezes",
    Não: "bg-nao text-nao-foreground border-nao",
    NA: "bg-na text-na-foreground border-na",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-sm border px-1.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition",
        active ? activeCls[value] : "border-border bg-paper text-foreground hover:bg-muted",
      )}
    >
      {value}
    </button>
  );
}

function ConsolidatedView({
  stats,
  priorities,
  others,
}: {
  stats: ReturnType<typeof computeStats>;
  priorities: number;
  others: number;
}) {
  return (

    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Objetivos prioritários (Às vezes)" value={priorities} tone="warn" />
        <Stat label="Demais objetivos (Não)" value={others} tone="danger" />
        <Stat
          label="Áreas com pontuação"
          value={stats.filter((s) => s.answered > 0).length}
          tone="ok"
        />
      </div>

      <div className="sheet overflow-hidden rounded-md">
        <div className="border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground">
          Áreas de Desenvolvimento — % de acertos
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="grid-cell px-3 py-2 text-left">Área</th>
                {AGE_RANGES.map((a) => (
                  <th key={a} className="grid-cell px-3 py-2 text-center">
                    {ageLabel(a).replace(" anos", "").replace(" ano", "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-paper">
              {AREAS.map((area) => (
                <tr key={area} className="border-t">
                  <td className="grid-cell px-3 py-2 font-semibold whitespace-nowrap">{AREA_TITLE[area]}</td>
                  {AGE_RANGES.map((age) => {
                    const s = stats.find((x) => x.area === area && x.age === age);
                    if (!s || !s.answered) {
                      return (
                        <td key={age} className="grid-cell px-3 py-2 text-center text-muted-foreground">
                          —
                        </td>
                      );
                    }
                    const ok = s.percent >= 80;
                    return (
                      <td
                        key={age}
                        className={cn(
                          "grid-cell px-2 py-2 text-center font-mono text-sm font-bold",
                          ok ? "bg-sim/25 text-foreground" : "bg-nao/20 text-foreground",
                        )}
                        title={ok ? "≥ 80% — adequado" : "< 80% — priorizar"}
                      >
                        {s.percent}%
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t bg-muted/40 px-4 py-2 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm bg-sim/60" />≥ 80% desempenho adequado</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm bg-nao/50" />&lt; 80% priorizar objetivos</span>
        </div>

      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "warn" | "danger" | "ok";
}) {
  const cls = {
    warn: "border-asvezes/40 bg-asvezes/10",
    danger: "border-nao/40 bg-nao/10",
    ok: "border-sim/40 bg-sim/10",
  }[tone];
  return (
    <div className={cn("sheet rounded-md p-4", cls)}>
      <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-mono text-3xl font-bold">{value}</div>
    </div>
  );
}

function PeiView({
  priorities,
  others,
  sessions,
  onChange,
  hasEval,
}: {
  priorities: Item[];
  others: Item[];
  sessions: Record<string, PeiSessionRow>;
  onChange: (item: Item, patch: Partial<PeiSessionRow>) => void;
  hasEval: boolean;
}) {
  const grouped = useMemo(() => {
    const byArea = new Map<Area, { priority: Item[]; other: Item[] }>();
    for (const a of AREAS) byArea.set(a, { priority: [], other: [] });
    for (const it of priorities) byArea.get(it.area)!.priority.push(it);
    for (const it of others) byArea.get(it.area)!.other.push(it);
    return byArea;
  }, [priorities, others]);

  const totalPriority = priorities.length;
  const totalOther = others.length;

  return (
    <div className="space-y-4">
      <div className="rounded-sm border border-primary/30 bg-primary/5 px-3 py-2 text-[12px] text-foreground">
        <strong>Plano de Ensino Individualizado (PEI).</strong> Registre cada sessão de
        intervenção nos objetivos <em>prioritários</em> (respostas <em>Às vezes</em>) e nos
        <em> demais objetivos</em> (respostas <em>Não</em>). O % de acertos é calculado
        automaticamente — ≥ 80% indica domínio do objetivo.
        {!hasEval && (
          <div className="mt-1 text-nao">
            Salve a avaliação primeiro para poder registrar sessões.
          </div>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Objetivos prioritários" value={totalPriority} tone="warn" />
        <Stat label="Demais objetivos" value={totalOther} tone="danger" />
        <Stat
          label="Sessões registradas"
          value={Object.keys(sessions).length}
          tone="ok"
        />
      </div>

      {AREAS.map((area) => {
        const g = grouped.get(area)!;
        if (!g.priority.length && !g.other.length) return null;
        return (
          <section key={area} className="sheet overflow-hidden rounded-md">
            <div className="border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground">
              {AREA_TITLE[area]}
            </div>
            {g.priority.length > 0 && (
              <PeiGroup
                title="Objetivos Prioritários (0,5)"
                items={g.priority}
                sessions={sessions}
                onChange={onChange}
                disabled={!hasEval}
              />
            )}
            {g.other.length > 0 && (
              <PeiGroup
                title="Demais Objetivos (0)"
                items={g.other}
                sessions={sessions}
                onChange={onChange}
                disabled={!hasEval}
              />
            )}
          </section>
        );
      })}

      {totalPriority + totalOther === 0 && (
        <div className="sheet rounded-md p-6 text-center text-sm text-muted-foreground">
          Ainda não há objetivos identificados. Responda a avaliação nas abas de faixa etária.
        </div>
      )}
    </div>
  );
}

function PeiGroup({
  title,
  items,
  sessions,
  onChange,
  disabled,
}: {
  title: string;
  items: Item[];
  sessions: Record<string, PeiSessionRow>;
  onChange: (item: Item, patch: Partial<PeiSessionRow>) => void;
  disabled: boolean;
}) {
  return (
    <div>
      <div className="border-b bg-muted px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        {title} · {items.length}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-xs">
          <thead className="bg-muted/60 text-[10px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="grid-cell px-2 py-1.5 text-left w-24">Faixa</th>
              <th className="grid-cell px-2 py-1.5 text-left">Objetivo</th>
              <th className="grid-cell px-2 py-1.5 text-left w-48">Material</th>
              <th className="grid-cell px-2 py-1.5 text-left w-56">Atividade</th>
              <th className="grid-cell px-2 py-1.5 text-center w-20">Acertos</th>
              <th className="grid-cell px-2 py-1.5 text-center w-20">Tentativas</th>
              <th className="grid-cell px-2 py-1.5 text-center w-16">%</th>
              <th className="grid-cell px-2 py-1.5 text-center w-32">Ajuda</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {items.map((it) => {
              const key = itemKey(it);
              const s = sessions[key];
              const pct = s && s.tentativas > 0 ? Math.round((s.acertos / s.tentativas) * 100) : null;
              const ok = pct !== null && pct >= 80;
              return (
                <tr key={key} className="border-t align-top">
                  <td className="grid-cell px-2 py-1.5 text-[10px] font-semibold text-muted-foreground">
                    {ageLabel(it.age_range)}
                  </td>
                  <td className="grid-cell px-2 py-1.5">
                    <span className="mr-1 font-mono text-[10px] text-muted-foreground">#{it.num}</span>
                    {it.text}
                  </td>
                  <td className="grid-cell px-2 py-1.5 text-[11px] text-muted-foreground">{it.material || "—"}</td>
                  <td className="grid-cell px-2 py-1.5 text-[11px] text-muted-foreground">{it.atividade || "—"}</td>
                  <td className="grid-cell px-1 py-1">
                    <input
                      type="number"
                      min={0}
                      disabled={disabled}
                      value={s?.acertos ?? ""}
                      onChange={(e) => onChange(it, { acertos: Number(e.target.value) || 0 })}
                      className="h-7 w-full rounded-sm border border-border bg-paper px-1 text-center text-xs disabled:opacity-50"
                    />
                  </td>
                  <td className="grid-cell px-1 py-1">
                    <input
                      type="number"
                      min={0}
                      disabled={disabled}
                      value={s?.tentativas ?? ""}
                      onChange={(e) => onChange(it, { tentativas: Number(e.target.value) || 0 })}
                      className="h-7 w-full rounded-sm border border-border bg-paper px-1 text-center text-xs disabled:opacity-50"
                    />
                  </td>
                  <td
                    className={cn(
                      "grid-cell px-2 py-1.5 text-center font-mono font-bold",
                      pct === null ? "text-muted-foreground" : ok ? "bg-sim/25" : "bg-nao/20",
                    )}
                  >
                    {pct === null ? "—" : `${pct}%`}
                  </td>
                  <td className="grid-cell px-1 py-1">
                    <select
                      disabled={disabled}
                      value={s?.ajuda ?? "Independente"}
                      onChange={(e) => onChange(it, { ajuda: e.target.value as Ajuda })}
                      className="h-7 w-full rounded-sm border border-border bg-paper px-1 text-xs disabled:opacity-50"
                    >
                      {AJUDA_OPTIONS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


/* ----------------------- PTI Narrative form ----------------------- */

function PTIForm({
  value,
  onChange,
  patient,
  evaluator,
  evalDate,
  priorities,
  others,
}: {
  value: PTINarrative;
  onChange: (v: PTINarrative) => void;
  patient: Patient;
  evaluator: string;
  evalDate: string;
  priorities: Item[];
  others: Item[];
}) {
  const set = <K extends keyof PTINarrative>(k: K, v: PTINarrative[K]) =>
    onChange({ ...value, [k]: v });

  const objectives = value.objectives ?? [];
  const behaviors = value.behavior_problems ?? [];
  const selectedDiagnoses = value.diagnoses ?? [];
  const otherDiagnosis = value.diagnoses_other || (!selectedDiagnoses.length ? value.diagnosis ?? "" : "");

  const updateDiagnoses = (nextDiagnoses: string[], nextOtherDiagnosis = otherDiagnosis) => {
    onChange({
      ...value,
      diagnoses: nextDiagnoses,
      diagnoses_other: nextOtherDiagnosis,
      diagnosis: resolveClinicalDiagnoses({
        diagnoses: nextDiagnoses,
        otherDiagnosis: nextOtherDiagnosis,
        legacyDiagnosis: value.diagnosis,
      }),
    });
  };
  const addDiagnosis = (diagnosis: string) => {
    if (!diagnosis || selectedDiagnoses.includes(diagnosis)) return;
    updateDiagnoses([...selectedDiagnoses, diagnosis]);
  };
  const removeDiagnosis = (diagnosis: string) => updateDiagnoses(selectedDiagnoses.filter((item) => item !== diagnosis));

  const setObj = (i: number, patch: Partial<PTIObjective>) => {
    const next = objectives.slice();
    next[i] = { ...next[i], ...patch };
    set("objectives", next);
  };
  const addObj = () => set("objectives", [...objectives, { objetivo: "", atividade: "", material: "" }]);
  const rmObj = (i: number) => set("objectives", objectives.filter((_, idx) => idx !== i));
  const setObjectivesFromCatalog = (selectedOptions: ObjectiveCatalogOption[]) => {
    const next = appendUniqueObjectives(objectives, selectedOptions);
    const added = countPopulatedObjectives(next) - countPopulatedObjectives(objectives);
    if (!added) {
      toast.info("Os objetivos selecionados já constam no PTI.");
      return false;
    }
    set("objectives", next);
    toast.success(`${added} ${added === 1 ? "objetivo adicionado" : "objetivos adicionados"} ao PTI`);
    return true;
  };

  const setBeh = (i: number, v: string) => {
    const next = behaviors.slice();
    next[i] = v;
    set("behavior_problems", next);
  };
  const addBeh = () => set("behavior_problems", [...behaviors, ""]);
  const rmBeh = (i: number) => set("behavior_problems", behaviors.filter((_, idx) => idx !== i));

  const fillFromPortage = () => {
    const objs: PTIObjective[] = priorities.slice(0, 12).map((it) => ({
      objetivo: it.text,
      atividade: it.atividade || "",
      material: it.material || "",
    }));
    if (!objs.length) {
      toast.error("Nenhum objetivo prioritário. Marque itens como 'Às vezes' na avaliação.");
      return;
    }
    set("objectives", objs);
    toast.success(`${objs.length} objetivos preenchidos a partir da avaliação`);
  };

  return (
    <div className="space-y-5">
      <div className="rounded-sm border border-primary/30 bg-primary/5 px-3 py-2 text-[12px]">
        Preencha os campos abaixo. Ao gerar o <strong>PDF do PTI</strong>, o documento sairá
        idêntico ao modelo institucional (Dados do paciente · História clínica · Objetivos por área ·
        Comportamentos problemas · Considerações · Entrega/Assinatura).
        {others.length > 0 && <span className="ml-1 text-muted-foreground">· {others.length} demais objetivos disponíveis</span>}
      </div>

      <section className="sheet rounded-md">
        <div className="border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground">
          Dados do Paciente (complementares)
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <Field label="Nome"><Input value={patient.name} readOnly className="bg-muted" /></Field>
          <Field label="Data de nascimento">
            <Input value={patient.birth_date ?? ""} readOnly className="bg-muted" />
          </Field>
          <Field label="Nome da mãe">
            <Input value={value.mother_name ?? ""} onChange={(e) => set("mother_name", e.target.value)} />
          </Field>
          <Field label="Nome do pai">
            <Input value={value.father_name ?? ""} onChange={(e) => set("father_name", e.target.value)} />
          </Field>
          <Field label="Diagnóstico (CID)">
            <div className="space-y-2">
              <select name="clinical-diagnosis-picker" className="flex h-9 w-full rounded-sm border border-input bg-background px-3 py-1 text-sm shadow-xs" value="" onChange={(event) => addDiagnosis(event.target.value)}>
                <option value="">Adicionar diagnóstico CID ao registro</option>
                {CLINICAL_DIAGNOSIS_GROUPS.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((diagnosis) => <option key={diagnosis} value={diagnosis}>{diagnosis}</option>)}
                  </optgroup>
                ))}
              </select>
              {selectedDiagnoses.length > 0 && (
                <div className="flex flex-wrap gap-1.5" aria-label="Diagnósticos selecionados">
                  {selectedDiagnoses.map((diagnosis) => (
                    <span key={diagnosis} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs text-foreground">
                      {diagnosis}
                      <button type="button" aria-label={`Remover ${diagnosis}`} onClick={() => removeDiagnosis(diagnosis)} className="font-bold text-primary">×</button>
                    </span>
                  ))}
                </div>
              )}
              <Input
                name="clinical-diagnoses-other"
                placeholder="Outro(s) diagnóstico(s) ou CID(s), se necessário"
                value={otherDiagnosis}
                onChange={(event) => updateDiagnoses(selectedDiagnoses, event.target.value)}
              />
              <p className="text-[11px] leading-snug text-muted-foreground">Selecione quantos diagnósticos forem necessários e/ou informe outros já definidos em laudo ou prontuário. O catálogo apoia somente o registro clínico.</p>
            </div>
          </Field>
          <Field label="Início de implementação">
            <Input type="date" value={value.start_date ?? ""} onChange={(e) => set("start_date", e.target.value)} />
          </Field>
          <Field label="Profissional responsável">
            <Input placeholder={evaluator || "Seu nome"} value={value.professional ?? ""} onChange={(e) => set("professional", e.target.value)} />
          </Field>
          <Field label="Reavaliação dos objetivos">
            <Input value={value.revaluation ?? ""} onChange={(e) => set("revaluation", e.target.value)} placeholder="Semestral" />
          </Field>
        </div>
      </section>

      <ClinicalHistorySection value={value} onChange={onChange} patient={patient} />

      <section className="sheet rounded-md">
        <div className="flex flex-wrap items-center gap-2 border-b bg-primary px-4 py-2 text-primary-foreground">
          <span className="text-sm font-bold uppercase tracking-widest">Objetivos por Área</span>
          <span className="text-xs font-semibold text-primary-foreground/95">Planejamento terapêutico por especialidade</span>
          <div className="ml-auto flex flex-wrap gap-2">
            <Button size="sm" variant="secondary" onClick={fillFromPortage} type="button">
              Da avaliação ({priorities.length})
            </Button>
            <Button size="sm" variant="secondary" onClick={addObj} type="button">
              <Plus className="h-3.5 w-3.5 mr-1" /> Objetivo
            </Button>
          </div>
        </div>
        <ObjectiveCatalogPicker existingObjectives={objectives} onAdd={setObjectivesFromCatalog} />
        <div className="divide-y">
          {objectives.map((o, i) => (
            <div key={i} className="grid gap-3 p-4 sm:grid-cols-[1fr_1fr_1fr_auto]">
              <Field label={`Objetivo ${i + 1}`}>
                <Textarea rows={3} value={o.objetivo} onChange={(e) => setObj(i, { objetivo: e.target.value })} />
              </Field>
              <Field label="Atividade">
                <Textarea rows={3} value={o.atividade} onChange={(e) => setObj(i, { atividade: e.target.value })} />
              </Field>
              <Field label="Material">
                <Textarea rows={3} value={o.material} onChange={(e) => setObj(i, { material: e.target.value })} />
              </Field>
              <div className="flex sm:items-end">
                <Button size="sm" variant="ghost" onClick={() => rmObj(i)} type="button">
                  <Trash2 className="h-4 w-4 text-nao" />
                </Button>
              </div>
            </div>
          ))}
          {!objectives.length && (
            <div className="p-6 text-center text-sm text-muted-foreground">
              Escolha um template acima, use os objetivos da avaliação Portage ou clique em "Objetivo".
            </div>
          )}
        </div>
      </section>

      <section className="sheet rounded-md">
        <div className="flex flex-wrap items-center gap-2 border-b bg-primary px-4 py-2 text-primary-foreground">
          <span className="text-sm font-bold uppercase tracking-widest">Comportamentos Problemas Listados</span>
          <div className="ml-auto flex flex-wrap gap-2">
            <TemplatePicker
              label="Template"
              options={BEHAVIORS_TEMPLATES.map((t) => ({ id: t.id, label: t.label, summary: t.summary }))}
              onPick={(id) => {
                const t = BEHAVIORS_TEMPLATES.find((x) => x.id === id);
                if (t) {
                  set("behavior_problems", [...t.items]);
                  toast.success(`Template "${t.label}" aplicado`);
                }
              }}
            />
            <Button size="sm" variant="secondary" onClick={addBeh} type="button">
              <Plus className="h-3.5 w-3.5 mr-1" /> Item
            </Button>
          </div>
        </div>
        <div className="space-y-2 p-4">
          {behaviors.map((b, i) => (
            <div key={i} className="flex gap-2">
              <Input value={b} onChange={(e) => setBeh(i, e.target.value)} placeholder={`Comportamento ${i + 1}`} />
              <Button size="sm" variant="ghost" onClick={() => rmBeh(i)} type="button">
                <Trash2 className="h-4 w-4 text-nao" />
              </Button>
            </div>
          ))}
          {!behaviors.length && (
            <div className="text-sm text-muted-foreground">Escolha um template acima ou adicione itens.</div>
          )}
        </div>
      </section>

      <section className="sheet rounded-md">
        <div className="flex flex-wrap items-center gap-2 border-b bg-primary px-4 py-2 text-primary-foreground">
          <span className="text-sm font-bold uppercase tracking-widest">Considerações e Plano de Intervenção</span>
          <div className="ml-auto">
            <TemplatePicker
              label="Template"
              options={CONCLUSION_TEMPLATES.map((t) => ({ id: t.id, label: t.label, summary: t.summary }))}
              onPick={(id) => {
                const t = CONCLUSION_TEMPLATES.find((x) => x.id === id);
                if (t) {
                  set("conclusion", t.text);
                  toast.success(`Template "${t.label}" aplicado`);
                }
              }}
            />
          </div>
        </div>
        <div className="space-y-3 p-4">
          <Textarea
            rows={8}
            value={value.conclusion ?? ""}
            onChange={(e) => set("conclusion", e.target.value)}
            placeholder="Escolha um template acima ou deixe em branco para usar o texto padrão institucional."
          />
          <Field label="Referência bibliográfica">
            <Input
              value={value.reference ?? ""}
              onChange={(e) => set("reference", e.target.value)}
              placeholder="Williams, L. C. A., & Aiello, A. L. R. (2001)..."
            />
          </Field>
        </div>
      </section>


      <section className="sheet rounded-md">
        <div className="border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground">
          Entrega - Devolutiva e Orientação
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <Field label="Data da devolutiva">
            <Input type="date" value={value.delivery_date ?? evalDate} onChange={(e) => set("delivery_date", e.target.value)} />
          </Field>
          <Field label="Responsável">
            <Input value={value.delivery_responsible ?? ""} onChange={(e) => set("delivery_responsible", e.target.value)} placeholder="Nome de quem entrega a devolutiva" />
          </Field>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
      {children}
    </div>
  );
}

function ObjectiveCatalogPicker({
  existingObjectives,
  onAdd,
}: {
  existingObjectives: PTIObjective[];
  onAdd: (selectedOptions: ObjectiveCatalogOption[]) => boolean;
}) {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");
  const optionsByArea = useMemo(
    () => PTI_OBJECTIVE_AREAS.map((area) => ({
      area,
      options: OBJECTIVE_CATALOG.filter((option) => option.area === area),
    })),
    [],
  );
  const visibleAreas = optionsByArea
    .map(({ area, options }) => ({
      area,
      options: options.filter((option) => {
        if (!normalizedSearch) return true;
        return [option.objetivo, option.atividade, option.material, option.templateLabel, option.templateSummary]
          .join(" ")
          .toLocaleLowerCase("pt-BR")
          .includes(normalizedSearch);
      }),
    }))
    .filter(({ options }) => options.length > 0);

  const addObjective = (option: ObjectiveCatalogOption) => {
    if (!isObjectiveIncluded(existingObjectives, option)) {
      onAdd([option]);
    }
  };

  return (
    <div className="border-b bg-muted/20">
      <div className="space-y-3 px-4 py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <ListChecks className="h-4 w-4 text-primary" />
              Catálogo de objetivos clínicos
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Marque um objetivo para incluí-lo automaticamente no PTI. Objetivos já incluídos permanecem marcados.
            </p>
          </div>
        </div>

        <div className="relative w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="pl-9"
              placeholder="Buscar por objetivo, atividade, material ou subtema"
              aria-label="Buscar objetivos clínicos"
            />
        </div>
      </div>

      {visibleAreas.length ? (
        <Accordion type="multiple" className="border-t bg-paper" defaultValue={[]}>
          {visibleAreas.map(({ area, options }) => {
            const selectedInArea = options.filter((option) => isObjectiveIncluded(existingObjectives, option)).length;
            const templates = Array.from(new Set(options.map((option) => option.templateId))).map((templateId) => ({
              id: templateId,
              label: options.find((option) => option.templateId === templateId)?.templateLabel ?? "",
              summary: options.find((option) => option.templateId === templateId)?.templateSummary ?? "",
              options: options.filter((option) => option.templateId === templateId),
            }));
            return (
              <AccordionItem key={area} value={area} className="border-b-0 border-t first:border-t-0">
                <AccordionTrigger className="px-4 py-3 no-underline hover:bg-muted/50 hover:no-underline">
                  <span className="flex items-center gap-2 text-left">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-foreground">{area}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">{options.length} objetivos</span>
                    {selectedInArea > 0 && <span className="rounded-full bg-sim/15 px-2 py-0.5 text-[10px] font-bold text-foreground">{selectedInArea} incluído(s)</span>}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <Accordion type="multiple" className="space-y-2" defaultValue={[]}>
                    {templates.map((template) => {
                      const selectedInTemplate = template.options.filter((option) => isObjectiveIncluded(existingObjectives, option)).length;
                      return (
                        <AccordionItem key={template.id} value={template.id} className="overflow-hidden rounded-sm border bg-muted/20">
                          <AccordionTrigger className="px-3 py-2.5 no-underline hover:bg-primary/5 hover:no-underline">
                            <span className="flex min-w-0 items-center gap-2 text-left">
                              <span className="truncate text-xs font-bold text-foreground">{template.label}</span>
                              <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">{template.options.length}</span>
                              {selectedInTemplate > 0 && <span className="shrink-0 rounded-full bg-sim/15 px-2 py-0.5 text-[10px] font-bold text-foreground">{selectedInTemplate} incluído(s)</span>}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            <div className="border-t bg-muted/50 px-3 py-2">
                              <p className="text-[11px] leading-relaxed text-muted-foreground">{template.summary}</p>
                            </div>
                            <div className="divide-y bg-paper">
                              {template.options.map((option) => {
                                const checked = isObjectiveIncluded(existingObjectives, option);
                                return (
                                  <label
                                    key={option.id}
                                    htmlFor={option.id}
                                    className={cn(
                                      "flex cursor-pointer gap-3 px-3 py-3 transition hover:bg-primary/5",
                                      checked && "bg-primary/5",
                                    )}
                                  >
                                    <input
                                      id={option.id}
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() => addObjective(option)}
                                      disabled={checked}
                                      className="mt-1 h-4 w-4 shrink-0 accent-primary"
                                    />
                                    <span className="min-w-0">
                                      <span className="block text-xs font-semibold leading-relaxed text-foreground">{option.objetivo}</span>
                                      <span className="mt-1 block text-[11px] leading-relaxed text-muted-foreground"><strong>Atividade:</strong> {option.atividade}</span>
                                      <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground"><strong>Material:</strong> {option.material}</span>
                                    </span>
                                  </label>
                                );
                              })}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      ) : (
        <div className="border-t bg-paper px-4 py-8 text-center text-sm text-muted-foreground">
          Nenhum objetivo encontrado para a busca informada.
        </div>
      )}
    </div>
  );
}

function TemplatePicker({
  label,
  options,
  onPick,
}: {
  label: string;
  options: { id: string; label: string; summary?: string }[];
  onPick: (id: string) => void;
}) {
  return (
    <select
      className="h-8 rounded-sm border border-primary-foreground/30 bg-primary-foreground/10 px-2 text-xs font-medium text-primary-foreground hover:bg-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 max-w-[220px]"
      value=""
      onChange={(e) => {
        const v = e.target.value;
        if (v) {
          onPick(v);
          e.target.value = "";
        }
      }}
      title={label}
    >
      <option value="" className="text-foreground">
        ✨ {label}
      </option>
      {/* Group options by area if they have one */}
      {(() => {
        const groups: Record<string, typeof options> = {};
        const others: typeof options = [];

        options.forEach((o) => {
          const area = (o as any).area;
          if (area) {
            if (!groups[area]) groups[area] = [];
            groups[area].push(o);
          } else {
            others.push(o);
          }
        });

        return (
          <>
            {Object.entries(groups).map(([area, items]) => (
              <optgroup key={area} label={area} className="text-foreground font-bold">
                {items.map((o) => (
                  <option key={o.id} value={o.id} className="text-foreground font-normal" title={o.summary}>
                    {o.label}
                  </option>
                ))}
              </optgroup>
            ))}
            {others.length > 0 && Object.keys(groups).length > 0 && (
              <optgroup label="Outros" className="text-foreground font-bold">
                {others.map((o) => (
                  <option key={o.id} value={o.id} className="text-foreground font-normal" title={o.summary}>
                    {o.label}
                  </option>
                ))}
              </optgroup>
            )}
            {Object.keys(groups).length === 0 && others.map((o) => (
              <option key={o.id} value={o.id} className="text-foreground" title={o.summary}>
                {o.label}
              </option>
            ))}
          </>
        );
      })()}
    </select>
  );
}


function EvolutionView({
  evaluations,
  onSelect,
}: {
  evaluations: EvaluationRow[];
  onSelect: (e: EvaluationRow) => void;
}) {
  const chartData = useMemo(() => {
    const ordered = [...evaluations].sort((a, b) => new Date(a.evaluation_date).getTime() - new Date(b.evaluation_date).getTime());
    return ordered.map((e) => {
      const stats = computeStats((e.answers as Answers) || {});
      const row: Record<string, number | string> = {
        data: new Date(e.evaluation_date).toLocaleDateString("pt-BR"),
        rawDate: e.evaluation_date,
        id: e.id,
      };
      for (const area of AREAS) {
        const areaStats = stats.filter((s) => s.area === area && s.answered > 0);
        const avg = areaStats.length
          ? Math.round(areaStats.reduce((sum, s) => sum + s.percent, 0) / areaStats.length)
          : 0;
        row[area] = avg;
      }
      return row;
    });
  }, [evaluations]);

  const areaColors: Record<Area, string> = {
    SOCIALIZAÇÃO: "#F97316",
    LINGUAGEM: "#3B82F6",
    COGNIÇÃO: "#10B981",
    AUTOCUIDADOS: "#8B5CF6",
    "DESENV MOTOR": "#EF4444",
  };

  if (evaluations.length === 0) {
    return (
      <div className="sheet rounded-md p-8 text-center text-sm text-muted-foreground">
        Nenhuma avaliação salva ainda. Preencha e salve a primeira avaliação para acompanhar a evolução.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Total de avaliações" value={evaluations.length} tone="ok" />
        <Stat label="Primeira avaliação" value={evaluations.length} tone="warn" />
        <Stat label="Última avaliação" value={evaluations.length} tone="ok" />
      </div>

      <div className="sheet overflow-hidden rounded-md">
        <div className="border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground">
          Evolução por área (% de acertos médio)
        </div>
        <div className="h-80 w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="data" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} unit="%" />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 6 }}
                formatter={(value: any, name: string) => [`${value}%`, name]}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              {AREAS.map((area) => (
                <Line
                  key={area}
                  type="monotone"
                  dataKey={area}
                  stroke={areaColors[area]}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name={AREA_TITLE[area]}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="sheet overflow-hidden rounded-md">
        <div className="border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground">
          Histórico de avaliações
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="grid-cell px-4 py-2 text-left">Data</th>
                <th className="grid-cell px-4 py-2 text-left">Avaliador(a)</th>
                <th className="grid-cell px-4 py-2 text-left">Idade do paciente</th>
                <th className="grid-cell px-4 py-2 text-center">% média</th>
                <th className="grid-cell px-4 py-2 text-center">Itens respondidos</th>
                <th className="px-4 py-2 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="bg-paper">
              {evaluations.map((e) => {
                const stats = computeStats((e.answers as Answers) || {});
                const answered = stats.reduce((sum, s) => sum + s.answered, 0);
                const total = stats.reduce((sum, s) => sum + s.total, 0);
                const avg =
                  stats.filter((s) => s.answered > 0).length > 0
                    ? Math.round(
                        stats
                          .filter((s) => s.answered > 0)
                          .reduce((sum, s) => sum + s.percent, 0) /
                          stats.filter((s) => s.answered > 0).length
                      )
                    : 0;
                return (
                  <tr key={e.id} className="border-t hover:bg-muted/40">
                    <td className="grid-cell px-4 py-3 whitespace-nowrap">
                      {new Date(e.evaluation_date).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="grid-cell px-4 py-3">{e.evaluator_name || "—"}</td>
                    <td className="grid-cell px-4 py-3">{e.patient_age || "—"}</td>
                    <td className="grid-cell px-4 py-3 text-center font-mono font-bold">
                      <span className={cn("rounded-sm px-2 py-0.5", avg >= 80 ? "bg-sim/25" : "bg-nao/20")}>
                        {avg}%
                      </span>
                    </td>
                    <td className="grid-cell px-4 py-3 text-center">
                      {answered}/{total}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button size="sm" variant="ghost" onClick={() => onSelect(e)} className="text-primary">
                        Carregar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
