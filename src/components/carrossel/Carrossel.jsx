import { useMemo } from "react";
import styles from "./Carrossel.module.css";
import { useCarrossel } from "../../hooks/useCarrossel";
import { slidesPadrao } from "../../data/slides";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Carrossel({ slides = slidesPadrao }) {
  const {
    indiceAtivo,
    avancarFoto,
    voltarFoto,
    irParaFoto,
    setEstaPausado,
    iniciarArrasto,
    finalizarArrasto,
  } = useCarrossel(slides.length, 4200);

  // Identifica o slide que está exatamente no centro em destaque
  const slideAtivo = slides[indiceAtivo] || slides[0];

  // Identifica quais são os 5 slides visíveis (-2, -1, 0, 1, 2)
  const slidesComPosicao = useMemo(() => {
    const total = slides.length;
    return slides.map((slide, i) => {
      let offset = i - indiceAtivo;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      return {
        ...slide,
        offset, // -2, -1, 0, 1, 2 (ou fora)
        visivel: Math.abs(offset) <= 2,
      };
    });
  }, [slides, indiceAtivo]);

  return (
    <div
      className={styles.carrossel3DWrapper}
      onMouseEnter={() => setEstaPausado(true)}
      onMouseLeave={() => setEstaPausado(false)}
      onTouchStart={(e) => iniciarArrasto(e.touches[0].clientX)}
      onTouchEnd={(e) => finalizarArrasto(e.changedTouches[0].clientX)}
      onMouseDown={(e) => iniciarArrasto(e.clientX)}
      onMouseUp={(e) => finalizarArrasto(e.clientX)}
    >
      {/* 🎡 1. Palco com Perspectiva 3D */}
      <div className={styles.palco3D}>
        <div className={styles.cilindro3D}>
          {slidesComPosicao.map((slide) => {
            const ehAtivo = slide.offset === 0;

            return (
              <div
                key={slide.id}
                className={`${styles.card3D} ${ehAtivo ? styles.cardAtivo : ""} ${
                  slide.visivel ? styles.cardVisivel : styles.cardOculto
                }`}
                data-offset={slide.offset}
                onClick={() => irParaFoto(slide.id - 1)}
                title={ehAtivo ? slide.dica : `Pular para: ${slide.legenda}`}
                role="button"
                tabIndex={ehAtivo ? 0 : -1}
                aria-label={slide.legenda}
              >
                <div className={styles.molduraCard}>
                  <img
                    src={slide.imagem}
                    alt={slide.legenda}
                    className={styles.imagemCard}
                    loading={Math.abs(slide.offset) <= 2 ? "eager" : "lazy"}
                  />
                  {/* Brilho de profundidade e vinheta */}
                  <div className={styles.sombraProfundidade} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 📋 2. Painel de Informações da Foto em Destaque */}
      <div className={styles.painelLegenda}>
        {slideAtivo.dica && (
          <div className={styles.cabecalhoInfo}>
            <span className={styles.badgeDica}>💡 {slideAtivo.dica}</span>
          </div>
        )}
        <h2 className={styles.tituloServico}>{slideAtivo.legenda}</h2>
      </div>

      {/* 🎛️ 3. Barra de Rolagem 3D e Controles */}
      <div className={styles.controlesWrapper}>
        <button
          type="button"
          onClick={voltarFoto}
          className={styles.botaoNav}
          title="Foto anterior"
          aria-label="Voltar para a foto anterior"
        >
          <FaChevronLeft />
        </button>

        {/* 🎚️ Barra de rolagem 3D interativa */}
        <div className={styles.trilhoBarra}>
          <input
            type="range"
            min={0}
            max={slides.length - 1}
            value={indiceAtivo}
            onChange={(e) => irParaFoto(Number(e.target.value))}
            className={styles.barraRolagem3D}
            aria-label="Barra de rolagem 3D das fotos"
            title="Arraste para girar as fotos rapidamente"
          />
          <div
            className={styles.preenchimentoTrilho}
            style={{ width: `${((indiceAtivo + 1) / slides.length) * 100}%` }}
          />
        </div>

        <button
          type="button"
          onClick={avancarFoto}
          className={styles.botaoNav}
          title="Próxima foto"
          aria-label="Avançar para a próxima foto"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
