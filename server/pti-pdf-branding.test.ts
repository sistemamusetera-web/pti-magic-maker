import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { PDF_BRAND_STRIP_DATA_URL } from "../src/lib/pti-pdf-brand-strip";

const pdfSpy = vi.hoisted(() => ({
  addImage: vi.fn(),
  text: vi.fn(),
}));

vi.mock("jspdf", () => {
  class MockJsPdf {
    internal = {
      pageSize: {
        getWidth: () => 595.28,
        getHeight: () => 841.89,
      },
    };
    addImage = pdfSpy.addImage;
    addPage = vi.fn();
    getNumberOfPages = () => 1;
    output = () => new Blob(["PTI"]);
    setDrawColor = vi.fn();
    setLineWidth = vi.fn();
    line = vi.fn();
    circle = vi.fn();
    setFillColor = vi.fn();
    rect = vi.fn();
    setTextColor = vi.fn();
    setFont = vi.fn();
    setFontSize = vi.fn();
    text = pdfSpy.text;
    splitTextToSize = (text: string) => [text];
    setPage = vi.fn();
  }

  return { jsPDF: MockJsPdf };
});

vi.mock("jspdf-autotable", () => ({ default: vi.fn() }));

import { generatePTIPdf } from "../src/lib/pti-pdf";

afterEach(() => {
  pdfSpy.addImage.mockClear();
  pdfSpy.text.mockClear();
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe("PTI PDF branding", () => {
  it("embeds the Hapvida and NotreDame reference brand strip in the header", () => {
    const source = readFileSync(new URL("../src/lib/pti-pdf.ts", import.meta.url), "utf8");
    const embeddedBrandSource = readFileSync(new URL("../src/lib/pti-pdf-brand-strip.ts", import.meta.url), "utf8");
    expect(source).toContain('import { PDF_BRAND_STRIP_DATA_URL } from "./pti-pdf-brand-strip";');
    expect(source).toContain('doc.addImage(PDF_BRAND_STRIP_DATA_URL, "PNG", MARGIN, y, w, h);');
    expect(source).not.toContain("loadImage(");
    expect(embeddedBrandSource).toContain('import brandStripDataUrl from "./pti-pdf-brand-strip.png?inline";');
    expect(source).not.toContain("/home/ubuntu/webdev-static-assets");
    expect(source).not.toContain("/manus-storage/");
    expect(source).not.toMatch(/from\s+["']\/home\/ubuntu/);
    expect(source).toContain("const w = 180;");
    expect(source).toContain("const h = 28.125;");
    expect(source).toContain('doc.addImage(PDF_BRAND_STRIP_DATA_URL, "PNG", MARGIN, y, w, h);');
    expect(source).toContain("doc.line(MARGIN, y, pageW - MARGIN, y);");
  });

  it("keeps a Vite data URL for the PNG bundled with the PDF", () => {
    expect(PDF_BRAND_STRIP_DATA_URL).toMatch(/^data:image\/png;base64,/);
  });

  it("passes the reference strip directly to jsPDF in the real PTI generation flow", async () => {
    vi.useFakeTimers();
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
      createObjectURL: vi.fn(() => "blob:pti"),
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

    expect(pdfSpy.addImage).toHaveBeenCalledWith(PDF_BRAND_STRIP_DATA_URL, "PNG", 48, 48, 180, 28.125);
    expect(pdfSpy.addImage).toHaveBeenCalledTimes(2);
    expect(pdfSpy.addImage).toHaveBeenCalledWith(
      PDF_BRAND_STRIP_DATA_URL,
      "PNG",
      expect.any(Number),
      expect.any(Number),
      90,
      14.0625,
    );
    expect(anchor.click).toHaveBeenCalledTimes(1);
    vi.runOnlyPendingTimers();
  });

  it("keeps the logo in the footer even when the legal footer is disabled", async () => {
    vi.useFakeTimers();
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
      createObjectURL: vi.fn(() => "blob:pti"),
      revokeObjectURL: vi.fn(),
    });

    await generatePTIPdf(
      {
        patient: { name: "Paciente sem aviso legal", birth_date: "2020-01-01" },
        patient_age: "6 anos",
        evaluator_name: "Profissional",
        evaluation_date: "2026-08-22",
        answers: {},
        pti: { objectives: [] },
      },
      { includeBranding: true, includeFooter: false },
    );

    expect(pdfSpy.addImage).toHaveBeenCalledTimes(2);
    expect(pdfSpy.text).not.toHaveBeenCalledWith(
      expect.stringContaining("TODOS OS DIREITOS RESERVADOS"),
      expect.anything(),
      expect.anything(),
      expect.anything(),
    );
    expect(anchor.click).toHaveBeenCalledTimes(1);
    vi.runOnlyPendingTimers();
  });

  it("omits branding and footer when the user disables both options", async () => {
    vi.useFakeTimers();
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
      createObjectURL: vi.fn(() => "blob:pti"),
      revokeObjectURL: vi.fn(),
    });

    await generatePTIPdf(
      {
        patient: { name: "Paciente sem marca", birth_date: "2020-01-01" },
        patient_age: "6 anos",
        evaluator_name: "Profissional",
        evaluation_date: "2026-08-22",
        answers: {},
        pti: { objectives: [] },
      },
      { includeBranding: false, includeFooter: false },
    );

    expect(pdfSpy.addImage).not.toHaveBeenCalled();
    expect(pdfSpy.text).not.toHaveBeenCalledWith(expect.stringContaining("PTI —"), expect.anything(), expect.anything());
    expect(pdfSpy.text).not.toHaveBeenCalledWith(
      expect.stringContaining("TODOS OS DIREITOS RESERVADOS"),
      expect.anything(),
      expect.anything(),
      expect.anything(),
    );
    expect(anchor.click).toHaveBeenCalledTimes(1);
    vi.runOnlyPendingTimers();
  });
});
