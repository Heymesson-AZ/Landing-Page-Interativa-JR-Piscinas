# 🎠 Componente Carrossel (Embla Carousel)

Este componente implementa um carrossel responsivo e acessível utilizando a biblioteca **Embla Carousel React**, o plugin **Autoplay** e o hook de desempenho **`useCallback`** do React, tudo estilizado com **CSS Modules**.

---

## 📦 Instalação das Dependências

Para utilizar o carrossel com rolagem automática, instalamos o pacote principal do Embla e o plugin de autoplay:

```bash
npm install embla-carousel-react embla-carousel-autoplay
```

---

## 🏗️ Estrutura HTML/JSX Obrigatória

O Embla exige uma hierarquia de três níveis fundamentais para o cálculo correto dos movimentos e transições:

1. **Janela (Viewport):** o elemento que esconde o conteúdo excedente (`overflow: hidden`) e recebe a referência do DOM (`ref={emblaRef}`).
2. **Esteira/Trilho (Container):** o container flexível (`display: flex`) que se move horizontalmente no eixo X via `transform: translate3d(...)`.
3. **Itens (Slides):** cada elemento individual do carrossel com largura definida (`flex: 0 0 100%`).

```jsx
<div className={styles.viewport} ref={emblaRef}>
  <div className={styles.container}>
    <div className={styles.slide}>Slide 1</div>
    <div className={styles.slide}>Slide 2</div>
    <div className={styles.slide}>Slide 3</div>
  </div>
</div>
```

---

## 🎨 Regras Essenciais de CSS

- **`.viewport`**: `overflow: hidden; width: 100%;` para mascarar os slides vizinhos.
- **`.container`**: `display: flex;` para enfileirar os slides lado a lado.
- **`.slide`**: `flex: 0 0 100%; min-width: 0;` garante que cada slide ocupe 100% da largura da janela e evita estouros visuais de imagens grandes.

---

## 🧠 1. Usos do Hook `useEmblaCarousel` e a `emblaApi`

O hook `useEmblaCarousel` é o ponto de entrada da biblioteca. Ele recebe opções e plugins e retorna uma tupla com dois valores:

```javascript
const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
```

| Retorno        | O que é                          | Para que serve                                                                                                          |
| :------------- | :------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **`emblaRef`** | Referência React (`RefCallback`) | Conectada ao elemento HTML (`<div ref={emblaRef}>`) para que a biblioteca identifique e controle a janela do carrossel. |
| **`emblaApi`** | Instância da API do Embla        | Objeto JavaScript com todos os métodos de controle e eventos do carrossel.                                              |

### 🕹️ Principais métodos da `emblaApi`:

- **`emblaApi.scrollNext()`**: Avança suavemente para o próximo slide.
- **`emblaApi.scrollPrev()`**: Volta para o slide anterior.
- **`emblaApi.scrollTo(index)`**: Pula diretamente para um slide específico pelo índice (`0`, `1`, `2`...).
- **`emblaApi.selectedScrollSnap()`**: Retorna o índice do slide ativo na tela no momento.
- **`emblaApi.canScrollNext()` / `canScrollPrev()`**: Informa se ainda há slides para navegar (quando `loop: false`).
- **`emblaApi.on(evento, callback)`**: Permite "escutar" eventos do carrossel (ex.: `'select'`, `'reInit'`, `'pointerDown'`).

> **Importante:** Como a renderização inicial do DOM pode levar alguns milissegundos, a `emblaApi` começa valendo `undefined`. Sempre utilize verificações de segurança como `if (emblaApi)` ou `emblaApi?.scrollNext()` antes de chamar seus métodos.

---

## ⏱️ 2. Plugin `Autoplay` (`embla-carousel-autoplay`)

O plugin **Autoplay** adiciona funcionalidade de transição automática dos slides por intervalo de tempo.

### Exemplo de Configuração:

```javascript
import Autoplay from "embla-carousel-autoplay";

const plugins = [
  Autoplay({
    delay: 4000, // Tempo de espera entre cada slide (4000ms = 4 segundos)
    stopOnInteraction: false, // Define o comportamento após interação do usuário
  }),
];
```

### ⚙️ A opção `stopOnInteraction`:

- **`true` (Padrão):** Se o visitante clicar nas setas, tocar na tela do celular ou arrastar os slides, o autoplay é **desativado permanentemente** até que a página seja recarregada.
- **`false` (Recomendado para Landing Pages):** O carrossel **não para de vez**. O visitante pode navegar manualmente à vontade; assim que soltar, o temporizador continua contando e o carrossel retoma o giro automático sozinho.

---

## ⚡ 3. Otimização com o Hook `useCallback` do React

Por padrão no React, qualquer função declarada dentro de um componente ou hook é **recriada do zero na memória a cada re-renderização**:

```javascript
// ❌ Sem useCallback: uma nova função é alocada na memória a cada render
const proximoSlide = () => {
  if (emblaApi) emblaApi.scrollNext();
};
```

### ✅ Com `useCallback`:

```javascript
import { useCallback } from "react";

// Memoriza a referência da função e só a recria se a emblaApi mudar
const proximoSlide = useCallback(() => {
  if (emblaApi) emblaApi.scrollNext();
}, [emblaApi]);

const slideAnterior = useCallback(() => {
  if (emblaApi) emblaApi.scrollPrev();
}, [emblaApi]);
```

### Por que usamos `useCallback` aqui?

1. **Estabilidade de Referência:** Evita re-renderizações desnecessárias de botões e componentes que recebem essas funções via `props` ou eventos `onClick`.
2. **Desempenho:** Impede que novas instâncias de funções fiquem sobrecarregando o garbage collector da memória RAM.
3. **Dependência `[emblaApi]`:** Garante que a função sempre aponte para a instância correta e ativa da API do Embla.

---

## 🛠️ Código Completo do Custom Hook (`useCarrossel.js`)

Encapsulamos toda essa lógica dentro de um hook customizado em `src/hooks/useCarrossel.js`:

```javascript
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function useCarrossel(intervalo = 3000) {
  // 1. Inicializa o Embla com loop infinito e Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: intervalo, stopOnInteraction: false }),
  ]);

  // 2. Cria funções estáveis para os botões usando useCallback
  const proximoSlide = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slideAnterior = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // 3. Exporta a ref para o JSX e os controladores para o componente
  return { emblaRef, proximoSlide, slideAnterior, emblaApi };
}
```

---

## 🎯 Vantagens dessa Arquitetura

- **Separação de Responsabilidades:** O componente [Carrossel.jsx](file:///workspaces/Landing-Page-Interativa---JR-Piscinas/src/components/carrossel/Carrossel.jsx) foca apenas na interface visual e acessibilidade, enquanto o [useCarrossel.js](file:///workspaces/Landing-Page-Interativa---JR-Piscinas/src/hooks/useCarrossel.js) cuida da lógica e biblioteca.
- **Reutilização:** O hook pode ser reaproveitado em outros carrosséis do projeto (ex.: depoimentos de clientes, produtos, etc.) passando tempos de intervalo diferentes: `useCarrossel(5000)`.
- **Acessibilidade:** Botões independentes permitem adicionar `aria-label`, `title` e `data-tooltip` sem depender de HTML gerado automaticamente por bibliotecas.
