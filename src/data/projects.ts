export type ProjectCategory =
  | "Agriculture"
  | "Éducation"
  | "Industrie"
  | "Data"
  | "IA"
  | "Afrique";

export interface Project {
  id: string;
  title: string;
  description: string;
  domain: string;
  categories: ProjectCategory[];
  technologies: string[];
  image: string;
  link?: string;
}

/**
 * Données de projets — structure prête à l'emploi.
 * Remplacer `image` par le chemin réel une fois les visuels disponibles
 * (voir src/assets/images/README pour la convention de nommage).
 */
export const projects: Project[] = [
  {
    id: "placeholder-agri",
    title: "Projet à venir — Agriculture intelligente",
    description:
      "Emplacement réservé pour un projet appliquant la Data/IA aux enjeux agricoles. Contenu à compléter.",
    domain: "Agriculture",
    categories: ["Agriculture", "IA", "Afrique"],
    technologies: ["Python", "Machine Learning"],
    image: "/assets/images/projects/placeholder.jpg",
  },
  {
    id: "placeholder-edu",
    title: "Projet à venir — Éducation",
    description:
      "Emplacement réservé pour un projet lié à l'éducation et à la Data/IA. Contenu à compléter.",
    domain: "Éducation",
    categories: ["Éducation", "Data"],
    technologies: ["Python", "NLP"],
    image: "/assets/images/projects/placeholder.jpg",
  },
];
