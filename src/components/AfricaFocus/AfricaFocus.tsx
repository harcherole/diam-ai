import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container";
import { africaDomains } from "@/data/africaFocus";

/**
 * Section "L'IA au service des enjeux africains".
 * Traitement volontairement institutionnel : grille sobre, aucune
 * illustration clichée, la texture `pattern-subtle` porte seule la
 * touche graphique africaine (motif géométrique discret).
 */
export default function AfricaFocus() {
  return (
    <section className="relative overflow-hidden bg-surface-50 py-24">
      <div className="pattern-subtle absolute inset-0" />

      <Container className="relative">
        <SectionTitle
          kicker="Ancrage africain"
          title="L'IA au service des enjeux africains"
          description="DIAM-AI porte une vision claire : développer des compétences et des solutions Data/IA adaptées aux réalités et aux priorités du continent."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {africaDomains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <Reveal key={domain.id} delay={i * 0.05}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy-900/8 bg-white p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">{domain.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
