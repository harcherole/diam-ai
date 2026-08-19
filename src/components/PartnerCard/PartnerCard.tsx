import type { Partner } from "@/data/partners";
import Badge from "@/components/ui/Badge";

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-navy-900/8 bg-white p-6">
      <img src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain" />
      <div>
        <h3 className="font-semibold text-navy-900">{partner.name}</h3>
        <div className="mt-1">
          <Badge tone="light">{partner.type}</Badge>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-700">{partner.description}</p>
      </div>
    </div>
  );
}
