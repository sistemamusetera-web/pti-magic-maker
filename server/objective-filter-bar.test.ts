import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Objective catalog filter bar", () => {
  it("keeps search while removing area filter controls", () => {
    const source = readFileSync(new URL("../src/routes/_authenticated/patients.$id.tsx", import.meta.url), "utf8");

    expect(source).toContain('placeholder="Buscar por objetivo, atividade, material ou subtema"');
    expect(source).not.toContain("setActiveArea");
    expect(source).not.toContain('Todas ({OBJECTIVE_CATALOG.length})');
    expect(source).not.toContain('activeArea === area');
    expect(source).not.toContain("Adicionar selecionados");
    expect(source).toContain("Marque um objetivo para incluí-lo automaticamente no PTI");
    expect(source).toContain("onAdd([option])");
  });
});
