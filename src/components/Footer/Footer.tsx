import { Link } from "react-router-dom";
import { Linkedin, Youtube, Mail, MapPin } from "lucide-react";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="lockup" tone="white" className="h-20 w-auto" />
          <p className="mt-3 max-w-sm font-mono text-xs uppercase tracking-[0.14em] text-white/50">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>

          <div className="mt-6 flex gap-3">
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/15 p-2.5 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin size={16} />
              </a>
            )}
            {siteConfig.social.youtube && (
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-full border border-white/15 p-2.5 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Youtube size={16} />
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNavigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Contact
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2 text-sm text-white/75">
              <Mail size={15} className="shrink-0 text-accent" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
            {siteConfig.contact.location && (
              <li className="flex items-center gap-2 text-sm text-white/75">
                <MapPin size={15} className="shrink-0 text-accent" />
                {siteConfig.contact.location}
              </li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/45 sm:flex-row">
          <p>© {year} DIAM-AI. Tous droits réservés.</p>
          <p>Mentions légales</p>
        </Container>
      </div>
    </footer>
  );
}
