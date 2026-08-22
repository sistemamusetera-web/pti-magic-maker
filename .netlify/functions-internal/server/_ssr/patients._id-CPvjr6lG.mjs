import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BV4m8YEh.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { f as useRouteContext, m as useParams, p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as Download, a as Shield, c as Plus, d as ListChecks, f as History, i as Trash2, m as FileSpreadsheet, o as Search, s as Save, w as ArrowLeft, x as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as require_jspdf_node_min } from "../_libs/jspdf.mjs";
import { t as autoTable } from "../_libs/jspdf-autotable.mjs";
import { a as CartesianGrid, c as Legend, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patients._id-CPvjr6lG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_jspdf_node_min = require_jspdf_node_min();
var portage_default = /*#__PURE__*/ JSON.parse("[{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"01\",\"text\":\"Observa uma pessoa movimentando-se em seu campo visual.\",\"material\":\"Almofadas. Opcional: bebê conforto.\",\"atividade\":\"Colocar a criança deitada ou sentada, apoiada com almofadas ou em um \\\"bebê conforto\\\". Mover-se dentro de seu campo visual lentamente (mover-se 30cm em 3-4 segundos), da direita para a esquerda; ou aproximando-se e afastando-se dela. Observar se a criança consegue acompanhar você com o olhar dela, dentro de 20 segundos após o início do movimento.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"01\",\"text\":\"Repete sons emitidos por outras pessoas.\",\"material\":\"Música\",\"atividade\":\"Com a criança no colo e face com o adulto, produzir sons curtos 1 ou 2 vezes, podendo esses sons ser aqueles já emitidos pela criança (gú, ah, gu, ga), sons vocálicos (a, ê, é, i, ô, ó, u) ou labiais (pa, ma, ba) e dar o devido tempo (1 minuto) para que a criança repita. Critério: repetir pelo menos 2 sons diferentes, emitidos por outras pessoas.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"01\",\"text\":\"Remove um pano do rosto que obscureça sua visão.\",\"material\":\"Pano.\",\"atividade\":\"Entregue um pano para a criança e cubra o rosto dela levemente com ele. Verifique se ela consegue remover o pano (retirar ou puxar com a mão) que lhe cobre a visão, de forma que pelo menos os olhos fiquem descobertos. Faça isso com cuidado e supervisionando o tempo inteiro.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"01\",\"text\":\"Suga e deglute líquidos.\",\"material\":\"Líquido = leite, chá, água, sucos que ja fazem parte da alimentação da criança.\",\"atividade\":\"Condição: o líquido deverá ser apresentado em mamadeira (ou \\\"chuquinha\\\"). Cada tentativa consiste na introdução do bico da mamadeira na boca da criança. A criança deve sugar ou deglutir líquidos sem engasgar ou perder o fôlego, sem morder o bico da mamadeira e/ou projetar a língua.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"01\",\"text\":\"Alcança um objeto colocado à sua frente (15 a 20 cm.).\",\"material\":\"Preferivelmente brinquedo ou alimento. Evite usar itens nocivos à criança tais com objetos pontiagudos etc.\",\"atividade\":\"Verificar se criança alcança objeto colocado a 15-20 cm de distância, ou seja, se ela toca ou encosta dedos/mão no objeto, no máximo 20 segundos após a apresentação do objeto.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"02\",\"text\":\"Sorri em resposta à atenção do adulto\",\"material\":\"Berço ou trocador (para colocar a criança). Cronômetro ou relógio (para medir os 10 segundos de atenção).\",\"atividade\":\"Ao alimentar, trocar, acalentar ou colocar a criança no berço, o adulto deve manter sua face distante de 20-25 cm do rosto da criança, sorrir e falar baixinho por 10 segundos. Verificar se a criança sorri dentro de 10 segundos após o adulto lhe dar \\\"atenção\\\".\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"02\",\"text\":\"Repete a mesma sílaba 2 a 3 vezes.\",\"material\":\"Música\",\"atividade\":\"Levantar, junto ao mediador, quais sons a criança produz espontaneamente. Dar o modelo de um som espontâneo à criança e esperar que ela repita a mesma sílaba 2 ou 3 vezes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"02\",\"text\":\"Procura com o olhar um objeto que foi tirado de seu campo visual.\",\"material\":\"Almofadas para apoio. Preferivelmente um chocalho ou bichinhos de borracha de cores vivas e que produzam sons.\",\"atividade\":\"Coloque a criança deitada de costas ou sentada, apoiada com almofadas e retire um objeto de seu campo visual, colocando-o de 15-20cm de distância da criança. Verifique se ela percorre com os olhos o percurso do objeto e/ou vira a cabeça em direção à ele.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"02\",\"text\":\"Toma mingau / sopinha.\",\"material\":\"Colher com sopinha/mingau.\",\"atividade\":\"Colocar uma colher pequena (por tentativa), com sopinha habitual da criança em sua boca. A criança deve ingerir o mingau, sem engasgar ou perder o fôlego, sem morder a colher e/ou projetar a língua.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"02\",\"text\":\"Apanha um objeto colocado à sua frente (8 cm.).\",\"material\":\"Preferivelmente um brinquedo de fácil preensão, leve e macio (bichinho de borracha).\",\"atividade\":\"Verificar se criança apanha objeto colocado a 8 cm de distância, ou seja, se ela segura o objeto com uma ou ambas as mãos, de forma a erguê-lo, mesmo que este caia logo em seguida.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"03\",\"text\":\"Vocaliza em resposta à atenção\",\"material\":\"Berço, trocador ou cadeira (para colocar a criança). Cronômetro ou relógio (para medir os 10 segundos de atenção).\",\"atividade\":\"Ao alimentar, trocar, acalentar ou colocar a criança no berço ou sentada, o adulto deve manter sua face distante de 20-25 cm do rosto da criança, sorrindo ou falando baixinho por 10 segundos. Verificar se a criança vocaliza dentro de 10 segundos após o adulto lhe dar \\\"atenção\\\".\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"03\",\"text\":\"Responde a gestos com gestos.\",\"material\":\"Música e instrumentos musicais\",\"atividade\":\"Fazer gestos para a criança como dar tchau, aplaudir, mover a cabeça negativamente para \\\"não\\\", estender os braços para ser pego, jogar um beijo, etc. A criança deve responder ao gesto com gesto. Critério: imitar pelo menos 2 gestos diferentes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"03\",\"text\":\"Remove um objeto de um recipiente colocando a mão dentro do mesmo\",\"material\":\"Cubos de 2,5cm, bolinhas, carretel, rolha, dados, biscoitos, xícaras inquebráveis, tigelas, latas, caixas, etc.\",\"atividade\":\"Adulto deve cuidar para que criança não coloque os objetos pequenos na boca, evitando que ela engasgue com o mesmo. Verificar se a criança consegue remover um objeto de um recipiente, colocando a mão dentro dele e retirando o objeto. Exemplo: cubos de 2,5 cm de dentro de uma lata, bolinhas de dentro de uma caixa, biscoitos de dentro de uma tigela.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"03\",\"text\":\"Estende as mãos em direção a mamadeira, tentando pegá-la\",\"material\":\"Mamadeira.\",\"atividade\":\"Verificar se a criança estende as mãos em direção a uma mamadeira distante cerca de 20 cm dela.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"03\",\"text\":\"Estende os braços em direção a um objeto à sua frente e o apanha.\",\"material\":\"Brinquedos, bichinhos de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Verificar se criança estende os braços em direção a um objeto colocado à sua frente\\ne o apanha. Condição: objeto deve estar colocado cerca de 15 a 20 cm da criança.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"04\",\"text\":\"Olha para sua própria mão, sorrindo ou vocalizando\",\"material\":\"Cronômetro ou relógio (para medir os 5 segundos de observação).\",\"atividade\":\"Segurar a mão da criança e com seus dedos mover os da criança para frente e para trás; de um lado para o outro. Verificar se a criança permanece olhando por 5 segundos em direção a sua mão, sorrindo ou vocalizando pelo menos 1 vez em 3 tentativas.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"04\",\"text\":\"Obedece a uma ordem simples, quando acompanhada de gestos indicativos.\",\"material\":\"Objetos como brinquedos, pelúcia, biscoito, etc.\",\"atividade\":\"O adulto deve fazer uma ordem simples acompanhada de gestos, como \\\"Vem cá\\\" ou \\\"Me dá o (...)\\\". A criança deve obedecer à ordem.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"04\",\"text\":\"Coloca um objeto em um recipiente imitando um adulto.\",\"material\":\"Cubos de 2,5cm, bolinhas, carretel, rolha, dados, biscoitos, xícaras inquebráveis, tigelas, latas, caixas, etc.\",\"atividade\":\"O adulto deve dar o modelo: colocar um objeto em um recipiente. A criança deve, em até 1 minuto após o adulto, imitá-lo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"04\",\"text\":\"Come alimentos liquidificados dados pelos pais.\",\"material\":\"Alimento peneirado ou, se necessário, passado no liquidificador.\",\"atividade\":\"Verificar se a criança é capaz de ingerir uma colher pequena da papinha por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"04\",\"text\":\"Alcança um objeto preferido.\",\"material\":\"Preferência definida pelo mediador. Caso a criança não apresente preferência, apresentar brinquedos de cores vivas, desenho do rosto humano, um aro ou argola.\",\"atividade\":\"Verificar se criança alcança um objeto preferido. Condição: criança deitada, objeto colocado acima de sua cabeça numa distância de 15 a 20 cm.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"05\",\"text\":\"Responde a seu círculo familiar, sorrindo, vocalizando ou parando de chorar\",\"material\":\"Presença de algum familiar. Cronômetro ou relógio (para medir os 10 segundos de resposta).\",\"atividade\":\"Solicitar e observar se a criança responde à seu círculo familiar (mãe, pai, irmãos, etc.), vocalizando, sorrindo ou parando de chorar dentro de 10 segundos após receber atenção de algum membro da família.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"05\",\"text\":\"Interrompe a atividade quando lhe dizem \\\"Não\\\" 75% das vezes.\",\"material\":\"Brincadeira de interesse\",\"atividade\":\"Verificar se a criança interrompe uma atividade que está fazendo quando solicitada, pelo menos momentaneamente, por 1 a 2 segundos, quando lhe dizem \\\"não\\\", em 3 de 4 tentativas.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"05\",\"text\":\"Coloca um objeto em um recipiente quando recebe instruções.\",\"material\":\"Cubos de 2,5cm, bolinhas, carretel, rolha, dados, biscoitos, xícaras inquebráveis, tigelas, latas, caixas, etc.\",\"atividade\":\"O adulto deve instruir a criança à colocar o objeto em algum recipiente, realizando também gestos indicativos. Verificar se a criança vai colocar o objeto, 1 minuto depois da instrução.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"05\",\"text\":\"Segura a mamadeira sem ajuda enquanto bebe.\",\"material\":\"Mamadeira.\",\"atividade\":\"Condição: Introduzir o bico da mamadeira na boca da criança. Critério: A criança deve ser capaz de segurar a mamadeira sem ajuda pelo tempo suficiente para beber 120 gramas de líquido.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"05\",\"text\":\"Coloca objetos na boca.\",\"material\":\"Preferivelmente brinquedo leve, macio e de fácil preensão.\",\"atividade\":\"Colocar objeto próximo da criança ou em sua mão. Verificar se ela leva o objeto à boca.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"06\",\"text\":\"Sorri em resposta à expressão facial dos outros.\",\"material\":\"Cronômetro ou relógio (para medir os 10 segundos de atenção).\",\"atividade\":\"Ao atender a criança em suas necessidades diárias, adulto deve afastar sua face distante de 20-25 cm do rosto da criança e produzir expressões faciais ou caretas exageradas que indiquem surpresa e satisfação por 10 segundos (exemplo: erguer sobrancelha, fazer \\\"beiço\\\", etc.). Verificar se a criança sorri em resposta à expressão facial em 10 segundos após ela.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"06\",\"text\":\"Responde a perguntas simples com respostas não verbais.\",\"material\":\"Objetos como brinquedos, pelúcia, biscoito, etc.\",\"atividade\":\"O adulto deve perguntar \\\"Onde está (objeto)?\\\", \\\"Quer (alimento)?\\\", \\\"Cadê (objeto)?\\\" e a criança deve responder com respostas não vocais, apontando com a mão ou negando/afirmando com a cabeça. Critério: responder pelo menos 2 perguntas simples diferentes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"06\",\"text\":\"Balança um brinquedo que produz som, pendurado em um barbante.\",\"material\":\"Almofadas para apoio. Chocalho, sino preso ao barbante e amarrado à cama.\",\"atividade\":\"Colocar a criança de costas ou sentada, apoiada por almofadas. Colocar um objeto/brinquedo que produz som pendurado em um barbante amarrado em um móvel e verificar se a criança balança/toca/empurra um objeto colocado a 15-20 cm dela, com as mãos ou pés, 20 segundos após sua apresentação.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"06\",\"text\":\"Leva a mamadeira até a boca ou a recusa, empurrando-a\",\"material\":\"Mamadeira.\",\"atividade\":\"Verificar se a criança segura a mamadeira e a direciona para a boca, introduzindo o bico da mamadeira na boca, sem ensaio e erro ou empurra a mamadeira com as mãos, recusando-a.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"06\",\"text\":\"Eleva a cabeça e o tronco apoiando-se nos braços, ao estar deitado de barriga para baixo.\",\"material\":\"Brinquedos, bichinhos de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Colocar um objeto no campo visual da criança e erguê-lo acima de sua cabeça. Verificar se criança eleva a cabeça e o tronco apoiando-se nos braços por cerca de 5 segundos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"07\",\"text\":\"Sorri e vocaliza ao ver sua imagem no espelho\",\"material\":\"Espelho.\",\"atividade\":\"Colocar a criança diante de um espelho para que ela possa ver sua imagem. Verificar se ela sorri e vocaliza dentro de 10 segundos após se ver.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"07\",\"text\":\"Combina 2 sílabas diferentes quando tenta verbalizar.\",\"material\":\"Música e instrumentos musicais\",\"atividade\":\"Levantar, junto ao mediador, quais sons a criança produz espontaneamente (como ba, ca, etc.). Dar o modelo de um som espontâneo à criança e esperar que ela emita a resposta, combinando 2 sílabas diferentes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"07\",\"text\":\"Coloca três objetos em um recipiente e o esvazia.\",\"material\":\"Cubos de 2,5cm, bolinhas, carretel, rolha, dados, biscoitos, xícaras inquebráveis, tigelas, latas, caixas, etc.\",\"atividade\":\"Verificar se, após apresentação de objetos e recipiente, criança consegue colocar 3 objetos no recipiente e esvaziá-lo dentro de 1 minuto após tal apresentação.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"07\",\"text\":\"Come alimentos amassados dados pelos pais.\",\"material\":\"Alimentos amassados = papinha, que ao invés de peneirada, seja amassada com o garfo; ou frutas amassadas com o garfo.\",\"atividade\":\"A criança deve ingerir 1 colher de alimentos amassados por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"07\",\"text\":\"Levanta a cabeça e o tronco apoiando-se em um só braço.\",\"material\":\"Brinquedo de cores vivas.\",\"atividade\":\"Condição: criança deitada de barriga para baixo. Para aumentar a probabilidade de emissão da resposta, segurar um brinquedo de cores vivas ao lado ou acima da criança. Verificar se criança consegue levantar a cabeça e o tronco, apoiando-se em um só braço, por 5 segundos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"08\",\"text\":\"Acaricia ou toca no rosto de adultos (puxa cabelo, nariz, óculos, etc.).\",\"material\":\"Óculos (caso o adulto use, para verificar se a criança os puxa).\",\"atividade\":\"Adulto deve aproximar seu rosto de 20-25 cm da face da criança. Verificar se a criança acaricia, toca ou dá tapinhas no rosto do adulto. Ou ainda, se ela bate, puxa cabelo ou óculos do adulto.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"08\",\"text\":\"Imita padrões de entonação da voz de outras pessoas.\",\"material\":\"Música e instrumentos musicais\",\"atividade\":\"Dar modelo, 1 ou 2 vezes, produzindo inflexões e variações (\\\"gritos\\\", sussurros, falas em voz normal) ao falar e cantar. Critério: a criança deve imitar pelo menos 2 padrões de entonação de voz diferentes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"08\",\"text\":\"Transfere um objeto de uma mão à outra para apanhar outro objeto.\",\"material\":\"Almofadas para apoio. Objetos leves e pequenos, por exemplo: cubos de 2,5 cm, bolinhas, biscoitos, etc.\",\"atividade\":\"Cuidado para a criança não colocar objetos na boca e se engasgar. Colocar a criança sentada, apoiada por almofadas e oferecer um objeto por vez à criança. Se necessário, colocar o objeto na mão da criança e observar a transferência. A criança deve transferir um objeto de uma mão à outra para em seguida apanhar outro objeto.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"08\",\"text\":\"Bebe em uma caneca, segurada pelos pais.\",\"material\":\"Xícara com leite.\",\"atividade\":\"Cada tentativa será considerada como um gole da criança, que deverá beber sem engasgar, sem perder o fôlego, sem morder a borda da xícara e/ou projetar a língua.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"08\",\"text\":\"Toca e explora objetos com a boca.\",\"material\":\"Preferivelmente objetos de borracha ou mordedor.\",\"atividade\":\"Condição: objetos colocados próximos ou na mão da criança. Verificar se criança é capaz de explorar objetos com a boca = morder, lamber ou segurar.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"09\",\"text\":\"Estende a mão em direção a um objeto oferecido.\",\"material\":\"Objetos atraentes como joias, brinquedos, chupeta ou o próprio dedo do adulto.\",\"atividade\":\"Apresentar objetos próximos (15-20 cm) à mão da criança. Se necessário, agitar objeto para chamar atenção dela. Verificar se dentro de 20 segundos, criança estende a mão em direção ao objeto que lhe é oferecido.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"09\",\"text\":\"Usa uma palavra funcionalmente para indicar objetos ou pessoas.\",\"material\":\"Objeto ou pessoa familiar à criança.\",\"atividade\":\"Levantar, junto ao mediador, quais palavras a criança usa funcionalmente e, em seguida, testar a utilização de tais palavras da seguinte forma: frente a tais objetos ou pessoas, perguntar \\\"O que é (isto)?\\\" ou \\\"Quem é?\\\". A criança deve nomear adequadamente.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"09\",\"text\":\"Deixa cair e apanha um brinquedo.\",\"material\":\"Brinquedos como bichinhos de borracha, argolas, cubos, etc.\",\"atividade\":\"Verificar se a criança apanha determinado brinquedo após deixá-lo cair.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"09\",\"text\":\"Come alimentos semissólidos dados pelos pais.\",\"material\":\"Alimento semissólido = biscoito, bolacha, pão, torrada ou bolo, banana.\",\"atividade\":\"Cada tentativa equivale a uma porção ou pedaço de alimento semissólido ingerido, sendo que no mínimo dois alimentos diferentes devem ser apresentados.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"09\",\"text\":\"Em DV (decúbito ventral, de bruços), vira de lado e mantém esta posição ½ das vezes.\",\"material\":\"Brinquedos, bichinhos de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Estando de barriga para baixo, vira de lado e mantém esta posição em 50% das vezes. Condição: colocá-la de barriga para baixo, mostrar-lhe brinquedo e segurá-lo sobre a linha média do corpo da criança. Verificar se a criança, estando de barriga para baixo, vira de lado e mantém esta posição em 50% das vezes. A criança deve virar de lado ao máximo 1 minuto após a apresentação de um brinquedo. Critério: 50% = 3 vezes corretas em 6 tentativas.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"10\",\"text\":\"Estende os braços em direção a pessoas familiares\",\"material\":\"Presença de pelo menos 2 pessoas familiares diferentes (para verificar a resposta da criança). Cronômetro ou relógio (para medir os 20 segundos de resposta).\",\"atividade\":\"Se necessário, adulto pode estender os braços para a criança e dizer \\\"Vem no colo da...\\\". Verificar se a criança, dentro de 20 segundos, estende os braços em direção ao familiar, após esse se aproximar ou lhe der atenção. Critério: estender os braços em direção a pelo menos duas pessoas familiares diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"0 a 1 anos\",\"num\":\"10\",\"text\":\"Vocaliza em resposta à fala de outras pessoas.\",\"material\":\"Livro de leitura\",\"atividade\":\"Verificar se a criança vocaliza em resposta à fala de outra pessoa, de 1 a 2 segundos após a fala.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"10\",\"text\":\"Descobre um objeto escondido sob um recipiente.\",\"material\":\"Almofadas para apoio, carrinho de bebê ou cadeira. Doces, brinquedos, copo, xícara, caixa de papelão, etc.\",\"atividade\":\"Colocar a criança apoiada com almofadas, em cadeiras ou em carrinho de bebê e verificar se ela descobre um objeto escondido sob recipiente, ou seja, se ela retira o recipiente que encobre o objeto, o deixando à vista/o encontrando.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"10\",\"text\":\"Alimenta-se sozinho usando os dedos.\",\"material\":\"Alimento = legumes, carne, pão, biscoito, bolacha.\",\"atividade\":\"Condição: cortar previamente os alimentos em pedaços. Cada tentativa significa uma porção de alimento ingerido, tendo sido apanhado pelos dedos.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"10\",\"text\":\"Em DV, vira de costas.\",\"material\":\"Brinquedos, bichinhos de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Colocar um objeto no campo visual da criança e movê-lo para o lado oposto de seu rosto. Verificar se ela, estando de barriga para baixo, vira de costas no máximo dentro de 1 minuto após a apresentação de um brinquedo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"11\",\"text\":\"Estende a mão e toca sua imagem refletida no espelho.\",\"material\":\"Espelho.\",\"atividade\":\"Colocar a criança de frente ao espelho e perguntar \\\"Cadê o nenê?\\\" ou \\\"Cadê a ...?\\\". Verificar se a criança estende a mão e toca em sua imagem refletida no espelho, dentro de 20 segundos após ser coloca em frente ao espelho.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"11\",\"text\":\"Empurra 3 blocos como se fosse um comboio.\",\"material\":\"Blocos.\",\"atividade\":\"Adulto deve colocar um bloco atrás do outros, de forma que fiquem enfileirados, sobre uma superfície para, em seguida, dar modelo para a criança e solicitar que ela faça o mesmo (empurrar os 3 blocos como se fosse um comboio). Verificar se a criança faz isso, de modo que eles percorram uma distância mínima de 30 cm.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"11\",\"text\":\"Segura a caneca com ambas as mãos e bebe.\",\"material\":\"Xícara com leite.\",\"atividade\":\"Segurar a xícara com ambas as mãos e dar um gole sem derramar excessivamente o líquido.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"11\",\"text\":\"Em DV, move-se para frente o equivalente à sua altura.\",\"material\":\"Brinquedos, bichinhos de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Apresentar um brinquedo à criança, colocando-o numa distância equivalente à altura do corpo. Verificar se a criança vai mover-se para a frente, no máximo dentro de 1 minuto após a apresentação de um brinquedo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"12\",\"text\":\"Segura e examina por 1 minuto um objeto que lhe foi dado.\",\"material\":\"Chocalho, brinquedo de fácil preensão ou objetos atraentes por cor ou ruído.\",\"atividade\":\"Entregar um objeto à criança e verificar se ela segura e examina (permanece olhando e manipulando) o objeto que lhe foi dado por pelo menos 1 minuto. Tal resposta deve se iniciar dentro de 20 segundos após apresentação do objeto.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"12\",\"text\":\"Remove um círculo de uma prancha, por imitação.\",\"material\":\"Prancha de madeira simples contendo apenas um buraco para encaixar 1 círculo.\",\"atividade\":\"Pegar uma prancha de madeira simples e remover um círculo dela, dando modelo e instrução à criança. Verificar se ela faz o mesmo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"12\",\"text\":\"Leva a colher cheia de comida até a boca com ajuda.\",\"material\":\"Colher com sopinha/mingau.\",\"atividade\":\"Segurar a mão da criança com a colher e direciona- lá até a sua boca. Critério: levar a colher cheia de comida até a boca, com ajuda, pelo menos por dez tentativas durante uma refeição.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"12\",\"text\":\"Em DD (decúbito dorsal), rola para o lado.\",\"material\":\"Brinquedos, bichinhos de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Mostrar-lhe um brinquedo, colocando-o sobre a linha média de seu corpo. Verificar se a criança, de costas, rola para o lado, no máximo 1 minuto após a apresentação de um brinquedo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"13\",\"text\":\"Sacode ou aperta um objeto colocado em sua mão, produzindo sons involuntários.\",\"material\":\"Chocalho ou bichinhos de borracha.\",\"atividade\":\"Colocar objeto na mão da criança e verificar se ela sacode ou aperta ele, produzindo sons involuntários.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"11\",\"text\":\"Diz 5 palavras diferentes.\",\"material\":\"Bola, cachorro em imagem ou brinquedo, fotos dos familiares\",\"atividade\":\"Verificar se a criança diz 5 palavras diferentes, como bola, au-au, mamãe, papai, vovó, etc. A criança pode usar a mesma palavra para se referir a diferentes situações (como \\\"papá\\\" frente ao pai, quando aponta para o pai ou quando vê um objeto que pertence ao pai).\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"13\",\"text\":\"Coloca um pino redondo em uma prancha de pinos, quando solicitado.\",\"material\":\"Pino redondo de aproximadamente 2,5 cm de largura e prancha de pinos (prancha com buracos para o pino ser inserido).\",\"atividade\":\"Adulto deve instruir criança, dando modelo, para que ela insira um pino redondo em uma prancha que tem buracos ou espaços para vários pinos. A criança deve reproduzir o modelo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"0 a 1 anos\",\"num\":\"13\",\"text\":\"Estica braços e pernas ao ser vestido.\",\"material\":\"Short, calça, blusa ou macacão.\",\"atividade\":\"Verificar se a criança é capaz de esticar pelo menos 1 dos braços ou mão e pelo menos 1 das pernas ou pé ao ser vestido, por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"13\",\"text\":\"Em DD, vira de barriga para baixo.\",\"material\":\"Brinquedos, bichinhos de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Colocar um objeto no campo visual da criança e movê-lo para o lado oposto de seu rosto. Verificar se a criança, de costas, vira de barriga para baixo, no máximo dentro de 1 minuto após a apresentação de um brinquedo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"14\",\"text\":\"Brinca sozinho por 10 minutos.\",\"material\":\"Brinquedos, bolas, colheres, bichinhos de borracha, xícaras plásticas, chocalho, rádio, etc.\",\"atividade\":\"Colocar vários objetos em torno da criança e engajá-la em uma atividade, deixando-a em um local de onde possa ser observada. Verificar se ela brinca sozinha, ou seja, se ela permanece tocando ou manipulando objetos e brinquedos sem destruí-los, choramingar ou reclamar pela presença de um adulto, por 10 minutos.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"12\",\"text\":\"Pede \\\"mais\\\".\",\"material\":\"Alimento, bebida, brincadeira ou história.\",\"atividade\":\"Verificar se a criança pede \\\"mais\\\" quando quer continuar a ser alimentado, a receber uma bebida, continuar uma brincadeira ou a ouvir história.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"14\",\"text\":\"Executa gestos simples quando requisitado.\",\"material\":\"Telefone de brinquedo, blocos de empilhar, música para imitação de ações\",\"atividade\":\"Adulto deve dar modelo de gesto simples, como bater palmas, tirar telefone do gancho, cheirar uma flor, mover um brinquedo no ar, fingir que bebe de um copo, pegar um bloco em cada mão e batê-los, tossir, etc. Criança deve reproduzir modelo após solicitação do adulto.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"14\",\"text\":\"Faz esforço para sentar-se, segurando nos dedos do adulto.\",\"material\":\"Dedos do adulto.\",\"atividade\":\"Condição: criança deitada. Verificar se criança faz esforço para sentar-se, dentro de 1 minuto após o adulto tocar com os dedos a mão da criança.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"15\",\"text\":\"Procura contato visual quando alguém lhe dá atenção por 2 a 3 minutos.\",\"material\":\"Cronômetro ou relógio (para medir o período de 2 a 3 minutos).\",\"atividade\":\"Ao trocar, alimentar, dar banho, etc. na criança, colocar o rosto dela em frente ao rosto do adulto, enquanto este sorri, fala e/ou faz caretas à criança. Verificar se ela procura contato visual com adulto, de 2 a 3 minutos. Critério: procurar contato visual pelo menos 5 vezes, de 2 a 3 minutos.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"13\",\"text\":\"Diz \\\"acabou\\\".\",\"material\":\"Alimento, bebida, brincadeira, história, barulho de aspirador, rádio e/ou TV.\",\"atividade\":\"Verificar se a criança diz acabou \\\"cabô\\\" quando terminar algo, como comer, beber, ver TV, música parar no rádio ou aspirador ser desligado.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"15\",\"text\":\"Vira a cabeça com facilidade quando o corpo está apoiado.\",\"material\":\"Almofadas para apoio, carrinho, bebê conforto ou cadeira infantil.\",\"atividade\":\"Estando a criança sentada (apoiada em almofadas, carrinho, cadeira infantil ou em um \\\"bebê conforto\\\"), movimente-se de um lado para o outro à sua frente. A criança deve com facilidade, virar a cabeça para a direita ou esquerda, sem tombá-la para frente ou para trás.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"16\",\"text\":\"Brinca sozinho sem reclamar por 15 a 20 minutos, próximo de um adulto.\",\"material\":\"Bichinhos de borracha, chocalhos e objetos da casa como utensílios de cozinha seguros (panela, pratos inquebráveis, colheres, xícaras de plástico, etc.) e/ou rádio ou aparelho de som ligados.\",\"atividade\":\"Colocar os objetos próximos à criança e realizar uma atividade por 15-20 minutos próximo dela. A criança não precisa estar necessariamente no campo visual do adulto, mas esse deve ir ver a criança ocasionalmente. Verificar se ela brinca sozinha, por 15 a 20 minutos, sem reclamar.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"14\",\"text\":\"Obedece a 3 ordens diferentes que não são acompanhadas de gestos indicativos.\",\"material\":\"Objetos como brinquedos, pelúcia, biscoito, bola, etc.\",\"atividade\":\"Verificar se criança obedece à 3 ordens diferentes, não acompanhadas de gestos, como \\\"vem cá\\\", \\\"me dá\\\", sentar, rolar uma bola, marchar, apontar, levantar os braços, etc.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"14\",\"text\":\"Come com colher de modo independente.\",\"material\":\"Colher com sopinha/mingau.\",\"atividade\":\"Condição: o adulto poderá dar ajuda à criança no final da refeição. A criança deve comer com colher, de modo independente sem derrubar excessivamente o alimento em cada colherada. Critério: comer com colher, de modo independente, por 10 tentativas em uma refeição.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"16\",\"text\":\"Mantém-se sentado por 2 minutos.\",\"material\":\"Cronômetro ou relógio para contar o tempo de resposta (2 minutos) da criança.\",\"atividade\":\"Verificar se criança consegue permanecer sentada por 2 minutos, apoiando ocasionalmente nas mãos (sem apoio de almofadas).\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"17\",\"text\":\"Vocaliza para obter atenção\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com o mediador. Verificar se a criança vocaliza para obter atenção, acompanhada por evidência de estar molhada ou ter fome. Critério: na última semana, a criança deve ter vocalizado para obter atenção pelo menos 3 vezes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"15\",\"text\":\"Consegue \\\"dar\\\" ou \\\"mostrar\\\" quando solicitado.\",\"material\":\"Objetos como brinquedos, pelúcia, biscoito, bola, etc.\",\"atividade\":\"O adulto deve pedir \\\"me dá\\\" ou \\\"me mostre (...)\\\" e verificar se a criança entrega o objeto ou permite que o adulto veja.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"15\",\"text\":\"Retira 6 objetos de um recipiente, um por vez.\",\"material\":\"Blocos coloridos e grandes, bichinhos de pelúcia, caixa, cesto, bolsa, etc.\",\"atividade\":\"Adulto deve entregar recipiente com 6 objetos para a criança que deve remover os 6 objetos um após o outro do recipiente em até 1 minuto após apresentação dos mesmos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"15\",\"text\":\"Segura a caneca com uma só mão e bebe.\",\"material\":\"Xícara com leite.\",\"atividade\":\"Verificar se a criança é capaz de segurar a xícara com uma só mão e dar um gole (por tentativa) sem derramar excessivamente o líquido.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"17\",\"text\":\"Solta um objeto para apanhar outro.\",\"material\":\"Brinquedos, bichinhos de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Colocar no mínimo 2 objetos próximos à criança. Verificar se a criança solta objeto deliberadamente para apanhar um outro.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"18\",\"text\":\"Imita adulto em brincadeiras de esconde-esconde\",\"material\":\"Objetos como: móveis, revista, manta, fralda.\",\"atividade\":\"Dar modelo, vedando os olhos com as mãos ou escondendo-se atrás de um móvel, objeto, dizendo ou não \\\"túti\\\", e \\\"aparecer\\\" e \\\"desaparecer\\\" para a criança. Verificar se a criança, dentro de 10 segundos após o modelo do adulto, o imita em brincadeira de esconde-esconde.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"16\",\"text\":\"Aponta para 12 objetos quando nomeados.\",\"material\":\"Sugestão de objetos conhecidos: Janela, porta, xícara, colher, caixa, bola, prato, boneca, lápis, camisa, sapato, meia, calça, vestido, biscoito, cadeira, árvore, pedra, flor, cobertor, escova de dente, casaco, gato, cachorro (au-au), vaca, porco, cavalo, carneiro, pato, galinha (có-có), etc.\",\"atividade\":\"Pedir à criança para apontar para algo ou perguntar \\\"Cadê o (...)?\\\". A criança deve apontar corretamente.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"16\",\"text\":\"Aponta para uma parte do corpo.\",\"material\":\"Boneca, se necessário.\",\"atividade\":\"Adulto deve dar instrução para criança apontar para uma parte do corpo (cabelo, mão, pé, perna, barriga, etc., de si mesmo, boneca ou outra pessoa). Criança deve realizar ação dentro de 20 segundos após instrução.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"16\",\"text\":\"Coloca a mão na água e dá tapinhas no rosto com as mãos molhadas, imitando alguém.\",\"material\":\"Água.\",\"atividade\":\"Verificar se a criança é capaz de colocar a mão na água e dar tapinhas no rosto (com as mãos molhadas) imitando alguém.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"18\",\"text\":\"Apanha e deixa cair um objeto propositalmente.\",\"material\":\"Se necessário berço ou cadeirão de bebê. Necessário: objeto, pode ser brinquedo, bichinho de pelúcia, bola, biscoito, etc.\",\"atividade\":\"A criança deve estar sentada no berço, em um cadeirão de bebê ou no colo. Verificar se ela consegue apanhar e deixar um objeto cair propositalmente.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"19\",\"text\":\"Bate palmas, imitando um adulto\",\"material\":\"Cronômetro ou relógio com cronômetro: Para medir o tempo de 10 segundos com precisão.\",\"atividade\":\"Dar modelo, batendo palmas na frente da criança. Verificar se ela bate palmas dentro de 10 segundos após o modelo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"17\",\"text\":\"Aponta para 3 a 5 figuras em um livro.\",\"material\":\"Livros infantis, revistas ou álbuns de recortes contendo ilustrações nítidas de objetos conhecidos pela criança como gato, pássaro, cavalo, cachorro, homem, carro, casa, bola, etc.\",\"atividade\":\"Perguntar \\\"Cadê o (...)?\\\" ou \\\"Me mostre o (...)?\\\". A criança deve apontar adequadamente para 3-5 figuras nomeadas de um livro.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"17\",\"text\":\"Empilha 3 blocos, dada a ordem.\",\"material\":\"Blocos grandes de tamanhos diferentes, sendo cada um significativamente maior do que o outro.\",\"atividade\":\"Adulto deve instruir criança a empilhar 3 blocos, um sobre o outro, de forma que o terceiro bloco seja colocado de modo que a pilha continue em pé por pelo menos 1 segundo. A criança deve fazer isso dentro de 20 segundos após instrução e apresentação dos blocos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"17\",\"text\":\"Senta-se em um piniquinho ou sanitário infantil por 5 min\",\"material\":\"Pinico ou vaso infantil.\",\"atividade\":\"Condição: colocar a criança sentada no peniquinho ou privada infantil e verificar se ela fica 5 minutos.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"19\",\"text\":\"Fica em pé com o máximo de apoio.\",\"material\":\"Cronômetro ou relógio para contar o tempo de resposta (10 segundos) da criança. Mãos do adulto.\",\"atividade\":\"Condição: máximo de apoio = criança segurada por um adulto (com ambas as mãos) pela sua cintura ou sob os ombros. Ver se criança fica em pé, ou seja, mantém pernas eretas, por 10 segundos, sendo que as plantas dos pés devem tocar o chão.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"20\",\"text\":\"Acena a mão, imitando um adulto.\",\"material\":\"Cronômetro ou relógio com cronômetro: Para medir o tempo de 10 segundos com precisão.\",\"atividade\":\"Acenar a mão para a criança, dizendo adeus e verificar se criança reproduz ação dentro de 10 segundos após o modelo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"18\",\"text\":\"Aponta para 3 partes de seu próprio corpo.\",\"material\":\"Música e brinquedo de corpo humano\",\"atividade\":\"Perguntar \\\"Cadê o (parte do corpo)?\\\" ou \\\"Me mostre a (parte do corpo)?\\\". A criança deve apontar adequadamente para a parte do corpo, como nariz, olhos, ouvido, boca, cabelo, cabeça, mão, braço, pé e/ou barriga.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"18\",\"text\":\"Emparelha objetos semelhantes.\",\"material\":\"2 bolas, 2 bonecas, 2 colheres. Se não tiver 2 de cada desses objetos, usar outros como camisas da mesma cor e tamanho, frutas, etc.\",\"atividade\":\"Para diminuir a complexidade da tarefa, não apresenta objetos com dimensões diferentes, exemplo: cor, tamanho, forma ou textura. Disponha objetos que servirão como modelo (como uma bola, boneca ou colher) e entregue seus respectivos pares à criança, solicitando que ela emparelhe os semelhantes. A criança deve colocar os objetos que ela possui do lado dos objetos semelhantes. Critério: emparelhar pelo menos 3 diferentes pares de objetos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"18\",\"text\":\"Coloca um chapéu na cabeça e o remove.\",\"material\":\"Chapéu, caixa de papelão, cesta ou chapéu de cartolina.\",\"atividade\":\"Verificar se a criança é capaz de colocar um chapéu na cabeça e remover.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"20\",\"text\":\"Estando em pé com apoio, pula para cima e para baixo.\",\"material\":\"Mãos do adulto.\",\"atividade\":\"Condição: máximo de apoio = criança segurada por um adulto (com ambas as mãos) pela sua cintura ou sob os ombros. Ver se criança estando de pé, com apoio, pula para cima e para baixo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"21\",\"text\":\"Ergue os braços para expressar “grande”, imitando um adulto\",\"material\":\"Cronômetro ou relógio com cronômetro: Para medir o tempo de 10 segundos com precisão.\",\"atividade\":\"Erguer os braços verticalmente e solicitar resposta da criança. Verificar se criança ergue os braços para expressar \\\"grande\\\" dentro de 10 segundos após o modelo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"19\",\"text\":\"Diz seu nome ou apelido quando solicitado.\",\"material\":\"Não necessário.\",\"atividade\":\"Verificar se a criança sabe dizer seu nome ou apelido, quando solicitada.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"19\",\"text\":\"Faz rabiscos no papel.\",\"material\":\"Papel e algum material para rabiscar, como lápis de cera, lápis, canetinha, etc.\",\"atividade\":\"O adulto deve fazer rabiscos em um papel, dando modelo e solicitar que a criança faça o mesmo. A criança deve fazer o mesmo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"19\",\"text\":\"Tira as meias.\",\"material\":\"Meias.\",\"atividade\":\"Verificar se a criança é capaz de tirar uma das meias por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"21\",\"text\":\"Engatinha para apanhar um objeto (distante a sua altura).\",\"material\":\"Brinquedo, bichinho de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Verificar se criança engatinha para apanhar um objeto (distância igual à altura do corpo), ou seja, se ela apoiando-se nas mãos e nos joelhos, movimenta-se para a frente, alternando os membros (diferente, portanto, de arrastar-se).\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"22\",\"text\":\"Oferece algo, mas nem sempre entrega.\",\"material\":\"Objeto como brinquedo, ou pedaço de comida.\",\"atividade\":\"Pedir à criança \\\"Me dá (objeto)\\\" quando ela estiver segurando o objeto. Verificar se ela oferece o objeto a um adulto, estendendo suas mãos com o objeto na direção do adulto. Critério: oferecer e entregar pelo menos 1 vez em 4 tentativas.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"20\",\"text\":\"Responde à pergunta \\\"O que é isto?\\\"\",\"material\":\"Sugestão de objetos conhecidos: Janela, porta, xícara, colher, caixa, bola, prato, boneca, lápis, camisa, sapato, meia, calça, vestido, biscoito, cadeira, árvore, pedra, flor, cobertor, escova de dente, casaco, gato, cachorro (au-au), vaca, porco, cavalo, carneiro, pato, galinha (có-có), etc.\",\"atividade\":\"Mostrar à criança vários objetos conhecidos e perguntar \\\"O que é isto?\\\". Verificar se ela responde.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"20\",\"text\":\"Aponta para si quando perguntam \\\"Cadê o Fulano?\\\"\",\"material\":\"Se necessário, espelho ou fotografia da criança.\",\"atividade\":\"Adulto deve perguntar \\\"Cadê o (nome da criança)?\\\" e criança deve apontar para si mesma. Se necessário, fazer a pergunta colocando a criança de frente para espelho ou apresentando-lhe uma fotografia de si mesma.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"20\",\"text\":\"Empurra os braços pelas mangas e os pés pelas pernas da calça.\",\"material\":\"Camisa e calça.\",\"atividade\":\"Verificar se a criança é capaz de segurar firmemente a camisa sendo que o braço da criança foi previamente colocado na cava da manga, de modo que a própria criança execute o movimento de vestir-se. Fazer o mesmo com a calça por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"22\",\"text\":\"Senta-se apoiando-se sozinho.\",\"material\":\"Se necessário, almofada para a criança sentar.\",\"atividade\":\"Colocar a criança de gatinhas. Verificar se ela se senta ou se apoiar sozinha.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"23\",\"text\":\"Abraça, acaricia e beija familiares.\",\"material\":\"Presença de pelo menos 2 familiares diferentes.\",\"atividade\":\"Dizer à criança \\\"Dá um beijo na mamãe\\\", \\\"Faz carinho no papai\\\", etc. Se necessário, dar modelo. Verificar se criança abraça, acaricia, beija, encosta o rosto ou manda beijo com as mãos para familiares. Critério: Fazer isso com pelo menos 2 familiares diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"21\",\"text\":\"Combina palavras e gestos para expressar desejos.\",\"material\":\"Biscoito, suco, danoninho, brinquedo, pelúcia etc.\",\"atividade\":\"Colocar próximo à criança (por ex: sobre uma mesa) objetos prováveis de serem requisitados por ela, como biscoito, suco, brinquedo, etc. Perguntar \\\"O que você quer?\\\" e ver se a criança responde combinando palavras como \\\"eu\\\" \\\"qué\\\" e gesto \\\"apontar para o objeto ou olhar para ele\\\".\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"21\",\"text\":\"Coloca 5 pinos redondos, dada a ordem.\",\"material\":\"Pinos redondos e prancha com encaixe para pinos.\",\"atividade\":\"Deve-se solicitar que a criança coloque 5 pinos redondos em uma prancha. Criança deve colocar em até 1 minuto após apresentação dos mesmos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"21\",\"text\":\"Tira os sapatos quando os cordões estiverem desamarrados\",\"material\":\"Sapatos (cadarço desamarrado ou velcro frouxo).\",\"atividade\":\"Verificar se a criança é capaz de tirar os sapatos quando o cadarço (ou velcro) estiver desamarrado e frouxo.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"23\",\"text\":\"Estando sentado, vira de gatinhas.\",\"material\":\"Brinquedo como bola, pelúcia, blocos, etc.\",\"atividade\":\"Verificar se ela, estando sentada, se vira de gatinhas. Condição: colocar no chão um brinquedo numa distância equivalente.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"24\",\"text\":\"Responde ao próprio nome, olhando ou estendendo o braço para ser pego.\",\"material\":\"Cronômetro ou relógio com cronômetro: Para medir o tempo de 20 segundos com precisão.\",\"atividade\":\"Adulto deve chamar pelo nome da criança. Verificar se criança responde ao próprio nome, olhando em direção ao adulto ou estendendo os braços para ser pego, dentro de 20 segundos após emissão de seu nome.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"22\",\"text\":\"Nomeia 5 membros da família, incluindo animais.\",\"material\":\"Fotos dos familiares e livros com famílias\",\"atividade\":\"Na presença de 5 membros da família e frente à pergunta \\\"Quem é?\\\", verificar se a criança responde adequadamente dizendo mamãe, papai, nome do irmão, da irmã, do cachorro, vovó, titio, etc.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"22\",\"text\":\"Emparelha objetos com a figura do mesmo nome.\",\"material\":\"Brinquedos como bola, boneca, doce, etc. e suas respectivas figuras em livros ou revistas.\",\"atividade\":\"As figuras devem ser nítidas. O adulto deve apresentar pelo menos 3 objetos diferentes e suas respectivas figuras para a criança e pedir que ela emparelhe os semelhantes. Critério: emparelhar pelo menos 3 objetos diferentes com suas respectivas figuras.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"22\",\"text\":\"Tira o casaco quando desabotoado.\",\"material\":\"Casaco.\",\"atividade\":\"Verificar se a criança é capaz de tirar o casaco quando desabotoado.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"24\",\"text\":\"Estando em DV consegue sentar-se.\",\"material\":\"Brinquedo como bola, pelúcia, blocos, etc.\",\"atividade\":\"Criança de barriga para baixo e adulto ajoelhado próximo à criança, apresentando-lhe brinquedo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"25\",\"text\":\"Aperta ou sacode um brinquedo para produzir sons, em imitação.\",\"material\":\"Chocalho, bichinhos de borracha, caixinhas com arroz, feijão ou pedrinhas.\",\"atividade\":\"Pegar um brinquedo e apertar e/ou sacudir ele na frente da criança, produzindo sons. Dar o brinquedo para a criança e verificar se ela faz o mesmo, dentro de 10 segundos após modelo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"23\",\"text\":\"Nomeia 4 brinquedos.\",\"material\":\"Brinquedo, bola, carro, boneca, telefone, patinho, podendo ser aceito \\\"nenê\\\" para boneca ou bichinho de pelúcia. Os brinquedos devem, preferencialmente, pertencer à própria criança.\",\"atividade\":\"Na presença de 4 brinquedos e frente à pergunta \\\"Quem é?\\\" ou \\\"O que é (isto)?\\\", verificar se a criança responde adequadamente o nome do brinquedo.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"23\",\"text\":\"Aponta para a figura nomeada.\",\"material\":\"Fotografias grandes da família, ilustrações de livros infantis ou figuras de revistas de comestíveis, roupas, animais ou utensílios domésticos.\",\"atividade\":\"Apresentar figuras para a criança e fazer perguntas como \\\"Me mostra o (papai)?\\\", \\\"Onde está o (au-au)?\\\", \\\"Cadê a (bola)?\\\". Verificar se a criança aponta para a figura nomeada em até 20 segundos após a nomeação verbal da mesma.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"23\",\"text\":\"Tira a calça quando desabotoada.\",\"material\":\"Calça. Pode ser uma calça com elástico na cintura.\",\"atividade\":\"Verificar se a criança é capaz de tirar a calça quando desabotoada.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"25\",\"text\":\"Senta-se sem o apoio das mãos.\",\"material\":\"Cronômetro ou relógio para medir o tempo de resposta (2 minutos) da criança.\",\"atividade\":\"Verificar se a criança consegue permanecer sentada por 2 minutos sem apoiar-se nas mãos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"26\",\"text\":\"Manipula brinquedo ou objeto.\",\"material\":\"Carrinho, chocalho, tambor, bolas, blocos, botões que disparam buzina, contas, etc.\",\"atividade\":\"Se necessário, dar modelo e solicitar resposta. Verificar se criança é capaz de manipular brinquedo ou objeto, como movendo-o, balançando-o, rolando-o, batendo-no com as mãos ou com outro objeto ou apertando botões dele para acionar som ou luz.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"24\",\"text\":\"Produz sons de animais, ou os nomeia pelo som\",\"material\":\"Ilustrações de animais, se necessário.\",\"atividade\":\"Verificar se a criança consegue produzir sons de animais como au-au (cachorro), miau (gato), mumu (vacas), có-có (galinha), quá-quá (patos), piu-piu (passarinhos), mée (carneiros), etc. Critério: produzir pelo menos 2 sons diferentes de animais ou usar pelo menos 2 sons para nomear 2 diferentes animais.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"24\",\"text\":\"Vira as páginas de um livro (2/3 por vez) para encontrar a figura nomeada.\",\"material\":\"Livro, preferencialmente de histórias infantis, com páginas de papel comum e ilustrações grandes e coloridas.\",\"atividade\":\"Mostrar e nomear uma figura distinta de um livro infantil. Em seguida fechar o livro e solicitar que a criança encontre a figura. A criança deve virar as páginas do livro (2-3 de cada vez) e, em seguida, encontrar a figura nomeada.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"24\",\"text\":\"Puxa um fecho grande para cima e para baixo.\",\"material\":\"Zíper grande na roupa (15-20 cm).\",\"atividade\":\"Verificar se a criança sabe puxar um zíper grande, para cima e para baixo, que já esteja encaixado, sem enroscá-lo na roupa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"26\",\"text\":\"Atira objetos ao acaso.\",\"material\":\"Objetos como brinquedos, biscoitos, ursinhos de pelúcia, bolinhas, etc.\",\"atividade\":\"Verificar se a criança é capaz de atirar objetos ao ar.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"27\",\"text\":\"Estende um brinquedo ou objeto a um adulto e o entrega.\",\"material\":\"Brinquedos como bichinhos, carrinhos, bonecas, etc.\",\"atividade\":\"Apresentar vários objetos ou brinquedos para a criança e, quando ela estiver segurando um deles, dizer \\\"me dá (objeto)\\\". Se necessário, colocar objeto em sua mão e depois solicitar ele de volta. Verificar se a criança entrega o brinquedo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"25\",\"text\":\"Pede alimentos conhecidos pelo nome, quando mostrados.\",\"material\":\"Alimento conhecido à criança como mamadeira/leite, água, biscoito, pão, guaraná, etc.\",\"atividade\":\"Na presença de um alimento conhecido, a criança deve solicitá-lo, chamando pelo seu nome: mamá, água, qué biscoito, dá pão, etc. Critério: pedir pelo menos 2 diferentes alimentos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"1 a 2 anos\",\"num\":\"25\",\"text\":\"Utiliza palavras ou gestos indicando necessidade de ir ao banheiro.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança no dia anterior.\",\"atividade\":\"Condição: entrevista com o mediador. Verificar se criança diz \\\"xixi\\\" ou \\\"cocô\\\" (ou emite aproximações destes sons) e aponta para o banheiro ou para calça/fralda, embora já possa estar molhada. Critério: no dia anterior, ter apresentado tal comportamento pelo menos 2 vezes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"27\",\"text\":\"Balança para frente e para trás quando de gatinhas.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a última semana.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: na última semana, ter apresentado o comportamento de se balançar para frente e para trás (quando de gatinhas) pelo menos 1 vez.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"0 a 1 anos\",\"num\":\"28\",\"text\":\"Imita movimentos de outras crianças ao brincar.\",\"material\":\"Brinquedos como carrinhos, blocos, contas, caixas, etc. ou móveis como cadeiras.\",\"atividade\":\"Colocar a criança em um ambiente com outras crianças de sua idade e com brinquedos e objetos iguais. Verificar se a criança imita movimentos de outra criança ao brincar, dentro de 10 segundos após ter sido dado o modelo pela outra criança. Movimento inclui manuseio do brinquedo, passar por baixo de cadeiras, bater palmas, dar \\\"tchau\\\", dar indícios de dar cambalhotas, etc. Critério: imitar pelo menos 2 movimentos diferentes de outra criança ao brincar.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"26\",\"text\":\"Faz perguntas variando a entonação da voz\",\"material\":\"Livro\",\"atividade\":\"Se necessário, dar modelo. Verificar se a criança faz perguntas com 1 ou 2 palavras variando a entonação da voz, ou seja, elevando a voz no final da palavra ou da frase, como \\\"quer?\\\", \\\"dá?\\\". Critério: criança fazer pelo menos 2 perguntas em situações diferentes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"28\",\"text\":\"Transfere objetos de uma mão para outra quando sentado.\",\"material\":\"Objetos como brinquedos, biscoitos, etc.\",\"atividade\":\"Condição: colocar um objeto na mão da criança e, em seguida, apresentar outro objeto próximo à mesma mão. Verificar se ela consegue passar um objeto da mão esquerda para a direita e/ou vice-versa.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"27\",\"text\":\"Nomeia 3 partes do corpo em uma boneca ou outra pessoa.\",\"material\":\"Boneca ou pessoa.\",\"atividade\":\"Perguntar à criança \\\"O que é isto?\\\" ao mesmo tempo que aponta uma parte do próprio corpo ou do corpo de uma boneca. Resposta: olho, ouvido, boca, nariz, cabelo, cabeça, mão, braço, pé, perna, barriga, etc. Criança deve nomear 3 partes do corpo.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"25\",\"text\":\"Encontra determinado livro quando solicitado.\",\"material\":\"Livro com ilustração e conteúdo diferente, para que a criança saiba identificá-lo, sobre animais, carros, pessoas, etc.\",\"atividade\":\"Os livros devem estar em locais acessíveis, no mesmo cômodo que a criança se encontra. O adulto deve pedir para que a criança encontre determinado livro. A criança deve se dirigir ao local do livro e pegá-lo, dentro de 30 segundos após a instrução.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"29\",\"text\":\"Retém em uma das mãos 2 cubos de 2,5 cm.\",\"material\":\"2 cubos de 2,5 cm cada.\",\"atividade\":\"Verificar se a criança consegue reter 2 cubos de 2,5 cm cada por 5 segundos em 1 de suas mãos.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"1 a 2 anos\",\"num\":\"28\",\"text\":\"Responde a perguntas de sim / não.\",\"material\":\"Livro, brinquedos com xícaras de plástico\",\"atividade\":\"Fazer perguntas à criança empregando vocabulário sobre pessoas, alimentos, objetos e experiências conhecidas, como \\\"Isso é uma xícara?\\\", \\\"Você tem nome?\\\", \\\"Você está cansado?\\\", \\\"Quer (objeto/alimento)?\\\". Critério: responder 2 perguntas diferentes do tipo sim/não, sendo uma resposta afirmativa/negativa.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"26\",\"text\":\"Completa um quebra-cabeça de encaixe de 3 peças.\",\"material\":\"Quebra cabeça com formas de círculo, quadrado e triângulo manipuláveis (quebra-cabeça de encaixe de 3 peças)\",\"atividade\":\"Dar à criança uma peça de quebra-cabeça por vez, começando por um círculo, depois um quadrado e por último um triângulo. Se necessário, dar modelo. A criança deve completar o quebra-cabeça de encaixe de 3 peças.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"26\",\"text\":\"Alimenta-se sozinho usando colher ou caneca, derrubando um pouco de comida ou derramando pouco líquido.\",\"material\":\"Colher, caneca, comida.\",\"atividade\":\"Cada tentativa consiste em um gole e uma colherada, iniciada dentro de 15 segundos após a apresentação da bebida e do alimento. Critério: alimentar-se de tal forma, pelo menos em 10 tentativas de uma refeição.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"30\",\"text\":\"Fica de joelhos.\",\"material\":\"Se necessário, almofada para a criança ajoelhar em cima.\",\"atividade\":\"Verificar se a criança, estando em pé, sentada ou de gatinhas, se ajoelha.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"29\",\"text\":\"Imita um adulto em uma tarefa simples.\",\"material\":\"Objetos requeridos para tarefas simples como roupas, lençóis, talheres, brinquedos, buchas, copos plásticos, vassoura, espanador de pó, esponja, etc.\",\"atividade\":\"Realizar uma tarefa simples na frente da criança, como sacudir roupas, estender lençóis da cama, segurar talheres, recolher e guardar brinquedos em uma caixa, enxaguar banheira, colocar copos plásticos na pia, varrer, tirar pó de móveis, lavar a louça, etc. Verificar se a criança imita o adulto dentro de 10 segundos após modelo.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"27\",\"text\":\"Nomeia 4 objetos comuns em figuras.\",\"material\":\"Figuras de comestíveis (biscoitos, água, banana, leite, suco) ou de móveis ou utensílios (cama, cadeira, mesa, colher, copo, livro, lápis).\",\"atividade\":\"O adulto deve apresentar figuras para a criança e ela deve nomear 4 objetos comuns em figuras, 20 segundos após apresentação das figuras e a pergunta \\\"O que é isto?\\\" feita pelo adulto. Critério: a criança deve dizer o nome de pelo menos 4 objetos comuns em figuras. Caso a nomeação da criança seja diferente dos padrões da comunidade verbal (exemplo: apresentando erros articulatórios), o critério para adequacidade da resposta será a identificação do objeto por 3 pessoas diferentes.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"27\",\"text\":\"Quando recebe uma toalha enxuga as mãos e o rosto com ajuda\",\"material\":\"Toalha ou paninho.\",\"atividade\":\"Condição: dar ajuda guiando a mão da criança. Verificar se criança enxuga as mãos e rosto com toalha.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"31\",\"text\":\"Fica em pé, apoiando-se em algo.\",\"material\":\"Grade do berço, sofá, mesa, cadeira, etc.\",\"atividade\":\"Verificar se a criança, estando sentada, deitada, de joelhos ou de gatinhas, coloca-se em pé, apoiando-se em algo. (Algo = grade do berço ou quadrado, sofá, mesa ou cadeira).\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"30\",\"text\":\"Brinca ao lado de outra criança, cada uma realizando tarefas diferentes.\",\"material\":\"Brinquedos como blocos, caminhão, carrinho, trator, boneca, mamadeira, etc.\",\"atividade\":\"Colocar a criança próxima a outra criança com aproximadamente a mesma idade e prover-lhes objetos. Verificar se elas brincam sem brigar uma do lado da outra, cada uma realizando tarefas diferentes, por 15-20 minutos.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"28\",\"text\":\"Desenha uma linha vertical imitando um adulto.\",\"material\":\"Papel e algum material para desenhar, como lápis, caneta ou canetinha.\",\"atividade\":\"O adulto deve desenhar uma linha vertical como modelo para a criança, não excedendo em 5 cm o desenho. O adulto deve traçar a linha diante da criança chamando sua atenção para a direção do seu traçado, que deve começar de cima para baixo. Critério: a criança deve fazer o mesmo; seu traço pode ser maior que o do adulto, mas deve ter no mínimo 3 cm de comprimento. A verticalidade do traçado não deve desviar do modelo mais do que 30 graus. Não faz mal se a criança traçar mais de 1 linha e essas linhas não precisam ser perfeitamente retas.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"28\",\"text\":\"Suga líquido do copo ou caneca usando canudinho.\",\"material\":\"Xícara ou copo manufaturado com canudinho.\",\"atividade\":\"Verificar se criança bebe com canudinho sem engasgar, sem perder o fôlego, sem morder o canudinho e/ou sem projetar a língua. Critério: sugar todo o líquido do copo usando canudinho.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"32\",\"text\":\"Usa preensão de pinça para pegar objetos.\",\"material\":\"Objetos pequenos como uva passa, grãos de feijão, milho, contas, botões, etc.\",\"atividade\":\"Apresentar objetos pequenos (uva passa, grãos de feijão, milho, contas,\\nbotões) para a criança e verificar se, no máximo dentro de um minuto após a apresentação dos objetos, ela consegue usar preensão de pinça para pegá-los. Observação: Muita atenção para que a criança não coloque o objeto na boca, nariz ou ouvido.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"31\",\"text\":\"Toma parte em uma brincadeira com outra criança por 2 a 5 minutos.\",\"material\":\"Brinquedos como bola, carrinho, caminhão ou brinquedo de corda.\",\"atividade\":\"Colocar a criança distante de 1 metro de outra criança, com aproximadamente a mesma idade, e pedir que empurrem um carrinho ou façam um brinquedo de corda ir de uma criança para outra. Verificar se a criança tomou parte da brincadeira com a outra criança, compartilhando o mesmo objeto/brinquedo por 2-5 minutos.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"29\",\"text\":\"Combina substantivos ou adjetivos e substantivos em frases de 2 palavras.\",\"material\":\"Bola\",\"atividade\":\"Se necessário, fazer perguntas que poderiam levar à elaboração de frases, como \\\"De quem é a bola?\\\" ou \\\"Onde está a bola?\\\". Critério: apresentar pelo menos 3 frases que combinam substantivos ou adjetivos e substantivos.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"29\",\"text\":\"Desenha uma linha horizontal imitando um adulto.\",\"material\":\"Papel e algum material para desenhar, como lápis, caneta ou canetinha.\",\"atividade\":\"O adulto deve desenhar uma linha horizontal como modelo para a criança, não excedendo em 5 cm o desenho. O adulto deve traçar a linha diante da criança chamando sua atenção para a direção do seu traçado, que deve começar da esquerda para a direita. Critério: a criança deve fazer o mesmo; seu traço pode ser maior que o do adulto, mas deve ter no mínimo 3 cm de comprimento. A horizontalidade do traçado não deve desviar do modelo mais do que 30 graus. Não faz mal se a criança traçar mais de 1 linha e essas linhas não precisam ser perfeitamente retas.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"29\",\"text\":\"Dá garfadas.\",\"material\":\"Garfo com alimento.\",\"atividade\":\"Condição: se necessário, dar instruções. Ver se criança coloca alimento, no garfo, levando uma porção deste até a boca por tentativa. Uma garfada deve ser iniciada dentro de 15 segundos após a apresentação do alimento.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"33\",\"text\":\"Engatinha.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança. Fita métrica para medir.\",\"atividade\":\"Verificar se criança consegue engatinhar uma distância maior do que da altura do corpo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"32\",\"text\":\"Aceita a ausência dos pais, embora possa reclamar.\",\"material\":\"Brinquedos como pelúcias, bolas, carrinhos, bonecas.\",\"atividade\":\"Deixar a criança em um cômodo da casa com outro adulto, engajá-la em uma atividade com brinquedos e retirar-se. Verificar se a criança permanece por 1 hora na ausência dos pais, a realizar suas atividades, embora possa reclamar momentaneamente (quando os pais saem) sob supervisão de um outro adulto familiar.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"30\",\"text\":\"Combina substantivo e verbo em frases de 2 palavras\",\"material\":\"Livro e recortes de revistas\",\"atividade\":\"Frente à pergunta \\\"O que ele/você está fazendo?\\\", a criança deve responder adequadamente um substantivo e um verbo que expressam a ação, como \\\"papai come\\\" ou \\\"eu danço\\\". Critério: apresentar pelo menos 3 frases que combinam substantivo e verbo.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"30\",\"text\":\"Copia um círculo.\",\"material\":\"Folha de papel com círculo já desenhado (4cm de diâmetro), folha limpa e material para escrever, como lápis, caneta ou canetinha.\",\"atividade\":\"O adulto deve apresentar à criança uma folha de papel com círculo já desenhado (4cm de diâmetro) e pedir para ela copiar um desenho igual, sem dar sugestões adicionais (sem nomear ou mover os dedos/lápis). Critério: a criança deve traçar qualquer forma ovalada fechada, que não seja acompanhada por movimentos concêntricos contínuos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"30\",\"text\":\"Mastiga e engole apenas substâncias comestíveis.\",\"material\":\"Alimentos e amostras não comestíveis (como terra, mato e tampinhas).\",\"atividade\":\"Apresentar à criança uma amostra de várias substâncias comestíveis e não comestíveis (terra, mato ou planta, pedregulho, tampinhas) e solicitar à criança que, coloque na boca o que é de comer. Cada vez que a criança levar uma substância é considerada como sendo uma tentativa. Se a criança levar à boca uma substância não comestível, interromper sua ação antes da substância chegar à boca.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"34\",\"text\":\"Estando de gatinhas, estende uma das mãos para o alto.\",\"material\":\"Brinquedo, bichinho de pelúcia, bola, biscoito, etc.\",\"atividade\":\"Verificar se a criança, estando de gatinhas, consegue estender uma de suas mãos para o alto para alcançar algo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"33\",\"text\":\"Explora ativamente seu meio ambiente.\",\"material\":\"Pacotes fechados, pedrinhas no chão, etc.\",\"atividade\":\"Entrevista com o mediador. Verificar se a criança explora seu meio ambiente: a) ao visitar casa de alguém, ir por conta própria ao banheiro e/ou abrir portas de quarto e/ou andar por corredores, etc. b) ao passear, soltar a mão do adulto e olhar para objetos não familiares (como pegar pedrinhas no chão), etc. c) tentar abrir pacotes fechados, etc. Critério: ter apresentado a), b) ou c) pelo menos 1 vez na última semana.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"31\",\"text\":\"Usa uma palavra para indicar que quer ir ao banheiro\",\"material\":\"Não necessário.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: no último dia, ter utilizado uma palavra para indicar ida ao banheiro como xixi, cocô, etc. pelo menos 1 vez, ou na última semana pelo menos 3 vezes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"31\",\"text\":\"Emparelha objetos com a mesma textura.\",\"material\":\"Texturas ásperas (como lixa), lisas (como papel de seda ou superfície de madeira), macias (como espuma ou esponja) e peludas (como pelúcia ou veludo).\",\"atividade\":\"Entregue objetos à criança e peça para ela emparelhar objetos com a mesma textura, colocando objetos próximos à outros com a mesma textura. Critério: emparelhar pelo menos 3 diferentes texturas.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"31\",\"text\":\"Enxuga as mãos sem ajuda ao lhe darem uma toalha\",\"material\":\"Toalha ou paninho.\",\"atividade\":\"Verificar se criança enxuga as mãos sem ajuda, ao lhe darem uma toalha. Critério: mãos secas.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"35\",\"text\":\"Fica em pé com o mínimo de apoio.\",\"material\":\"Cronômetro ou relógio para medir o tempo de resposta (30 segundos) da criança. Móvel ou mão de adulto.\",\"atividade\":\"Verificar se a criança consegue ficar em pé com o mínimo de apoio (apoiando-se em um móvel com 1 mão só ou dando apenas 1 mão para um adulto), durante 30 segundos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"34\",\"text\":\"Realiza atividade manipulativa com outra pessoa.\",\"material\":\"Maçaneta de porta, barbante, etc.\",\"atividade\":\"Propiciar à criança uma atividade, como colocá-la atrás de uma porta, fechar  porta e abri-la virando o trinco. Ao \\\"achar\\\" a criança, dar risadas e em seguida a criança deverá fazer o mesmo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"32\",\"text\":\"Combina verbo ou substantivo com \\\"lá\\\" e \\\"aqui\\\" em frases de 2 palavras.\",\"material\":\"Brinquedos e objetos a serem escondidos\",\"atividade\":\"Frente à pergunta: \\\"Onde está (objeto)?\\\" responder com a combinação de um verbo e substantivo como \\\"está aqui\\\" ou “está lá”.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"32\",\"text\":\"Aponta o \\\"pequeno\\\" e o \\\"grande\\\" quando solicitado.\",\"material\":\"Lápis, pedras, sapatos, casacos, pratos, bolachas, doces, bolas, livros, cadeiras, semelhantes em todos os aspectos, contudo, contrastantes em tamanho.\",\"atividade\":\"Pedir para a criança apontar para objetos pequenos e grandes, quando solicitado. Ou seja, ao pedir para apontar para o pequeno, é esperado que a criança saiba fazer essa diferenciação de tamanhos. Critério: apontar pelo menos 3 objetos diferentes, pequenos e grandes.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"32\",\"text\":\"Avisa que quer ir ao banheiro, mesmo sendo tarde demais.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: no próprio dia da entrevista (ou no anterior) a criança deverá ter avisado que queria ir ao banheiro (embora tardiamente), pelo menos 3 vezes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"36\",\"text\":\"Lambe a comida ao redor da boca.\",\"material\":\"Comida = se necessário utilizar alimento pastoso que a criança aprecia.\",\"atividade\":\"Verificar se a criança lambe a comida ao redor da boca, ao se alimentar.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"35\",\"text\":\"Abraça e carrega uma boneca ou brinquedo macio.\",\"material\":\"Brinquedo macio, como boneca, pelúcia, etc.\",\"atividade\":\"Abraçar e/ou carregar brinquedo macio (dar modelo). Solicitar resposta à criança ou pedir à ela que \\\"abrace a boneca/pelúcia e leve-a para dormir\\\". Verificar se a criança deu pelo menos 5 passos abraçando e carregando o brinquedo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"33\",\"text\":\"Combina 2 palavras para expressar posse.\",\"material\":\"Bola, livro, recortes de revistas\",\"atividade\":\"Frente à pergunta: \\\"De quem é isto?\\\" responder adequadamente dizendo o nome do objeto e o de seu possuidor ou pronome indicativo de posse (exemplo: bola minha, carro papai etc.).\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"33\",\"text\":\"Desenha (+) imitando um adulto.\",\"material\":\"Papel e material para desenho, como lápis, caneta ou canetinha.\",\"atividade\":\"O adulto deve desenhar um \\\"+\\\", com no máximo 4 cm, realizando o desenho na frente da criança e pedindo para que ela faça o mesmo. Critério: desenhar um \\\"+\\\" em imitação, de forma que as duas linhas se intersectem. As linhas não necessariamente precisam ser retas.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"33\",\"text\":\"Controla sua baba.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Condição: entrevista com o mediador. Ver se criança consegue permanecer todo o período de vigília sem babar. Critério: não necessita do uso de babadores, não precisa que lhe enxuguem o queixo ou mantém a camisa/roupa seca.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"37\",\"text\":\"Mantém-se em pé sozinho por um minuto.\",\"material\":\"Cronômetro ou relógio para medir o tempo de resposta (1 minuto) da criança.\",\"atividade\":\"Verificar se a criança consegue se manter em pé, sozinha, por 1 minuto no mínimo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"36\",\"text\":\"Repete ações que produzem risos e atenção.\",\"material\":\"Cronômetro ou relógio: Para monitorar o período de observação especificado.\\nVídeo ou áudio (opcional): Se possível, gravar a criança durante a atividade pode ajudar na análise posterior e no esclarecimento de dúvidas.\",\"atividade\":\"Verificar se criança repete ações (motoras e/ou vocais) de modo a provocar risos ou atenção propositalmente. Critério: ter repetido ações que provocam riso/atenção pelo menos em 2 ocasiões diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"34\",\"text\":\"Emprega \\\"não\\\" na fala\",\"material\":\"Jogos com ambientes de casa\",\"atividade\":\"Se necessário, fazer perguntas que envolvam com alta probabilidade respostas contendo \\\"não\\\", por exemplo: \\\"Você quer dormir?\\\", \\\"A mamãe está comendo agora?\\\", \\\"Você quer apanhar?\\\". A criança deve formar frases de 2 a 3 palavras contendo a palavra não.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"34\",\"text\":\"Emparelha 3 cores.\",\"material\":\"Círculos ou brinquedos vermelhos, amarelos e azuis.\",\"atividade\":\"O adulto deve colocar 2 objetos próximos de mesma cor, sendo que pelo menos 3 cores primárias devem ser utilizadas, ou seja, 6 objetos - sendo 3 pares de semelhantes. Deve-se pedir à criança para emparelhar os objetos de modo à juntar 3 pares de 2 cores iguais.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"34\",\"text\":\"Urina ou defeca quando colocado no piniquinho pelo menos 3 vezes por semana.\",\"material\":\"Pinico ou vaso infantil.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: na última semana, a criança deverá ter urinado ou defecado no pinico infantil, pelo menos 3 vezes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"38\",\"text\":\"Derruba um objeto que está dentro de um recipiente.\",\"material\":\"Xícara inquebrável. Objeto pequeno, como cubinho ou bala.\",\"atividade\":\"Verificar se criança derruba objeto que está dentro de um recipiente, como um cubinho dentro de uma xícara.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"37\",\"text\":\"Dá um livro para que um adulto o leia ou para que ambos o compartilhem.\",\"material\":\"Livro, história em quadrinhos, etc.\",\"atividade\":\"Se necessário, solicitar à criança \\\"Me traga o livro...\\\", \\\"Vamos ler o livro...\\\", etc. Verificar se a criança entrega o livro ao adulto e senta ao seu lado por pelo menos 2 minutos enquanto o adulto lê para ela ou enquanto ambos manipulam/folheiam o livro.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"35\",\"text\":\"Responde à pergunta \\\"O que .... está fazendo?\\\" para atividade habituais.\",\"material\":\"Livro ou história em video\",\"atividade\":\"Perguntar \\\"o que você está fazendo?\\\" quando a criança estiver engajada em atividades rotineiras como: andar, saltar, tomar banho, comer, trocar de roupa, lavar. A criança deve responder a pergunta, identificando a ação que está ocorrendo naquele momento.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"35\",\"text\":\"Coloca objetos dentro, em cima e em baixo de um recipiente, dada a ordem.\",\"material\":\"Cubos de 2,5cm e caixas, por exemplo.\",\"atividade\":\"Deve-se solicitar que a criança coloque objetos dentro, em cima ou em baixo de um recipiente, dada respectivas ordens a cada tentativa.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"35\",\"text\":\"Calça os sapatos.\",\"material\":\"Par de sapatos (e meias, se necessário).\",\"atividade\":\"Cada tentativa envolve calçar adequadamente o par de sapatos, que já devem estar previamente desabotoados ou desamarrados. A criança deve colocar cada um dos sapatos em seu respectivo pé direito e esquerdo.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"39\",\"text\":\"Vira várias páginas de um livro ao mesmo tempo.\",\"material\":\"Livro de histórias infantis, com páginas grossas.\",\"atividade\":\"Verificar se criança consegue virar várias páginas de um livro ao mesmo tempo. Se necessário, o adulto pode segurar o livro para a criança.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"38\",\"text\":\"Puxa uma pessoa a mostrar-lhe algo.\",\"material\":\"Qualquer objeto ou ação, como desenho, brincadeira, animal de estimação, flor, etc.\",\"atividade\":\"Se necessário, pedir à criança que vá buscar uma pessoa para lhe mostrar algo (por exemplo: flor no jardim, desenho, caminhão de lixo, cachorro, gato, aquário, brinquedo novo, ou uma atividade qualquer, etc.). Verificar se criança puxa pessoa e lhe mostra o objeto/a ação.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"36\",\"text\":\"Responde a perguntas tipo \\\"Onde está objeto?\\\"\",\"material\":\"Caixa, xícara, prato e diferentes objetos como alimentos ou bolinhas.\",\"atividade\":\"Coloque na frente da criança uma caixa, uma xícara e um prato e dentro diferentes objetos pequenos e pergunte a criança: \\\"Onde está (objeto)?\\\" ou peça aos familiares que \\\"fiquem\\\" em diferentes locais da casa (desde que a criança saiba onde se encontram) e pergunte: \\\"Onde está (pessoa)?\\\". A criança deverá dizer o local onde se encontra o objeto/pessoa. Critério: responder a 3 diferentes perguntas do tipo \\\"Onde?\\\".\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"36\",\"text\":\"Nomeia objetos quando ouve o barulho que fazem.\",\"material\":\"Telefone, despertador, campainha, trator, aspirador, latido de cachorro, avião, miado de gato, mugido de vaca, porta batendo, piano, buzina de carro, etc.\",\"atividade\":\"O adulto deve provocar um barulho (exemplo: bater uma porta) e pedir que a criança nomeie o objeto que produziu o barulho; ou imitar sons de animais e pedir que a criança o identifique. A criança deve responder em até 20 segundos, por tentativa. Critério: nomear pelo menos 5 diferentes objetos/animais que fazem barulho. Se houver discrepâncias articulatórias, o critério para adequacidade de resposta será a identificação do objeto/animal por 3 pessoas diferentes.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"36\",\"text\":\"Escova os dentes imitando um adulto.\",\"material\":\"Escova de dentes e pasta de dentes.\",\"atividade\":\"Abrir a torneira, dar para a criança escova com pasta e, em seguida, dar o modelo, solicitando a resposta. Cada tentativa é constituída por pegar a escova na posição correta, molhar as cerdas da escova, movimentar as cercas da escova pelos dentes e enxaguar a boca.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"40\",\"text\":\"Escava com uma colher ou pá.\",\"material\":\"Colher ou pá, alimento semissólido no prato ou areia/terra.\",\"atividade\":\"Verificar se criança consegue escavar com uma pá ou colher, ou seja, inserir colher ou pá em um prato com alimento semissólido ou monte de areia/terra e retirá-la de forma que esta contenha um pouco de alimento ou areia.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"39\",\"text\":\"Retira a mão ou diz \\\"não\\\" quando está próximo de um objeto não permitido e alguém o lembra disto.\",\"material\":\"Objeto não permitido, como tesoura, vasos que quebram, panela quente, etc.\",\"atividade\":\"Verificar se a criança retira sua mão ou diz \\\"não\\\" quando está perto de um objeto perigoso e/ou não permitido.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"37\",\"text\":\"Nomeia sons ambientais familiares.\",\"material\":\"Sugestão de sons ambientais familiares:\\ncampainha, carro, buzina, animais domésticos, etc.\",\"atividade\":\"Frente à pergunta \\\"Que barulho faz o (objeto)?”, a criança deve reproduzir o som do objeto. Critério: nomear pelo menos 3 diferentes sons.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"37\",\"text\":\"Monta um brinquedo de encaixe de 4 peças.\",\"material\":\"Brinquedo de fácil encaixe, por pressão ou não, de forma que se possa unir peças para construir um todo.\",\"atividade\":\"Pedir para que a criança monte um brinquedo de encaixe de 4 peças, colocando uma peça dentro da outra a fim de formar um brinquedo. Verificar se a criança conseguiu.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"37\",\"text\":\"Retira roupas simples que foram desabotoadas.\",\"material\":\"Roupas simples = vestido ou calças fáceis de serem vestidas.\",\"atividade\":\"Verificar se a criança consegue retirar roupas simples (como vestido ou calças fáceis de serem vestidas) que foram desabotoadas.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"41\",\"text\":\"Coloca pequenos objetos dentro do recipiente.\",\"material\":\"Xícara inquebrável. Objeto pequeno, como pequenos blocos, lego, uva passa, etc.\",\"atividade\":\"Verificar se criança coloca pequenos objetos dentro de um recipiente, no máximo, dentro de 1 minuto após apresentação dos objetos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"40\",\"text\":\"Quando colocado em sua cadeira ou trocador espera ser atendido.\",\"material\":\"Cadeira ou trocador.\",\"atividade\":\"Verificar se a criança consegue esperar, de 2-5 minutos, para ser atendida (alimentada ou trocada).\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"38\",\"text\":\"Dá mais de um objeto quando se usa a forma plural na solicitação.\",\"material\":\"Exemplo de objetos: blocos, xícaras, colheres, bolas, etc.\",\"atividade\":\"Solicitar à criança mais de 1 objeto na forma plural “Me dê os blocos”. Verificar se a criança faz isso.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"38\",\"text\":\"Nomeia ações em figuras (\\\"O que ... está fazendo?\\\").\",\"material\":\"Figuras que envolvam ações nítidas como: lavar, cozinhar, andar de bicicleta, chorar, correr, passar a ferro, costurar, saltar, caminhar, etc.\",\"atividade\":\"Mostrar uma figura à criança e perguntar \\\"O que ... está fazendo?\\\". A criança deve nomear a ação dentro de 20 segundos após a pergunta. Critério: nomear pelo menos 3 ações diferentes em figuras. Se houver discrepâncias articulatórias, o critério para adequacidade de resposta será a identificação da ação por 3 pessoas diferentes.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"38\",\"text\":\"Usa o banheiro para defecar (falha apenas 1x por semana).\",\"material\":\"Pinico ou vaso infantil.\",\"atividade\":\"Condição: entrevista com o mediador. Verificar se criança usa o banheiro para defecar, embora possa precisar de ajuda para tirar a roupa, sentar e usar papel higiênico. Critério: na semana anterior, a criança deverá ter tido apenas 1acidente diurno/falha.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"42\",\"text\":\"Estando de pé, abaixa-se e senta.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança, estando em pé, abaixa-se e senta-se.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"41\",\"text\":\"Brinca com 2 ou 3 crianças da sua idade.\",\"material\":\"Brinquedos, bolas, livros ilustrados, lápis de cor, tinta, caixa de areia, piscina ou tanquinho.\",\"atividade\":\"Propiciar atividades para a criança, com 2 ou 3 crianças de sua idade, e verificar se ela brinca com elas por 20 minutos sem brigar ou chorar, sem supervisão constante de um adulto.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"39\",\"text\":\"Ao falar, refere-se a si próprio pelo nome.\",\"material\":\"Objetos da criança.\",\"atividade\":\"Frente a um pedido da criança, o adulto deve perguntar: \\\"Quem quer (pedido da criança)\\\"? ou perguntar \\\"De quem é este (brinquedo, cobertor, etc.)?\\\". Se a criança responder tais perguntas utilizando pronomes (eu, meu, minha) a resposta será considerada correta.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"39\",\"text\":\"Emparelha forma geométrica com a figura da mesma.\",\"material\":\"Figura geométrica e formas geométricas diversas, como círculos, quadrados e triângulos.\",\"atividade\":\"Apresentar uma figura de um círculo, por exemplo, e em seguida, apresentar formas de círculos, quadrados e triângulos e solicitar a resposta de emparelhamento. A criança deve emparelhar os semelhantes corretamente.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"39\",\"text\":\"Obtém água de uma torneira sem ajuda.\",\"material\":\"Torneira e copo.\",\"atividade\":\"Uma tentativa constitui em pegar o copo, abrir a torneira, encher pelo menos ¼ do copo com água e fechar a torneira.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"43\",\"text\":\"Bate palmas.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Sentar frente à criança e bater palmas (dar modelo), solicitando que a criança faça o mesmo. Verificar se ela vai fazer.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"42\",\"text\":\"Compartilha um objeto ou alimento com outra criança.\",\"material\":\"Alimento, como bolacha. Ou outro objeto, como livro ou brinquedo.\",\"atividade\":\"Dar à criança um objeto ou alimento, como uma bolacha e solicitar \\\"Dê um pedaço da bolacha ao (fulano) e coma o resto\\\". Verificar se a criança faz isso, embora possa protestar momentaneamente.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"40\",\"text\":\"Aponta para figuras de objetos comuns descritos pelo uso (até 10) (\\\"O que se usa pra comer? = colher\\\")\",\"material\":\"Figuras de objetos comuns (exemplo: bola, colher, xícara, vassoura, sabonete, escova de dentes, cadeira, faca, toeira, relógio).\",\"atividade\":\"Apresentar à criança várias figuras de objetos comuns (exemplo: bola, colher, xícara, vassoura, sabonete, escova de dentes, cadeira, faca, torneira, relógio, etc.) e perguntar a ela que objeto usa para jogar, comer, beber, varrer, etc. Critério: apontar corretamente para, pelo menos, 10 figuras de objetos comuns descritos pelo uso.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"40\",\"text\":\"Empilha 5 ou mais argolas em uma vara na ordem.\",\"material\":\"Vara e argolas ou aros de tamanhos significativamente diferentes.\",\"atividade\":\"O adulto deve solicitar à criança que ela empilhe 5 ou mais argolas em uma vara na ordem correta. A criança deve fazer isso em até 1 minuto após a apresentação da vara e das argolas. Critério: ordem correta é do tamanho maior para o menor, ou vice-versa.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"40\",\"text\":\"Lava as mãos e o rosto com um sabonete.\",\"material\":\"Água e sabonete.\",\"atividade\":\"Se for lavar as mãos, cada tentativa é constituída por molhar as mãos, pegar o sabonete, esfregar o sabonete nas mãos, colocar o sabonete em seu lugar, esfregar uma mão na outra e enxaguar as mãos. Se for lavar o rosto, cada tentativa é constituída por molhar as mãos, pegar o sabonete, esfregar o sabonete nas mãos, colocar o sabonete no lugar, passar as mãos ensaboadas no rosto, bochecha, queixo e testa e enxaguar o rosto.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"44\",\"text\":\"Anda com um mínimo de apoio.\",\"material\":\"Se necessário, borda de móvel ou carrinho.\",\"atividade\":\"Verificar se criança é capaz de andar com um mínimo de apoio, ou seja, segurando com apenas 1 de suas mãos a mão do adulto ou segurando com apenas uma de suas mãos a borda de um móvel ou carrinho.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"1 a 2 anos\",\"num\":\"43\",\"text\":\"Cumprimenta colegas ou adultos quando lembrado.\",\"material\":\"Presença de pelo menos 2 colegas ou adultos familiares. Observação: oferecer feedback positivo à criança quando ela cumprimentar os colegas ou adultos familiares conforme solicitado.\",\"atividade\":\"Verificar se, quando lembrada, a criança cumprimenta colegas ou adultos familiares, dizendo \\\"oi\\\" ou \\\"como vai?\\\" e/ou abraçando e beijando. Critério: cumprimentar pelo menos 2 colegas ou adultos familiares quando lembrado.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"41\",\"text\":\"Mostra a idade pelos dedos.\",\"material\":\"Não necessário.\",\"atividade\":\"Perguntar à criança: \\\"Me mostre com os dedos quantos anos você tem?”. Verificar se a criança fez isso.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"41\",\"text\":\"Avisa que quer ir ao banheiro durante o dia a tempo.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a semana.\",\"atividade\":\"Condição: entrevista com o mediador. O mediador deverá ter ajudado a criança (encaminhando-a até o banheiro etc.) todas as vezes em que esta lhe \\\"avisou\\\" que queria ir ao banheiro. A criança deve pedir ou fazer gestos indicativos de ir ao banheiro (Não vale apenas ficar \\\"pulando\\\"). Critério: nenhuma falha por dia durante a semana anterior.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"0 a 1 anos\",\"num\":\"45\",\"text\":\"Dá alguns passos sem apoio.\",\"material\":\"Cronômetro ou relógio para medir o tempo de resposta (1 minuto) da criança.\",\"atividade\":\"Verificar se criança consegue dar alguns passos (5 passos em 1 minuto) sem apoio.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"42\",\"text\":\"Diz seu sexo quando solicitado.\",\"material\":\"Não necessário.\",\"atividade\":\"Frente a pergunta: \\\"Você é um menino ou menina?\\\" ou \\\"Você é homem ou mulher?\\\", verificar se a criança responde adequadamente dizendo menina ou menino, homem ou mulher, de acordo com seu sexo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"42\",\"text\":\"Pendura o casaco em um gancho da sua altura.\",\"material\":\"Casaco e gancho para pendurar roupas.\",\"atividade\":\"Verificar se criança consegue pendurar casaco em um gancho colocado à sua altura.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"43\",\"text\":\"Obedece à seqüência de duas ordens relacionadas.\",\"material\":\"Objetos, alimentos, como leite, xícara, bola, lápis, etc.\",\"atividade\":\"Obedecer = realizar as ações contidas em uma sequência de duas ordens relacionadas. Uma ordem relacionada é aquela que envolve o mesmo objeto ou sequência comportamental (por exemplo: \\\"Beba o leite e limpe a boca\\\", \\\"Coloque a bola no chão e chute a bola\\\", \\\"Pegue e coloque a xícara na mesa\\\", \\\"Pegue o lápis e traga-o aqui\\\", \\\"Vá até a bola e pegue-a\\\", \\\"Pegue a bola e leve para seu quarto\\\"). Verificar se a criança faz isso.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"41\",\"text\":\"Nomeia objetos como sendo grandes ou pequenos.\",\"material\":\"Círculos de 15cm e 7cm, por exemplo. Blocos, bolas, e outros objetos que difiram no tamanho apenas (e não em cor ou  forma).\",\"atividade\":\"Apresentar objetos à criança e perguntar \\\"esse ... é grande ou pequeno?\\\". Variar a ordem das palavras grande e pequeno(a) nas perguntas, de modo à não dar sugestões adicionais à criança. A criança deve responder adequadamente em até 20 segundos após cada pergunta. Critério: responder adequadamente pelo menos 3 perguntas envolvendo 3 diferentes objetos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"43\",\"text\":\"Permanece seco ao dormir durante o dia.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a semana.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: ter acordado seco em todas as vezes que dormiu durante o dia naquela semana.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"44\",\"text\":\"Obedece às ordens dos pais pelo menos ½ das vezes.\",\"material\":\"Objetos relacionados à ordem simples, como interruptor de luz, gaveta, TV, livro, sapato, etc.\",\"atividade\":\"Entrevista com o mediador. O mediador deve apresentar à criança ordens simples (envolvendo uma ação de cada vez) e aguardar a resposta da criança sem repetir a ordem. Exemplo: \\\"Vá dormir\\\", \\\"Apague a luz\\\", \\\"Feche a gaveta\\\", \\\"Desligue a TV\\\", \\\"Pegue o livro\\\", \\\"Tire o sapato\\\", \\\"Venha cá\\\". Verificar se a criança obedece imediatamente após a ordem. Critério: 50% das vezes. No dia anterior, a criança deve ter obedecido 3 das 6 ordens dadas pelo responsável, sem necessidade de ter as repetido.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"44\",\"text\":\"Usa a forma do verbo no gerúndio.\",\"material\":\"Brincadeira de interesse: esconde-esconde, batatinha frita...\",\"atividade\":\"Frente à pergunta: \\\"O que você/ele está fazendo?\\\" verificar se a criança responde utilizando a forma do verbo no gerúndio.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"42\",\"text\":\"Aponta para 10 partes do corpo quando requisitado.\",\"material\":\"Se necessário, boneca.\",\"atividade\":\"Pedir para a criança apontar para 10 diferentes partes de seu corpo, como: olhos, mão, pé, pescoço, orelha, nariz, boca, cabelo ou cabeça, braço perna ou barriga, em si mesmo, em boneca ou  em outra pessoa.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"44\",\"text\":\"Evita riscos, por ex: pontas em móveis e escadas sem corrimão.\",\"material\":\"Escadas sem corrimão; pontas de mobílias, etc.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: não ter se machucado em pontas de mobílias e não ter utilizado sozinho, dada a oportunidade, escadas sem corrimão, na última semana; e/ou não ter havido necessidade de o mediador lembrar frequentemente à criança para evitar tais riscos.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"46\",\"text\":\"Sobe escadas engatinhando.\",\"material\":\"Escadas.\",\"atividade\":\"Verificar se criança consegue subir escadas engatinhando, percorrendo pelo menos 4 degraus de uma escada, ao apoiar-se sobre as mãos e joelhos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"45\",\"text\":\"Busca / leva um objeto ou pessoa, quando solicitado.\",\"material\":\"Objetos relacionados à ordem, como revista, brinquedo, pano, etc. ou pessoa.\",\"atividade\":\"Dar à criança ordens como \\\"Dê a revista para o papai\\\", \\\"Coloque isto na mesa, por favor\\\", \\\"Coloque isto no cesto\\\", \\\"Me dê o pano\\\", \\\"Chame seu pai\\\", etc. Assegurando que a criança terá de se locomover de um cômodo para outro da casa.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"45\",\"text\":\"Emprega formas regulares no plural.\",\"material\":\"Blocos de empilhar\",\"atividade\":\"Se a criança não apresentar, em sua conversa habitual, exemplos de emprego de formas regulares no plural, propor questões que a levem, com alta probabilidade, à emissão de tais formas. Por exemplo: \\\"Quantos blocos você tem aí?\\\" ou \\\"O que você está vendo nesta figura?\\\" ou \\\"Quantos ... você vê nesta figura?\\\".\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"43\",\"text\":\"Aponta para menino e menina, dada a ordem.\",\"material\":\"Menino/menina reais, ilustrados em figuras ou bonecos.\",\"atividade\":\"Pedir para que a criança aponte para um menino e uma menina, nessa ordem. A criança deve apontar adequadamente.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"45\",\"text\":\"Usa guardanapo quando recomendado.\",\"material\":\"Guardanapo.\",\"atividade\":\"Condição: entrevista com o mediador. O mediador precisaria já ter aconselhado a criança a usar guardanapo para que este item seja avaliado. Cada tentativa equivale a: dado o lembrete para usar guardanapo, a criança ter atendido à ordem, sendo que usar o guardanapo = passar o guardanapo na boca.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"47\",\"text\":\"Coloca-se em pé, estando sentado.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança consegue colocar-se em pé, estando sentada, sem apoiar-se em algo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"46\",\"text\":\"Presta atenção à estória ou música por 5 a 10 min.\",\"material\":\"História contada e/ou música.\",\"atividade\":\"Adulto deverá contar (e não ler) uma história, utilizando ou não ilustrações. Ou então, cantar música ou apresentar a áudio gravação de músicas infantis. Verificar se a criança presta atenção à história e à música por 5 minutos (perguntar questões simples como \\\"Como era o nome do menino da história?\\\" e/ou verificar se a criança cantou, dançou ou pulou durante a música).\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"46\",\"text\":\"Emprega algumas formas irregulares de verbos no passado de forma sistemática.\",\"material\":\"Ilustrações de atividades diárias.\",\"atividade\":\"Criar situações em que a criança observe uma sequência de ações contendo ilustrações (por exemplo da partida de alguém para a escola, o trabalho etc.) e perguntar: \\\"O que aconteceu nesta história?\\\". Critério: formar frases ou responder a perguntas utilizando pelo menos 3 formas diferentes de verbos no passado (exemplo: ir, fazer e ser). As frases podem conter transformações gramaticais, como por exemplo: \\\"fazi\\\".\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"44\",\"text\":\"Diz se um objeto é pesado ou leve.\",\"material\":\"Objetos contrastantes em relação ao peso, com diferença maior que 2 kg, como um pacote de arroz um chumaço de algodão.\",\"atividade\":\"Apresentar à criança um par de objetos e perguntar por exemplo \\\"O algodão é leve ou pesado?\\\", variando a ordem das palavras \\\"leve\\\" e \\\"pesado\\\" nas perguntas. A criança deve responder adequadamente 20 segundos após cada pergunta.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"46\",\"text\":\"Espeta o garfo na comida, levando-a a boca.\",\"material\":\"Garfo com alimento.\",\"atividade\":\"Verificar se criança espeta o garfo na comida dentro de 15 segundos após apresentação do alimento, sem ajuda.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"48\",\"text\":\"Rola uma bola imitando um adulto.\",\"material\":\"Bola.\",\"atividade\":\"O adulto sentado de frente para a criança, com as pernas entreabertas devera empurrar a bola em direção a criança (que deverá estar sentada a meio metro de distância) solicitando-lhe que faça o mesmo. Verificar se criança consegue rolar a bola, ou seja, empurrar a bola de forma que ela percorra a distância de meio metro (sem necessariamente apresentar direção por adulto), imitando um adulto.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"47\",\"text\":\"Diz \\\"Por favor\\\" ou \\\"Obrigado\\\" quando lembrado.\",\"material\":\"Brinquedo, alimento ou objeto qualquer.\",\"atividade\":\"Propiciar uma situação na qual a criança tenha que pedir ou receber um brinquedo/alimento/objeto e lembrá-la de dizer \\\"por favor\\\" ou \\\"obrigado\\\". Observar se ela fará isso.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"47\",\"text\":\"Faz perguntas do tipo \\\"O que é isso?\\\"\",\"material\":\"Caixa com surpresas\",\"atividade\":\"Se a criança não apresentar em suas verbalizações habituais perguntas do tipo: \\\"O que é isto?\\\", propor situações de jogos onde, por exemplo, na vez do adulto, este mostre um objeto ou desenho e pergunte: \\\"O que é isto?\\\"; em seguida a criança deverá fazer o mesmo. Critério: A criança deve fazer pelo menos 3 perguntas diferentes do tipo \\\"O que é isto (isso)?\\\"\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"45\",\"text\":\"Une 2 partes de uma figura para formar o todo.\",\"material\":\"Figuras geométricas, ilustrações de animais ou de objetos cortados pela metade, peças de quebra-cabeça.\",\"atividade\":\"Dispor ambas as partes de uma figura sobre a mesa, sendo que uma delas deve estar invertida. Pedir à criança para unir as duas partes de forma que a figura fique inteira.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"47\",\"text\":\"Despeja líquido de uma peq. jarra para o copo sem ajuda.\",\"material\":\"Jarra com água e copo.\",\"atividade\":\"Verificar se criança consegue despejar líquido da jarra para o copo, sem derramá-lo.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"49\",\"text\":\"Sobe em uma cadeira de adulto, vira-se e senta.\",\"material\":\"Cadeira.\",\"atividade\":\"Verificar se criança consegue subir em cadeira de adulto, se virar e sentar nela.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"48\",\"text\":\"Tenta ajudar os pais a executarem tarefas realizando parte da mesma\",\"material\":\"Objetos relacionados à atividade, como brinquedos, pá de lixo, prato, alimentos, regador, etc.\",\"atividade\":\"Dar modelo e solicitar resposta, exemplo: varrendo a casa, o adulto deve solicitar à criança que ele segure a pá de lixo; guardar os brinquedos na caixa, tirar pó de móveis, colocar seu prato na pia, guardar alimentos no armário, dar biscoito ou água à visita, regar plantas). Verificar se a criança ajuda.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"48\",\"text\":\"Controla o volume da voz 90% das vezes.\",\"material\":\"Instrumentos musicais com sons altos e baixos\",\"atividade\":\"Em uma situação que envolva o falar alto, ou dada a ordem \\\"Fale alto\\\" a criança deverá emitir uma frase de 4 a 5 palavras em tom alto; e fazer o mesmo para uma ordem envolvendo \\\"Fale baixo\\\". Propor à criança situações de jogos ou brincadeiras que haja alternância de voz: \\\"falar alto\\\" e \\\"falar baixinho\\\" / murmurar, sussurrar, cochichar. Critério: A criança deve demonstrar a habilidade de controlar o volume da sua voz em pelo menos 90% das tentativas.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"46\",\"text\":\"Descreve 2 eventos ou personagens de uma estória familiar ou programa de televisão.\",\"material\":\"História familiar à criança, programa de televisão que ela goste.\",\"atividade\":\"Fazer perguntas à criança como \\\"O que acontece na história X, quando ...?\\\", \\\"Quem aparece no programa X?\\\", \\\"Como é o nome do personagem?\\\", \\\"Como ele é?\\\", etc. A criança deve ser capaz de descrever 2 eventos ou identificar e descrever 2 personagens (pelo menos uma característica por personagem).\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"48\",\"text\":\"Desprende roupas presas com o feixe de pressão.\",\"material\":\"Roupas presas com feixe de pressão.\",\"atividade\":\"Condição: cada tentativa envolve a apresentação de roupa com um fecho de pressão, acompanhada de instruções. Verificar se criança desprende roupas presas com o fecho de pressão.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"50\",\"text\":\"Coloca 4 aros em uma pequena estaca.\",\"material\":\"4 aros e uma pequena estaca.\",\"atividade\":\"O adulto deve dar modelo da atividade e pedir que a criança coloque 4 aros em uma pequena estaca.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"49\",\"text\":\"Brinca de usar roupas de adultos.\",\"material\":\"Roupas, sapatos ou acessórios de adultos.\",\"atividade\":\"Se necessário, proporcionar à criança roupa usada de pessoas da família e dizer \\\"Agora você vai se vestir como a mamãe\\\". Verificar se a criança se veste como o adulto.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"49\",\"text\":\"Usa \\\"este / esta\\\" e \\\"aquele / aquela\\\" na fala.\",\"material\":\"Xícara, comida de plástico e roupas.\",\"atividade\":\"Pedir à criança que faça uma escolha, perguntando por exemplo: que xícara, que camisa, brinquedo, comida, etc ela quer. Variar a posição espacial dos objetos, colocando-os, ora bem disntantes e ora próximos à criança de forma que esta tenha oportunidade de empregar este e aquele.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"47\",\"text\":\"Repete brincadeiras (rimas ou canções) que envolvam movimentos coordenados.\",\"material\":\"Canções infantis que apresentam gestos em sua apresentação, como \\\"adoleta\\\".\",\"atividade\":\"Dar o modelo à criança, cantando uma canção e emitindo gestos associados à canção como \\\"pirulito que bate bate\\\" ou \\\"adoleta\\\". Se necessário, envolver outro adulto ou criança mais velha, ao dar o modelo. Critério: A criança deve reproduzir toda a rima ou canção produzindo movimentos coordenados ou gestos, à medida que receber o modelo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"49\",\"text\":\"Lava seus braços e pernas ao lhe darem banho.\",\"material\":\"Sabonete ou bucha com espuma.\",\"atividade\":\"Condição: entrevista com o mediador. O mediador precisa ter dado oportunidade à criança de lavar seus próprios braços e pernas. Verificar se criança é capaz de passar sabonete e/ou bucha ou esponja com espuma, movimentando o sabonete ou esponja por todo o braço e perna, em seguida retirar a espuma jogando água. Critério: na semana anterior, a criança deveria ter lavado braços e pernas pelo menos em 3 banhos diferentes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"51\",\"text\":\"Retira pinos de 2,5 cm de uma prancha ou tabuleiro.\",\"material\":\"Pinos de 2,5 cm cada e prancha ou tabuleiro com encaixe para os pinos.\",\"atividade\":\"O adulto deve retirar pinos de 2,5 cm cada de uma prancha ou tabuleiro com encaixe para os pinos (dar modelo) e pedir que a criança faça o mesmo. A criança deve retirar um pino sem ajuda a cada tentativa.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"50\",\"text\":\"Faz uma escolha quando indagado.\",\"material\":\"Objetos como brinquedos, alimentos ou bebidas.\",\"atividade\":\"Apresentar à criança 2 tipos de bebida, brinquedos ou alimentos e perguntar à ela: \\\"Quer (leite ou suco)?\\\", \\\"Quer (o carro ou o barquinho?)\\\". Verificar se a criança faz a escolha, pegando 1 dos objetos oferecidos e permanecendo com ele sem trocá-lo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"50\",\"text\":\"Emprega \\\"é\\\" e \\\"está\\\" em frases simples.\",\"material\":\"Brinquedos como boneca, bola e animais de pelúcia.\",\"atividade\":\"Condição: Se a criança não apresentar em suas verbalizações habituais o emprego de frases simples com \\\"é\\\" e \\\"está\\\", apresentar vários objetos a ela por exemplo: bola, boneca, animais de brinquedo etc., e fazer perguntas do tipo: \\\"Onde está a bola?\\\" \\\"De quem é a bola?\\\" \\\"De que cor é a bola?\\\" etc. Critério: empregar \\\"é\\\" ou \\\"está\\\" em pelo menos 3 frases simples, sendo que pelo menos uma frase deva envolver o verbo ser/estar.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"48\",\"text\":\"Emparelha 3 ou mais objetos.\",\"material\":\"Objetos de diversos tipos, sendo que no mínimo 3 deles devem formar par, como: escova de dente e pasta, meia e sapato, pires e xícara, garfo e faca, cadeira e mesa, etc.\",\"atividade\":\"Coloque sobre uma superfície 3 ou mais objetos, como sapato, escova e pires. Peça à criança para retirar de um segundo agrupamento de objetos, aqueles que formam par com esses, por exemplo, colocando a meia com o sapato, a escova com a pasta de dentes, o pires com a xícara. A criança deve emparelhar 3 ou mais objetos com seus respectivos pares, dentro de 1 minuto por tentativa.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"50\",\"text\":\"Coloca meias.\",\"material\":\"Meias.\",\"atividade\":\"Resposta: cada tentativa diz respeito ao par de meias. Verificar se criança consegue colocar meias em seus pés.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"52\",\"text\":\"Encaixa pinos de 2,5 cm em uma prancha de encaixe.\",\"material\":\"Pinos de 2,5 cm cada e prancha ou tabuleiro com encaixe para os pinos.\",\"atividade\":\"O adulto deve encaixar pinos de 2,5 cm cada de uma prancha ou tabuleiro com encaixe para os pinos (dar modelo) e pedir que a criança faça o mesmo. A criança deve encaixar um pino sem ajuda a cada tentativa.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"2 a 3 anos\",\"num\":\"51\",\"text\":\"Demonstra entender sentimentos, expressando-os.\",\"material\":\"Figura de expressão facial.\",\"atividade\":\"Se a criança não apresentar palavras que expressam sentimentos em suas verbalizações habituais, mostrar a ela figuras que demonstrem expressões nítidas faciais (exemplo: menino chorando) e perguntar à criança \\\"Como o menino está se sentindo?\\\". Verificar se a resposta dela vai demonstrar entendimento sobre sentimentos, utilizando palavras referentes à sentimentos como \\\"amo/gosto\\\", \\\"triste\\\", \\\"bravo\\\", \\\"alegre\\\", etc. Critério: emitir pelo menos 2 palavras que expressem sentimentos diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"51\",\"text\":\"Diz \\\"eu\\\", \\\"mim\\\", \\\"meu\\\" ao invés do próprio nome.\",\"material\":\"Brinquedos com cama e biscoito de plásticos, e roupa de boneca/o\",\"atividade\":\"Fazer perguntas à criança do tipo: \\\"De quem é o brinquedo?\\\", \\\"De quem é a cama?\\\", \\\"De quem é a roupa?\\\", \\\"Quem quer uma bolacha?\\\", \\\"Quem é você?\\\", etc. Verificar se ela responde adequadamente.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"49\",\"text\":\"Aponta para objetos compridos ou curtos.\",\"material\":\"Lápis, régua, macarrão, meia, etc. Semelhantes em todos os aspectos e contrastando apenas quanto ao comprimento (ex: um palito de 5 cm e um de 6,5 cm).\",\"atividade\":\"Adulto deve falar para a criança \\\"Me mostre a meia comprida\\\", \\\"Qual o macarrão curto?\\\". Não use palavras como grande/maior ou menor. A cada resposta da criança, alterar posição espacial dos objetos, de forma que ela discrimine não a posição, mas sim o comprimento. Critério: a criança deve apontar pelo menos 3 objetos diferentes compridos e curtos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"51\",\"text\":\"Veste casaco, malha ou camisa.\",\"material\":\"Peça de roupa, como camisa ou casaco.\",\"atividade\":\"Dar camisa, casaco ou malha para a criança, podendo dar pistas sobre qual a frente da roupa ou qual o modo mais fácil de iniciar o movimento, como sugerir começar pela malha ou pela camisa. Cada tentativa equivale a colocar adequadamente um casaco, camisa ou malha.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"53\",\"text\":\"Constrói uma torre de 3 blocos.\",\"material\":\"3 blocos de tamanhos diferentes sendo cada um significativamente maior que o outro.\",\"atividade\":\"O adulto deve construir uma torre de 3 blocos, de modo a colocar um bloco sobre o outro de forma que ao colocar o 3° bloco a torre permaneça de pé pelo menos por 1 segundo. Assim, ele deve dar modelo e solicitar que a criança faça isso. A resposta da criança deverá ocorrer 20 segundos após os blocos terem sido apresentados.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"52\",\"text\":\"Aponta objetos e diz que eles não são outras coisas\",\"material\":\"Objetos, como bola e xícara.\",\"atividade\":\"Apresentar à criança vários objetos em número de 2, cujos nomes ela conheça (exemplo: uma bola e uma xícara) e pedir a ela que aponte para o objeto que \\\"não é uma bola\\\" por exemplo. Verificar se ela faz isso.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"50\",\"text\":\"Associa objetos correspondentes. Ex: meia/sapato.\",\"material\":\"Materiais que frequentemente aparecem juntos, como: meia e sapato, lápis e papel, pente e escova, copo e prato, chaveiro e chave. etc. e 1 objeto diferente, para ser apresentado junto com o par de objetos semelhantes.\",\"atividade\":\"Dispor 3 objetos por tentativa (sendo que 2 destes objetos devem formar par e um terceiro objeto deve ser diferente) e perguntar \\\"Quais destes objetos aparecem sempre juntos?\\\". A criança deve ser capaz de dizer quais objetos estão frequentemente juntos, como meia e sapato, copo e prato, lápis e papel, etc. Critério: a criança deve dizer no mínimo 3 diferentes objetos que aparecem frequentemente juntos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"2 a 3 anos\",\"num\":\"52\",\"text\":\"Identifica a parte dianteira da roupa.\",\"material\":\"Camisas, calças, blusões, jaquetas ou qualquer peça de roupa.\",\"atividade\":\"Condição: a peça de roupa deve ter algum sinal tal como; botão, bolso, zíper, etc. que assinale a diferença entre as duas partes: dianteira e traseira. Verificar se criança é capaz de identificar = apontar ou verbalizar qual a frente da roupa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"54\",\"text\":\"Faz traços no papel com lápis ou lápis de cera.\",\"material\":\"Papel, lápis ou giz de cera.\",\"atividade\":\"O adulto deve fazer traços no papel com lápis ou lápis/giz de cera, dando modelo e solicitando à criança que ela faça o mesmo. A criança deve fazer qualquer tipo de traço ou \\\"rabisco\\\" no papel.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"53\",\"text\":\"Responde à pergunta \\\"Quem?\\\" dando um nome\",\"material\":\"Se necessário, ilustração ou fotografia.\",\"atividade\":\"Frente à pergunta: \\\"Quem está ...?\\\" ou \\\"Quem é ...? a criança deverá responder com um nome de acordo com a ilustração ou situação.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"51\",\"text\":\"Conta até 3 imitando um adulto.\",\"material\":\"Biscoitos, brinquedos, blocos, feijão, milho, figuras de animais, etc.\",\"atividade\":\"Dispor 3 objetos frente à criança e dar o modelo. O adulto deve contar até 3 objetos. A criança deve, então, reproduzir a contagem: \\\"um, dois, três\\\".\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"55\",\"text\":\"Anda sozinho.\",\"material\":\"Cronômetro ou relógio para medir o tempo de resposta (1 minuto) da criança.\",\"atividade\":\"Verificar se a criança anda de forma independente, dando 10 passos dentro de 1 minuto sem cair, tropeçar ou bater em objetos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"52\",\"text\":\"Canta e dança ao ouvir músicas.\",\"material\":\"Música\",\"atividade\":\"Apresentar uma música à criança e verificar se ela canta e dança ao ouvi-la, emitindo sons rítmicos e movendo corpo, cabeça e braços ritmicamente.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"54\",\"text\":\"Emprega as formas possessivas dos substantivos.\",\"material\":\"Brinquedos de interesse\",\"atividade\":\"Frente à pergunta \\\"De quem é este (objeto)?\\\", a criança deve responder usando a forma possessiva dos substantivos.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"52\",\"text\":\"Agrupa objetos em categorias.\",\"material\":\"Categorias de objetos: brinquedos, roupas, frutas, mobílias, utensílios de cozinha, animais, etc. Pode usar o próprio objeto ou ilustrações.\",\"atividade\":\"Apresentar à criança diversos objetos, de categorias diferentes e solicitar resposta. A criança deve agrupar ou separar objetos que fazem parte da mesma categoria. Critério: agrupar em pelo menos 3 categorias diferentes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"56\",\"text\":\"Desce escadas sentado, colocando primeiro os pés.\",\"material\":\"Escadas.\",\"atividade\":\"Verificar se criança desce escadas sentada, colocando primeiro os pés e descendo pelo menos, 4 degraus.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"53\",\"text\":\"Segue regras de um jogo imitando ações de outras crianças.\",\"material\":\"Brincadeiras como \\\"roda\\\", \\\"seguir o líder\\\", \\\"lenço atrás\\\", colocar areia em caminhão, montar brinquedo de encaixe, subir em \\\"trepa-trepa\\\", etc.\",\"atividade\":\"Propiciar às crianças brincadeiras em conjunto ou que cada um faz uma ação e o outro imita. Verificar se a criança consegue seguir as regras do jogo, tais quais: sentar em círculo, seguir instruções, imitar o líder de fazer o mesmo que o resto do grupo, etc.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"55\",\"text\":\"Usa artigos ao falar.\",\"material\":\"Objetos habituais (como mesa, brinquedo, livro, etc.) .\",\"atividade\":\"Se a criança não apresentar em suas verbalizações habituais o uso de artigos, proponha perguntas como \\\"De que cor é isto?\\\" e associe as respostas a objetos habituais (mesa, brinquedo, livro, etc.) ou \\\"De que cor é o sol?\\\". Critério: A criança deve usar pelo menos 1 artigo definido e 1 artigo indefinido ao falar. Os artigos definidos são: o, a, os, as. Os artigos indefinidos são: um, uma, uns, umas.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"53\",\"text\":\"Traça um (V) em imitação.\",\"material\":\"Papel e algum material para escrever, como lápis, caneta ou canetinha.\",\"atividade\":\"O adulto deve traçar um V diante da criança, sendo que tal traçado não deve ser maior que 4 cm. A criança deve traçar um V em imitação. Critério: De tal forma que as linhas se unam, formando um ângulo menor que 45º. Não pode ser de cabeça para baixo ou virado de lado.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"53\",\"text\":\"Alimenta-se sozinho por toda a refeição.\",\"material\":\"Prato com alimento (e garfo).\",\"atividade\":\"Condição: a comida deve estar no prato, cortada em pedaços pequenos. Entrevista com o mediador. Verificar se a criança alimenta-se sozinha = esvaziar o prato (ou a maior parte\\ndeste) levando à boca a colher/garfo de forma independente durante a refeição. Critério: deverá ter se alimentado independentemente em pelo menos 1 refeição por dia na última semana.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"57\",\"text\":\"Senta-se em uma cadeirinha.\",\"material\":\"Cadeira ou cadeirinha de criança.\",\"atividade\":\"Verificar se criança consegue sentar em uma cadeirinha.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"54\",\"text\":\"Cumprimenta pessoas familiares sem ser lembrado.\",\"material\":\"2 pessoas familiares diferentes.\",\"atividade\":\"Verificar se a criança consegue cumprimentar familiares sem ser lembrado. Se ela não cumprimentar, propiciar uma situação de brincadeira, onde uma determinada pessoa venha visitar a criança e observar se esta cumprimenta sem ser lembrada. Critério: cumprimentar familiares sem ser lembrado em pelo menos 2 situações diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"56\",\"text\":\"Usa substantivos que indicam grupo ou categoria.\",\"material\":\"Objeto, um de cada: brinquedo, animal ou comida.\",\"atividade\":\"Misturar ilustrações ou objetos de várias categorias. Ao mostrar um objeto pedir à criança que diga se é brinquedo, animal ou comida.\\nCritério: falar pelo menos 3 substantivos diferentes que indiquem grupo ou categoria (brinquedo, comida, animal).\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"54\",\"text\":\"Traça uma linha diagonal dado o exemplo.\",\"material\":\"Papel e algum material para escrever, como lápis, caneta ou canetinha.\",\"atividade\":\"Dar modelo à criança, traçando uma linha diagonal em sua frente. A criança deve fazer o mesmo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"54\",\"text\":\"Veste-se só, precisando de ajuda apenas quanto há malhas ou camisetas com golas fechadas ou botões e fechos.\",\"material\":\"Peças de roupa.\",\"atividade\":\"Condição: entrevista com o mediador. Verificar se criança consegue vestir-se sozinha = colocar cueca, calça e camisa ou calcinha e vestido, sem ajuda. Critério: na semana anterior, ter precisado de ajuda para vestir-se, somente se as roupas eram malhas ou camisetas com golas cerradas, ou roupas com botões ou fechos, em todas as ocasiões em que teve oportunidade para se vestir.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"58\",\"text\":\"Agacha-se e volta a ficar em pé.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança consegue agachar-se (sentar sobre os calcanhares) e voltar a ficar em pé, sem cair.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"55\",\"text\":\"Seguem regras em jogos de grupos dirigidos por adultos.\",\"material\":\"Jogos de grupo como \\\"pique\\\", \\\"lenço atrás\\\", \\\"esconde-esconde\\\", \\\"dança das cadeiras (com música\\\", etc.\",\"atividade\":\"Verificar se a criança participa de diferentes jogos, seguindo regras. Critério: verificar se a criança participa dos jogos dirigidos por adultos sem violar regras, brigar e/ou desistir da brincadeira antes de seu término.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"57\",\"text\":\"Usa os verbos \\\"ser\\\", \\\"estar\\\" e \\\"ter\\\" no presente com poucos erros.\",\"material\":\"Objeto para colocar na mão da criança, se necessário.\",\"atividade\":\"Apresentar perguntas do tipo: \\\"Quem é você?\\\" \\\"Onde você está?\\\" \\\"O que você tem na mão?\\\" A criança deverá responder adequadamente dizendo\\\": \\\"Sou ...\\\", \\\"Estou na ...\\\", \\\"Tenho...\\\"\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"55\",\"text\":\"Conta até 10 objetos, imitando um adulto.\",\"material\":\"Blocos, contas, feijão, milho, brinquedos, doces, figuras de animais, etc.\",\"atividade\":\"Dispor 10 objetos frente à criança e dar o modelo. O adulto deve contar até 10 objetos. A criança deve, então, reproduzir a contagem: \\\"um, dois, três, ..., dez\\\".\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"55\",\"text\":\"Enxuga o nariz quando lembrado.\",\"material\":\"Lenço ou papel higiênico.\",\"atividade\":\"Condição: propiciar lenço ou papel, quando o nariz da criança estiver escorrendo. Entrevista com o mediador. Critério: ter enxugado o nariz todas as vezes em que foi lembrado.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"59\",\"text\":\"Empurra e puxa brinquedos ao andar.\",\"material\":\"Brinquedo com rodas, amarrado por um barbante, ou carrinho infantil/de feira.\",\"atividade\":\"Verificar se criança empurra e puxa brinquedos ao andar, ou seja, se ela percorre uma distância de meio metro, ora empurrando (segurando um brinquedo de rodas caminhando para frente), ora puxando-o (segurando o brinquedo e caminhando para trás).\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"56\",\"text\":\"Pede permissão para brincar com um brinquedo que está sendo usado por outra criança\",\"material\":\"Brinquedos como pelúcias, bolas, carrinhos, bonecas.\",\"atividade\":\"Verificar se criança pede permissão para brincar com brinquedo usado por outra criança. Se a criança não tiver apresentado tal comportamento em atividades de interação, apresentar um brinquedo de outra criança presente na situação e dizer que se quiser brincar com ele, deve pedir \\\"Por favor, me dá o ...?\\\", \\\"Posso brincar com o ...?\\\" ou \\\"Me empresta o ...?\\\"\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"2 a 3 anos\",\"num\":\"58\",\"text\":\"Diz se os objetos estão abertos ou fechados.\",\"material\":\"Objeto: frascos, caixas, portas, etc.\",\"atividade\":\"Abrir ou fechar os objetos e perguntar à criança: \\\"(Tal objeto) está aberto ou fechado?\\\". Verificar se ela responde adequadamente.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"56\",\"text\":\"Constrói uma ponte com 3 blocos por imitação.\",\"material\":\"Blocos.\",\"atividade\":\"Coloque um bloco do lado do outro, deixando um espaço entre eles menor do que um bloco. Coloque o terceiro bloco em cima, sem dar pistas adicionais à criança (por ex: apontar para a abertura entre os blocos, etc.). A criança deve construir uma ponte de 3 blocos, seguindo o modelo do adulto, de modo que os 2 blocos sejam colocados e o 3º seja posto em cima dos 2, de forma que a ponte permaneça em pé por um segundo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"56\",\"text\":\"Acorda seco 2 manhãs por semana\",\"material\":\"Não necessário.\",\"atividade\":\"Condição: entrevista com o mediador. Verificar se criança acorda seca 2 manhãs em uma semana.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"60\",\"text\":\"Usa cadeira ou cavalo de balanço.\",\"material\":\"Cadeira ou cavalo de balanço.\",\"atividade\":\"Verificar se criança usa cadeira ou cavalo de balanço, movimentando o corpo para frente e para trás (no mínimo 2 vezes), de forma a balançar-se.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"57\",\"text\":\"Diz \\\"Por favor\\\" e \\\"Obrigado\\\" sem ser lembrado ½ das vezes.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com o mediador. Critério: no dia anterior, a criança deve ter dito \\\"Por favor\\\" ou \\\"Obrigado\\\" em pelo menos 3 de 6 oportunidades, sem ter sido lembrada.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"57\",\"text\":\"Emparelha uma sequência ou padrão (tamanho, cor) de blocos ou contas.\",\"material\":\"Blocos ou contas de tamanho e cores diferentes.\",\"atividade\":\"Estabelecer como modelo uma sequência de blocos ou contas de tamanhos ou cores diferentes (ex: um bloco grande vermelho, um bloco pequeno azul, um bloco grande vermelho, e assim por diante). Em seguida, apresentar um grupo de blocos de cores e tamanhos variados e solicitar à criança que reproduza a sequência modelo. A criança deve emparelhar uma sequência ou padrão (tamanho, cor) de no mínimo 4 blocos dentro de 1 minuto por tentativa.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"57\",\"text\":\"Se menino, urina no sanitário, em pé\",\"material\":\"Vaso sanitário.\",\"atividade\":\"Observação: se do sexo feminino, anular esse item. Condição: entrevista com o mediador. Se necessário, ajudar a criança a abaixar e erguer a calça. Verificar se a criança ao ficar de pé, frente ao vaso sanitário ou pinico infantil, consegue segurar o pênis e urinar com direção. Critério: ter urinado na privada, em pé, pelo menos 3 vezes na semana anterior.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"61\",\"text\":\"Sobe escadas com ajuda.\",\"material\":\"Escadas.\",\"atividade\":\"Verificar se criança sobre escadas com ajuda, segurando a mão de um adulto, sendo que ela pode segurar no corrimão com a outra mão. Ela deve subir pelo menos 4 degraus, sem se sentar ou apoiar-se nas mãos e sem pular degraus, colocando os 2 pés em um degrau antes de prosseguir para o próximo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"58\",\"text\":\"Atende ao telefone, chamando um adulto e falando com pessoas familiares.\",\"material\":\"Telefone (fixo ou móvel)\",\"atividade\":\"Observação: anular esse item caso a família não possua telefone. Verificar se, ao ouvir o toque do telefone, a criança atende o telefone, chama o adulto solicitado ou fala com uma pessoa familiar, embora não seja capaz de transmitir recados para os outros.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"58\",\"text\":\"Copia uma série de (V) interligados.\",\"material\":\"Papel e algum material para escrever, como lápis, caneta ou canetinha.\",\"atividade\":\"Apresentar à criança uma folha de papel com uma pauta de 2 cm, contendo nove (V)s previamente traçados e interligados. Se necessário, dar pista para a criança para completar seu traçado com o mesmo número de (V)s do modelo. A criança deve copiar uma série de no mínimo 9 (V)s interligados.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"58\",\"text\":\"Veste-se e despe-se sozinho, exceto quanto à botões e fechos em 75% das vezes.\",\"material\":\"Roupas.\",\"atividade\":\"Condição: entrevista com o mediado. A criança deve se desvestir sozinho = retirar cueca, calça, camisas ou malhas. Critério: na semana anterior, ter precisado de ajuda para vestir-se e desvestir-se, somente com relação a botões e fechos, pelo menos em 4 dias diferentes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"62\",\"text\":\"Dobra o corpo sem cair para apanhar objetos no chão.\",\"material\":\"Sugestão de objetos: brinquedos como bola, carrinho, boneca, chocalho, etc.\",\"atividade\":\"Verificar se criança consegue dobrar o corpo, sem cair, para apanhar objetos no chão, ou seja, se ela estando de pé apanha um objeto do chão sem se ajoelhar, sentar ou cair.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"59\",\"text\":\"Espera a sua vez.\",\"material\":\"Jogos como videogame ou brinquedos como bola, gangorra, balanço, corda, dominó infantil, etc.\",\"atividade\":\"Verificar se a criança consegue esperar sua vez em alguma brincadeira, sem reclamar constantemente ou dizer \\\"sou eu\\\", \\\"minha vez\\\" e deixando outra criança brincar primeiro; ou ao ser servido à mesa. Em atividades que envolvam de 3 à 4 crianças.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"59\",\"text\":\"Expressa diminutivos e aumentativos quando fala.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não apresentar diminutivos e aumentativos em suas verbalizações habituais, propor perguntas que levem a respostas envolvendo aumentativos e diminutivos com alta probabilidade. Por exemplo: apresentar à criança uma ilustração contendo um cachorro do tamanho normal, um cachorro nitidamente grande e um nitidamente pequeno e pedir a ela que diga o que esta vendo. Se necessário dar instruções adicionais tais como: \\\"Que outra maneira existe para se referir quando um cachorro é pequeno\\\"\\\"?. Critério: responder perguntas utilizando frases ou palavras que incluam pelo menos 1 aumentativo e 1 diminuitivo.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"59\",\"text\":\"Acrescenta perna ou braço em um desenho incompleto da figura humana.\",\"material\":\"Papel e algum material para escrever, como lápis, caneta ou canetinha.\",\"atividade\":\"Apresentar para a criança um desenho de figura humana incompleto (com perna ou braço ausente) e solicitar à ela que desenhe o que está faltando.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"59\",\"text\":\"Fecha a roupa com fechos de pressão ou de gancho.\",\"material\":\"Roupas com fecho de pressão ou gancho.\",\"atividade\":\"Cada tentativa deve consistir em fechar um fecho de pressão ou gancho de roupa. Verificar se a criança faz isso.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"1 a 2 anos\",\"num\":\"63\",\"text\":\"Imita um movimento circular.\",\"material\":\"Areia, terra, tinta ou alimento semissólido.\",\"atividade\":\"O adulto deve dar modelo de movimento circular (desenhando um semicírculo com os dedos) e solicitar a resposta. A criança deve fazer o mesmo. Uma dica é usar um material como areia, terra, tinta ou alimento semissólido.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"60\",\"text\":\"Segue regras em jogos dirigidos por uma criança mais velha.\",\"material\":\"Jogos como \\\"esconde-esconde\\\", \\\"dominó\\\", \\\"videogame\\\", etc.\",\"atividade\":\"Critério: criança deve seguir regras de pelo menos 2 jogos diferentes, dirigidos por 1 criança mais velha.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"60\",\"text\":\"Presta atenção por 5 minutos a uma estória lida\",\"material\":\"Livro infantil com figuras, contendo cerca de 3-4 sentenças por página.\",\"atividade\":\"Verificar se a criança permanece sentada ouvindo a história e se ela responde adequadamente a pelo menos 3 perguntas sobre a história.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"60\",\"text\":\"Completa um quebra-cabeças de 6 peças.\",\"material\":\"Quebra-cabeça composto por uma figura recortada em 6 peças de igual tamanho, com linhas retas.\",\"atividade\":\"A criança deve completar um quebra-cabeça de 6 peças sem ensaio dentro de 1 minuto.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"60\",\"text\":\"Assoa o nariz quando lembrado.\",\"material\":\"Lenço ou papel higiênico.\",\"atividade\":\"Condição: dar um lenço para a criança e pedir para que esta assoe o nariz. Fazer isto a cada tentativa. Verificar se criança sabe assoar o nariz = de posse de um lenço, colocado contra o nariz, limpá-lo de forma que o muco nasal seja expelido.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"61\",\"text\":\"Obedece às ordens de um adulto 75% das vezes. (3 vezes a cada 4 tentativas)\",\"material\":\"Objeto envolvido na ordem, exemplo: brinquedo.\",\"atividade\":\"Verificar se a criança responde às ordens de um adulto, respondendo quando chamada e realizando a ação contida na ordem, dentro de 20 segundos após ordem. Exemplo: \\\"Marcos, vem cá\\\", \\\"Guarda seus brinquedos\\\", \\\"Não faz mais isso\\\", etc. Critério: Obedecer pelo menos 3 de 4 ordens dadas.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"61\",\"text\":\"Obedece à sequência de 2 ordens não relacionadas.\",\"material\":\"Objetos como livro, caixa de brinquedos, bola, brinquedos, etc.\",\"atividade\":\"Apresentar à criança ordens do tipo \\\"Traga um livro e feche a caixa de brinquedos\\\", \\\"Traga a bola e feche a porta”, \\\"Abre a boca e feche os olhos\\\". Verificar se criança é capaz de obedecer a uma sequência de duas ordens não relacionadas, ou seja, ordens que envolvam dois objetos diferentes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"61\",\"text\":\"Indica se os objetos são iguais ou diferentes.\",\"material\":\"2 garfos, 2 blocos, 2 pentes, etc.\",\"atividade\":\"Apresentar 2 objetos à criança, iguais ou diferentes, e perguntar \\\"Isto é igual à isso?\\\". A criança deve responder em 20 segundos. Critério: apresentar respostas corretas a pelo menos 3 pares de objetos, sendo pelo menos 1 dos pares diferentes.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"61\",\"text\":\"Evita perigos corriqueiros, por ex: caco de vidro.\",\"material\":\"Perigos corriqueiros como caco de vidro, garrafas, fogo, panelas quentes, janelas abertas, interruptores, lugares altos, animais desconhecidos.\",\"atividade\":\"Condição: entrevista com o mediador. Verificar se criança sabe evitar perigos corriqueiros, dada a oportunidade, sem machucar-se. Critério: não ter se machucado na última semana com os objetos acima, e/ou não ter caído de escadas ou lugares altos, evitar ruas movimentadas e/ou não ter havido necessidade de o mediador lembrar frequentemente a criança para evitar tais riscos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"62\",\"text\":\"Permanece em seu próprio quintal ou jardim\",\"material\":\"Portão destrancado.\",\"atividade\":\"Destrancar o portão e verificar se a criança permanece dentro da área de casa, no quintal ou no jardim, mesmo com o acesso à rua livre.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"62\",\"text\":\"Diz seu nome completo quando solicitado.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se a criança diz seu nome completo = nome(s) ou apelido e pelo menos 1 dos sobrenomes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"62\",\"text\":\"Desenha um quadrado imitando um adulto.\",\"material\":\"Papel e algum material para escrever, como lápis, caneta ou canetinha.\",\"atividade\":\"O adulto deve desenhar um quadrado de 2 cm em frente à criança, traçando primeiro os 2 lados opostos e, em seguida, os outros 2 lados (não pode realizar um movimento contínuo). Critério: a criança deve reproduzir o quadrado, podendo ele ser maior ou menos que o do adulto, desde que apresente 4 cantos; os cantos podem ser formados por linhas que se interceptam, mas seus ângulos devem ser aproximadamente retos (L), não podendo ser redondos (O) ou pontiagudos (V).\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"62\",\"text\":\"Pendura roupa no cabide e põe no armário quando pedem.\",\"material\":\"Agasalho, cabide, armário.\",\"atividade\":\"Verificar se criança coloca agasalho em cabide e pendura o cabide em uma barra\\nbaixa/armário, quando lhe dão instruções.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"64\",\"text\":\"Enfia 4 contas grandes em um cordão em 2 minutos.\",\"material\":\"4 contas grandes em 1 cordão.\",\"atividade\":\"O adulto deve dar modelo de enfiar 4 contas grandes em um cordão, em 2 minutos e solicitar resposta. Verificar se a criança fará isso.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"63\",\"text\":\"Brinca perto de outras crianças conversando com elas enquanto trabalha em um projeto próprio (30 min.).\",\"material\":\"Brinquedos como tanque/caixa de areia, tintas e pincéis, lápis de cor, folhas, blocos, etc.\",\"atividade\":\"Verificar se a criança, na presença de outras crianças, consegue conversar com elas ao brincar em projeto próprio por pelo menos 30 minutos, como brincar em caixa de areia, com blocos, desenhar, pintar, etc.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"63\",\"text\":\"Responde perguntas simples envolvendo \\\"Como\\\".\",\"material\":\"Se necessário, livros com ilustrações.\",\"atividade\":\"Fazer perguntas à criança envolvendo \\\"como\\\" para atividades diárias (exemplo: \\\"Como a gente toma banho?\\\", \\\"Como abrimos a porta?\\\") ou para se referir a contos com ilustrações (exemplo: \\\"Como Joãozinho fez para encontrar o caminho de volta para casa?)\\\". A criança deve responder a perguntas simples envolvendo \\\"como\\\" com frases de 2 a 4 palavras.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"63\",\"text\":\"Nomeia 3 cores sendo requisitado.\",\"material\":\"Objetos com cores primárias (vermelho, amarelo e azul), como brinquedos, roupas, meias, etc.\",\"atividade\":\"Mostrar 3 cores para a criança e perguntar \\\"De que cor é (esse objeto)?\\\". A criança deve nomear adequadamente em até 20 segundos após a pergunta. Critério: nomear 3 cores, de forma que 3 pessoas diferentes identifiquem a cor nomeada.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"63\",\"text\":\"Escova os dentes quando recebe instrução.\",\"material\":\"Escova de dentes e pasta de dentes.\",\"atividade\":\"Condição: dar para a criança a escova com pasta e, em seguida, dar instruções (sem modelo). Cada tentativa é constituída por: abrir a torneira, pegar a escova na posição correta, molhar as cerdas da escova, movimentar as cerdas da escova pelos dentes, enxaguar a boca e fechar a torneira. Critério: escovar os dentes quando recebe instruções, pelo menos 1 vez por dia.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"65\",\"text\":\"Vira trincos ou maçanetas em portas.\",\"material\":\"Trincos ou maçanetas em portas. Se necessário, banquinho.\",\"atividade\":\"Verificar se criança vira trincos ou maçanetas em portas, de forma que a porta se abra. Se necessário, auxiliar a criança a alcançar a altura do trinco, colocando-a sobre um banquinho.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"64\",\"text\":\"Emprega verbos regulares, no passado.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não apresentar verbos regulares no passado em suas verbalizações habituais fazer perguntas, baseadas ou não em ilustrações. Exemplo: \\\"O que o gato fez quando viu o rato?\\\" etc. Verificar se ela consegue empregar verbos regulares no passado.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"3 a 4 anos\",\"num\":\"64\",\"text\":\"Nomeia 3 formas geométricas (quadrado, triângulo e círculo).\",\"material\":\"Quadrado, triângulo e círculo.\",\"atividade\":\"Mostrar 3 formas geográficas para a criança e perguntar \\\"De forma é esta?\\\". A criança deve nomear adequadamente em até 20 segundos após a pergunta. Critério: nomear 3 formas geométricas (quadrado, triângulo e círculo), de forma que 3 pessoas diferentes identifiquem a forma geométrica nomeada.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"64\",\"text\":\"Coloca luvas.\",\"material\":\"Luvas\",\"atividade\":\"Verificar se a criança consegue colocar uma das luvas ou ambas as luvas.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"66\",\"text\":\"Salta no mesmo local com ambos os pés.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança, estando parada, salta no mesmo local, levantando ao mesmo tempo ambos os pés, sem se apoiar em algo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"65\",\"text\":\"Relata experiências imediatas.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Fazer perguntas do tipo: \\\"O que você está fazendo?\\\", O que o papai está fazendo com o livro?\\\", \\\"O que você está vendo na TV?\\\". A criança deve responder com experiências imediatas = experiências que estão ocorrendo no mesmo momento em que a questão é feita.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"65\",\"text\":\"Desabotoa botões grandes\",\"material\":\"Roupas com botões, como casacos.\",\"atividade\":\"Cada tentativa equivale a desabotoar um botão.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"67\",\"text\":\"Anda de costas.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança consegue dar 5 passos para trás, estando de costas.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"64\",\"text\":\"Pede ajuda quando está tendo dificuldades.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com mediador. Verificar se criança consegue pedir ajuda quando está com dificuldades para realizar atividade sozinha, como ir no banheiro, conseguir algo para beber, encontrar um objeto, etc. Critério: na última semana, ter pedido ajuda quando teve dificuldades, pelo menos 1 vez.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"66\",\"text\":\"Diz como são usados objetos comuns.\",\"material\":\"Martelo, tesoura, carro, xícara, lápis etc.\",\"atividade\":\"Mostrar à criança um objeto e perguntar a ela: \\\"Que fazemos com isto?\\\", ou \\\"Para que serve isto?\\\". Frente à pergunta: \\\"Para que serve um (martelo)?, a criança deve responder identificando adequadamente a função do objeto. Critério: dizer como são usados pelo menos 3 objetos comuns diferentes.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"66\",\"text\":\"Abotoa botões grandes.\",\"material\":\"Roupas com botões\",\"atividade\":\"Cada tentativa equivale a abotoar um botão.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"68\",\"text\":\"Desce escadas sem ajuda.\",\"material\":\"Escadas.\",\"atividade\":\"Verificar se criança desce escadas (pelo menos 4 degraus) sem ajuda, ou seja, sem ser segurada por um adulto, podendo apoiar-se em corrimão.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"65\",\"text\":\"Contribui para a conversa de adultos.\",\"material\":\"Presença de pelo menos 2 adultos familiares. Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Quando pelo menos 2 adultos estiverem conversando, verificar se a criança faz comentários relacionados ao tema da conversa, ou seja: a) relata algum evento relacionado, b) emite opiniões, c) faz perguntas ou d) responde perguntas. Critério: ter contribuído para uma conversa de adulto em pelo menos 2 ocasiões diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"67\",\"text\":\"Expressa ações futuras empregando os verbos \\\"ir\\\", \\\"ter\\\" e \\\"querer\\\".\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança. Se necessário, utilizar cronômetro ou relógio para contar o tempo de resposta.\",\"atividade\":\"Se a criança não expressar ações futuras empregando os verbos \\\"ir\\\", \\\"ter\\\", \\\"querer\\\" em suas verbalizações habituais, imediatamente (5-10 minutos) antes de realizar uma atividade (tomar banho, comer, ir a loja, etc.) pedir a ela que diga o que vai acontecer ou fazer. Exemplo: \\\"O que você vai fazer agora?\\\" \\\"O que tem que fazer agora?\\\" \\\"O que você vai querer comer no almoço?\\\". Critério: expressar pelo menos 2 ações futuras empregando os\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"65\",\"text\":\"Apanha de 1 a 5 objetos quando solicitado.\",\"material\":\"Contas, doces, bolachas, guardanapos, pratos, xícaras, etc. em número de 5.\",\"atividade\":\"Pedir à criança que ela apanhe determinado número de objetos, sem seguir a sequência numérica, ou seja, solicitar primeiro 3 objetos, depois 1, depois 5, etc. A criança deve pegar com uma ou ambas as mãos, 1 a 5 objetos, quando requisitados. Critério: apanhar pelo menos 3 números diferentes dedo objetos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"3 a 4 anos\",\"num\":\"67\",\"text\":\"Calça botas.\",\"material\":\"Botas, galochas, botinas ou tênis com cano alto.\",\"atividade\":\"Condição: estar usando meias. O adulto deverá afrouxar (se for o caso), previamente os cordões da bota. Cada tentativa consiste em calçar adequadamente o par de botas.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"69\",\"text\":\"Atira uma bola a um adulto à 1 ½ de distância.\",\"material\":\"Bola.\",\"atividade\":\"Verificar se criança atira uma bola a um adulto que se encontra parado a 1,5 m de distância dela, de forma que este possa apanhá-la sem se mover. Se necessário, adulto pode dar modelo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"66\",\"text\":\"Repete rimas, canções ou dança para os outros.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Pedir à criança \\\"recite \\\"Batatinha quando nasce\\\" para a vovó\\\", \\\"canta \\\"Ciranda Cirandinha\\\" para a tia ver\\\", \\\"dança aquela música da novela\\\", etc. Verificar se a criança reproduz rimas, canções ou danças em frente a pessoas conhecidas. Rimas e canções devem ter sido anteriormente aprendidas. Critério: Fazer isso em pelo menos 2 ocasiões diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"68\",\"text\":\"Utiliza adequadamente masculino e feminino na fala.\",\"material\":\"Se necessário, ilustrações.\",\"atividade\":\"Se a criança não utilizar adequadamente masculino e feminino em suas verbalizações habituais, fazer questões (com ajuda ou não de ilustrações) do tipo: \\\"Como chama o 'marido' da vaca?\\\" \\\"E a 'mulher' do gato?\\\" \\\"E o 'marido' da galinha\\\"? etc. Verificar se ela utiliza adequadamente.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"66\",\"text\":\"Nomeia 5 texturas diferentes.\",\"material\":\"Texturas diferentes: liso/áspero, macio/duro, fofo/duro, peludo/sem pelo, duro/mole, etc.\",\"atividade\":\"Apresentar objetos de texturas diferentes pedir para a criança tocar os objetos para, em seguida, perguntar \\\"Esse objeto é liso ou áspero?\\\", \\\"Isso é duro ou macio?\\\". A criança deve responder adequadamente em até 20 segundos após a pergunta. Critério: nomear 5 texturas diferentes, tal que 3 pessoas identifiquem a textura nomeada.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"70\",\"text\":\"Constrói uma torre de 5 a 6 blocos.\",\"material\":\"6 blocos de tamanhos diferentes, sendo cada um significativamente maior que o outro.\",\"atividade\":\"Verificar se criança consegue construir uma torre de 5 a 6 blocos. Se necessário, adulto pode dar modelo. A criança deve iniciar a construção no máximo 20 segundos após a apare-\\nsensação dos blocos.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"67\",\"text\":\"Faz uma tarefa sozinha por 20 a 30 minutos.\",\"material\":\"Objetos como brinquedos, vassoura, alimentos, talheres, etc.\",\"atividade\":\"Verificar se a criança consegue fazer uma tarefa (doméstica como varrer, tirar pó, enrolar brigadeiros e colocá-los na forminha, lavar verduras, separar talheres em lotes de colheres, garfos e facas, etc.) sozinha por 20-30 minutos.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"69\",\"text\":\"Usa formas imperativas de verbos ao pedir favores.\",\"material\":\"Brincadeira de loja/vendinhas.\",\"atividade\":\"Se a criança não usar formas imperativas de verbos em suas verbalizações habituais (\\\"Me passa o café\\\" na hora da refeição etc.) proporcionar uma situação de um jogo ou brincadeira de loja ou \\\"vendinha\\\" em que, após o modelo, a criança deverá ser o freguês pedindo coisas, por exemplo: \\\"Me mostre as laranjas\\\"; \\\"Me pese ½ quilo de tomate\\\", \\\"Me dê o troco\\\".\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"67\",\"text\":\"Copia um triângulo ao ser requisitado.\",\"material\":\"Papel e algum material para escrever, como lápis, caneta ou canetinha.\",\"atividade\":\"Dar à criança um papel com um desenho de um triângulo equilátero (linhas de 4 cm) previamente traçado. Pedir à criança que reproduza o modelo. Critério: o triângulo pode ser maior ou menos do que o modelo; Deve apresentar 3 cantos, de ângulos de aproximadamente 45º cada, composto por linhas pontiagudas, e não redondas; a figura deve ser fechada, sem interrupções.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"71\",\"text\":\"Vira páginas de um livro, uma por vez.\",\"material\":\"Livro, de preferência infantil.\",\"atividade\":\"Verificar se criança consegue virar páginas de um livro, uma por vez, ao segurá-lo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"68\",\"text\":\"Pede desculpas sem ser lembrado 75% das vezes.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com o mediador. Verificar se criança pede desculpas sem ter sido lembrada em pelo menos 3 de 4 oportunidades na semana anterior.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"3 a 4 anos\",\"num\":\"70\",\"text\":\"Conta 2 fatos na ordem de ocorrência.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Fazer com que a criança o observe realizando 2 atividades (por exemplo: dando palmadas na cabeça e em seguida batendo palmas) e pedir à criança que descreva o que você fez na ordem correta.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"68\",\"text\":\"Recorda-se de 4 objetos que haviam sido vistos em uma figura.\",\"material\":\"Figuras de livros infantis ou revistas.\",\"atividade\":\"Mostrar uma figura à criança por 30 segundos, esconder a figura e pedir que ela nomeie 4 objetos que ela viu na figura. Critério: nomear 4 objetos diferentes, tal que 3 pessoas identifiquem o objeto nomeado.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"68\",\"text\":\"Limpa o que derramou por conta própria.\",\"material\":\"Pano.\",\"atividade\":\"Condição: entrevista com o mediador. Verificar se criança, ao ter derramado algo, vai buscar um pano e, em seguida, passá-lo sobre a superfície molhada/suja, deixando-a seca/limpa. Critério: na semana anterior, ter emitido tal resposta, dada a oportunidade.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"72\",\"text\":\"Desembrulha um pequeno objeto.\",\"material\":\"Objeto pequeno como bombom, chocolate, bala, biscoito, bolacha, pequeno brinquedo, caixinha, embrulhados apenas com papel (sem durex, cola ou barbante).\",\"atividade\":\"Verificar se criança desembrulha um pequeno objeto, removendo o papel em que o objeto está embrulhado, de forma que se veja o objeto.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"69\",\"text\":\"Espera sua vez em brincadeiras que envolvam de 8 a 9 crianças.\",\"material\":\"Crianças colegas. Materiais para a brincadeira, exemplo: corda, balanço, gangorra, etc. Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com mediador. Verificar se criança consegue esperar sua vez em uma brincadeira que envolva de 8-9 crianças. Critério: na última semana, ter esperado sua vez durante toda a brincadeira. Exemplo de brincadeiras: balanço, gangorra, pular corda, completar história, adedanha/stop, \\\"passar anel\\\", \\\"cobra cega\\\", etc.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"69\",\"text\":\"Diz o momento do dia associado a cada atividade.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Perguntar à uma criança o momento do dia associado à cada atividade. Por exemplo: \\\"Você faz a lição de casa de dia ou de noite?\\\", \\\"Você acorda de dia ou de noite?\\\", \\\"Seu pai chega do trabalho de dia ou de noite?\\\". Critério: a criança deve dizer pelo menos 2 atividades, sendo que cada uma tem que estar associada com os momentos dia e noite.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"69\",\"text\":\"Evita veneno e todas as substâncias prejudiciais.\",\"material\":\"Substâncias prejudiciais = produtos tóxicos (detergente, álcool, etc.) ou medicamentos.\",\"atividade\":\"Condição: entrevista com o mediador. Verificar se criança não manipula e/ou ingere substâncias prejudiciais. Critério: ter evitado tais substâncias, dada a oportunidade na última semana, sem recomendações excessivas por parte do adulto.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"73\",\"text\":\"Dobra um papel ao meio, imitando um adulto.\",\"material\":\"Quadrado de papel sulfite de 15 cm cada lado.\",\"atividade\":\"Adulto deve dobrar um papel ao meio e criança deve imitar o modelo. Verificar se ela consegue.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"70\",\"text\":\"Brinca com 2 a 3 crianças por 20 min. em uma atividade que envolva cooperação.\",\"material\":\"Materiais envolvidos na brincadeira, como brinquedo de encaixe, carrinhos, etc.\",\"atividade\":\"Adulto deve engajar crianças na atividade que envolva cooperação (como empurrar carrossel, conduzir carrinhos, construir brinquedo de encaixe, etc.) e, em seguida, supervisioná-las. Verificar se a criança consegue engajar na brincadeira. Critério: brincar pelo menos 1 vez, com 2-3 crianças, por 20 minutos, em atividade que envolva cooperação.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"70\",\"text\":\"Repete rimas familiares.\",\"material\":\"Rima, canção infantil ou comercial de TV familiar à criança.\",\"atividade\":\"Perguntar ao mediador que rimas ou canções são familiares à criança (como: \\\"1, 2, feijão com arroz\\\", \\\"parabéns à você\\\", etc.). Dar o modelo verbal pelo menos 2 vezes à criança e solicitar resposta (repetição da rima, pelo menos 8 a 10 palavras). Critério: repetir pelo menos 2 rimas diferentes familiares, de modo que 3 pessoas identifiquem as mesmas).\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"70\",\"text\":\"Desabotoa sua roupa.\",\"material\":\"Camisa, casaco e/ou vestido com botões dianteiros.\",\"atividade\":\"Cada tentativa consiste em desabotoar todos os botões da sua roupa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"74\",\"text\":\"Desmancha e reconstrói brinquedos de encaixe por pressão.\",\"material\":\"Brinquedo de encaixe por pressão = qualquer brinquedo constituído por 2 elementos (1 com orifício) e o outro com uma parte saliente.\",\"atividade\":\"Adulto deve desmanchar e reconstruir um brinquedo de encaixe por pressão, de forma a dar modelo e solicitar a resposta. Criança deve fazer o mesmo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"71\",\"text\":\"Quando em público, apresenta um comportamento socialmente aceitável.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com mediador. Verificar se o comportamento da criança em público é socialmente aceitável (ausência de comportamentos inadequados como: gritar, fazer birra, agredir física ou verbalmente, despir-se, colocar dedo no nariz, rir exageradamente, apresentar comportamentos autoestimulatórios, isolar-se, etc.). Critério: na última semana, ter apresentado 1 comportamento socialmente aceitável todas as vezes que saiu de casa.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"71\",\"text\":\"Obedece a uma sequência envolvendo 3 ordens.\",\"material\":\"Objetos como: camisa, sapatos, bola, livro, etc.\",\"atividade\":\"Propor à criança uma sequência de 3 ordens por exemplo: \\\"Vista a camisa, sente-se e calce os sapatos\\\". \\\"Pegue a bola, ponha a bola em cima da mesa e me traga o livro\\\". A criança deve obedecer a uma sequência de 3 ordens que envolva pelo menos mais de 1 objeto.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"71\",\"text\":\"Diz se um objeto é mais pesado ou mais leve (objetos com diferença de 0,5 quilo).\",\"material\":\"Recipientes de plástico ou de lata, com diferentes quantidades de areia, sal, doces, feijão, macarrão, etc.\",\"atividade\":\"Apresentar 2 recipientes à criança, cuja diferença de peso seja menor que 0,5 kg e perguntar à essa \\\"Isso é mais leve do que aquilo?\\\". Alternar a ordem dos objetos nas perguntas, de modo a não dar pistas adicionais. A criança deve responder corretamente \\\"mais leve\\\", \\\"mais pesado\\\", conforme cada tentativa, em até 20 segundos após a pergunta. Critério: apresentar respostas corretas à pelo menos 3 pares de objetos, sendo pelo menos um dos pares mais pesado/leve.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"71\",\"text\":\"Abotoa sua roupa.\",\"material\":\"Camisa, casaco e/ou vestido com botões dianteiros.\",\"atividade\":\"Cada tentativa consiste em abotoar praticamente todos os botões da roupa (podendo deixar de abotoar 1 ou 2 botões finais).\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"75\",\"text\":\"Desenrosca brinquedos que se encaixam por roscas.\",\"material\":\"Brinquedos que se encaixam por sistema de rosca (ex.: barriquinhas) ou recipientes de plástico com tampa que se encaixa por sistema de rosca (garrafa pet etc.).\",\"atividade\":\"Adulto deve desenroscar (retirar) brinquedos que se encaixam por sistema de roscas, de forma a dar modelo e solicitar resposta da criança, que deve fazer o mesmo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"72\",\"text\":\"Pede permissão para usar objetos dos outros em 75% das vezes.\",\"material\":\"Objetos de outras pessoas. Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com o mediador. Verificar se a criança é capaz de pedir permissão ao invés de tomar objeto de outra pessoa. Critério: na última semana, ela deve ter pedido permissão para usar objetos de outras pessoas em 3 de 4 oportunidades.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"72\",\"text\":\"Demonstra compreensão de verbos reflexivos, usando-os ocasionalmente (ex. ele se machucou).\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não tiver apresentado, em suas verbalizações habituais, uma frase com verbo reflexivo contar uma pequena história, por exemplo: \\\"Pedro e Maria foram ao cinema. Na saída Maria caiu e se machucou\\\" e pergunte: \\\"Quem se machucou?\\\". A criança deve, dada uma frase envolvendo um verbo reflexivo e uma pergunta do tipo: \\\"Quem ..?\\\", identificar que pessoa sofreu a ação do verbo. Ou, já ter empregado, ao falar, pelo menos 1 frase com verbo reflexivo.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"72\",\"text\":\"Diz o que está faltando quando um objeto é retirado de um grupo de 3 objetos.\",\"material\":\"Lápis, borracha, xícara, brinquedo, etc.\",\"atividade\":\"Mostrar à criança um grupo de 3 objetos por 30 segundos, pedir que ela vire de costas/cubra os olhos, retirar um objeto e pedir para que ela diga qual objeto foi retirado. Critério: a criança deve indicar pelo menos 3 objetos diferentes que foram retirados de grupos variados.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"72\",\"text\":\"Retira prato e talheres da mesa.\",\"material\":\"Prato e talheres.\",\"atividade\":\"Condição: entrevista com o mediador. Resposta: cada tentativa consiste em retirar seu prato e seus talheres da mesa, transportando-os para a pia ou mesa da cozinha. Critério: ter apresentado tal comportamento pelo menos 3 vezes, dada a oportunidade, na última semana.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"76\",\"text\":\"Chuta uma bola grande que está imóvel.\",\"material\":\"Bola grande.\",\"atividade\":\"Verificar se criança consegue andar até a bola grande que esteja imóvel e chutá-la, sem apoiar-se em algo e sem cair.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"73\",\"text\":\"Consegue identificar objetos / figuras que formem par, sob solicitação.\",\"material\":\"Objetos ou figuras de dois objetos idênticos: um par de sapatos, um par de luvas, de meias, etc.\",\"atividade\":\"Apresentar os pares de objetos ou figuras misturadas. Pedir à criança: a) que coloque todos os pares juntos ou b) que aponte para um dos elementos de um determinado par de objetos ou c) que lhe dê um par de objetos.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"73\",\"text\":\"Nomeia 8 cores.\",\"material\":\"Objetos (blocos, retrós de linha) de cores nítidas: vermelho, amarelo, azul, verde, laranja/rosa, branco, preto, marrom/cinza.\",\"atividade\":\"Apresentar objetos de cores diferentes e perguntar \\\"De que cor é (este objeto)?\\\". A criança deve responder em 20 segundos adequadamente. Critério: nomear 8 cores de forma que 3 pessoas diferentes identifiquem as cores nomeadas.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"73\",\"text\":\"Encaixa fecho em sua terminação.\",\"material\":\"Zíper grande na roupa (15-20 cm).\",\"atividade\":\"Cada tentativa consiste em encaixar uma vez adequadamente o zíper em sua terminação.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"77\",\"text\":\"Faz bolas de argila, barro ou massinha.\",\"material\":\"Argila, barro ou massinha.\",\"atividade\":\"Verificar se criança consegue fazer bolas, ou seja, enrolar uma porção de argila, barro ou massinha de forma que tenha o formato de um círculo.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"74\",\"text\":\"Emprega o futuro ao falar.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não empregar o futuro em suas verbalizações habituais, fazer perguntas que envolvam ações relativas a um futuro não imediato. Por exemplo: \\\"O que você vai ser quando crescer?\\\", \\\"O que você vai fazer no fim de semana?\\\", \\\"O que você vai fazer nas férias?\\\", etc. A criança deve empregar o futuro ao falar = formar frases envolvendo verbos que expressem ações futuras ou responder a perguntas utilizando verbos no tempo futuro.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"74\",\"text\":\"Identifica o valor de 3 moedas.\",\"material\":\"3 moedas de valores diferentes, como 1 real, 50 centavos e 25 centavos.\",\"atividade\":\"Apresentar 3 moedas de valores diferentes e solicitar à criança que aponte para a moeda de x centavos ou 1 real. A criança deve apontar ou nomear 3 moedas de valores diferentes.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"74\",\"text\":\"Lava as mãos e o rosto.\",\"material\":\"Água e sabonete.\",\"atividade\":\"Condição: dar apenas as instruções. Verificar se a criança lava as mão, seguindo os seguintes passos: abrir a torneira, molhar as mãos, pegar o sabonete, esfregar o sabonete nas mãos, colocar o sabonete em seu lugar, esfregar uma mão na outra, enxaguar as mãos, fechar a torneira e enxugar as mãos. Ou se lava o rosto: cada tentativa é constituída por abrir a torneira, moIhar as mãos, pegar o sabonete, esfregar o sabonete nas mãos, colocar o sabonete no lugar, passar as mãos ensaboadas no rosto, bochecha, queixo e testa, enxaguar o rosto, fechar a torneira e enxugar o rosto.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"78\",\"text\":\"Segura o lápis entre o polegar e o indicador, apoiando-o sobre o dedo médio.\",\"material\":\"Lápis grosso, giz de cera, papel.\",\"atividade\":\"Verificar se criança segura o lápis entre o polegar e o indicador, apoiando-o sobre o dedo médio. Condição: dar papel e lápis para a criança desenhar, a fim de observar a preensão do lápis pela criança.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"73\",\"text\":\"Manifesta seus sentimentos\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Apresenta os seguintes comportamentos, de acordo com a situação: sorrir, abraçar, beijar, chorar, esbravejar ou enraivecer. Critério: manifestar pelo menos 2 sentimentos diferentes, sendo esses raiva e felicidade/amor.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"75\",\"text\":\"Usa orações compostas por coordenação.\",\"material\":\"Se necessário, ilustrações ou jogos que envolvam sequência de ações.\",\"atividade\":\"Se a criança não usar orações compostas por coordenação em suas verbalizações habituais, proporcione a ela situações (tais como ilustrações ou jogos) que envolvam sequências de ações (por exemplo: uma ilustração de um menino jogando a bola para o alto e outra ilustração da bola indo para o meio da rua) que possibilitem, com alta probabilidade, a emissão de orações compostas por coordenação. Critério: A criança deve apresentar pelo menos 2 orações diferentes compostas por coordenação.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"75\",\"text\":\"Emparelha símbolos (letras e números).\",\"material\":\"Conjuntos iguais de pelo menos 5 cartões de números e letras.\",\"atividade\":\"Apresentar à criança um conjunto de 5 cartões de números ou letras (ex: 2, 3, 4, 5, 1) e em seguida, entregar à criança um conjunto idêntico, pedindo que ela emparelhe os idênticos. A cada tentativa, alternar a posição de todo os cartões. A criança deve emparelhar pelo menos 5 símbolos em 1 minuto por tentativa. Critério: emparelhar, no total de 3 tentativas, 15 símbolos (5 por tentativa), sendo pelo menos 1 um conjunto de números e 1 um conjunto de letras.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"75\",\"text\":\"Usa talher apropriado para alimentar-se.\",\"material\":\"Garfo, faca e colher com alimento.\",\"atividade\":\"Condição: Entrevista com o mediador. Cada tentativa equivale a, durante uma refeição, sem lembrar-se de lembrar aos votos, a criança usar apenas alimentos sólidos e colher para alimentos em forma sólida ou líquida, e faca apenas para cortar os alimentos. Critério: Ter apresentado o comportamento acima, pelo menos em 3 refeições na última semana.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"79\",\"text\":\"Dá cambalhota para frente com ajuda.\",\"material\":\"Cama ou tatame confortável. Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança dá cambalhotas para a frente com ajuda. O adulto deve pressionar levemente a cabeça da criança para baixo contra o peito, em seguida segurar a parte posterior do pescoço à medida que a criança dá a cambalhota. Observação: certificar-se de que o quadro clínico da criança permite que ela dê cambalhotas.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"74\",\"text\":\"Brinca com 4 a 5 crianças em atividade de cooperação por 20 minutos, sem supervisão.\",\"material\":\"Outras crianças. Cronômetro ou relógio para medir os 20 minutos. Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com mediador. Verificar se a criança brinca com 4-5 crianças em atividade de cooperação, por 20 minutos sem supervisão constante. Critério: na última semana, ter feito isso.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"76\",\"text\":\"Consegue identificar a parte de cima e de baixo de objetos, quando solicitado.\",\"material\":\"Objetos como garrafas, camisas, mesa, cama, etc.\",\"atividade\":\"Verificar se a criança consegue identificar/apontar a parte de cima e de baixo de objetos quando solicitados. Critério: conseguir identificar a parte de cima e de baixo de pelo menos 3 diferentes objetos.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"76\",\"text\":\"Diz a cor de objetos nomeados.\",\"material\":\"Maças, carro, sofá, casa, céu, grama, etc. (objetos de cores nítidas)\",\"atividade\":\"Pedir à criança que ela diga qual é a cor de objetos familiares. \\\"De que cor é (sua casa)?\\\". A criança deve nomear a cor sem ver o objeto, em até 20 segundos após a pergunta. Critério: dizer pelo menos 3 cores diferentes, tal que 3 pessoas identifiquem a cor nomeada.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"76\",\"text\":\"Acorda de noite para ir ao banheiro, ou acorda seco.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a semana.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: na última semana, não ter urinado ou defecado ao dormir. Acidentes ocasionais em decorrência, por exemplo, de doenças ou ambientes desconhecidos (viagem, passar a noite na casa de outra pessoa) não são considerados.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"2 a 3 anos\",\"num\":\"80\",\"text\":\"Dá marteladas para encaixar 5 pinos em seus orifícios.\",\"material\":\"Martelo (seguro para crianças).\",\"atividade\":\"Criança deve dar marteladas, de forma a encaixar 5 pinos em seus respectivos orifícios (⅓ de cada pino), de acordo com instruções dadas pelo responsável. Adulto pode dar modelo, se necessário.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"75\",\"text\":\"Explica aos outros as regras do jogo ou atividade.\",\"material\":\"Pelo menos 2 pessoas familiares diferentes.\",\"atividade\":\"Propiciar à criança, por exemplo, situações de jogos onde alguém \\\"não sabe brincar\\\" e ver se a criança consegue explicar como se joga. Critério: explicar a pelo menos 2 pessoas familiares diferentes a regra de um jogo ou atividade.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"77\",\"text\":\"Emprega ocasionalmente o condicional ao falar (poderia, pudesse, iria, seria, faria).\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não empregar verbos em seu tempo condicional, em suas verbalizações habituais, fazer perguntas do tipo: \\\"O que você faria se estivesse andando de bicicleta e caísse?\\\", \\\"O que você faria se fosse ao supermercado comprar algo para sua mãe e perdesse o dinheiro no caminho?\\\", \\\"O que você faria se fosse convidado para uma festa e não tivesse roupa para ir?\\\". Dada uma pergunta envolvendo o uso de condicional, a criança deve respondê-la usando ou fazendo referência a um tempo condicional do verbo, ou já ter empregado ao falar pelo menos 1 frase com o uso do condicional.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"77\",\"text\":\"Relata 5 principais fatos de uma história contada 3x.\",\"material\":\"História infantil familiar, como \\\"Chapeuzinho vermelho\\\", \\\"Os três porquinhos\\\", \\\"João e Maria\\\", etc.\",\"atividade\":\"Após contar uma pequena história 3 vezes, fazer perguntas como \\\"Quem chapeuzinho encontrou deitado na cama da vovózinha?\\\". A criança deve relatar 5 principais fatos da história contada 3 vezes, dentro de 20 segundos após a pergunta do adulto, por tentativa.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"77\",\"text\":\"Limpa e assua o nariz em 75% das vezes sem ser lembrado\",\"material\":\"Lenço ou papel higiênico.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: na última semana, em 4 diferentes oportunidades, ter limpado o nariz, sem lembretes, (sem o nariz ter ficado escorrendo), pelo menos 3 vezes.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"76\",\"text\":\"Imita papéis de adulto.\",\"material\":\"Roupas de adultos, lanches, panelas, etc.\",\"atividade\":\"Verificar se a criança imita papeis de adultos: vestindo-se com roupas de adultos ou realizando ações \\\"típicas\\\" de adultos (como guiar carro, dar aula, arrumar casa, brincar de médico ou vendedor, etc.). Critério: ter imitado pelo menos 2 papeis diferentes de adultos (o pai e a mãe).\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"78\",\"text\":\"Consegue identificar absurdos em figuras.\",\"material\":\"Figura contendo situação absurda ou impossível. Exemplo: ninho de passarinhos em cima de uma árvore e cachorro voando em direção ao ninho.\",\"atividade\":\"Dada uma figura contendo uma situação \\\"absurda\\\" ou impossível e a pergunta: \\\"O que tem de 'errado' nesta figura?\\\", a criança deve responder adequadamente, apontando ou verbalizando sobre a situação absurda. Critério: A criança deve identificar pelo menos 2 situações absurdas diferentes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"78\",\"text\":\"Desenha figura humana (cabeça, tronco e 4 membros)\",\"material\":\"Papel e lápis.\",\"atividade\":\"Desenhar uma figura humana , dando modelo para a criança. Pedir que ela reproduza uma também. Critério: o desenho da figura humana deve contar com: cabeça com cabelo, 2 olhos, nariz, boca, 1 tronco e 4 membros. A figura deve ser facilmente identificável como ser humano e os membros devem estar ligados ao tronco (o tronco e os membros não precisam estar em 2 dimensões).\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"78\",\"text\":\"Toma banho só, precisando de ajuda apenas para lavar as costas, pescoço e orelhas.\",\"material\":\"Água e sabonete.\",\"atividade\":\"Condição: entrevista com o mediador. Verificar se criança é capaz de tomar banho sozinha - cada tentativa é constituída por ensaboar a esponja, ou passar o sabonete diretamente sobre todas as partes do corpo (exceto costas, pescoço, orelhas e cabelo), enxaguar o corpo e enxugá-lo. Critério: todas as vezes, na última semana em que teve tal oportunidade.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"77\",\"text\":\"Colabora para a conversa durante as refeições.\",\"material\":\"Pelo menos 2 adultos diferentes. Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com mediador. Verificar se criança, durante as refeições, quando pelo menos 2 adultos estiverem conversando, colabora para a conversa, ou seja: a) relatar algum evento relacionado, b) emitir opiniões sobre o tema, c) fazer perguntas ou d) responder perguntas. Critério: no dia anterior, ter colaborado para a conversa em todas as refeições.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"79\",\"text\":\"Emprega as seguintes palavras: irmã(o), avó, avô.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não empregar as palavras: irmão, irmã, avô, avó em suas verbalizações habituais, fazer perguntas envolvendo tais palavras, como, por exemplo: \\\"O que (nome do irmão) é seu?\\\". Assegure que a criança, na resposta, diga a palavra: irmã, irmão, avô ou avó. Critério: A criança deve empregar pelo menos uma vez as palavras irmã/irmão e avô/avó.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"79\",\"text\":\"Canta 5 estrofes de uma canção.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Pedir à criança para que ela cante uma canção familiar (como \\\"atirei o pau no gato\\\", \\\"ciranda, cirandinha\\\", etc.). Ela deve cantar 5 estrofes de uma canção.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"79\",\"text\":\"Usa faca para espalhar manteiga no pão.\",\"material\":\"Faca, pão fatiado/torrada e manteiga/margarina/geleia/mel/requeijão.\",\"atividade\":\"Condição: manteigueira aberta e disponível, manteiga deve estar mole. Verificar se criança consegue pegar a faca corretamente, introduzir a faca na manteigueira, colocando um pouco de manteiga na faca, segurar com a outra mão a fatia de pão e espalhar por toda a superfície do pão a manteiga. Uma fatia de pão coberta com manteiga consiste em uma tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"81\",\"text\":\"Faz um quebra cabeça de 3 peças.\",\"material\":\"Quebra-cabeças de 3 peças de madeira ou papelão, cortadas uniformemente, de forma que o conjunto de peças formem o todo de uma figura simples (ex.: ilustração de um animal, casa etc.).\",\"atividade\":\"Verificar se criança faz um quebra-cabeças de 3 peças (ou um tabuleiro de encaixe de figuras). Se necessário, adulto pode dar modelo.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"78\",\"text\":\"Segue regras de jogo que envolva raciocínio verbal.\",\"material\":\"Jogo que envolva raciocínio verbal: o que é, o que é; charadas; adivinhação.\",\"atividade\":\"Verificar se criança consegue seguir regras de jogo que envolve raciocínio verbal como charadas ou jogos de adivinhação e o que é, o que é. Para isso, a criança tem direito, por exemplo, a fazer 20 perguntas e o adulto só pode responder \\\"sim\\\" ou \\\"não\\\". Exemplo: \\\"é um bicho?\\\" \\\"é peludo?\\\". Critério: a) responder pelo menos 2 questões que envolvam raciocínio verbal; b) acertar o jogo das 20 perguntas; c) embora sem acertar, ter feito pelo menos 10 perguntas abrangentes como \\\"é pesado?\\\" e não simples como \\\"é seu cabelo?\\\".\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"80\",\"text\":\"Completa frases com antônimos.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Apresentar à criança frases com antônimos para serem completadas, como, por exemplo: \\\"No verão faz calor, no inverno faz ...\\\", \\\"Estamos acordados durante o dia, nós dormimos à ...\\\" ou \\\"O dia é claro, à noite é ...\\\" Critério: A criança deve completar pelo menos 3 frases diferentes com antônimos.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"80\",\"text\":\"Constrói uma pirâmide de 10 blocos por imitação.\",\"material\":\"Blocos, preferivelmente de 5 a 7 cm.\",\"atividade\":\"O adulto deve construir uma pirâmide de 10 blocos, 4 blocos, um do lado do outro, 3 blocos em cima desses, depois 2, depois 1. A criança deve reproduzir o modelo de forma que a pirâmide fique em pé por pelo menos 1 segundo.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"80\",\"text\":\"Aperta e afrouxa cintos ou fivelas.\",\"material\":\"Cinto ou fivela.\",\"atividade\":\"Condição: cinto encaixado em sua terminação. Cada tentativa equivale a apertar 1 vez e afrouxar 1 vez cinto ou fivela.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"82\",\"text\":\"Corta algo em pedaços com tesoura.\",\"material\":\"Papel e tesoura infantil.\",\"atividade\":\"Verificar se criança consegue recortar algo em pedaços com a tesoura infantil, sem rasgar ou amassar. Se necessário, colocar a tesoura de forma correta na mão da criança e segurar o papel.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"79\",\"text\":\"Conforta colegas quando estes estão tristes.\",\"material\":\"Se necessário, brinquedo. Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com mediador. Verificar se a criança consegue confortar colegas quando estão tristes, abraçando, acariciando, falando carinhosamente ou dando um brinquedo ao amigo quando este estiver chorando. Critério: ter apresentado tal comportamento em pelo menos 2 situações diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"81\",\"text\":\"Relata uma estória conhecida sem ajuda de figuras.\",\"material\":\"Historia familiar à criança.\",\"atividade\":\"Levantar junto ao mediador quais histórias são conhecidas pela criança. Contar para a criança essa história 3 vezes e em seguida, pedir-lhe que a repita. Verificar se ela faz isso.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"81\",\"text\":\"Nomeia objetos como sendo compridos ou curtos.\",\"material\":\"Lápis, tiras de papel, linhas traçadas em papel que difiram significativamente em relação ao comprimento.\",\"atividade\":\"Apresentar objetos à criança e perguntar \\\"essa (...) é comprida ou curta?\\\". Variar a ordem das palavras comprido e curto e a posição espacial dos objetos, de modo à não dar pistas adicionais à criança. A criança deve responder adequadamente em até 20 segundos após a pergunta. Critério: responder pelo menos 3 perguntas envolvendo diferentes objetos, sendo pelo menos 1 pergunta referente ao termo comprido/curto.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"81\",\"text\":\"Veste-se sozinho, mas não dá laços.\",\"material\":\"Roupas que incluem botões, fechos, cintos e fivelas dianteiro (mas não laços).\",\"atividade\":\"Condição: entrevista com o mediador. Critério: na semana anterior, a criança deve ter se vestido sozinha todas as vezes, precisando de ajuda somente para dar laços.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"83\",\"text\":\"Pula de uma altura de 20 cm\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança. Fita métrica para medir.\",\"atividade\":\"Verificar se criança consegue pular com os pés juntos, sem cair, de um altura de 20 cm.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"80\",\"text\":\"Escolhe seus próprios amigos.\",\"material\":\"2 crianças amigas diferentes. Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Entrevista com o mediador. Verificar se a criança é capaz de escolher seus próprios amigos. Exemplo: escolher e dizer ao interessado que quer participar de brincadeira com ele; que quer sair com ele; que quer repartir alimento com ele; que quer convidá-lo para passar a tarde em sua casa; etc. Critério: ter escolhido pelo menos 2 amigos diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"82\",\"text\":\"Em uma figura, nomeia o objeto que não pertence a uma determinada categoria.\",\"material\":\"Material: ilustrações de 3 ou 4 objetos sendo 2 ou 3 animais, ferramentas, alimento/frutas ou brinquedos e 1 que não seja, por exemplo, uma roupa ou peça de vestuário.\",\"atividade\":\"Pedir à criança que nomeie o objeto que não pertence ao grupo. Se necessário, perguntar o que se faz com cada objeto ou à que categoria ele pertence.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"82\",\"text\":\"Coloca objetos \\\"atrás\\\", \\\"ao lado\\\" ou \\\"junto\\\" a outros.\",\"material\":\"Brinquedos.\",\"atividade\":\"A criança deve colocar o objeto \\\"atrás\\\", \\\"ao lado\\\" ou \\\"junto\\\" a outro objeto.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"82\",\"text\":\"Serve-se à mesa enquanto seguram a travessa de comida.\",\"material\":\"Travessa ou panela com comida. Colher para pegar a comida.\",\"atividade\":\"Condição: entrevista com o mediador. Resposta: colocar na colher uma porção de alimento da travessa e despejar em seu prato, até obter a quantidade desejada de alimento no prato.\\nCada tentativa diz respeito a fazer isso para uma travessa de alimento. Critério: na última semana, ter apresentado esse comportamento pelo menos 3 vezes, dada a oportunidade.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"84\",\"text\":\"Chuta uma bola grande quando enviada para si.\",\"material\":\"Bola grande.\",\"atividade\":\"Verificar se criança consegue chutar uma bola grande, quando enviada para si, sem apoio e sem cair.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"81\",\"text\":\"Planeja e constrói, usando ferramentas simples.\",\"material\":\"Materiais simples como plano inclinado, alavanca, roldana, martelo, serrotinho, lixa, cola, pregos, blocos, pedaços de madeira ou isopor.\",\"atividade\":\"Dar instruções à criança, sem executar a atividade, para que ela execute determinada atividade. Verificar se ela faz isso (a supervisionando).\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"83\",\"text\":\"Diz se duas palavras rimam ou não.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Fazer perguntas à criança do tipo: \\\"Casa rima com asa?\\\", \\\"Casa rima com urubu?\\\", \\\"Pão rima com sapato?\\\", \\\"Pão rima com limão?\\\". Verificar se ela responde adequadamente.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"83\",\"text\":\"Faz conjuntos iguais de 10 objetos, segundo modelo.\",\"material\":\"Blocos ou objetos pequenos, uvas, doces, etc. em número de 20.\",\"atividade\":\"Dar modelo à criança, envolvendo números diferentes de objetos (1, 3, 7 e 4) e solicitar que ela emparelhe (ou faça um conjunto) com o mesmo número de objetos. Ela deve emparelhar o número de objetos correspondente ao modelo. Critério: fazer 3 conjuntos de objetos de números diferentes segundo o modelo, sendo que pelo menos um dos modelos deve envolver 10 objetos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"83\",\"text\":\"Ajuda a pôr a mesa corretamente quando recebe instruções.\",\"material\":\"Pratos, talheres e guardanapos.\",\"atividade\":\"Condição: entrevista com o mediador. Os pratos, talheres e guardanapos devem estar acessíveis. Criança deve pegar o número de pratos necessários e distribuí-los sobre a mesa, pegar garfos, facas e/ou colheres, colocar ao lado de cada um dos pratos, fazendo o mesmo com o guardanapo. Critério: dadas as oportunidades, ter ajudado a por a mesa pelo menos em 3 refeições na última semana.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"85\",\"text\":\"Anda na ponta dos pés.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança consegue andar na ponta dos pés, dando 4 passos nas pontas dos pés.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"82\",\"text\":\"Estabelece metas para si próprio e executa atividade para atingi-las.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a criança durante a semana.\",\"atividade\":\"Verificar se a criança verbaliza publicamente metas para si próprio e se ela executa atividades para atingi-la. Exemplo: escovar os dentes toda noite, tomar banho, arrumar a cama, guardar os brinquedos todos os dias, fazer as lições de casa sem ser lembrado, dar descarga após usar o banheiro, comer \\\"tudo\\\" nas refeições, etc. Critério> ter executado todas ou grande parte das atividades para atingir pelo menos 2 metas diferentes.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"84\",\"text\":\"Usa frases complexas, compostas por subordinação.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não usar frases complexas, compostas por subordinação em suas verbalizações habituais, propiciar a ela situações (tais como ilustrações ou jogos) que envolvam diversas sequências de ações (por exemplo: ilustrações de um menino brincando, outra ilustração de um menino bem sujo e outra do menino tomando banho) e que apresentem, com alta probabilidade, a emissão de orações compostas por subordinações. Se necessário perguntar à criança \\\"Por que o menino está tomando banho?\\\". Critério: usar pelo menos duas frases complexas compostas por subordinação.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"84\",\"text\":\"Nomeia ou aponta para a parte ausente da figura\",\"material\":\"Figuras ou desenhos de animais (sem cabeça, sem uma parte ou sem rabo) ou de objetos com partes ausentes (casa sem teto, por exemplo).\",\"atividade\":\"Mostrar figuras ou desenhos de animais (sem cabeça, sem uma parte ou sem rabo) ou de objetos com partes ausentes (casa sem teto, por exemplo). A criança deve nomear ou apontar para a parte ausente da figura.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"84\",\"text\":\"Escova os dentes.\",\"material\":\"Escova de dentes e pasta de dentes.\",\"atividade\":\"Condição: entrevista com o mediador. O mediador pode dar instruções (por exemplo, para a criança limpar todas as áreas dos dentes). Cada tentativa é constituída por abrir o tubo da pasta de dentes, colocar a pasta na escova, fechar o tubo, abrir a torneira, pegar a escova adequadamente, molhar as cerdas da escova, movimenta as cerdas da escova pelos dentes, enxaguar a boca, lavar a escova, fechar a torneira e enxugar lábios e mãos. Critério: ter escovado os dentes pelo menos 6 vezes na última semana, espontaneamente ou tendo sido mandado.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"86\",\"text\":\"Corre 10 passos coordenando e alternando o movimento dos braços e pés.\",\"material\":\"Se necessário, tênis de corrida.\",\"atividade\":\"Verificar se criança consegue correr 10 passos, coordenando e alternando o movimento dos braços e pés.\"},{\"area\":\"SOCIALIZAÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"83\",\"text\":\"Dramatiza trechos de histórias, desempenhando um papel ou utilizando fantoches.\",\"material\":\"Materiais como fantoches, papel crepon, maquiagem e fantasias.\",\"atividade\":\"Propor às crianças ou à um grupo um tema, materiais e dar orientação, quanto à dramatização. Verificar se criança é capaz de desempenhar o papel, dramatizando trechos da história.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"4 a 5 anos\",\"num\":\"85\",\"text\":\"Diz se um som é forte ou fraco.\",\"material\":\"Objetos que produzem sons, como instrumentos musicais, bater a porta, bater na mesa, rádio, etc.\",\"atividade\":\"Produzir um som (com instrumentos musicais ou objetos do tipo: rádio, bater na mesa, deixar cair um objeto, fechar uma porta com força ou suavemente) e perguntar: \\\"Este som foi forte ou fraco?\\\". Variar a posição das palavras forte/fraco de modo a não dar sugestões adicionais à criança.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"85\",\"text\":\"Conta de 1 a 20.\",\"material\":\"Brinquedos, biscoitos, pelúcias, etc.\",\"atividade\":\"Apresentar à criança 20 objetos para serem contados. Ela deve apontar ou separar cada um dos objetos ao contá-los.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"85\",\"text\":\"Vai ao banheiro a tempo, retira a roupa, usa papel higiênico, dá descarga e veste-se sem ajuda.\",\"material\":\"Roupa, papel higiênico.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: ter apresentado a cadeia comportamental descrita, durante toda semana, podendo ter deixado de dar descarga 1 ou 2 vezes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"87\",\"text\":\"Pedala com triciclo a distância de 1 metro e ½.\",\"material\":\"Triciclo.\",\"atividade\":\"Verificar se criança pedala com triciclo (usar pedais de forma a mover triciclo), uma distância de 1 metro e meio, em um terreno plano e sem inclinações.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"4 a 5 anos\",\"num\":\"86\",\"text\":\"Identifica o objeto que está colocado no meio, em primeiro e em último lugar.\",\"material\":\"Livro de 3 páginas ou brinquedos enfileirados.\",\"atividade\":\"Apresentar à criança 3 objetos enfileirados e solicitar que ela identifique o objeto que está colocado no meio, em primeiro e em último lugar, apontando ou nomeando.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"86\",\"text\":\"Penteia ou escova cabelos.\",\"material\":\"Pente ou escova de cabelos.\",\"atividade\":\"Verificar se criança consegue pegar o pente ou escova em posição correta, pentear seu próprio cabelo para frente e/ou para trás e/ou para os lados, por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"88\",\"text\":\"Balança em um balanço quando este está em movimento.\",\"material\":\"Balanço.\",\"atividade\":\"Verificar se criança balança em um balanço, quando este é colocado em movimento. Condição: ajustar o balanço à altura da criança de forma que ela possa tocar os pés no chão.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"87\",\"text\":\"Pendura roupas em cabides.\",\"material\":\"Roupas (calça, vestido, camisa, etc.) e cabides.\",\"atividade\":\"Cada tentativa equivale a colocar adequadamente uma calça ou vestido e uma camisa em um cabide.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"89\",\"text\":\"Sobe em um escorregador de 1,20m a 1,80m e escorrega.\",\"material\":\"Escorregador (de 1 metro e 20 cm - 1 metro e 80 cm).\",\"atividade\":\"Verificar se criança sobe em escorregador (1,2m-1,8m) e escorrega.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"86\",\"text\":\"Consegue indicar alguns, muitos e vários elementos.\",\"material\":\"Grupos de objetos com quantidades diferentes de elementos. Sugestões: brinquedos.\",\"atividade\":\"Mostrar à criança grupos de objetos com quantidades diferentes de elementos: alguns (dois ou três objetos) muitos (mais ou menos de dez objetos), vários (cinco a seis objetos) e pedir a ela que aponte o grupo onde tem: alguns, vários ou muitos objetos.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"88\",\"text\":\"Anda pela vizinhança sem constante supervisão.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a semana.\",\"atividade\":\"Condição: entrevista com o mediador. Cada tentativa diz respeito a andar pelo quarteirão de sua casa, sem a presença constante do adulto. Critério: ter feito isso pelo menos 3 vezes na última semana, dada a oportunidade.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"90\",\"text\":\"Dá cambalhotas para frente.\",\"material\":\"Cama ou tatame confortável.\",\"atividade\":\"Verificar se criança consegue dar cambalhotas para a frente, sem ajuda (apenas com modelo, se necessário).\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"87\",\"text\":\"Diz seu endereço.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se a criança diz seu endereço = dizer o nome da rua, o número da casa/apartamento, bairro e/ou cidade.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"87\",\"text\":\"Conta até 20 objetos e responde adequadamente à pergunta: \\\"Quantos ... você contou?\\\"\",\"material\":\"20 pedaços de esponja, 20 tampas de garrafa, 20 blocos de madeira, etc.\",\"atividade\":\"A criança deve contar até 20 objetos e responder adequadamente à pergunta: \\\"Quantos ... você contou?\\\".\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"89\",\"text\":\"Enfia cordões em sapatos.\",\"material\":\"Sapatos com cadarços/cordões.\",\"atividade\":\"Verificar se a criança consegue passar o cordão adequadamente por todos os orifícios do sapato, de forma que no final, o cordão esteja entrelaçado. Cada tentativa consiste em fazer isso para um dos sapatos.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"91\",\"text\":\"Sobe escadas alternando os pés.\",\"material\":\"Escadas.\",\"atividade\":\"Verificar se criança consegue subir escadas (pelo menos 4 degraus) alternando\\nos pés em cada degrau, segurando ou não no corrimão com uma das mãos.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"88\",\"text\":\"Diz o número de seu telefone.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se a criança é capaz de dizer o número de seu telefone (fixo ou móvel). Observação: anular esse item se a família não possuir celular ou telefone fixo.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"88\",\"text\":\"Nomeia 10 numerais.\",\"material\":\"Numerais de 1 a 10 escritos ou colados em cartões ou colados em blocos.\",\"atividade\":\"Apresentar à criança um cartão e perguntar \\\"Que número é este?\\\". Apresentar os cartões sem uma ordem numérica. A criança deve nomear os números, 20 segundos após cada pergunta. Critério: nomear adequadamente todos os numerais, de 1 a 10.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"4 a 5 anos\",\"num\":\"90\",\"text\":\"Amarra ou dá laços nos cordões dos sapatos.\",\"material\":\"Sapatos com cadarços/cordões.\",\"atividade\":\"Cada tentativa equivale a dar um nó ou um laço (embora frouxo) nos cordões de sapato.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"92\",\"text\":\"Marcha (anda de forma ritmada).\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança consegue marchar, dando 10 passos, alternando os pés de forma ritmada, sem tombar para os lados.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"89\",\"text\":\"Aponta para o conjunto que tem mais, menos ou poucos elementos.\",\"material\":\"Conjuntos de objetos pequenos como botões, blocos ou biscoitos.\",\"atividade\":\"Apresentar à criança, por exemplo, 4 grupos de objetos pequenos (sendo um conjunto de 10 elementos, outro de 8, 5 e 3 elementos). Em seguida, tendo como referência o grupo de 10 elementos pedir a ela que aponte o grupo que tenha mais, menos e poucos elementos.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"89\",\"text\":\"Identifica qual a sua esquerda e qual a sua direita\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"A criança deve identificar qual a sua esquerda e qual a sua direita, apontando, nomeando ou levantando o seu braço ou perna direita e esquerda.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"93\",\"text\":\"Apara a bola com ambas as mãos.\",\"material\":\"Bola.\",\"atividade\":\"O adulto deve situar-se na frente da criança numa distância de 1 m e jogar a bola em sua direção. Verificar se criança consegue apanhar bola com ambas as mãos, sem usar outra parte do corpo (queixo, ombros).\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"90\",\"text\":\"Conta piadas simples.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não contar piadas em suas verbalizações habituais, pedir a ela que conte uma piada ou uma história muito engraçada. Verificar se ela consegue contar piadas simples = contar propositadamente piadas ou fatos \\\"engraçados\\\" para provocar risos da audiência. Critério: contar no mínimo 2 piadas ou fatos engraçados.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"90\",\"text\":\"Diz as vogais em ordem.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"A criança deve dizer as vogais em ordem, por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"94\",\"text\":\"Desenha figuras seguindo contornos ou pontilhados.\",\"material\":\"Contornos ou pontilhados - pontilhados ou contornos de formas geométricas (círculo, quadrado, triângulo).\",\"atividade\":\"Verificar se criança desenha figuras seguindo contornos ou pontilhados de formas geométricas (círculo, quadrado, triângulo).\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"91\",\"text\":\"Relata experiências diárias.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Perguntar à criança \\\"O que você fez hoje?\\\". Se esta não relatar uma experiência diária, perguntar, por exemplo: \\\"Você foi à escola?\\\", \\\"O que fez lá?\\\", \\\"Você foi à padaria/supermercado? O que fez lá?\\\" “Você foi ao parque hoje?\\\" etc. Incentivar a criança a relatar onde foi e descrever o que fez nesse local. Critério: relatar pelo menos 2 experiências diárias diferentes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"91\",\"text\":\"Escreve seu nome com letras de forma\",\"material\":\"Lápis, papel.\",\"atividade\":\"O adulto deve pedir que a criança escreva seu nome com letras de forma e ela deve fazer isso.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"91\",\"text\":\"É responsável por uma tarefa semanal e a executa ao ser lembrado\",\"material\":\"Objetos como livros, vassouras, roupa de cama, brinquedos, etc.\",\"atividade\":\"Condição: entrevista com o mediador. A família precisa ter previamente estipulado a tarefa semanal. Verificar se a criança executa a tarefa semanal a ser definida pela mediadora (por exemplo: varrer a sala, colocar livros na estante, arrumar o quarto, guardar brinquedos etc.). Critério: ter executado a tarefa na última semana. A tarefa não deverá precisar ser refeita pelo mediador.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"3 a 4 anos\",\"num\":\"95\",\"text\":\"Recorta ao longo de uma linha reta 20 cm, afastando-se pouco da linha.\",\"material\":\"Papel e tesoura infantil.\",\"atividade\":\"Verificar se criança consegue recortar um pedaço de papel com uma tesoura infantil ao longo de uma linha reta de 20 cm, afastando-se não mais que 6 mm da linha.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"92\",\"text\":\"Descreve um local ou movimento: através ou entre, longe de, de / desde..., para, por cima de, até.\",\"material\":\"Se necessário, brinquedos como carros/caminhões, túneis, e outros que envolvem caminho/movimento.\",\"atividade\":\"Se a criança não descrever um local ou movimento: entre, longe de, de/desde, para, por cima de, até, etc. em suas verbalizações habituais, planejar situações de brinquedo, por exemplo com carros e caminhões, posto de gasolina, túneis, pontes etc., e deixar a criança dar a direção de para onde você deve mover o objeto. Exemplo: dirigir o carro em cima da ponte, o carro pelo túnel, o carro foi até o posto de gasolina etc.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"92\",\"text\":\"Nomeia 5 letras do alfabeto.\",\"material\":\"Letras do alfabeto (exemplo: cartão com letra \\\"O\\\", outro com letras \\\"T\\\", \\\"M\\\", \\\"B\\\", \\\"A\\\", etc.)\",\"atividade\":\"Apresentar os cartões com as letras à criança e perguntar \\\"Que letra é essa?\\\" ou \\\"O que está escrito aqui?\\\". A criança deve responder adequadamente em até 20 segundos após a pergunta.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"92\",\"text\":\"Seleciona roupas apropriadas ao clima e ocasião.\",\"material\":\"Roupas de frio, de calor, velhas e novas.\",\"atividade\":\"Condição: entrevista com o mediador. A criança deve selecionar roupas = selecionar e usar agasalhos em dias frios e roupas leves em dias quentes. Além disso selecionar e usar roupas \\\"veIhas\\\" para ficar em casa e roupas \\\"novas\\\" para sair. Critério: ter apresentado tal comportamento em pelo menos 6 dias da última semana.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"93\",\"text\":\"Responde à pergunta \\\"Porque\\\" com uma explicação.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Fazer perguntas à criança usando \\\"por que\\\" sobre suas atividades diárias. Exemplo: \\\"Por que a mamãe foi à padaria?\\\", \\\"Por que a gente precisa comer?\\\", \\\"Por que a gente precisa tomar banho?\\\" etc. Critério: A resposta da criança será considerada correta quando ela der uma explicação, identificando uma possível causa, e não quando responder \\\"porque sim/não\\\".\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"93\",\"text\":\"Ordena objetos em sequência de comprimento e largura.\",\"material\":\"Tiras de papel, macarrão e palha de milho.\",\"atividade\":\"A criança deve ordenar 10 objetos que aumentem de 1,5 cm de largura e comprimento em sequência do maior para o menos ou vice-versa.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"93\",\"text\":\"Pára no passeio, olha para ambos os lados, e atravessa a rua sem precisar ser lembrado.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a semana.\",\"atividade\":\"Condição: entrevista com o mediador. Critério: ter parado na calçada, olhado para ambos os lados e atravessar a rua sem precisar ser lembrado, todas as vezes em que foi dada a oportunidade, na última semana.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"94\",\"text\":\"Ordena e conta uma estória de 2 a 5 episódios na sequência correta.\",\"material\":\"Contos com ilustrações organizadas em sequência temporal.\",\"atividade\":\"Utilizar contos com ilustrações organizadas em sequência temporal de 2 a 5 episódios. Misturar os episódios e pedir à criança para ordenar e contar a história. Se necessário, dar indicações verbais: \\\"E depois, o que aconteceu?\\\" etc. Verificar se ela faz isso.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"94\",\"text\":\"Nomeia as letras maiúsculas do alfabeto.\",\"material\":\"Cartões com letras do alfabeto em maiúsculo.\",\"atividade\":\"Apresentar cada cartão à criança e perguntar \\\"Que letra é essa?\\\". Ela deve nomear todas as letras do alfabeto, escritas em maiúsculo e individualmente em cartões, 20 segundos após cada pergunta.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"94\",\"text\":\"Serve-se à mesa e passa aos demais a panela de comida.\",\"material\":\"Panela ou travessa com comida, colher e prato.\",\"atividade\":\"Condição: entrevista com o mediador.\\nVerificar se criança é capaz de receber a travessa, colocar a travessa a seu lado, sobre a mesa, e serve-se, pegando com a colher, porções de alimento e colocando em seu prato, até obter a quantidade desejada, colocar a colher sobre a travessa, passando-a para outra pessoa. Cada tentativa equivale a servir-se de uma travessa e passá-la para outra pessoa.\\nCritério: ter apresentado tal comportamento, pelo menos, 3 vezes em uma refeição na semana anterior.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"96\",\"text\":\"Fica em um só pé sem apoio por 4 a 8 segundos.\",\"material\":\"Cronômetro ou relógio para medir o tempo de resposta (4-8 segundos) da criança.\",\"atividade\":\"Verificar se criança consegue ficar em 1 só pé, sem apoio, por 4 a 8 segundos.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"95\",\"text\":\"Define palavras.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Pedir à criança que defina palavras tais como: bola, chapeu, casa, banana, cadeira, bicicleta, faca, carta, guarda-chuva, almofada etc, descrevendo o objeto e/ou identificando sua função. Critério: definir pelos menos 3 palavras diferentes.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"95\",\"text\":\"Coloca numerais de 1 a 10 na sequência correta.\",\"material\":\"Numerais de 1 a 10 escritos em cartões separados.\",\"atividade\":\"Apresentar os cartões misturados para a criança e pedir para ela ordená-los, colocando os numerais de 1 a 10 na sequência correta.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"95\",\"text\":\"Prepara sua própria caneca de café com leite.\",\"material\":\"Leite, chocolate em pó, xícara, colher.\",\"atividade\":\"Verificar se criança é capaz de despejar leite em uma xícara colocada sobre uma mesa, de forma a encher de leite pelo menos metade da xícara, colocar a leiteira na mesa, pegar o bule de café ou garrafa térmica e despejar um pouco de café sobre O leite, recolocar o bule ou a garrafa sobre a mesa, (se necessário colocar açúcar na xícara) e mexer com colher. Fazer isto a cada tentativa. Xícara de café com leite pode ser substituída por xícara de leite e chocolate em pó.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"97\",\"text\":\"Muda de direção ao correr.\",\"material\":\"Fita métrica para medir.\",\"atividade\":\"Verificar se criança muda de direção ao correr um percurso de 2 metros.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"96\",\"text\":\"Responde adequadamente a pergunta \\\"Qual o contrário de ...\\\".\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se a criança responde adequadamente à pergunta: \\\"Qual o contrário de...\\\". Exemplos de perguntas para serem propostas à criança: \\\"Qual o contrário de frio/quente?\\\", \\\"Qual o contrário de grande/pequeno?, gordo/magro?, feio/bonito?, dia/noite?, menino/menina?\\\".\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"96\",\"text\":\"Identifica a posição de objetos em 1º, 2º e 3º lugar.\",\"material\":\"Sequência de 3 ilustrações, objetos em fila.\",\"atividade\":\"Pedir para a criança identificar posição de objetos como 1º, 2º e 3º lugar.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"96\",\"text\":\"É responsável por uma tarefa diária em casa.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a semana.\",\"atividade\":\"Condição: entrevista com o mediador, que deverá ter previamente estabelecido uma tarefa. Resposta: tarefa diária a ser definida pelo mediador. Critério: ter realizado a tarefa, diariamente, na última semana.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"98\",\"text\":\"Anda sobre uma viga ou tábua, mantendo o equilíbrio.\",\"material\":\"Tábua ou viga de madeira. Se a viga for inexistente, pode desenhar com giz no chão uma linha de 1 metro de comprimento e 10 cm de largura (tábua e viga devem seguir as mesmas medidas).\",\"atividade\":\"A criança deverá andar sobre a tábua, viga ou sobre a linha, sem deixar o pé escapar e sem cair, segurando a mão de um adulto.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"97\",\"text\":\"Responde a pergunta \\\"O que acontece se...\\\".\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se a criança consegue responder perguntas \\\"o que acontece se ... (exemplo: \\\"se você deixar cair um ovo?\\\"). A criança deve responder dentificando adequadamente pelo menos 1 efeito consequente.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"97\",\"text\":\"Nomeia as letras minúsculas do alfabeto.\",\"material\":\"Cartões com letras do alfabeto em minúsculo.\",\"atividade\":\"Apresentar cada cartão à criança e perguntar \\\"Que letra é essa?\\\". Ela deve nomear todas as letras do alfabeto, escritas em minúsculo e individualmente em cartões, 20 segundos após cada pergunta.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"97\",\"text\":\"Ajusta a temperatura da água para o banho.\",\"material\":\"Chuveiro.\",\"atividade\":\"Verificar se criança é capaz de ajustar a temperatura significa virar a torneira de forma que a água do banho fique em uma temperatura agradável, sem ser excessivamente quente ou fria. Critério: ter ajustado a temperatura da água todas as vezes em que tomou banho na última semana.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"99\",\"text\":\"Pula para frente 10 vezes sem cair.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança é capaz de pular para frente, com ambos os pés, 10 vezes sem cair.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"98\",\"text\":\"Usa \\\"ontem\\\" e “amanhã’, corretamente”.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Se a criança não usa \\\"ontem\\\" e \\\"amanhã\\\" corretamente em suas verbalizações habituais fazer perguntas a ela do tipo: \\\"Quando você foi/vai para a escola/passear?\\\", \\\"Quando você tomou banho/jantou?\\\". Verificar se ela utilizou adequadamente.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"98\",\"text\":\"Emparelha letras maiúsculas com minúsculas.\",\"material\":\"23 cartões com letras maiúsculas e 23 com letras minúsculas.\",\"atividade\":\"Pedir para a criança emparelhar os cartões de letras maiúsculas com os da mesma letra em minúsculo. Ela deve emparelhar os correspondentes.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"98\",\"text\":\"Prepara seu próprio lanche.\",\"material\":\"Alimentos como pão, queijo, presunto, banana, maça.\",\"atividade\":\"Verificar se criança é capaz de pegar alimentos corretos do armário ou refrigerador e colocá-los no pão. Critério: na última semana, dada a oportunidade, ter preparado seu próprio lanche pelo menos 3 vezes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"100\",\"text\":\"Salta sobre uma corda suspensa a 5 cm do solo.\",\"material\":\"Corda.\",\"atividade\":\"Verificar se criança é capaz de saltar sobre uma corda, suspensa a 5 cm do solo, sem cair ou esbarrar na corda com os pés.\"},{\"area\":\"LINGUAGEM\",\"age_range\":\"5 a 6 anos\",\"num\":\"99\",\"text\":\"Pergunta o significado de perguntas novas ou conhecidas.\",\"material\":\"Se necessário, utilizar um conto com palavras desconhecidas pela criança.\",\"atividade\":\"Se a criança não faz perguntas sobre o significado de palavras novas ou desconhecidas em suas verbalizações habituais, ler para ela um conto (contendo algumas palavras-chaves desconhecidas pela criança) e observar se ela pergunta: \\\"O que é isto?\\\", \\\"Que quer dizer ...?\\\".\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"99\",\"text\":\"Aponta para numerais de 1 a 25.\",\"material\":\"Numerais de 1 a 25 escritos em cartões separados.\",\"atividade\":\"Apresentar cartões para a criança e fazer perguntas, por exemplo: \\\"Me mostre o número 18\\\" ou \\\"Aponte para o número 6\\\". A criança deve responder adequadamente, 20 segundos após cada pergunta.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"99\",\"text\":\"Anda sozinho até a distância de 2 quadras de casa.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a semana.\",\"atividade\":\"Verificar se criança é capaz de andar sozinho para a escola, parque ou mercearia a 2 quadras de casa. Critério: pelo menos 3 vezes na última semana.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"101\",\"text\":\"Pula de costas 6 vezes.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança é capaz de pular de costas 6 vezes sem cair, para trás, com ambos os pés.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"100\",\"text\":\"Copia um losango.\",\"material\":\"Folha de papel com um losango de 4 cm (usar como modelo). Folha de papel e algum material de escrita, como lápis ou caneta.\",\"atividade\":\"Apresentar à criança uma folha de papel com um losango de 4 cm, previamente traçado e pedir para ela copiar. Critério: o losango deve ser formado por linhas que se interceptam, sendo seus ângulos nítidos. A dimensão importante a ser avaliada é se o \\\"quadrado\\\" repousa sobre uma das pontas.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"100\",\"text\":\"Corta alimentos tenros com faca.\",\"material\":\"Alimentos tenros como salsicha, banana, batata cozida. Faca.\",\"atividade\":\"Verificar se criança é capaz de cortar alimentos tenros com faca (por exemplo, salsicha, banana, batata cozida). Cada tentativa consiste em cortar com a faca todo o alimento em pedaços pequenos. Critério: cortar com a faca pelo menos 3 alimentos tenros.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"102\",\"text\":\"Rebate e apanha uma bola grande.\",\"material\":\"Bola grande.\",\"atividade\":\"erificar se criança é capaz de rebater e apanhar uma bola grande, rebatendo-a 2 vezes em seguida no chão e apanhando-a com as mãos.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"101\",\"text\":\"Completa um labirinto simples.\",\"material\":\"Folha de papel e algum material de escrita, como lápis ou caneta.\",\"atividade\":\"Pedir para a criança completar um labirinto simples, com linhas paralelas em uma distância de 1,5 cm entre ambas as linhas.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"101\",\"text\":\"Encontra o banheiro em local público, corretamente.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança durante a semana.\",\"atividade\":\"Verificar se criança é capaz de encontrar o banheiro correto em local público, ou seja, entrar por conta própria no banheiro masculino ou feminino, conforme seu sexo. Critério: apresentar tal comportamento todas as vezes, dada oportunidade.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"103\",\"text\":\"Une 2 a 3 pedaços de massa de modelar.\",\"material\":\"Massinha de modelar\",\"atividade\":\"Verificar se criança é capaz de unir 2-3 pedaços de massa de modelar.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"102\",\"text\":\"Diz os dias da semana na ordem.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Perguntar à criança quais os dias da semana em ordem. Se ela não responder em ordem, dar pistas como \\\"Que dia vem depois da terça-feira?\\\".\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"102\",\"text\":\"Abre a embalagem de leite.\",\"material\":\"Leite.\",\"atividade\":\"A criança deve abrir a caixa de leite, ou seja, cortar com a tesoura infantil a embalagem aluminizada do leite (ou saco plástico), fazendo um pequeno orificio por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"104\",\"text\":\"Recorta em torno de linhas curvas.\",\"material\":\"Linhas turvas em um papel, com 20 cm cada.\",\"atividade\":\"Verificar se criança é capaz de recortar em torno de linhas curvas, afastando-se não mais que 6 mm da linha, por tentativa.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"103\",\"text\":\"Soma e subtrai combinações de até 3 elementos.\",\"material\":\"Elementos = blocos, doces, passas, brinquedos, etc.\",\"atividade\":\"Dispor 3 objetos sobre uma superfície e retirando 2, 1 ou 3 objetos, perguntar à criança \\\"Quantos (objetos) sobraram?\\\". Em relação à soma, adicionar 1 ou 2 objetos e perguntar \\\"Quantos (objetos) têm aqui?\\\". Variar o número de objetos a serem somados ou subtraídos. A criança deve responder adequadamente, somando e subtraindo combinações de até 3 elementos, 20 segundos após cada pergunta. Critério: responder a pelo menos 2 perguntas (uma de adição e uma de subtração).\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"103\",\"text\":\"Apanha uma bandeja com comida, levando-a e pondo sobre a mesa.\",\"material\":\"Bandeja com comida.\",\"atividade\":\"Verificar se criança é capaz de apanhar uma bandeja com comida, levando-a e colocando-a sobre a mesa. Critério: ter apresentado tal comportamento, pelo menos 3 vezes na semana anterior, dada a oportunidade.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"105\",\"text\":\"Encaixa objetos de rosca.\",\"material\":\"Objetos de sistema de rosca, como tampas de garrafa pet, etc.\",\"atividade\":\"Verificar se criança é capaz de encaixar objetos que se prendam por sistema de rosca.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"104\",\"text\":\"Diz o mês e o dia de seu aniversário.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Perguntar à criança qual o dia e o mês de seu aniversário.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"104\",\"text\":\"Amarra os cordões em casacos com capuz.\",\"material\":\"Casacos com capuz e cadarços/cordões.\",\"atividade\":\"Cada tentativa equivale a dar um nó em cordões de agasalho com capuz.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"106\",\"text\":\"Desce escadas alternando os pés.\",\"material\":\"Escadas.\",\"atividade\":\"Verificar se criança desce escadas alternando os pés (mínimo de 4 degraus).\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"105\",\"text\":\"Lê 10 palavras impressas.\",\"material\":\"Palavras impressas conhecidas da criança, como: seu nome, vaca, ovo, uva, eu, vovó, oi, etc.\",\"atividade\":\"Pedir que a criança leia 10 palavras impressas que são familiares à ela.\"},{\"area\":\"AUTOCUIDADOS\",\"age_range\":\"5 a 6 anos\",\"num\":\"105\",\"text\":\"Aperta o cinto de segurança do automóvel.\",\"material\":\"Carro, caminhão, cinto de segurança.\",\"atividade\":\"Condição: entrevista com o mediador. Anular o item se a família nảo possuir carro. Verificar se a criança consegue apertar o cinto de segurança do carro.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"107\",\"text\":\"Pedala um triciclo fazendo curvas.\",\"material\":\"Triciclo.\",\"atividade\":\"Verificar se criança pedala um triciclo, percorrendo uma distância de 3 m em um terreno plano que contém obstáculos que envolvem fazer curvas.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"106\",\"text\":\"Prediz o que vai ocorrer.\",\"material\":\"Ilustrações de atividades de vida diária (banho, escovar os dentes, refeições, etc.).\",\"atividade\":\"Apresentar à criança ilustrações contendo atividades de vida diária e perguntar \\\"O que a criança vai fazer?\\\" ou \\\"O que vai acontecer?\\\". A criança deve responder em até 20 segundos após cada pergunta.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"108\",\"text\":\"Salta em um só pé 5 vezes consecutivas.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança salta em um só pé, 5 vezes consecutivas.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"107\",\"text\":\"Aponta para objetos inteiros e partidos ao meio.\",\"material\":\"Frutas, verduras, papeis, etc. Inteiros e/ou cortados ao meio.\",\"atividade\":\"Pedir para criança apontar para objetos inteiros e/ou partidos ao meio.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"109\",\"text\":\"Recorta um círculo em 5 cm.\",\"material\":\"Papel e tesoura infantil.\",\"atividade\":\"Verificar se criança consegue recortar um círculo = recortar um círculo de 5 cm afastando-se não mais que 6 mm do contorno do círculo.\"},{\"area\":\"COGNIÇÃO\",\"age_range\":\"5 a 6 anos\",\"num\":\"108\",\"text\":\"Conta de memória de 1 a 100 (pedir que pare no 40, e continue no 80, caso não erre até o 40).\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Pedir para a criança contar até 100. Se ela não apresentar erros até a 3ª dezena, interrompê-la e pedir para ela continuar a partir do número 80.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"110\",\"text\":\"Desenha figuras simples facilmente identificáveis (por ex: casa).\",\"material\":\"Papel e lápis.\",\"atividade\":\"Verificar se criança desenha figuras simples, facilmente identificáveis como casa, homem, árvore. Se necessário, dar modelo, desenhando tais figuras no papel antes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"4 a 5 anos\",\"num\":\"111\",\"text\":\"Recorta e cola formas simples.\",\"material\":\"Papel (com desenho de formas geométricas), cola e tesoura infantil.\",\"atividade\":\"Verificar se criança recorta e cola formas simples de figuras geométricas (triângulo, quadrado, círculo) desenhadas em folha de papel.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"112\",\"text\":\"Escreve letras de imprensa maiúsculas, isoladas e grandes em qualquer lugar do papel.\",\"material\":\"Papel e lápis ou caneta.\",\"atividade\":\"Verificar se criança escreve letras de imprensa maiúsculas, isoladas e grandes em qualquer lugar do papel. Quaisquer letras, desde que a criança seja capaz de escrever pelo menos 2 letras diferentes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"113\",\"text\":\"Anda sobre uma tábua para trás, para frente e para os lados, mantendo o equilíbrio.\",\"material\":\"Tábua de 1 m de comprimento, 10 cm de largura e 5 cm de espessura, distante do chão em uma altura de 10 cm.\",\"atividade\":\"Verificar se criança anda sobre uma tábua para trás, para frente e para os lados, mantendo o equilíbrio. Ela deve caminhar sobre a tábua, dando 2 passos para frente, 2 passos para trás; dar meia volta e, em seguida, dar 2 passos para a direita e 2 passos para a esquerda.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"114\",\"text\":\"Caminha saltitando.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança caminha saltitando, ou seja, dando impulso com o pé direito, dando um pequeno pulo (uma distância de 30 cm) e imediatamente parando (mantendo o pé esquerdo elevado); dando impulso com o pé esquerdo, dando um pequeno pulo (de 30 cm) e imediatamente parando (mantendo o pé direito elevado). Dar 10 passos saltitando de tal modo.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"115\",\"text\":\"Balança em um balanço iniciando e mantendo o movimento.\",\"material\":\"Balanço.\",\"atividade\":\"Verificar se criança balança em um balanço, iniciando e mantendo o movimento.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"116\",\"text\":\"Estica os dedos tocando o polegar em cada um deles.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"Verificar se criança estica os dedos da mão, tocando o polegar em cada um deles.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"117\",\"text\":\"Copia letras maiúsculas.\",\"material\":\"Papel e lápis ou caneta.\",\"atividade\":\"Verificar se criança copia, pelo menos, 2 letras minúsculas diferentes por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"118\",\"text\":\"Sobe em escadas de mão ou de escorregador de 3 m.\",\"material\":\"Escadas ou escorregador (de 3 metros).\",\"atividade\":\"Verificar se criança sobe em escadas de mão ou na escada de um escorregador de 3 metros.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"119\",\"text\":\"Bate em um prego com martelo.\",\"material\":\"Prego grande e madeira preferivelmente não muito dura.\",\"atividade\":\"Condição: inserir previamente o prego na madeira. Criança deve bater em um prego com martelo, de forma que este seja introduzido na madeira uma distância de 0,5 cm.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"120\",\"text\":\"Rebate a bola à medida que anda com direção.\",\"material\":\"Bola.\",\"atividade\":\"Dar modelo para a criança; este exercício é facilitado se a criança prosseguir rebatendo a bola em círculo, isto é, dando meia volta com o corpo. A criança deve dar 10 passos rebatendo uma bola no chão, com direção.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"121\",\"text\":\"Consegue colorir sem sair da margem em 95% das vezes.\",\"material\":\"Papel e lápis de cor.\",\"atividade\":\"Verificar se a criança consegue colorir figuras geométricas (triângulo, círculo, quadrado, retângulo, losango) de 5 cm cada (previamente desenhadas em um papel) sem sair da margem 95% das vezes. Critério: em 10 figuras, sair da margem apenas em 1 das figuras.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"122\",\"text\":\"Recorta figuras sem sair mais que 6 mm da margem.\",\"material\":\"Revistas com figuras.\",\"atividade\":\"O adulto deve destacar a página da revista para facilitar o trabalho da criança. Verificar se a criança consegue recortar figuras de revistas (razoavelmente grande e contendo no geral linhas retas) sem sair mais do que 6 mm da margem.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"123\",\"text\":\"Usa apontador de lápis.\",\"material\":\"Lápis sem ponta e apontador.\",\"atividade\":\"Verificar se criança consegue apontar um lápis usando apontador, de forma a poder usá-lo para escrever.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"124\",\"text\":\"Copia desenhos complexos (escola, navio).\",\"material\":\"Figuras previamente desenhadas (como escola, navio, árvore, etc.).\",\"atividade\":\"Verificar se criança copia desenhos complexos. Condição: dar modelo de figuras (escola, navio), previamente desenhadas. Critério: ter copiado adequadamente, pelo menos 2 desenhos diferentes.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"125\",\"text\":\"Rasga figuras simples de um papel.\",\"material\":\"Desenho de uma bola, coração, folha, impressos no papel.\",\"atividade\":\"Criança deve rasgar o papel em torno de cada figura, de forma a destacar a figura sem rasgá-la.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"126\",\"text\":\"Dobra um papel quadrado 2x em diagonal por imitação.\",\"material\":\"Papel quadrado.\",\"atividade\":\"Adulto deve dobrar uma folha de papel quadrada 2 vezes em diagonal, dando modelo para a criança. Verificar se criança consegue imitar o adulto.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"127\",\"text\":\"Apanha uma bola leve com uma só mão.\",\"material\":\"Bola leve (como bola de meia).\",\"atividade\":\"Adulto deve atirar suavemente a bola para criança situada a 1 metro e meio de distância. Criança deve apanhar uma bola leve (de meia, por exemplo) com uma só mão.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"128\",\"text\":\"Pula corda sozinho.\",\"material\":\"Corda.\",\"atividade\":\"Criança deve pular corda sozinha, segurando a corda com ambas as mãos e iniciando o movimento, dando pelo menos 2 pulos consecutivos por tentativa, sem cair ou enroscar o pé na corda.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"129\",\"text\":\"Golpeia uma bola com um bastão ou pedaço de pau.\",\"material\":\"Bola. Bastão ou pedaço de pau.\",\"atividade\":\"Adulto deve atirar uma bola leve para a criança golpeá-la com um bastão ou pedaço de pau, colocando-se para isto a meio metro de distância da criança.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"130\",\"text\":\"Apanha um objeto no chão enquanto corre.\",\"material\":\"Objetos de leve preensão como brinquedo, pelúcia, bola, etc. com no mínimo 15 cm de altura.\",\"atividade\":\"A criança deve ser capaz de correr, se abaixar para pegar um objeto do chão e continuar correndo sem perder o ritmo.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"131\",\"text\":\"Patina uma distância de 3 m, ou usa skate.\",\"material\":\"Patins ou skate.\",\"atividade\":\"A criança deve patinar uma distância de 3 metros ou usar um skate.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"132\",\"text\":\"Anda de bicicleta.\",\"material\":\"Bicicleta.\",\"atividade\":\"A criança deve pedalar uma bicicleta por uma distância de 3 metros.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"133\",\"text\":\"Escorrega descendo um monte de areia ou terra.\",\"material\":\"Monte de areia de 2 metros.\",\"atividade\":\"Verificar se criança desliza descendo um monte de areia ou terra, de 2 metros.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"134\",\"text\":\"Anda ou brinca em piscina tendo água até a cintura.\",\"material\":\"Piscina ou equivalente (lago raso, tanque).\",\"atividade\":\"A criança deve brincar ou se movimentar em uma piscina tendo água até a cintura, dando 10 passos dentro d'água.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"135\",\"text\":\"Conduz um patinete dando impulso com um só pé.\",\"material\":\"Patinete ou carrinho de rolemã.\",\"atividade\":\"A criança deve conduzir um patinete ou carrinho de rolemã, dando impulso com um só pé e percorrendo um trajeto de 3 metros, utilizando qualquer tipo de carrinho que possa ser movido através de impulsos com o pé.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"136\",\"text\":\"Salta e gira em um só pé.\",\"material\":\"Se necessário, fazer uso de diário para acompanhar a resposta da criança.\",\"atividade\":\"A criança deve saltar e girar em um só pé, dando meia volta, por tentativa.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"137\",\"text\":\"Escreve seu nome com letras de forma em caderno pautado.\",\"material\":\"Caderno pautado e lápis ou caneta.\",\"atividade\":\"A criança deve escrever seu nome com letra de forma em um caderno pautado, sem ajuda ou modelo.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"138\",\"text\":\"Salta de uma altura de 30 cm. e cai na ponta dos pés.\",\"material\":\"Fita métrica para medir.\",\"atividade\":\"A criança deve saltar de uma altura de 30 cm e \\\"aterrissar\\\" na planta dos pés sem cair.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"139\",\"text\":\"Pára em um só pé sem apoio com olhos fechados por 10 segundos.\",\"material\":\"Cronômetro ou relógio para medir o tempo de resposta (10 segundos) da criança.\",\"atividade\":\"Verificar se a criança consegue ficar em pé em 1 só pé, sem apoio, com os olhos fechados, por 10 segundos.\"},{\"area\":\"DESENV MOTOR\",\"age_range\":\"5 a 6 anos\",\"num\":\"140\",\"text\":\"Dependura-se por 10 segundos em uma barra horizontal.\",\"material\":\"Barra horizontal.\",\"atividade\":\"Verificar se a criança consegue pendurar-se por 10 segundos em uma barra horizontal.\"}]");
var ANSWERS = [
	"Sim",
	"Não",
	"Às vezes",
	"NA"
];
var AREAS = [
	"SOCIALIZAÇÃO",
	"LINGUAGEM",
	"COGNIÇÃO",
	"AUTOCUIDADOS",
	"DESENV MOTOR"
];
var AGE_RANGES = [
	"0 a 1 anos",
	"1 a 2 anos",
	"2 a 3 anos",
	"3 a 4 anos",
	"4 a 5 anos",
	"5 a 6 anos"
];
var ITEMS = portage_default;
function itemKey(i) {
	return `${i.area}::${i.age_range}::${i.num}`;
}
function scoreOf(a) {
	if (a === "Sim") return 1;
	if (a === "Às vezes") return .5;
	if (a === "Não") return 0;
	return null;
}
function computeStats(answers) {
	const map = /* @__PURE__ */ new Map();
	for (const it of ITEMS) {
		const key = `${it.area}::${it.age_range}`;
		if (!map.has(key)) map.set(key, {
			area: it.area,
			age: it.age_range,
			answered: 0,
			total: 0,
			points: 0,
			percent: 0
		});
		const s = map.get(key);
		s.total += 1;
		const score = scoreOf(answers[itemKey(it)]);
		if (score !== null) {
			s.answered += 1;
			s.points += score;
		}
	}
	for (const s of map.values()) s.percent = s.answered ? Math.round(s.points / s.answered * 100) : 0;
	return Array.from(map.values());
}
function priorityObjectives(answers) {
	return ITEMS.filter((i) => answers[itemKey(i)] === "Às vezes");
}
function otherObjectives(answers) {
	return ITEMS.filter((i) => answers[itemKey(i)] === "Não");
}
var PDF_BRAND_STRIP_DATA_URL = `data:image/png;base64,
iVBORw0KGgoAAAANSUhEUgAAAgAAAABQCAMAAABYtz0WAAAAYFBMVEX///////79/////v7+/v/+
/v7+/f2+Pr09PTw7+/r7O3m5eXg3tza2Nbaz8fevZPOz9HExMbGvLW0uL7Tr5Lpr03WoHTfmFqtr7Sqop2Uo7aOl6Pthi7zgR71fxrtfh7fhz2ujHWDg4NnhrDwWiLQaDvtSyjuPS1xcXFkZGRaW1pWVlY6ba0TWK0BVbcAVLcBVLUTU6IBU7YAU7cAU7Q9T2YCUbUAUrcAUrQATrQiR+kNAAAltklEQVR42u1diXbiuBL1gp61WN7AThPiw///5atbJck2kDQhSc/MaTQ9CXglrquqW5vIsud4jud4jud4jud4jud4jud4jud4Z+R5/nwIf+8oWfq5ej6Jv1T+WWFoZNkTAX+l9q8y47pD19U2Kz+EgNJard99Gi90gTD+BVArFcZT/jRs3R3Gdty3TpM2+Nq495H+049eVeFF9bdiQFUylHHt4bCvTb3ft95kVdx+Ayjeu/U7+7k7Fpl1XoYz2T9rcAjn1mHY7MuY/4+a/TTq8XA4dDYnBBz2vb11CA+d+dfXyaoyvOtf+2sZaseyvQ25rDm+yjj23pt/0uyR1uvHF/qvJRj/lTrAuLqmf3Vta5L/WBdVZjvSBG0dxtX01llDkmvSuxsAUJmdju590BEAjtMR/+hFb/U/R3ts//JLxktv/0Lxa1uTzefRkgbY1zrPysrvCQEyCAmXGp4B8EryLS4BkMgUAeD46tWVuZfdDIBeG62t66fX1/TkL8hYfLslad/I2OhjdlH+NDr7txkBmuztvmu7jgROkm72rahjNgK8raN9e1/cAMDrYNQWAGohdSRaAoCmma0rvAPZV4lqCQCwodTG9oQAg7OitOUmQcx0fNwQ/Icguu+Y/7npf63GS1P8i6Jgf8I1qTJHM99oxxjo6q7OKqaFuj50IzmErTVuf2jthgcAAFDdnsUQAaBgTZhLsagAgAtrqyzvjgAg75H/QDNBm2hcAGQsy3aJXYbjw3Xl3szZ1Lc4D/Tnv6wB8Gt02b8FAer7cP4RAyRBY9ZXxpAHSKagcyEM6LpxbJ01unLkGdqsugRAw2IrVxrA+B5mvSERat/0JOKmMabxmWka/HSymzifEg2gBefaH18bgMY3RAmIFeIA23jbyOWMG2jz0Fi+teOtvdff8HByXf/ajva3KkD9qchFZa01y2T4IA7zFQ/AtsT3DT/LgsAwjrUtiBe4ut0fQAfA5skaeKMuAeBIbBM2BwAoA2LHpI7EPgnLP1pH/5OOp0P9FHZ7o1cAwJjIp8iAg3A+/XX+9TjgLVka2U52oqJZ74gyhJt8y59/BYDy7tn5wyGZZpqGwd+8PVvk3e471IwbBQCKfDoEAX3d1l5o4eiKkp44A4AUg9oCYHKmEU9AAMAynRoLOb82FWuAgTQAAWA4TlPvSHLHnmYzm44tACookxKA8mRx8AYAINB4fkeH8mVxnmOnQW6iv+PPvwSA/lgDVMbCvS1+XP/bYT6fz/PJXaNNkXIgk1h9y30g3dawBbeIAvX1fuzB+8gfIGWACe7gE7q1DRAAQBj0UwEAA9l3NgkZv6D5zBygqnAQBJnrJkxaVhxbAJSkIrwh0bKdd+CEHGnA4Ti/x2Y+oxpI8Gve8NU//+VzADDNMJ1Og/9polCYYX57e5vf5uGGESArSB8CtvSLQMzLAICSJGVa5vxEBR34QNfWxACzqgwAKK8AoHeQpd0FAAyYoUTripJcBF8xAEiV84w3rLrJYCD474904AYABV3Im+HosRsnEoDIBDQl2VuBk7zoMzO8DlbLVV7/OADo+NNMgqF5Wf2wAnCnt7cz/pvMBQCK3E3zmT7EPH01cKUIaET/961lx69DEgjuX21y4oTkF4y1EQ5wgCNYXgIgMz2MgJgAsuN9Jb6ggc5eA8By7DBGjliS1wDInEQEjeczPH6AWfYEnByXxV3cJOqAzYb4jn/QBLBcIJZ5MD/KA+hGMwDwNp9PVl3q/2l+I+PwNjdfQ2FZktBpeJrp+N3WjsgZYoAdyD29kDCgDmFBu1QJBADwtIbahwYgsTYhGEDTlLYuAJgiAMKY6PAtCWwQNKJjPe1FYGgBAPkLr0OlIgDIAkzhKkfc5GtSoCfQfw4A/oSp9zZPPw0ALwAgDVDtLnaZ6Qx6cJ6bL1oAcv4R7ek4EjSCCtK80qQCDh2p/hpegG1HAgfHhPYd0kNbDaDYoDsGAAkkAaDHhL4CwGoMGYI/CQCa5ApnEZ4DEcYIABMAMJXZCgDLeAwAkuAK6szU73gB6lYabEdywaP/AwBwJ7oLyZ84QHFJD09nxsbJf+kzFKTzDwj17ckGOFL9JGlkb2DxD0QLPQGgkHcHCQqyh7gBAIvnddAAAHx5lQBwSwO8TvBrhoF+NdduIJwKOmJw1h0vAZCtAXAc+Dr48YgNzNcJLuKoW/m/1LyjLG+nwUwD6/v24yYAdzoBaqervxFaCLbhiwAg5dfCtI+k/h20QMdQQFaIA8C1RxygKE14W4Mdco54CwDFRuDSBECeN0yAkUGe1MYLUBUd0xhWJoas0EcA4KixDGsfSiFpznsB6tUNAHAkcFehMAJH2WwdGIRxAzenZw/ze6uK5LeVJXeWnuBWJxp9tT2TH8jpTT5EAsAD9SykSEbS6m1tCnYEunaUqc4e4GFskRxAXpBwsgdLNA6BwtGG4G8AgBiBgah5lhMpsxzQ10QCB3sDAC5GOHqfQsHkFwQLQLJlL1J9BAB/THkn37sHAGDq8YXGyJwGqZAtC+w0z3nygnDUS1eblfuLDOcszMynQNzuKkCTFTt5Q0NtXu2CBi1CmLdIh6QLFGGb0og4mCqk3HcqhQCzAMLkBGzuWlxd890Hsd/X1ui8KgkAo2N3ANUAPNfJBQQAFKlCP7YtkcJcG+O6fW02GoDunrPlHjLNhp8kWmTsoWUhGRQBgN8KWSEOI4sGiF4tAKPBHAEHTjW/BwDil7gaHcaOw2cRQBrt5ReL9tcLip5UWWxJACk9hbK4dFS90vWazS+Y2YlUAyJC1lYr2RQcvcW2gidkvuScYvwQesualPD6oAIbe/JV5JHPpFMLFQEg1kFxzJjjQjtc9b6ibuSASOopHQSgE/2jyU/GgLR/GzVA4UbkAnP+c2wXVMAKACToQQBANmDAFTVHBxgAjQRyGKpwGT1OcezYAwCWHqD1zcR0jhMCOB2AehcAQAfnjt3xkUBQkj9rgUZfZoNGxLuCkggIaEySwwoAlW3AQqahTxGBHTmwzHBoWw5vtukbxGrwil560rXxpMaJv9v0fd+symGQQcFZjTO+H3r65+3/+NJWLj0N3mbTWQDQiH+Au/In8bBcHpdsXH4PAPYt/Osqd+Tu46+oSf+TuOuiJs1Hs70jFxCR4q43OSQBB6G7AgAbAQCg5FBwgxDwBNEgntM3OgBAXMaencBjs+OCEH4aEDfiiaWV/WQJjgjzupsAUIDbIE5g81kilpM6W+SP6W3L3PYbC0BPpt0cNC4xUM3cnAHQTCdxxeZTYwP3dcNp5vDtPDWGTPgskVygBq964wY56Xya6KSC7Akfsvwd2MJXaBwdif94J1lput0b3+80uAQA0ga7yseL4kKWPwIdlP+eAnQc8UFFpOssk552HDv6Udu6rTOa+XXb1iMCgx09AyV1YtEE+EUDZHnI7Ws/cAaI5In7wxlEMuh47EWSbgq7G0kcvHJWhzDQS8SnCft7QMW41ykCYFjcQK1cH9JMDxSSFe3LdqDYaaUCXmpwo8tjdLkKz7AHRjIWNSxgEE3sptW2YWCoEFnIOKjH21YHkHenqyGgyQd30/BJ9O9k5RxcvALugszfAILpFADgcwWXYH47p7tGitL8HgBM7/deVbnpe+vrltV/C2D03aFrurHr2A50znFIWJEygNWIaO9ThIo+xSCEtGygi2TK0C2g4YztA5Olx+gGFrciX9v1MtxFoB2+XWZx3tAE3AzNcheAzg9yl8/7QLrbypZ1gO0WBWCu5f/SJUesIC8wSEGeuPycyDveFY7nM0J0HKadg0xcBAB7bjQ75yBjV2SD+POBzalgYEh+g/HL+Uw9gTnoFkQh5+QEID4+rz7K+q73eAEc8dE1uYLjPoQEHMrCuRCsNnXLiYFCuB+7jelhEFtb5waMjrkyo5dQGkf2M61X6Xct21CIQKOqtlnttHd9noov4i3lIo/Ubpm1co8kT9epJrBBgdjL5SEu1WYgQyfy50xNmHmkAnZFBWqWgBEnLMk5q3yYsm9JVoAIaWnJ95zP4s/tNB04B4qZAGCKwg7pcm/nBX506R3c0nNUAOmuuMDuDhtwCIWf7V48QC7/Yi+Qc4FkGljnoyCES8W5Yvw/XTl9BYAXEXqkgNZc2giMSAJkKkYh8HwPdDzXu8AOoAHEjgcAWKAmqe+wC/8QQBXbIA49wiczg2qeTIw3nCeijk04TE6PMIMTkHsOCgI2c/g8fMBdcUpdi9c/WvIChP61OgT+BBpj3SItIPUAjJK9S9Nb3S6Q2EYklLo4crU7RwlCiripbU3p5ryrFw/38VwDgBDgY0bopSaSeAMAPgEgKnOiWRNZ+XkBQMZTERmaE5mnaT6HiCFp96il3/gksuA8zaE3RHwkO5CinSYMsfgIDzYBIC/McJ4lA3WCJxA+AgcjzSQGZfV5JH9wBwCQ/u9aV+/Huh5bmtl+3HdWt4c0EBcca3IPXQgZ78EF1PeWJH0AUL3S/t91zWsAvGDeixHoyef59fJyeci4mIDoBMwnb6oqTnoCADGAM2dvyPxWVbXIHAA4RXXukV5oAmmbETxlZQA+rznKKPxhWEAzE/8l1M1BZ/Clo94hemhOyQqZcFchFdXvAZAT5QLx7zq4g7oydYdQcNIAh652pBZakxUIFbN9aOuPiffDRazKWGuKnzcBxQ0NTxNf245mfm+JDdwYtcmzCwCA2xcksQSAbFjCs/R3VM2JFfMZ09SdwiwdKpzlT5EEVGY6y9SGR1/F407kQy1OQLbQAST/CqgaYZOEGh8BiUqbImUQcafflovlO8+BP4c2MJMHStAJG2QAWEteATLFHTmH+xG7Ym2o lGx+mwog/3wY3Dp+iRs0Gnf5ThVQZu6mCnA74wncpetebu2NcYBd5lMgcKdBCWNQIM+TypZoeEjYrZ0AvC4ytaOzxFYPVRXcAHq5YwUQlcYaAIs1MP8rSFP0YdfsmTSwbjgh7qILNy++4x0KAFZ99JrYHU1zy7q/NfD19pEEkEbgNGDX9K3nqgAnoWkpCtXXlUoPNnnFaOGq4oTjQCEa+J05tpdft1RA/j+9Q1T4hvwTBFMqiOe1UlnQxmyzV8EZjuhEpDjM4HPABiuhTFxJAoBJsBnMTpK8CP5AHay8QB+dyEFCcCtdY1PKWCon3JzuuruDAkDUqAGwbW9Mz1IfnW0jAQArjOmh0ZFz56V6sMwuQsHLNfvXR4qUYlnJtuz4ZwCQFc34cu0KimOa1dfYQE1UvkoFhXldrSghnnekAyfPekwJn0M5DzH1WZw7YWZFlQxHAIDMYLYabxI71Ak0cAjjXXwAQKAXyLdG1sgtWgEAZz7rt/a01LEaFLFPnvhcG4I6MCZ8XiNFTG5h72xHZjBHC9HhIhuIEnkVe/xV1WOjDhwxsUTuCdJKVUqcf3WxX6n+OC1hfVk4QADgpp6r/9VmIQH1hWUFck56ieP/wv/g/ZXRQOD9S9xO4m9X/a2pEkPcbJ1EQ5KNrj5i2pz3OIk1pgnB3A7e/mQCikL4Z8iiGwAJRmGyOQ8BJ75Tk4xLAgAr/kHuGiwAoKW8uJHnk7knDNByYB9pgRo2ntBAlK8lV5Bt/ujdSHConSUb0YqGISOwF4W4zgauPDTWABt/LbvlLCauGMm155aPTSeMYgBcun8rh/Hx2vwCFa9d9PfGsYtKntMAq+1db4sbpTizPGCd9DRxwJCih1RCLj/ZCskgI05bxaKycwDATqR+hkpp8FJmr16cAALNcE4w2zEAzgEARCFiZYhMSzgYiAWep+oeAHAfaBnyQmFVADQJWrSH1R2XhPKTceQL5vJ8xmADIgCsd2BrDQvQoXK/91YLhZNMGD0M76vSeY9j0SHEmTAnJ6lAHeTg9TvRAEwClZbL4UTuP+MjmkcbecuS9BD6oOoW/1BinIqE0KjoW96OnihdlvkWAG8SqRMANNFVy7JkzJGgk5AOpInpTDP+LN59WSwAICn2mYYbgFk7++AQzIAMko6Lrx8BMFRAI1uQUBCIc9ifmMIETYUC1R1213Z7yLcsK2T8URlcSvEPqsHrEUHgER2BFakKACCnZ6EJIptsIP2UpM5E8gjleqAVjbxGjxcRvMn00+vkj0fZfGwAFZzEyWMb0kKSWzDxXcMmQBJCbpL0D0MmJoPQKfbVqKTmFHuRnIQCSXfzjuNRlMHSY14W2a7qrwHARU6K/XOezkTHOReIvJ7PMYN3DftqeE/SBAAgdy8+4Jm1+SrrTPjvtwAQqdNpXgCQCgO4ZF1qBYd7qoVNPaIwqsjKgjhA3RGvYQCgIoTc/q6TUIBGlUBdVTkeTl1LD8kKAEjnDRNys1mPX9Pkpadj4K2OjXn/il4+yA2beV2AYRhCVS/nhWkrmw/d8zHYl0ggis1wPPSLzVFxPMm7L5TEKWTOaaKTnoOdCyJ3tKGVEulby2RJUH8Wh34XvUCE9PI4Tft8yeqcoxeY+Bzva0SA5wFMLTiSsw9JBpalXjsRyb8IALABAKcVAFgD6JXvWN6jAWoO8BIGLP1oOzIHHO3nRnFEgEapD+IcMKoO6rpLbsACABJbUcCNA1sbaCNpCmns0JXnyjAXZqvHvDYgQUjlZrtQEyRlxTSd6J0pHNcGZZobAAMA3AB4QcPhN2rCDLLC/PvRwBPhv11CHq1ReVaVdhUFQ8WYuqrSC8nWXpyAKUmpSno6LwIAZkn5CQBYG3Bus7QS2AVdKHZZSBrPQ2QXLszl85V/0ePShWp ixtjHOCAzjSy4DoGj3qUBuhDvRVU49wJwQbjjx4AcoFQFkTHYN46lj6O3JLAR0ZAK5BoQ/hmKwhHbbLjd41UK/EOrF9L6r4Nkv1HfKR1eChVlRycNBbigXzRAEztK3MTl5Og/0koKTx8NE0mtaxK3yYzLsiURwpzI5pdzJnmBiOikqBBNgUUDcFqviNE+OjInmz8nAOhVIBBFfF5Y4HwKnIHn8irgZLJ1vBldQeI5nnHpLQB2xAHPkaLc3RXARr8dedZDJxxazc+hNRU5W9w1hNKgMTyUPvgXKw6A5hxy5LjKPwDgGJ0BFIlp7vRTUhbOpbQoJKcZpwg1veVaYpHJ8dWhpYgvyNNdAIDOoNBx5CefNVNYTeRxAKgL+R86bckQWNMeNgjQV/X4IqaTmNzoBEyVzhYAkCJEajhZ9MDM4DqgAla0iMzgXZrqIUUcio1Z1YS2sBUAyARosQBAFOnWYAIAG6VUch3Od/Ys5NpyYXhLU90h9d9C27dFrlnrF1WeF4gSchiYp/+YGrIXAAyKH8YFABouYLTcDiilXawBhko6CXhGCwB8LA1EN0BP/9uQCfQBAFxqeGHTUEjYH18fbY0LtRDryY7S57qoN5u7LclUizIPHUtSfkHsbAEA6XWd5U1w7yUVJEqew7WcCRB6MGElRqF0EhaYowJgNhcYQZWYhly66k+SdOJUkOSSzm9cdFvFavF7nIAQDcaigDABZHy1FRtPgq+M1P4V8JRoYjgwI7ACV2QfA6BPGiAM4n12DYDQ4TUh8iIAGLgViAeoQQTAEgnUSzegBBBc0w9SO/YoAKotAGiqO14hyRUbxbBtiI4AiHRul0uPCKSUwnMo4atsc5KkDHuBzMz4zQCXWWbp+U0afkJYkJuN2DEQDukksYtLF3kj2WO+tAucATFnmp4p5zhY7Jpjtdm9LYM5WT5McCSDSoWUWNvximCoAIEzvO8Q2EM6GKnh1YT4LQCGOPpbGiD0+gUALAc37mMAcDcAgELX7aevAGAl6H2rWQHgMdh2/y4Aihj543maZ6mir8916tVAMeB0CkUbRO6rmAuEOKdQKLiE63cpGxAVhk5Jx5lL+1K0QS49h+wRZ5ChDt4CCKUaMOamPhMWq+P6AIgISoOYLWpxBqT+Q+oBXLaqN/8dANYO2scA6FELnoBlbwNgCCFA65kmcvF51j/MATYaQCa+jFqtEdBtAYBA29IWxiHdOVXtuSRZqQWSH2svcFVKuHLqFuRAjKSJVQJAjArGZFA4P9aD+VCkfj6vy8QkeJDfn1kvK6QE2J8qy3psOSeM9rBWSoBZGO+uD/A+ADQX7Zimj+XdAgAtJmDQCQAOJJCPzhqihGgREyj0kQRatB0JL2iOUBlYjUZr8xUSaLt9qnpxWVAA+0NbcIQ87NsWP6R8Leo6QoU46+3J7jKpCFzKRM9pmseCwFBHeI6eu+TripRE4MqwmBDzCwAWbhdBINqCU0ZsA2auCJOakeik3L92jCwQwQCQxpA9xwZg+4ke2LKK4SMN5aIYQDoCwCIg0bQxZIOxwsSqIIGUAkAhrv86WBe8AFOocU77vtIbiAkLStEDPAd8Ub6D9WDbqCJHt8e2R4XFAC9UcpFJsg98hvXIdhvzgUuYRcs4LALJYFh9p9OsrgHCVDUBsq5QpyeJRjkTz+S6qAT4nIHlRehsucYDULElGSAJesEdJ1DEYjsurMidMNseI2gvOTGENQEsdnXbgy5ojznvGFtfw+A quf2P4iSPdOsx1IgKwD01wCgWS0Lx2gOCPi4AEy/CgSFpWc0VqMAAPDnuT50nD0YA2YfeI/Wv1xHC7DnRTJ1zevjdG67UIAKMd1zcuilHYO8QI79NKdQJIqErnT2ziEXKHN+iPvPp2kxkZwpCNcVhYZcYuj0CP6ceA6hFG2QTxGahv0p5I3ReNKfls93vwYIq4QVaP7seLGQnKVej9IsTA4CSOD1MnGXAGgI7egFcprh4L1HxMfeBMBiAjh8SAeTWwcgoH8M74Z1KBjlIo3zHCsEB+i9k5UEpBn1wSwAezhFXiEmGtdEBRvOC951IX/2zqfTCSWfAgAX3nqebzt+P8+oznS56Xkfp4JSI5/sxwGrKVo1Ew7lo6MHbDxvmgZJkBU53odLk22c5K54hAX6gpa7et7VVJ/QANIZ2FsnPQANTQLpj8+80EAYBLe/XifQc5y/kZheKQDQ3CVIaEJcN6wBvCGBvd5ogB744HYirAEnnV6ml3dTL8kgnMtLguFyYH9+Ospr9BE9ng3Is0KTW47+YNctALDckVnQvhvP0Fgsbm5NqmPktc5TvVjlGngyaA1F2QEdmXOdD2fviLTl3N9Hrk61LteojCyb7laBxzzcKI+Xtr5PZ+KEdNeCrFkTdu14CXZn8s8y4m4vLUCHQ1uz6cu5NuIgy8dyRfh40Q+AnBwWeHayjB1JFy0+vFWaJfkDC4JtL3Kn3144bh96qbysCGka9hdDNZniU4kP9oQk2zfiF/HlJANs5bXhj/CFcqFc2mjXAOBVMlfdvO84Tu9sLlYvBD5FJPRzKNq5cYFiRTPfu9NufY9ic/ru6q5F8XlCtE+FwAfuGa5KWTFsn1oE/tl11O+7d/lQcrhaOCBHA/OPq553qRmcmN/mLTagM1+F1zQiyQtFOzvu/r9c3pE24zqbzVdXVjg1btmpq7uGs3GZTxdXq8K18c8PlaGlhMSgGDBGf6MPa7OuMz+add+HUmr1+rIQ6GLD+uD0rpSmkluXi0tlbAlA/nnsfxYAD1x9ldb5134VQW540ZS65zXiJDQ6SjWAfF1A8xm/4h/SERW42yM15Bcm4FsBIISeK32mfzEAsrwIX9+UyQJBIzLF9DDMTi/NnD9z59vj81dBgrftHgGASnGgvTRIfCsApFkHJQTm3/1lJPzY8zJUCfCXRAgf+qEvkSyxCltYz0aGXr3OSlmjTZW/vQxdp6STyYsZ20eWDJLccAKA/m4AnEIu+IdXFv0+TYpecFSH11u/75vhFoIgzvMClWnwapXkdq5W/3pHKay3FuzDdnDqH5RSVAGt/972NC3Bo7dQEv6fGDClKBP7MbVfljRjjSV60XLviYwxvdqPaEJkMDiuzBWdkJfrkbPy0NrKdfBlN7b4wjzFZ0HE45u/LAImgIM8g9tl/xkEgEznP/XdsTlnF1GMuccShW38Xip8UYi86ts2NCVhtQI6oq8bQHI7HG1suaYT10ECMyvzr6AekZfi+78sRPPit77K/kMj/7kvjy6Dvn7Zs+id1mvLH8mANs5HwyCL1LJR2oyOv8wKEYq29hZVOPnXUL+yTD8wil32HGFx6o4mPjmceusEXL7hp0YqnnxTEfjlYATRddj3z7/hs5Xljyx9op5fSruKOXqU4WN1ymDTP5IGD9EIpBPkqz1XA+xAF1r9mOSe47unQoYvJhOudr++/iAw8IOm6jl+YCDixlyteoCtbX2A56z/747nnP2bjUBVPdnQczzHczzHczzHczzHc/yh8X/2e7m+NtGqjQAAAABJRU5ErkJggg==`.replace(/\s+/g, "");
var createEmptyPTI = (overrides = {}) => ({
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
	objectives: [{
		objetivo: "",
		atividade: "",
		material: ""
	}],
	behavior_problems: [""],
	conclusion: "",
	reference: "",
	delivery_date: "",
	delivery_responsible: "",
	...overrides
});
function hydratePTI(stored) {
	if (!stored || typeof stored !== "object" || Array.isArray(stored)) return createEmptyPTI();
	const data = stored;
	const defaults = createEmptyPTI();
	return {
		...defaults,
		...data,
		objectives: Array.isArray(data.objectives) ? data.objectives.map((objective) => ({ ...objective })) : defaults.objectives,
		behavior_problems: Array.isArray(data.behavior_problems) ? [...data.behavior_problems] : defaults.behavior_problems
	};
}
var ORANGE = [
	255,
	153,
	0
];
var BLACK = [
	0,
	0,
	0
];
var WHITE = [
	255,
	255,
	255
];
var NOTE_GREEN = [
	64,
	88,
	54
];
var SECTION_BG = [
	242,
	242,
	242
];
var BORDER = [
	140,
	140,
	140
];
var TEXT_DARK = [
	45,
	45,
	45
];
var MARGIN = 48;
function fmtDate(d) {
	if (!d) return "";
	const dt = new Date(d);
	if (Number.isNaN(dt.getTime())) return d;
	return dt.toLocaleDateString("pt-BR");
}
function safe(v) {
	return v && String(v).trim() ? String(v).trim() : "";
}
function loadImage(src) {
	return new Promise((resolve) => {
		if (typeof Image === "undefined") return resolve(null);
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = () => resolve(null);
		img.src = src;
	});
}
function finalY(doc, fallback) {
	const v = doc.lastAutoTable?.finalY;
	return typeof v === "number" ? v : fallback;
}
function ensureRoom(doc, y, needed, drawHeader) {
	const pageH = doc.internal.pageSize.getHeight();
	if (y + needed > pageH - MARGIN) {
		doc.addPage("a4", "portrait");
		return drawHeader();
	}
	return y;
}
function drawPageHeader(doc, logo) {
	const pageW = doc.internal.pageSize.getWidth();
	let y = MARGIN;
	if (logo) {
		doc.addImage(logo, "PNG", MARGIN, y, 180, 28.125);
		y += 29.125;
	}
	doc.setDrawColor(...ORANGE);
	doc.setLineWidth(1.2);
	doc.line(MARGIN, y, pageW - MARGIN, y);
	y += 14;
	return y;
}
function drawTitleBar(doc, y, text) {
	const w = doc.internal.pageSize.getWidth() - 96;
	doc.setFillColor(...ORANGE);
	doc.rect(MARGIN, y, w, 26, "F");
	doc.setTextColor(...WHITE);
	doc.setFont("helvetica", "bold");
	doc.setFontSize(13);
	doc.text(text, MARGIN + w / 2, y + 17, { align: "center" });
	return y + 26 + 10;
}
function drawSectionHeader(doc, y, text) {
	const w = doc.internal.pageSize.getWidth() - 96;
	doc.setFillColor(...SECTION_BG);
	doc.setDrawColor(...BORDER);
	doc.setLineWidth(.6);
	doc.rect(MARGIN, y, w, 18, "FD");
	doc.setFont("helvetica", "bold");
	doc.setFontSize(10.5);
	doc.setTextColor(...BLACK);
	doc.text(text, 54, y + 12.5);
	return y + 18;
}
function drawParagraph(doc, y, text, opts) {
	const w = doc.internal.pageSize.getWidth() - 96;
	doc.setFont("helvetica", "normal");
	doc.setFontSize(opts?.size ?? 10);
	doc.setTextColor(...opts?.color ?? TEXT_DARK);
	const lines = doc.splitTextToSize(text, w - 8);
	const lineHeight = (opts?.size ?? 10) * 1.35;
	const pageH = doc.internal.pageSize.getHeight();
	let cy = y;
	for (const ln of lines) {
		if (cy + lineHeight > pageH - MARGIN) {
			doc.addPage("a4", "portrait");
			cy = MARGIN;
		}
		doc.text(ln, 52, cy + lineHeight - 3);
		cy += lineHeight;
	}
	return cy + 4;
}
function drawPatientData(doc, y, data) {
	const pti = data.pti ?? {};
	const rows = [
		["Nome:", safe(data.patient.name)],
		["Idade / Data de nascimento:", `${safe(data.patient_age)}${data.patient.birth_date ? "   ·   Nasc.: " + fmtDate(data.patient.birth_date) : ""}`],
		["Nome da mãe:", safe(pti.mother_name)],
		["Nome do pai:", safe(pti.father_name)],
		["Diagnóstico:", safe(pti.diagnosis) || safe(data.patient.diagnosis)],
		["Início de implementação:", fmtDate(pti.start_date) || fmtDate(data.evaluation_date)],
		["Profissional responsável:", safe(pti.professional) || safe(data.evaluator_name)],
		["Reavaliação dos objetivos:", safe(pti.revaluation) || "Semestral"]
	];
	autoTable(doc, {
		startY: y,
		margin: {
			left: MARGIN,
			right: MARGIN
		},
		theme: "grid",
		body: rows,
		styles: {
			font: "helvetica",
			fontSize: 10,
			textColor: BLACK,
			lineColor: BORDER,
			lineWidth: .4,
			cellPadding: {
				top: 5,
				right: 6,
				bottom: 5,
				left: 6
			},
			valign: "middle"
		},
		columnStyles: {
			0: {
				cellWidth: 170,
				fontStyle: "bold",
				fillColor: [
					250,
					250,
					250
				]
			},
			1: { cellWidth: "auto" }
		}
	});
	return finalY(doc, y) + 10;
}
function drawObjectivesTable(doc, y, objectives) {
	const w = doc.internal.pageSize.getWidth() - 96;
	autoTable(doc, {
		startY: y,
		margin: {
			left: MARGIN,
			right: MARGIN
		},
		theme: "grid",
		head: [[
			"OBJETIVO",
			"ATIVIDADE",
			"MATERIAL"
		]],
		body: objectives.length ? objectives.map((o) => [
			safe(o.objetivo) || "—",
			safe(o.atividade) || "—",
			safe(o.material) || "—"
		]) : [[
			"—",
			"—",
			"—"
		]],
		styles: {
			font: "helvetica",
			fontSize: 9.2,
			textColor: TEXT_DARK,
			lineColor: BORDER,
			lineWidth: .4,
			cellPadding: 6,
			valign: "top",
			overflow: "linebreak"
		},
		headStyles: {
			fillColor: ORANGE,
			textColor: WHITE,
			fontStyle: "bold",
			halign: "center",
			lineColor: BORDER
		},
		columnStyles: {
			0: { cellWidth: w * .33 },
			1: { cellWidth: w * .37 },
			2: { cellWidth: w * .3 }
		}
	});
	return finalY(doc, y) + 12;
}
function drawBullets(doc, y, items) {
	const w = doc.internal.pageSize.getWidth() - 96;
	doc.setFont("helvetica", "normal");
	doc.setFontSize(10);
	doc.setTextColor(...TEXT_DARK);
	const pageH = doc.internal.pageSize.getHeight();
	let cy = y;
	for (const raw of items) {
		const text = String(raw || "").trim();
		if (!text) continue;
		const lines = doc.splitTextToSize(text, w - 22);
		const lineH = 13;
		const blockH = lines.length * lineH + 4;
		if (cy + blockH > pageH - MARGIN) {
			doc.addPage("a4", "portrait");
			cy = MARGIN;
		}
		doc.setFillColor(...ORANGE);
		doc.circle(54, cy + 6, 2, "F");
		lines.forEach((ln, i) => doc.text(ln, 64, cy + 9 + i * lineH));
		cy += blockH;
	}
	return cy + 6;
}
function drawSignatureBlock(doc, y, pti) {
	const w = doc.internal.pageSize.getWidth() - 96;
	y = drawSectionHeader(doc, y, "ENTREGA – DEVOLUTIVA E ORIENTAÇÃO");
	const rows = [
		["Data:", fmtDate(pti.delivery_date)],
		["Responsável:", safe(pti.delivery_responsible)],
		["Assinatura:", ""]
	];
	autoTable(doc, {
		startY: y,
		margin: {
			left: MARGIN,
			right: MARGIN
		},
		theme: "grid",
		body: rows,
		styles: {
			font: "helvetica",
			fontSize: 10,
			textColor: BLACK,
			lineColor: BORDER,
			lineWidth: .4,
			cellPadding: {
				top: 8,
				right: 6,
				bottom: 8,
				left: 6
			},
			minCellHeight: 26
		},
		columnStyles: {
			0: {
				cellWidth: 120,
				fontStyle: "bold",
				fillColor: [
					250,
					250,
					250
				]
			},
			1: { cellWidth: w - 120 }
		}
	});
	return finalY(doc, y) + 8;
}
function addFooters(doc, data) {
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
		doc.text("TODOS OS DIREITOS RESERVADOS HAPVIDA NOTREDAME · PROIBIDO O RATEIO, A COMERCIALIZAÇÃO E A REPRODUÇÃO DESSE MATERIAL.", pageW / 2, pageH - 8, { align: "center" });
	}
}
function downloadPdf(doc, filename) {
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
	setTimeout(() => URL.revokeObjectURL(url), 1e4);
}
var DEFAULT_CONCLUSION = (name) => `Diante das informações levantadas e das necessidades observadas, o Plano Terapêutico Individual (PTI) foi elaborado com foco no desenvolvimento da comunicação funcional, ampliação da autonomia nas atividades de vida diária e manejo dos comportamentos disruptivos, compartilhar espaços e objetos, sempre respeitando o ritmo e as preferências da criança.\n\nAs intervenções serão conduzidas de forma estruturada, utilizando reforçadores e estratégias que favoreçam a participação ativa e o engajamento. Além disso, o acompanhamento contínuo permitirá ajustes conforme a evolução de ${name || "do(a) beneficiário(a)"} garantindo que o plano se mantenha adequado às suas demandas.\n\nDe acordo com o DSM V, o TEA (Transtorno do Espectro Autista) tem como uma das principais características a dificuldade de comunicação, barreiras na interação social e dificuldade na compreensão e expressão de emoções. Sabemos que estas habilidades são essenciais para o desenvolvimento e evolução do(a) beneficiário(a) e que um ambiente terapêutico inclusivo e compartilhado contribui para o fortalecimento destas habilidades sociais.\n\nDeste modo, de acordo com a avaliação, fora constatado que a criança está apta ao atendimento individualizado em sala compartilhada. Será realizada uma reavaliação após 6 meses para analisar os progressos alcançados, revisar os objetivos traçados e, se necessário, reformular as estratégias de intervenção.`;
var DEFAULT_REFERENCE = "Williams, L. C. A., & Aiello, A. L. R. (2001). O Inventário Portage Operacionalizado: Intervenção com famílias. Memnon; FAPESP.";
async function generatePTIPdf(data) {
	const doc = new import_jspdf_node_min.jsPDF({
		unit: "pt",
		format: "a4",
		orientation: "portrait"
	});
	const logo = await loadImage(PDF_BRAND_STRIP_DATA_URL);
	const pti = data.pti ?? {};
	const header = () => drawPageHeader(doc, logo);
	let y = header();
	y = drawTitleBar(doc, y, "PLANO TERAPÊUTICO INDIVIDUALIZADO");
	y = drawSectionHeader(doc, y, "DADOS DO PACIENTE");
	y = drawPatientData(doc, y, data);
	y = ensureRoom(doc, y, 60, header);
	y = drawSectionHeader(doc, y, "BREVE HISTÓRIA CLÍNICA");
	y = drawParagraph(doc, y + 4, safe(pti.clinical_history) || "—");
	y = ensureRoom(doc, y, 80, header);
	y = drawSectionHeader(doc, y, "OBJETIVOS POR ÁREA (SOCIALIZAÇÃO, COMUNICAÇÃO E AUTONOMIA)");
	doc.setFont("helvetica", "italic");
	doc.setFontSize(9);
	doc.setTextColor(90);
	doc.text("O objetivo principal é promover o desenvolvimento de habilidades que favoreçam a comunicação, interação social e autonomia.", 52, y + 12, { maxWidth: doc.internal.pageSize.getWidth() - 96 - 8 });
	y += 26;
	y = drawObjectivesTable(doc, y, pti.objectives ?? []);
	y = ensureRoom(doc, y, 80, header);
	y = drawSectionHeader(doc, y, "COMPORTAMENTOS PROBLEMAS LISTADOS");
	const behaviors = (pti.behavior_problems ?? []).filter((b) => b && b.trim());
	y = drawBullets(doc, y + 4, behaviors.length ? behaviors : ["—"]);
	y = ensureRoom(doc, y, 60, header);
	y = drawSectionHeader(doc, y, "CONSIDERAÇÕES E PLANO DE INTERVENÇÃO");
	y = drawParagraph(doc, y + 4, safe(pti.conclusion) || DEFAULT_CONCLUSION(data.patient.name));
	y = ensureRoom(doc, y, 40, header);
	y = drawParagraph(doc, y, safe(pti.reference) || DEFAULT_REFERENCE, {
		size: 9,
		color: [
			90,
			90,
			90
		]
	});
	y = ensureRoom(doc, y, 120, header);
	y = drawSignatureBlock(doc, y + 4, pti);
	addFooters(doc, data);
	downloadPdf(doc, `PTI_${(data.patient.name || "paciente").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_-]+/g, "_")}_${data.evaluation_date}.pdf`);
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var clean = (value) => value?.trim() ?? "";
function generateOfficialClinicalHistory(fields) {
	const patientName = clean(fields.patientName) || "O avaliado";
	const unit = clean(fields.unit) || "unidade de atendimento";
	const diagnosis = clean(fields.diagnosis) || "Transtorno do Espectro Autista (TEA) (CID-10 F84)";
	const medication = clean(fields.medication);
	const responsibleReport = clean(fields.responsibleReport) || "as informações pertinentes relatadas pelos responsáveis";
	const developmentProfile = clean(fields.developmentProfile) || "apresenta déficit na interação social, atraso no desenvolvimento da fala e déficit na autonomia, necessitando de suporte para realização de atividades de vida diária";
	const behaviorDescription = clean(fields.behaviorDescription) || "Apresenta baixa tolerância à frustração; em algumas situações, além de fuga e recusa, pode apresentar comportamentos de autolesão e agressividade. Pode morder as próprias mãos, arremessar objetos ao chão e morder pessoas próximas";
	const assessmentProtocol = clean(fields.assessmentProtocol) || "Portage";
	const aggressionTypes = [fields.hasAutoaggression ? "autolesivos" : "", fields.hasHeteroaggression ? "heterolesivos" : ""].filter(Boolean);
	const aggressionNote = aggressionTypes.length ? ` Conforme relato dos responsáveis, há presença de comportamentos ${aggressionTypes.join(" e ")}.` : "";
	return [
		`${patientName} passou por avaliação na unidade ${unit}. O avaliado apresenta diagnóstico de ${diagnosis}, está em acompanhamento com Neuropediatra${medication === "Não faz uso de medicação" ? " e, no momento, não faz uso de medicação" : medication ? ` e, no momento, faz uso da medicação ${medication}` : ""}. As informações aqui presentes foram colhidas em formato de entrevista presencial com a mãe. Em acolhimento com a mãe, uma das principais queixas trazidas está relacionada a ${responsibleReport}.`,
		`${patientName} ${developmentProfile}. ${behaviorDescription}.${aggressionNote}`,
		"O objetivo deste documento é a criação de um Protocolo de Ensino Individualizado (PEI), visando ao aumento de repertório, autonomia e ao ensino das habilidades em déficit.",
		`Para esta avaliação, utilizou-se como base o protocolo ${assessmentProtocol}, que oferece uma análise do desenvolvimento e das competências funcionais da criança, auxiliando na definição de metas personalizadas e estratégias de intervenção. A escolha do protocolo foi feita de acordo com o perfil e a faixa etária, podendo ser revista conforme a evolução do processo.`
	].join("\n\n");
}
function shouldSynchronizeClinicalHistory({ currentHistory, previousGeneratedHistory, nextGeneratedHistory }) {
	const current = clean(currentHistory);
	if (!current) return true;
	if (current === nextGeneratedHistory) return true;
	return Boolean(previousGeneratedHistory && current === previousGeneratedHistory);
}
function synchronizeClinicalHistory({ narrative, previousGeneratedHistory, nextGeneratedHistory }) {
	if (!shouldSynchronizeClinicalHistory({
		currentHistory: narrative.clinical_history,
		previousGeneratedHistory,
		nextGeneratedHistory
	})) return null;
	if (narrative.clinical_history === nextGeneratedHistory) return narrative;
	return {
		...narrative,
		clinical_history: nextGeneratedHistory
	};
}
var NO_MEDICATION_OPTION = "Não faz uso de medicação";
var OTHER_MEDICATION_OPTION = "Outra(s) medicação(ões) — descrever abaixo";
var CLINICAL_MEDICATION_GROUPS = [
	{
		label: "Atenção e impulsividade",
		options: [
			"Metilfenidato",
			"Lisdexanfetamina",
			"Atomoxetina",
			"Guanfacina",
			"Clonidina",
			"Bupropiona"
		]
	},
	{
		label: "Comportamento e irritabilidade",
		options: [
			"Risperidona",
			"Aripiprazol",
			"Quetiapina",
			"Olanzapina"
		]
	},
	{
		label: "Sono, ansiedade e humor",
		options: [
			"Melatonina",
			"Sertralina",
			"Fluoxetina",
			"Escitalopram",
			"Trazodona"
		]
	}
];
function resolveClinicalMedications({ medications, otherMedication, legacyMedication }) {
	const selected = (medications?.length ? medications : legacyMedication && legacyMedication !== "Outra(s) medicação(ões) — descrever abaixo" ? [legacyMedication] : []).map((medication) => medication.trim()).filter(Boolean);
	const uniqueSelected = Array.from(new Set(selected));
	const manual = otherMedication?.trim();
	if (uniqueSelected.includes("Não faz uso de medicação")) return NO_MEDICATION_OPTION;
	return [...uniqueSelected, ...manual ? [manual] : []].join(", ");
}
function useClinicalHistoryAutoSync({ narrative, onChange, patient }) {
	const guidedClinicalHistory = (0, import_react.useMemo)(() => generateOfficialClinicalHistory({
		patientName: patient.name,
		unit: narrative.clinical_unit ?? "",
		diagnosis: narrative.diagnosis || patient.diagnosis || "",
		medication: resolveClinicalMedications({
			medications: narrative.clinical_medications,
			otherMedication: narrative.clinical_medications_other || narrative.clinical_medication_other,
			legacyMedication: narrative.clinical_medication
		}),
		responsibleReport: narrative.clinical_responsible_report ?? "",
		developmentProfile: narrative.clinical_development_profile ?? "",
		behaviorDescription: narrative.clinical_behavior_description ?? "",
		hasAutoaggression: Boolean(narrative.clinical_autoaggression),
		hasHeteroaggression: Boolean(narrative.clinical_heteroaggression),
		assessmentProtocol: narrative.clinical_assessment_protocol ?? "Portage"
	}), [
		narrative.clinical_assessment_protocol,
		narrative.clinical_autoaggression,
		narrative.clinical_behavior_description,
		narrative.clinical_development_profile,
		narrative.clinical_heteroaggression,
		narrative.clinical_medication,
		narrative.clinical_medication_other,
		narrative.clinical_medications,
		narrative.clinical_medications_other,
		narrative.clinical_responsible_report,
		narrative.clinical_unit,
		narrative.diagnosis,
		patient.diagnosis,
		patient.name
	]);
	const lastGeneratedClinicalHistory = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const synchronizedNarrative = synchronizeClinicalHistory({
			narrative,
			previousGeneratedHistory: lastGeneratedClinicalHistory.current,
			nextGeneratedHistory: guidedClinicalHistory
		});
		if (synchronizedNarrative) {
			lastGeneratedClinicalHistory.current = guidedClinicalHistory;
			if (synchronizedNarrative !== narrative) onChange(synchronizedNarrative);
		}
	}, [
		guidedClinicalHistory,
		narrative,
		onChange
	]);
	return guidedClinicalHistory;
}
var CLINICAL_TEXT_SUGGESTIONS = {
	responsibleReport: [
		{
			label: "Comunicação e autonomia",
			text: "dificuldades na comunicação funcional, na compreensão de demandas do cotidiano e na ampliação da autonomia em casa"
		},
		{
			label: "Rotina e transições",
			text: "necessidade de apoio para transições de rotina, tolerância a mudanças e organização de atividades diárias"
		},
		{
			label: "Interação social",
			text: "desafios relacionados à interação com pares, participação em ambientes sociais e manutenção do engajamento em atividades compartilhadas"
		},
		{
			label: "Autocuidado e alimentação",
			text: "dificuldades em situações de autocuidado e/ou seletividade alimentar, com necessidade de construção gradual de repertórios"
		},
		{
			label: "Sono e rotina",
			text: "oscilações na qualidade do sono e impactos na disposição e na organização da rotina"
		},
		{
			label: "Interesses do paciente",
			text: "interesses específicos que podem ser utilizados como recurso de motivação e aprendizagem"
		}
	],
	developmentProfile: [
		{
			label: "Comunicação funcional",
			text: "apresenta necessidade de apoio para ampliar a comunicação funcional, a iniciativa comunicativa e a atenção compartilhada"
		},
		{
			label: "Interação e turnos",
			text: "apresenta desafios na interação social recíproca, na manutenção de turnos e na participação em atividades compartilhadas"
		},
		{
			label: "Linguagem",
			text: "apresenta dificuldades no desenvolvimento da linguagem expressiva e/ou compreensiva, beneficiando-se de recursos visuais e comandos objetivos"
		},
		{
			label: "Autonomia e AVDs",
			text: "necessita de suporte gradativo em atividades de vida diária, incluindo organização, higiene, alimentação e participação nas rotinas"
		},
		{
			label: "Aprendizagem estruturada",
			text: "beneficia-se de ambiente estruturado, previsibilidade e mediação para iniciar, manter e concluir tarefas"
		},
		{
			label: "Habilidades emergentes",
			text: "apresenta habilidades emergentes de imitação, atenção conjunta e resolução de problemas, que devem ser ampliadas"
		}
	],
	behaviorDescription: [
		{
			label: "Frustração e recusa",
			text: "Apresenta baixa tolerância à frustração; diante de demandas não preferidas, pode apresentar fuga, recusa e redução da permanência na atividade"
		},
		{
			label: "Mudanças e espera",
			text: "Pode demonstrar desconforto diante de mudanças de rotina, transições ou espera, necessitando de preparação antecipada e apoio para autorregulação"
		},
		{
			label: "Agitação e impulsividade",
			text: "Apresenta períodos de agitação e/ou impulsividade, beneficiando-se de estratégias de organização ambiental, pausas planejadas e instruções objetivas"
		},
		{
			label: "Sensibilidades sensoriais",
			text: "Apresenta sensibilidades a estímulos sensoriais que podem impactar o engajamento, sendo importante observar preferências e gatilhos ambientais"
		},
		{
			label: "Autoagressão relatada",
			text: "Os responsáveis relatam comportamentos de autoagressão em situações específicas; recomenda-se registrar antecedentes, comportamentos e consequências"
		},
		{
			label: "Heteroagressão relatada",
			text: "Os responsáveis relatam comportamentos de heteroagressão em situações específicas; recomenda-se registrar antecedentes, comportamentos e consequências"
		}
	]
};
function appendClinicalText(existing, suggestion) {
	const current = existing?.trim() ?? "";
	return current ? `${current} ${suggestion}` : suggestion;
}
function appendClinicalTexts(existing, suggestions) {
	return suggestions.reduce((current, suggestion) => current.includes(suggestion) ? current : appendClinicalText(current, suggestion), existing?.trim() ?? "");
}
function ClinicalField({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs font-semibold text-foreground",
			children: label
		}), children]
	});
}
var fieldClassName = "flex h-9 w-full rounded-sm border border-input bg-background px-3 py-1 text-sm shadow-xs";
var textareaClassName = "flex w-full rounded-sm border border-input bg-background px-3 py-2 text-sm shadow-xs";
function SuggestedTextarea({ name, value, onChange, suggestions, placeholder, rows }) {
	const [selectedLabels, setSelectedLabels] = (0, import_react.useState)([]);
	const toggleSuggestion = (label) => {
		setSelectedLabels((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label]);
	};
	const addSelectedSuggestions = () => {
		const texts = suggestions.filter((suggestion) => selectedLabels.includes(suggestion.label)).map((suggestion) => suggestion.text);
		if (!texts.length) return;
		onChange(appendClinicalTexts(value, texts));
		setSelectedLabels([]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-sm border border-border bg-muted/20 p-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Selecione uma ou mais sugestões"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-1.5 sm:grid-cols-2",
					children: suggestions.map((suggestion) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-xs text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							name: `${name}-suggestion`,
							value: suggestion.label,
							checked: selectedLabels.includes(suggestion.label),
							onChange: () => toggleSuggestion(suggestion.label),
							className: "h-4 w-4 accent-primary"
						}), suggestion.label]
					}, suggestion.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					name: `${name}-apply-suggestions`,
					disabled: !selectedLabels.length,
					onClick: addSelectedSuggestions,
					className: "mt-2 inline-flex h-8 items-center rounded-sm bg-primary px-3 text-xs font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50",
					children: [
						"Adicionar ",
						selectedLabels.length || "",
						" sugestão",
						selectedLabels.length === 1 ? "" : "ões"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			className: textareaClassName,
			rows,
			value,
			onChange: (event) => onChange(event.target.value),
			placeholder
		})]
	});
}
function ClinicalHistorySection({ value, onChange, patient }) {
	const set = (key, next) => onChange({
		...value,
		[key]: next
	});
	const guidedClinicalHistory = useClinicalHistoryAutoSync({
		narrative: value,
		onChange,
		patient
	});
	const selectedMedications = value.clinical_medications?.length ? value.clinical_medications : value.clinical_medication && value.clinical_medication !== "Outra(s) medicação(ões) — descrever abaixo" ? [value.clinical_medication] : [];
	const otherMedications = value.clinical_medications_other || value.clinical_medication_other || "";
	const addMedication = (medication) => {
		if (!medication || medication === "Outra(s) medicação(ões) — descrever abaixo") return;
		if (medication === "Não faz uso de medicação") {
			onChange({
				...value,
				clinical_medications: [NO_MEDICATION_OPTION],
				clinical_medications_other: ""
			});
			return;
		}
		const next = Array.from(/* @__PURE__ */ new Set([...selectedMedications.filter((item) => item !== NO_MEDICATION_OPTION), medication]));
		onChange({
			...value,
			clinical_medications: next
		});
	};
	const removeMedication = (medication) => onChange({
		...value,
		clinical_medications: selectedMedications.filter((item) => item !== medication)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sheet rounded-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 border-b bg-primary px-4 py-2 text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-bold uppercase tracking-widest",
					children: "Breve História Clínica"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "inline-flex h-8 items-center rounded-sm bg-secondary px-3 text-xs font-semibold text-secondary-foreground",
						type: "button",
						onClick: () => set("clinical_history", guidedClinicalHistory),
						children: "Gerar texto oficial"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 border-b bg-muted/20 p-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalField, {
						label: "Unidade",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "clinical-unit",
							className: fieldClassName,
							value: value.clinical_unit ?? "",
							onChange: (event) => set("clinical_unit", event.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Selecione a unidade"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Hapvida Janga",
									children: "Hapvida Janga"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Hapvida Madalena",
									children: "Hapvida Madalena"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalField, {
								label: "Medicações atuais já prescritas",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "clinical-medication-picker",
									className: fieldClassName,
									value: "",
									onChange: (event) => addMedication(event.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Adicionar medicação ao registro"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: NO_MEDICATION_OPTION,
											children: NO_MEDICATION_OPTION
										}),
										CLINICAL_MEDICATION_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: group.label,
											children: group.options.map((medication) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: medication,
												children: medication
											}, medication))
										}, group.label)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: OTHER_MEDICATION_OPTION,
											children: OTHER_MEDICATION_OPTION
										})
									]
								})
							}),
							selectedMedications.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								"aria-label": "Medicações selecionadas",
								children: selectedMedications.map((medication) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs text-foreground",
									children: [medication, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Remover ${medication}`,
										onClick: () => removeMedication(medication),
										className: "font-bold text-primary",
										children: "×"
									})]
								}, medication))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "clinical-medications-other",
								className: fieldClassName,
								value: otherMedications,
								onChange: (event) => set("clinical_medications_other", event.target.value),
								placeholder: "Outra(s) medicação(ões) já prescrita(s), se necessário",
								disabled: selectedMedications.includes(NO_MEDICATION_OPTION)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] leading-snug text-muted-foreground",
								children: "Selecione quantas medicações forem necessárias e/ou informe outras no campo complementar. O recurso registra apenas uso já prescrito; não inclua doses nem altere tratamento sem orientação médica."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalField, {
						label: "Protocolo de avaliação",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: fieldClassName,
							value: value.clinical_assessment_protocol ?? "Portage",
							onChange: (event) => set("clinical_assessment_protocol", event.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Portage",
									children: "Portage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "ABLLS-R",
									children: "ABLLS-R"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Portage e ABLLS-R",
									children: "Portage e ABLLS-R"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Outro protocolo",
									children: "Outro protocolo"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border bg-paper p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Comportamentos relatados"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-3 text-xs text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: Boolean(value.clinical_autoaggression),
									onChange: (event) => set("clinical_autoaggression", event.target.checked),
									className: "h-4 w-4 accent-primary"
								}), " Autolesivo"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: Boolean(value.clinical_heteroaggression),
									onChange: (event) => set("clinical_heteroaggression", event.target.checked),
									className: "h-4 w-4 accent-primary"
								}), " Heterolesivo"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalField, {
							label: "Informações coletadas com os responsáveis",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuggestedTextarea, {
								name: "clinical-responsible-report",
								value: value.clinical_responsible_report ?? "",
								onChange: (next) => set("clinical_responsible_report", next),
								suggestions: CLINICAL_TEXT_SUGGESTIONS.responsibleReport,
								rows: 3,
								placeholder: "Queixas principais, rotina, demandas e demais informações pertinentes."
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalField, {
							label: "Desenvolvimento, interação e autonomia",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuggestedTextarea, {
								name: "clinical-development-profile",
								value: value.clinical_development_profile ?? "",
								onChange: (next) => set("clinical_development_profile", next),
								suggestions: CLINICAL_TEXT_SUGGESTIONS.developmentProfile,
								rows: 3,
								placeholder: "Ex.: apresenta déficit na interação social, atraso no desenvolvimento da fala e déficit na autonomia..."
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalField, {
							label: "Comportamentos e manejo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuggestedTextarea, {
								name: "clinical-behavior-description",
								value: value.clinical_behavior_description ?? "",
								onChange: (next) => set("clinical_behavior_description", next),
								suggestions: CLINICAL_TEXT_SUGGESTIONS.behaviorDescription,
								rows: 4,
								placeholder: "Descreva tolerância à frustração, fuga, recusa, comportamentos auto ou heterolesivos e outras observações."
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs text-muted-foreground",
					children: "Nome e diagnóstico são trazidos automaticamente de Dados do Paciente. Os campos guiados atualizam o texto enquanto ele não tiver edição manual; o botão permite gerar novamente o modelo oficial. O texto abaixo permanece totalmente editável."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: textareaClassName,
					rows: 7,
					value: value.clinical_history ?? "",
					onChange: (event) => set("clinical_history", event.target.value),
					placeholder: "O modelo institucional será preenchido automaticamente com os dados informados."
				})]
			})
		]
	});
}
var CLINICAL_DIAGNOSIS_GROUPS = [
	{
		label: "TEA e atenção",
		options: [
			"Transtorno do Espectro Autista (TEA) — CID-10 F84.0",
			"Autismo atípico — CID-10 F84.1",
			"Transtorno de déficit de atenção/hiperatividade (TDAH) — CID-10 F90.0",
			"Transtorno hipercinético de conduta — CID-10 F90.1",
			"Transtorno hipercinético não especificado — CID-10 F90.9"
		]
	},
	{
		label: "Linguagem, aprendizagem e desenvolvimento",
		options: [
			"Transtorno específico da fala e linguagem expressiva — CID-10 F80.1",
			"Transtorno receptivo da linguagem — CID-10 F80.2",
			"Transtorno específico da leitura (dislexia) — CID-10 F81.0",
			"Transtorno misto das habilidades escolares — CID-10 F81.3",
			"Transtorno específico do desenvolvimento motor — CID-10 F82",
			"Transtornos mistos do desenvolvimento — CID-10 F83"
		]
	},
	{
		label: "Condições associadas frequentemente registradas",
		options: [
			"Transtorno desafiador de oposição — CID-10 F91.3",
			"Transtorno de ansiedade não especificado — CID-10 F41.9",
			"Deficiência intelectual leve — CID-10 F70",
			"Epilepsia — CID-10 G40"
		]
	}
];
function resolveClinicalDiagnoses({ diagnoses, otherDiagnosis, legacyDiagnosis }) {
	const selected = (diagnoses?.length ? diagnoses : []).map((diagnosis) => diagnosis.trim()).filter(Boolean);
	const manual = otherDiagnosis?.trim() || (!selected.length ? legacyDiagnosis?.trim() : "");
	return [...Array.from(new Set(selected)), ...manual ? [manual] : []].join("; ");
}
function getRegisteredProfessionalName(user) {
	const fullName = user?.user_metadata?.full_name;
	return typeof fullName === "string" && fullName.trim() ? fullName.trim() : user?.email?.trim() ?? "";
}
function applyRegisteredProfessional(narrative, registeredName) {
	if (narrative.professional?.trim() || !registeredName.trim()) return narrative;
	return {
		...narrative,
		professional: registeredName.trim()
	};
}
var RAW_OBJECTIVES_TEMPLATES = [
	{
		id: "mt-cognitivos",
		area: "Musicoterapia",
		label: "Cognitivos",
		summary: "Atenção, concentração, memória, sequenciamento, planejamento e processamento auditivo.",
		items: [
			{
				objetivo: "Ampliar a atenção sustentada em experiências musicais estruturadas.",
				atividade: "Participação em canções curtas com início, meio e fim sinalizados, aumentando gradualmente o tempo de engajamento.",
				material: "Violão, instrumentos de percussão, cartões de início e fim e timer visual."
			},
			{
				objetivo: "Desenvolver concentração em uma tarefa musical com redução gradual de distratores.",
				atividade: "Execução de jogo de escuta e resposta a um instrumento-alvo em ambiente organizado.",
				material: "Instrumentos contrastantes, protetor auditivo quando indicado e sinal visual."
			},
			{
				objetivo: "Fortalecer memória auditiva por meio da recordação de padrões sonoros simples.",
				atividade: "Escuta, pausa e reprodução de sequências curtas de sons, palavras ou gestos musicais.",
				material: "Tambor, claves, chocalhos e cartões sequenciais."
			},
			{
				objetivo: "Organizar sequências de ações sonoras ou musicais em ordem funcional.",
				atividade: "Montagem e execução de cartões de sequência como ouvir, escolher, tocar e encerrar.",
				material: "Cartões com imagens de instrumentos e rotina visual."
			},
			{
				objetivo: "Planejar uma resposta musical simples antes de executá-la.",
				atividade: "Escolha de instrumento, definição de uma sequência curta e execução com apoio verbal ou visual graduado.",
				material: "Opções de instrumentos, quadro de planejamento e cartões de escolha."
			},
			{
				objetivo: "Aprimorar a percepção auditiva de contrastes de som, silêncio, intensidade, duração e timbre.",
				atividade: "Jogos de discriminação e pareamento de sons de instrumentos e pausas musicais.",
				material: "Instrumentos variados, aparelho de som e cartões de atributos sonoros."
			},
			{
				objetivo: "Exercitar flexibilidade cognitiva ao variar regras, instrumentos ou formas de participação musical.",
				atividade: "Alternância planejada entre tocar, ouvir, cantar, pausar e seguir novas combinações simples.",
				material: "Cartões de mudança, instrumentos diversos e agenda visual."
			},
			{
				objetivo: "Resolver problemas simples que surgem em tarefas musicais compartilhadas.",
				atividade: "Identificação guiada de alternativas quando falta um instrumento, muda o turno ou uma sequência precisa ser reorganizada.",
				material: "Instrumentos, cartões de solução e quadro de escolhas."
			}
		]
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
				material: "Chocalhos, sinos, teclado, pandeiro e instrumentos de pequeno porte."
			},
			{
				objetivo: "Desenvolver coordenação óculo-manual em ações musicais dirigidas.",
				atividade: "Tocar alvos visuais no tambor, encaixar baquetas e acompanhar trajetos simples ao ritmo de uma música.",
				material: "Tambor, baquetas, alvos coloridos e fitas no chão."
			},
			{
				objetivo: "Planejar movimentos necessários para realizar uma ação musical com início e encerramento definidos.",
				atividade: "Observar, preparar a postura, escolher o instrumento e executar uma sequência motora curta.",
				material: "Espelho, cartões de etapas e instrumentos adaptados quando indicados."
			},
			{
				objetivo: "Ampliar praxia por meio da imitação e execução de gestos associados à música.",
				atividade: "Canções com gestos, jogos de espelho e sequências de movimentos corporais funcionais.",
				material: "Músicas com movimentos, espelho e cartões gestuais."
			},
			{
				objetivo: "Desenvolver coordenação bilateral em experiências instrumentais e corporais.",
				atividade: "Uso combinado das duas mãos para tocar, segurar, alternar instrumentos e realizar movimentos rítmicos.",
				material: "Tambor, pandeiro, chocalhos e teclados."
			},
			{
				objetivo: "Aprimorar a precisão de movimentos durante a execução de ações musicais específicas.",
				atividade: "Tocar pontos-alvo, iniciar e interromper movimentos conforme pistas rítmicas ou visuais.",
				material: "Tambor com marcações, baquetas, cartões de parar e seguir."
			},
			{
				objetivo: "Ajustar o controle de força utilizado ao tocar instrumentos de diferentes resistências.",
				atividade: "Experimentação guiada de sons fortes e suaves, com feedback auditivo e visual.",
				material: "Tambor, teclado, sinos, escalas visuais de intensidade."
			},
			{
				objetivo: "Sincronizar movimentos corporais ou instrumentais a um pulso musical simples.",
				atividade: "Caminhar, bater palmas ou tocar instrumentos acompanhando batidas regulares.",
				material: "Metrônomo, tambor, músicas rítmicas e marcadores de chão."
			}
		]
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
				material: "Canções previsíveis, instrumentos e cartões com palavras funcionais."
			},
			{
				objetivo: "Utilizar comunicação não verbal para expressar escolhas, participação ou solicitação de continuidade.",
				atividade: "Oferta de escolhas entre canções e instrumentos, com espera e resposta por olhar, gesto, apontar ou sinal.",
				material: "Cartões de escolha, pranchas visuais e instrumentos preferidos."
			},
			{
				objetivo: "Aumentar a iniciativa comunicativa durante interações musicais.",
				atividade: "Pausas estratégicas em canções e jogos de causa e efeito para favorecer pedidos, comentários ou convites.",
				material: "Violão, teclado, cartões de pedir e recursos de comunicação suplementar quando indicados."
			},
			{
				objetivo: "Ampliar atenção compartilhada entre terapeuta, atividade e recurso musical.",
				atividade: "Alternância de olhar, escuta e resposta em canções de saudação, turnos instrumentais e brincadeiras musicais.",
				material: "Instrumentos de percussão, imagens de apoio e canções de rotina."
			},
			{
				objetivo: "Favorecer vocalizações intencionais em resposta a pausas, modelos e experiências musicais.",
				atividade: "Canto responsivo, imitação de sons e preenchimento de lacunas em músicas familiares.",
				material: "Canções de repetição, microfone infantil e teclado."
			},
			{
				objetivo: "Apoiar a produção de sons ou palavras-alvo em contexto musical, conforme planejamento interdisciplinar.",
				atividade: "Repetição rítmica de palavras funcionais, canto silabado e modelagem auditiva em músicas curtas.",
				material: "Espelho, cartões de palavras e canções personalizadas."
			},
			{
				objetivo: "Compreender e responder a comandos simples inseridos em atividades musicais.",
				atividade: "Jogos de tocar, parar, guardar, escolher e trocar instrumentos com pistas graduadas.",
				material: "Cartões de ação, instrumentos variados e rotina visual."
			},
			{
				objetivo: "Demonstrar comunicação intencional para expressar interesse, recusa, escolha ou necessidade de ajuda.",
				atividade: "Criação de oportunidades de comunicação em situações de escolha, espera e resolução de pequenos impasses musicais.",
				material: "Prancha de comunicação, cartões de escolha e instrumentos motivadores."
			}
		]
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
				material: "Tambor, metrônomo, faixas sonoras e cartões rítmicos."
			},
			{
				objetivo: "Identificar e manter o pulso em atividades musicais estruturadas.",
				atividade: "Bater palmas, caminhar ou tocar um instrumento acompanhando uma pulsação regular.",
				material: "Metrônomo, tambor, músicas com pulso marcado e marcadores de chão."
			},
			{
				objetivo: "Reproduzir padrões rítmicos simples por imitação e, progressivamente, de memória.",
				atividade: "Eco rítmico com duas a quatro batidas usando palmas e instrumentos.",
				material: "Claves, tambor, chocalhos e cartões de sequência."
			},
			{
				objetivo: "Perceber e responder a contornos melódicos simples em canções conhecidas.",
				atividade: "Jogos de subir e descer com a voz, gestos e notas curtas no teclado.",
				material: "Teclado, sinos afinados e imagens de subida e descida."
			},
			{
				objetivo: "Participar do canto de músicas adequadas ao repertório e à preferência individual.",
				atividade: "Canto compartilhado com refrões repetitivos, pausas de participação e escolha de canções.",
				material: "Violão, teclado, letras ilustradas e microfone infantil."
			},
			{
				objetivo: "Explorar instrumentos musicais identificando diferentes formas de produzir som.",
				atividade: "Experimentação guiada de tocar, sacudir, raspar, pressionar e comparar sons.",
				material: "Percussão, cordas, teclas e instrumentos adaptados quando indicados."
			},
			{
				objetivo: "Participar de improvisação musical dentro de limites e turnos definidos.",
				atividade: "Diálogo sonoro entre terapeuta e beneficiário com perguntas e respostas instrumentais.",
				material: "Tambor, teclado, instrumentos de percussão e cartões de turno."
			},
			{
				objetivo: "Criar escolhas ou sequências musicais autorais de acordo com o repertório do beneficiário.",
				atividade: "Selecionar instrumentos, organizar uma ordem de sons e registrar uma pequena criação musical.",
				material: "Instrumentos variados, cartões de composição e gravador de áudio quando indicado."
			}
		]
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
				material: "Violão, instrumentos de percussão e cartões de interação."
			},
			{
				objetivo: "Desenvolver cooperação para alcançar um resultado musical conjunto.",
				atividade: "Execução em dupla ou grupo de padrões em que cada participante contribui com uma parte.",
				material: "Instrumentos complementares, cartões de papéis e músicas coletivas."
			},
			{
				objetivo: "Imitar gestos, ritmos ou ações musicais apresentados pelo terapeuta ou por pares.",
				atividade: "Jogos de espelho, eco rítmico e reprodução de movimentos associados a canções.",
				material: "Espelho, tambor, claves e músicas com gestos."
			},
			{
				objetivo: "Respeitar turnos em atividades musicais com apoio visual progressivamente reduzido.",
				atividade: "Alternância de tocar, ouvir e entregar o instrumento entre participantes.",
				material: "Cartões de vez, timer visual e instrumentos de fácil manejo."
			},
			{
				objetivo: "Aumentar iniciativa social para convidar, responder ou compartilhar uma experiência musical.",
				atividade: "Pausas planejadas e oportunidades para escolher parceiro, instrumento ou canção.",
				material: "Cartões de convite, instrumentos preferidos e escolhas visuais."
			},
			{
				objetivo: "Participar de experiências musicais coletivas seguindo regras simples e papéis definidos.",
				atividade: "Roda de música com início, participação individual, resposta ao grupo e encerramento previsível.",
				material: "Percussão coletiva, agenda visual e canções de grupo."
			},
			{
				objetivo: "Fortalecer vínculo terapêutico por meio de experiências musicais responsivas e previsíveis.",
				atividade: "Canções personalizadas, acompanhamento dos interesses e rituais de início e despedida.",
				material: "Violão, canções favoritas e cartões de rotina."
			}
		]
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
				material: "Cartões de emoções, instrumentos variados e playlist terapêutica."
			},
			{
				objetivo: "Utilizar recursos musicais previamente combinados para apoiar autorregulação.",
				atividade: "Escolha e uso de música, ritmo ou respiração guiada antes, durante ou após situações de maior demanda.",
				material: "Playlist de regulação, fones quando indicados, tambor suave e cartão de pausa."
			},
			{
				objetivo: "Fortalecer autoestima ao reconhecer participação e conquistas em experiências musicais.",
				atividade: "Registro de produções, devolutiva específica sobre esforço e apresentação de escolhas realizadas.",
				material: "Gravador de áudio, mural de conquistas e instrumentos preferidos."
			},
			{
				objetivo: "Ampliar autoconfiança para experimentar respostas musicais novas com suporte gradualmente reduzido.",
				atividade: "Modelagem, tentativa segura e valorização do processo em canto, ritmo ou instrumento escolhido.",
				material: "Instrumentos de fácil acesso, cartões de incentivo e gravações curtas."
			},
			{
				objetivo: "Aumentar motivação para participar de tarefas terapêuticas por meio de repertório musical significativo.",
				atividade: "Incorporação de interesses e músicas preferidas em metas estruturadas de sessão.",
				material: "Playlist individualizada, instrumentos preferidos e quadro de escolhas."
			},
			{
				objetivo: "Desenvolver tolerância à frustração diante de erros, espera ou mudanças em atividades musicais.",
				atividade: "Ensino de estratégias de pausa, pedido de ajuda e nova tentativa em desafios graduados.",
				material: "Cartão de pausa, timer visual, instrumentos e escala de emoções."
			},
			{
				objetivo: "Construir segurança emocional para participar de interações musicais previsíveis.",
				atividade: "Rituais estáveis de acolhimento, antecipação de etapas e escolhas limitadas durante a sessão.",
				material: "Agenda visual, canção de saudação e objeto musical de preferência."
			},
			{
				objetivo: "Sustentar prazer e engajamento em experiências musicais adequadas às preferências e necessidades do beneficiário.",
				atividade: "Monitoramento de sinais de interesse, ajuste do nível de desafio e participação ativa em escolhas.",
				material: "Instrumentos variados, lista de preferências e recursos visuais de escolha."
			}
		]
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
				material: "Cartões de ação, instrumentos e rotina visual."
			},
			{
				objetivo: "Desenvolver controle de impulsividade durante o acesso e uso de instrumentos musicais.",
				atividade: "Treino de parar, esperar sinal e iniciar resposta em jogos musicais estruturados.",
				material: "Cartões de parar e tocar, timer visual e instrumentos de percussão."
			},
			{
				objetivo: "Ampliar tolerância à espera em situações de turno ou acesso a instrumentos preferidos.",
				atividade: "Espera gradual com previsão de tempo, alternância de turnos e reforço de estratégias funcionais.",
				material: "Timer visual, cartões de vez e instrumentos motivadores."
			},
			{
				objetivo: "Participar de mudanças simples de canção, instrumento ou regra com antecipação graduada.",
				atividade: "Uso de cartões de mudança e escolhas limitadas para alternar atividades dentro da sessão.",
				material: "Agenda visual, cartões de mudança e instrumentos variados."
			},
			{
				objetivo: "Permanecer em atividade musical pelo tempo definido no planejamento terapêutico.",
				atividade: "Fragmentação de tarefa, metas de duração graduadas e pausas planejadas.",
				material: "Timer visual, quadro de primeiro-depois e instrumentos de interesse."
			},
			{
				objetivo: "Aumentar participação ativa nas etapas de início, desenvolvimento e encerramento da sessão musical.",
				atividade: "Rotina previsível com papéis simples, escolha de instrumentos e checagem de finalização.",
				material: "Agenda visual, cartões de etapas e instrumentos de fácil acesso."
			},
			{
				objetivo: "Demonstrar iniciativa para escolher, iniciar ou retomar uma atividade musical de interesse.",
				atividade: "Oferta de oportunidades de escolha, pausas responsivas e acesso a instrumentos organizados.",
				material: "Quadro de escolhas, instrumentos preferidos e cartões de iniciar."
			},
			{
				objetivo: "Ampliar autonomia para organizar, utilizar e guardar recursos musicais conforme a rotina combinada.",
				atividade: "Sequência visual de escolher, tocar, limpar e guardar instrumentos com redução gradual de ajuda.",
				material: "Etiquetas visuais, caixas organizadoras, instrumentos e checklist ilustrado."
			}
		]
	},
	{
		id: "psi-regulacao-comunicacao",
		area: "Psicologia",
		label: "Regulação Emocional e Comunicação Funcional",
		summary: "Reconhecimento emocional, estratégias de regulação e respostas alternativas à frustração.",
		items: [
			{
				objetivo: "Identificar e nomear emoções básicas em si e no outro.",
				atividade: "Uso de cartões de sentimentos e dramatização de cenas sociais.",
				material: "Cartões de emoções, espelho, fantoches."
			},
			{
				objetivo: "Utilizar estratégias previamente combinadas de co-regulação ou autorregulação diante de sinais iniciais de desconforto.",
				atividade: "Ensino e prática guiada de pausa, respiração, solicitação de apoio e acesso ao espaço de regulação.",
				material: "Timer visual, cartão de pausa e recursos sensoriais individualizados."
			},
			{
				objetivo: "Comunicar necessidades, preferências, recusa ou pedido de ajuda de forma socialmente compreensível.",
				atividade: "Ensaios em brincadeiras e situações simuladas com modelagem de frases, gestos ou recursos visuais.",
				material: "Cartões de comunicação, pranchas visuais e brinquedos de interesse."
			},
			{
				objetivo: "Substituir respostas que dificultam a participação por alternativas funcionais em situações de frustração.",
				atividade: "Análise de antecedente-resposta-consequência e treino de resposta alternativa em cenários graduados.",
				material: "Histórias sociais, escala visual de emoções e reforçadores definidos em plano terapêutico."
			}
		]
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
				material: "Timer visual, cartões de vez e jogos estruturados."
			},
			{
				objetivo: "Participar de transições e pequenas mudanças de rotina utilizando antecipação e escolhas limitadas.",
				atividade: "Uso de agenda visual, aviso prévio e ensaio de alternativas para mudanças planejadas.",
				material: "Rotina visual, cartões de mudança e quadro de escolhas."
			},
			{
				objetivo: "Iniciar, responder e manter trocas sociais simples com pares ou adultos em atividades significativas.",
				atividade: "Treino de roteiros sociais, brincadeiras cooperativas e role-playing com feedback imediato.",
				material: "Histórias sociais, scripts visuais e jogos cooperativos."
			}
		]
	},
	{
		id: "fono-comunicacao-receptiva-expressiva",
		area: "Fonoaudiologia",
		label: "Comunicação Receptiva e Expressiva",
		summary: "Compreensão, vocabulário, solicitação funcional e combinação de palavras.",
		items: [
			{
				objetivo: "Ampliar a compreensão de instruções funcionais de uma ou mais etapas, conforme avaliação fonoaudiológica.",
				atividade: "Execução de comandos inseridos em rotinas de brincadeira, autocuidado e organização.",
				material: "Objetos reais, figuras sequenciais e cartões visuais."
			},
			{
				objetivo: "Aumentar o repertório de palavras, sinais ou símbolos funcionais relacionados a pessoas, ações, objetos e necessidades.",
				atividade: "Nomeação e uso funcional de vocabulário em contextos naturais e brincadeiras dirigidas.",
				material: "Miniaturas, livros ilustrados, objetos de rotina e recursos de comunicação."
			},
			{
				objetivo: "Produzir solicitações funcionais por fala, gesto, sinal ou comunicação suplementar e alternativa, quando indicada.",
				atividade: "Criação de oportunidades de comunicação com espera, escolhas e modelagem responsiva.",
				material: "Itens preferidos, pranchas de comunicação e cartões de escolha."
			},
			{
				objetivo: "Ampliar combinações de palavras ou símbolos para comunicar intenção, ação e complemento conforme o repertório atual.",
				atividade: "Expansão de enunciados durante brincadeiras, leitura compartilhada e atividades de rotina.",
				material: "Pranchas de comunicação, figuras de ação e livros ilustrados."
			}
		]
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
				material: "Livros, brinquedos interativos e recursos visuais."
			},
			{
				objetivo: "Alternar turnos comunicativos em brincadeiras e conversas curtas com apoio graduado.",
				atividade: "Jogos de vez, perguntas previsíveis e sequências de pergunta-resposta-comentário.",
				material: "Cartões de turno, jogos estruturados e objetos motivadores."
			},
			{
				objetivo: "Aprimorar a inteligibilidade de sons ou palavras-alvo definidos na avaliação fonoaudiológica.",
				atividade: "Prática contextualizada de palavras-alvo com pistas auditivas, visuais e táteis quando apropriado.",
				material: "Espelho, figuras de palavras-alvo e materiais lúdicos."
			}
		]
	},
	{
		id: "nutri-exploracao-seletividade",
		area: "Nutrição",
		label: "Exploração e Seletividade Alimentar",
		summary: "Exposição gradual, exploração sensorial e ampliação individualizada do repertório alimentar.",
		items: [
			{
				objetivo: "Tolerar a presença de novos alimentos no prato.",
				atividade: "Exposição gradual e atividades lúdicas de exploração sensorial.",
				material: "Alimentos variados, utensílios coloridos."
			},
			{
				objetivo: "Explorar novas texturas, cheiros, cores e formatos de alimentos sem exigência imediata de ingestão.",
				atividade: "Sequência de olhar, tocar, cheirar, aproximar e provar, respeitando sinais de desconforto.",
				material: "Alimentos planejados, bandejas de exploração e utensílios adequados."
			},
			{
				objetivo: "Avançar gradualmente na hierarquia individual de aceitação de alimentos, conforme plano nutricional.",
				atividade: "Exposição graduada e encadeamento alimentar com registro de respostas e preferências.",
				material: "Alimentos-alvo, ficha de acompanhamento e utensílios de refeição."
			},
			{
				objetivo: "Ampliar o repertório alimentar dentro das necessidades nutricionais e culturais da família.",
				atividade: "Apresentação de variações próximas a alimentos já aceitos e participação em escolhas guiadas.",
				material: "Lista de alimentos aceitos, alimentos similares e cartões de escolha."
			}
		]
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
				material: "Pranchas de escolha, cartões de alimentos e escala visual de fome e saciedade."
			},
			{
				objetivo: "Participar da rotina alimentar utilizando utensílios, postura e apoios definidos pela equipe responsável.",
				atividade: "Treino funcional de mesa com adaptação gradual de utensílios e redução de ajuda quando seguro.",
				material: "Talheres, copos e recursos adaptados quando indicados."
			},
			{
				objetivo: "Participar de etapas simples e seguras de preparo ou organização da refeição, de acordo com idade e supervisão necessária.",
				atividade: "Separar ingredientes, lavar itens permitidos, montar lanche simples e organizar a mesa com sequência visual.",
				material: "Checklist visual, utensílios seguros e ingredientes previamente definidos."
			}
		]
	},
	{
		id: "pm-coordenacao-planejamento",
		area: "Psicomotricidade",
		label: "Coordenação e Planejamento Motor",
		summary: "Equilíbrio, bilateralidade, coordenação fina e sequências motoras funcionais.",
		items: [
			{
				objetivo: "Melhorar o equilíbrio estático e dinâmico.",
				atividade: "Circuitos motores com obstáculos e planos inclinados.",
				material: "Corda, balancim, túnel, cones."
			},
			{
				objetivo: "Desenvolver coordenação bilateral em atividades que exigem uso integrado dos dois lados do corpo.",
				atividade: "Jogos de arremessar e receber, rasgar, encaixar, abrir recipientes e circuitos com cruzamento da linha média.",
				material: "Bolas, prendedores, recipientes, blocos e fitas no chão."
			},
			{
				objetivo: "Planejar e executar sequências motoras simples com redução gradual de pistas.",
				atividade: "Circuitos com duas a quatro etapas, demonstração inicial e revisão visual da sequência.",
				material: "Cartões sequenciais, cones, argolas e túnel."
			},
			{
				objetivo: "Aprimorar coordenação motora fina e integração visomotora em tarefas funcionais.",
				atividade: "Atividades de encaixe, traçado, recorte adaptado, pinça e manipulação de pequenos objetos.",
				material: "Massinha, pinças, prendedores, lápis e jogos de encaixe."
			}
		]
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
				material: "Espelho grande, músicas de movimento e cartões corporais."
			},
			{
				objetivo: "Imitar ritmos e gestos motores simples em atividades lúdicas compartilhadas.",
				atividade: "Sequências de palmas, passos, movimentos com música e jogos de espelho.",
				material: "Músicas rítmicas, tambor e cartões de movimentos."
			},
			{
				objetivo: "Manter participação organizada em brincadeiras motoras com regras simples e transições previsíveis.",
				atividade: "Jogos de parar/seguir, revezamento e circuitos com início e fim sinalizados.",
				material: "Sinal visual de início/fim, cones, bolas e timer."
			}
		]
	},
	{
		id: "avds-autonomia",
		area: "Terapia Ocupacional",
		label: "AVDs — Atividades de Vida Diária",
		summary: "Autonomia progressiva em higiene, vestuário, alimentação e rotina de autocuidado.",
		items: [
			{
				objetivo: "Completar a rotina de lavagem das mãos seguindo uma sequência de etapas com suporte graduado.",
				atividade: "Treino por encadeamento de etapas antes de refeições e após uso do banheiro.",
				material: "Sequência visual, sabonete, toalha e pia acessível."
			},
			{
				objetivo: "Realizar etapas da higiene oral conforme o repertório motor e o nível de suporte necessário.",
				atividade: "Modelagem, prática com espelho e sequência visual de escovar, enxaguar e guardar os materiais.",
				material: "Escova, creme dental, copo, espelho e rotina ilustrada."
			},
			{
				objetivo: "Vestir ou retirar peças de roupa adequadas à rotina, utilizando estratégias de adaptação quando indicadas.",
				atividade: "Treino de vestir e despir por encadeamento, com organização das peças e redução gradual de ajuda.",
				material: "Roupas de treino, quadro de passos e recursos adaptados quando necessários."
			},
			{
				objetivo: "Participar da alimentação com maior autonomia no uso de utensílios e na organização da mesa.",
				atividade: "Treino funcional de colher, garfo, copo e organização de itens da refeição conforme segurança e suporte definidos.",
				material: "Utensílios usuais ou adaptados, prato, copo e apoio visual."
			},
			{
				objetivo: "Participar da rotina de uso do banheiro de acordo com o plano de autonomia e as necessidades de apoio.",
				atividade: "Sequência visual de ida ao banheiro, higiene e finalização, com registro das etapas realizadas.",
				material: "Rotina visual, redutor ou apoio quando indicado e materiais de higiene."
			},
			{
				objetivo: "Executar etapas de banho, cuidados pessoais ou organização de aparência compatíveis com a faixa etária.",
				atividade: "Simulação e treino em contexto seguro de pentear cabelo, limpar o rosto, aplicar desodorante ou separar itens de higiene.",
				material: "Kit de higiene pessoal, espelho e checklist ilustrado."
			},
			{
				objetivo: "Organizar e finalizar a rotina pessoal, guardando materiais de autocuidado nos locais definidos.",
				atividade: "Uso de etiquetas visuais e checklist de início, execução e encerramento da rotina.",
				material: "Etiquetas, caixas organizadoras e checklist visual."
			}
		]
	},
	{
		id: "aivds-autonomia",
		area: "Terapia Ocupacional",
		label: "AIVDs — Atividades Instrumentais de Vida Diária",
		summary: "Organização, rotina doméstica, preparo simples de alimentos e participação comunitária conforme a idade.",
		items: [
			{
				objetivo: "Organizar mochila, materiais pessoais ou itens escolares com checklist e redução gradual de pistas.",
				atividade: "Separação e guarda de itens para uma rotina real ou simulada de casa e escola.",
				material: "Mochila, checklist ilustrado, etiquetas e organizadores."
			},
			{
				objetivo: "Seguir uma rotina visual para iniciar, executar e concluir uma tarefa doméstica simples.",
				atividade: "Prática guiada de guardar brinquedos, dobrar panos, limpar superfície ou separar roupas.",
				material: "Rotina ilustrada, caixas, panos e cestos."
			},
			{
				objetivo: "Preparar lanche simples e seguro dentro das orientações familiares e da supervisão necessária.",
				atividade: "Separar ingredientes, montar sanduíche ou lanche frio e organizar o local após o uso.",
				material: "Utensílios seguros, ingredientes previamente definidos e checklist visual."
			},
			{
				objetivo: "Planejar uma tarefa cotidiana simples escolhendo materiais e seguindo uma sequência previamente combinada.",
				atividade: "Organização de uma atividade com quadro de 'o que preciso', 'o que faço' e 'o que guardo'.",
				material: "Quadro de planejamento, cartões de etapas e materiais da tarefa."
			},
			{
				objetivo: "Localizar, categorizar e guardar pertences em espaços definidos de casa ou escola.",
				atividade: "Classificação de itens por função e uso de etiquetas, cores ou fotografias de referência.",
				material: "Etiquetas visuais, caixas organizadoras e objetos pessoais."
			},
			{
				objetivo: "Participar de situação simulada de compra ou escolha de itens de rotina, adequada à idade e ao contexto familiar.",
				atividade: "Lista visual, escolha entre opções, separação de itens e reconhecimento de etapas da compra simulada.",
				material: "Lista ilustrada, embalagens vazias, cédulas de brinquedo e cesta."
			},
			{
				objetivo: "Deslocar-se entre atividades da rotina com apoio de agenda visual e estratégias de orientação previamente treinadas.",
				atividade: "Treino de sequências casa-escola-terapia em maquete, imagens ou percurso supervisionado.",
				material: "Agenda visual, fotos de locais e mapas simplificados."
			}
		]
	},
	{
		id: "pp-alfabetizacao-aprendizagem",
		area: "Psicopedagogia",
		label: "Alfabetização e Aprendizagem Inicial",
		summary: "Consciência fonológica, leitura, escrita e conceitos matemáticos iniciais.",
		items: [
			{
				objetivo: "Desenvolver consciência fonológica (rimas e aliterações).",
				atividade: "Jogos de sons e associação fonema-grafema.",
				material: "Letras móveis, jogos de rima."
			},
			{
				objetivo: "Identificar e nomear letras do alfabeto e números.",
				atividade: "Atividades multissensoriais de traçado e reconhecimento.",
				material: "Areia colorida, massinha, cartões numéricos."
			},
			{
				objetivo: "Relacionar letras, sons e palavras de alta relevância funcional para sua rotina.",
				atividade: "Associação de letras e palavras a nomes, objetos, lugares e interesses significativos.",
				material: "Letras móveis, cartões com palavras e imagens funcionais."
			},
			{
				objetivo: "Ler ou reconhecer palavras e frases curtas com apoio visual compatível com o nível de escolaridade.",
				atividade: "Leitura compartilhada de rótulos, listas, histórias curtas e instruções de jogos.",
				material: "Livros adaptados, cartões de palavras e textos curtos."
			}
		]
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
				material: "Checklists, timer visual e organizadores."
			},
			{
				objetivo: "Fortalecer memória de trabalho e sequenciamento para concluir atividades com múltiplas etapas.",
				atividade: "Jogos de sequência, repetição de instruções curtas e organização de ações em ordem.",
				material: "Cartões sequenciais, jogos de memória e rotinas visuais."
			},
			{
				objetivo: "Planejar, iniciar e revisar uma atividade usando estratégias visuais de organização.",
				atividade: "Uso de quadro 'primeiro-depois', lista de conferência e autoavaliação simples ao finalizar.",
				material: "Checklist, quadro visual e marcador apagável."
			},
			{
				objetivo: "Aplicar noções de quantidade, correspondência e contagem em situações acadêmicas ou cotidianas significativas.",
				atividade: "Separação de objetos, jogos de contagem, comparação de quantidades e rotina de compras simuladas.",
				material: "Objetos manipuláveis, cartões numéricos e cédulas de brinquedo."
			}
		]
	}
];
var SPECIALTY_DOMAIN_GROUPS = {
	"psi-regulacao-comunicacao": [
		{
			id: "psi-reconhecimento-emocional",
			label: "Reconhecimento Emocional",
			summary: "Identificação e nomeação de emoções em si e no outro.",
			itemIndexes: [0]
		},
		{
			id: "psi-autorregulacao",
			label: "Autorregulação e Enfrentamento",
			summary: "Co-regulação, estratégias de pausa e alternativas diante da frustração.",
			itemIndexes: [1, 3]
		},
		{
			id: "psi-comunicacao-funcional",
			label: "Comunicação Funcional",
			summary: "Expressão de necessidades, preferências, recusa e pedidos de ajuda.",
			itemIndexes: [2]
		}
	],
	"psi-social-flexibilidade": [{
		id: "psi-espera-flexibilidade",
		label: "Espera e Flexibilidade",
		summary: "Tolerância a adiamentos, transições e mudanças de rotina.",
		itemIndexes: [0, 1]
	}, {
		id: "psi-habilidades-sociais",
		label: "Habilidades Sociais",
		summary: "Iniciação, resposta e manutenção de trocas sociais significativas.",
		itemIndexes: [2]
	}],
	"fono-comunicacao-receptiva-expressiva": [{
		id: "fono-linguagem-receptiva",
		label: "Linguagem Receptiva",
		summary: "Compreensão de instruções e participação em rotinas funcionais.",
		itemIndexes: [0]
	}, {
		id: "fono-linguagem-expressiva-csa",
		label: "Linguagem Expressiva e Comunicação Suplementar",
		summary: "Vocabulário, solicitações e combinações de palavras, sinais ou símbolos.",
		itemIndexes: [
			1,
			2,
			3
		]
	}],
	"fono-pragmatica-fala": [{
		id: "fono-comunicacao-social",
		label: "Comunicação Social e Pragmática",
		summary: "Atenção compartilhada e alternância de turnos comunicativos.",
		itemIndexes: [0, 1]
	}, {
		id: "fono-fala-inteligibilidade",
		label: "Fala e Inteligibilidade",
		summary: "Produção de sons ou palavras-alvo conforme avaliação fonoaudiológica.",
		itemIndexes: [2]
	}],
	"nutri-exploracao-seletividade": [{
		id: "nutri-exploracao-sensorial",
		label: "Exploração Sensorial",
		summary: "Tolerância à presença e exploração de texturas, cheiros, cores e formatos.",
		itemIndexes: [0, 1]
	}, {
		id: "nutri-aceitacao-repertorio",
		label: "Aceitação e Repertório Alimentar",
		summary: "Hierarquia de aceitação e ampliação gradual do repertório alimentar.",
		itemIndexes: [2, 3]
	}],
	"nutri-autonomia-rotina": [{
		id: "nutri-autonomia-refeicao",
		label: "Autonomia nas Refeições",
		summary: "Comunicação de preferências, utensílios e participação segura na rotina alimentar.",
		itemIndexes: [
			0,
			1,
			2
		]
	}],
	"pm-coordenacao-planejamento": [{
		id: "pm-equilibrio-coordenacao-global",
		label: "Equilíbrio e Coordenação Global",
		summary: "Equilíbrio estático e dinâmico, bilateralidade e movimentos amplos.",
		itemIndexes: [0, 1]
	}, {
		id: "pm-planejamento-motricidade-fina",
		label: "Planejamento Motor e Motricidade Fina",
		summary: "Sequências motoras, coordenação fina e integração visomotora.",
		itemIndexes: [2, 3]
	}],
	"pm-corpo-regulacao": [{
		id: "pm-esquema-corporal-ritmo",
		label: "Esquema Corporal e Ritmo",
		summary: "Consciência corporal, orientação espacial, imitação e ritmo.",
		itemIndexes: [0, 1]
	}, {
		id: "pm-participacao-regulacao",
		label: "Participação e Regulação Motora",
		summary: "Organização em brincadeiras motoras, regras simples e transições.",
		itemIndexes: [2]
	}],
	"avds-autonomia": [
		{
			id: "to-higiene-pessoal",
			label: "Higiene Pessoal",
			summary: "Lavagem das mãos e higiene oral com suporte graduado.",
			itemIndexes: [0, 1]
		},
		{
			id: "to-vestuario-alimentacao",
			label: "Vestuário e Alimentação",
			summary: "Vestir-se, retirar roupas e participar da alimentação com autonomia progressiva.",
			itemIndexes: [2, 3]
		},
		{
			id: "to-rotina-autonomia",
			label: "Rotina de Autocuidado",
			summary: "Uso do banheiro, cuidados pessoais e organização de materiais de higiene.",
			itemIndexes: [
				4,
				5,
				6
			]
		}
	],
	"aivds-autonomia": [
		{
			id: "to-organizacao-domestica",
			label: "Organização e Rotina Doméstica",
			summary: "Mochila, pertences e tarefas simples de casa ou escola.",
			itemIndexes: [0, 1]
		},
		{
			id: "to-preparo-planejamento",
			label: "Preparo e Planejamento de Tarefas",
			summary: "Lanche simples e organização das etapas de uma atividade cotidiana.",
			itemIndexes: [2, 3]
		},
		{
			id: "to-pertences-participacao-comunitaria",
			label: "Pertences e Participação Comunitária",
			summary: "Classificação de itens e escolhas em situações simuladas de compra.",
			itemIndexes: [4, 5]
		},
		{
			id: "to-mobilidade-rotina",
			label: "Mobilidade na Rotina",
			summary: "Deslocamento entre atividades com agenda visual e orientação previamente treinada.",
			itemIndexes: [6]
		}
	],
	"pp-alfabetizacao-aprendizagem": [{
		id: "pp-alfabetizacao-inicial",
		label: "Alfabetização Inicial",
		summary: "Consciência fonológica, letras e números.",
		itemIndexes: [0, 1]
	}, {
		id: "pp-leitura-escrita-funcional",
		label: "Leitura e Escrita Funcional",
		summary: "Relação entre letras, sons, palavras e frases significativas.",
		itemIndexes: [2, 3]
	}],
	"pp-executivas-matematica": [{
		id: "pp-atencao-memoria-organizacao",
		label: "Atenção, Memória e Organização",
		summary: "Atenção, memória de trabalho, planejamento, início e revisão de tarefas.",
		itemIndexes: [
			0,
			1,
			2
		]
	}, {
		id: "pp-matematica-funcional",
		label: "Matemática Funcional",
		summary: "Quantidade, correspondência e contagem em situações significativas.",
		itemIndexes: [3]
	}]
};
var OBJECTIVES_TEMPLATES = RAW_OBJECTIVES_TEMPLATES.flatMap((template) => {
	const domains = SPECIALTY_DOMAIN_GROUPS[template.id];
	if (!domains) return [template];
	return domains.map((domain) => ({
		...template,
		id: domain.id,
		label: domain.label,
		summary: domain.summary,
		items: domain.itemIndexes.map((itemIndex) => template.items[itemIndex]).filter((item) => Boolean(item))
	}));
});
var BEHAVIORS_TEMPLATES = [
	{
		id: "beh-leve",
		label: "Comportamentos Leves",
		summary: "Estereotipias motoras e desatenção.",
		items: [
			"Estereotipias motoras (flapping, balanceio) em momentos de excitação.",
			"Dificuldade em manter contato visual sustentado durante demandas.",
			"Desatenção a estímulos verbais quando engajado em interesse restrito."
		]
	},
	{
		id: "beh-moderado",
		label: "Comportamentos Moderados",
		summary: "Resistência a mudanças e ecolalia.",
		items: [
			"Resistência significativa a mudanças na rotina estabelecida.",
			"Ecolalia imediata ou tardia que interfere na comunicação funcional.",
			"Dificuldade em aceitar o 'não' ou esperar por itens desejados."
		]
	},
	{
		id: "beh-severo",
		label: "Comportamentos Severos",
		summary: "Auto/heteroagressividade e crises intensas.",
		items: [
			"Episódios de autoagressividade (bater na cabeça, morder-se) em frustração.",
			"Comportamento heteroagressivo direcionado a pares ou adultos.",
			"Crises sensoriais intensas com perda de controle motor e choro prolongado."
		]
	}
];
var CONCLUSION_TEMPLATES = [{
	id: "conc-padrao",
	label: "Intervenção Multidisciplinar",
	summary: "Foco no desenvolvimento global e suporte à família.",
	text: "Diante do quadro apresentado, recomenda-se a continuidade da intervenção terapêutica multidisciplinar, com foco na ampliação das habilidades de comunicação social, autonomia e regulação comportamental. É fundamental a parceria com a família para a generalização dos ganhos para o ambiente domiciliar e escolar. O plano será revisado semestralmente para ajustes conforme a evolução do beneficiário."
}, {
	id: "conc-escolar",
	label: "Suporte e Inclusão Escolar",
	summary: "Foco em adaptações curriculares e mediação social.",
	text: "A intervenção focará prioritariamente no suporte ao processo de inclusão escolar, auxiliando na mediação das relações sociais com pares e na adaptação de atividades acadêmicas. Recomenda-se reuniões periódicas com a equipe escolar para alinhamento de estratégias de manejo e suporte pedagógico individualizado."
}];
var OBJECTIVE_CATALOG = OBJECTIVES_TEMPLATES.flatMap((template) => template.items.map((item, index) => ({
	...item,
	id: `${template.id}-${index + 1}`,
	area: template.area ?? "Outros",
	templateId: template.id,
	templateLabel: template.label,
	templateSummary: template.summary
})));
function objectiveKey(objective) {
	return [
		objective.objetivo,
		objective.atividade,
		objective.material
	].map((value) => value.trim().toLocaleLowerCase("pt-BR")).join("|");
}
function isBlankObjective(objective) {
	return !objective.objetivo.trim() && !objective.atividade.trim() && !objective.material.trim();
}
function countPopulatedObjectives(objectives) {
	return objectives.filter((objective) => !isBlankObjective(objective)).length;
}
function isObjectiveIncluded(existingObjectives, candidate) {
	const candidateKey = objectiveKey(candidate);
	return existingObjectives.some((objective) => !isBlankObjective(objective) && objectiveKey(objective) === candidateKey);
}
function appendUniqueObjectives(existingObjectives, selectedOptions) {
	const retainedObjectives = existingObjectives.filter((objective) => !isBlankObjective(objective));
	const existingKeys = new Set(retainedObjectives.map(objectiveKey));
	const additions = selectedOptions.filter((option) => !existingKeys.has(objectiveKey(option))).map(({ objetivo, atividade, material }) => ({
		objetivo,
		atividade,
		material
	}));
	return [...retainedObjectives, ...additions];
}
var AJUDA_OPTIONS = [
	"Independente",
	"Gestual",
	"Verbal",
	"Física"
];
var PTI_OBJECTIVE_AREAS = Array.from(new Set(OBJECTIVE_CATALOG.map((option) => option.area)));
var AREA_TITLE = {
	SOCIALIZAÇÃO: "SOCIALIZAÇÃO",
	LINGUAGEM: "LINGUAGEM",
	COGNIÇÃO: "COGNIÇÃO",
	AUTOCUIDADOS: "AUTOCUIDADOS",
	"DESENV MOTOR": "DESENVOLVIMENTO MOTOR"
};
function computeAge(birth) {
	if (!birth) return "";
	const d = new Date(birth);
	if (isNaN(d.getTime())) return "";
	const now = /* @__PURE__ */ new Date();
	let years = now.getFullYear() - d.getFullYear();
	let months = now.getMonth() - d.getMonth();
	if (now.getDate() < d.getDate()) months -= 1;
	if (months < 0) {
		years -= 1;
		months += 12;
	}
	return `${years} ano(s) e ${months} mês(es)`;
}
function ageLabel(age) {
	return age === "0 a 1 anos" ? "0 a 1 ano" : age;
}
function PatientPage() {
	const { id } = useParams({ from: "/_authenticated/patients/$id" });
	const navigate = useNavigate();
	const { role } = useRouteContext({ from: "/_authenticated/patients/$id" });
	const [patient, setPatient] = (0, import_react.useState)(null);
	const [evalId, setEvalId] = (0, import_react.useState)(null);
	const [evaluator, setEvaluator] = (0, import_react.useState)("");
	const [evalDate, setEvalDate] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [sessions, setSessions] = (0, import_react.useState)({});
	const [allEvaluations, setAllEvaluations] = (0, import_react.useState)([]);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [tab, setTab] = (0, import_react.useState)("PTI");
	const [pti, setPti] = (0, import_react.useState)(() => createEmptyPTI());
	const [registeredProfessionalName, setRegisteredProfessionalName] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		(async () => {
			setLoading(true);
			const [{ data: p, error: pe }, { data: ev }, { data: session }] = await Promise.all([
				supabase.from("patients").select("*").eq("id", id).single(),
				supabase.from("evaluations").select("id, evaluation_date, evaluator_name, patient_age, answers, pti_data, created_at").eq("patient_id", id).order("evaluation_date", { ascending: false }),
				supabase.auth.getUser()
			]);
			const professionalName = getRegisteredProfessionalName(session.user);
			setRegisteredProfessionalName(professionalName);
			if (pe) toast.error(pe.message);
			else setPatient(p);
			if (ev && ev.length) {
				const e = ev[0];
				setEvalId(e.id);
				setEvaluator(e.evaluator_name);
				setEvalDate(e.evaluation_date);
				setAnswers(e.answers || {});
				setPti(applyRegisteredProfessional(hydratePTI(e.pti_data), professionalName));
				const { data: sess } = await supabase.from("pei_sessions").select("*").eq("evaluation_id", e.id).order("session_date", { ascending: false });
				if (sess) {
					const map = {};
					for (const s of sess) if (!map[s.item_key]) map[s.item_key] = {
						item_key: s.item_key,
						area: s.area,
						age_range: s.age_range,
						item_num: s.item_num,
						session_date: s.session_date,
						acertos: s.acertos,
						tentativas: s.tentativas,
						ajuda: s.ajuda
					};
					setSessions(map);
				}
			} else setPti((current) => applyRegisteredProfessional(current, professionalName));
			setAllEvaluations(ev || []);
			setLoading(false);
		})();
	}, [id]);
	const patientAge = (0, import_react.useMemo)(() => computeAge(patient?.birth_date), [patient?.birth_date]);
	const stats = (0, import_react.useMemo)(() => computeStats(answers), [answers]);
	const priorities = (0, import_react.useMemo)(() => priorityObjectives(answers), [answers]);
	const others = (0, import_react.useMemo)(() => otherObjectives(answers), [answers]);
	const totalAnswered = Object.values(answers).filter((v) => v).length;
	const setAnswer = (key, val) => {
		setAnswers((prev) => {
			const next = { ...prev };
			if (prev[key] === val) delete next[key];
			else next[key] = val;
			return next;
		});
	};
	const save = async () => {
		if (!patient) return;
		setSaving(true);
		const { data: session } = await supabase.auth.getUser();
		if (!session.user) {
			setSaving(false);
			return;
		}
		const evaluatorName = evaluator.trim() || pti.professional?.trim() || session.user.email || "Não informado";
		const payload = {
			owner_id: session.user.id,
			patient_id: patient.id,
			evaluator_name: evaluatorName,
			evaluation_date: evalDate,
			patient_age: patientAge,
			answers,
			pti_data: pti
		};
		const { data, error } = await (evalId ? supabase.from("evaluations").update(payload).eq("id", evalId).select().single() : supabase.from("evaluations").insert(payload).select().single());
		if (error) toast.error(error.message);
		else {
			const saved = data;
			setEvalId(saved.id);
			setAllEvaluations((prev) => {
				const next = prev.filter((x) => x.id !== saved.id);
				next.unshift({
					id: saved.id,
					evaluation_date: saved.evaluation_date,
					evaluator_name: saved.evaluator_name,
					patient_age: saved.patient_age,
					answers: saved.answers,
					pti_data: saved.pti_data ?? pti,
					created_at: saved.created_at
				});
				return next;
			});
			toast.success("Avaliação salva");
		}
		setSaving(false);
	};
	const startNewEvaluation = async () => {
		if (!patient) return;
		if (evalId && Object.keys(answers).some((k) => answers[k])) {
			if (!window.confirm("Isso cria uma nova avaliação em branco para este paciente. A avaliação atual permanece salva. Continuar?")) return;
		}
		setEvalId(null);
		setEvaluator("");
		setEvalDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
		setAnswers({});
		setSessions({});
		setPti(createEmptyPTI({
			diagnosis: patient.diagnosis || "",
			professional: registeredProfessionalName
		}));
		setTab("PTI");
		toast.success("Nova avaliação iniciada. Preencha e salve.");
	};
	const loadEvaluation = (e) => {
		setEvalId(e.id);
		setEvaluator(e.evaluator_name);
		setEvalDate(e.evaluation_date);
		setAnswers(e.answers || {});
		setPti(applyRegisteredProfessional(hydratePTI(e.pti_data), registeredProfessionalName));
		setSessions({});
		setTab("PTI");
		toast.info(`Avaliação de ${new Date(e.evaluation_date).toLocaleDateString("pt-BR")} carregada`);
	};
	const upsertSession = async (item, patch) => {
		if (!patient) return;
		if (!evalId) {
			toast.error("Salve a avaliação antes de registrar sessões");
			return;
		}
		const key = itemKey(item);
		const next = {
			...sessions[key] ?? {
				item_key: key,
				area: item.area,
				age_range: item.age_range,
				item_num: item.num,
				session_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				acertos: 0,
				tentativas: 0,
				ajuda: "Independente"
			},
			...patch
		};
		setSessions((s) => ({
			...s,
			[key]: next
		}));
		const { data: session } = await supabase.auth.getUser();
		if (!session.user) return;
		await supabase.from("pei_sessions").insert({
			owner_id: session.user.id,
			evaluation_id: evalId,
			patient_id: patient.id,
			item_key: key,
			area: item.area,
			age_range: item.age_range,
			item_num: item.num,
			session_date: next.session_date,
			acertos: next.acertos,
			tentativas: next.tentativas,
			ajuda: next.ajuda
		});
	};
	const download = async () => {
		if (!patient) return;
		try {
			const { data: session } = await supabase.auth.getUser();
			const evaluatorName = evaluator.trim() || pti.professional?.trim() || session.user?.email || "Não informado";
			const sessionsForPdf = {};
			for (const [k, s] of Object.entries(sessions)) sessionsForPdf[k] = {
				item_key: k,
				acertos: s.acertos,
				tentativas: s.tentativas,
				ajuda: s.ajuda,
				sessions: 1
			};
			await generatePTIPdf({
				patient,
				patient_age: patientAge,
				evaluator_name: evaluatorName,
				evaluation_date: evalDate,
				answers,
				sessions: sessionsForPdf,
				pti
			});
			toast.success("PDF gerado");
		} catch (e) {
			console.error("[PTI PDF]", e);
			toast.error(`Falha ao gerar PDF: ${e?.message || e}`);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-8 text-muted-foreground",
		children: "Carregando…"
	});
	if (!patient) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-8",
		children: "Paciente não encontrado."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-20 border-b bg-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-2.5 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => navigate({ to: "/dashboard" }),
							className: "shrink-0 px-2 sm:px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4 sm:mr-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Pacientes"
							})]
						}),
						role === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "default",
							size: "sm",
							onClick: () => navigate({ to: "/admin" }),
							className: "shrink-0 px-2 sm:px-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 sm:mr-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Administração"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: "Portage"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm font-semibold",
									children: patient.name
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1.5 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden md:inline text-xs text-muted-foreground",
							children: [
								totalAnswered,
								"/",
								ITEMS.length,
								" itens"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: startNewEvaluation,
							className: "px-2 sm:px-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 sm:mr-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Nova avaliação"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "Novo"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: save,
							disabled: saving,
							className: "px-2 sm:px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4 sm:mr-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: saving ? "Salvando…" : "Salvar"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: download,
							className: "px-2 sm:px-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 sm:mr-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "PDF do PTI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "PDF"
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-header-strip",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1400px] items-center gap-4 px-3 py-1.5 text-primary-foreground sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] sm:text-xs font-bold uppercase tracking-widest",
							children: "PORTAGE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-xs opacity-90",
							children: "Avaliação e Plano de Ensino Individualizado"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden text-[11px] opacity-90 truncate",
							children: "Avaliação e PEI"
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-[1400px] px-3 py-4 sm:px-6 sm:py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 rounded-sm border border-[color:var(--color-sim)]/40 bg-[color:var(--color-sim)]/10 px-3 py-2 text-[11px] leading-snug text-[color:var(--color-sim)]",
					children: "TODOS OS DIREITOS RESERVADOS HAPVIDA NOTREDAME — PROIBIDO O RATEIO, A COMERCIALIZAÇÃO E A REPRODUÇÃO DESSE MATERIAL. PROPRIEDADE HAPVIDA NOTREDAME."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sheet mb-3 flex overflow-x-auto rounded-t-md border-b-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
							active: tab === "PTI",
							onClick: () => setTab("PTI"),
							children: "PTI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
							active: tab === "CONSOLIDADO",
							onClick: () => setTab("CONSOLIDADO"),
							children: "Consolidado"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
							active: tab === "PEI",
							onClick: () => setTab("PEI"),
							children: "PEI · Intervenção"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabButton, {
							active: tab === "EVOLUÇÃO",
							onClick: () => setTab("EVOLUÇÃO"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-3.5 w-3.5 sm:mr-1.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Evolução"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "Evol."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-auto hidden lg:flex items-center whitespace-nowrap px-3 text-[11px] uppercase tracking-widest text-muted-foreground",
							children: tab === "CONSOLIDADO" ? "áreas × faixas etárias" : tab === "PEI" ? "objetivos prioritários · registro de sessões" : "5 áreas de desenvolvimento"
						})
					]
				}),
				tab === "PTI" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PTIForm, {
					value: pti,
					onChange: setPti,
					patient,
					evaluator,
					evalDate,
					priorities,
					others
				}) : tab === "CONSOLIDADO" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsolidatedView, {
					stats,
					priorities: priorities.length,
					others: others.length
				}) : tab === "PEI" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeiView, {
					priorities,
					others,
					sessions,
					onChange: upsertSession,
					hasEval: !!evalId
				}) : tab === "EVOLUÇÃO" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvolutionView, {
					evaluations: allEvaluations,
					onSelect: loadEvaluation
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeSheet, {
					age: tab,
					answers,
					onAnswer: setAnswer
				})
			]
		})]
	});
}
function TabButton({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("whitespace-nowrap shrink-0 border-r px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wide transition", active ? "bg-primary text-primary-foreground" : "bg-paper text-foreground hover:bg-muted"),
		children
	});
}
function AgeSheet({ age, answers, onAnswer }) {
	const perArea = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		for (const a of AREAS) m.set(a, ITEMS.filter((i) => i.area === a && i.age_range === age));
		return m;
	}, [age]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sheet overflow-hidden rounded-b-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 lg:grid-cols-5",
				children: AREAS.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid-cell bg-primary px-3 py-2 text-center text-[11px] font-bold uppercase tracking-widest text-primary-foreground",
					children: AREA_TITLE[area]
				}, area))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 lg:grid-cols-5",
				children: AREAS.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-cell bg-muted px-3 py-1.5 text-[11px] font-semibold text-muted-foreground",
					children: [
						area === "DESENV MOTOR" ? "Desenvolvimento Motor" : area.charAt(0) + area.slice(1).toLowerCase(),
						" —",
						" ",
						ageLabel(age)
					]
				}, area))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 lg:grid-cols-5",
				children: AREAS.map((area) => {
					const items = perArea.get(area) || [];
					const answered = items.filter((i) => answers[itemKey(i)]).length;
					const points = items.reduce((sum, i) => {
						return sum + (scoreOf(answers[itemKey(i)]) ?? 0);
					}, 0);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid-cell flex flex-col bg-paper",
						children: [items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 text-xs italic text-muted-foreground",
							children: "Sem itens nesta faixa."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y",
							children: items.map((it) => {
								const key = itemKey(it);
								const cur = answers[key];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-1.5 text-xs leading-snug",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mr-1 font-mono text-[10px] text-muted-foreground",
											children: ["#", it.num]
										}), it.text]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-4 gap-1",
										children: ANSWERS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerChip, {
											value: a,
											active: cur === a,
											onClick: () => onAnswer(key, a)
										}, a))
									})]
								}, key);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex items-center justify-between border-t bg-muted/60 px-3 py-1.5 text-[10px] uppercase tracking-widest text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total de acertos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-foreground",
								children: [
									points.toString().replace(".", ","),
									" · ",
									answered,
									"/",
									items.length
								]
							})]
						})]
					}, area);
				})
			})
		]
	});
}
function AnswerChip({ value, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-sm border px-1.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition", active ? {
			Sim: "bg-sim text-sim-foreground border-sim",
			"Às vezes": "bg-asvezes text-asvezes-foreground border-asvezes",
			Não: "bg-nao text-nao-foreground border-nao",
			NA: "bg-na text-na-foreground border-na"
		}[value] : "border-border bg-paper text-foreground hover:bg-muted"),
		children: value
	});
}
function ConsolidatedView({ stats, priorities, others }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Objetivos prioritários (Às vezes)",
					value: priorities,
					tone: "warn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Demais objetivos (Não)",
					value: others,
					tone: "danger"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Áreas com pontuação",
					value: stats.filter((s) => s.answered > 0).length,
					tone: "ok"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sheet overflow-hidden rounded-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground",
					children: "Áreas de Desenvolvimento — % de acertos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted text-xs uppercase tracking-wide text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "grid-cell px-3 py-2 text-left",
								children: "Área"
							}), AGE_RANGES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "grid-cell px-3 py-2 text-center",
								children: ageLabel(a).replace(" anos", "").replace(" ano", "")
							}, a))] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "bg-paper",
							children: AREAS.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "grid-cell px-3 py-2 font-semibold whitespace-nowrap",
									children: AREA_TITLE[area]
								}), AGE_RANGES.map((age) => {
									const s = stats.find((x) => x.area === area && x.age === age);
									if (!s || !s.answered) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "grid-cell px-3 py-2 text-center text-muted-foreground",
										children: "—"
									}, age);
									const ok = s.percent >= 80;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: cn("grid-cell px-2 py-2 text-center font-mono text-sm font-bold", ok ? "bg-sim/25 text-foreground" : "bg-nao/20 text-foreground"),
										title: ok ? "≥ 80% — adequado" : "< 80% — priorizar",
										children: [s.percent, "%"]
									}, age);
								})]
							}, area))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4 border-t bg-muted/40 px-4 py-2 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-sm bg-sim/60" }), "≥ 80% desempenho adequado"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-sm bg-nao/50" }), "< 80% priorizar objetivos"]
					})]
				})
			]
		})]
	});
}
function Stat({ label, value, tone }) {
	const cls = {
		warn: "border-asvezes/40 bg-asvezes/10",
		danger: "border-nao/40 bg-nao/10",
		ok: "border-sim/40 bg-sim/10"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("sheet rounded-md p-4", cls),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-mono text-3xl font-bold",
			children: value
		})]
	});
}
function PeiView({ priorities, others, sessions, onChange, hasEval }) {
	const grouped = (0, import_react.useMemo)(() => {
		const byArea = /* @__PURE__ */ new Map();
		for (const a of AREAS) byArea.set(a, {
			priority: [],
			other: []
		});
		for (const it of priorities) byArea.get(it.area).priority.push(it);
		for (const it of others) byArea.get(it.area).other.push(it);
		return byArea;
	}, [priorities, others]);
	const totalPriority = priorities.length;
	const totalOther = others.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-sm border border-primary/30 bg-primary/5 px-3 py-2 text-[12px] text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Plano de Ensino Individualizado (PEI)." }),
					" Registre cada sessão de intervenção nos objetivos ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "prioritários" }),
					" (respostas ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Às vezes" }),
					") e nos",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " demais objetivos" }),
					" (respostas ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Não" }),
					"). O % de acertos é calculado automaticamente — ≥ 80% indica domínio do objetivo.",
					!hasEval && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-nao",
						children: "Salve a avaliação primeiro para poder registrar sessões."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Objetivos prioritários",
						value: totalPriority,
						tone: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Demais objetivos",
						value: totalOther,
						tone: "danger"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Sessões registradas",
						value: Object.keys(sessions).length,
						tone: "ok"
					})
				]
			}),
			AREAS.map((area) => {
				const g = grouped.get(area);
				if (!g.priority.length && !g.other.length) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sheet overflow-hidden rounded-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground",
							children: AREA_TITLE[area]
						}),
						g.priority.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeiGroup, {
							title: "Objetivos Prioritários (0,5)",
							items: g.priority,
							sessions,
							onChange,
							disabled: !hasEval
						}),
						g.other.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeiGroup, {
							title: "Demais Objetivos (0)",
							items: g.other,
							sessions,
							onChange,
							disabled: !hasEval
						})
					]
				}, area);
			}),
			totalPriority + totalOther === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sheet rounded-md p-6 text-center text-sm text-muted-foreground",
				children: "Ainda não há objetivos identificados. Responda a avaliação nas abas de faixa etária."
			})
		]
	});
}
function PeiGroup({ title, items, sessions, onChange, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b bg-muted px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground",
		children: [
			title,
			" · ",
			items.length
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[900px] text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-muted/60 text-[10px] uppercase tracking-wider text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "grid-cell px-2 py-1.5 text-left w-24",
						children: "Faixa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "grid-cell px-2 py-1.5 text-left",
						children: "Objetivo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "grid-cell px-2 py-1.5 text-left w-48",
						children: "Material"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "grid-cell px-2 py-1.5 text-left w-56",
						children: "Atividade"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "grid-cell px-2 py-1.5 text-center w-20",
						children: "Acertos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "grid-cell px-2 py-1.5 text-center w-20",
						children: "Tentativas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "grid-cell px-2 py-1.5 text-center w-16",
						children: "%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "grid-cell px-2 py-1.5 text-center w-32",
						children: "Ajuda"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
				className: "bg-paper",
				children: items.map((it) => {
					const key = itemKey(it);
					const s = sessions[key];
					const pct = s && s.tentativas > 0 ? Math.round(s.acertos / s.tentativas * 100) : null;
					const ok = pct !== null && pct >= 80;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "grid-cell px-2 py-1.5 text-[10px] font-semibold text-muted-foreground",
								children: ageLabel(it.age_range)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "grid-cell px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mr-1 font-mono text-[10px] text-muted-foreground",
									children: ["#", it.num]
								}), it.text]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "grid-cell px-2 py-1.5 text-[11px] text-muted-foreground",
								children: it.material || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "grid-cell px-2 py-1.5 text-[11px] text-muted-foreground",
								children: it.atividade || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "grid-cell px-1 py-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 0,
									disabled,
									value: s?.acertos ?? "",
									onChange: (e) => onChange(it, { acertos: Number(e.target.value) || 0 }),
									className: "h-7 w-full rounded-sm border border-border bg-paper px-1 text-center text-xs disabled:opacity-50"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "grid-cell px-1 py-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 0,
									disabled,
									value: s?.tentativas ?? "",
									onChange: (e) => onChange(it, { tentativas: Number(e.target.value) || 0 }),
									className: "h-7 w-full rounded-sm border border-border bg-paper px-1 text-center text-xs disabled:opacity-50"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: cn("grid-cell px-2 py-1.5 text-center font-mono font-bold", pct === null ? "text-muted-foreground" : ok ? "bg-sim/25" : "bg-nao/20"),
								children: pct === null ? "—" : `${pct}%`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "grid-cell px-1 py-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									disabled,
									value: s?.ajuda ?? "Independente",
									onChange: (e) => onChange(it, { ajuda: e.target.value }),
									className: "h-7 w-full rounded-sm border border-border bg-paper px-1 text-xs disabled:opacity-50",
									children: AJUDA_OPTIONS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: a,
										children: a
									}, a))
								})
							})
						]
					}, key);
				})
			})]
		})
	})] });
}
function PTIForm({ value, onChange, patient, evaluator, evalDate, priorities, others }) {
	const set = (k, v) => onChange({
		...value,
		[k]: v
	});
	const objectives = value.objectives ?? [];
	const behaviors = value.behavior_problems ?? [];
	const selectedDiagnoses = value.diagnoses ?? [];
	const otherDiagnosis = value.diagnoses_other || (!selectedDiagnoses.length ? value.diagnosis ?? "" : "");
	const updateDiagnoses = (nextDiagnoses, nextOtherDiagnosis = otherDiagnosis) => {
		onChange({
			...value,
			diagnoses: nextDiagnoses,
			diagnoses_other: nextOtherDiagnosis,
			diagnosis: resolveClinicalDiagnoses({
				diagnoses: nextDiagnoses,
				otherDiagnosis: nextOtherDiagnosis,
				legacyDiagnosis: value.diagnosis
			})
		});
	};
	const addDiagnosis = (diagnosis) => {
		if (!diagnosis || selectedDiagnoses.includes(diagnosis)) return;
		updateDiagnoses([...selectedDiagnoses, diagnosis]);
	};
	const removeDiagnosis = (diagnosis) => updateDiagnoses(selectedDiagnoses.filter((item) => item !== diagnosis));
	const setObj = (i, patch) => {
		const next = objectives.slice();
		next[i] = {
			...next[i],
			...patch
		};
		set("objectives", next);
	};
	const addObj = () => set("objectives", [...objectives, {
		objetivo: "",
		atividade: "",
		material: ""
	}]);
	const rmObj = (i) => set("objectives", objectives.filter((_, idx) => idx !== i));
	const setObjectivesFromCatalog = (selectedOptions) => {
		const next = appendUniqueObjectives(objectives, selectedOptions);
		const added = countPopulatedObjectives(next) - countPopulatedObjectives(objectives);
		if (!added) {
			toast.info("Os objetivos selecionados já constam no PTI.");
			return false;
		}
		set("objectives", next);
		toast.success(`${added} ${added === 1 ? "objetivo adicionado" : "objetivos adicionados"} ao PTI`);
		return true;
	};
	const setBeh = (i, v) => {
		const next = behaviors.slice();
		next[i] = v;
		set("behavior_problems", next);
	};
	const addBeh = () => set("behavior_problems", [...behaviors, ""]);
	const rmBeh = (i) => set("behavior_problems", behaviors.filter((_, idx) => idx !== i));
	const fillFromPortage = () => {
		const objs = priorities.slice(0, 12).map((it) => ({
			objetivo: it.text,
			atividade: it.atividade || "",
			material: it.material || ""
		}));
		if (!objs.length) {
			toast.error("Nenhum objetivo prioritário. Marque itens como 'Às vezes' na avaliação.");
			return;
		}
		set("objectives", objs);
		toast.success(`${objs.length} objetivos preenchidos a partir da avaliação`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-sm border border-primary/30 bg-primary/5 px-3 py-2 text-[12px]",
				children: [
					"Preencha os campos abaixo. Ao gerar o ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "PDF do PTI" }),
					", o documento sairá idêntico ao modelo institucional (Dados do paciente · História clínica · Objetivos por área · Comportamentos problemas · Considerações · Entrega/Assinatura).",
					others.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-1 text-muted-foreground",
						children: [
							"· ",
							others.length,
							" demais objetivos disponíveis"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sheet rounded-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground",
					children: "Dados do Paciente (complementares)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 p-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nome",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: patient.name,
								readOnly: true,
								className: "bg-muted"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Data de nascimento",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: patient.birth_date ?? "",
								readOnly: true,
								className: "bg-muted"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nome da mãe",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: value.mother_name ?? "",
								onChange: (e) => set("mother_name", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nome do pai",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: value.father_name ?? "",
								onChange: (e) => set("father_name", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Diagnóstico (CID)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "clinical-diagnosis-picker",
										className: "flex h-9 w-full rounded-sm border border-input bg-background px-3 py-1 text-sm shadow-xs",
										value: "",
										onChange: (event) => addDiagnosis(event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Adicionar diagnóstico CID ao registro"
										}), CLINICAL_DIAGNOSIS_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: group.label,
											children: group.options.map((diagnosis) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: diagnosis,
												children: diagnosis
											}, diagnosis))
										}, group.label))]
									}),
									selectedDiagnoses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1.5",
										"aria-label": "Diagnósticos selecionados",
										children: selectedDiagnoses.map((diagnosis) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs text-foreground",
											children: [diagnosis, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `Remover ${diagnosis}`,
												onClick: () => removeDiagnosis(diagnosis),
												className: "font-bold text-primary",
												children: "×"
											})]
										}, diagnosis))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "clinical-diagnoses-other",
										placeholder: "Outro(s) diagnóstico(s) ou CID(s), se necessário",
										value: otherDiagnosis,
										onChange: (event) => updateDiagnoses(selectedDiagnoses, event.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] leading-snug text-muted-foreground",
										children: "Selecione quantos diagnósticos forem necessários e/ou informe outros já definidos em laudo ou prontuário. O catálogo apoia somente o registro clínico."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Início de implementação",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: value.start_date ?? "",
								onChange: (e) => set("start_date", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Profissional responsável",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: evaluator || "Seu nome",
								value: value.professional ?? "",
								onChange: (e) => set("professional", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Reavaliação dos objetivos",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: value.revaluation ?? "",
								onChange: (e) => set("revaluation", e.target.value),
								placeholder: "Semestral"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalHistorySection, {
				value,
				onChange,
				patient
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sheet rounded-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 border-b bg-primary px-4 py-2 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold uppercase tracking-widest",
								children: "Objetivos por Área"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-primary-foreground/95",
								children: "Planejamento terapêutico por especialidade"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ml-auto flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: fillFromPortage,
									type: "button",
									children: [
										"Da avaliação (",
										priorities.length,
										")"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: addObj,
									type: "button",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " Objetivo"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjectiveCatalogPicker, {
						existingObjectives: objectives,
						onAdd: setObjectivesFromCatalog
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y",
						children: [objectives.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 p-4 sm:grid-cols-[1fr_1fr_1fr_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: `Objetivo ${i + 1}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 3,
										value: o.objetivo,
										onChange: (e) => setObj(i, { objetivo: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Atividade",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 3,
										value: o.atividade,
										onChange: (e) => setObj(i, { atividade: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Material",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 3,
										value: o.material,
										onChange: (e) => setObj(i, { material: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex sm:items-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => rmObj(i),
										type: "button",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-nao" })
									})
								})
							]
						}, i)), !objectives.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-6 text-center text-sm text-muted-foreground",
							children: "Escolha um template acima, use os objetivos da avaliação Portage ou clique em \"Objetivo\"."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sheet rounded-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 border-b bg-primary px-4 py-2 text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold uppercase tracking-widest",
						children: "Comportamentos Problemas Listados"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplatePicker, {
							label: "Template",
							options: BEHAVIORS_TEMPLATES.map((t) => ({
								id: t.id,
								label: t.label,
								summary: t.summary
							})),
							onPick: (id) => {
								const t = BEHAVIORS_TEMPLATES.find((x) => x.id === id);
								if (t) {
									set("behavior_problems", [...t.items]);
									toast.success(`Template "${t.label}" aplicado`);
								}
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: addBeh,
							type: "button",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " Item"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 p-4",
					children: [behaviors.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: b,
							onChange: (e) => setBeh(i, e.target.value),
							placeholder: `Comportamento ${i + 1}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => rmBeh(i),
							type: "button",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-nao" })
						})]
					}, i)), !behaviors.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: "Escolha um template acima ou adicione itens."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sheet rounded-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 border-b bg-primary px-4 py-2 text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold uppercase tracking-widest",
						children: "Considerações e Plano de Intervenção"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplatePicker, {
							label: "Template",
							options: CONCLUSION_TEMPLATES.map((t) => ({
								id: t.id,
								label: t.label,
								summary: t.summary
							})),
							onPick: (id) => {
								const t = CONCLUSION_TEMPLATES.find((x) => x.id === id);
								if (t) {
									set("conclusion", t.text);
									toast.success(`Template "${t.label}" aplicado`);
								}
							}
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 8,
						value: value.conclusion ?? "",
						onChange: (e) => set("conclusion", e.target.value),
						placeholder: "Escolha um template acima ou deixe em branco para usar o texto padrão institucional."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Referência bibliográfica",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: value.reference ?? "",
							onChange: (e) => set("reference", e.target.value),
							placeholder: "Williams, L. C. A., & Aiello, A. L. R. (2001)..."
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sheet rounded-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground",
					children: "Entrega - Devolutiva e Orientação"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 p-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Data da devolutiva",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "date",
							value: value.delivery_date ?? evalDate,
							onChange: (e) => set("delivery_date", e.target.value)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Responsável",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: value.delivery_responsible ?? "",
							onChange: (e) => set("delivery_responsible", e.target.value),
							placeholder: "Nome de quem entrega a devolutiva"
						})
					})]
				})]
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
			children: label
		}), children]
	});
}
function ObjectiveCatalogPicker({ existingObjectives, onAdd }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");
	const visibleAreas = (0, import_react.useMemo)(() => PTI_OBJECTIVE_AREAS.map((area) => ({
		area,
		options: OBJECTIVE_CATALOG.filter((option) => option.area === area)
	})), []).map(({ area, options }) => ({
		area,
		options: options.filter((option) => {
			if (!normalizedSearch) return true;
			return [
				option.objetivo,
				option.atividade,
				option.material,
				option.templateLabel,
				option.templateSummary
			].join(" ").toLocaleLowerCase("pt-BR").includes(normalizedSearch);
		})
	})).filter(({ options }) => options.length > 0);
	const addObjective = (option) => {
		if (!isObjectiveIncluded(existingObjectives, option)) onAdd([option]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b bg-muted/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-bold text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-4 w-4 text-primary" }), "Catálogo de objetivos clínicos"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs leading-relaxed text-muted-foreground",
					children: "Marque um objetivo para incluí-lo automaticamente no PTI. Objetivos já incluídos permanecem marcados."
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: search,
					onChange: (event) => setSearch(event.target.value),
					className: "pl-9",
					placeholder: "Buscar por objetivo, atividade, material ou subtema",
					"aria-label": "Buscar objetivos clínicos"
				})]
			})]
		}), visibleAreas.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "multiple",
			className: "border-t bg-paper",
			defaultValue: [],
			children: visibleAreas.map(({ area, options }) => {
				const selectedInArea = options.filter((option) => isObjectiveIncluded(existingObjectives, option)).length;
				const templates = Array.from(new Set(options.map((option) => option.templateId))).map((templateId) => ({
					id: templateId,
					label: options.find((option) => option.templateId === templateId)?.templateLabel ?? "",
					summary: options.find((option) => option.templateId === templateId)?.templateSummary ?? "",
					options: options.filter((option) => option.templateId === templateId)
				}));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: area,
					className: "border-b-0 border-t first:border-t-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "px-4 py-3 no-underline hover:bg-muted/50 hover:no-underline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-extrabold uppercase tracking-widest text-foreground",
									children: area
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary",
									children: [options.length, " objetivos"]
								}),
								selectedInArea > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-sim/15 px-2 py-0.5 text-[10px] font-bold text-foreground",
									children: [selectedInArea, " incluído(s)"]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "px-4 pb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "multiple",
							className: "space-y-2",
							defaultValue: [],
							children: templates.map((template) => {
								const selectedInTemplate = template.options.filter((option) => isObjectiveIncluded(existingObjectives, option)).length;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: template.id,
									className: "overflow-hidden rounded-sm border bg-muted/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "px-3 py-2.5 no-underline hover:bg-primary/5 hover:no-underline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex min-w-0 items-center gap-2 text-left",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate text-xs font-bold text-foreground",
													children: template.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary",
													children: template.options.length
												}),
												selectedInTemplate > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "shrink-0 rounded-full bg-sim/15 px-2 py-0.5 text-[10px] font-bold text-foreground",
													children: [selectedInTemplate, " incluído(s)"]
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
										className: "pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-t bg-muted/50 px-3 py-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] leading-relaxed text-muted-foreground",
												children: template.summary
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "divide-y bg-paper",
											children: template.options.map((option) => {
												const checked = isObjectiveIncluded(existingObjectives, option);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													htmlFor: option.id,
													className: cn("flex cursor-pointer gap-3 px-3 py-3 transition hover:bg-primary/5", checked && "bg-primary/5"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: option.id,
														type: "checkbox",
														checked,
														onChange: () => addObjective(option),
														disabled: checked,
														className: "mt-1 h-4 w-4 shrink-0 accent-primary"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "min-w-0",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "block text-xs font-semibold leading-relaxed text-foreground",
																children: option.objetivo
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "mt-1 block text-[11px] leading-relaxed text-muted-foreground",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Atividade:" }),
																	" ",
																	option.atividade
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "mt-0.5 block text-[11px] leading-relaxed text-muted-foreground",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Material:" }),
																	" ",
																	option.material
																]
															})
														]
													})]
												}, option.id);
											})
										})]
									})]
								}, template.id);
							})
						})
					})]
				}, area);
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t bg-paper px-4 py-8 text-center text-sm text-muted-foreground",
			children: "Nenhum objetivo encontrado para a busca informada."
		})]
	});
}
function TemplatePicker({ label, options, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		className: "h-8 rounded-sm border border-primary-foreground/30 bg-primary-foreground/10 px-2 text-xs font-medium text-primary-foreground hover:bg-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 max-w-[220px]",
		value: "",
		onChange: (e) => {
			const v = e.target.value;
			if (v) {
				onPick(v);
				e.target.value = "";
			}
		},
		title: label,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
			value: "",
			className: "text-foreground",
			children: ["✨ ", label]
		}), (() => {
			const groups = {};
			const others = [];
			options.forEach((o) => {
				const area = o.area;
				if (area) {
					if (!groups[area]) groups[area] = [];
					groups[area].push(o);
				} else others.push(o);
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				Object.entries(groups).map(([area, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
					label: area,
					className: "text-foreground font-bold",
					children: items.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: o.id,
						className: "text-foreground font-normal",
						title: o.summary,
						children: o.label
					}, o.id))
				}, area)),
				others.length > 0 && Object.keys(groups).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
					label: "Outros",
					className: "text-foreground font-bold",
					children: others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: o.id,
						className: "text-foreground font-normal",
						title: o.summary,
						children: o.label
					}, o.id))
				}),
				Object.keys(groups).length === 0 && others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: o.id,
					className: "text-foreground",
					title: o.summary,
					children: o.label
				}, o.id))
			] });
		})()]
	});
}
function EvolutionView({ evaluations, onSelect }) {
	const chartData = (0, import_react.useMemo)(() => {
		return [...evaluations].sort((a, b) => new Date(a.evaluation_date).getTime() - new Date(b.evaluation_date).getTime()).map((e) => {
			const stats = computeStats(e.answers || {});
			const row = {
				data: new Date(e.evaluation_date).toLocaleDateString("pt-BR"),
				rawDate: e.evaluation_date,
				id: e.id
			};
			for (const area of AREAS) {
				const areaStats = stats.filter((s) => s.area === area && s.answered > 0);
				row[area] = areaStats.length ? Math.round(areaStats.reduce((sum, s) => sum + s.percent, 0) / areaStats.length) : 0;
			}
			return row;
		});
	}, [evaluations]);
	const areaColors = {
		SOCIALIZAÇÃO: "#F97316",
		LINGUAGEM: "#3B82F6",
		COGNIÇÃO: "#10B981",
		AUTOCUIDADOS: "#8B5CF6",
		"DESENV MOTOR": "#EF4444"
	};
	if (evaluations.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sheet rounded-md p-8 text-center text-sm text-muted-foreground",
		children: "Nenhuma avaliação salva ainda. Preencha e salve a primeira avaliação para acompanhar a evolução."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Total de avaliações",
						value: evaluations.length,
						tone: "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Primeira avaliação",
						value: evaluations.length,
						tone: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Última avaliação",
						value: evaluations.length,
						tone: "ok"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sheet overflow-hidden rounded-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground",
					children: "Evolução por área (% de acertos médio)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-80 w-full p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: chartData,
							margin: {
								top: 8,
								right: 16,
								bottom: 8,
								left: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									className: "stroke-muted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "data",
									tick: { fontSize: 11 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									domain: [0, 100],
									tick: { fontSize: 11 },
									unit: "%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										fontSize: 12,
										borderRadius: 6
									},
									formatter: (value, name) => [`${value}%`, name]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 12 } }),
								AREAS.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: area,
									stroke: areaColors[area],
									strokeWidth: 2,
									dot: { r: 3 },
									activeDot: { r: 5 },
									name: AREA_TITLE[area]
								}, area))
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sheet overflow-hidden rounded-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground",
					children: "Histórico de avaliações"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted text-xs uppercase tracking-wide text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "grid-cell px-4 py-2 text-left",
									children: "Data"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "grid-cell px-4 py-2 text-left",
									children: "Avaliador(a)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "grid-cell px-4 py-2 text-left",
									children: "Idade do paciente"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "grid-cell px-4 py-2 text-center",
									children: "% média"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "grid-cell px-4 py-2 text-center",
									children: "Itens respondidos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-2 text-right",
									children: "Ação"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "bg-paper",
							children: evaluations.map((e) => {
								const stats = computeStats(e.answers || {});
								const answered = stats.reduce((sum, s) => sum + s.answered, 0);
								const total = stats.reduce((sum, s) => sum + s.total, 0);
								const avg = stats.filter((s) => s.answered > 0).length > 0 ? Math.round(stats.filter((s) => s.answered > 0).reduce((sum, s) => sum + s.percent, 0) / stats.filter((s) => s.answered > 0).length) : 0;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t hover:bg-muted/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "grid-cell px-4 py-3 whitespace-nowrap",
											children: new Date(e.evaluation_date).toLocaleDateString("pt-BR")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "grid-cell px-4 py-3",
											children: e.evaluator_name || "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "grid-cell px-4 py-3",
											children: e.patient_age || "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "grid-cell px-4 py-3 text-center font-mono font-bold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: cn("rounded-sm px-2 py-0.5", avg >= 80 ? "bg-sim/25" : "bg-nao/20"),
												children: [avg, "%"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "grid-cell px-4 py-3 text-center",
											children: [
												answered,
												"/",
												total
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												onClick: () => onSelect(e),
												className: "text-primary",
												children: "Carregar"
											})
										})
									]
								}, e.id);
							})
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { PatientPage as component };
