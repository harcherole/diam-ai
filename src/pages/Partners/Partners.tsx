import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import PartnerCard from "@/components/PartnerCard/PartnerCard";
import CTASection from "@/components/CTASection/CTASection";
import { partners } from "@/data/partners";

export default function Partners() {
  return (
    <>
      <SEO
        title="Partenaires"
        description="Découvrez les partenaires académiques, technologiques et institutionnels de DIAM-AI."
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
            DIAM-AI construit des partenariats académiques, technologiques et
            institutionnels au service de sa mission.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          {partners.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-navy-900/15 bg-surface-50 px-8 py-16 text-center">
              <p className="text-base font-medium text-navy-900">
                Nos partenariats sont en cours de structuration.
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-ink-700">
                Cette page présentera prochainement les organisations qui
                accompagnent DIAM-AI dans sa mission.
              </p>
            </div>
          )}
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
