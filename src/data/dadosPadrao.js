import logo from "../assets/logo.png";

export const cartaoPadrao = {
  nomeEmpresa: "JM Piscinas",
  profissional: "Sr. José Mauro",
  segmento: "Limpeza & Manutenção de Piscinas",
  descricao:
    "Especialista em limpeza física e tratamento químico completo de piscinas residenciais e comerciais. Foco na conservação da água, eliminação de impurezas e procedimentos seguros no manuseio de químicos para o bem-estar da sua família.",
  cidades: ["Arniqueiras", "Park Way", "Vicente Pires", "Guará"],
  anoFundacao: "2015",
  diferenciais: [
    "Tratamento químico com equilíbrio preciso de pH, cloro e alcalinidade",
    "Uso de ferramentas profissionais e EPIs para total segurança",
    "Atendimento pontual com visitas periódicas ou avulsas",
    "Profissional capacitado, transparente e de confiança na comunidade",
  ],
  logoUrl: logo,
};

// Mantemos empresaPadrao como referência equivalente
export const empresaPadrao = cartaoPadrao;
