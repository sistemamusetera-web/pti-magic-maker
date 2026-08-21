import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Clock, LogOut } from "lucide-react";

export const Route = createFileRoute("/pending-approval")({
  component: PendingApproval,
});

function PendingApproval() {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <div className="min-h-screen bg-background flex flex-center items-center justify-center p-4">
      <div className="sheet max-w-md w-full rounded-md p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <Clock className="h-12 w-12 text-primary animate-pulse" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Acesso Pendente</h1>
          <p className="text-muted-foreground">
            Sua conta foi criada com sucesso, mas ainda precisa ser aprovada pelo administrador para acessar o sistema.
          </p>
        </div>

        <div className="bg-muted p-4 rounded text-sm text-left border-l-4 border-primary">
          <p className="font-semibold mb-1">O que acontece agora?</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>O administrador foi notificado.</li>
            <li>Você receberá acesso assim que for verificado.</li>
            <li>Tente recarregar esta página em breve.</li>
          </ul>
        </div>

        <div className="pt-4 flex flex-col gap-2">
          <Button onClick={() => window.location.reload()} className="w-full">
            Verificar status
          </Button>
          <Button variant="ghost" onClick={logout} className="w-full text-muted-foreground">
            <LogOut className="mr-2 h-4 w-4" />
            Sair e entrar com outra conta
          </Button>
        </div>
      </div>
    </div>
  );
}
