import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function useCarrossel(intervalo = 3000) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: intervalo, stopOnInteraction: false }),
  ]);

  // ⏭️ Função para avançar
  const proximoSlide = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // ⏮️ Função para voltar
  const slideAnterior = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Exportamos tudo o que o componente precisa
  return { emblaRef, proximoSlide, slideAnterior };
}
