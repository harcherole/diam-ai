import Reveal from "@/components/ui/Reveal";

export interface TimelineStep {
  label: string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy-900/10" />
      <div className="space-y-10">
        {steps.map((step, i) => (
          <Reveal key={step.label} delay={i * 0.08}>
            <div className="relative pl-10">
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-white" />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {step.label}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-700">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
