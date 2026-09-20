import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Rodape.module.css";
import {
  FaHome,
  FaImages,
  FaInfoCircle,
  FaPhoneAlt,
  FaUserTie,
  FaGithub,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";

export function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        {/* 🧭 1. Todos os botões de navegação alinhados com ícones */}
        <nav className={styles.navegacao} aria-label="Navegação do rodapé">
          <a
            href="#inicio"
            className={styles.link}
            title="Ir para o início da página"
            aria-label="Ir para o início"
            data-tooltip="Início"
          >
            <FaHome aria-hidden="true" />
            <span>Início</span>
          </a>
          <a
            href="#destaque"
            className={styles.link}
            title="Ver galeria de fotos e serviços em destaque"
            aria-label="Ver destaques"
            data-tooltip="Destaques"
          >
            <FaImages aria-hidden="true" />
            <span>Destaques</span>
          </a>
          <a
            href="#sobre-nos-empresa"
            className={styles.link}
            title="Conheça a história e serviços da JM Piscinas"
            aria-label="Sobre a empresa"
            data-tooltip="Sobre a empresa"
          >
            <FaInfoCircle aria-hidden="true" />
            <span>Sobre</span>
          </a>
          <a
            href="#contato"
            className={styles.link}
            title="Fale conosco para solicitar orçamento"
            aria-label="Contato"
            data-tooltip="Contato"
          >
            <FaPhoneAlt aria-hidden="true" />
            <span>Contato</span>
          </a>
          <a
            href="#sobre-nos-desenvolvedor"
            className={styles.link}
            title="Informações sobre o desenvolvedor"
            aria-label="Sobre o desenvolvedor"
            data-tooltip="Desenvolvedor"
          >
            <FaUserTie aria-hidden="true" />
            <span>Sobre nós</span>
          </a>
        </nav>

        {/* 📄 2. Linha inferior compacta com Desenvolvedor e Termos */}
        <div className={styles.linhaInferior}>
          <div className={styles.secaoDev}>
            <span>
              Desenvolvido por <strong>Heymesson Azevedo</strong>
            </span>
            <a
              href="https://github.com/Heymesson-AZ"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkGithub}
              title="Acessar o perfil de Heymesson Azevedo no GitHub (abre em nova aba)"
              aria-label="Acessar perfil no GitHub"
              data-tooltip="Abrir GitHub"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Modal do Radix */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className={styles.botaoTermos}
                title="Clique para ler os termos de uso e políticas de privacidade"
                aria-label="Abrir Políticas e Termos"
                data-tooltip="Políticas e Termos"
              >
                <FaShieldAlt aria-hidden="true" />
                <span>Termos e Políticas</span>
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay} />
              <Dialog.Content className={styles.conteudoModal}>
                <Dialog.Title className={styles.tituloModal}>
                  <FaShieldAlt aria-hidden="true" />
                  <span>Políticas de Privacidade e Termos de Uso</span>
                </Dialog.Title>
                <Dialog.Description className={styles.subtituloModal}>
                  Transparência, proteção de dados e diretrizes de serviço da JM
                  Piscinas.
                </Dialog.Description>

                {/* 📜 Conteúdo detalhado das Políticas */}
                <div className={styles.corpoModal}>
                  <div className={styles.secaoTermo}>
                    <h4>1. Sobre o Projeto e Finalidade</h4>
                    <p>
                      Esta página é uma vitrine digital criada para aumentar a
                      visibilidade e facilitar o contato com os serviços
                      profissionais de limpeza e conservação de piscinas da{" "}
                      <strong>JM Piscinas</strong>, liderada pelo{" "}
                      <strong>Sr. José Mauro</strong>. O projeto foi
                      desenvolvido como ação de intervenção comunitária no curso
                      de Análise e Desenvolvimento de Sistemas por{" "}
                      <strong>Heymesson Azevedo</strong>.
                    </p>
                  </div>

                  <div className={styles.secaoTermo}>
                    <h4>2. Privacidade e Proteção de Dados (LGPD)</h4>
                    <p>
                      Em respeito à sua privacidade e em conformidade com a Lei
                      Geral de Proteção de Dados (Lei nº 13.709/2018):
                    </p>
                    <ul>
                      <li>
                        Não realizamos coleta oculta de dados pessoais, nem
                        comercializamos informações de clientes.
                      </li>
                      <li>
                        Quaisquer dados compartilhados voluntariamente (como
                        nome, telefone e fotos da piscina via WhatsApp) são
                        utilizados{" "}
                        <strong>
                          exclusivamente para elaboração de orçamentos e
                          agendamento de visitas
                        </strong>
                        .
                      </li>
                      <li>
                        Não enviamos mensagens em massa (spam) nem repassamos
                        contatos a terceiros.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.secaoTermo}>
                    <h4>3. Orçamentos e Prestação de Serviços</h4>
                    <p>
                      As estimativas de valores informadas inicialmente pelo
                      WhatsApp ou telefone são baseadas nas informações
                      fornecidas pelo cliente (tamanho estimado, coloração da
                      água e tipo de revestimento). A confirmação de prazos e
                      valores finais pode necessitar de vistoria presencial do
                      Sr. José Mauro no local.
                    </p>
                  </div>

                  <div className={styles.secaoTermo}>
                    <h4>4. Segurança no Tratamento Químico</h4>
                    <p>
                      A segurança da sua família e a qualidade da água são
                      nossas maiores prioridades:
                    </p>
                    <ul>
                      <li>
                        Utilizamos produtos químicos de qualidade comprovada e
                        ferramentas adequadas para cada tipo de piscina (vinil,
                        fibra ou alvenaria).
                      </li>
                      <li>
                        É fundamental seguir as orientações do profissional
                        sobre o tempo necessário de repouso, decantação e
                        filtragem da água antes de liberar a piscina para o
                        banho.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.secaoTermo}>
                    <h4>5. Regiões de Atendimento</h4>
                    <p>
                      Prestamos serviços com foco prioritário nas regiões de{" "}
                      <strong>
                        Arniqueira, Park Way, Vicente Pires, Guará
                      </strong>{" "}
                      e condomínios adjacentes no Distrito Federal.
                    </p>
                  </div>

                  <div className={styles.secaoTermo}>
                    <h4>6. Contato e Dúvidas</h4>
                    <p>
                      Para qualquer dúvida sobre estes termos, orçamentos ou
                      solicitação de exclusão de histórico de mensagens, entre
                      em contato diretamente pelo WhatsApp ou telefone
                      disponíveis nesta página.
                    </p>
                  </div>
                </div>

                {/* Botão de fechar */}
                <div className={styles.rodapeModal}>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className={styles.botaoFechar}
                      title="Fechar janela de termos"
                      aria-label="Fechar janela de termos"
                    >
                      <FaTimes aria-hidden="true" />
                      <span>Fechar e Concordar</span>
                    </button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </footer>
  );
}
