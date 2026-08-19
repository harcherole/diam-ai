import type { Value } from "@/data/values";

interface ValueCardProps {
  value: Value;
}

export default function ValueCard({ value }: ValueCardProps) {
  const Icon = value.icon;

  return (
    <div className="rounded-2xl border border-navy-900/8 bg-white p-6">
      <Icon size={20} strokeWidth={1.75} className="text-accent" />
      <h3 className="mt-4 font-semibold text-navy-900">{value.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{value.description}</p>
    </div>
  );
}
