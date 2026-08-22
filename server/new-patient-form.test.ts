import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("New patient form", () => {
  it("collects only name and birth date during the initial registration", () => {
    const source = readFileSync(new URL("../src/routes/_authenticated/dashboard.tsx", import.meta.url), "utf8");

    expect(source).toContain('useState({ name: "", birth_date: "" })');
    expect(source).toContain('id="name"');
    expect(source).toContain('id="birth"');
    expect(source).not.toContain('id="guardian"');
    expect(source).not.toContain('id="diag"');
    expect(source).not.toContain('id="notes"');
  });
});
