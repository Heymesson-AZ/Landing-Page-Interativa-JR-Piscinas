// src/data/slides.js
// Dados e imagens do carrossel da JM Piscinas

// 🚀 Carrega todas as imagens de uma vez em ordem alfabética (piscina-01 a piscina-44)
const imagens = import.meta.glob("../assets/carrossel/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const listaDeFotos = Object.values(imagens);

// 44 Legendas e Dicas exclusivas correspondentes a cada imagem
const informacoes = [
  {
    legenda: "Tratamento Químico e Correção de pH",
    dica: "Equilíbrio rigoroso de cloro, alcalinidade e pH para água cristalina e segura",
  },
  {
    legenda: "Aspiração do Fundo e Limpeza de Sedimentos",
    dica: "Remoção minuciosa de poeira e resíduos decantados no fundo da piscina",
  },
  {
    legenda: "Recuperação Especializada de Água Verde",
    dica: "Tratamento de choque e decantação que devolve o azul perfeito sem trocar a água",
  },
  {
    legenda: "Escovação Cuidadosa de Bordas e Paredes",
    dica: "Eliminação de biofilme e algas incrustadas nas paredes e rejuntes",
  },
  {
    legenda: "Cristalização e Clarificação de Alta Performance",
    dica: "Aplicação de floculantes que aglomeram micropartículas para máxima transparência",
  },
  {
    legenda: "Manutenção Preventiva Semanal",
    dica: "Visitas periódicas planejadas para garantir água sempre própria para banho",
  },
  {
    legenda: "Higienização e Troca de Areia do Filtro",
    dica: "Substituição do elemento filtrante para retenção de 100% das impurezas",
  },
  {
    legenda: "Revisão e Manutenção da Motobomba",
    dica: "Verificação de vazamentos, ruídos e capacidade de sucção do sistema",
  },
  {
    legenda: "Tratamento de Choque com Cloro Ativo",
    dica: "Desinfecção profunda para eliminar bactérias após chuvas fortes ou uso intenso",
  },
  {
    legenda: "Ajuste Fino de Alcalinidade Total",
    dica: "Estabilização da água entre 80 e 120 ppm para evitar variações bruscas de pH",
  },
  {
    legenda: "Limpeza e Desobstrução de Skimmers",
    dica: "Esvaziamento do cesto coletor de folhas e partículas suspensas na superfície",
  },
  {
    legenda: "Peneiração de Superfície",
    dica: "Retirada ágil de folhas, insetos e galhos antes que afundem e decomponham",
  },
  {
    legenda: "Aplicação de Algicida Preventivo e de Choque",
    dica: "Fórmula concentrada livre de cobre que não mancha o revestimento da piscina",
  },
  {
    legenda: "Aspiração ao Esgoto (Dreno)",
    dica: "Técnica aplicada para descartar resíduos densos sem sobrecarregar a areia do filtro",
  },
  {
    legenda: "Cuidados Especiais para Piscinas de Fibra",
    dica: "Produtos específicos para preservar o brilho e a textura do gel coat",
  },
  {
    legenda: "Manutenção em Piscinas de Alvenaria e Pastilhas",
    dica: "Atenção redobrada aos rejuntes onde algas costumam se fixar",
  },
  {
    legenda: "Tratamento em Piscinas de Vinil",
    dica: "Controle químico balanceado para evitar ressecamento e desbotamento da manta",
  },
  {
    legenda: "Decantação Profunda de Partículas",
    dica: "Processo que precipita a sujeira em suspensão para o fundo em poucas horas",
  },
  {
    legenda: "Eliminação de Oleosidade e Protetor Solar",
    dica: "Degradação enzimática que evita a formação de bordas escuras e pegajosas",
  },
  {
    legenda: "Prevenção contra Proliferação de Mosquitos",
    dica: "Água tratada e clorada não permite a reprodução do mosquito da dengue",
  },
  {
    legenda: "Medição de Cloro Livre e Cloro Total",
    dica: "Garantia de ação desinfetante ativa sem gerar cheiro forte de cloramina",
  },
  {
    legenda: "Proteção Térmica e Cuidados com Capas",
    dica: "Higienização de capas térmicas para evitar o acúmulo de sujeira externa",
  },
  {
    legenda: "Desinfecção com Cloro Granulado Estabilizado",
    dica: "Liberação gradual que mantém o residual de cloro mesmo sob sol intenso de Brasília",
  },
  {
    legenda: "Limpeza Pós-Chuva e Correção de Turbidez",
    dica: "A chuva altera o pH rapidamente; corrigimos os índices no mesmo dia",
  },
  {
    legenda: "Recuperação Pós-Festa e Eventos",
    dica: "Restauração rápida da clareza e esterilização após grande fluxo de banhistas",
  },
  {
    legenda: "Regulagem dos Registros e Válvulas",
    dica: "Calibração dos fluxos de aspiração, retorno, hidromassagem e cascata",
  },
  {
    legenda: "Retrolavagem do Filtro (Backwash)",
    dica: "Limpeza interna periódica da areia para restaurar o fluxo ideal de filtragem",
  },
  {
    legenda: "Verificação de Sucção e Ralo de Fundo",
    dica: "Garantia de segurança e fluxo contínuo de circulação de água",
  },
  {
    legenda: "Brilho Espelhado e Água Saudável",
    dica: "Polimento óptico da água que destaca a cor natural do revestimento",
  },
  {
    legenda: "Tratamento em Piscinas Aquecidas",
    dica: "Em temperaturas mais altas, o cloro evapora mais rápido e exige dosagem ajustada",
  },
  {
    legenda: "Remoção de Manchas Metálicas e Minerais",
    dica: "Uso de sequestrantes de metais para tratar águas de poço artesiano",
  },
  {
    legenda: "Manutenção em Residências de Arniqueiras e Park Way",
    dica: "Atendimento personalizado e pontual com cronograma fixo de visitas",
  },
  {
    legenda: "Limpeza de Piscinas em Vicente Pires e Guará",
    dica: "Profissional de confiança com mais de 20 anos de experiência na região",
  },
  {
    legenda: "Tratamento para Piscinas com Cascata e Hidro",
    dica: "A aeração da cascata eleva o pH; fazemos a compensação precisa",
  },
  {
    legenda: "Desincrustação Química de Bordas",
    dica: "Detergentes biodegradáveis que limpam sem alterar a composição química da água",
  },
  {
    legenda: "Estabilização de Água Cristalina",
    dica: "Manutenção do residual ideal de desinfetante sem ressecar a pele e os olhos",
  },
  {
    legenda: "Inspeção dos Bicos de Retorno e Hidro",
    dica: "Direcionamento correto do fluxo para circulação uniforme em todos os cantos",
  },
  {
    legenda: "Controle de Dureza Cálcica",
    dica: "Equilíbrio de cálcio para proteger motores, aquecedores e tubulações",
  },
  {
    legenda: "Recuperação de Piscinas Abandonadas",
    dica: "Tratamento intensivo em etapas sem necessidade de esvaziamento total",
  },
  {
    legenda: "Higienização Completa com EPIs e Segurança",
    dica: "Manuseio responsável de produtos químicos seguindo normas técnicas",
  },
  {
    legenda: "Aspiração Manual com Mangueira Especial",
    dica: "Cuidado absoluto para não riscar o fundo de fibra ou descolar pastilhas",
  },
  {
    legenda: "Preparação da Piscina para o Final de Semana",
    dica: "Água 100% pronta, transparente e desinfectada para o lazer de toda a família",
  },
  {
    legenda: "Controle e Prevenção de Espuma na Água",
    dica: "Aplicação de antiespumantes específicos para manter o aspecto limpo",
  },
  {
    legenda: "Compromisso JM Piscinas: Confiança e Qualidade",
    dica: "Mais de 20 anos cuidando do seu lazer com dedicação e transparência",
  },
];

export const slidesPadrao = listaDeFotos.map((foto, index) => ({
  id: index + 1,
  imagem: foto,
  legenda: informacoes[index]?.legenda || `Serviço ${index + 1}`,
  dica: informacoes[index]?.dica || "Manutenção profissional de piscinas",
}));