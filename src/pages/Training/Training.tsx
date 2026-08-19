import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Button from "@/components/ui/Button";
import CourseCard from "@/components/CourseCard/CourseCard";
import { courses } from "@/data/courses";
import { siteConfig } from "@/data/siteConfig";

const reasons = [
  "Une progression structurée, du niveau débutant au niveau avancé",
  "Des contenus conçus et maintenus par DIAM-AI",
  "Une approche pratique, ancrée dans des projets réels",
  "Un accompagnement pensé pour la montée en compétence durable",
];

const audiences = [
  "Étudiants",
  "Professionnels en activité",
  "Personnes en reconversion",
  "Entreprises",
  "Organisations",
];

const methodology = [
  { title: "Théorie", description: "Des fondations solides pour comprendre, pas seulement reproduire." },
  { title: "Pratique", description: "Des exercices concrets à chaque étape de l'apprentissage." },
  { title: "Projets", description: "Des projets réels pour ancrer les compétences durablement." },
  { title: "Accompagnement", description: "Un suivi pour lever les blocages et progresser au bon rythme." },
  { title: "Progression par niveaux", description: "Un parcours pensé du débutant à l'avancé, sans rupture." },
];

export default function Training() {
  return (
    <>
      <SEO
        title="Formation"
        description="Parcours DIAM, la plateforme de formation de DIAM-AI dédiée à la Data Science, au Machine Learning, au Deep Learning et à l'IA générative."
        path="/formation"
      />

      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — Formation
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Se former à la Data et à l'Intelligence Artificielle
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            <span className="font-semibold text-white">Parcours DIAM</span> est
            la plateforme de formation en ligne de DIAM-AI, dédiée à
            l'apprentissage de la Data Science et de l'Intelligence
            Artificielle — de Python jusqu'aux agents IA.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to={siteConfig.parcoursDiam.url} external variant="primary" withArrow>
              Accéder à Parcours DIAM
            </Button>
            <span className="text-sm text-white/50">{siteConfig.parcoursDiam.url}</span>
          </div>
        </Container>
      </section>

      {/* Pourquoi se former avec DIAM-AI */}
      <section className="py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionTitle
                kicker="Pourquoi DIAM-AI"
                title="Pourquoi se former avec DIAM-AI ?"
                description="Parcours DIAM traduit la mission de DIAM-AI en un programme concret : rendre les compétences Data/IA accessibles, structurées et ancrées dans la pratique."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-sm text-ink-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                    {reason}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Parcours disponibles */}
      <section className="bg-surface-50 py-24">
        <Container>
          <SectionTitle
            kicker="Parcours disponibles"
            title="Ce que vous pouvez apprendre"
            description="De Python aux agents IA, une couverture complète pour progresser étape par étape sur Parcours DIAM."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* Pour qui */}
      <section className="py-24">
        <Container>
          <SectionTitle kicker="Pour qui" title="Une formation pour chaque profil" />
          <div className="mt-10 flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-navy-900/10 bg-white px-5 py-2.5 text-sm font-medium text-navy-800"
              >
                {audience}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Méthode pédagogique */}
      <section className="bg-navy-900 py-24">
        <Container>
          <SectionTitle kicker="Méthode pédagogique" title="Comment nous formons" light />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {methodology.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-mono text-xs font-semibold text-cyan">0{i + 1}</p>
                  <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-24">
        <Container className="text-center">
          <SectionTitle
            kicker="Prêt à commencer"
            title="Accédez dès maintenant à Parcours DIAM"
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <Button to={siteConfig.parcoursDiam.url} external variant="primary" withArrow>
              Accéder à Parcours DIAM
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
