# 🏊‍♂️ JM Piscinas - Landing Page Interativa

[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-Production-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

Landing page moderna, acessível e de alta performance desenvolvida para a **JM Piscinas**, empresa especializada em tratamento químico, decantação, recuperação de água verde e manutenção preventiva de piscinas no Distrito Federal (Arniqueiras, Park Way, Vicente Pires, Guará e região).

---

## ✨ Principais Funcionalidades

- 🎡 **Carrossel 3D Coverflow Interativo:** Palco tridimensional com perspectiva espacial (`perspective`), rotação de cartões em múltiplos ângulos, reflexo no piso (`-webkit-box-reflect`), barra de rolagem 3D sincronizada e suporte a gestos de arrasto por mouse e toque móvel.
- ⚡ **Carregamento e Adaptação Dinâmica:** As fotos dos serviços são importadas automaticamente da pasta `src/assets/carrossel/` via `import.meta.glob`, adaptando-se a qualquer quantidade de imagens com acervo cíclico de dicas técnicas.
- 📸 **Pipeline de Aprimoramento Digital:** Ferramenta integrada (`npm run photos:enhance`) para otimização de nitidez, contraste adaptativo (CLAHE) e realce da cor azul da água com codificação MozJPEG. Veja mais em [`foto.md`](foto.md).
- ♿ **Acessibilidade Completa (A11y):** Implementação de navegação por teclado (teclas `Tab` e `Esc`), rótulos `aria-label`, atributos de foco e modais acessíveis utilizando componentes headless do **Radix UI Dialog**.
- 💬 **Canal Direto de Conversão:** Botão flutuante para contato imediato via WhatsApp e atalho para a seção de contato com scroll suave.
- 🏢 **Seção Institucional:** Apresentação da empresa, histórico de mais de 20 anos de experiência, diferenciais técnicos e cidades atendidas.
- 🐳 **Pronto para Deploy com Docker & Nginx:** Container de produção otimizado com servidor Nginx Alpine, compressão Gzip e cache de longa duração para ativos estáticos. Veja mais em [`docker.md`](docker.md).

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia | Versão | Descrição |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | 19.3 | Construção de interfaces reativas e modulares baseadas em componentes |
| **Build Tool** | [Vite](https://vitejs.dev/) | 8.3 | Ambiente de compilação rápido com Hot Module Replacement |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | 4.3 | Framework utilitário moderno para layout responsivo |
| **3D & Animações** | CSS 3D Transforms | Native | Perspectiva tridimensional, rotações espaciais e aceleração por GPU |
| **Acessibilidade** | [Radix UI Dialog](https://www.radix-ui.com/) | 1.1 | Primitivas headless para modais acessíveis |
| **Ícones** | [React Icons](https://react-icons.github.io/react-icons/) | 5.7 | Conjunto abrangente de ícones vetoriais em SVG |
| **Processamento de Imagens** | [Sharp](https://sharp.pixelplumbing.com/) | 0.35 | Processamento digital de fotos em lote com libvips e MozJPEG |
| **Servidor Web** | [Nginx Alpine](https://hub.docker.com/_/nginx) | Latest | Servidor web leve para entrega dos arquivos compilados |
| **Containers** | [Docker Compose](https://docs.docker.com/compose/) | Latest | Orquestração do ambiente de produção e deploy |

---

## 📁 Estrutura do Projeto

```text
Landing-Page-Interativa-JR-Piscinas/
├── public/                 # Arquivos estáticos servidos diretamente (favicons, etc.)
├── src/
│   ├── assets/             # Imagens da aplicação, logotipos e QR Code
│   │   └── carrossel/      # Galeria de fotos numeradas (piscina-01 a piscina-44)
│   ├── components/         # Componentes modulares e reutilizáveis
│   │   ├── botaoFlutuante/ # Botão flutuante para atalho de contato
│   │   ├── carrossel/      # Componente visual e acessível do carrossel
│   │   ├── cartao/         # Cartão institucional e história da empresa
│   │   ├── contato/        # Seção de canais de contato e atendimento
│   │   ├── menu/           # Cabeçalho com logo e links de navegação
│   │   └── rodape/         # Rodapé institucional e créditos
│   ├── data/               # Dados estáticos (dadosPadrao.js, slides.js, contatoData.js)
│   ├── hooks/              # Custom Hooks React (useCarrossel.js)
│   ├── App.jsx             # Estrutura principal da Landing Page
│   ├── main.jsx            # Ponto de montagem no DOM
│   └── index.css           # Estilos globais e importação do Tailwind
├── Dockerfile              # Receita Multi-stage de compilação e servidor Nginx
├── docker-compose.yml      # Configuração do container de produção (porta 3000:80)
├── nginx.conf              # Configuração Nginx com Gzip e regras de cache
├── package.json            # Dependências e scripts de execução
├── vite.config.js          # Configuração do Vite e Tailwind
└── README.md               # Documentação principal do projeto
```

---

## 🚀 Como Executar

### 1. Modo Local (Recomendado para Desenvolvimento)

Pré-requisito: [Node.js](https://nodejs.org/) versão 20 ou superior instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento com Hot-Reload
npm run dev
```

Acesse no navegador: `http://localhost:3000`

---

### 2. Modo Container com Docker (Pronto para Produção e Deploy)

Pré-requisito: [Docker Desktop](https://www.docker.com/products/docker-desktop/) em execução.

```bash
# 1. Construir a imagem e subir o container em segundo plano
npm run docker:up

# 2. Acompanhar os logs do servidor Nginx
npm run docker:logs

# 3. Parar e remover o container
npm run docker:down
```

Acesse no navegador: `http://localhost:3000`

---

### 3. Compilação Manual para Produção

```bash
# Gera os arquivos estáticos otimizados na pasta dist/
npm run build

# Pré-visualiza localmente os arquivos compilados da dist/
npm run preview
```

---

## 📚 Documentação Complementar

- 🐳 [Guia de Docker e Produção](docker.md)
- 🚀 [Convenções de Commits e Boas Práticas](commit.md)
- 📁 [Guia de Arquitetura e Estrutura de Pastas](estrutura_de_pastas.md)
- 🎨 [Guia de Ícones Utilizados](icones.md)

---

## 👨‍💻 Desenvolvedor & Créditos

Projeto desenvolvido com foco em excelência visual, performance e acessibilidade para alavancar os serviços da **JM Piscinas**.