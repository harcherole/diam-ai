import { User } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { ioaiGabonTeam } from "@/data/ioaiGabon";

/**
 * Grille de 4 emplacements pour l'équipe nationale — vide tant qu'aucun
 * candidat n'a été annoncé. Prête à être alimentée avec photo, prénom/nom,
 * établissement, ville et rôle éventuel une fois les résultats connus.
 */
export default function IoaiTeam() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {ioaiGabonTeam.map((slot, i) => (
        <Reveal key={slot.id} delay={i * 0.05}>
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-navy-900/15 bg-surface-50">
            <div className="flex aspect-[4/5] w-full items-center justify-center bg-navy-900/[0.03]">
              <User size={32} strokeWidth={1.5} className="text-navy-900/20" />
            </div>
            <div className="p-5 text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                Team Member {String(slot.index).padStart(2, "0")}
              </p>
              <p className="mt-1.5 text-sm font-medium text-ink-700">À venir</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
