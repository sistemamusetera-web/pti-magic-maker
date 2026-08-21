import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { 
  FileSpreadsheet, 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Shield, 
  Users,
  Search,
  Check,
  X,
  Mail
} from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_authenticated/admin")({
  beforeLoad: ({ context }) => {
    if (context.role !== "admin") {
      throw new Error("Acesso negado: Somente administradores.");
    }
  },
  component: AdminPage,
});

interface ApprovalRecord {
  id: string;
  user_id: string;
  email: string;
  is_approved: boolean;
  created_at: string;
}

function AdminPage() {
  const navigate = useNavigate();
  const [records, setRecords] = useState<ApprovalRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("user_approvals")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) toast.error(error.message);
    else setRecords(data as ApprovalRecord[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const toggleApproval = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("user_approvals")
      .update({ is_approved: !currentStatus })
      .eq("id", id);

    if (error) {
      toast.error("Erro ao atualizar status");
    } else {
      toast.success(currentStatus ? "Acesso revogado" : "Usuário aprovado");
      load();
    }
  };

  const filtered = records.filter(r => 
    r.email.toLowerCase().includes(search.toLowerCase())
  );

  const pending = filtered.filter(r => !r.is_approved);
  const approved = filtered.filter(r => r.is_approved);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/dashboard" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <Shield className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                Painel
              </div>
              <div className="font-bold tracking-tight">ADMINISTRAÇÃO</div>
            </div>
          </Link>
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <div className="bg-header-strip">
        <div className="mx-auto max-w-6xl px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground sm:px-6">
          Gestão de Usuários e Acessos
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Aprovação de Usuários
            </h1>
            <p className="text-muted-foreground">Gerencie quem tem permissão para usar o sistema.</p>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar por e-mail..." 
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Pending Section */}
            {pending.length > 0 && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Aguardando Aprovação ({pending.length})
                </h2>
                <div className="sheet rounded-md overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 text-left">E-mail</th>
                        <th className="px-4 py-3 text-left">Data de Cadastro</th>
                        <th className="px-4 py-3 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {pending.map((r) => (
                        <tr key={r.id} className="hover:bg-muted/30">
                          <td className="px-4 py-4 font-medium flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            {r.email}
                          </td>
                          <td className="px-4 py-4 text-muted-foreground text-xs">
                            {new Date(r.created_at).toLocaleString('pt-BR')}
                          </td>
                          <td className="px-4 py-4 text-right">
                            <Button 
                              size="sm" 
                              onClick={() => toggleApproval(r.id, r.is_approved)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Check className="mr-1 h-3 w-3" />
                              Aprovar
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Approved Section */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Usuários Aprovados ({approved.length})
              </h2>
              <div className="sheet rounded-md overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 text-left">E-mail</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {approved.map((r) => (
                      <tr key={r.id} className="hover:bg-muted/30">
                        <td className="px-4 py-4 font-medium">{r.email}</td>
                        <td className="px-4 py-4">
                          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                            Aprovado
                          </Badge>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <Button 
                            variant="ghost"
                            size="sm" 
                            onClick={() => toggleApproval(r.id, r.is_approved)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="mr-1 h-3 w-3" />
                            Revogar Acesso
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {approved.length === 0 && (
                      <tr>
                        <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                          Nenhum usuário aprovado encontrado.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

const Clock = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
