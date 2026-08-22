export interface PtiDeletionDataSource {
  findLatestEvaluation: (patientId: string) => Promise<{ evaluationId: string; ptiData: unknown } | null>;
  deleteSessionsForEvaluation: (evaluationId: string) => Promise<void>;
  clearPtiForEvaluation: (evaluationId: string) => Promise<void>;
  restorePtiForEvaluation: (evaluationId: string, ptiData: unknown) => Promise<void>;
}

export function latestPtiDeletionMessage(patientName: string) {
  return `Excluir o PTI mais recente de ${patientName}? O cadastro e a avaliação serão mantidos, mas os dados do PTI e as sessões vinculadas a esse plano serão removidos.`;
}

export async function deleteLatestPatientPti(dataSource: PtiDeletionDataSource, patientId: string) {
  const target = await dataSource.findLatestEvaluation(patientId);
  if (!target) return { status: "not_found" as const };

  await dataSource.clearPtiForEvaluation(target.evaluationId);
  try {
    await dataSource.deleteSessionsForEvaluation(target.evaluationId);
  } catch (error) {
    await dataSource.restorePtiForEvaluation(target.evaluationId, target.ptiData);
    throw error;
  }

  return { status: "deleted" as const, evaluationId: target.evaluationId };
}

export async function confirmAndDeleteLatestPatientPti({
  confirm,
  patientName,
  patientId,
  dataSource,
}: {
  confirm: (message: string) => boolean;
  patientName: string;
  patientId: string;
  dataSource: PtiDeletionDataSource;
}) {
  if (!confirm(latestPtiDeletionMessage(patientName))) return { status: "cancelled" as const };
  return deleteLatestPatientPti(dataSource, patientId);
}
