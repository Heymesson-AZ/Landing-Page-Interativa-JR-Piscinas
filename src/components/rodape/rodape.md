# 🧩 Anatomia do Radix Dialog

O componente `Dialog` do Radix UI é dividido em várias partes modulares. Cada uma desempenha um papel específico de acessibilidade ou funcionalidade:

| Componente | Função Principal |
| :--- | :--- |
| **`Dialog.Root`** 🏠 | O container invisível que gerencia o **estado** do modal (aberto/fechado). Ele envolve todas as outras partes. |
| **`Dialog.Trigger`** 🔘 | O elemento que o usuário aciona (clica) para **abrir** o modal. |
| **`Dialog.Portal`** 🚪 | Teleporta a janela para o final da árvore do documento (geralmente direto no `<body>`), evitando problemas visuais de sobreposição ou corte causados por outros containers. |
| **`Dialog.Overlay`** 🌫️ | A camada de fundo semi-transparente que cobre o restante da página enquanto o modal estiver ativo. |
| **`Dialog.Content`** 📄 | A caixa central onde fica o conteúdo visível da janela. É aqui que o foco do teclado fica retido (*focus trap*). |
| **`Dialog.Title`** 🏷️ | O título acessível do modal. Leitores de tela leem este texto assim que o diálogo é aberto para anunciar do que se trata a janela. |
| **`Dialog.Description`** ℹ️ | Descrição complementar para tecnologias assistivas entenderem o propósito daquele conteúdo. |
| **`Dialog.Close`** ❌ | O botão responsável por **fechar** a janela ao ser clicado. |

---

### 💡 A propriedade `asChild`

Por padrão, componentes como `<Dialog.Trigger>` e `<Dialog.Close>` renderizam uma tag `<button>` própria no HTML.

Quando adicionamos a propriedade `asChild`:
* O Radix **não cria** a tag padrão dele.
* Ele transfere todos os eventos (como o clique) e os atributos de acessibilidade diretamente para o **elemento filho** imediato que você colocar dentro dele.