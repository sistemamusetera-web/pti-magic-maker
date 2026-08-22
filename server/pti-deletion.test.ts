import { describe, expect, it, vi } from "vitest";
import { confirmAndDeleteLatestPatientPti, deleteLatestPatientPti, latestPtiDeletionMessage } from "../src/lib/pti-deletion";

describe("deleteLatestPatientPti", () => {
  it("removes only sessions and PTI data from the latest evaluation while preserving the patient", async () => {
    const findLatestEvaluation = vi.fn().mockResolvedValue({ evaluationId: "evaluation-9", ptiData: { clinical_history: "Conteúdo do PTI" } });
    const deleteSessionsForEvaluation = vi.fn().mockResolvedValue(undefined);
    const clearPtiForEvaluation = vi.fn().mockResolvedValue(undefined);
    const restorePtiForEvaluation = vi.fn().mockResolvedValue(undefined);

    await expect(deleteLatestPatientPti({ findLatestEvaluation, deleteSessionsForEvaluation, clearPtiForEvaluation, restorePtiForEvaluation }, "patient-1"))
      .resolves.toEqual({ status: "deleted", evaluationId: "evaluation-9" });
    expect(findLatestEvaluation).toHaveBeenCalledWith("patient-1");
    expect(clearPtiForEvaluation).toHaveBeenCalledWith("evaluation-9");
    expect(deleteSessionsForEvaluation).toHaveBeenCalledWith("evaluation-9");
    expect(restorePtiForEvaluation).not.toHaveBeenCalled();
  });

  it("does not remove anything when the patient has no saved evaluation", async () => {
    const deleteSessionsForEvaluation = vi.fn();
    const clearPtiForEvaluation = vi.fn();
    const restorePtiForEvaluation = vi.fn();

    await expect(deleteLatestPatientPti({
      findLatestEvaluation: vi.fn().mockResolvedValue(null),
      deleteSessionsForEvaluation,
      clearPtiForEvaluation,
      restorePtiForEvaluation,
    }, "patient-1")).resolves.toEqual({ status: "not_found" });
    expect(deleteSessionsForEvaluation).not.toHaveBeenCalled();
    expect(clearPtiForEvaluation).not.toHaveBeenCalled();
  });

  it("restores the PTI when deleting related sessions fails", async () => {
    const ptiData = { clinical_history: "Conteúdo a restaurar" };
    const deleteSessionsForEvaluation = vi.fn().mockRejectedValue(new Error("Falha ao excluir sessões"));
    const clearPtiForEvaluation = vi.fn().mockResolvedValue(undefined);
    const restorePtiForEvaluation = vi.fn().mockResolvedValue(undefined);

    await expect(deleteLatestPatientPti({
      findLatestEvaluation: vi.fn().mockResolvedValue({ evaluationId: "evaluation-9", ptiData }),
      deleteSessionsForEvaluation,
      clearPtiForEvaluation,
      restorePtiForEvaluation,
    }, "patient-1")).rejects.toThrow("Falha ao excluir sessões");
    expect(clearPtiForEvaluation).toHaveBeenCalledWith("evaluation-9");
    expect(deleteSessionsForEvaluation).toHaveBeenCalledWith("evaluation-9");
    expect(restorePtiForEvaluation).toHaveBeenCalledWith("evaluation-9", ptiData);
  });

  it("cancels from the dashboard confirmation before querying or changing any PTI data", async () => {
    const findLatestEvaluation = vi.fn();
    const result = await confirmAndDeleteLatestPatientPti({
      confirm: vi.fn().mockReturnValue(false),
      patientName: "Ana",
      patientId: "patient-1",
      dataSource: {
        findLatestEvaluation,
        deleteSessionsForEvaluation: vi.fn(),
        clearPtiForEvaluation: vi.fn(),
        restorePtiForEvaluation: vi.fn(),
      },
    });

    expect(result).toEqual({ status: "cancelled" });
    expect(findLatestEvaluation).not.toHaveBeenCalled();
  });

  it("confirms the intended latest PTI target and completes the dashboard deletion flow", async () => {
    const ptiData = { clinical_history: "Plano atual" };
    const confirm = vi.fn().mockReturnValue(true);
    const dataSource = {
      findLatestEvaluation: vi.fn().mockResolvedValue({ evaluationId: "latest-evaluation", ptiData }),
      deleteSessionsForEvaluation: vi.fn().mockResolvedValue(undefined),
      clearPtiForEvaluation: vi.fn().mockResolvedValue(undefined),
      restorePtiForEvaluation: vi.fn().mockResolvedValue(undefined),
    };

    await expect(confirmAndDeleteLatestPatientPti({ confirm, patientName: "Ana", patientId: "patient-1", dataSource }))
      .resolves.toEqual({ status: "deleted", evaluationId: "latest-evaluation" });
    expect(confirm).toHaveBeenCalledWith(latestPtiDeletionMessage("Ana"));
    expect(dataSource.clearPtiForEvaluation).toHaveBeenCalledWith("latest-evaluation");
    expect(dataSource.deleteSessionsForEvaluation).toHaveBeenCalledWith("latest-evaluation");
  });
});
