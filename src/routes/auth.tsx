import { createFileRoute, useNavigate } from "@tanstack/react-router";
/**
 * Direção de design: acesso clínico direto, com feedback explícito para login,
 * criação de conta e indisponibilidades de provedores externos.
 */
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FileSpreadsheet } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar — PTI Portage" },
      { name: "description", content: "Acesse sua conta para conduzir avaliações Portage e gerar o PTI em PDF." },
      { property: "og:title", content: "Entrar — PTI Portage" },
      { property: "og:description", content: "Acesse sua conta para conduzir avaliações Portage e gerar o PTI em PDF." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin, data: { full_name: name } },
        });
        if (error) throw error;
        if (data.session) {
          toast.success("Conta criada e sessão iniciada.");
          navigate({ to: "/dashboard", replace: true });
        } else {
          toast.success("Conta criada. Entre com seu e-mail e senha.");
          setMode("signin");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/dashboard", replace: true });
      }
    } catch (err: any) {
      toast.error(err?.message ?? "Erro ao autenticar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-header-strip">
        <div className="mx-auto max-w-6xl px-6 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
          PORTAGE · Plano de Ensino Individualizado
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                Inventário
              </div>
              <div className="font-bold tracking-tight">PORTAGE</div>
            </div>
          </div>

          <div className="sheet rounded-md">
            <div className="border-b bg-muted px-5 py-3 text-sm font-semibold uppercase tracking-wide">
              {mode === "signin" ? "Entrar" : "Criar conta"}
            </div>
            <div className="p-5">
              <form onSubmit={submit} className="space-y-3">
                {mode === "signup" && (
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                )}
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="pw">Senha</Label>
                  <Input
                    id="pw"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {mode === "signin" ? "Entrar" : "Criar conta"}
                </Button>
              </form>
              <button
                type="button"
                className="mt-4 w-full text-sm text-primary hover:underline"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              >
                {mode === "signin" ? "Não tem conta? Criar" : "Já tem conta? Entrar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
