import { ArrowRight, ArrowDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { ioaiGabonProcess, ioaiGabonProcessFlow } from "@/data/ioaiGabon";

/**
 * Processus de sélection : ligne de flux (Inscription → ... → Équipe du
 * Gabon) horizontale sur desktop, verticale sur mobile, puis le détail des
 * 4 étapes sous forme de cartes.
 */
export default function IoaiProcess() {
  return (
    <div>
      {/* Ligne de flux */}
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 rounded-2xl border border-navy-900/8 bg-surface-50 px-5 py-6 md:flex-nowrap md:gap-x-1 md:px-8">
        {ioaiGabonProcessFlow.map((step, i) => (
          <div key={step} className="flex items-center gap-2 md:gap-1">
            <span className="whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-900 shadow-sm ring-1 ring-navy-900/8 sm:text-sm">
              {step}
            </span>
            {i < ioaiGabonProcessFlow.length - 1 && (
              <ArrowRight size={16} className="hidden shrink-0 text-accent/50 md:block" />
            )}
          </div>
        ))}
      </div>

      {/* Détail des 4 étapes */}
      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {ioaiGabonProcess.map((step, i) => (
          <Reveal key={step.id} delay={i * 0.06}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-navy-900/8 bg-white p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {step.label}
              </p>
              <h3 className="text-base font-semibold text-navy-900">{step.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-700">{step.description}</p>
              {i < ioaiGabonProcess.length - 1 && (
                <ArrowDown size={16} className="mt-1 self-center text-navy-900/20 lg:hidden" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
