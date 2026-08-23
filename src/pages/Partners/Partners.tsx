import { useMemo } from "react";
import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PartnerCard from "@/components/PartnerCard/PartnerCard";
import CTASection from "@/components/CTASection/CTASection";
import { partners } from "@/data/partners";

interface EmptyStateProps {
  message: string;
}

function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-navy-900/15 bg-surface-50 px-8 py-14 text-center">
      <p className="mx-auto max-w-md text-sm text-ink-700">{message}</p>
    </div>
  );
}

export default function Partners() {
  const localPartners = useMemo(() => partners.filter((p) => p.scope === "local"), []);
  const internationalPartners = useMemo(
    () => partners.filter((p) => p.scope === "international"),
    []
  );

  return (
    <>
      <SEO
        title="Partenaires"
        description="Découvrez les partenaires locaux et internationaux de DIAM-AI : académiques, technologiques, institutionnels et associatifs."
        path="/partenaires"
      />

      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — Ils nous font confiance
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Partenaires
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            DIAM-AI construit des partenariats académiques, technologiques,
            institutionnels et associatifs au service de sa mission, au Gabon
            et à l'international.
          </p>
        </Container>
      </section>

      {/* Partenariats locaux */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              — Au Gabon
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy-900">Partenariats locaux</h2>
          </Reveal>

          <div className="mt-10">
            {localPartners.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {localPartners.map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            ) : (
              <EmptyState message="Nos partenariats locaux sont en cours de structuration. Cette section présentera prochainement les organisations gabonaises qui accompagnent DIAM-AI." />
            )}
          </div>
        </Container>
      </section>

      {/* Partenariats internationaux */}
      <section className="bg-surface-50 py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              — À l'international
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy-900">Partenariats internationaux</h2>
          </Reveal>

          <div className="mt-10">
            {internationalPartners.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {internationalPartners.map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            ) : (
              <EmptyState message="Nos partenariats internationaux sont en cours de structuration." />
            )}
          </div>
        </Container>
      </section>

      <CTASection
        kicker="Devenir partenaire"
        title="Vous souhaitez construire un partenariat avec DIAM-AI ?"
        ctaLabel="Parlons de votre projet"
        ctaTo="/contact"
      />
    </>
  );
}
