export type PartnershipType =
  | "Partenaire académique"
  | "Partenaire technologique"
  | "Partenaire institutionnel"
  | "Partenaire média";

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: PartnershipType;
  description: string;
}

/**
 * Aucun partenaire fictif. Cette liste est volontairement vide au lancement
 * et se remplit au fur et à mesure des partenariats officiels confirmés.
 */
export const partners: Partner[] = [];
