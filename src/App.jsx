import { Menu } from "./components/menu/Menu";
import { Carrossel } from "./components/carrossel/Carrossel";
import { Cartao } from "./components/cartao/Cartao";
import { Rodape } from "./components/rodape/Rodape";
import { Contato } from "./components/contato/Contato";
import { BotaoFlutuante } from "./components/botaoFlutuante/BotaoFlutuante";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <BotaoFlutuante idDestino="contato" />

      {/* 🧭 1. Menu de Navegação */}
      <section id="inicio">
        <Menu />
      </section>

      {/* 🎠 2. Carrossel de Serviços em Destaque */}
      <main className="flex-1 py-10 px-4" id="destaque">
        <div className="text-center max-w-xl mx-auto mb-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 border border-sky-200 px-3 py-1 rounded-full mb-2">
            Galeria de Serviços
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Água Cristalina e Tratamento Completo
          </h1>
        </div>
        <Carrossel />
      </main>

      {/* 🏢 3. Cartão Institucional da Empresa */}
      <section
        id="sobre-nos-empresa"
        className="py-12 px-4 bg-slate-200/50 border-t border-b border-slate-300/70"
      >
        <div className="text-center max-w-xl mx-auto mb-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100 border border-cyan-200 px-3 py-1 rounded-full mb-2">
            Sobre o Parceiro
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Segurança, Ferramentas e Confiança
          </h2>
        </div>
        <Cartao />
      </section>

      {/* 📲 4. Seção de Contato em Destaque */}
      <section id="contato">
        <Contato />
      </section>

      {/* ⚓ 5. Rodapé Noturno */}
      <section id="sobre-nos-desenvolvedor">
        <Rodape />
      </section>
    </div>
  );
}
