# Landing Page Interativa - JR Piscinas

Landing page moderna e interativa desenvolvida com **React**, **Vite**, **Tailwind CSS** e containerizada com **Docker**.

---

## 📚 Guias do Projeto

- 🐳 [Guia de Docker e Desenvolvimento Local](docker.md)
- 🚀 [Guia de Commits e Deploy Contínuo na Vercel](commit.md)
- 📁 [Estrutura de Pastas e Componentes](estrutura_de_pastas.md)
- 🎨 [Guia de Ícones Utilizados](icones.md)

---

## 🚀 Como Executar

### 1. Executando com Docker (Recomendado)

Certifique-se de que o **Docker Desktop** esteja aberto no seu Windows:

```bash
# Modo Desenvolvimento com Hot-Reload (http://localhost:3000)
npm run docker:dev

# Modo Produção com Servidor Nginx (http://localhost:3000)
npm run docker:prod

# Encerrar containers
npm run docker:down
```

---

### 2. Executando Localmente (Node.js)

Caso prefira rodar diretamente na máquina sem containers:

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build
```

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **Vite 8**
- **Tailwind CSS 4**
- **Radix UI Dialog**
- **Embla Carousel**
- **React Icons**
- **Docker & Nginx**
# Landing-Page-Interativa---JR-Piscinas