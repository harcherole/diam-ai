export type PartnershipType =
  | "Partenaire académique"
  | "Partenaire technologique"
  | "Partenaire institutionnel"
  | "Partenaire média"
  | "Partenaire associatif";

export type PartnerScope = "local" | "international";

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: PartnershipType;
  /** "local" = Gabon, "international" = hors Gabon. Détermine la section d'affichage. */
  scope: PartnerScope;
  location: string;
  /** Version courte affichée sur la carte — le visiteur clique "Site officiel" pour le reste. */
  shortDescription: string;
  description: string;
  website?: string;
}

/**
 * Aucun partenaire fictif. Chaque entrée correspond à un partenariat
 * officiel confirmé. Les partenaires "local" s'affichent en haut de la
 * page /partenaires, les "international" en bas — voir Partners.tsx.
 */
export const partners: Partner[] = [
  {
    id: "adeni",
    name: "ADENI",
    logo: "/assets/partners/adeni.png",
    type: "Partenaire associatif",
    scope: "international",
    location: "Djibouti",
    shortDescription:
      "Formations gratuites en programmation, IA, cybersécurité et cloud computing à Djibouti.",
    description:
      "L'Association Djiboutienne pour l'Éducation Numérique et l'Innovation (ADENI) promeut l'éducation numérique à Djibouti : programmation, intelligence artificielle, cybersécurité et cloud computing, via des formations gratuites destinées aux jeunes, aux étudiants et à la communauté.",
    website: "https://adeni-dj.org/",
  },
];
