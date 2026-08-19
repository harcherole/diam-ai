import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-[0_1px_2px_rgba(10,22,40,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(10,22,40,0.08)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-surface-100">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <Badge key={cat} tone="light">
              {cat}
            </Badge>
          ))}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-navy-900">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="font-mono text-xs text-ink-500">
              {tech}
              {tech !== project.technologies[project.technologies.length - 1] && " ·"}
            </span>
          ))}
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
          >
            Voir le projet
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500">
            Détails à venir
          </span>
        )}
      </div>
    </motion.article>
  );
}
