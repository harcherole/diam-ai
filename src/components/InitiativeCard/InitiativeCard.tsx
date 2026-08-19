import type { Initiative } from "@/data/initiatives";
import Badge from "@/components/ui/Badge";

interface InitiativeCardProps {
  initiative: Initiative;
}

export default function InitiativeCard({ initiative }: InitiativeCardProps) {
  const Icon = initiative.icon;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <Badge tone={initiative.status === "Actif" ? "cyan" : "light"}>
          {initiative.status}
        </Badge>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy-900">{initiative.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
        {initiative.description}
      </p>
    </div>
  );
}
