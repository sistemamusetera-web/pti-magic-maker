import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const migrationPath = new URL("../supabase/migrations/20260821233100_initialize_pti_access.sql", import.meta.url);
const migration = readFileSync(migrationPath, "utf8");

describe("admin access policy", () => {
  it("gives the primary administrator immediate approval", () => {
    expect(migration).toContain("adminportage@gmail.com");
    expect(migration).toContain("is_primary_admin");
    expect(migration).toContain("values (new.id, coalesce(new.email, ''), is_primary_admin)");
  });

  it("leaves new professional accounts pending by default", () => {
    expect(migration).toContain("is_approved boolean not null default false");
    expect(migration).toContain("admins can update approvals");
  });
});
