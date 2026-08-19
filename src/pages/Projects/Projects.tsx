import { useMemo, useState } from "react";
import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters/ProjectFilters";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

const ALL_CATEGORIES: ProjectCategory[] = [
  "Agriculture",
  "Éducation",
  "Industrie",
  "Data",
  "IA",
  "Afrique",
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "Tous">("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <>
      <SEO
        title="Projets"
        description="Découvrez les projets Data Science et Intelligence Artificielle conçus et développés par DIAM-AI."
        path="/projets"
      />

      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — Réalisations
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Nos projets
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Des solutions Data et IA conçues pour répondre à des
            problématiques concrètes, sur plusieurs secteurs et domaines.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <ProjectFilters categories={ALL_CATEGORIES} active={active} onChange={setActive} />

          {filtered.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-sm text-ink-500">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
