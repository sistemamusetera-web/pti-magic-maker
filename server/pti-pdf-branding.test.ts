import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("PTI PDF branding", () => {
  it("uses the Hapvida and NotreDame reference brand strip in the header", () => {
    const source = readFileSync(new URL("../src/lib/pti-pdf.ts", import.meta.url), "utf8");

    expect(source).toContain("hapvida-notredame-reference-000_38796567.png");
    expect(source).toContain("const w = 180;");
    expect(source).toContain("doc.line(MARGIN, y, pageW - MARGIN, y);");
  });
});
