import { writeFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import { generatePTIPdf } from "../src/lib/pti-pdf";

describe("PTI PDF real generation", () => {
  it("generates a downloadable PDF containing a raster image through the real jsPDF flow", async () => {
    vi.useFakeTimers();
    const generatedBlobs: Blob[] = [];
    const anchor = {
      click: vi.fn(),
      remove: vi.fn(),
      style: {},
      href: "",
      download: "",
      rel: "",
    };

    vi.stubGlobal("document", {
      body: { appendChild: vi.fn() },
      createElement: vi.fn(() => anchor),
    });
    vi.stubGlobal("URL", {
      createObjectURL: vi.fn((blob: Blob) => {
        generatedBlobs.push(blob);
        return "blob:pti";
      }),
      revokeObjectURL: vi.fn(),
    });

    await generatePTIPdf({
      patient: { name: "Paciente de teste", birth_date: "2020-01-01" },
      patient_age: "6 anos",
      evaluator_name: "Profissional",
      evaluation_date: "2026-08-22",
      answers: {},
      pti: { objectives: [] },
    });

    const pdfBytes = Buffer.from(await generatedBlobs[0]!.arrayBuffer());
    if (process.env.PTI_PDF_RENDER_PATH) {
      writeFileSync(process.env.PTI_PDF_RENDER_PATH, pdfBytes);
    }
    expect(pdfBytes.subarray(0, 4).toString()).toBe("%PDF");
    expect(pdfBytes.toString("latin1")).toContain("/Subtype /Image");
    expect(anchor.click).toHaveBeenCalledTimes(1);

    vi.runOnlyPendingTimers();
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });
});
