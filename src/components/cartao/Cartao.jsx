import styles from "./Cartao.module.css";
import { cartaoPadrao } from "../../data/dadosPadrao";
import {
  FaSwimmingPool,
  FaUserTie,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

export function Cartao({
  logoUrl = cartaoPadrao.logoUrl,
  nomeEmpresa = cartaoPadrao.nomeEmpresa,
  profissional = cartaoPadrao.profissional,
  descricao = cartaoPadrao.descricao,
  cidades = cartaoPadrao.cidades,
  segmento = cartaoPadrao.segmento,
  anoFundacao = cartaoPadrao.anoFundacao,
  diferenciais = cartaoPadrao.diferenciais,
}) {
  return (
    <article
      className={styles.cartao}
      aria-label={`Informações institucionais da empresa ${nomeEmpresa}`}
    >
      {/* 🖼️ Cabeçalho do cartão com logo e identificação */}
      <header className={styles.cabecalho}>
        {logoUrl && (
          <img
            src={logoUrl}
            alt={`Logo da ${nomeEmpresa}`}
            className={styles.logo}
          />
        )}
        <div className={styles.infoCabecalho}>
          <h3 className={styles.nome}>{nomeEmpresa}</h3>
          {profissional && (
            <p className={styles.profissional}>
              <FaUserTie aria-hidden="true" />
              <span>Responsável: {profissional}</span>
            </p>
          )}
          {segmento && (
            <span className={styles.segmento}>
              <FaSwimmingPool aria-hidden="true" />
              <span>{segmento}</span>
            </span>
          )}
        </div>
      </header>

      {/* 📝 Descrição sobre a empresa e serviços */}
      <p className={styles.descricao}>{descricao}</p>

      {/* 📍 Cidades e regiões de atuação */}
      <div className={styles.locais}>
        <strong className={styles.subtitulo}>Regiões Atendidas:</strong>
        <div className={styles.tagsContainer}>
          {cidades.map((cidade, index) => (
            <span
              key={index}
              className={styles.tag}
              title={`Atendimento especializado em ${cidade}`}
              data-tooltip={`Atendemos em ${cidade}`}
            >
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{cidade}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 🛡️ Tópicos de ferramentas e medidas de segurança */}
      {diferenciais && diferenciais.length > 0 && (
        <div className={styles.diferenciais}>
          <strong className={styles.subtitulo}>
            Diferenciais & Medidas de Segurança:
          </strong>
          <ul className={styles.listaDiferenciais}>
            {diferenciais.map((item, index) => (
              <li key={index} className={styles.itemDiferencial}>
                <FaCheckCircle
                  className={styles.iconeCheck}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🏷️ Rodapé institucional com ano de fundação */}
      {anoFundacao && (
        <footer className={styles.rodape}>
          <small>
            <FaShieldAlt aria-hidden="true" />
            <span>Tradição e excelência em piscinas desde {anoFundacao}</span>
          </small>
        </footer>
      )}
    </article>
  );
}
