export interface ClinicalTextSuggestion {
  label: string;
  text: string;
}

export const CLINICAL_TEXT_SUGGESTIONS = {
  responsibleReport: [
    { label: "Comunicação e autonomia", text: "dificuldades na comunicação funcional, na compreensão de demandas do cotidiano e na ampliação da autonomia em casa" },
    { label: "Rotina e transições", text: "necessidade de apoio para transições de rotina, tolerância a mudanças e organização de atividades diárias" },
    { label: "Interação social", text: "desafios relacionados à interação com pares, participação em ambientes sociais e manutenção do engajamento em atividades compartilhadas" },
    { label: "Autocuidado e alimentação", text: "dificuldades em situações de autocuidado e/ou seletividade alimentar, com necessidade de construção gradual de repertórios" },
    { label: "Sono e rotina", text: "oscilações na qualidade do sono e impactos na disposição e na organização da rotina" },
    { label: "Interesses do paciente", text: "interesses específicos que podem ser utilizados como recurso de motivação e aprendizagem" },
  ],
  developmentProfile: [
    { label: "Comunicação funcional", text: "apresenta necessidade de apoio para ampliar a comunicação funcional, a iniciativa comunicativa e a atenção compartilhada" },
    { label: "Interação e turnos", text: "apresenta desafios na interação social recíproca, na manutenção de turnos e na participação em atividades compartilhadas" },
    { label: "Linguagem", text: "apresenta dificuldades no desenvolvimento da linguagem expressiva e/ou compreensiva, beneficiando-se de recursos visuais e comandos objetivos" },
    { label: "Autonomia e AVDs", text: "necessita de suporte gradativo em atividades de vida diária, incluindo organização, higiene, alimentação e participação nas rotinas" },
    { label: "Aprendizagem estruturada", text: "beneficia-se de ambiente estruturado, previsibilidade e mediação para iniciar, manter e concluir tarefas" },
    { label: "Habilidades emergentes", text: "apresenta habilidades emergentes de imitação, atenção conjunta e resolução de problemas, que devem ser ampliadas" },
  ],
  behaviorDescription: [
    { label: "Frustração e recusa", text: "Apresenta baixa tolerância à frustração; diante de demandas não preferidas, pode apresentar fuga, recusa e redução da permanência na atividade" },
    { label: "Mudanças e espera", text: "Pode demonstrar desconforto diante de mudanças de rotina, transições ou espera, necessitando de preparação antecipada e apoio para autorregulação" },
    { label: "Agitação e impulsividade", text: "Apresenta períodos de agitação e/ou impulsividade, beneficiando-se de estratégias de organização ambiental, pausas planejadas e instruções objetivas" },
    { label: "Sensibilidades sensoriais", text: "Apresenta sensibilidades a estímulos sensoriais que podem impactar o engajamento, sendo importante observar preferências e gatilhos ambientais" },
    { label: "Autoagressão relatada", text: "Os responsáveis relatam comportamentos de autoagressão em situações específicas; recomenda-se registrar antecedentes, comportamentos e consequências" },
    { label: "Heteroagressão relatada", text: "Os responsáveis relatam comportamentos de heteroagressão em situações específicas; recomenda-se registrar antecedentes, comportamentos e consequências" },
  ],
} as const satisfies Record<string, readonly ClinicalTextSuggestion[]>;

export function appendClinicalText(existing: string | undefined, suggestion: string) {
  const current = existing?.trim() ?? "";
  return current ? `${current} ${suggestion}` : suggestion;
}

export function appendClinicalTexts(existing: string | undefined, suggestions: readonly string[]) {
  return suggestions.reduce(
    (current, suggestion) => current.includes(suggestion) ? current : appendClinicalText(current, suggestion),
    existing?.trim() ?? "",
  );
}
