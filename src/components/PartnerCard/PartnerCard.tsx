import { ArrowUpRight } from "lucide-react";
import type { Partner } from "@/data/partners";

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(10,22,40,0.08)]">
      <div className="flex h-16 items-center">
        <img src={partner.logo} alt={partner.name} className="max-h-16 w-auto object-contain" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-navy-900">{partner.name}</h3>

      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-700">
        {partner.shortDescription}
      </p>

      {partner.website && (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        >
          Site officiel
          <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  );
}
