import { useMemo, useState } from "react";
import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import EventCard from "@/components/EventCard/EventCard";
import EventFilters from "@/components/EventFilters/EventFilters";
import CTASection from "@/components/CTASection/CTASection";
import { events } from "@/data/events";

export default function Events() {
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
        title="Événements"
        description="Conférences, hackathons, olympiades et formations auxquels DIAM-AI a pris part ou qu'elle a organisés."
        path="/evenements"
      />

      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — Sur le terrain
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Nos événements
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Conférences, hackathons, olympiades et formations auxquels DIAM-AI
            a pris part ou qu'elle a organisés. Cliquez sur une image pour
            l'agrandir.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <EventFilters years={years} active={activeYear} onChange={setActiveYear} />
          </Reveal>

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
        title="Un événement à organiser avec DIAM-AI ?"
        ctaLabel="Parlons de votre projet"
        ctaTo="/contact"
      />
    </>
  );
}
