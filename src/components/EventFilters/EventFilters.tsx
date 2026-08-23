interface EventFiltersProps {
  years: string[];
  active: string;
  onChange: (year: string) => void;
}

/**
 * Filtre les événements par année. "Toutes" est toujours la première option.
 * Les années sont dérivées dynamiquement de src/data/events.ts — rien à
 * mettre à jour ici quand un nouvel événement est ajouté.
 */
export default function EventFilters({ years, active, onChange }: EventFiltersProps) {
  const options = ["Toutes", ...years];

  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "bg-navy-900 text-white"
                : "border border-navy-900/12 text-navy-700 hover:border-accent hover:text-accent"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
