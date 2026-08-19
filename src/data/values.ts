import type { LucideIcon } from "lucide-react";
import { Trophy, BookOpen, Lightbulb, Target, Handshake, Unlock } from "lucide-react";

export interface Value {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const values: Value[] = [
  { id: "excellence", icon: Trophy, title: "Excellence", description: "Un niveau d'exigence technique et pédagogique élevé, sans compromis." },
  { id: "transmission", icon: BookOpen, title: "Transmission", description: "Rendre les compétences Data/IA accessibles et transmissibles." },
  { id: "innovation", icon: Lightbulb, title: "Innovation", description: "Explorer et appliquer les avancées de la Data et de l'IA." },
  { id: "impact", icon: Target, title: "Impact", description: "Des projets pensés pour des résultats concrets et mesurables." },
  { id: "collaboration", icon: Handshake, title: "Collaboration", description: "Construire avec les entreprises, institutions et organisations." },
  { id: "accessibilite", icon: Unlock, title: "Accessibilité", description: "Démocratiser l'accès aux compétences et technologies Data/IA." },
];
