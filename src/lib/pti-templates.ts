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
const RAW_OBJECTIVES_TEMPLATES: ObjectivesTemplate[] = [
  // MUSICOTERAPIA — DOMÍNIOS TERAPÊUTICOS
  {
    id: "mt-cognitivos",
    area: "Musicoterapia",
    label: "Cognitivos",
    summary: "Atenção, concentração, memória, sequenciamento, planejamento e processamento auditivo.",
    items: [
      {
        objetivo: "Ampliar a atenção sustentada em experiências musicais estruturadas.",
        atividade: "Participação em canções curtas com início, meio e fim sinalizados, aumentando gradualmente o tempo de engajamento.",
        material: "Violão, instrumentos de percussão, cartões de início e fim e timer visual.",
      },
      {
        objetivo: "Desenvolver concentração em uma tarefa musical com redução gradual de distratores.",
        atividade: "Execução de jogo de escuta e resposta a um instrumento-alvo em ambiente organizado.",
        material: "Instrumentos contrastantes, protetor auditivo quando indicado e sinal visual.",
      },
      {
        objetivo: "Fortalecer memória auditiva por meio da recordação de padrões sonoros simples.",
        atividade: "Escuta, pausa e reprodução de sequências curtas de sons, palavras ou gestos musicais.",
        material: "Tambor, claves, chocalhos e cartões sequenciais.",
      },
      {
        objetivo: "Organizar sequências de ações sonoras ou musicais em ordem funcional.",
        atividade: "Montagem e execução de cartões de sequência como ouvir, escolher, tocar e encerrar.",
        material: "Cartões com imagens de instrumentos e rotina visual.",
      },
      {
        objetivo: "Planejar uma resposta musical simples antes de executá-la.",
        atividade: "Escolha de instrumento, definição de uma sequência curta e execução com apoio verbal ou visual graduado.",
        material: "Opções de instrumentos, quadro de planejamento e cartões de escolha.",
      },
      {
        objetivo: "Aprimorar a percepção auditiva de contrastes de som, silêncio, intensidade, duração e timbre.",
        atividade: "Jogos de discriminação e pareamento de sons de instrumentos e pausas musicais.",
        material: "Instrumentos variados, aparelho de som e cartões de atributos sonoros.",
      },
      {
        objetivo: "Exercitar flexibilidade cognitiva ao variar regras, instrumentos ou formas de participação musical.",
        atividade: "Alternância planejada entre tocar, ouvir, cantar, pausar e seguir novas combinações simples.",
        material: "Cartões de mudança, instrumentos diversos e agenda visual.",
      },
      {
        objetivo: "Resolver problemas simples que surgem em tarefas musicais compartilhadas.",
        atividade: "Identificação guiada de alternativas quando falta um instrumento, muda o turno ou uma sequência precisa ser reorganizada.",
        material: "Instrumentos, cartões de solução e quadro de escolhas.",
      },
    ],
  },
  {
    id: "mt-motores",
    area: "Musicoterapia",
    label: "Motores",
    summary: "Coordenação fina, óculo-manual, planejamento motor, praxia, bilateralidade, precisão, força e sincronização.",
    items: [
      {
        objetivo: "Aprimorar coordenação motora fina na manipulação de instrumentos e recursos musicais.",
        atividade: "Preensão, pinça, chocalhar, pressionar teclas e posicionar instrumentos com apoio graduado.",
        material: "Chocalhos, sinos, teclado, pandeiro e instrumentos de pequeno porte.",
      },
      {
        objetivo: "Desenvolver coordenação óculo-manual em ações musicais dirigidas.",
        atividade: "Tocar alvos visuais no tambor, encaixar baquetas e acompanhar trajetos simples ao ritmo de uma música.",
        material: "Tambor, baquetas, alvos coloridos e fitas no chão.",
      },
      {
        objetivo: "Planejar movimentos necessários para realizar uma ação musical com início e encerramento definidos.",
        atividade: "Observar, preparar a postura, escolher o instrumento e executar uma sequência motora curta.",
        material: "Espelho, cartões de etapas e instrumentos adaptados quando indicados.",
      },
      {
        objetivo: "Ampliar praxia por meio da imitação e execução de gestos associados à música.",
        atividade: "Canções com gestos, jogos de espelho e sequências de movimentos corporais funcionais.",
        material: "Músicas com movimentos, espelho e cartões gestuais.",
      },
      {
        objetivo: "Desenvolver coordenação bilateral em experiências instrumentais e corporais.",
        atividade: "Uso combinado das duas mãos para tocar, segurar, alternar instrumentos e realizar movimentos rítmicos.",
        material: "Tambor, pandeiro, chocalhos e teclados.",
      },
      {
        objetivo: "Aprimorar a precisão de movimentos durante a execução de ações musicais específicas.",
        atividade: "Tocar pontos-alvo, iniciar e interromper movimentos conforme pistas rítmicas ou visuais.",
        material: "Tambor com marcações, baquetas, cartões de parar e seguir.",
      },
      {
        objetivo: "Ajustar o controle de força utilizado ao tocar instrumentos de diferentes resistências.",
        atividade: "Experimentação guiada de sons fortes e suaves, com feedback auditivo e visual.",
        material: "Tambor, teclado, sinos, escalas visuais de intensidade.",
      },
      {
        objetivo: "Sincronizar movimentos corporais ou instrumentais a um pulso musical simples.",
        atividade: "Caminhar, bater palmas ou tocar instrumentos acompanhando batidas regulares.",
        material: "Metrônomo, tambor, músicas rítmicas e marcadores de chão.",
      },
    ],
  },
  {
    id: "mt-comunicacao-linguagem",
    area: "Musicoterapia",
    label: "Comunicação e Linguagem",
    summary: "Comunicação verbal e não verbal, iniciativa, atenção compartilhada, vocalização, articulação, compreensão e intenção comunicativa.",
    items: [
      {
        objetivo: "Ampliar comunicação verbal funcional em contextos musicais significativos.",
        atividade: "Completar palavras em canções, nomear instrumentos e responder a perguntas simples durante a sessão.",
        material: "Canções previsíveis, instrumentos e cartões com palavras funcionais.",
      },
      {
        objetivo: "Utilizar comunicação não verbal para expressar escolhas, participação ou solicitação de continuidade.",
        atividade: "Oferta de escolhas entre canções e instrumentos, com espera e resposta por olhar, gesto, apontar ou sinal.",
        material: "Cartões de escolha, pranchas visuais e instrumentos preferidos.",
      },
      {
        objetivo: "Aumentar a iniciativa comunicativa durante interações musicais.",
        atividade: "Pausas estratégicas em canções e jogos de causa e efeito para favorecer pedidos, comentários ou convites.",
        material: "Violão, teclado, cartões de pedir e recursos de comunicação suplementar quando indicados.",
      },
      {
        objetivo: "Ampliar atenção compartilhada entre terapeuta, atividade e recurso musical.",
        atividade: "Alternância de olhar, escuta e resposta em canções de saudação, turnos instrumentais e brincadeiras musicais.",
        material: "Instrumentos de percussão, imagens de apoio e canções de rotina.",
      },
      {
        objetivo: "Favorecer vocalizações intencionais em resposta a pausas, modelos e experiências musicais.",
        atividade: "Canto responsivo, imitação de sons e preenchimento de lacunas em músicas familiares.",
        material: "Canções de repetição, microfone infantil e teclado.",
      },
      {
        objetivo: "Apoiar a produção de sons ou palavras-alvo em contexto musical, conforme planejamento interdisciplinar.",
        atividade: "Repetição rítmica de palavras funcionais, canto silabado e modelagem auditiva em músicas curtas.",
        material: "Espelho, cartões de palavras e canções personalizadas.",
      },
      {
        objetivo: "Compreender e responder a comandos simples inseridos em atividades musicais.",
        atividade: "Jogos de tocar, parar, guardar, escolher e trocar instrumentos com pistas graduadas.",
        material: "Cartões de ação, instrumentos variados e rotina visual.",
      },
      {
        objetivo: "Demonstrar comunicação intencional para expressar interesse, recusa, escolha ou necessidade de ajuda.",
        atividade: "Criação de oportunidades de comunicação em situações de escolha, espera e resolução de pequenos impasses musicais.",
        material: "Prancha de comunicação, cartões de escolha e instrumentos motivadores.",
      },
    ],
  },
  {
    id: "mt-musicais",
    area: "Musicoterapia",
    label: "Musicais",
    summary: "Ritmo, pulso, reprodução rítmica, melodia, canto, exploração instrumental, improvisação e criação musical.",
    items: [
      {
        objetivo: "Desenvolver percepção rítmica por meio da escuta e diferenciação de padrões simples.",
        atividade: "Identificação de ritmos lentos, rápidos, regulares e contrastantes em jogos de escuta.",
        material: "Tambor, metrônomo, faixas sonoras e cartões rítmicos.",
      },
      {
        objetivo: "Identificar e manter o pulso em atividades musicais estruturadas.",
        atividade: "Bater palmas, caminhar ou tocar um instrumento acompanhando uma pulsação regular.",
        material: "Metrônomo, tambor, músicas com pulso marcado e marcadores de chão.",
      },
      {
        objetivo: "Reproduzir padrões rítmicos simples por imitação e, progressivamente, de memória.",
        atividade: "Eco rítmico com duas a quatro batidas usando palmas e instrumentos.",
        material: "Claves, tambor, chocalhos e cartões de sequência.",
      },
      {
        objetivo: "Perceber e responder a contornos melódicos simples em canções conhecidas.",
        atividade: "Jogos de subir e descer com a voz, gestos e notas curtas no teclado.",
        material: "Teclado, sinos afinados e imagens de subida e descida.",
      },
      {
        objetivo: "Participar do canto de músicas adequadas ao repertório e à preferência individual.",
        atividade: "Canto compartilhado com refrões repetitivos, pausas de participação e escolha de canções.",
        material: "Violão, teclado, letras ilustradas e microfone infantil.",
      },
      {
        objetivo: "Explorar instrumentos musicais identificando diferentes formas de produzir som.",
        atividade: "Experimentação guiada de tocar, sacudir, raspar, pressionar e comparar sons.",
        material: "Percussão, cordas, teclas e instrumentos adaptados quando indicados.",
      },
      {
        objetivo: "Participar de improvisação musical dentro de limites e turnos definidos.",
        atividade: "Diálogo sonoro entre terapeuta e beneficiário com perguntas e respostas instrumentais.",
        material: "Tambor, teclado, instrumentos de percussão e cartões de turno.",
      },
      {
        objetivo: "Criar escolhas ou sequências musicais autorais de acordo com o repertório do beneficiário.",
        atividade: "Selecionar instrumentos, organizar uma ordem de sons e registrar uma pequena criação musical.",
        material: "Instrumentos variados, cartões de composição e gravador de áudio quando indicado.",
      },
    ],
  },
  {
    id: "mt-sociais",
    area: "Musicoterapia",
    label: "Sociais",
    summary: "Interação social, cooperação, imitação, turnos, iniciativa, participação coletiva e vínculo terapêutico.",
    items: [
      {
        objetivo: "Ampliar interação social durante atividades musicais compartilhadas.",
        atividade: "Canções de saudação, troca de instrumentos e jogos musicais com convite e resposta.",
        material: "Violão, instrumentos de percussão e cartões de interação.",
      },
      {
        objetivo: "Desenvolver cooperação para alcançar um resultado musical conjunto.",
        atividade: "Execução em dupla ou grupo de padrões em que cada participante contribui com uma parte.",
        material: "Instrumentos complementares, cartões de papéis e músicas coletivas.",
      },
      {
        objetivo: "Imitar gestos, ritmos ou ações musicais apresentados pelo terapeuta ou por pares.",
        atividade: "Jogos de espelho, eco rítmico e reprodução de movimentos associados a canções.",
        material: "Espelho, tambor, claves e músicas com gestos.",
      },
      {
        objetivo: "Respeitar turnos em atividades musicais com apoio visual progressivamente reduzido.",
        atividade: "Alternância de tocar, ouvir e entregar o instrumento entre participantes.",
        material: "Cartões de vez, timer visual e instrumentos de fácil manejo.",
      },
      {
        objetivo: "Aumentar iniciativa social para convidar, responder ou compartilhar uma experiência musical.",
        atividade: "Pausas planejadas e oportunidades para escolher parceiro, instrumento ou canção.",
        material: "Cartões de convite, instrumentos preferidos e escolhas visuais.",
      },
      {
        objetivo: "Participar de experiências musicais coletivas seguindo regras simples e papéis definidos.",
        atividade: "Roda de música com início, participação individual, resposta ao grupo e encerramento previsível.",
        material: "Percussão coletiva, agenda visual e canções de grupo.",
      },
      {
        objetivo: "Fortalecer vínculo terapêutico por meio de experiências musicais responsivas e previsíveis.",
        atividade: "Canções personalizadas, acompanhamento dos interesses e rituais de início e despedida.",
        material: "Violão, canções favoritas e cartões de rotina.",
      },
    ],
  },
  {
    id: "mt-emocionais",
    area: "Musicoterapia",
    label: "Emocionais",
    summary: "Expressão emocional, autorregulação, autoestima, autoconfiança, motivação, tolerância à frustração, segurança e engajamento.",
    items: [
      {
        objetivo: "Expressar estados emocionais por meio de escolhas, sons, movimentos ou canções.",
        atividade: "Associação entre emoções, instrumentos, intensidade sonora e repertório musical significativo.",
        material: "Cartões de emoções, instrumentos variados e playlist terapêutica.",
      },
      {
        objetivo: "Utilizar recursos musicais previamente combinados para apoiar autorregulação.",
        atividade: "Escolha e uso de música, ritmo ou respiração guiada antes, durante ou após situações de maior demanda.",
        material: "Playlist de regulação, fones quando indicados, tambor suave e cartão de pausa.",
      },
      {
        objetivo: "Fortalecer autoestima ao reconhecer participação e conquistas em experiências musicais.",
        atividade: "Registro de produções, devolutiva específica sobre esforço e apresentação de escolhas realizadas.",
        material: "Gravador de áudio, mural de conquistas e instrumentos preferidos.",
      },
      {
        objetivo: "Ampliar autoconfiança para experimentar respostas musicais novas com suporte gradualmente reduzido.",
        atividade: "Modelagem, tentativa segura e valorização do processo em canto, ritmo ou instrumento escolhido.",
        material: "Instrumentos de fácil acesso, cartões de incentivo e gravações curtas.",
      },
      {
        objetivo: "Aumentar motivação para participar de tarefas terapêuticas por meio de repertório musical significativo.",
        atividade: "Incorporação de interesses e músicas preferidas em metas estruturadas de sessão.",
        material: "Playlist individualizada, instrumentos preferidos e quadro de escolhas.",
      },
      {
        objetivo: "Desenvolver tolerância à frustração diante de erros, espera ou mudanças em atividades musicais.",
        atividade: "Ensino de estratégias de pausa, pedido de ajuda e nova tentativa em desafios graduados.",
        material: "Cartão de pausa, timer visual, instrumentos e escala de emoções.",
      },
      {
        objetivo: "Construir segurança emocional para participar de interações musicais previsíveis.",
        atividade: "Rituais estáveis de acolhimento, antecipação de etapas e escolhas limitadas durante a sessão.",
        material: "Agenda visual, canção de saudação e objeto musical de preferência.",
      },
      {
        objetivo: "Sustentar prazer e engajamento em experiências musicais adequadas às preferências e necessidades do beneficiário.",
        atividade: "Monitoramento de sinais de interesse, ajuste do nível de desafio e participação ativa em escolhas.",
        material: "Instrumentos variados, lista de preferências e recursos visuais de escolha.",
      },
    ],
  },
  {
    id: "mt-comportamentais",
    area: "Musicoterapia",
    label: "Comportamentais",
    summary: "Seguimento de instruções, impulsividade, espera, mudanças, permanência, participação, iniciativa e autonomia.",
    items: [
      {
        objetivo: "Seguir instruções simples e graduadas inseridas em atividades musicais.",
        atividade: "Jogos de tocar, parar, guardar, escolher e trocar instrumentos com suporte visual e modelagem.",
        material: "Cartões de ação, instrumentos e rotina visual.",
      },
      {
        objetivo: "Desenvolver controle de impulsividade durante o acesso e uso de instrumentos musicais.",
        atividade: "Treino de parar, esperar sinal e iniciar resposta em jogos musicais estruturados.",
        material: "Cartões de parar e tocar, timer visual e instrumentos de percussão.",
      },
      {
        objetivo: "Ampliar tolerância à espera em situações de turno ou acesso a instrumentos preferidos.",
        atividade: "Espera gradual com previsão de tempo, alternância de turnos e reforço de estratégias funcionais.",
        material: "Timer visual, cartões de vez e instrumentos motivadores.",
      },
      {
        objetivo: "Participar de mudanças simples de canção, instrumento ou regra com antecipação graduada.",
        atividade: "Uso de cartões de mudança e escolhas limitadas para alternar atividades dentro da sessão.",
        material: "Agenda visual, cartões de mudança e instrumentos variados.",
      },
      {
        objetivo: "Permanecer em atividade musical pelo tempo definido no planejamento terapêutico.",
        atividade: "Fragmentação de tarefa, metas de duração graduadas e pausas planejadas.",
        material: "Timer visual, quadro de primeiro-depois e instrumentos de interesse.",
      },
      {
        objetivo: "Aumentar participação ativa nas etapas de início, desenvolvimento e encerramento da sessão musical.",
        atividade: "Rotina previsível com papéis simples, escolha de instrumentos e checagem de finalização.",
        material: "Agenda visual, cartões de etapas e instrumentos de fácil acesso.",
      },
      {
        objetivo: "Demonstrar iniciativa para escolher, iniciar ou retomar uma atividade musical de interesse.",
        atividade: "Oferta de oportunidades de escolha, pausas responsivas e acesso a instrumentos organizados.",
        material: "Quadro de escolhas, instrumentos preferidos e cartões de iniciar.",
      },
      {
        objetivo: "Ampliar autonomia para organizar, utilizar e guardar recursos musicais conforme a rotina combinada.",
        atividade: "Sequência visual de escolher, tocar, limpar e guardar instrumentos com redução gradual de ajuda.",
        material: "Etiquetas visuais, caixas organizadoras, instrumentos e checklist ilustrado.",
      },
    ],
  },
  // PSICOLOGIA
  {
    id: "psi-regulacao-comunicacao",
    area: "Psicologia",
    label: "Regulação Emocional e Comunicação Funcional",
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
    label: "Habilidades Sociais e Flexibilidade",
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
    label: "Comunicação Receptiva e Expressiva",
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
    label: "Comunicação Social e Fala",
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
    label: "Exploração e Seletividade Alimentar",
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
    label: "Autonomia e Rotina Alimentar",
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
    label: "Coordenação e Planejamento Motor",
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
    label: "Esquema Corporal, Ritmo e Regulação",
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
    label: "Alfabetização e Aprendizagem Inicial",
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
    label: "Funções Executivas e Matemática Funcional",
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

interface ObjectiveDomainDefinition {
  id: string;
  label: string;
  summary: string;
  itemIndexes: number[];
}

const SPECIALTY_DOMAIN_GROUPS: Record<string, ObjectiveDomainDefinition[]> = {
  "psi-regulacao-comunicacao": [
    { id: "psi-reconhecimento-emocional", label: "Reconhecimento Emocional", summary: "Identificação e nomeação de emoções em si e no outro.", itemIndexes: [0] },
    { id: "psi-autorregulacao", label: "Autorregulação e Enfrentamento", summary: "Co-regulação, estratégias de pausa e alternativas diante da frustração.", itemIndexes: [1, 3] },
    { id: "psi-comunicacao-funcional", label: "Comunicação Funcional", summary: "Expressão de necessidades, preferências, recusa e pedidos de ajuda.", itemIndexes: [2] },
  ],
  "psi-social-flexibilidade": [
    { id: "psi-espera-flexibilidade", label: "Espera e Flexibilidade", summary: "Tolerância a adiamentos, transições e mudanças de rotina.", itemIndexes: [0, 1] },
    { id: "psi-habilidades-sociais", label: "Habilidades Sociais", summary: "Iniciação, resposta e manutenção de trocas sociais significativas.", itemIndexes: [2] },
  ],
  "fono-comunicacao-receptiva-expressiva": [
    { id: "fono-linguagem-receptiva", label: "Linguagem Receptiva", summary: "Compreensão de instruções e participação em rotinas funcionais.", itemIndexes: [0] },
    { id: "fono-linguagem-expressiva-csa", label: "Linguagem Expressiva e Comunicação Suplementar", summary: "Vocabulário, solicitações e combinações de palavras, sinais ou símbolos.", itemIndexes: [1, 2, 3] },
  ],
  "fono-pragmatica-fala": [
    { id: "fono-comunicacao-social", label: "Comunicação Social e Pragmática", summary: "Atenção compartilhada e alternância de turnos comunicativos.", itemIndexes: [0, 1] },
    { id: "fono-fala-inteligibilidade", label: "Fala e Inteligibilidade", summary: "Produção de sons ou palavras-alvo conforme avaliação fonoaudiológica.", itemIndexes: [2] },
  ],
  "nutri-exploracao-seletividade": [
    { id: "nutri-exploracao-sensorial", label: "Exploração Sensorial", summary: "Tolerância à presença e exploração de texturas, cheiros, cores e formatos.", itemIndexes: [0, 1] },
    { id: "nutri-aceitacao-repertorio", label: "Aceitação e Repertório Alimentar", summary: "Hierarquia de aceitação e ampliação gradual do repertório alimentar.", itemIndexes: [2, 3] },
  ],
  "nutri-autonomia-rotina": [
    { id: "nutri-autonomia-refeicao", label: "Autonomia nas Refeições", summary: "Comunicação de preferências, utensílios e participação segura na rotina alimentar.", itemIndexes: [0, 1, 2] },
  ],
  "pm-coordenacao-planejamento": [
    { id: "pm-equilibrio-coordenacao-global", label: "Equilíbrio e Coordenação Global", summary: "Equilíbrio estático e dinâmico, bilateralidade e movimentos amplos.", itemIndexes: [0, 1] },
    { id: "pm-planejamento-motricidade-fina", label: "Planejamento Motor e Motricidade Fina", summary: "Sequências motoras, coordenação fina e integração visomotora.", itemIndexes: [2, 3] },
  ],
  "pm-corpo-regulacao": [
    { id: "pm-esquema-corporal-ritmo", label: "Esquema Corporal e Ritmo", summary: "Consciência corporal, orientação espacial, imitação e ritmo.", itemIndexes: [0, 1] },
    { id: "pm-participacao-regulacao", label: "Participação e Regulação Motora", summary: "Organização em brincadeiras motoras, regras simples e transições.", itemIndexes: [2] },
  ],
  "avds-autonomia": [
    { id: "to-higiene-pessoal", label: "Higiene Pessoal", summary: "Lavagem das mãos e higiene oral com suporte graduado.", itemIndexes: [0, 1] },
    { id: "to-vestuario-alimentacao", label: "Vestuário e Alimentação", summary: "Vestir-se, retirar roupas e participar da alimentação com autonomia progressiva.", itemIndexes: [2, 3] },
    { id: "to-rotina-autonomia", label: "Rotina de Autocuidado", summary: "Uso do banheiro, cuidados pessoais e organização de materiais de higiene.", itemIndexes: [4, 5, 6] },
  ],
  "aivds-autonomia": [
    { id: "to-organizacao-domestica", label: "Organização e Rotina Doméstica", summary: "Mochila, pertences e tarefas simples de casa ou escola.", itemIndexes: [0, 1] },
    { id: "to-preparo-planejamento", label: "Preparo e Planejamento de Tarefas", summary: "Lanche simples e organização das etapas de uma atividade cotidiana.", itemIndexes: [2, 3] },
    { id: "to-pertences-participacao-comunitaria", label: "Pertences e Participação Comunitária", summary: "Classificação de itens e escolhas em situações simuladas de compra.", itemIndexes: [4, 5] },
    { id: "to-mobilidade-rotina", label: "Mobilidade na Rotina", summary: "Deslocamento entre atividades com agenda visual e orientação previamente treinada.", itemIndexes: [6] },
  ],
  "pp-alfabetizacao-aprendizagem": [
    { id: "pp-alfabetizacao-inicial", label: "Alfabetização Inicial", summary: "Consciência fonológica, letras e números.", itemIndexes: [0, 1] },
    { id: "pp-leitura-escrita-funcional", label: "Leitura e Escrita Funcional", summary: "Relação entre letras, sons, palavras e frases significativas.", itemIndexes: [2, 3] },
  ],
  "pp-executivas-matematica": [
    { id: "pp-atencao-memoria-organizacao", label: "Atenção, Memória e Organização", summary: "Atenção, memória de trabalho, planejamento, início e revisão de tarefas.", itemIndexes: [0, 1, 2] },
    { id: "pp-matematica-funcional", label: "Matemática Funcional", summary: "Quantidade, correspondência e contagem em situações significativas.", itemIndexes: [3] },
  ],
};

export const OBJECTIVES_TEMPLATES: ObjectivesTemplate[] = RAW_OBJECTIVES_TEMPLATES.flatMap((template) => {
  const domains = SPECIALTY_DOMAIN_GROUPS[template.id];
  if (!domains) return [template];

  return domains.map((domain) => ({
    ...template,
    id: domain.id,
    label: domain.label,
    summary: domain.summary,
    items: domain.itemIndexes
      .map((itemIndex) => template.items[itemIndex])
      .filter((item): item is PTIObjective => Boolean(item)),
  }));
});

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
