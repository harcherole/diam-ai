import { Flag as FlagIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { ioaiGabonCalendar } from "@/data/ioaiGabon";

/**
 * Calendrier prévisionnel — entièrement piloté par ioaiGabonCalendar
 * (src/data/ioaiGabon.ts). Modifier les dates ne nécessite aucun changement
 * de structure ici.
 */
export default function IoaiCalendar() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy-900/10" />
      <div className="space-y-8">
        {ioaiGabonCalendar.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.04}>
            <div className="relative pl-10">
              <span
                className={`absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-white ${
                  item.highlight ? "border-cyan" : "border-accent"
                }`}
              />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {item.period}
              </p>
              <h3 className="mt-1.5 flex items-center gap-2 text-base font-semibold text-navy-900">
                {item.title}
                {item.highlight && <FlagIcon size={15} className="text-cyan" />}
              </h3>
              {item.description && (
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-700">
                  {item.description}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
