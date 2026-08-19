import type { LucideIcon } from "lucide-react";
import { GraduationCap, Users, Cpu, Sparkles } from "lucide-react";

export interface Activity {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  path: string;
}

export const activities: Activity[] = [
  {
    id: "formation",
    icon: GraduationCap,
    title: "Formation",
    description:
      "Data Science, Machine Learning, Deep Learning, IA Générative, MLOps — via Parcours DIAM, la plateforme de formation de DIAM-AI.",
    cta: "Découvrir les formations",
    path: "/formation",
  },
  {
    id: "accompagnement",
    icon: Users,
    title: "Accompagnement",
    description:
      "Accompagnement des entreprises, professionnels, étudiants et organisations dans leur montée en compétence et leurs projets Data/IA.",
    cta: "Découvrir l'accompagnement",
    path: "/accompagnement",
  },
  {
    id: "projets-ia",
    icon: Cpu,
    title: "Projets IA",
    description:
      "Conception et développement de solutions Data Science et Intelligence Artificielle pour répondre à des problématiques concrètes.",
    cta: "Voir nos projets",
    path: "/projets",
  },
  {
    id: "innovation",
    icon: Sparkles,
    title: "Innovation & communauté",
    description:
      "Événements, initiatives, communauté et projets à impact autour de la Data, de l'IA et des mathématiques.",
    cta: "Découvrir nos initiatives",
    path: "/initiatives",
  },
];
