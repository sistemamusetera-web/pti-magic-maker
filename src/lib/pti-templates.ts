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
    id: "mt-comunicacao-atencao",
    area: "Musicoterapia",
    label: "MT - Comunicação e Atenção Compartilhada",
    summary: "Vocalização, escuta, imitação e alternância de turnos em experiências musicais.",
    items: [
      {
        objetivo: "Ampliar a atenção compartilhada com o terapeuta durante experiências musicais estruturadas.",
        atividade: "Alternar foco entre pessoa, instrumento e música em canções de saudação e jogos de pausa.",
        material: "Violão, teclado, instrumentos de percussão e imagens de apoio.",
      },
      {
        objetivo: "Ampliar vocalizações, gestos ou recursos de comunicação para solicitar continuidade, escolha ou repetição musical.",
        atividade: "Canto de músicas previsíveis com pausas estratégicas e oferta de escolhas entre instrumentos ou canções.",
        material: "Canções de repetição, cartões de escolha e recursos de comunicação suplementar quando indicados.",
      },
      {
        objetivo: "Desenvolver discriminação auditiva e resposta funcional a contrastes sonoros simples.",
        atividade: "Jogos de identificação de instrumentos, intensidade, duração e comandos musicais de começar/parar.",
        material: "Instrumentos de percussão variados, cartões visuais e aparelho de som.",
      },
      {
        objetivo: "Imitar sequências motoras e sonoras simples dentro de um contexto musical significativo.",
        atividade: "Modelagem e reprodução de padrões curtos de palmas, batidas e movimentos corporais.",
        material: "Tambor, chocalhos, claves e músicas com gestos.",
      },
    ],
  },
  {
    id: "mt-social-regulacao",
    area: "Musicoterapia",
    label: "MT - Interação Social e Regulação",
    summary: "Vínculo, participação em pares, transições e autorregulação com recursos musicais.",
    items: [
      {
        objetivo: "Iniciar ou responder a trocas sociais em jogos musicais de turnos.",
        atividade: "Alternância de instrumentos com convite, espera e resposta ao parceiro terapêutico.",
        material: "Instrumentos de fácil manejo e cartões de vez.",
      },
      {
        objetivo: "Participar de experiências musicais compartilhadas com pares, respeitando turnos e regras simples.",
        atividade: "Rodas musicais com papéis definidos, imitação recíproca e encerramento coletivo.",
        material: "Percussão coletiva, marcações visuais de turno e canções sociais.",
      },
      {
        objetivo: "Utilizar pistas musicais previsíveis para apoiar transições e estratégias de autorregulação.",
        atividade: "Construção de canções curtas para início, pausa, organização e encerramento de atividades.",
        material: "Playlist terapêutica, cartões de rotina e timer visual.",
      },
    ],
  },
  // PSICOLOGIA
  {
    id: "psi-regulacao-comunicacao",
    area: "Psicologia",
    label: "PSI - Regulação Emocional e Comunicação Funcional",
    summary: "Reconhecimento emocional, estratégias de regulação e respostas alternativas à frustração.",
    items: [
      {
        objetivo: "Identificar e nomear emoções básicas em si e no outro.",
        atividade: "Uso de cartões de sentimentos e dramatização de cenas sociais.",
        material: "Cartões de emoções, espelho, fantoches.",
      },
      {
        objetivo: "Utilizar estratégias previamente combinadas de co-regulação ou autorregulação diante de sinais iniciais de desconforto.",
        atividade: "Ensino e prática guiada de pausa, respiração, solicitação de apoio e acesso ao espaço de regulação.",
        material: "Timer visual, cartão de pausa e recursos sensoriais individualizados.",
      },
      {
        objetivo: "Comunicar necessidades, preferências, recusa ou pedido de ajuda de forma socialmente compreensível.",
        atividade: "Ensaios em brincadeiras e situações simuladas com modelagem de frases, gestos ou recursos visuais.",
        material: "Cartões de comunicação, pranchas visuais e brinquedos de interesse.",
      },
      {
        objetivo: "Substituir respostas que dificultam a participação por alternativas funcionais em situações de frustração.",
        atividade: "Análise de antecedente-resposta-consequência e treino de resposta alternativa em cenários graduados.",
        material: "Histórias sociais, escala visual de emoções e reforçadores definidos em plano terapêutico.",
      },
    ],
  },
  {
    id: "psi-social-flexibilidade",
    area: "Psicologia",
    label: "PSI - Habilidades Sociais e Flexibilidade",
    summary: "Espera, transições, iniciação social e resolução mediada de situações cotidianas.",
    items: [
      {
        objetivo: "Aguardar a vez e tolerar pequenos adiamentos com suporte visual progressivamente reduzido.",
        atividade: "Jogos de turnos e treino de espera com previsão de tempo e reforço de estratégias de enfrentamento.",
        material: "Timer visual, cartões de vez e jogos estruturados.",
      },
      {
        objetivo: "Participar de transições e pequenas mudanças de rotina utilizando antecipação e escolhas limitadas.",
        atividade: "Uso de agenda visual, aviso prévio e ensaio de alternativas para mudanças planejadas.",
        material: "Rotina visual, cartões de mudança e quadro de escolhas.",
      },
      {
        objetivo: "Iniciar, responder e manter trocas sociais simples com pares ou adultos em atividades significativas.",
        atividade: "Treino de roteiros sociais, brincadeiras cooperativas e role-playing com feedback imediato.",
        material: "Histórias sociais, scripts visuais e jogos cooperativos.",
      },
    ],
  },
  // FONOAUDIOLOGIA
  {
    id: "fono-comunicacao-receptiva-expressiva",
    area: "Fonoaudiologia",
    label: "FONO - Comunicação Receptiva e Expressiva",
    summary: "Compreensão, vocabulário, solicitação funcional e combinação de palavras.",
    items: [
      {
        objetivo: "Ampliar a compreensão de instruções funcionais de uma ou mais etapas, conforme avaliação fonoaudiológica.",
        atividade: "Execução de comandos inseridos em rotinas de brincadeira, autocuidado e organização.",
        material: "Objetos reais, figuras sequenciais e cartões visuais.",
      },
      {
        objetivo: "Aumentar o repertório de palavras, sinais ou símbolos funcionais relacionados a pessoas, ações, objetos e necessidades.",
        atividade: "Nomeação e uso funcional de vocabulário em contextos naturais e brincadeiras dirigidas.",
        material: "Miniaturas, livros ilustrados, objetos de rotina e recursos de comunicação.",
      },
      {
        objetivo: "Produzir solicitações funcionais por fala, gesto, sinal ou comunicação suplementar e alternativa, quando indicada.",
        atividade: "Criação de oportunidades de comunicação com espera, escolhas e modelagem responsiva.",
        material: "Itens preferidos, pranchas de comunicação e cartões de escolha.",
      },
      {
        objetivo: "Ampliar combinações de palavras ou símbolos para comunicar intenção, ação e complemento conforme o repertório atual.",
        atividade: "Expansão de enunciados durante brincadeiras, leitura compartilhada e atividades de rotina.",
        material: "Pranchas de comunicação, figuras de ação e livros ilustrados.",
      },
    ],
  },
  {
    id: "fono-pragmatica-fala",
    area: "Fonoaudiologia",
    label: "FONO - Comunicação Social e Fala",
    summary: "Atenção conjunta, turnos conversacionais, pragmática e inteligibilidade conforme indicação clínica.",
    items: [
      {
        objetivo: "Responder a iniciativas comunicativas e compartilhar atenção com outra pessoa durante atividades de interesse.",
        atividade: "Leitura compartilhada, brincadeiras de causa e efeito e comentários contingentes às iniciativas da criança.",
        material: "Livros, brinquedos interativos e recursos visuais.",
      },
      {
        objetivo: "Alternar turnos comunicativos em brincadeiras e conversas curtas com apoio graduado.",
        atividade: "Jogos de vez, perguntas previsíveis e sequências de pergunta-resposta-comentário.",
        material: "Cartões de turno, jogos estruturados e objetos motivadores.",
      },
      {
        objetivo: "Aprimorar a inteligibilidade de sons ou palavras-alvo definidos na avaliação fonoaudiológica.",
        atividade: "Prática contextualizada de palavras-alvo com pistas auditivas, visuais e táteis quando apropriado.",
        material: "Espelho, figuras de palavras-alvo e materiais lúdicos.",
      },
    ],
  },
  // NUTRIÇÃO
  {
    id: "nutri-exploracao-seletividade",
    area: "Nutrição",
    label: "NUTRI - Exploração e Seletividade Alimentar",
    summary: "Exposição gradual, exploração sensorial e ampliação individualizada do repertório alimentar.",
    items: [
      {
        objetivo: "Tolerar a presença de novos alimentos no prato.",
        atividade: "Exposição gradual e atividades lúdicas de exploração sensorial.",
        material: "Alimentos variados, utensílios coloridos.",
      },
      {
        objetivo: "Explorar novas texturas, cheiros, cores e formatos de alimentos sem exigência imediata de ingestão.",
        atividade: "Sequência de olhar, tocar, cheirar, aproximar e provar, respeitando sinais de desconforto.",
        material: "Alimentos planejados, bandejas de exploração e utensílios adequados.",
      },
      {
        objetivo: "Avançar gradualmente na hierarquia individual de aceitação de alimentos, conforme plano nutricional.",
        atividade: "Exposição graduada e encadeamento alimentar com registro de respostas e preferências.",
        material: "Alimentos-alvo, ficha de acompanhamento e utensílios de refeição.",
      },
      {
        objetivo: "Ampliar o repertório alimentar dentro das necessidades nutricionais e culturais da família.",
        atividade: "Apresentação de variações próximas a alimentos já aceitos e participação em escolhas guiadas.",
        material: "Lista de alimentos aceitos, alimentos similares e cartões de escolha.",
      },
    ],
  },
  {
    id: "nutri-autonomia-rotina",
    area: "Nutrição",
    label: "NUTRI - Autonomia e Rotina Alimentar",
    summary: "Participação nas refeições, uso de utensílios e comunicação de preferências alimentares.",
    items: [
      {
        objetivo: "Comunicar preferências, recusa e sinais de saciedade por meios compatíveis com seu repertório comunicativo.",
        atividade: "Modelagem de escolhas, escalas visuais e treino de pedidos durante situações de refeição simulada ou real.",
        material: "Pranchas de escolha, cartões de alimentos e escala visual de fome e saciedade.",
      },
      {
        objetivo: "Participar da rotina alimentar utilizando utensílios, postura e apoios definidos pela equipe responsável.",
        atividade: "Treino funcional de mesa com adaptação gradual de utensílios e redução de ajuda quando seguro.",
        material: "Talheres, copos e recursos adaptados quando indicados.",
      },
      {
        objetivo: "Participar de etapas simples e seguras de preparo ou organização da refeição, de acordo com idade e supervisão necessária.",
        atividade: "Separar ingredientes, lavar itens permitidos, montar lanche simples e organizar a mesa com sequência visual.",
        material: "Checklist visual, utensílios seguros e ingredientes previamente definidos.",
      },
    ],
  },
  // PSICOMOTRICIDADE
  {
    id: "pm-coordenacao-planejamento",
    area: "Psicomotricidade",
    label: "PM - Coordenação e Planejamento Motor",
    summary: "Equilíbrio, bilateralidade, coordenação fina e sequências motoras funcionais.",
    items: [
      {
        objetivo: "Melhorar o equilíbrio estático e dinâmico.",
        atividade: "Circuitos motores com obstáculos e planos inclinados.",
        material: "Corda, balancim, túnel, cones.",
      },
      {
        objetivo: "Desenvolver coordenação bilateral em atividades que exigem uso integrado dos dois lados do corpo.",
        atividade: "Jogos de arremessar e receber, rasgar, encaixar, abrir recipientes e circuitos com cruzamento da linha média.",
        material: "Bolas, prendedores, recipientes, blocos e fitas no chão.",
      },
      {
        objetivo: "Planejar e executar sequências motoras simples com redução gradual de pistas.",
        atividade: "Circuitos com duas a quatro etapas, demonstração inicial e revisão visual da sequência.",
        material: "Cartões sequenciais, cones, argolas e túnel.",
      },
      {
        objetivo: "Aprimorar coordenação motora fina e integração visomotora em tarefas funcionais.",
        atividade: "Atividades de encaixe, traçado, recorte adaptado, pinça e manipulação de pequenos objetos.",
        material: "Massinha, pinças, prendedores, lápis e jogos de encaixe.",
      },
    ],
  },
  {
    id: "pm-corpo-regulacao",
    area: "Psicomotricidade",
    label: "PM - Esquema Corporal, Ritmo e Regulação",
    summary: "Consciência corporal, ritmo, imitação e participação em brincadeiras motoras estruturadas.",
    items: [
      {
        objetivo: "Desenvolver a noção de esquema corporal e orientação espacial em atividades de movimento.",
        atividade: "Reconhecimento de partes do corpo, comandos espaciais e brincadeiras diante do espelho.",
        material: "Espelho grande, músicas de movimento e cartões corporais.",
      },
      {
        objetivo: "Imitar ritmos e gestos motores simples em atividades lúdicas compartilhadas.",
        atividade: "Sequências de palmas, passos, movimentos com música e jogos de espelho.",
        material: "Músicas rítmicas, tambor e cartões de movimentos.",
      },
      {
        objetivo: "Manter participação organizada em brincadeiras motoras com regras simples e transições previsíveis.",
        atividade: "Jogos de parar/seguir, revezamento e circuitos com início e fim sinalizados.",
        material: "Sinal visual de início/fim, cones, bolas e timer.",
      },
    ],
  },
  // TERAPIA OCUPACIONAL — AVDs
  {
    id: "avds-autonomia",
    area: "Terapia Ocupacional",
    label: "AVDs — Atividades de Vida Diária",
    summary: "Autonomia progressiva em higiene, vestuário, alimentação e rotina de autocuidado.",
    items: [
      {
        objetivo: "Completar a rotina de lavagem das mãos seguindo uma sequência de etapas com suporte graduado.",
        atividade: "Treino por encadeamento de etapas antes de refeições e após uso do banheiro.",
        material: "Sequência visual, sabonete, toalha e pia acessível.",
      },
      {
        objetivo: "Realizar etapas da higiene oral conforme o repertório motor e o nível de suporte necessário.",
        atividade: "Modelagem, prática com espelho e sequência visual de escovar, enxaguar e guardar os materiais.",
        material: "Escova, creme dental, copo, espelho e rotina ilustrada.",
      },
      {
        objetivo: "Vestir ou retirar peças de roupa adequadas à rotina, utilizando estratégias de adaptação quando indicadas.",
        atividade: "Treino de vestir e despir por encadeamento, com organização das peças e redução gradual de ajuda.",
        material: "Roupas de treino, quadro de passos e recursos adaptados quando necessários.",
      },
      {
        objetivo: "Participar da alimentação com maior autonomia no uso de utensílios e na organização da mesa.",
        atividade: "Treino funcional de colher, garfo, copo e organização de itens da refeição conforme segurança e suporte definidos.",
        material: "Utensílios usuais ou adaptados, prato, copo e apoio visual.",
      },
      {
        objetivo: "Participar da rotina de uso do banheiro de acordo com o plano de autonomia e as necessidades de apoio.",
        atividade: "Sequência visual de ida ao banheiro, higiene e finalização, com registro das etapas realizadas.",
        material: "Rotina visual, redutor ou apoio quando indicado e materiais de higiene.",
      },
      {
        objetivo: "Executar etapas de banho, cuidados pessoais ou organização de aparência compatíveis com a faixa etária.",
        atividade: "Simulação e treino em contexto seguro de pentear cabelo, limpar o rosto, aplicar desodorante ou separar itens de higiene.",
        material: "Kit de higiene pessoal, espelho e checklist ilustrado.",
      },
      {
        objetivo: "Organizar e finalizar a rotina pessoal, guardando materiais de autocuidado nos locais definidos.",
        atividade: "Uso de etiquetas visuais e checklist de início, execução e encerramento da rotina.",
        material: "Etiquetas, caixas organizadoras e checklist visual.",
      },
    ],
  },
  // TERAPIA OCUPACIONAL — AIVDs
  {
    id: "aivds-autonomia",
    area: "Terapia Ocupacional",
    label: "AIVDs — Atividades Instrumentais de Vida Diária",
    summary: "Organização, rotina doméstica, preparo simples de alimentos e participação comunitária conforme a idade.",
    items: [
      {
        objetivo: "Organizar mochila, materiais pessoais ou itens escolares com checklist e redução gradual de pistas.",
        atividade: "Separação e guarda de itens para uma rotina real ou simulada de casa e escola.",
        material: "Mochila, checklist ilustrado, etiquetas e organizadores.",
      },
      {
        objetivo: "Seguir uma rotina visual para iniciar, executar e concluir uma tarefa doméstica simples.",
        atividade: "Prática guiada de guardar brinquedos, dobrar panos, limpar superfície ou separar roupas.",
        material: "Rotina ilustrada, caixas, panos e cestos.",
      },
      {
        objetivo: "Preparar lanche simples e seguro dentro das orientações familiares e da supervisão necessária.",
        atividade: "Separar ingredientes, montar sanduíche ou lanche frio e organizar o local após o uso.",
        material: "Utensílios seguros, ingredientes previamente definidos e checklist visual.",
      },
      {
        objetivo: "Planejar uma tarefa cotidiana simples escolhendo materiais e seguindo uma sequência previamente combinada.",
        atividade: "Organização de uma atividade com quadro de 'o que preciso', 'o que faço' e 'o que guardo'.",
        material: "Quadro de planejamento, cartões de etapas e materiais da tarefa.",
      },
      {
        objetivo: "Localizar, categorizar e guardar pertences em espaços definidos de casa ou escola.",
        atividade: "Classificação de itens por função e uso de etiquetas, cores ou fotografias de referência.",
        material: "Etiquetas visuais, caixas organizadoras e objetos pessoais.",
      },
      {
        objetivo: "Participar de situação simulada de compra ou escolha de itens de rotina, adequada à idade e ao contexto familiar.",
        atividade: "Lista visual, escolha entre opções, separação de itens e reconhecimento de etapas da compra simulada.",
        material: "Lista ilustrada, embalagens vazias, cédulas de brinquedo e cesta.",
      },
      {
        objetivo: "Deslocar-se entre atividades da rotina com apoio de agenda visual e estratégias de orientação previamente treinadas.",
        atividade: "Treino de sequências casa-escola-terapia em maquete, imagens ou percurso supervisionado.",
        material: "Agenda visual, fotos de locais e mapas simplificados.",
      },
    ],
  },
  // PSICOPEDAGOGIA
  {
    id: "pp-alfabetizacao-aprendizagem",
    area: "Psicopedagogia",
    label: "PP - Alfabetização e Aprendizagem Inicial",
    summary: "Consciência fonológica, leitura, escrita e conceitos matemáticos iniciais.",
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
      },
      {
        objetivo: "Relacionar letras, sons e palavras de alta relevância funcional para sua rotina.",
        atividade: "Associação de letras e palavras a nomes, objetos, lugares e interesses significativos.",
        material: "Letras móveis, cartões com palavras e imagens funcionais.",
      },
      {
        objetivo: "Ler ou reconhecer palavras e frases curtas com apoio visual compatível com o nível de escolaridade.",
        atividade: "Leitura compartilhada de rótulos, listas, histórias curtas e instruções de jogos.",
        material: "Livros adaptados, cartões de palavras e textos curtos.",
      },
    ],
  },
  {
    id: "pp-executivas-matematica",
    area: "Psicopedagogia",
    label: "PP - Funções Executivas e Matemática Funcional",
    summary: "Atenção, memória de trabalho, planejamento e noções matemáticas aplicadas ao cotidiano.",
    items: [
      {
        objetivo: "Manter atenção em atividade acadêmica ou funcional pelo tempo definido em avaliação, com estratégias de organização.",
        atividade: "Divisão da tarefa em etapas curtas, pausas planejadas e uso de timer visual.",
        material: "Checklists, timer visual e organizadores.",
      },
      {
        objetivo: "Fortalecer memória de trabalho e sequenciamento para concluir atividades com múltiplas etapas.",
        atividade: "Jogos de sequência, repetição de instruções curtas e organização de ações em ordem.",
        material: "Cartões sequenciais, jogos de memória e rotinas visuais.",
      },
      {
        objetivo: "Planejar, iniciar e revisar uma atividade usando estratégias visuais de organização.",
        atividade: "Uso de quadro 'primeiro-depois', lista de conferência e autoavaliação simples ao finalizar.",
        material: "Checklist, quadro visual e marcador apagável.",
      },
      {
        objetivo: "Aplicar noções de quantidade, correspondência e contagem em situações acadêmicas ou cotidianas significativas.",
        atividade: "Separação de objetos, jogos de contagem, comparação de quantidades e rotina de compras simuladas.",
        material: "Objetos manipuláveis, cartões numéricos e cédulas de brinquedo.",
      },
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
