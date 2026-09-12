import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpenText,
  BracketsCurly,
  Code,
  FileCode,
  GearSix,
  List,
  MagnifyingGlass,
  TreeStructure,
  X,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { CompilerLab } from "./components/CompilerLab";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0.72, y: 18, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ExhibitImage({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`exhibit-image ${className}`}
      initial={reduceMotion ? false : { clipPath: "inset(0 0 7% 0 round 16px)", opacity: 0.82 }}
      whileInView={{ clipPath: "inset(0 0 0% 0 round 16px)", opacity: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />
    </motion.div>
  );
}

const processParts = [
  {
    icon: BracketsCurly,
    name: "Lexer",
    text: "Knipt elke regel in herkenbare tokens.",
  },
  {
    icon: MagnifyingGlass,
    name: "Parser",
    text: "Controleert hoe die tokens bij elkaar horen.",
  },
  {
    icon: TreeStructure,
    name: "AST",
    text: "Bewaart de betekenis als een boomstructuur.",
  },
  {
    icon: FileCode,
    name: "Codegenerator",
    text: "Schrijft dezelfde structuur als geldige Java.",
  },
] as const;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#inhoud">
        Ga naar de inhoud
      </a>

      <header className="site-header">
        <nav className="nav-wrap" aria-label="Hoofdnavigatie">
          <a className="brand" href="#top" aria-label="N-Lang, terug naar boven">
            <img src="/assets/n-lang-logo.webp" alt="" width="38" height="38" />
            <span>N-Lang</span>
          </a>

          <div className="nav-links">
            <a href="#werking">Werking</a>
            <a href="#compiler">Compiler</a>
            <a href="#onderzoek">Onderzoek</a>
          </div>

          <a className="button button--small" href="#lab">
            Probeer N-Lang
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
          </button>
        </nav>

        <div className="mobile-menu" id="mobile-menu" data-open={menuOpen} aria-hidden={!menuOpen}>
          <a href="#werking" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            Werking
          </a>
          <a href="#compiler" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            Compiler
          </a>
          <a href="#onderzoek" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            Onderzoek
          </a>
        </div>
      </header>

      <main id="inhoud">
        <section className="hero section-wrap" id="top">
          <div className="hero-copy">
            <h1>Code in je eigen taal.</h1>
            <p>Schrijf Nederlandse code en zie hoe N-Lang er stap voor stap geldige Java van maakt.</p>
            <div className="hero-actions">
              <a className="button" href="#lab">
                Probeer N-Lang
                <ArrowRight size={19} weight="bold" aria-hidden="true" />
              </a>
              <a className="text-link" href="#werking">
                Hoe het werkt
              </a>
            </div>
          </div>

          <div className="hero-lab">
            <CompilerLab />
          </div>
        </section>

        <section className="story-section section-wrap" id="werking">
          <Reveal className="section-heading">
            <h2>Van zin naar systeem.</h2>
            <p>Geen simpele woordvervanging. N-Lang leest structuur, bewaart betekenis en bouwt daar nieuwe code van.</p>
          </Reveal>

          <figure className="installation-figure">
            <ExhibitImage
              src="/assets/compiler-installation.webp"
              alt="Een interactieve museuminstallatie waarin losse tegels veranderen in een boomstructuur en daarna in een geordende stapel"
              eager
            />
            <figcaption>De route door de compiler, verbeeld als een tastbare installatie.</figcaption>
          </figure>

          <div className="process-rail" role="list" aria-label="Onderdelen van de compiler">
            {processParts.map(({ icon: Icon, name, text }) => (
              <Reveal className="process-part" key={name}>
                <div className="process-part__icon">
                  <Icon size={22} weight="bold" aria-hidden="true" />
                </div>
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="learning-section section-wrap">
          <ExhibitImage
            className="learning-image"
            src="/assets/learning-workshop.webp"
            alt="Drie scholieren bouwen samen een vertakte codestructuur met transparante oranje tegels in een museum"
            eager
          />

          <Reveal className="learning-copy">
            <h2>Begin met het idee, niet met het Engels.</h2>
            <p className="learning-intro">
              Bekende woorden laten beginners focussen op variabelen, keuzes en lussen. De programmeerlogica blijft echt.
            </p>

            <div className="learning-points">
              <article>
                <BookOpenText size={27} weight="duotone" aria-hidden="true" />
                <div>
                  <h3>Herkenbare woorden</h3>
                  <p><code>laat</code>, <code>toon</code> en <code>zolang</code> vertellen direct wat er gebeurt.</p>
                </div>
              </article>
              <article>
                <Code size={27} weight="duotone" aria-hidden="true" />
                <div>
                  <h3>Echte structuur</h3>
                  <p>Haakjes, rekenvolgorde en blokken vragen nog steeds om een lexer, parser en AST.</p>
                </div>
              </article>
            </div>
          </Reveal>
        </section>

        <section className="mechanism-section" id="compiler">
          <div className="section-wrap">
            <Reveal className="section-heading section-heading--compact">
              <h2>Kijk onder de motorkap.</h2>
              <p>Vier onderdelen geven losse Nederlandse regels een betekenis die Java kan uitvoeren.</p>
            </Reveal>

            <div className="mechanism-grid">
              <Reveal className="mechanism-cell mechanism-cell--lexer">
                <BracketsCurly size={30} weight="duotone" aria-hidden="true" />
                <h3>De lexer maakt tokens</h3>
                <p>De regel wordt geen tekstsoep, maar een rij herkenbare bouwstenen.</p>
                <div className="token-demo" aria-label="Voorbeeld van tokens">
                  <span>laat</span>
                  <span>leeftijd</span>
                  <span>=</span>
                  <span>15</span>
                </div>
              </Reveal>

              <Reveal className="mechanism-cell mechanism-cell--parser">
                <MagnifyingGlass size={30} weight="duotone" aria-hidden="true" />
                <h3>De parser vindt het verband</h3>
                <p><code>3 * 2</code> hoort bij elkaar voordat er <code>5</code> bij komt.</p>
                <div className="equation-demo" aria-label="Rekenvolgorde voorbeeld">
                  <span>5 +</span>
                  <strong>(3 × 2)</strong>
                </div>
              </Reveal>

              <Reveal className="mechanism-cell mechanism-cell--ast">
                <TreeStructure size={30} weight="duotone" aria-hidden="true" />
                <h3>De AST bewaart betekenis</h3>
                <pre aria-label="Kleine abstracte syntaxisboom">{`Optelling
├─ Getal 5
└─ Vermenigvuldiging
   ├─ Getal 3
   └─ Getal 2`}</pre>
              </Reveal>

              <Reveal className="mechanism-cell mechanism-cell--codegen">
                <GearSix size={30} weight="duotone" aria-hidden="true" />
                <h3>De codegenerator schrijft Java</h3>
                <p>De boom wordt opnieuw tekst, nu volgens de regels van de doeltaal.</p>
                <pre aria-label="Gegenereerde Java-code">System.out.println(5 + (3 * 2));</pre>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="research-section section-wrap" id="onderzoek">
          <Reveal className="research-lead">
            <h2>Een taal is meer dan een woordenlijst.</h2>
            <blockquote>
              Hoe ontwerp en bouw je een kleine Nederlandstalige programmeertaal die naar Java vertaalt?
            </blockquote>
          </Reveal>

          <div className="research-details">
            <Reveal className="research-block">
              <BookOpenText size={30} weight="duotone" aria-hidden="true" />
              <h3>We onderzoeken</h3>
              <p>Tokens, grammatica, parsing, betekenis en de grens tussen vertalen en echt begrijpen.</p>
            </Reveal>
            <Reveal className="research-block">
              <GearSix size={30} weight="duotone" aria-hidden="true" />
              <h3>We bouwen</h3>
              <p>Een compacte transpiler met variabelen, tekst, berekeningen, keuzes, lussen en duidelijke fouten.</p>
            </Reveal>
          </div>
        </section>

        <section className="closing-section">
          <div className="section-wrap closing-inner">
            <img src="/assets/n-lang-logo.webp" alt="" width="92" height="92" loading="lazy" />
            <Reveal className="closing-copy">
              <h2>Schrijf je eerste Nederlandse regel.</h2>
              <p>Open de speelplaats, verander een voorbeeld en ontdek wat de compiler van jouw code maakt.</p>
              <a className="button" href="#lab">
                Probeer N-Lang
                <ArrowRight size={19} weight="bold" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand brand--footer" href="#top">
            <img src="/assets/n-lang-logo.webp" alt="" width="34" height="34" loading="lazy" />
            <span>N-Lang</span>
          </a>
          <p>Een profielwerkstuk over taal, code en toegankelijkheid.</p>
          <p>Gemaakt in Nederland.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
