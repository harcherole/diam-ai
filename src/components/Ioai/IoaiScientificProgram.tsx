import Reveal from "@/components/ui/Reveal";
import { ioaiGabonProgram } from "@/data/ioaiGabon";

export default function IoaiScientificProgram() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {ioaiGabonProgram.map((block, i) => {
        const Icon = block.icon;
        return (
          <Reveal key={block.id} delay={i * 0.05}>
            <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">{block.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {block.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
