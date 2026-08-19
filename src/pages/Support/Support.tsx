import { Database, Users, MessageSquare, Cpu, FlaskConical, RefreshCcw } from "lucide-react";
import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CTASection from "@/components/CTASection/CTASection";

const offers = [
  {
    icon: Database,
    title: "Accompagnement Data & IA",
    description: "Un accompagnement sur mesure pour structurer votre démarche Data et IA, du diagnostic à la mise en œuvre.",
  },
  {
    icon: Users,
    title: "Formation des équipes",
    description: "Monter en compétence vos équipes internes sur la Data Science, le Machine Learning ou l'IA générative.",
  },
  {
    icon: MessageSquare,
    title: "Conseil",
    description: "Un regard d'expertise indépendant sur vos choix technologiques et organisationnels liés à la donnée.",
  },
  {
    icon: Cpu,
    title: "Développement de solutions IA",
    description: "Conception et développement de solutions Data/IA adaptées à vos problématiques métier.",
  },
  {
    icon: FlaskConical,
    title: "Prototypage / POC",
    description: "Valider rapidement la faisabilité d'une idée avant d'investir dans une solution complète.",
  },
  {
    icon: RefreshCcw,
    title: "Transformation Data",
    description: "Accompagner la transformation de votre organisation vers une culture de la donnée durable.",
  },
];

export default function Support() {
  return (
    <>
      <SEO
        title="Accompagnement"
        description="DIAM-AI accompagne les entreprises et organisations dans leur montée en compétence Data/IA, le conseil et le développement de solutions."
        path="/accompagnement"
      />

      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — Pour les entreprises et organisations
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Accompagnement
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            DIAM-AI accompagne les entreprises, organisations et institutions
            dans leur montée en compétence et leurs projets Data et
            Intelligence Artificielle.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionTitle kicker="Nos offres" title="Ce que nous proposons" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer, i) => {
              const Icon = offer.icon;
              return (
                <Reveal key={offer.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-semibold text-navy-900">{offer.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                      {offer.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        kicker="Discutons de vos besoins"
        title="Parlons de votre projet"
        description="Décrivez-nous votre contexte : nous reviendrons vers vous avec une proposition adaptée."
        ctaLabel="Parlons de votre projet"
        ctaTo="/contact"
      />
    </>
  );
}
