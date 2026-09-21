// src/components/contato/Contato.jsx
import styles from "./Contato.module.css";
import { contatoPadrao } from "../../data/contatoData";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaClock,
  FaQrcode,
  FaCamera,
} from "react-icons/fa";

export function Contato({
  telefone = contatoPadrao.telefone,
  whatsapp = contatoPadrao.whatsapp,
  mensagemWhatsapp = contatoPadrao.mensagemWhatsapp,
  horarioAtendimento = contatoPadrao.horarioAtendimento,
  qrCode = contatoPadrao.qrCode,
}) {
  // Higienização e formatação internacional (55 + DDD + Número) para funcionamento 100% garantido
  const numeroLimpo = (whatsapp || telefone || "").replace(/\D/g, "");
  const numeroFormatado = numeroLimpo.startsWith("55")
    ? numeroLimpo
    : `55${numeroLimpo}`;

  const linkWhatsapp = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(
    mensagemWhatsapp,
  )}`;

  return (
    <section className={styles.secaoContato} aria-label="Seção de Contato">
      <div className={styles.container}>
        <h2 className={styles.titulo}>Solicite seu Orçamento</h2>
        <p className={styles.subtitulo}>
          Entre em contato agora mesmo para agendar uma visita ou tirar dúvidas.
          Atendimento ágil, com compromisso e foco na qualidade da sua água.
        </p>

        <div className={styles.gridContato}>
          {/* 📲 Coluna 1: Ações Rápidas de 1 Clique */}
          <div className={styles.colunaAcoes}>
            <h3 className={styles.tituloColuna}>Canais de Atendimento</h3>
            <p className={styles.descricaoColuna}>
              Prefere falar diretamente conosco? Escolha o canal de sua
              preferência abaixo:
            </p>

            <div className={styles.botoesContainer}>
              <a
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botaoWhatsapp}
                title="Abrir conversa no WhatsApp para orçamento"
                aria-label="Abrir conversa no WhatsApp"
                data-tooltip="Chamar no WhatsApp"
              >
                <FaWhatsapp
                  size={30}
                  className={styles.icone}
                  aria-hidden="true"
                />
                <div className={styles.textoBotao}>
                  <span className={styles.tituloAcao}>WhatsApp</span>
                  <span className={styles.subAcao}>{telefone}</span>
                </div>
              </a>

              {telefone && (
                <a
                  href={`tel:${telefone.replace(/\D/g, "")}`}
                  className={styles.botaoTelefone}
                  title={`Ligar agora para ${telefone}`}
                  aria-label={`Ligar para o telefone ${telefone}`}
                  data-tooltip="Ligar agora"
                >
                  <FaPhoneAlt
                    size={22}
                    className={styles.icone}
                    aria-hidden="true"
                  />
                  <div className={styles.textoBotao}>
                    <span className={styles.tituloAcao}>Ligar Agora</span>
                    <span className={styles.subAcao}>{telefone}</span>
                  </div>
                </a>
              )}
            </div>

            {/* ℹ️ Informação de Apoio / Horário */}
            {horarioAtendimento && (
              <div className={styles.cardHorario}>
                <FaClock className={styles.iconeRelogio} aria-hidden="true" />
                <div>
                  <span className={styles.tituloHorario}>
                    Horário de Atendimento
                  </span>
                  <span className={styles.textoHorario}>
                    {horarioAtendimento}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 📷 Coluna 2: Card Interativo de QR Code */}
          {qrCode && (
            <div className={styles.cardQrCode}>
              <div className={styles.cabecalhoQr}>
                <FaQrcode className={styles.iconeQr} aria-hidden="true" />
                <span className={styles.tituloQr}>Acesso via QR Code</span>
              </div>

              <a
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkQrCode}
                title="Aponte a câmera do seu celular ou clique para abrir o WhatsApp"
                aria-label="Escanear QR Code para iniciar conversa no WhatsApp"
                data-tooltip="Clique ou aponte a câmera"
              >
                <div className={styles.molduraQr}>
                  <img
                    src={qrCode}
                    alt="QR Code com logo da JM Piscinas para contato via WhatsApp"
                    className={styles.imagemQr}
                    loading="lazy"
                  />
                </div>
              </a>

              <div className={styles.instrucaoQr}>
                <FaCamera className={styles.iconeCamera} aria-hidden="true" />
                <p>
                  <strong>No computador?</strong> Aponte a câmera do seu celular
                  para abrir o WhatsApp instantaneamente.
                </p>
              </div>

              <span className={styles.dicaClique}>
                (Ou clique no QR Code para conversar diretamente)
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
