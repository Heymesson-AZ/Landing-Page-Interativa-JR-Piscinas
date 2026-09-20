import styles from "./Carrossel.module.css";
import { useCarrossel } from "../../hooks/useCarrossel";
import { slidesPadrao } from "../../data/slides";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Carrossel({ slides = slidesPadrao }) {
  /* Inicializa o Embla com rolagem infinita (loop) */
  const { emblaRef, proximoSlide, slideAnterior } = useCarrossel(4000);

  return (
    <div className={styles.carrosselWrapper}>
      {/* 🪟 1. Janela visível dos slides */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={styles.slide}
              title={slide.dica || slide.legenda}
              aria-label={`Slide: ${slide.legenda}`}
              tabIndex={0}
            >
              <img
                src={slide.imagem}
                alt={slide.legenda}
                className={styles.imagem}
              />
              <p className={styles.legenda}>{slide.legenda}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🕹️ 2. Controles logo abaixo da janela com texto flutuante */}
      <div className={styles.controles}>
        <button
          type="button"
          onClick={slideAnterior}
          className={styles.botao}
          title="Voltar para a foto anterior"
          aria-label="Voltar para o slide anterior"
          data-tooltip="Voltar foto"
        >
          <FaChevronLeft aria-hidden="true" />
          <span>Anterior</span>
        </button>
        <button
          type="button"
          onClick={proximoSlide}
          className={styles.botao}
          title="Avançar para a próxima foto"
          aria-label="Avançar para o próximo slide"
          data-tooltip="Próxima foto"
        >
          <span>Próximo</span>
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
