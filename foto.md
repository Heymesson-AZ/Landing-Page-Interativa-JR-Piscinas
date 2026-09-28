# 📸 Guia de Gerenciamento e Aprimoramento de Fotos - JM Piscinas

Este documento serve como guia rápido para você lembrar como adicionar novas fotos, manter a organização da galeria e aplicar o tratamento digital automático de qualidade.

---

## 📂 Onde as Fotos Ficam Salvas?

Todas as imagens do carrossel estão localizadas na pasta:
```
src/assets/carrossel/
```

O carrossel suporta imagens nos formatos `.jpeg`, `.jpg`, `.png` e `.webp`.

---

## ➕ Como Adicionar Novas Fotos

1. **Copie as fotos** tiradas no celular ou recebidas pelo WhatsApp para a pasta `src/assets/carrossel/`.
2. **Nomenclatura recomendada:**
   * Mantenha o padrão sequencial: `piscina-01.jpeg`, `piscina-02.jpeg`, ..., `piscina-45.jpeg`, etc.
   * A ordenação do carrossel é feita automaticamente pelo nome numérico do arquivo.
3. **Qualquer quantidade de fotos:**
   * O carrossel é **100% dinâmico**. Ele se adapta automaticamente se você tiver 5, 20, 44, 80 ou mais fotos.
   * As legendas e dicas técnicas no arquivo `src/data/slides.js` são distribuídas ciclicamente para todas as fotos adicionadas.

---

## 🚀 Como Aprimorar a Qualidade das Fotos Automaticamente

Para tratar as fotos recém-adicionadas (aumentando a nitidez e destacando o azul da água), abra o terminal na pasta do projeto e execute:

```bash
npm run photos:enhance
```

### ✨ O que esse comando faz nas imagens:

1. **Correção de Orientação (EXIF):** Corrige automaticamente fotos verticais tiradas pelo celular para que nunca fiquem deitadas.
2. **Água Cristalina e Cores Vivas (Color Grading):** Intensifica em +22% a saturação, transformando águas acinzentadas em um azul piscina vibrante e realçando a vegetação ao redor.
3. **Contraste Adaptativo (CLAHE):** Destaca ondulações, reflexos de luz, degraus e rejuntes sem estourar as áreas claras.
4. **Super Nitidez (Unsharp Mask):** Remove o aspecto borrado ou granulado comum em câmeras de celular e compressões do WhatsApp.
5. **Codificação MozJPEG 4:4:4:** Salva com qualidade 92 mantendo 100% da fidelidade das cores e reduzindo artefatos.

---

## 🛠️ Arquivos Envolvidos

* [`src/assets/carrossel/`](src/assets/carrossel/): Pasta com as imagens ativas do carrossel.
* [`scripts/enhance_all_photos.cjs`](scripts/enhance_all_photos.cjs): Script Node.js que realiza o processamento em lote usando a biblioteca `sharp`.
* [`package.json`](package.json): Registra o comando de atalho `npm run photos:enhance`.
* [`src/data/slides.js`](src/data/slides.js): Carrega e vincula automaticamente as fotos com títulos e dicas técnicas de manutenção.
