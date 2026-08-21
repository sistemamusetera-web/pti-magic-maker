/**
 * Direção de design: produto clínico operacional — leitura rápida, ações explícitas
 * e linguagem profissional orientada à geração do PTI.
 */
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileSpreadsheet, FileText, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PTI Portage — Avaliação e Plano Terapêutico Individual" },
      {
        name: "description",
        content:
          "Aplicativo clínico para conduzir o Inventário Portage Operacionalizado e gerar o PTI em PDF a partir da avaliação.",
      },
      { property: "og:title", content: "PTI Portage — Avaliação e PTI em PDF" },
      {
        property: "og:description",
        content: "Marque cada item Sim/Não/Às vezes/NA e gere o PTI completo com material e atividades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    try {
      supabase.auth
        .getSession()
        .then(({ data }) => {
          if (data.session) navigate({ to: "/dashboard", replace: true });
          else setChecking(false);
        })
        .catch(() => setChecking(false));
    } catch {
      // A cópia pode ser revisada antes de receber as variáveis do Supabase.
      setChecking(false);
    }
  }, [navigate]);

  if (checking) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                Inventário
              </div>
              <div className="font-bold tracking-tight">PORTAGE</div>
            </div>
          </div>
          <Link to="/auth">
            <Button size="sm">Entrar</Button>
          </Link>
        </div>
      </header>

      {/* Orange PORTAGE strip mirrors the spreadsheet header */}
      <div className="bg-header-strip">
        <div className="mx-auto max-w-6xl px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-primary-foreground sm:px-6">
          PORTAGE · Plano de Ensino Individualizado
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <CheckCircle2 className="h-3.5 w-3.5" /> Baseado no Inventário Portage Operacionalizado
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Avalie, pontue e gere o <span className="text-primary">PTI em PDF</span> sem digitar.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Cadastre o paciente, preencha a avaliação em cliques (Sim · Não · Às vezes · NA) e receba um Plano
              Terapêutico Individual clínico, com objetivos, material e atividades já mapeados.
            </p>
            <div className="mt-7 flex gap-3">
              <Link to="/auth">
                <Button size="lg">Começar avaliação</Button>
              </Link>
            </div>
          </div>

          {/* Faux spreadsheet preview */}
          <div className="sheet overflow-hidden rounded-md">
            <div className="flex items-center gap-2 border-b bg-primary px-3 py-2 text-primary-foreground">
              <FileSpreadsheet className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Portage · AV</span>
            </div>
            <table className="w-full text-[11px]">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="grid-cell px-2 py-1 text-left">Socialização — 0 a 1 ano</th>
                  <th className="grid-cell w-24 px-2 py-1">Resposta</th>
                  <th className="px-2 py-1 w-12">Pts</th>
                </tr>
              </thead>
              <tbody className="bg-paper">
                {[
                  ["01 Observa uma pessoa movimentando-se…", "Às vezes", "0,5"],
                  ["02 Sorri em response à atenção do adulto", "Sim", "1"],
                  ["03 Vocaliza em response à atenção", "Não", "0"],
                  ["04 Olha para sua própria mão…", "NA", "-"],
                  ["05 Responde a seu círculo familiar…", "Sim", "1"],
                ].map(([t, a, p]) => (
                  <tr key={t}>
                    <td className="grid-cell px-2 py-1">{t}</td>
                    <td className="grid-cell px-2 py-1 text-center font-medium">{a}</td>
                    <td className="px-2 py-1 text-center border-b">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Users, title: "Pacientes", desc: "Cadastro rápido com nome, nascimento, responsável e diagnóstico." },
            {
              icon: FileSpreadsheet,
              title: "Planilha em cliques",
              desc: "5 áreas × 6 faixas etárias. Marque com um toque e a pontuação é calculada.",
            },
            {
              icon: FileText,
              title: "PTI em PDF",
              desc: "Objetivos prioritários e demais, com material e atividade, prontos para imprimir.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="sheet rounded-md p-5">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="mt-16 border-t bg-paper py-6 text-center text-xs text-muted-foreground">
        Baseado no Inventário Portage Operacionalizado.
      </footer>
    </div>
  );
}
