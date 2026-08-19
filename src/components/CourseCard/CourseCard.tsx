import type { Course } from "@/data/courses";
import Badge from "@/components/ui/Badge";

interface CourseCardProps {
  course: Course;
}

const levelTone: Record<Course["level"], "accent" | "cyan" | "navy"> = {
  Débutant: "cyan",
  Intermédiaire: "accent",
  Avancé: "navy",
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="rounded-2xl border border-navy-900/8 bg-white p-6 transition-colors duration-200 hover:border-accent/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-navy-900">{course.title}</h3>
        <Badge tone={levelTone[course.level]}>{course.level}</Badge>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{course.description}</p>
    </div>
  );
}
