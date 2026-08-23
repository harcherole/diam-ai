import SEO from "@/components/SEO/SEO";
import Hero from "@/components/Hero/Hero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ActivityCard from "@/components/ActivityCard/ActivityCard";
import ExpertiseGrid from "@/components/ExpertiseGrid/ExpertiseGrid";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import AfricaFocus from "@/components/AfricaFocus/AfricaFocus";
import StatBlock from "@/components/StatBlock/StatBlock";
import CTASection from "@/components/CTASection/CTASection";
import Button from "@/components/ui/Button";
import { activities } from "@/data/activities";
import { projects } from "@/data/projects";
import { partners } from "@/data/partners";
import { siteConfig } from "@/data/siteConfig";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  // Le chiffre "Partenaire(s)" est calculé depuis les données réelles des
  // partenaires plutôt que codé en dur : il reste toujours exact.
  const keyFigures = siteConfig.keyFigures.map((figure) =>
    figure.id === "partners"
      ? {
          ...figure,
          value: partners.length,
          label: partners.length > 1 ? "Partenaires" : "Partenaire",
        }
      : figure
  );

  return (
    <>
      <SEO
        title="DIAM-AI — Data, Intelligence Artificielle & Mathématiques"
        description={siteConfig.description}
        path="/"
      />

      <Hero />

      {/* Notre mission */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionTitle
                kicker="Notre mission"
                title="Démocratiser l'accès aux compétences et aux technologies de la Data et de l'Intelligence Artificielle."
                light
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-8">
                {keyFigures.map((figure) => (
                  <StatBlock key={figure.id} figure={figure} />
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Nos activités */}
      <section className="py-24">
        <Container>
          <SectionTitle
            kicker="Ce que nous faisons"
            title="Nos activités"
            description="DIAM-AI structure son action autour de quatre axes complémentaires, de la formation jusqu'à l'innovation."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </Container>
      </section>

      {/* Domaines d'expertise */}
      <section className="bg-surface-50 py-24">
        <Container>
          <SectionTitle
            kicker="Expertise"
            title="Domaines d'expertise"
            description="Une couverture technique large, de la donnée brute jusqu'aux agents IA en production."
          />
          <div className="mt-10">
            <ExpertiseGrid />
          </div>
        </Container>
      </section>

      {/* L'IA au service des enjeux africains */}
      <AfricaFocus />

      {/* Nos projets (aperçu) */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              kicker="Réalisations"
              title="Nos projets"
              description="Un aperçu des solutions Data et IA conçues par DIAM-AI."
            />
            <Button to="/projets" variant="secondary" withArrow>
              Tous les projets
            </Button>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        kicker="Se former"
        title="Prêt à monter en compétence en Data et en IA ?"
        description="Parcours DIAM, la plateforme de formation de DIAM-AI, vous accompagne pas à pas."
        ctaLabel={siteConfig.ctaSecondaryHome}
        ctaTo="/formation"
      />
    </>
  );
}
