import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { PDF_BRAND_STRIP_DATA_URL } from "../src/lib/pti-pdf-brand-strip";

describe("PTI PDF branding", () => {
  it("embeds the Hapvida and NotreDame reference brand strip in the header", () => {
    const source = readFileSync(new URL("../src/lib/pti-pdf.ts", import.meta.url), "utf8");
    const embeddedBrandSource = readFileSync(new URL("../src/lib/pti-pdf-brand-strip.ts", import.meta.url), "utf8");
    expect(source).toContain('import { PDF_BRAND_STRIP_DATA_URL } from "./pti-pdf-brand-strip";');
    expect(source).toContain("const logo = await loadImage(PDF_BRAND_STRIP_DATA_URL);");
    expect(embeddedBrandSource).toContain("data:image/png;base64,");
    expect(source).not.toContain("/home/ubuntu/webdev-static-assets");
    expect(source).not.toContain("/manus-storage/");
    expect(source).not.toMatch(/from\s+["']\/home\/ubuntu/);
    expect(source).toContain("const w = 180;");
    expect(source).toContain("const h = 28.125;");
    expect(source).toContain("doc.addImage(logo, \"PNG\", MARGIN, y, w, h);");
    expect(source).toContain("doc.line(MARGIN, y, pageW - MARGIN, y);");
  });

  it("keeps a valid 512 by 80 PNG embedded in the PDF bundle", () => {
    const encoded = PDF_BRAND_STRIP_DATA_URL.replace("data:image/png;base64,", "");
    const bytes = Buffer.from(encoded, "base64");

    expect(bytes.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
    expect(bytes.readUInt32BE(16)).toBe(512);
    expect(bytes.readUInt32BE(20)).toBe(80);
  });
});
