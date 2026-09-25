import { ShieldCheck, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import IoaiAccreditation from "@/components/Ioai/IoaiAccreditation";
import { ioaiGabonConfig } from "@/data/ioaiGabon";

/**
 * Hero de la page IOAI Gabon. L'accréditation officielle est placée très
 * haut à dessein (bandeau de statut + visuel du certificat dans le Hero
 * lui-même) : c'est l'élément qui crédibilise immédiatement la page.
 */
export default function IoaiHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="pattern-subtle absolute inset-0 opacity-[0.4]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,_rgba(47,111,237,0.22)_0%,_transparent_45%),radial-gradient(circle_at_85%_20%,_rgba(23,195,178,0.16)_0%,_transparent_45%)]" />

      <Container className="relative">
        {/* Bandeau statut officiel — très haut dans la page */}
        <Reveal>
          <a
            href={ioaiGabonConfig.officialSite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan transition-colors hover:border-cyan/60"
          >
            <ShieldCheck size={15} strokeWidth={2.25} />
            Organisation accréditée · IOAI — Gabon
          </a>
        </Reveal>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal delay={0.05}>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                — Olympiade Internationale d'IA
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-white md:text-6xl">
                Olympiade Internationale d'IA
                <br />
                Gabon 🇬🇦
              </h1>
              <p className="mt-4 font-display text-lg font-semibold text-white/80 md:text-xl">
                National Selection – Gabon
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                Construire la prochaine génération de talents gabonais en
                intelligence artificielle.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60">
                DIAM-AI est l'organisation{" "}
                <span className="font-semibold text-cyan">accréditée</span>{" "}
                pour représenter le Gabon auprès de l'International Olympiad
                in Artificial Intelligence (IOAI) et organiser le processus
                national de sélection des jeunes talents gabonais.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#selection"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Découvrir la sélection
                  <ArrowRight size={16} strokeWidth={2.25} />
                </a>
                <a
                  href="#participer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  Je veux participer
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pl-6">
            <IoaiAccreditation />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
