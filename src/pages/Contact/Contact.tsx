import { Mail, MapPin, Linkedin } from "lucide-react";
import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contactez DIAM-AI pour un projet de formation, d'accompagnement, de partenariat ou une intervention."
        path="/contact"
      />

      <section className="bg-navy-950 py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — Contact
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Formation, accompagnement, projet IA, partenariat ou
            intervention — décrivez-nous votre besoin, l'équipe DIAM-AI vous
            répondra rapidement.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Coordonnées
                  </p>
                  <div className="mt-4 space-y-4">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-3 text-sm text-navy-800 hover:text-accent"
                    >
                      <Mail size={17} className="text-accent" />
                      {siteConfig.contact.email}
                    </a>
                    {siteConfig.contact.location && (
                      <p className="flex items-center gap-3 text-sm text-navy-800">
                        <MapPin size={17} className="text-accent" />
                        {siteConfig.contact.location}
                      </p>
                    )}
                    {siteConfig.social.linkedin && (
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-navy-800 hover:text-accent"
                      >
                        <Linkedin size={17} className="text-accent" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-900/8 bg-surface-50 p-6">
                  <p className="text-sm leading-relaxed text-ink-700">
                    Pour un besoin de formation individuelle, rendez-vous
                    directement sur{" "}
                    <a
                      href={siteConfig.parcoursDiam.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent"
                    >
                      Parcours DIAM
                    </a>
                    .
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
