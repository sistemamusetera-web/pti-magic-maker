import type { PTINarrative } from "./pti-pdf";

export function getRegisteredProfessionalName(user: { email?: string | null; user_metadata?: Record<string, unknown> } | null | undefined) {
  const fullName = user?.user_metadata?.full_name;
  return typeof fullName === "string" && fullName.trim() ? fullName.trim() : user?.email?.trim() ?? "";
}

export function applyRegisteredProfessional(narrative: PTINarrative, registeredName: string): PTINarrative {
  if (narrative.professional?.trim() || !registeredName.trim()) return narrative;
  return { ...narrative, professional: registeredName.trim() };
}
