import type { PTIObjective } from "./pti-pdf";
import { OBJECTIVES_TEMPLATES } from "./pti-templates";

export interface ObjectiveCatalogOption extends PTIObjective {
  id: string;
  area: string;
  templateId: string;
  templateLabel: string;
  templateSummary: string;
}

export const OBJECTIVE_CATALOG: ObjectiveCatalogOption[] = OBJECTIVES_TEMPLATES.flatMap((template) =>
  template.items.map((item, index) => ({
    ...item,
    id: `${template.id}-${index + 1}`,
    area: template.area ?? "Outros",
    templateId: template.id,
    templateLabel: template.label,
    templateSummary: template.summary,
  })),
);

function objectiveKey(objective: PTIObjective) {
  return [objective.objetivo, objective.atividade, objective.material]
    .map((value) => value.trim().toLocaleLowerCase("pt-BR"))
    .join("|");
}

export function appendUniqueObjectives(
  existingObjectives: PTIObjective[],
  selectedOptions: ObjectiveCatalogOption[],
): PTIObjective[] {
  const existingKeys = new Set(existingObjectives.map(objectiveKey));
  const additions = selectedOptions
    .filter((option) => !existingKeys.has(objectiveKey(option)))
    .map(({ objetivo, atividade, material }) => ({ objetivo, atividade, material }));

  return [...existingObjectives, ...additions];
}
