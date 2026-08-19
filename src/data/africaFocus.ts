import type { LucideIcon } from "lucide-react";
import { Sprout, GraduationCap, Factory, LineChart, Leaf, Landmark } from "lucide-react";

export interface AfricaDomain {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const africaDomains: AfricaDomain[] = [
  { id: "agriculture", icon: Sprout, title: "Agriculture", description: "Agriculture de précision, prévision de rendement, gestion des ressources." },
  { id: "education", icon: GraduationCap, title: "Éducation", description: "Outils pédagogiques et accès aux compétences Data/IA à grande échelle." },
  { id: "industrie", icon: Factory, title: "Industrie", description: "Optimisation industrielle, maintenance prédictive, qualité." },
  { id: "finance", icon: LineChart, title: "Finance", description: "Scoring, détection de fraude, inclusion financière par la donnée." },
  { id: "environnement", icon: Leaf, title: "Environnement", description: "Suivi environnemental, gestion des ressources naturelles, décarbonation." },
  { id: "secteur-public", icon: Landmark, title: "Secteur public", description: "Aide à la décision publique et modernisation des services par la donnée." },
];
