import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Patient navigation", () => {
  it("keeps the primary tabs while removing age-range menu buttons", () => {
    const source = readFileSync(new URL("../src/routes/_authenticated/patients.$id.tsx", import.meta.url), "utf8");

    expect(source).toContain('setTab("PTI")');
    expect(source).toContain('active={tab === "CONSOLIDADO"}');
    expect(source).toContain('active={tab === "PEI"}');
    expect(source).not.toContain('AGE_RANGES.map((age) => (\n            <TabButton key={age}');
  });
});
