import { useState, type FormEvent } from "react";
import type { Route } from "./+types/_index";
import logoNbdBlue from "../assets/logo-nbd-blue.webp";
import logoNbdWhite from "../assets/logo-nbd-white.webp";
import { buildWhatsappHref } from "../lib/whatsapp";

const whatsappHref = buildWhatsappHref();

const advantages = [
  {
    title: "Tecnologia confiável",
    text: "Sistemas modernos para uma operação segura, rápida e preparada para crescer.",
  },
  {
    title: "Processos mais simples",
    text: "Menos retrabalho e mais tempo para cuidar da gestão do negócio.",
  },
  {
    title: "Suporte próximo",
    text: "Atendimento humano, ágil e especializado para a rotina da sua equipe.",
  },
  {
    title: "Decisões com dados",
    text: "Relatórios e indicadores que tornam cada resultado mais claro.",
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

const solutionGroups = [
  {
    eyebrow: "Operação",
    title: "Do pedido à entrega, tudo conversa.",
    items: [
      ["Compras", "Custos e lucratividade dos produtos sob controle."],
      ["Estoque", "Inventário, movimentações e análise inteligente."],
      ["Vendas", "Orçamentos, trocas, devoluções e entrega futura."],
      ["Ordem de serviço", "Uma rotina prática para oficinas e prestadores."],
      ["Expedição", "Envios, recebimentos e movimentação entre filiais."],
    ],
  },
  {
    eyebrow: "Financeiro",
    title: "Enxergue agora. Planeje o próximo passo.",
    items: [
      ["Gestão financeira", "Contas a pagar e receber com controle diário."],
      ["Fluxo de caixa", "Previsão objetiva para os próximos 30 dias."],
      ["DRE gerencial", "Uma visão 360° simples de acompanhar."],
    ],
  },
  {
    eyebrow: "Fiscal",
    title: "Documentos certos, sem complicação.",
    items: [["NFe, NFCe e NFSe", "Emissão de documentos fiscais e integração com prefeituras."]],
  },
  {
    eyebrow: "Conexões",
    title: "A gestão acompanha onde você vende.",
    items: [
      ["Integração contábil", "Portal do contador aproximando empresa e contabilidade."],
      ["E-commerce", "Vendas online integradas às principais plataformas."],
      ["WhatsApp", "Mensagens para aniversários, promoções e cobranças."],
    ],
  },
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

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Norte Brasil Digital | Gestão que move o seu negócio" },
    {
      name: "description",
      content:
        "Sistemas de gestão empresarial para varejo e serviços, com atendimento próximo em Parauapebas e região.",
    },
  ];
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function NetworkMap() {
  return (
    <div className="network-map" aria-label="Vendas, estoque, financeiro e fiscal integrados">
      <svg className="network-lines" viewBox="0 0 560 500" aria-hidden="true">
        <path className="route route-one" d="M60 55C200 70 155 205 270 230s105 155 235 165" />
        <path className="route route-two" d="M65 420c135-20 110-120 210-145s120-135 225-180" />
        <path className="route route-three" d="M55 250c120 0 145-40 215-20s140 30 235 15" />
      </svg>
      <div className="map-node node-sales">
        <strong>Vendas</strong>
      </div>
      <div className="map-node node-stock">
        <strong>Estoque</strong>
      </div>
      <div className="map-node node-finance">
        <strong>Financeiro</strong>
      </div>
      <div className="map-node node-fiscal">
        <strong>Fiscal</strong>
      </div>
      <div className="map-core">
        <strong>uma só rotina</strong>
      </div>
    </div>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(buildWhatsappHref({ name, business, phone }), "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#inicio" className="brand" aria-label="Norte Brasil Digital — início">
            <span className="brand-mark">
              <img src={logoNbdBlue} alt="" />
            </span>
          </a>

          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#solucoes">Soluções</a>
            <a href="#contato">Contato</a>
          </div>

          <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-small">
            Falar agora <ArrowIcon />
          </a>
        </nav>
      </header>

      <section id="inicio" className="hero section-shell">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy reveal reveal-one">
          <p className="eyebrow">
            <span>Parauapebas / PA</span> Tecnologia que fica por perto
          </p>
          <h1>
            Gestão que dá <em>norte</em> ao seu negócio.
          </h1>
          <p className="hero-lead">
            Sistemas completos para empresas que querem vender com controle, simplificar processos e
            decidir com clareza.
          </p>
          <div className="hero-actions">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Agendar demonstração <ArrowIcon />
            </a>
            <a href="#solucoes" className="text-link">
              Explorar soluções <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-two">
          <NetworkMap />
        </div>
      </section>

      <section className="advantage-section">
        <div className="section-shell">
          <div className="section-intro inverse">
            <h2>
              Menos ruído.
              <br />
              <em>Mais negócio.</em>
            </h2>
            <div className="advantage-stats">
              <div>
                <strong>+500</strong>
                <span>usuários ativos</span>
              </div>
              <div>
                <strong>14+</strong>
                <span>anos de mercado</span>
              </div>
            </div>
          </div>
          <div className="advantage-grid">
            {advantages.map((advantage) => (
              <article key={advantage.title} className="advantage-card">
                <h3>{advantage.title}</h3>
                <p>{advantage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="about-section section-shell">
        <div className="about-heading">
          <h2>Da nossa região para a rotina de quem faz acontecer.</h2>
        </div>
        <div className="about-story">
          <p className="story-lead">
            Há mais de 14 anos, a Norte Brasil Digital transforma tecnologia em uma ferramenta
            próxima, segura e simples para o empreendedor.
          </p>
          <div className="purpose-grid">
            <article>
              <span>Missão</span>
              <p>
                Fornecer sistemas completos e intuitivos para varejo e serviços, com segurança e
                agilidade.
              </p>
            </article>
            <article>
              <span>Visão</span>
              <p>
                Ser referência em gestão empresarial na região por unir soluções simples e
                atendimento próximo.
              </p>
            </article>
          </div>
        </div>
        <div className="values-track" aria-label="Nossos valores">
          {values.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </section>

      <section className="segments-section">
        <div className="section-shell segments-layout">
          <div className="segments-title">
            <h2>
              Seu ramo.
              <br />
              Seu ritmo.
              <br />
              <em>Um sistema.</em>
            </h2>
          </div>
          <div className="segments-list">
            {segments.map((segment) => (
              <div key={segment}>{segment}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="solutions-section section-shell">
        <div className="solutions-heading">
          <h2>Tudo o que a gestão precisa. Sem perder o fio.</h2>
          <p>Da primeira compra ao fechamento do mês, cada parte da operação trabalha conectada.</p>
        </div>
        <div className="solution-groups">
          {solutionGroups.map((group) => (
            <article key={group.eyebrow} className="solution-group">
              <div className="solution-group-title">
                <span>{group.eyebrow}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="solution-items">
                {group.items.map(([title, text]) => (
                  <div key={title}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <h2>Vamos colocar sua gestão no caminho certo?</h2>
            <p>
              Converse com nossos analistas e veja como a solução funciona na prática da sua
              empresa.
            </p>
            <blockquote>
              <span>“</span>
              <p>
                As soluções da Norte Brasil Digital foram um divisor de águas para nossa empresa. O
                suporte é incrível e a tecnologia é exatamente o que o mercado precisa.
              </p>
              <cite>
                Feliphe Silva
                <br />
                <small>TechMaster Soluções Digitais</small>
              </cite>
            </blockquote>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-topline">
              <span>Agende uma demonstração</span>
            </div>
            <label>
              <span>Seu nome</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Como podemos chamar você?"
                autoComplete="name"
              />
            </label>
            <label>
              <span>Empresa</span>
              <input
                value={business}
                onChange={(event) => setBusiness(event.target.value)}
                placeholder="Qual é o seu negócio?"
                autoComplete="organization"
              />
            </label>
            <label>
              <span>WhatsApp</span>
              <input
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="(94) 00000-0000"
                autoComplete="tel"
              />
            </label>
            <button className="button button-submit">
              Conversar pelo WhatsApp <ArrowIcon />
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoNbdWhite} alt="Norte Brasil Digital" />
            </div>
          </div>
          <div>
            <h3>Encontre</h3>
            <a href="#sobre">Sobre nós</a>
            <a href="#solucoes">Soluções</a>
            <a href="#contato">Contato</a>
          </div>
          <div>
            <h3>Converse</h3>
            <a href="mailto:nortebrasildigital@gmail.com">nortebrasildigital@gmail.com</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              (94) 99163-6639
            </a>
            <a href="https://www.instagram.com/nortebrasildigital" target="_blank" rel="noreferrer">
              @nortebrasildigital
            </a>
          </div>
          <address>
            Rua Santarém, 817
            <br />
            Bairro Maranhão
            <br />
            Parauapebas, PA
            <br />
            CEP 68515-000
          </address>
        </div>
        <div className="section-shell footer-bottom">
          <span>© 2026 Norte Brasil Digital</span>
          <span>CNPJ 17.735.149/0001-11</span>
          <span>Todos os direitos reservados</span>
        </div>
      </footer>
    </main>
  );
}
