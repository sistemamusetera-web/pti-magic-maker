import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Individual PTI deletion from the patient list", () => {
  it("requires confirmation and clears only pti_data from the latest evaluation", () => {
    const source = readFileSync(new URL("../src/routes/_authenticated/dashboard.tsx", import.meta.url), "utf8");

    expect(source).toContain("confirmAndDeleteLatestPatientPti");
    expect(source).toContain("confirm: (message) => window.confirm(message)");
    expect(source).toContain('.select("id, pti_data")');
    expect(source).toContain("data?.pti_data ?");
    expect(source).toContain('.from("pei_sessions").delete().eq("evaluation_id", evaluationId)');
    expect(source).toContain('.update({ pti_data: ptiData as Json }).eq("id", evaluationId)');
    expect(source).not.toContain('.from("patients").delete()');
  });
});
