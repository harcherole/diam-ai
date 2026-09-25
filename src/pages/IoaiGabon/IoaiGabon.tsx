import { Mail, Linkedin, ExternalLink, FileDown } from "lucide-react";
import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/ContactForm/ContactForm";
import IoaiHero from "@/components/Ioai/IoaiHero";
import IoaiProcess from "@/components/Ioai/IoaiProcess";
import IoaiCalendar from "@/components/Ioai/IoaiCalendar";
import IoaiScientificProgram from "@/components/Ioai/IoaiScientificProgram";
import IoaiFAQ from "@/components/Ioai/IoaiFAQ";
import IoaiTeam from "@/components/Ioai/IoaiTeam";
import { siteConfig } from "@/data/siteConfig";
import {
  ioaiGabonConfig,
  ioaiGabonWhy,
  ioaiGabonEligibility,
  ioaiGabonPreparationPath,
} from "@/data/ioaiGabon";

const miniNav = [
  { label: "À propos", href: "#apropos" },
  { label: "Participation", href: "#participer" },
  { label: "Sélection", href: "#selection" },
  { label: "Calendrier", href: "#calendrier" },
  { label: "Programme", href: "#programme" },
  { label: "Règlement", href: "#reglement" },
  { label: "FAQ", href: "#faq" },
];

const resultsRounds = [
  { id: "round1", label: "Round 1" },
  { id: "round2", label: "Round 2" },
  { id: "final", label: "Final Selection" },
];

export default function IoaiGabon() {
  return (
    <>
      <SEO
        title="IOAI Gabon 2027 — Olympiade Internationale d'Intelligence Artificielle"
        description="Découvrez la sélection nationale du Gabon pour l'International Olympiad in Artificial Intelligence (IOAI). Inscriptions, calendrier, programme scientifique, processus de sélection et préparation de l'équipe nationale gabonaise."
        path="/ioai-gabon"
        image="/assets/ioai/ioai-gabon-og.png"
        keywords={[
          "IOAI Gabon",
          "Olympiade IA Gabon",
          "Olympiade Internationale d'IA",
          "Intelligence artificielle Gabon",
          "IA Gabon",
          "Data Science Gabon",
          "Python Gabon",
          "Olympiade scientifique Gabon",
          "DIAM-AI",
          "IOAI 2027",
        ]}
      />

      <IoaiHero />

      {/* Mini-navigation sticky */}
      <div className="sticky top-20 z-30 border-b border-navy-900/8 bg-white/95 backdrop-blur-md">
        <Container>
          <nav
            aria-label="Navigation de la page IOAI Gabon"
            className="flex gap-6 overflow-x-auto py-3.5 text-sm font-medium text-ink-700 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {miniNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 whitespace-nowrap transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* À propos de l'IOAI + DIAM-AI */}
      <section id="apropos" className="scroll-mt-32 py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionTitle kicker="Informations officielles IOAI" title="À propos de l'IOAI" />
              <p className="mt-5 text-sm leading-relaxed text-ink-700">
                L'International Olympiad in Artificial Intelligence (IOAI) est
                une compétition internationale destinée aux élèves du
                secondaire, visant à stimuler l'intérêt pour l'intelligence
                artificielle, la résolution de problèmes, les mathématiques,
                l'informatique et les technologies numériques.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                L'IOAI rassemble des équipes nationales provenant de
                différents pays et territoires autour d'épreuves et
                d'activités scientifiques liées à l'intelligence artificielle.
              </p>
              <a
                href={ioaiGabonConfig.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
              >
                Découvrir l'IOAI
                <ExternalLink size={15} />
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionTitle kicker="Sélection nationale du Gabon" title="À propos de DIAM-AI" />
              <p className="mt-5 text-sm leading-relaxed text-ink-700">
                DIAM-AI — Data Intelligence, Artificial Intelligence &amp;
                Mathematics — est une initiative dédiée au développement des
                compétences en Data Science, Intelligence Artificielle,
                Mathématiques et technologies numériques.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                Dans le cadre de l'IOAI, DIAM-AI a pour mission de contribuer
                à la mise en place d'un processus national de sélection
                ouvert aux jeunes talents gabonais, transparent, inclusif et
                fondé sur les compétences scientifiques et techniques.
              </p>
              <a
                href="https://diam-ai.com"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
              >
                diam-ai.com
                <ExternalLink size={15} />
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pourquoi participer */}
      <section className="bg-navy-900 py-24">
        <Container>
          <SectionTitle kicker="Pourquoi participer" title="Ce que la sélection apporte" light />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ioaiGabonWhy.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.id} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-white/45">
            La participation à la sélection ne garantit pas automatiquement
            une place dans l'équipe nationale — celle-ci est déterminée à
            l'issue du processus complet de sélection.
          </p>
        </Container>
      </section>

      {/* Qui peut participer / Comment participer */}
      <section id="participer" className="scroll-mt-32 py-24">
        <Container>
          <SectionTitle
            kicker="Comment participer"
            title="Qui peut participer ?"
            description="Les conditions ci-dessous seront précisées par le règlement officiel de la sélection nationale."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {ioaiGabonEligibility.map((card, i) => (
              <Reveal key={card.id} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-navy-900/8 bg-surface-50 p-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-500">
            Les conditions définitives d'éligibilité seront publiées avec le
            règlement officiel de la sélection nationale.
          </p>

          {/* Frais */}
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-cyan/25 bg-cyan/[0.06] p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
                  Participation gratuite
                </p>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-navy-800">
                  La participation à la sélection nationale est gratuite pour
                  les élèves. Aucun élève ne doit être exclu du processus de
                  sélection pour des raisons financières.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-900"
              >
                Être informé de l'ouverture des inscriptions
              </a>
              <a href="#calendrier" className="text-sm font-semibold text-accent">
                Voir le calendrier prévisionnel →
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Processus de sélection */}
      <section id="selection" className="scroll-mt-32 bg-surface-50 py-24">
        <Container>
          <SectionTitle
            kicker="Processus"
            title="Processus de sélection"
            description="Quatre étapes, de la qualification nationale à la constitution de l'équipe du Gabon."
          />
          <div className="mt-14">
            <IoaiProcess />
          </div>
        </Container>
      </section>

      {/* Calendrier */}
      <section id="calendrier" className="scroll-mt-32 py-24">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <SectionTitle kicker="Dates clés" title="Calendrier prévisionnel — IOAI Gabon 2027" />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Badge tone="accent">Calendrier prévisionnel</Badge>
          </div>
          <p className="mt-4 max-w-xl text-sm text-ink-500">
            Les dates sont susceptibles d'être modifiées. Les dates
            officielles seront publiées sur cette page.
          </p>
          <div className="mt-12">
            <IoaiCalendar />
          </div>
        </Container>
      </section>

      {/* Programme scientifique */}
      <section id="programme" className="scroll-mt-32 bg-surface-50 py-24">
        <Container>
          <SectionTitle
            kicker="Préparation"
            title="Programme scientifique"
            description="Les domaines de préparation envisagés pour les candidats à la sélection nationale."
          />
          <div className="mt-12">
            <IoaiScientificProgram />
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-500">
            Ces domaines constituent les axes de préparation envisagés et ne
            représentent pas le règlement officiel des épreuves tant que
            celui-ci n'a pas été définitivement validé.
          </p>
        </Container>
      </section>

      {/* Un parcours de préparation */}
      <section className="py-24">
        <Container>
          <SectionTitle
            kicker="Notre approche"
            title="Un parcours de préparation, pas seulement une compétition"
            description="Notre objectif ne se limite pas à organiser une épreuve de sélection. Nous voulons construire progressivement un parcours permettant aux jeunes talents gabonais de développer leurs compétences en mathématiques, algorithmique, programmation, Data Science et intelligence artificielle."
          />
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3 rounded-2xl border border-navy-900/8 bg-white px-5 py-6 md:flex-nowrap md:px-8">
              {ioaiGabonPreparationPath.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="whitespace-nowrap rounded-full bg-surface-50 px-3.5 py-1.5 text-xs font-semibold text-navy-900 ring-1 ring-navy-900/8 sm:text-sm">
                    {step}
                  </span>
                  {i < ioaiGabonPreparationPath.length - 1 && (
                    <span className="text-accent/50">→</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Règlement */}
      <section id="reglement" className="scroll-mt-32 bg-navy-900 py-24">
        <Container>
          <SectionTitle kicker="Cadre officiel" title="Règlement" light />
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm leading-relaxed text-white/75">
                  Le règlement officiel de la sélection nationale sera publié
                  avant l'ouverture des inscriptions.
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/50">
                  Les règles définitives de participation, d'évaluation, de
                  sélection et d'organisation seront communiquées
                  publiquement avant chaque étape.
                </p>
              </div>
              <span className="inline-flex shrink-0 cursor-not-allowed items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/40">
                <FileDown size={16} />
                Télécharger le règlement — À venir
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Résultats */}
      <section className="py-24">
        <Container>
          <SectionTitle kicker="Suivi" title="Résultats" />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {resultsRounds.map((round, i) => (
              <Reveal key={round.id} delay={i * 0.06}>
                <div className="rounded-2xl border border-dashed border-navy-900/15 bg-surface-50 p-6 text-center">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {round.label}
                  </p>
                  <p className="mt-3 text-sm font-medium text-ink-700">Résultats à venir</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Équipe du Gabon */}
      <section className="bg-surface-50 py-24">
        <Container>
          <SectionTitle kicker={`IOAI ${ioaiGabonConfig.edition} — ${ioaiGabonConfig.hostCity}`} title="🇬🇦 Équipe du Gabon" />
          <p className="mt-4 max-w-xl text-sm text-ink-700">
            Les membres de l'équipe nationale seront annoncés à l'issue du
            processus de sélection.
          </p>
          <div className="mt-12">
            <IoaiTeam />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-32 py-24">
        <Container className="max-w-3xl">
          <SectionTitle kicker="Questions fréquentes" title="FAQ" />
          <div className="mt-10">
            <IoaiFAQ />
          </div>
        </Container>
      </section>

      {/* Partenaires */}
      <section className="bg-surface-50 py-20">
        <Container>
          <SectionTitle kicker="Soutiens" title="Partenaires & soutiens" />
          <p className="mt-4 text-sm text-ink-700">
            Les partenaires de l'édition {ioaiGabonConfig.edition} seront
            annoncés prochainement.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((slot) => (
              <div
                key={slot}
                className="flex h-20 items-center justify-center rounded-xl border border-dashed border-navy-900/15 bg-white text-xs font-medium text-ink-500"
              >
                À venir
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-32 py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionTitle
                kicker="Contact"
                title="Une question ?"
                description="Vous êtes élève, parent, enseignant, établissement scolaire ou partenaire et souhaitez obtenir davantage d'informations sur la sélection nationale du Gabon ?"
              />
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm text-ink-700">
                  <Mail size={16} className="shrink-0 text-accent" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent">
                    {siteConfig.contact.email}
                  </a>
                </li>
                {siteConfig.social.linkedin && (
                  <li className="flex items-center gap-3 text-sm text-ink-700">
                    <Linkedin size={16} className="shrink-0 text-accent" />
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      LinkedIn DIAM-AI
                    </a>
                  </li>
                )}
                <li className="flex items-center gap-3 text-sm text-ink-700">
                  <ExternalLink size={16} className="shrink-0 text-accent" />
                  <a href="https://diam-ai.com" className="hover:text-accent">
                    diam-ai.com
                  </a>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Footer spécifique IOAI Gabon */}
      <section className="border-t border-white/10 bg-navy-950 py-14">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-white">IOAI Gabon 🇬🇦</p>
              <p className="mt-1 text-sm text-white/60">National Selection</p>
              <p className="mt-1 text-xs text-white/40">Organisé par DIAM-AI</p>
            </div>
            <nav
              aria-label="Navigation IOAI Gabon (pied de page)"
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70"
            >
              <a href="#" className="hover:text-white">Accueil</a>
              <a href="#selection" className="hover:text-white">Sélection</a>
              <a href="#programme" className="hover:text-white">Programme</a>
              <a href="#calendrier" className="hover:text-white">Calendrier</a>
              <a href="#reglement" className="hover:text-white">Règlement</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <a
              href={ioaiGabonConfig.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80"
            >
              International Olympiad in Artificial Intelligence
              <ExternalLink size={12} />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
