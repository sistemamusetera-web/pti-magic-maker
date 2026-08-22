import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Evaluation metadata strip", () => {
  it("removes evaluator and evaluation-date inputs from the patient header without blocking saving", () => {
    const source = readFileSync(new URL("../src/routes/_authenticated/patients.$id.tsx", import.meta.url), "utf8");

    expect(source).not.toContain("Metadata strip — compact evaluator/date inputs");
    expect(source).not.toContain('className="h-7 max-w-[260px] text-xs"');
    expect(source).not.toContain('className="h-7 w-[140px] text-xs"');
    expect(source).not.toContain('toast.error("Informe o nome do avaliador")');
    expect(source).toContain('pti.professional?.trim() || session.user.email || "Não informado"');
  });
});
