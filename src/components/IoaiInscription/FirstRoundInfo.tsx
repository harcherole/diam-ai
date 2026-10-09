import { CalendarClock, HelpCircle, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { ioaiInscriptionConfig } from "@/data/ioaiInscription";

/**
 * Section d'information sur le premier tour. La date du Round 1 est
 * confirmée (communiquée par DIAM-AI) et vit dans ioaiInscriptionConfig —
 * une seule source de vérité, reprise aussi dans ioaiGabonCalendar (déjà
 * affiché sur /ioai-gabon#calendrier) pour rester synchronisée.
 */
export default function FirstRoundInfo() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      <Reveal>
        <div className="h-full rounded-2xl border border-navy-900/8 bg-surface-50 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <CalendarClock size={18} strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-semibold text-navy-900">Dates du 1er tour</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            Le Round 1 se déroule du <strong>{ioaiInscriptionConfig.round1Period}</strong>.
            Le détail complet du calendrier est disponible dans le{" "}
            <a href="/ioai-gabon#calendrier" className="font-semibold text-accent">
              calendrier
            </a>{" "}
            de la page IOAI Gabon.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="h-full rounded-2xl border border-navy-900/8 bg-surface-50 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
            <HelpCircle size={18} strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-semibold text-navy-900">Déroulement</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            Les modalités précises du 1er tour (format, durée, lieu ou plateforme)
            seront communiquées aux candidats inscrits avant son ouverture, avec
            le règlement officiel de la sélection.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="h-full rounded-2xl border border-navy-900/8 bg-surface-50 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sand/10 text-sand">
            <Mail size={18} strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-semibold text-navy-900">Une question ?</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            Écris-nous à{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-accent">
              {siteConfig.contact.email}
            </a>{" "}
            avant de t'inscrire si quelque chose n'est pas clair.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
