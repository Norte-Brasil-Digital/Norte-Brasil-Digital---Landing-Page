import { useState, type FormEvent } from "react";
import type { Route } from "./+types/_index";
import logoNbdBlue from "../assets/logo-nbd-blue-full.png";
import logoNbdWhite from "../assets/logo-nbd-white-full.png";
import sistemaMobile from "../assets/sistema-mobile.png";
import { buildWhatsappHref } from "../lib/whatsapp";

const whatsappHref = buildWhatsappHref();

/* ─── Dados ─────────────────────────────────────── */

const features = [
  {
    icon: "👗",
    title: "PDV para Moda",
    text: "Venda roupas, calçados e acessórios com grade de cor e tamanho integrada. Cupom fiscal em segundos.",
  },
  {
    icon: "📦",
    title: "Estoque Inteligente",
    text: "Controle cada peça por SKU, cor e tamanho. Alertas de baixo estoque e inventário automatizado.",
  },
  {
    icon: "💰",
    title: "Financeiro Completo",
    text: "Contas a pagar e receber, fluxo de caixa e DRE gerencial para enxergar o lucro real da sua loja.",
  },
  {
    icon: "🧾",
    title: "Fiscal Integrado",
    text: "Emissão de NF-e, NFC-e e NFS-e. Integração direta com a contabilidade da sua empresa.",
  },
  {
    icon: "📲",
    title: "Vendas pelo WhatsApp",
    text: "Disparo de promoções, aniversários e cobranças diretamente pelo WhatsApp para sua base de clientes.",
  },
  {
    icon: "🛍️",
    title: "E-commerce Integrado",
    text: "Conecte sua loja física às principais plataformas de venda online. Estoque sempre sincronizado.",
  },
];

const segments = [
  { emoji: "👚", label: "Roupas Femininas" },
  { emoji: "👔", label: "Moda Masculina" },
  { emoji: "👟", label: "Calçados" },
  { emoji: "👙", label: "Moda Íntima" },
  { emoji: "🧢", label: "Acessórios" },
  { emoji: "🏃", label: "Artigos Esportivos" },
  { emoji: "👶", label: "Moda Infantil" },
  { emoji: "💍", label: "Semijoias" },
  { emoji: "🧣", label: "Multimarcas" },
  { emoji: "🛍️", label: "Boutiques" },
  { emoji: "👗", label: "Moda Plus Size" },
  { emoji: "🏬", label: "Atacado de Moda" },
];

const steps = [
  {
    number: "1",
    title: "Agende uma demo gratuita",
    text: "Fale com nossos analistas e veja o sistema funcionando na prática para o seu tipo de loja.",
  },
  {
    number: "2",
    title: "Implantamos para você",
    text: "Nossa equipe configura tudo — produtos, financeiro, fiscal — com treinamento presencial ou online.",
  },
  {
    number: "3",
    title: "Venda com controle total",
    text: "Sua loja operando com agilidade, dados em tempo real e suporte humano sempre que precisar.",
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

/* ─── Meta ───────────────────────────────────────── */
export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Norte Brasil Digital | Sistema de Gestão para Lojas de Moda" },
    {
      name: "description",
      content:
        "Sistema completo para lojas de roupas, calçados e vestuário em Parauapebas e região. Controle seu estoque, financeiro, fiscal e PDV em um só lugar.",
    },
  ];
}

/* ─── Ícones ─────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Página ─────────────────────────────────────── */
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
      {/* ─── Header ─── */}
      <header className="site-header">
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#inicio" className="brand" aria-label="Norte Brasil Digital — início">
            <img src={logoNbdBlue} alt="Norte Brasil Digital" />
          </a>

          <div className="nav-links">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#segmentos">Segmentos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>

          <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-nav">
            <WhatsAppIcon /> Falar agora
          </a>
        </nav>
      </header>

      {/* ─── Hero ─── */}
      <section id="inicio" className="hero section-shell">
        <div className="hero-copy reveal reveal-1">
          <div className="hero-badge">Parauapebas · PA</div>
          <h1>
            Sua loja de moda merece um sistema que <em>realmente funciona.</em>
          </h1>
          <p className="hero-lead">
            Controle estoque por grade, venda no caixa e no celular, emita notas fiscais e
            acompanhe o financeiro — tudo integrado, sem complicação.
          </p>
          <div className="hero-actions">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              <WhatsAppIcon /> Agendar demonstração gratuita
            </a>
            <a href="#funcionalidades" className="text-link">
              Ver funcionalidades <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-2">
          <div className="hero-glow" aria-hidden="true" />
          <img
            src={sistemaMobile}
            alt="Sistema Norte Brasil Digital no celular"
            className="hero-phone"
          />
        </div>
      </section>

      {/* ─── Prova social ─── */}
      <section className="proof-bar" aria-label="Números da empresa">
        <div className="proof-inner">
          <div className="proof-item">
            <strong>+500</strong>
            <span>usuários ativos</span>
          </div>
          <div className="proof-item">
            <strong>14+</strong>
            <span>anos de mercado</span>
          </div>
          <div className="proof-item">
            <strong>100%</strong>
            <span>suporte local</span>
          </div>
          <div className="proof-item">
            <strong>Parauapebas</strong>
            <span>e toda a região</span>
          </div>
        </div>
      </section>

      {/* ─── Problema / Solução ─── */}
      <section className="problem-section">
        <div className="section-shell problem-inner">
          <div className="problem-copy">
            <h2>
              Ainda gerencia sua loja no <em>caderno e na planilha?</em>
            </h2>
            <p>
              Sabemos como é difícil crescer quando o controle fica para trás. Esses problemas
              são mais comuns do que parecem nas lojas de moda da nossa região:
            </p>
            <ul className="pain-list">
              <li>Estoque com divergências por falta de controle de grade (cor/tamanho)</li>
              <li>Caixa sem visibilidade real do que entra e sai todo dia</li>
              <li>Perda de vendas por não saber quais peças estão em falta</li>
              <li>Dificuldade para emitir nota fiscal e cumprimento do fiscal</li>
              <li>Clientes sem ativação e comunicação manual pelo WhatsApp</li>
            </ul>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-primary">
              Quero resolver isso <ArrowIcon />
            </a>
          </div>

          <div className="problem-solution">
            <h3>✦ Com a Norte Brasil Digital você tem</h3>
            <ul className="solution-list">
              <li>PDV completo com grade de cor e tamanho</li>
              <li>Controle de estoque em tempo real por produto e filial</li>
              <li>Fluxo de caixa diário e DRE gerencial automático</li>
              <li>Emissão de NF-e e NFC-e com 1 clique</li>
              <li>Disparos de WhatsApp para clientes cadastrados</li>
              <li>Relatórios de giro de peças e curva ABC</li>
              <li>Suporte presencial e remoto em Parauapebas e região</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Funcionalidades ─── */}
      <section id="funcionalidades" className="features-section">
        <div className="section-shell">
          <div className="section-header">
            <span className="section-eyebrow">Funcionalidades</span>
            <h2>Tudo que sua loja de moda precisa em um só sistema</h2>
            <p>
              Do caixa ao estoque, do financeiro ao fiscal — cada módulo foi pensado para a
              realidade do varejo de moda brasileiro.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Segmentos ─── */}
      <section id="segmentos" className="segments-section">
        <div className="section-shell">
          <div className="section-header">
            <span className="section-eyebrow">Segmentos atendidos</span>
            <h2>Para todo tipo de loja de moda</h2>
            <p>
              Seja você uma boutique, um atacado ou uma loja multimarcas, o sistema se adapta ao
              seu modelo de negócio.
            </p>
          </div>

          <div className="segments-grid">
            {segments.map((seg) => (
              <div key={seg.label} className="segment-pill">
                <span aria-hidden="true">{seg.emoji}</span>
                {seg.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Como funciona ─── */}
      <section className="how-section">
        <div className="section-shell">
          <div className="section-header">
            <span className="section-eyebrow">Como funciona</span>
            <h2>Comece em 3 passos simples</h2>
            <p>
              Nossa equipe cuida de toda a implantação. Você foca em vender, nós cuidamos da
              tecnologia.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number" aria-hidden="true">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sobre ─── */}
      <section id="sobre" className="about-section">
        <div className="section-shell about-inner">
          <div className="about-copy">
            <h2>Da nossa região para quem <em>faz acontecer.</em></h2>
            <p>
              Há mais de 14 anos, a Norte Brasil Digital transforma tecnologia em uma ferramenta
              próxima, segura e simples para o empreendedor do varejo de Parauapebas e região.
            </p>
            <div className="mvv-grid">
              <div className="mvv-card">
                <span>Missão</span>
                <p>Fornecer sistemas completos e intuitivos para varejo, com segurança e agilidade.</p>
              </div>
              <div className="mvv-card">
                <span>Visão</span>
                <p>Ser referência em gestão para o varejo regional com soluções simples e suporte próximo.</p>
              </div>
            </div>
          </div>

          <div className="values-block">
            <h3>Nossos valores</h3>
            <div className="values-tags">
              {values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Depoimento ─── */}
      <section className="testimonial-section" aria-label="Depoimento de cliente">
        <div className="section-shell">
          <div className="section-header" style={{ marginBottom: 40 }}>
            <span className="section-eyebrow">Depoimento</span>
            <h2>Quem usa, recomenda</h2>
          </div>
          <div className="testimonial-card">
            <blockquote>
              As soluções da Norte Brasil Digital foram um divisor de águas para nossa empresa. O
              suporte é incrível, o sistema é fácil de usar e a tecnologia é exatamente o que o
              mercado de moda da nossa região precisa.
            </blockquote>
            <cite>
              Feliphe Silva
              <small>TechMaster Soluções Digitais</small>
            </cite>
          </div>
        </div>
      </section>

      {/* ─── Contato ─── */}
      <section id="contato" className="contact-section">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <h2>Vamos colocar sua loja no caminho certo?</h2>
            <p>
              Fale com nossos analistas e veja como o sistema funciona na prática para o seu tipo
              de loja. A demonstração é gratuita e sem compromisso.
            </p>
            <ul className="contact-info-list">
              <li>
                <span className="icon">📞</span>
                <a href="tel:+5594991636639">(94) 99163-6639</a>
              </li>
              <li>
                <span className="icon">✉️</span>
                <a href="mailto:nortebrasildigital@gmail.com">nortebrasildigital@gmail.com</a>
              </li>
              <li>
                <span className="icon">📍</span>
                <span>Rua Santarém, 817 — Bairro Maranhão, Parauapebas/PA</span>
              </li>
              <li>
                <span className="icon">📸</span>
                <a href="https://www.instagram.com/nortebrasildigital" target="_blank" rel="noreferrer">
                  @nortebrasildigital
                </a>
              </li>
            </ul>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-primary">
              <WhatsAppIcon /> Conversar no WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-topline">✦ Agende uma demonstração gratuita</div>
            <label>
              <span>Seu nome</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos chamar você?"
                autoComplete="name"
              />
            </label>
            <label>
              <span>Nome da loja / empresa</span>
              <input
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Qual é o nome do seu negócio?"
                autoComplete="organization"
              />
            </label>
            <label>
              <span>WhatsApp</span>
              <input
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(94) 00000-0000"
                autoComplete="tel"
              />
            </label>
            <button className="button button-submit">
              <WhatsAppIcon /> Conversar pelo WhatsApp <ArrowIcon />
            </button>
          </form>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoNbdWhite} alt="Norte Brasil Digital" />
            </div>
            <p>
              Sistemas de gestão para varejo de moda em Parauapebas e região. Tecnologia próxima,
              suporte humano.
            </p>
          </div>
          <div>
            <h3>Navegue</h3>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#segmentos">Segmentos</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#contato">Contato</a>
          </div>
          <div>
            <h3>Fale conosco</h3>
            <a href="mailto:nortebrasildigital@gmail.com">nortebrasildigital@gmail.com</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">(94) 99163-6639</a>
            <a href="https://www.instagram.com/nortebrasildigital" target="_blank" rel="noreferrer">
              @nortebrasildigital
            </a>
          </div>
          <address>
            <h3>Endereço</h3>
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
