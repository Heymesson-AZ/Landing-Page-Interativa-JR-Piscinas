import logo from "../assets/logo.png";

export const cartaoPadrao = {
  nomeEmpresa: "JM Piscinas",
  profissional: " José Mauro",
  segmento: "Limpeza & Manutenção de Piscinas",
  descricao: [
    "A JM Piscinas nasceu com o propósito de oferecer serviços de qualidade, cuidado e responsabilidade, contando com mais de 20 anos de experiência no segmento de piscinas.",
    " Atuamos com limpeza e manutenção de piscinas, proporcionando mais praticidade aos nossos clientes e garantindo um ambiente limpo, agradável e pronto para os momentos de lazer.",
  ],

  cidades: ["Arniqueiras", "Park Way", "Vicente Pires", "Guará"],
  anoFundacao: "2001",
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
