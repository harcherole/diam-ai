import type { BureauMember } from "@/data/team";

interface TeamCardProps {
  member: BureauMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-navy-900/8 bg-white transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(10,22,40,0.08)]">
      <div className="aspect-[4/5] w-full overflow-hidden bg-surface-100">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {member.role}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-navy-900">{member.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">{member.bio}</p>
      </div>
    </div>
  );
}
