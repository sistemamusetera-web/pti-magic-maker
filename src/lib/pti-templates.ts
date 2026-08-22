import type { PTIObjective } from "@/lib/pti-pdf";

export interface ClinicalHistoryTemplate {
  id: string;
  label: string;
  summary: string;
  text: string;
}

export interface ObjectivesTemplate {
  id: string;
  label: string;
  summary: string;
  items: PTIObjective[];
  area?: string; // Musicoterapia, Psicologia, etc.
}

export interface BehaviorsTemplate {
  id: string;
  label: string;
  summary: string;
  items: string[];
}

export interface ConclusionTemplate {
  id: string;
  label: string;
  summary: string;
  text: string;
}

/* ------------------ BREVE HISTÓRIA CLÍNICA ------------------ */
export const CLINICAL_HISTORY_TEMPLATES: ClinicalHistoryTemplate[] = [
  {
    id: "tea-leve",
    label: "TEA - Suporte leve (Nível 1)",
    summary: "Criança verbal, com dificuldades sociais leves e interesses restritos.",
    text:
      "Beneficiário(a) com diagnóstico de Transtorno do Espectro Autista (CID-10 F84.0), nível 1 de suporte. Apresenta linguagem verbal funcional, com vocabulário adequado à faixa etária, porém demonstra dificuldades em iniciar e manter interações sociais espontâneas, especialmente com pares. Observa-se interesse restrito por temas específicos, dificuldade em compreender regras sociais implícitas, ironia e figuras de linguagem. Mantém contato visual breve e responde a comandos simples e complexos. Apresenta boa autonomia nas atividades de vida diária, com necessidade de suporte pontual em situações novas ou de maior demanda sensorial. Não há relatos de comportamentos disruptivos significativos, sendo observadas apenas estereotipias motoras leves em momentos de ansiedade.",
  },
  {
    id: "tea-moderado",
    label: "TEA - Suporte moderado (Nível 2)",
    summary: "Linguagem restrita, comportamentos repetitivos e necessidade de apoio.",
    text:
      "Beneficiário(a) com diagnóstico de Transtorno do Espectro Autista (CID-10 F84.0), nível 2 de suporte. Apresenta linguagem verbal restrita, com predominância de frases curtas, ecolalia imediata e tardia, além de dificuldade acentuada na comunicação social recíproca. Demonstra pouco interesse por interação com pares, preferindo brincar de forma isolada e com objetos específicos de seu interesse. Observam-se comportamentos repetitivos e estereotipados (flapping, balanceio, alinhamento de objetos), resistência a mudanças de rotina e seletividade alimentar. Necessita de suporte constante nas atividades de vida diária (alimentação, higiene e vestuário). Contato visual inconsistente e respostas ao nome parciais.",
  },
  {
    id: "tea-severo",
    label: "TEA - Suporte substancial (Nível 3)",
    summary: "Não-verbal, comportamentos disruptivos e alta dependência.",
    text:
      "Beneficiário(a) com diagnóstico de Transtorno do Espectro Autista (CID-10 F84.0), nível 3 de suporte. Apresenta-se não-verbal, comunicando suas necessidades majoritariamente por meio de gestos, choro, condução da mão do adulto e vocalizações não-funcionais. Demonstra ausência de contato visual sustentado, ausência de resposta ao nome e prejuízo grave na reciprocidade social. Observam-se comportamentos repetitivos intensos, estereotipias motoras frequentes, hipersensibilidade sensorial (auditiva e tátil) e comportamentos disruptivos como auto e heteroagressão em situações de frustração ou quebra de rotina. Apresenta dependência total nas atividades de vida diária, necessitando de auxílio para alimentação, higiene, vestuário e locomoção em ambientes externos.",
  },
  {
    id: "tdah",
    label: "TDAH - Desatenção e hiperatividade",
    summary: "Impulsividade, agitação motora e dificuldade de concentração.",
    text:
      "Beneficiário(a) com diagnóstico de Transtorno de Déficit de Atenção e Hiperatividade (CID-10 F90.0), apresentação combinada. Observa-se agitação motora persistente, dificuldade em permanecer sentado durante atividades estruturadas, impulsividade nas respostas e nas interações sociais, além de baixa tolerância à frustração. Apresenta prejuízo significativo no foco atencional, distraindo-se com estímulos externos com facilidade e demonstrando dificuldade em concluir tarefas iniciadas. A linguagem é preservada, com discurso por vezes acelerado e interrupções frequentes. Mantém boas habilidades sociais, embora as relações com pares sejam impactadas pela impulsividade. Autonomia adequada nas atividades de vida diária, com necessidade de supervisão para organização escolar e rotina.",
  },
  {
    id: "atraso-global",
    label: "Atraso global do desenvolvimento",
    summary: "Marcos atrasados em múltiplas áreas.",
    text:
      "Beneficiário(a) com diagnóstico de Atraso Global do Desenvolvimento (CID-10 F83), apresentando marcos motores, cognitivos, de linguagem e sociais aquém do esperado para a faixa etária cronológica. A linguagem expressiva encontra-se em fase inicial, com uso de poucas palavras funcionais e predomínio de gestos comunicativos. A linguagem receptiva mostra-se mais preservada, compreendendo comandos simples do cotidiano. Observa-se prejuízo na coordenação motora fina e grossa, com necessidade de suporte em atividades de vida diária. A interação social é preservada, apresentando bom contato visual, sorriso social e busca ativa pelo adulto. Não há relatos de comportamentos disruptivos.",
  },
  {
    id: "custom",
    label: "Personalizado (em branco)",
    summary: "Escrever do zero.",
    text: "",
  },
];

/* ------------------ OBJETIVOS POR ÁREA (PROFISSIONAL) ------------------ */
export const OBJECTIVES_TEMPLATES: ObjectivesTemplate[] = [
  // MUSICOTERAPIA
  {
    id: "mt-comunicacao",
    area: "Musicoterapia",
    label: "MT - Comunicação e Vocalização",
    summary: "Estimular vocalização e turnos via música.",
    items: [
      {
        objetivo: "Ampliar vocalizações funcionais durante experiências musicais.",
        atividade: "Canto de músicas previsíveis com pausas estratégicas (fill-in).",
        material: "Violão, teclado, canções de repetição.",
      },
      {
        objetivo: "Desenvolver atenção auditiva e resposta a estímulos sonoros.",
        atividade: "Discriminação de sons de instrumentos e jogos de 'começou/parou'.",
        material: "Instrumentos de percussão variados.",
      }
    ],
  },
  {
    id: "mt-social",
    area: "Musicoterapia",
    label: "MT - Socialização e Vínculo",
    summary: "Interação e reciprocidade social musical.",
    items: [
      {
        objetivo: "Estabelecer vínculo terapêutico e contato visual sustentado.",
        atividade: "Canção de saudação personalizada com o nome do beneficiário.",
        material: "Violão, instrumentos de percussão.",
      }
    ],
  },
  // PSICOLOGIA
  {
    id: "psi-regulacao",
    area: "Psicologia",
    label: "PSI - Regulação Emocional",
    summary: "Manejo de frustração e autorregulação.",
    items: [
      {
        objetivo: "Identificar e nomear emoções básicas em si e no outro.",
        atividade: "Uso de cartões de sentimentos e dramatização de cenas sociais.",
        material: "Cartões de emoções, espelho, fantoches.",
      },
      {
        objetivo: "Utilizar estratégias de acalmia em momentos de desregulação.",
        atividade: "Treino de respiração diafragmática e uso de 'cantinho da calma'.",
        material: "Timer visual, objetos sensoriais.",
      }
    ],
  },
  {
    id: "psi-social",
    area: "Psicologia",
    label: "PSI - Habilidades Sociais",
    summary: "Iniciação social e resolução de conflitos.",
    items: [
      {
        objetivo: "Iniciar interação com pares de forma adequada.",
        atividade: "Treino de roteiros sociais (scripts) e role-playing.",
        material: "Histórias sociais, scripts visuais.",
      }
    ],
  },
  // FONOAUDIOLOGIA
  {
    id: "fono-linguagem",
    area: "Fonoaudiologia",
    label: "FONO - Linguagem Expressiva",
    summary: "Expansão de vocabulário e estruturação frasal.",
    items: [
      {
        objetivo: "Aumentar vocabulário expressivo (substantivos e verbos).",
        atividade: "Nomeação de figuras e objetos reais em contextos lúdicos.",
        material: "Cards, miniaturas, livros ilustrados.",
      },
      {
        objetivo: "Produzir frases com estrutura Sujeito + Verbo + Complemento.",
        atividade: "Uso de pistas visuais para estruturação de sentenças.",
        material: "Pranchas de comunicação, figuras de ação.",
      }
    ],
  },
  {
    id: "fono-oro",
    area: "Fonoaudiologia",
    label: "FONO - Motricidade Orofacial",
    summary: "Fortalecimento e coordenação de órgãos fonoarticulatórios.",
    items: [
      {
        objetivo: "Melhorar a mobilidade e tônus de língua e lábios.",
        atividade: "Exercícios miofuncionais orofaciais lúdicos.",
        material: "Espelho, espátulas, estimuladores vibratórios.",
      }
    ],
  },
  // NUTRIÇÃO
  {
    id: "nutri-seletividade",
    area: "Nutrição",
    label: "NUTRI - Seletividade Alimentar",
    summary: "Aproximação e aceitação de novos alimentos.",
    items: [
      {
        objetivo: "Tolerar a presença de novos alimentos no prato.",
        atividade: "Exposição gradual e atividades lúdicas de exploração sensorial.",
        material: "Alimentos variados, utensílios coloridos.",
      },
      {
        objetivo: "Experimentar novas texturas e sabores de forma voluntária.",
        atividade: "Culinária terapêutica e encadeamento alimentar (food chaining).",
        material: "Ingredientes para receitas simples.",
      }
    ],
  },
  // PSICOMOTRICIDADE
  {
    id: "pm-coordenacao",
    area: "Psicomotricidade",
    label: "PM - Coordenação Motora Global",
    summary: "Equilíbrio, esquema corporal e planejamento motor.",
    items: [
      {
        objetivo: "Melhorar o equilíbrio estático e dinâmico.",
        atividade: "Circuitos motores com obstáculos e planos inclinados.",
        material: "Corda, balancim, túnel, cones.",
      },
      {
        objetivo: "Desenvolver a noção de esquema e imagem corporal.",
        atividade: "Atividades de reconhecimento das partes do corpo em movimento.",
        material: "Espelho grande, músicas de movimento.",
      }
    ],
  },
  // TERAPIA OCUPACIONAL — AVDs
  {
    id: "avds-autonomia",
    area: "Terapia Ocupacional",
    label: "AVDs — Atividades de Vida Diária",
    summary: "Autonomia em higiene, alimentação e vestuário.",
    items: [
      {
        objetivo: "Ampliar a independência nas AVDs de higiene, vestuário e alimentação conforme o nível de suporte necessário.",
        atividade: "Treino por encadeamento de etapas, com pistas visuais e redução gradual de ajuda física ou verbal.",
        material: "Sequências visuais, espelho, utensílios adaptados e materiais de autocuidado.",
      },
    ],
  },
  // TERAPIA OCUPACIONAL — AIVDs
  {
    id: "aivds-autonomia",
    area: "Terapia Ocupacional",
    label: "AIVDs — Atividades Instrumentais de Vida Diária",
    summary: "Organização, preparo simples de alimentos e rotina doméstica.",
    items: [
      {
        objetivo: "Desenvolver a participação nas AIVDs adequadas à faixa etária, como organização de pertences, preparo simples de lanche e rotina doméstica.",
        atividade: "Simulação de tarefas do cotidiano com checklist visual, prática guiada e reforço da iniciativa.",
        material: "Checklist ilustrado, mochila, utensílios de cozinha seguros e organizadores.",
      },
    ],
  },
  // PSICOPEDAGOGIA
  {
    id: "pp-alfabetizacao",
    area: "Psicopedagogia",
    label: "PP - Pré-requisitos para Alfabetização",
    summary: "Consciência fonológica e percepção visual.",
    items: [
      {
        objetivo: "Desenvolver consciência fonológica (rimas e aliterações).",
        atividade: "Jogos de sons e associação fonema-grafema.",
        material: "Letras móveis, jogos de rima.",
      },
      {
        objetivo: "Identificar e nomear letras do alfabeto e números.",
        atividade: "Atividades multissensoriais de traçado e reconhecimento.",
        material: "Areia colorida, massinha, cartões numéricos.",
      }
    ],
  },
  {
    id: "pp-funcoes",
    area: "Psicopedagogia",
    label: "PP - Funções Executivas",
    summary: "Atenção, memória de trabalho e planejamento.",
    items: [
      {
        objetivo: "Manter a atenção em atividades acadêmicas por 15 minutos.",
        atividade: "Uso de organizadores visuais e divisão de tarefas em etapas.",
        material: "Checklists, timers, reforçadores.",
      }
    ],
  }
];

/* ------------------ COMPORTAMENTOS PROBLEMAS ------------------ */
export const BEHAVIORS_TEMPLATES: BehaviorsTemplate[] = [
  {
    id: "beh-leve",
    label: "Comportamentos Leves",
    summary: "Estereotipias motoras e desatenção.",
    items: [
      "Estereotipias motoras (flapping, balanceio) em momentos de excitação.",
      "Dificuldade em manter contato visual sustentado durante demandas.",
      "Desatenção a estímulos verbais quando engajado em interesse restrito.",
    ],
  },
  {
    id: "beh-moderado",
    label: "Comportamentos Moderados",
    summary: "Resistência a mudanças e ecolalia.",
    items: [
      "Resistência significativa a mudanças na rotina estabelecida.",
      "Ecolalia imediata ou tardia que interfere na comunicação funcional.",
      "Dificuldade em aceitar o 'não' ou esperar por itens desejados.",
    ],
  },
  {
    id: "beh-severo",
    label: "Comportamentos Severos",
    summary: "Auto/heteroagressividade e crises intensas.",
    items: [
      "Episódios de autoagressividade (bater na cabeça, morder-se) em frustração.",
      "Comportamento heteroagressivo direcionado a pares ou adultos.",
      "Crises sensoriais intensas com perda de controle motor e choro prolongado.",
    ],
  },
];

/* ------------------ CONSIDERAÇÕES FINAIS ------------------ */
export const CONCLUSION_TEMPLATES: ConclusionTemplate[] = [
  {
    id: "conc-padrao",
    label: "Intervenção Multidisciplinar",
    summary: "Foco no desenvolvimento global e suporte à família.",
    text:
      "Diante do quadro apresentado, recomenda-se a continuidade da intervenção terapêutica multidisciplinar, com foco na ampliação das habilidades de comunicação social, autonomia e regulação comportamental. É fundamental a parceria com a família para a generalização dos ganhos para o ambiente domiciliar e escolar. O plano será revisado semestralmente para ajustes conforme a evolução do beneficiário.",
  },
  {
    id: "conc-escolar",
    label: "Suporte e Inclusão Escolar",
    summary: "Foco em adaptações curriculares e mediação social.",
    text:
      "A intervenção focará prioritariamente no suporte ao processo de inclusão escolar, auxiliando na mediação das relações sociais com pares e na adaptação de atividades acadêmicas. Recomenda-se reuniões periódicas com a equipe escolar para alinhamento de estratégias de manejo e suporte pedagógico individualizado.",
  },
];
