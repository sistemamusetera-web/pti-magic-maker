import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("PTI PDF branding", () => {
  it("uses the Hapvida and NotreDame reference brand strip in the header", () => {
    const source = readFileSync(new URL("../src/lib/pti-pdf.ts", import.meta.url), "utf8");
    const asset = readFileSync("/home/ubuntu/webdev-static-assets/hapvida-notredame-embedded.png");
    const assetHash = createHash("sha256").update(asset).digest("hex");
    const assetWidth = asset.readUInt32BE(16);
    const assetHeight = asset.readUInt32BE(20);

    expect(source).toContain("hapvida-notredame-embedded.png?inline");
    expect(source).toContain("const REFERENCE_BRAND_STRIP = referenceBrandDataUrl;");
    expect(assetHash).toBe("9d48f04ed72888026119878232399b61ee9fcef84ac9f3bd54356fed76c226ed");
    expect([assetWidth, assetHeight]).toEqual([800, 125]);
    expect(source).toContain("const w = 180;");
    expect(source).toContain("const h = 28.125;");
    expect((180 * assetHeight) / assetWidth).toBe(28.125);
    expect(source).toContain("doc.addImage(REFERENCE_BRAND_STRIP, \"PNG\", MARGIN, y, w, h);");
    expect(source).not.toContain("loadImage(");
    expect(source).toContain("doc.line(MARGIN, y, pageW - MARGIN, y);");
  });
});
