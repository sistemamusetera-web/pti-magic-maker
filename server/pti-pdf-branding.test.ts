import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("PTI PDF branding", () => {
  it("uses the Hapvida and NotreDame reference brand strip in the header", () => {
    const source = readFileSync(new URL("../src/lib/pti-pdf.ts", import.meta.url), "utf8");
    expect(source).toContain("hapvida-notredame-from-reference_3b1cfbba.png");
    expect(source).not.toContain("/home/ubuntu/webdev-static-assets");
    expect(source).not.toMatch(/from\s+["']\/home\/ubuntu/);
    expect(source).toContain("const w = 180;");
    expect(source).toContain("const h = 28.125;");
    expect(source).toContain("doc.addImage(logo, \"PNG\", MARGIN, y, w, h);");
    expect(source).toContain("const logo = await loadImage(REFERENCE_BRAND_STRIP);");
    expect(source).not.toContain('img.crossOrigin = "anonymous"');
    expect(source).toContain("doc.line(MARGIN, y, pageW - MARGIN, y);");
  });
});
