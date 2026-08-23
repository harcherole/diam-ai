import { useMemo, useState } from "react";
import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CTASection from "@/components/CTASection/CTASection";
import EventCard from "@/components/EventCard/EventCard";
import EventFilters from "@/components/EventFilters/EventFilters";
import { activities } from "@/data/activities";
import { events } from "@/data/events";

interface ActivityDetail {
  objectives: string[];
  audience: string[];
  methodology: string[];
}

/**
 * Détails complémentaires par activité (objectifs, public, méthodologie).
 * Séparé de data/activities.ts pour garder ce dernier léger (utilisé
 * aussi sur la Home) — ce détail n'est nécessaire que sur cette page.
 */
const details: Record<string, ActivityDetail> = {
  formation: {
    objectives: [
      "Rendre les compétences Data/IA accessibles et structurées",
      "Former via Parcours DIAM, la plateforme de formation de DIAM-AI",
      "Proposer une progression par niveaux, de débutant à avancé",
    ],
    audience: ["Étudiants", "Professionnels en reconversion", "Entreprises et équipes techniques"],
    methodology: ["Théorie", "Pratique", "Projets concrets", "Accompagnement personnalisé"],
  },
  accompagnement: {
    objectives: [
      "Accompagner la montée en compétence des équipes",
      "Structurer des projets Data/IA depuis le cadrage jusqu'au déploiement",
      "Apporter un regard d'expertise sur les choix techniques et organisationnels",
    ],
    audience: ["Entreprises", "Organisations", "Professionnels", "Étudiants avancés"],
    methodology: ["Diagnostic", "Plan d'action", "Mise en œuvre", "Suivi"],
  },
  "projets-ia": {
    objectives: [
      "Concevoir des solutions Data/IA répondant à des problématiques concrètes",
      "Développer des preuves de concept jusqu'à des solutions industrialisables",
      "Documenter et partager les enseignements de chaque projet",
    ],
    audience: ["Entreprises", "Institutions publiques", "Organisations à impact"],
    methodology: ["Cadrage", "Exploration des données", "Modélisation", "Déploiement"],
  },
  innovation: {
    objectives: [
      "Fédérer une communauté autour de la Data, de l'IA et des mathématiques",
      "Favoriser l'émergence de projets à forte valeur ajoutée",
      "Organiser des temps forts : événements, hackathons, initiatives",
    ],
    audience: ["Étudiants", "Passionnés de Data/IA", "Partenaires et institutions"],
    methodology: ["Communauté", "Événements", "Projets collaboratifs"],
  },
};

export default function Activities() {
  const [activeYear, setActiveYear] = useState("Toutes");

  const years = useMemo(() => {
    const unique = Array.from(new Set(events.map((e) => e.date.slice(0, 4))));
    return unique.sort((a, b) => Number(b) - Number(a)); // plus récent d'abord
  }, []);

  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  const filteredEvents = useMemo(
    () =>
      activeYear === "Toutes"
        ? sortedEvents
        : sortedEvents.filter((e) => e.date.startsWith(activeYear)),
    [sortedEvents, activeYear]
  );

  return (
    <>
      <SEO
        title="Activités"
        description="Formation, accompagnement, projets IA et innovation : découvrez en détail les activités de DIAM-AI."
        path="/activites"
      />

      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — Ce que nous faisons
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Nos activités
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Quatre axes complémentaires structurent l'action de DIAM-AI, de la
            formation individuelle jusqu'au développement de solutions IA
            pour les organisations.
          </p>
        </Container>
      </section>

      {activities.map((activity, index) => {
        const detail = details[activity.id];
        const Icon = activity.icon;
        const alt = index % 2 === 1;

        return (
          <section
            key={activity.id}
            className={`py-20 ${alt ? "bg-surface-50" : "bg-white"}`}
          >
            <Container>
              <Reveal>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-navy-900">{activity.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
                  {activity.description}
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-3">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      Objectifs
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-700">
                      {detail.objectives.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      Public cible
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-700">
                      {detail.audience.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      Méthodologie
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-700">
                      {detail.methodology.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <Button to={activity.path} variant="secondary" withArrow>
                    {activity.cta}
                  </Button>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}

      {/* Nos événements */}
      <section className="bg-surface-50 py-20 md:py-24" id="evenements">
        <Container>
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              — Sur le terrain
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy-900">Nos événements</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
              Conférences, hackathons, olympiades et formations auxquels DIAM-AI a pris
              part ou qu'elle a organisés.
            </p>
          </Reveal>

          <div className="mt-8">
            <EventFilters years={years} active={activeYear} onChange={setActiveYear} />
          </div>

          {filteredEvents.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-sm text-ink-500">
              Aucun événement pour cette période.
            </p>
          )}
        </Container>
      </section>

      <CTASection
        title="Une question sur nos activités ?"
        ctaLabel="Parlons de votre projet"
        ctaTo="/contact"
      />
    </>
  );
}
