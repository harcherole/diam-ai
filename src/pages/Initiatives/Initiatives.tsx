import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import InitiativeCard from "@/components/InitiativeCard/InitiativeCard";
import CTASection from "@/components/CTASection/CTASection";
import { initiatives } from "@/data/initiatives";

export default function Initiatives() {
  return (
    <>
      <SEO
        title="Initiatives"
        description="Club DIAM, programmes jeunesse, hackathons, olympiades IA : découvrez les initiatives portées par DIAM-AI autour de la Data et de l'IA."
        path="/initiatives"
      />

      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — Innovation & communauté
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Nos initiatives
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Au-delà de ses activités de formation et d'accompagnement,
            DIAM-AI porte des initiatives à but communautaire et éducatif :
            club, programmes jeunesse, hackathons, olympiades et événements
            autour de la Data et de l'IA.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((initiative, i) => (
              <Reveal key={initiative.id} delay={i * 0.05}>
                <InitiativeCard initiative={initiative} />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-sm text-ink-500">
            Ces initiatives sont en cours de structuration. Les détails
            (dates, modalités de participation) seront publiés au fur et à
            mesure de leur lancement.
          </p>
        </Container>
      </section>

      <CTASection
        kicker="Restons en contact"
        title="Envie d'être informé du lancement de nos initiatives ?"
        ctaLabel="Parlons de votre projet"
        ctaTo="/contact"
      />
    </>
  );
}
