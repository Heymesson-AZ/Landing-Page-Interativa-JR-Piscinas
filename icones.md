# 🎨 Guia de Ícones no Projeto (`react-icons`)

Este documento explica como a biblioteca **`react-icons`** foi integrada à Landing Page da **JM Piscinas**, substituindo emojis e caracteres genéricos por **ícones vetoriais SVG profissionais, acessíveis e otimizados**.

---

## 📦 1. O que é o `react-icons`?

O **`react-icons`** é o padrão da comunidade React para inclusão de ícones. Ele compila coleções famosas (FontAwesome, Material Design, Bootstrap Icons, Feather, etc.) em **componentes React nativos baseados em SVG**.

### 🌟 Principais Vantagens:

1. **Vetoriais e Nítidos (SVG puro):** Nunca perdem qualidade nem pixelizam, mesmo em telas de alta densidade (Retina/4K).
2. **Alta Performance (Tree Shaking):** O bundler (Vite) inclui no pacote final **apenas os ícones que foram explicitamente importados**, sem carregar bibliotecas inteiras na memória.
3. **Estilização Direta via CSS:** Podem ser coloridos com `color: ...`, redimensionados com `size={...}` ou fontes CSS, e animados com transições suaves de hover.
4. **Acessibilidade Aprimorada:** Permitem controle total de atributos ARIA (`aria-hidden="true"` para ícones decorativos e `aria-label` para botões interativos).

---

## 💻 2. Instalação

A biblioteca é instalada via npm:

```bash
npm install react-icons
```

---

## 🧩 3. Como Importar e Usar

Os ícones são organizados em subpastas de acordo com a família visual. No projeto da JM Piscinas, utilizamos principalmente a família **FontAwesome 5/6 (`react-icons/fa`)**:

```jsx
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export function MeuBotao() {
  return (
    <button type="button">
      {/* size define o tamanho em pixels e aria-hidden esconde de leitores de tela quando há texto */}
      <FaWhatsapp size={24} aria-hidden="true" />
      <span>Falar no WhatsApp</span>
    </button>
  );
}
```

---

## 🗺️ 4. Mapeamento de Ícones Utilizados no Projeto

Todos os emojis soltos foram substituídos por ícones semânticos da biblioteca:

| Componente               | Ícone | Nome no `react-icons` |       Substituiu        | Função Visual e Semântica                                  |
| :----------------------- | :---: | :-------------------- | :---------------------: | :--------------------------------------------------------- |
| **`BotaoFlutuante.jsx`** |  💬   | `FaWhatsapp`          |       Emoji `💬`        | Botão flutuante fixo no canto da tela para contato rápido. |
| **`Menu.jsx`**           |  🏠   | `FaHome`              |            —            | Link de navegação para a seção inicial.                    |
| **`Menu.jsx`**           |  🖼️   | `FaImages`            |            —            | Link para a galeria de fotos do carrossel.                 |
| **`Menu.jsx`**           |  ℹ️   | `FaInfoCircle`        |            —            | Link para a seção institucional sobre a empresa.           |
| **`Menu.jsx`**           |  📞   | `FaPhoneAlt`          |            —            | Link direto para a seção de contato.                       |
| **`Menu.jsx`**           |  👔   | `FaUserTie`           |            —            | Link de identificação da autoria do desenvolvedor.         |
| **`Carrossel.jsx`**      |   ◀   | `FaChevronLeft`       | Texto `"Anterior"` puro | Seta de navegação para o slide anterior.                   |
| **`Carrossel.jsx`**      |   ▶   | `FaChevronRight`      | Texto `"Próximo"` puro  | Seta de navegação para o próximo slide.                    |
| **`Cartao.jsx`**         |  🏊‍♂️   | `FaSwimmingPool`      |            —            | Identificação do segmento de limpeza e piscinas.           |
| **`Cartao.jsx`**         |  👔   | `FaUserTie`           |            —            | Destaque do profissional responsável (Sr. José Mauro).     |
| **`Cartao.jsx`**         |  📍   | `FaMapMarkerAlt`      |       Emoji `📍`        | Marcadores das etiquetas de regiões atendidas.             |
| **`Cartao.jsx`**         |   ✔   | `FaCheckCircle`       |      Caractere `✓`      | Itens da lista de medidas de segurança e ferramentas.      |
| **`Cartao.jsx`**         |  🛡️   | `FaShieldAlt`         |            —            | Selo de tradição e confiabilidade no rodapé do cartão.     |
| **`Contato.jsx`**        |  💬   | `FaWhatsapp`          |       Emoji `💬`        | Ícone de destaque do botão verde de WhatsApp.              |
| **`Contato.jsx`**        |  📞   | `FaPhoneAlt`          |       Emoji `📞`        | Ícone do botão azul de discagem telefônica.                |
| **`Contato.jsx`**        |  🏁   | `FaQrcode`            |            —            | Cabeçalho do card de QR Code para escaneamento móvel.      |
| **`Contato.jsx`**        |  📷   | `FaCamera`            |            —            | Dica visual para apontar a câmera do smartphone.           |
| **`Contato.jsx`**        |  🕒   | `FaClock`             |       Emoji `🕒`        | Indicador do bloco de horários de atendimento.             |
| **`Rodape.jsx`**         |  🏠   | `FaHome`              |            —            | Link de retorno para a seção de Início.                    |
| **`Rodape.jsx`**         |  🖼️   | `FaImages`            |            —            | Link para a seção de fotos e Destaques.                    |
| **`Rodape.jsx`**         |  ℹ️   | `FaInfoCircle`        |            —            | Link para a seção Sobre a empresa.                         |
| **`Rodape.jsx`**         |  📞   | `FaPhoneAlt`          |            —            | Link para a seção de Contato.                              |
| **`Rodape.jsx`**         |  👔   | `FaUserTie`           |            —            | Link para a seção Sobre nós (desenvolvedor).               |
| **`Rodape.jsx`**         |  🐙   | `FaGithub`            |            —            | Link direto para o perfil do desenvolvedor no GitHub.      |
| **`Rodape.jsx`**         |  🛡️   | `FaShieldAlt`         |            —            | Botão para abertura do modal de Políticas e Termos.        |
| **`Rodape.jsx`**         |   ✕   | `FaTimes`             |            —            | Botão de fechar a janela modal do Radix Dialog.            |

---

## ♿ 5. Boas Práticas de Acessibilidade (A11y)

Ao usar ícones no React, seguimos duas regras essenciais:

### 1. Quando o ícone acompanha um texto descritivo:

Usamos `aria-hidden="true"` para que o leitor de tela não tente soletrar o código do SVG, lendo apenas o texto visível:

```jsx
<a href="#inicio">
  <FaHome aria-hidden="true" />
  <span>Início</span>
</a>
```

### 2. Quando o ícone está sozinho em um botão ou link:

Obrigatoriamente fornecemos `aria-label` e `title` para que pessoas cegas ou que navegam via teclado saibam o que aquele elemento faz:

```jsx
<a
  href="#contato"
  className={styles.botao}
  aria-label="Ir para a seção de contato"
  title="Ir para a seção de contato"
>
  <FaWhatsapp size={32} />
</a>
```

---

## 🎯 6. Alinhamento com Flexbox no CSS

Para garantir que o ícone e o texto fiquem perfeitamente alinhados na mesma linha horizontal, usamos sempre `display: inline-flex` (ou `flex`) e `align-items: center`:

```css
.link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* Espaçamento harmônico entre o ícone e o texto */
}
```
