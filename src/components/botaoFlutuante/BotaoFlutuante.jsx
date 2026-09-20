import styles from "./BotaoFlutuante.module.css";
import { FaWhatsapp } from "react-icons/fa";

export function BotaoFlutuante({ idDestino }) {
  return (
    <a
      href={`#${idDestino}`}
      className={styles.botao}
      aria-label="Ir para a seção de contato"
      title="Ir para a seção de contato"
      data-tooltip="Ir para o Contato"
      data-tooltip-pos="esquerda"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
