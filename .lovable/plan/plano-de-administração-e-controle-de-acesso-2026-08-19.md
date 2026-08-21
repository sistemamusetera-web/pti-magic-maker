# Plano de Administração e Controle de Acesso

Implementar um sistema de aprovação de usuários e um menu administrativo para o administrador especificado.

## Alterações no Banco de Dados (Supabase)

1.  **Novas Tabelas e Enums**:
    *   Criar enum `public.app_role` com valores `'admin'`, `'professional'`.
    *   Criar tabela `public.user_roles` para mapear usuários a papéis.
    *   Criar campo `is_approved` (boolean, default false) na tabela `public.profiles` (ou estender `auth.users` via trigger se profiles não existir, mas o padrão Lovable usa metadados ou profiles). *Correção*: Usaremos uma tabela `public.user_approvals` para gerenciar o status de aprovação.
2.  **Segurança (RLS)**:
    *   Criar função `public.has_role(_user_id uuid, _role app_role)` (security definer).
    *   Criar função `public.is_approved(_user_id uuid)` (security definer).
    *   Atualizar RLS de todas as tabelas existentes (`patients`, `evaluations`, `pei_sessions`) para exigir `is_approved(auth.uid())`.
3.  **Seed**:
    *   Definir `musicoterapeutakarlos@gmail.com` como admin automaticamente.

## Alterações no Frontend

1.  **Middleware de Autenticação**:
    *   Atualizar `src/routes/_authenticated/route.tsx` para verificar se o usuário está aprovado.
    *   Criar rota `/pending-approval` para usuários aguardando autorização.
2.  **Menu Administrativo**:
    *   Criar rota `/admin` (protegida para o papel `'admin'`).
    *   Implementar interface para listar usuários pendentes e aprová-los/rejeitá-los.
    *   Adicionar link "Administração" no cabeçalho do dashboard apenas para admins.
3.  **Fluxo de Registro**:
    *   Usuários recém-criados são direcionados para a tela de espera.

## Detalhes Técnicos
*   **Papéis**: `admin`, `professional`.
*   **Email do Admin**: `musicoterapeutakarlos@gmail.com`.
*   **Componentes**: Uso de componentes Shadcn para a interface administrativa.
