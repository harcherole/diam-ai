import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ValueCard from "@/components/ValueCard/ValueCard";
import TeamCard from "@/components/TeamCard/TeamCard";
import Timeline from "@/components/Timeline/Timeline";
import CTASection from "@/components/CTASection/CTASection";
import { values } from "@/data/values";
import { bureau } from "@/data/team";
import type { TimelineStep } from "@/components/Timeline/Timeline";

/**
 * Repères d'évolution de DIAM-AI — à compléter/ajuster au fil du temps.
 * Structure volontairement simple, sans dates fictives.
 */
const timelineSteps: TimelineStep[] = [
  {
    label: "Origine",
    title: "Une conviction de départ",
    description:
      "DIAM-AI naît de la conviction que la Data et l'Intelligence Artificielle doivent devenir des leviers accessibles de développement.",
  },
  {
    label: "Structuration",
    title: "Formation, accompagnement, projets",
    description:
      "Mise en place des quatre axes d'action : Formation, Accompagnement, Projets IA et Innovation & Initiatives.",
  },
  {
    label: "Aujourd'hui",
    title: "Une structure en développement",
    description:
      "DIAM-AI poursuit son développement au service des étudiants, professionnels, organisations et entreprises.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="À propos"
        description="Découvrez DIAM-AI : qui nous sommes, notre vision, notre mission et nos valeurs au service de la Data et de l'Intelligence Artificielle."
        path="/a-propos"
      />

      {/* Hero de page */}
      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — À propos de DIAM-AI
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Qui sommes-nous ?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            DIAM-AI est une structure dédiée à la démocratisation, au
            développement et à l'application de la Data et de l'Intelligence
            Artificielle — au service des étudiants, professionnels,
            organisations, entreprises et institutions.
          </p>
        </Container>
      </section>

      {/* Vision / Mission */}
      <section className="py-24">
        <Container>
          <div className="grid gap-14 md:grid-cols-2">
            <Reveal>
              <SectionTitle
                kicker="Notre vision"
                title="Faire de la Data et de l'Intelligence Artificielle des leviers accessibles de développement, d'innovation et de transformation."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionTitle
                kicker="Notre mission"
                title="Former, accompagner, innover et développer des solutions Data et IA à impact réel."
                description="Ces quatre dimensions structurent l'ensemble de l'action de DIAM-AI, depuis la montée en compétence individuelle jusqu'au déploiement de solutions pour les organisations."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Bureau */}
      <section className="py-24">
        <Container>
          <SectionTitle
            kicker="Gouvernance"
            title="Le Bureau de DIAM-AI"
            description="Les membres qui portent et animent DIAM-AI au quotidien."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bureau.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.08}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="bg-surface-50 py-24">
        <Container>
          <SectionTitle kicker="Ce qui nous guide" title="Nos valeurs" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionTitle kicker="Notre évolution" title="Le parcours de DIAM-AI" />
          <div className="mt-14">
            <Timeline steps={timelineSteps} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Envie de construire quelque chose avec DIAM-AI ?"
        ctaLabel="Parlons de votre projet"
        ctaTo="/contact"
      />
    </>
  );
}
