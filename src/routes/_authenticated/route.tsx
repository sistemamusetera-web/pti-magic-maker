import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) throw redirect({ to: "/auth" });

    // Check approval status
    const { data: approvalData, error: approvalError } = await supabase
      .from("user_approvals")
      .select("is_approved")
      .eq("user_id", authData.user.id)
      .single();

    if (approvalError || !approvalData?.is_approved) {
      // Allow them to go to the pending page if they are logged in but not approved
      // We check the path to avoid infinite redirect
      if (window.location.pathname !== "/pending-approval") {
        throw redirect({ to: "/pending-approval" });
      }
    }

    // Check role
    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", authData.user.id)
      .single();

    return { 
      user: authData.user,
      isApproved: !!approvalData?.is_approved,
      role: roleData?.role || 'professional'
    };
  },
  component: () => <Outlet />,
});
