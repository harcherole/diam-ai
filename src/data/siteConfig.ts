/**
 * Configuration centrale du site DIAM-AI.
 * Toute donnée amenée à changer (coordonnées, liens, chiffres clés) vit ici.
 */

export interface KeyFigure {
  id: string;
  label: string;
  value: number | null;
  suffix: string;
}

export const siteConfig = {
  name: "DIAM-AI",
  legalName: "DIAM-AI",
  tagline: "Data • Intelligence Artificielle • Mathématiques",
  acronymExpansion: "Data, Intelligence Artificielle & Mathématiques",

  baseline:
    "Construire l'avenir avec la Data et l'Intelligence Artificielle.",

  description:
    "DIAM-AI est une structure dédiée à la démocratisation, au développement et à l'application de la Data et de l'Intelligence Artificielle.",

  contact: {
    email: "contact@diam-ai.com",
    // Placeholder — à remplacer par le numéro officiel une fois disponible
    phone: null as string | null,
    location: "Libreville, Gabon", // à confirmer / ajuster si besoin
  },

  social: {
    linkedin: "https://www.linkedin.com/company/diam-ai", // placeholder à confirmer
    youtube: null as string | null,
  },

  parcoursDiam: {
    name: "Parcours DIAM",
    description:
      "La plateforme de formation en ligne de DIAM-AI, dédiée à l'apprentissage de la Data et de l'Intelligence Artificielle.",
    url: "https://parcours-diam.netlify.app/",
  },

  /**
   * Chiffres clés.
   * Ne jamais insérer de valeur inventée. Tant qu'un chiffre n'est pas
   * officiellement confirmé, laisser `value: null` : le composant StatBlock
   * affiche alors un état "à venir" plutôt qu'un nombre.
   *
   * Le chiffre "partners" reste volontairement à `null` ici : il est
   * calculé dynamiquement dans Home.tsx à partir de src/data/partners.ts
   * (partners.length), pour rester toujours exact sans mise à jour manuelle.
   */
  keyFigures: [
    { id: "learners", label: "Apprenants formés", value: 500, suffix: "+" },
    { id: "projects", label: "Projets réalisés", value: 100, suffix: "+" },
    { id: "programs", label: "Programme de formation en IA", value: 1, suffix: "" },
    { id: "partners", label: "Partenaire", value: null, suffix: "" },
  ] as KeyFigure[],

  ctaPrimary: "Parlons de votre projet",
  ctaSecondaryHome: "Explorer nos formations",
} as const;

export type SiteConfig = typeof siteConfig;
