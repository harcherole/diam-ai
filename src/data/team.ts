export interface BureauMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

/**
 * Membres du Bureau de DIAM-AI.
 * Photo : voir public/assets/team/ — format portrait 4:5, cadrage cohérent.
 */
export const bureau: BureauMember[] = [
  {
    id: "georf-miguiama-bamba",
    name: "Georf Miguiama Bamba",
    role: "Président",
    bio: "Ingénieur en Intelligence Artificielle, Lead Data Scientist / AI Engineer. Formateur en Intelligence Artificielle, Power BI, MLOps et en Analyse des données",
    photo: "/assets/team/georf-miguiama-bamba-president.jpg",
  },
  {
    id: "orhen-otounga-awoulou",
    name: "Otounga Awoulou Orhen",
    role: "Secrétaire Général",
    bio: "Étudiant en Droit public interne et international.",
    photo: "/assets/team/orhen-otounga-awoulou-secretaire-general.jpg",
  },
  {
    id: "boris-obiang-obiang",
    name: "Boris Barthel Obiang Obiang",
    role: "Trésorier",
    bio: "Consultant Senior en Comptabilité, Paie et Fiscalité. Expert en développement de solutions informatiques de gestion. Associé gérant du Cabinet ABC-Group.",
    photo: "/assets/team/boris-obiang-obiang-tresorier.jpg",
  },
];
