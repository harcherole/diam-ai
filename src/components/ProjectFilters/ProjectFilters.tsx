import type { ProjectCategory } from "@/data/projects";

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  active: ProjectCategory | "Tous";
  onChange: (category: ProjectCategory | "Tous") => void;
}

export default function ProjectFilters({ categories, active, onChange }: ProjectFiltersProps) {
  const options: (ProjectCategory | "Tous")[] = ["Tous", ...categories];

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
