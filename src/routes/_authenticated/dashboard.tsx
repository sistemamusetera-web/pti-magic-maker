import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { confirmAndDeleteLatestPatientPti } from "@/lib/pti-deletion";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { FileSpreadsheet, LogOut, Plus, User, FileText, ArrowRight, Shield, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Pacientes — PTI Portage" },
      { name: "description", content: "Gerencie pacientes e acesse avaliações Portage para gerar PTIs em PDF." },
      { property: "og:title", content: "Pacientes — PTI Portage" },
      { property: "og:description", content: "Gerencie pacientes e acesse avaliações Portage para gerar PTIs em PDF." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

interface Patient {
  id: string;
  name: string;
  birth_date: string | null;
  guardian: string | null;
  diagnosis: string | null;
  notes: string | null;
  created_at: string;
}

function Dashboard() {
  const navigate = useNavigate();
  const { role } = Route.useRouteContext();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", birth_date: "" });
  const [deletingPtiId, setDeletingPtiId] = useState<string | null>(null);


  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("patients")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setPatients(data as Patient[]);
    setLoading(false);
  };
  useEffect(() => {
    load();
  }, []);

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: session } = await supabase.auth.getUser();
    if (!session.user) return;
    const { error, data } = await supabase
      .from("patients")
      .insert({
        owner_id: session.user.id,
        name: form.name,
        birth_date: form.birth_date || null,
      })
      .select()
      .single();
    if (error) return toast.error(error.message);
    toast.success("Paciente cadastrado");
    setOpen(false);
    setForm({ name: "", birth_date: "" });
    navigate({ to: "/patients/$id", params: { id: (data as Patient).id } });
  };

  const deletePatientPti = async (patient: Patient) => {
    setDeletingPtiId(patient.id);
    try {
      const result = await confirmAndDeleteLatestPatientPti({
        confirm: (message) => window.confirm(message),
        patientName: patient.name,
        patientId: patient.id,
        dataSource: {
          findLatestEvaluation: async (patientId) => {
            const { data, error } = await supabase
              .from("evaluations")
              .select("id, pti_data")
              .eq("patient_id", patientId)
              .order("evaluation_date", { ascending: false })
              .limit(1)
              .maybeSingle();
            if (error) throw error;
            return data?.pti_data ? { evaluationId: data.id, ptiData: data.pti_data } : null;
          },
          clearPtiForEvaluation: async (evaluationId) => {
            const { error } = await supabase.from("evaluations").update({ pti_data: null }).eq("id", evaluationId);
            if (error) throw error;
          },
          deleteSessionsForEvaluation: async (evaluationId) => {
            const { error } = await supabase.from("pei_sessions").delete().eq("evaluation_id", evaluationId);
            if (error) throw error;
          },
          restorePtiForEvaluation: async (evaluationId, ptiData) => {
            const { error } = await supabase.from("evaluations").update({ pti_data: ptiData as Json }).eq("id", evaluationId);
            if (error) throw error;
          },
        },
      });
      if (result.status === "cancelled") return;
      if (result.status === "not_found") {
        return toast.info("Este paciente não possui PTI salvo na avaliação mais recente para excluir.");
      }
      toast.success("PTI mais recente e sessões vinculadas excluídos. O paciente e a avaliação foram mantidos.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível excluir o PTI.");
    } finally {
      setDeletingPtiId(null);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/dashboard" className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                Inventário
              </div>
              <div className="truncate font-bold tracking-tight">PORTAGE</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            {role === 'admin' && (
              <Link to="/admin">
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  <Shield className="mr-2 h-4 w-4" />
                  Painel de Administração
                </Button>
              </Link>
            )}
            <Button variant="ghost" size="sm" onClick={logout} className="shrink-0 px-2 sm:px-3">
              <LogOut className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>

      </header>
      <div className="bg-header-strip">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            Pacientes
          </span>
          <span className="text-xs text-primary-foreground/80">
            {patients.length} cadastrado{patients.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:items-center">
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold">Meus pacientes</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">Selecione um paciente para conduzir a avaliação Portage.</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="shrink-0 px-2 sm:px-4">
                <Plus className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Novo paciente</span>
                <span className="sm:hidden">Novo</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo paciente</DialogTitle>
              </DialogHeader>
              <form onSubmit={create} className="space-y-3">
                <div>
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="birth">Data de nascimento</Label>
                  <Input
                    id="birth"
                    type="date"
                    value={form.birth_date}
                    onChange={(e) => setForm({ ...form, birth_date: e.target.value })}
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Carregando…</p>
        ) : patients.length === 0 ? (
          <div className="sheet flex flex-col items-center rounded-md py-16 text-center">
            <User className="h-10 w-10 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Nenhum paciente cadastrado ainda.</p>
            <Button className="mt-4" onClick={() => setOpen(true)}>
              Cadastrar primeiro paciente
            </Button>
          </div>
        ) : (
          <>
            {/* Mobile: cards */}
            <div className="grid gap-3 sm:hidden">
              {patients.map((p) => (
                <div key={p.id} className="sheet rounded-md p-4">
                  <Link to="/patients/$id" params={{ id: p.id }} className="block hover:bg-muted/40">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate font-semibold">{p.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {p.birth_date ? new Date(p.birth_date).toLocaleDateString("pt-BR") : "Sem nascimento"}
                          {p.guardian ? ` · ${p.guardian}` : ""}
                        </div>
                        {p.diagnosis && (
                          <div className="mt-1 truncate text-xs text-muted-foreground">{p.diagnosis}</div>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                    </div>
                  </Link>
                  <Button type="button" size="sm" variant="ghost" className="mt-3 w-full text-destructive hover:text-destructive" disabled={deletingPtiId === p.id} onClick={() => deletePatientPti(p)}>
                    <Trash2 className="mr-1 h-4 w-4" />
                    {deletingPtiId === p.id ? "Excluindo PTI…" : "Excluir PTI mais recente"}
                  </Button>
                </div>
              ))}
            </div>
            {/* Desktop: table */}
            <div className="sheet hidden overflow-hidden rounded-md sm:block">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="grid-cell px-4 py-2 text-left">Paciente</th>
                      <th className="grid-cell px-4 py-2 text-left">Nascimento</th>
                      <th className="grid-cell px-4 py-2 text-left">Responsável</th>
                      <th className="grid-cell px-4 py-2 text-left">Diagnóstico</th>
                      <th className="px-4 py-2 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="bg-paper">
                    {patients.map((p) => (
                      <tr key={p.id} className="border-t hover:bg-muted/40">
                        <td className="grid-cell px-4 py-3 font-medium">{p.name}</td>
                        <td className="grid-cell px-4 py-3">
                          {p.birth_date ? new Date(p.birth_date).toLocaleDateString("pt-BR") : "—"}
                        </td>
                        <td className="grid-cell px-4 py-3">{p.guardian || "—"}</td>
                        <td className="grid-cell px-4 py-3">{p.diagnosis || "—"}</td>
                        <td className="px-4 py-3 text-right">
                          <Link to="/patients/$id" params={{ id: p.id }}>
                            <Button size="sm" variant="ghost" className="text-primary">
                              <FileText className="mr-1 h-4 w-4" />
                              Avaliar / PTI
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                          <Button type="button" size="sm" variant="ghost" className="ml-1 text-destructive hover:text-destructive" disabled={deletingPtiId === p.id} onClick={() => deletePatientPti(p)}>
                            <Trash2 className="mr-1 h-4 w-4" />
                            {deletingPtiId === p.id ? "Excluindo…" : "Excluir PTI mais recente"}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
