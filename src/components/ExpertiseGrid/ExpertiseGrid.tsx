import { expertiseDomains } from "@/data/expertise";

/**
 * Grille de "pills" plutôt que de grandes cartes — volontairement léger
 * pour éviter la surcharge visuelle sur une liste de 13 domaines.
 */
export default function ExpertiseGrid() {
  return (
    <div className="flex flex-wrap gap-3">
      {expertiseDomains.map((domain) => (
        <span
          key={domain.id}
          className="rounded-full border border-navy-900/10 bg-white px-5 py-2.5 text-sm font-medium text-navy-800 transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          {domain.label}
        </span>
      ))}
    </div>
  );
}
