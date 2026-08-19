import type { LucideIcon } from "lucide-react";
import { Users2, Rocket, Trophy, CalendarDays, GraduationCap, Globe2 } from "lucide-react";

export type InitiativeStatus = "Actif" | "À venir";

export interface Initiative {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  status: InitiativeStatus;
}

/**
 * Page Initiatives — distincte des activités commerciales de DIAM-AI.
 * Statuts à ajuster au fil de l'avancement réel de chaque initiative.
 */
export const initiatives: Initiative[] = [
  { id: "club-diam", icon: Users2, title: "Club DIAM", description: "Communauté DIAM-AI autour de la Data, de l'IA et des mathématiques.", status: "À venir" },
  { id: "programmes-jeunesse", icon: GraduationCap, title: "Programmes jeunesse", description: "Sensibilisation et initiation des jeunes aux métiers de la Data et de l'IA.", status: "À venir" },
  { id: "hackathons", icon: Rocket, title: "Hackathons", description: "Événements collaboratifs autour de problématiques Data/IA concrètes.", status: "À venir" },
  { id: "olympiades-ia", icon: Trophy, title: "Olympiades IA", description: "Compétition destinée à révéler et faire progresser les talents Data/IA.", status: "À venir" },
  { id: "evenements", icon: CalendarDays, title: "Événements", description: "Rencontres, conférences et temps forts autour de la Data et de l'IA.", status: "À venir" },
  { id: "projets-impact", icon: Globe2, title: "Projets à impact", description: "Initiatives Data/IA au service de causes et d'enjeux sociétaux.", status: "À venir" },
];
