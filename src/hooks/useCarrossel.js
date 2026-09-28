import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Hook customizado para Carrossel 3D Coverflow com 5 itens visíveis simultaneamente,
 * suporte a autoplay, arrasto (touch/mouse) e barra de rolagem interativa.
 */

export function useCarrossel(totalSlides = 44, intervaloAutoplay = 4000) {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [estaPausado, setEstaPausado] = useState(false);
  const pontoInicialX = useRef(0);
  const arrastando = useRef(false);

  // ⏭️ Avança para a próxima foto (circular)
  const avancarFoto = useCallback(() => {
    setIndiceAtivo((atual) => (atual + 1) % totalSlides);
  }, [totalSlides]);

  // ⏮️ Volta para a foto anterior (circular)
  const voltarFoto = useCallback(() => {
    setIndiceAtivo((atual) => (atual - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // 🎯 Pula direto para um índice específico (usado na barra de rolagem e no clique das fotos)
  const irParaFoto = useCallback(
    (indice) => {
      const indiceNormalizado = ((indice % totalSlides) + totalSlides) % totalSlides;
      setIndiceAtivo(indiceNormalizado);
    },
    [totalSlides]
  );

  // ⏱️ Autoplay suave (pausa ao passar o mouse ou durante toque)
  useEffect(() => {
    if (estaPausado) return;
    const timer = setInterval(() => {
      avancarFoto();
    }, intervaloAutoplay);

    return () => clearInterval(timer);
  }, [estaPausado, avancarFoto, intervaloAutoplay]);

  // 🖐️ Controle de Gestos / Drag (Arrastar no mouse ou touch no celular)
  const iniciarArrasto = (clientX) => {
    pontoInicialX.current = clientX;
    arrastando.current = true;
    setEstaPausado(true);
  };

  const finalizarArrasto = (clientX) => {
    if (!arrastando.current) return;
    arrastando.current = false;
    setEstaPausado(false);

    const diferencaX = clientX - pontoInicialX.current;
    const limiarSensibilidade = 40; // Mínimo de pixels para virar

    if (diferencaX < -limiarSensibilidade) {
      avancarFoto(); // Arrastou para a esquerda -> próxima foto
    } else if (diferencaX > limiarSensibilidade) {
      voltarFoto(); // Arrastou para a direita -> foto anterior
    }
  };

  return {
    indiceAtivo,
    avancarFoto,
    voltarFoto,
    irParaFoto,
    setEstaPausado,
    iniciarArrasto,
    finalizarArrasto,
  };
}