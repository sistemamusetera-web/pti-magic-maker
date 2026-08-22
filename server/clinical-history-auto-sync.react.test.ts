import { createElement, forwardRef, useImperativeHandle, useState } from "react";
import { act, create, type ReactTestRenderer } from "react-test-renderer";
import { describe, expect, it } from "vitest";
import { ClinicalHistorySection } from "../src/components/clinical-history-section";
import { createEmptyPTI, type PTINarrative } from "../src/lib/pti-pdf";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

interface HarnessHandle {
  currentHistory: () => string;
}

const ClinicalHistoryFormHarness = forwardRef<HarnessHandle, { diagnosis: string }>(function ClinicalHistoryFormHarness(
  { diagnosis },
  ref,
) {
  const [narrative, setNarrative] = useState<PTINarrative>(() => createEmptyPTI());
  useImperativeHandle(ref, () => ({
    currentHistory: () => narrative.clinical_history ?? "",
  }), [narrative.clinical_history]);

  return createElement(ClinicalHistorySection, {
    value: narrative,
    onChange: setNarrative,
    patient: { name: "Ana", diagnosis },
  });
});

describe("Clinical history auto-sync hook", () => {
  it("updates the PTI history after a patient diagnosis change without a manual generation click", async () => {
    const ref = { current: null as HarnessHandle | null };
    let renderer: ReactTestRenderer;

    await act(async () => {
      renderer = create(createElement(ClinicalHistoryFormHarness, { ref, diagnosis: "TEA (CID-10 F84)" }));
    });
    expect(ref.current?.currentHistory()).toContain("TEA (CID-10 F84)");

    const unitField = renderer!.root.findAllByType("input").find((field) => field.props.placeholder === "Nome da unidade");
    await act(async () => {
      unitField?.props.onChange({ target: { value: "Unidade Centro" } });
    });
    expect(ref.current?.currentHistory()).toContain("unidade Unidade Centro");

    await act(async () => {
      renderer!.update(createElement(ClinicalHistoryFormHarness, { ref, diagnosis: "TEA nível 2 (CID-10 F84)" }));
    });
    expect(ref.current?.currentHistory()).toContain("TEA nível 2 (CID-10 F84)");
    await act(async () => {
      renderer!.unmount();
    });
  });

  it("keeps a professional manual edit after guided data changes", async () => {
    const ref = { current: null as HarnessHandle | null };
    let renderer: ReactTestRenderer;

    await act(async () => {
      renderer = create(createElement(ClinicalHistoryFormHarness, { ref, diagnosis: "TEA (CID-10 F84)" }));
    });
    const historyField = renderer!.root
      .findAllByType("textarea")
      .find((field) => field.props.placeholder === "O modelo institucional será preenchido automaticamente com os dados informados.");
    await act(async () => {
      historyField?.props.onChange({ target: { value: "Texto revisado manualmente pelo profissional." } });
    });
    await act(async () => {
      renderer!.update(createElement(ClinicalHistoryFormHarness, { ref, diagnosis: "TEA nível 2 (CID-10 F84)" }));
    });

    expect(ref.current?.currentHistory()).toBe("Texto revisado manualmente pelo profissional.");
    await act(async () => {
      renderer!.unmount();
    });
  });
});
