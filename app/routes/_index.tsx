import { useEffect, useState, type FormEvent } from "react";
import type { Route } from "./+types/_index";
import logoNbd from "../assets/logo_nbd.jpeg";

const whatsappNumber = "5594991636639";
const baseMessage = "Olá, gostaria de agendar uma demonstração com a Norte Brasil Digital.";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;

const advantages = [
  {
    title: "Tecnologia confiável",
    text: "Sistemas modernos para manter sua operação segura, rápida e preparada para crescer.",
  },
  {
    title: "Processos mais simples",
    text: "Automatize rotinas, reduza retrabalho e ganhe tempo para focar na gestão do negócio.",
  },
  {
    title: "Suporte próximo",
    text: "Atendimento humano, ágil e especializado para ajudar sua equipe no dia a dia.",
  },
  {
    title: "Decisões com dados",
    text: "Relatórios e indicadores para acompanhar resultados com mais clareza.",
  },
];

const segments = [
  "Supermercados",
  "Moda e estilo",
  "Casa e construção",
  "Mecânicas",
  "Agropecuária e petshop",
  "Móveis e eletrodomésticos",
  "Informática e eletrônica",
  "Perfumaria e cosméticos",
  "Máquinas e ferramentas",
  "Atacadistas e distribuidoras",
  "Serviços",
  "Indústria",
];

const features = [
  ["Compras", "Controle compras, custos e lucratividade dos produtos."],
  ["Estoque", "Inventário, movimentações e análise inteligente de estoque."],
  ["Vendas", "Orçamentos, vendas, trocas, devoluções e entrega futura."],
  ["Ordem de serviço", "Gestão prática para oficinas, assistências e prestadores."],
  ["Expedição", "Envio, recebimento e movimentação entre filiais."],
  ["Financeiro", "Contas a pagar, receber, fluxo de caixa e DRE."],
  ["Integração contábil", "Portal do contador para aproximar empresa e contabilidade."],
  ["Fluxo de caixa", "Previsão para os próximos 30 dias em uma visão objetiva."],
  ["NFe, NFCe e NFSe", "Emissão de documentos fiscais e integração com prefeituras."],
  ["E-commerce", "Gestão de vendas online integrada às principais plataformas."],
  ["WhatsApp", "Mensagens para aniversários, promoções e cobranças."],
  ["DRE gerencial", "Visão 360 graus do negócio em um formato simples de acompanhar."],
];

const values = [
  "Comprometimento",
  "Respeito",
  "Resultado",
  "Valorização de pessoas",
  "Ambiente harmonioso",
  "Responsabilidade",
  "Simplicidade",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Norte Brasil Digital | Sistemas de Gestão Empresarial" },
    {
      name: "description",
      content:
        "Sistemas de gestão empresarial para varejo e serviços, com atendimento próximo em Parauapebas e região.",
    },
  ];
}

export default function Home() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function onScroll() {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      if (currentScrollY < 80) {
        setHeaderHidden(false);
      } else if (scrollingDown) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      baseMessage,
      name && `Nome: ${name}`,
      business && `Empresa: ${business}`,
      phone && `Telefone: ${phone}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-stone-50 text-slate-950 pt-[76px] sm:pt-[84px]">
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b border-emerald-950/10 bg-stone-50/90 backdrop-blur-xl transition-transform duration-300 ${
          headerHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logoNbd} alt="Norte Brasil Digital" className="h-12 w-auto object-contain" />
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#sobre" className="transition hover:text-emerald-900">
              Sobre
            </a>
            <a href="#solucoes" className="transition hover:text-emerald-900">
              Soluções
            </a>
            <a href="#contato" className="transition hover:text-emerald-900">
              Contato
            </a>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-950"
          >
            Fale com um consultor
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative isolate border-b border-emerald-950/10 px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(20,83,45,0.12),transparent_28%),linear-gradient(135deg,rgba(236,253,245,0.9),rgba(250,250,249,0.7)_45%,rgba(245,245,244,1))]" />
        <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-emerald-900/20 bg-white/70 px-4 py-2 text-sm font-bold text-emerald-900 shadow-sm">
              +500 usuários ativos
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-emerald-950 sm:text-6xl lg:text-7xl">
              Sistemas de gestão para negócios que precisam operar melhor.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">
              A Norte Brasil Digital ajuda empresas de varejo e serviços a organizar processos,
              vender com mais controle e acompanhar a gestão com simplicidade.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-900 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-950"
              >
                Agendar reunião com analista
              </a>
              <a
                href="#solucoes"
                className="rounded-full border border-emerald-950/20 bg-white/70 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-emerald-950 transition hover:-translate-y-0.5 hover:border-emerald-900"
              >
                Ver soluções
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-950/10 bg-white/80 p-5 shadow-2xl shadow-emerald-950/10 backdrop-blur">
            <div className="rounded-[1.5rem] bg-emerald-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-100">
                Gestão em uma só rotina
              </p>
              <div className="mt-8 grid gap-3">
                {["Vendas", "Estoque", "Financeiro", "Fiscal"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4"
                  >
                    <span className="font-semibold">{item}</span>
                    <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-bold text-emerald-50">
                      Integrado
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-3xl bg-stone-50 p-5 text-emerald-950">
                <p className="text-3xl font-black">14+</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  anos buscando soluções simples e seguras para empresas da região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-800">
              Quem somos
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-emerald-950 sm:text-5xl">
              Tecnologia com proximidade para a gestão do dia a dia.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Há mais de 14 anos no mercado, a Norte Brasil Digital busca soluções que ajudam o
              empreendedor a gerir seu negócio com eficiência, segurança e simplicidade.
            </p>
          </div>

          <div className="grid gap-5">
            <article className="rounded-[1.75rem] border border-emerald-950/10 bg-white p-7 shadow-sm">
              <h3 className="font-serif text-3xl font-semibold text-emerald-950">Missão</h3>
              <p className="mt-4 leading-7 text-slate-700">
                Fornecer sistemas completos e intuitivos de gestão para varejo e serviços,
                entregando tecnologia, segurança e agilidade nos processos do dia a dia.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-emerald-950/10 bg-white p-7 shadow-sm">
              <h3 className="font-serif text-3xl font-semibold text-emerald-950">Visão</h3>
              <p className="mt-4 leading-7 text-slate-700">
                Ser referência em sistema de gestão empresarial em nossa área de atuação, oferecendo
                proximidade e simplicidade em soluções e atendimento.
              </p>
            </article>
            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-emerald-900/20 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-950"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">
              Vantagens para o seu negócio
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Soluções robustas, com atendimento simples de entender.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <article
                key={advantage.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6"
              >
                <div className="mb-8 h-1.5 w-14 rounded-full bg-emerald-300" />
                <h3 className="text-xl font-black">{advantage.title}</h3>
                <p className="mt-4 leading-7 text-emerald-50/80">{advantage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-800">
                Ramos de atividade
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-emerald-950 sm:text-5xl">
                Preparado para diferentes tipos de operação.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                A plataforma atende negócios que precisam de controle, velocidade e informações
                claras para vender e administrar.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {segments.map((segment) => (
                <div
                  key={segment}
                  className="rounded-2xl border border-emerald-950/10 bg-white px-5 py-4 font-bold text-slate-800 shadow-sm"
                >
                  {segment}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-800">
                Funcionalidades
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-emerald-950 sm:text-5xl">
                O essencial para gerenciar o negócio em um só lugar.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-[1.5rem] border border-emerald-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-emerald-900 text-sm font-black text-white">
                    {title.slice(0, 1)}
                  </span>
                  <h3 className="mt-5 text-xl font-black text-emerald-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-stone-100 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-800">
              Fale com um especialista
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-emerald-950 sm:text-5xl">
              O próximo passo para uma gestão mais eficiente.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Agende uma demonstração ou converse com nossos analistas para entender, na prática,
              como nossas soluções podem apoiar sua empresa.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-emerald-950/10 bg-white p-6">
              <p className="font-serif text-2xl font-semibold text-emerald-950">
                Confiança que gera resultados
              </p>
              <blockquote className="mt-4 leading-7 text-slate-700">
                "As soluções da Norte Brasil Digital foram um divisor de águas para nossa empresa. O
                suporte é incrível e a tecnologia é exatamente o que o mercado precisa."
              </blockquote>
              <p className="mt-4 text-sm font-black text-emerald-900">
                Feliphe Silva, TechMaster Soluções Digitais
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-xl shadow-emerald-950/10 sm:p-8"
          >
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Nome
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-4 font-medium outline-none transition focus:border-emerald-700 focus:bg-white"
                  placeholder="Seu nome"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Empresa
                <input
                  value={business}
                  onChange={(event) => setBusiness(event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-4 font-medium outline-none transition focus:border-emerald-700 focus:bg-white"
                  placeholder="Nome da empresa"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                WhatsApp
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-4 font-medium outline-none transition focus:border-emerald-700 focus:bg-white"
                  placeholder="(94) 00000-0000"
                />
              </label>
              <button className="mt-2 rounded-full bg-emerald-900 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-950">
                Agendar demonstração
              </button>
              <p className="text-sm leading-6 text-slate-500">
                O botão abre uma conversa no WhatsApp com as informações preenchidas. Nenhum dado é
                enviado para um servidor nesta página.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-emerald-950 px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <img src={logoNbd} alt="Norte Brasil Digital" className="h-16 w-auto object-contain" />
            <p className="mt-4 max-w-md leading-7 text-emerald-50/75">
              Transformando ideias em soluções digitais para impulsionar o crescimento do seu
              negócio.
            </p>
            <p className="mt-6 text-sm leading-6 text-emerald-50/70">
              Rua Santarém, 817 - Bairro Maranhão
              <br />
              Parauapebas, PA - CEP: 68515-000
            </p>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-emerald-200">Links úteis</p>
            <div className="mt-5 grid gap-3 text-emerald-50/80">
              <a href="#sobre" className="hover:text-white">
                Sobre nós
              </a>
              <a href="#solucoes" className="hover:text-white">
                Soluções
              </a>
              <a href="#contato" className="hover:text-white">
                Contato
              </a>
            </div>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-emerald-200">Contato</p>
            <div className="mt-5 grid gap-3 text-emerald-50/80">
              <a href="mailto:contato@nortebrasildigital.com.br">
                contato@nortebrasildigital.com.br
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                (94) 99163-6639
              </a>
              <a
                href="https://www.instagram.com/nortebrasildigital"
                target="_blank"
                rel="noreferrer"
              >
                @nortebrasildigital
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-emerald-50/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Norte Brasil Digital. Todos os direitos reservados.</p>
          <p>CNPJ: 17.735.149/0001-11</p>
        </div>
      </footer>
    </main>
  );
}
