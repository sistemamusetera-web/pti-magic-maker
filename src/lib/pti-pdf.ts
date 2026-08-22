import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { PDF_BRAND_STRIP_DATA_URL } from "./pti-pdf-brand-strip";


/* Legacy exports still consumed by the patient page — kept as no-ops so
   older callers don't break while we transition to the narrative PTI. */
export interface PeiSessionSummary {
  item_key: string;
  acertos: number;
  tentativas: number;
  ajuda: string;
  sessions: number;
}

export interface PTIObjective {
  objetivo: string;
  atividade: string;
  material: string;
}

export const createEmptyPTI = (overrides: Partial<PTINarrative> = {}): PTINarrative => ({
  mother_name: "",
  father_name: "",
  diagnosis: "",
  diagnoses: [],
  diagnoses_other: "",
  start_date: "",
  professional: "",
  revaluation: "Semestral",
  clinical_history: "",
  clinical_unit: "",
  clinical_medication: "",
  clinical_medication_other: "",
  clinical_medications: [],
  clinical_medications_other: "",
  clinical_responsible_report: "",
  clinical_development_profile: "",
  clinical_behavior_description: "",
  clinical_autoaggression: false,
  clinical_heteroaggression: false,
  clinical_assessment_protocol: "Portage",
  objectives: [{ objetivo: "", atividade: "", material: "" }],
  behavior_problems: [""],
  conclusion: "",
  reference: "",
  delivery_date: "",
  delivery_responsible: "",
  ...overrides,
});

export function hydratePTI(stored: unknown): PTINarrative {
  if (!stored || typeof stored !== "object" || Array.isArray(stored)) {
    return createEmptyPTI();
  }

  const data = stored as Partial<PTINarrative>;
  const defaults = createEmptyPTI();
  return {
    ...defaults,
    ...data,
    objectives: Array.isArray(data.objectives)
      ? data.objectives.map((objective) => ({ ...objective }))
      : defaults.objectives,
    behavior_problems: Array.isArray(data.behavior_problems)
      ? [...data.behavior_problems]
      : defaults.behavior_problems,
  };
}

export interface PTINarrative {
  mother_name?: string;
  father_name?: string;
  diagnosis?: string;
  diagnoses?: string[];
  diagnoses_other?: string;
  start_date?: string;
  professional?: string;
  revaluation?: string;
  clinical_history?: string;
  clinical_unit?: string;
  clinical_medication?: string;
  clinical_medication_other?: string;
  clinical_medications?: string[];
  clinical_medications_other?: string;
  clinical_responsible_report?: string;
  clinical_development_profile?: string;
  clinical_behavior_description?: string;
  clinical_autoaggression?: boolean;
  clinical_heteroaggression?: boolean;
  clinical_assessment_protocol?: string;
  objectives?: PTIObjective[];
  behavior_problems?: string[];
  conclusion?: string;
  reference?: string;
  delivery_date?: string;
  delivery_responsible?: string;
}

export interface PTIData {
  patient: {
    name: string;
    birth_date?: string | null;
    guardian?: string | null;
    diagnosis?: string | null;
  };
  patient_age: string;
  evaluator_name: string;
  evaluation_date: string;
  answers: Record<string, string>;
  sessions?: Record<string, PeiSessionSummary>;
  pti?: PTINarrative;
}

// Palette
const ORANGE: [number, number, number] = [255, 153, 0];
const BLACK: [number, number, number] = [0, 0, 0];
const WHITE: [number, number, number] = [255, 255, 255];
const NOTE_GREEN: [number, number, number] = [64, 88, 54];
const SECTION_BG: [number, number, number] = [242, 242, 242];
const BORDER: [number, number, number] = [140, 140, 140];
const TEXT_DARK: [number, number, number] = [45, 45, 45];

const MARGIN = 48; // pt

function fmtDate(d?: string | null) {
  if (!d) return "";
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return d;
  return dt.toLocaleDateString("pt-BR");
}

function safe(v?: string | null) {
  return v && String(v).trim() ? String(v).trim() : "";
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => {
    if (typeof Image === "undefined") return resolve(null);
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function finalY(doc: jsPDF, fallback: number) {
  const v = (doc as unknown as { lastAutoTable?: { finalY?: number } }).lastAutoTable?.finalY;
  return typeof v === "number" ? v : fallback;
}

function ensureRoom(doc: jsPDF, y: number, needed: number, drawHeader: () => number): number {
  const pageH = doc.internal.pageSize.getHeight();
  if (y + needed > pageH - MARGIN) {
    doc.addPage("a4", "portrait");
    return drawHeader();
  }
  return y;
}

function drawPageHeader(doc: jsPDF, logo: HTMLImageElement | null): number {
  const pageW = doc.internal.pageSize.getWidth();
  let y = MARGIN;
  if (logo) {
    // Faixa Hapvida e NotreDame Intermédica extraída diretamente do PDF de referência.
    const w = 180;
    const h = 28.125;
    doc.addImage(logo, "PNG", MARGIN, y, w, h);
    y += h + 1;
  }
  // Thin orange rule under logo
  doc.setDrawColor(...ORANGE);
  doc.setLineWidth(1.2);
  doc.line(MARGIN, y, pageW - MARGIN, y);
  y += 14;
  return y;
}

function drawTitleBar(doc: jsPDF, y: number, text: string): number {
  const pageW = doc.internal.pageSize.getWidth();
  const w = pageW - MARGIN * 2;
  doc.setFillColor(...ORANGE);
  doc.rect(MARGIN, y, w, 26, "F");
  doc.setTextColor(...WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(text, MARGIN + w / 2, y + 17, { align: "center" });
  return y + 26 + 10;
}

function drawSectionHeader(doc: jsPDF, y: number, text: string): number {
  const pageW = doc.internal.pageSize.getWidth();
  const w = pageW - MARGIN * 2;
  doc.setFillColor(...SECTION_BG);
  doc.setDrawColor(...BORDER);
  doc.setLineWidth(0.6);
  doc.rect(MARGIN, y, w, 18, "FD");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...BLACK);
  doc.text(text, MARGIN + 6, y + 12.5);
  return y + 18;
}

function drawParagraph(doc: jsPDF, y: number, text: string, opts?: { size?: number; color?: [number, number, number] }): number {
  const pageW = doc.internal.pageSize.getWidth();
  const w = pageW - MARGIN * 2;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(opts?.size ?? 10);
  doc.setTextColor(...(opts?.color ?? TEXT_DARK));
  const lines = doc.splitTextToSize(text, w - 8);
  const lineHeight = (opts?.size ?? 10) * 1.35;
  const pageH = doc.internal.pageSize.getHeight();
  let cy = y;
  for (const ln of lines as string[]) {
    if (cy + lineHeight > pageH - MARGIN) {
      doc.addPage("a4", "portrait");
      cy = MARGIN;
    }
    doc.text(ln, MARGIN + 4, cy + lineHeight - 3);
    cy += lineHeight;
  }
  return cy + 4;
}

function drawPatientData(doc: jsPDF, y: number, data: PTIData): number {
  const pti = data.pti ?? {};
  const rows: [string, string][] = [
    ["Nome:", safe(data.patient.name)],
    [
      "Idade / Data de nascimento:",
      `${safe(data.patient_age)}${data.patient.birth_date ? "   ·   Nasc.: " + fmtDate(data.patient.birth_date) : ""}`,
    ],
    ["Nome da mãe:", safe(pti.mother_name)],
    ["Nome do pai:", safe(pti.father_name)],
    ["Diagnóstico:", safe(pti.diagnosis) || safe(data.patient.diagnosis)],
    ["Início de implementação:", fmtDate(pti.start_date) || fmtDate(data.evaluation_date)],
    ["Profissional responsável:", safe(pti.professional) || safe(data.evaluator_name)],
    ["Reavaliação dos objetivos:", safe(pti.revaluation) || "Semestral"],
  ];
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    theme: "grid",
    body: rows,
    styles: {
      font: "helvetica",
      fontSize: 10,
      textColor: BLACK,
      lineColor: BORDER,
      lineWidth: 0.4,
      cellPadding: { top: 5, right: 6, bottom: 5, left: 6 },
      valign: "middle",
    },
    columnStyles: {
      0: { cellWidth: 170, fontStyle: "bold", fillColor: [250, 250, 250] },
      1: { cellWidth: "auto" },
    },
  });
  return finalY(doc, y) + 10;
}

function drawObjectivesTable(doc: jsPDF, y: number, objectives: PTIObjective[]): number {
  const pageW = doc.internal.pageSize.getWidth();
  const w = pageW - MARGIN * 2;
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    theme: "grid",
    head: [["OBJETIVO", "ATIVIDADE", "MATERIAL"]],
    body: objectives.length
      ? objectives.map((o) => [safe(o.objetivo) || "—", safe(o.atividade) || "—", safe(o.material) || "—"])
      : [["—", "—", "—"]],
    styles: {
      font: "helvetica",
      fontSize: 9.2,
      textColor: TEXT_DARK,
      lineColor: BORDER,
      lineWidth: 0.4,
      cellPadding: 6,
      valign: "top",
      overflow: "linebreak",
    },
    headStyles: {
      fillColor: ORANGE,
      textColor: WHITE,
      fontStyle: "bold",
      halign: "center",
      lineColor: BORDER,
    },
    columnStyles: {
      0: { cellWidth: w * 0.33 },
      1: { cellWidth: w * 0.37 },
      2: { cellWidth: w * 0.3 },
    },
  });
  return finalY(doc, y) + 12;
}

function drawBullets(doc: jsPDF, y: number, items: string[]): number {
  const pageW = doc.internal.pageSize.getWidth();
  const w = pageW - MARGIN * 2;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...TEXT_DARK);
  const pageH = doc.internal.pageSize.getHeight();
  let cy = y;
  for (const raw of items) {
    const text = String(raw || "").trim();
    if (!text) continue;
    const lines = doc.splitTextToSize(text, w - 22) as string[];
    const lineH = 13;
    const blockH = lines.length * lineH + 4;
    if (cy + blockH > pageH - MARGIN) {
      doc.addPage("a4", "portrait");
      cy = MARGIN;
    }
    doc.setFillColor(...ORANGE);
    doc.circle(MARGIN + 6, cy + 6, 2, "F");
    lines.forEach((ln, i) => doc.text(ln, MARGIN + 16, cy + 9 + i * lineH));
    cy += blockH;
  }
  return cy + 6;
}

function drawSignatureBlock(doc: jsPDF, y: number, pti: PTINarrative): number {
  const pageW = doc.internal.pageSize.getWidth();
  const w = pageW - MARGIN * 2;
  y = drawSectionHeader(doc, y, "ENTREGA – DEVOLUTIVA E ORIENTAÇÃO");
  const rows: [string, string][] = [
    ["Data:", fmtDate(pti.delivery_date)],
    ["Responsável:", safe(pti.delivery_responsible)],
    ["Assinatura:", ""],
  ];
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    theme: "grid",
    body: rows,
    styles: {
      font: "helvetica",
      fontSize: 10,
      textColor: BLACK,
      lineColor: BORDER,
      lineWidth: 0.4,
      cellPadding: { top: 8, right: 6, bottom: 8, left: 6 },
      minCellHeight: 26,
    },
    columnStyles: {
      0: { cellWidth: 120, fontStyle: "bold", fillColor: [250, 250, 250] },
      1: { cellWidth: w - 120 },
    },
  });
  return finalY(doc, y) + 8;
}

function addFooters(doc: jsPDF, data: PTIData) {
  const total = doc.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text(`PTI — ${safe(data.patient.name)}`, MARGIN, pageH - 18);
    doc.text(`Página ${p} de ${total}`, pageW - MARGIN, pageH - 18, { align: "right" });
    doc.setFontSize(7);
    doc.setTextColor(...NOTE_GREEN);
    doc.text(
      "TODOS OS DIREITOS RESERVADOS HAPVIDA NOTREDAME · PROIBIDO O RATEIO, A COMERCIALIZAÇÃO E A REPRODUÇÃO DESSE MATERIAL.",
      pageW / 2,
      pageH - 8,
      { align: "center" },
    );
  }
}

function downloadPdf(doc: jsPDF, filename: string) {
  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

const DEFAULT_CONCLUSION = (name: string) =>
  `Diante das informações levantadas e das necessidades observadas, o Plano Terapêutico Individual (PTI) foi elaborado com foco no desenvolvimento da comunicação funcional, ampliação da autonomia nas atividades de vida diária e manejo dos comportamentos disruptivos, compartilhar espaços e objetos, sempre respeitando o ritmo e as preferências da criança.\n\nAs intervenções serão conduzidas de forma estruturada, utilizando reforçadores e estratégias que favoreçam a participação ativa e o engajamento. Além disso, o acompanhamento contínuo permitirá ajustes conforme a evolução de ${name || "do(a) beneficiário(a)"} garantindo que o plano se mantenha adequado às suas demandas.\n\nDe acordo com o DSM V, o TEA (Transtorno do Espectro Autista) tem como uma das principais características a dificuldade de comunicação, barreiras na interação social e dificuldade na compreensão e expressão de emoções. Sabemos que estas habilidades são essenciais para o desenvolvimento e evolução do(a) beneficiário(a) e que um ambiente terapêutico inclusivo e compartilhado contribui para o fortalecimento destas habilidades sociais.\n\nDeste modo, de acordo com a avaliação, fora constatado que a criança está apta ao atendimento individualizado em sala compartilhada. Será realizada uma reavaliação após 6 meses para analisar os progressos alcançados, revisar os objetivos traçados e, se necessário, reformular as estratégias de intervenção.`;

const DEFAULT_REFERENCE =
  "Williams, L. C. A., & Aiello, A. L. R. (2001). O Inventário Portage Operacionalizado: Intervenção com famílias. Memnon; FAPESP.";

export async function generatePTIPdf(data: PTIData) {
  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  const logo = await loadImage(PDF_BRAND_STRIP_DATA_URL);
  const pti = data.pti ?? {};

  const header = () => drawPageHeader(doc, logo);
  let y = header();

  // Title
  y = drawTitleBar(doc, y, "PLANO TERAPÊUTICO INDIVIDUALIZADO");

  // Dados do paciente
  y = drawSectionHeader(doc, y, "DADOS DO PACIENTE");
  y = drawPatientData(doc, y, data);

  // História clínica
  y = ensureRoom(doc, y, 60, header);
  y = drawSectionHeader(doc, y, "BREVE HISTÓRIA CLÍNICA");
  y = drawParagraph(doc, y + 4, safe(pti.clinical_history) || "—");

  // Objetivos
  y = ensureRoom(doc, y, 80, header);
  y = drawSectionHeader(doc, y, "OBJETIVOS POR ÁREA (SOCIALIZAÇÃO, COMUNICAÇÃO E AUTONOMIA)");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(90);
  doc.text(
    "O objetivo principal é promover o desenvolvimento de habilidades que favoreçam a comunicação, interação social e autonomia.",
    MARGIN + 4,
    y + 12,
    { maxWidth: doc.internal.pageSize.getWidth() - MARGIN * 2 - 8 },
  );
  y += 26;
  y = drawObjectivesTable(doc, y, pti.objectives ?? []);

  // Comportamentos problemas
  y = ensureRoom(doc, y, 80, header);
  y = drawSectionHeader(doc, y, "COMPORTAMENTOS PROBLEMAS LISTADOS");
  const behaviors = (pti.behavior_problems ?? []).filter((b) => b && b.trim());
  y = drawBullets(doc, y + 4, behaviors.length ? behaviors : ["—"]);

  // Conclusão
  y = ensureRoom(doc, y, 60, header);
  y = drawSectionHeader(doc, y, "CONSIDERAÇÕES E PLANO DE INTERVENÇÃO");
  y = drawParagraph(doc, y + 4, safe(pti.conclusion) || DEFAULT_CONCLUSION(data.patient.name));

  // Referência
  y = ensureRoom(doc, y, 40, header);
  y = drawParagraph(doc, y, safe(pti.reference) || DEFAULT_REFERENCE, { size: 9, color: [90, 90, 90] });

  // Assinatura
  y = ensureRoom(doc, y, 120, header);
  y = drawSignatureBlock(doc, y + 4, pti);

  addFooters(doc, data);

  const safeName = (data.patient.name || "paciente")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "_");
  downloadPdf(doc, `PTI_${safeName}_${data.evaluation_date}.pdf`);
}
