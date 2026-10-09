import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { inscriptionParcours, ioaiInscriptionConfig } from "@/data/ioaiInscription";

/**
 * Hero de la page d'inscription — même traitement visuel que IoaiHero.tsx
 * (fond navy, pattern-subtle, glow radial) pour que la transition depuis
 * /ioai-gabon soit immédiate, sans rupture de ton.
 */
export default function InscriptionHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-10 md:pb-20 md:pt-14">
      <div className="pattern-subtle absolute inset-0 opacity-[0.4]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,_rgba(47,111,237,0.22)_0%,_transparent_45%),radial-gradient(circle_at_85%_20%,_rgba(23,195,178,0.16)_0%,_transparent_45%)]" />

      <Container className="relative">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — IOAI Gabon 2027
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-white md:text-5xl">
            Inscription à la sélection nationale
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Révèle ton potentiel en mathématiques, programmation et intelligence
            artificielle.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            Ce formulaire marque le début de ta participation au processus de
            sélection nationale pour l'International Olympiad in Artificial
            Intelligence (IOAI) 2027. Il prend quelques minutes à compléter.
          </p>
          <p className="mt-3 max-w-2xl text-sm font-semibold text-cyan">
            Round 1 — Qualification nationale : {ioaiInscriptionConfig.round1Period}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 md:flex-nowrap md:px-8">
            {inscriptionParcours.map((step, i) => (
              <div key={step.id} className="flex items-center gap-2">
                <span
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold sm:text-sm ${
                    i === 0
                      ? "bg-cyan text-navy-950"
                      : "bg-white/10 text-white ring-1 ring-white/15"
                  }`}
                >
                  {step.label}
                </span>
                {i < inscriptionParcours.length - 1 && (
                  <ArrowRight size={14} className="shrink-0 text-white/30" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
