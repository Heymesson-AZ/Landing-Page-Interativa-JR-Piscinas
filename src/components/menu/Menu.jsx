import logo from "../../assets/logo.png";
import styles from "./Menu.module.css";
import {
  FaHome,
  FaImages,
  FaInfoCircle,
  FaPhoneAlt,
  FaUserTie,
} from "react-icons/fa";

export function Menu() {
  return (
    <header className={styles.cabecalho}>
      {/* 🐬 Marca da Empresa: Logo sem fundo branco + Nome em Destaque */}
      <a
        href="#inicio"
        className={styles.marca}
        title="JM Piscinas - Ir para o início"
        aria-label="JM Piscinas - Ir para a página inicial"
        data-tooltip="Página Inicial"
        data-tooltip-pos="baixo"
      >
        <img src={logo} alt="Logo JM Piscinas" className={styles.logoImg} />
        <div className={styles.infoMarca}>
          <span className={styles.nomeEmpresa}>JM Piscinas</span>
          <span className={styles.sloganEmpresa}>Limpeza & Conservação</span>
        </div>
      </a>

      {/* Navegação com texto flutuante e ícones */}
      <nav className={styles.navegacao} aria-label="Menu principal">
        <ul>
          <li>
            <a
              href="#inicio"
              className={styles.link}
              title="Ir para o início da página"
              aria-label="Ir para o início da página"
              data-tooltip="Início"
              data-tooltip-pos="baixo"
            >
              <FaHome aria-hidden="true" />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a
              href="#destaque"
              className={styles.link}
              title="Ver fotos em destaque no carrossel"
              aria-label="Ver fotos em destaque no carrossel"
              data-tooltip="Destaques"
              data-tooltip-pos="baixo"
            >
              <FaImages aria-hidden="true" />
              <span>Destaques</span>
            </a>
          </li>
          <li>
            <a
              href="#sobre-nos-empresa"
              className={styles.link}
              title="Conheça a história e serviços da JM Piscinas"
              aria-label="Conheça a JM Piscinas"
              data-tooltip="Sobre a empresa"
              data-tooltip-pos="baixo"
            >
              <FaInfoCircle aria-hidden="true" />
              <span>Quem somos</span>
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className={styles.link}
              title="Fale com a nossa equipe"
              aria-label="Entre em contato com a JM Piscinas"
              data-tooltip="Fale conosco"
              data-tooltip-pos="baixo"
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>Contato</span>
            </a>
          </li>
          <li>
            <a
              href="#sobre-nos-desenvolvedor"
              className={styles.link}
              title="Ir para o rodapé e informações do desenvolvedor"
              aria-label="Informações sobre o desenvolvedor"
              data-tooltip="Desenvolvedor"
              data-tooltip-pos="baixo"
            >
              <FaUserTie aria-hidden="true" />
              <span>Sobre</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
