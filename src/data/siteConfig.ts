/**
 * Configuration centrale du site DIAM-AI.
 * Toute donnée amenée à changer (coordonnées, liens, chiffres clés) vit ici.
 */

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
   * Chiffres clés — STRUCTURE UNIQUEMENT.
   * Ne jamais insérer de valeur inventée. Tant qu'un chiffre n'est pas
   * officiellement confirmé, laisser `value: null` : le composant StatBlock
   * affiche alors un état "à venir" plutôt qu'un nombre.
   */
  keyFigures: [
    { id: "learners", label: "Apprenants formés", value: null as number | null, suffix: "+" },
    { id: "projects", label: "Projets réalisés", value: null as number | null, suffix: "+" },
    { id: "programs", label: "Programmes de formation", value: null as number | null, suffix: "+" },
    { id: "partners", label: "Partenaires", value: null as number | null, suffix: "+" },
  ],

  ctaPrimary: "Parlons de votre projet",
  ctaSecondaryHome: "Explorer nos formations",
} as const;

export type SiteConfig = typeof siteConfig;
