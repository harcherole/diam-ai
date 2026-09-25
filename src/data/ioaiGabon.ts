import type { LucideIcon } from "lucide-react";
import {
  Sigma,
  Binary,
  Terminal,
  BrainCircuit,
  BarChart3,
  Compass,
  Trophy,
  GraduationCap,
  Flag,
} from "lucide-react";

/**
 * Configuration centrale — IOAI Gabon.
 * Toute donnée susceptible de changer (dates, statut, équipe, FAQ) vit ici,
 * à l'image de siteConfig.ts pour le reste du site.
 *
 * Règle stricte : ne jamais inventer une information officielle IOAI.
 * Tout ce qui n'est pas encore confirmé porte un statut explicite
 * ("Prévisionnel", "À venir", "À confirmer").
 */

export const ioaiGabonConfig = {
  edition: "2027",
  country: "Gabon",
  hostCity: "Singapour",
  eventDates: "4 – 10 juillet 2027",
  participation: "Gratuite",
  accreditationStatus: "Organisation accréditée",
  officialSite: "https://ioai-official.org/",
};

/** Données extraites telles quelles du certificat officiel — rien n'est ajouté. */
export const ioaiAccreditation = {
  certificateNumber: "227",
  issuedDate: "24 septembre 2026",
  entity: "DIAM-AI",
  role: "Country/Territory Coordinator entity",
  country: "GABON",
  validity: "Valide jusqu'à la fin de l'IOAI 2027",
  imageSrc: "/assets/ioai/ioai-gabon-accreditation.png",
};

export interface CalendarItem {
  id: string;
  period: string;
  title: string;
  description?: string;
  highlight?: boolean;
}

/**
 * Calendrier PRÉVISIONNEL de travail — susceptible d'être modifié.
 * Seule la date de l'IOAI 2027 (4–10 juillet, Singapour) est une donnée
 * officielle internationale connue.
 */
export const ioaiGabonCalendar: CalendarItem[] = [
  {
    id: "lancement",
    period: "Septembre 2026",
    title: "Lancement officiel de la sélection nationale",
    description: "Présentation du programme et ouverture de la communication.",
  },
  {
    id: "ouverture-inscriptions",
    period: "01 octobre 2026",
    title: "Ouverture des inscriptions",
  },
  {
    id: "cloture-inscriptions",
    period: "31 octobre 2026",
    title: "Clôture des inscriptions",
  },
  {
    id: "round1",
    period: "07 novembre 2026",
    title: "Round 1 — Qualification nationale",
  },
  {
    id: "resultats-round1",
    period: "21 novembre 2026",
    title: "Publication des résultats du Round 1",
  },
  {
    id: "round2",
    period: "05 décembre 2026",
    title: "Round 2 — Sélection avancée",
  },
  {
    id: "annonce-training-camp",
    period: "19 décembre 2026",
    title: "Annonce des candidats retenus pour le Training Camp",
  },
  {
    id: "training-camp",
    period: "Janvier – Mars 2027",
    title: "Training Camp",
    description: "Préparation scientifique et technique intensive.",
  },
  {
    id: "final-selection",
    period: "20 – 21 mars 2027",
    title: "Final Selection",
  },
  {
    id: "annonce-equipe",
    period: "25 mars 2027",
    title: "Annonce de l'équipe nationale du Gabon 🇬🇦",
    highlight: true,
  },
  {
    id: "preparation-finale",
    period: "Avril – Juin 2027",
    title: "Préparation finale de l'équipe nationale",
  },
  {
    id: "ioai-2027",
    period: "04 – 10 juillet 2027",
    title: "IOAI 2027 — Singapour",
    highlight: true,
  },
];

export interface ProcessStep {
  id: string;
  label: string;
  title: string;
  description: string;
}

export const ioaiGabonProcess: ProcessStep[] = [
  {
    id: "round1",
    label: "Round 1",
    title: "Qualification nationale",
    description:
      "Une première épreuve ouverte aux élèves éligibles permettant d'identifier les candidats disposant de solides capacités de raisonnement scientifique et informatique.",
  },
  {
    id: "round2",
    label: "Round 2",
    title: "Sélection avancée",
    description:
      "Une deuxième étape destinée à approfondir l'évaluation des compétences en algorithmique, programmation, mathématiques et intelligence artificielle.",
  },
  {
    id: "training-camp",
    label: "Training Camp",
    title: "Camp d'entraînement",
    description:
      "Les candidats les mieux classés suivent un parcours intensif de préparation scientifique et technique.",
  },
  {
    id: "final-selection",
    label: "Final Selection",
    title: "Sélection finale",
    description:
      "Les performances obtenues durant les différentes étapes permettent de déterminer les membres de l'équipe nationale du Gabon, conformément au règlement de la sélection.",
  },
];

export const ioaiGabonProcessFlow: string[] = [
  "Inscription",
  "Round 1",
  "Round 2",
  "Training Camp",
  "Final Selection",
  "🇬🇦 Équipe du Gabon",
];

export interface WhyCard {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ioaiGabonWhy: WhyCard[] = [
  {
    id: "decouvrir",
    icon: Compass,
    title: "Découvrir l'IA",
    description: "Découvrir les concepts fondamentaux de l'intelligence artificielle et du Machine Learning.",
  },
  {
    id: "se-mesurer",
    icon: Trophy,
    title: "Se mesurer aux meilleurs",
    description: "Participer à une sélection nationale basée sur le raisonnement, les mathématiques, l'informatique et l'IA.",
  },
  {
    id: "se-former",
    icon: GraduationCap,
    title: "Se former",
    description: "Bénéficier d'un parcours de préparation et d'entraînement.",
  },
  {
    id: "representer",
    icon: Flag,
    title: "Représenter le Gabon",
    description: "Intégrer potentiellement l'équipe nationale du Gabon pour l'IOAI.",
  },
];

export interface EligibilityCard {
  id: string;
  title: string;
  description: string;
}

export const ioaiGabonEligibility: EligibilityCard[] = [
  {
    id: "age",
    title: "Âge",
    description: "Élèves respectant les conditions d'âge et d'éligibilité fixées par le règlement IOAI applicable à l'édition concernée.",
  },
  {
    id: "niveau",
    title: "Niveau scolaire",
    description: "Élèves régulièrement scolarisés dans l'enseignement secondaire, conformément aux conditions officielles de l'IOAI.",
  },
  {
    id: "residence",
    title: "Résidence / Scolarisation",
    description: "Le processus national est ouvert aux élèves remplissant les conditions de participation applicables au Gabon.",
  },
];

export interface ScientificBlock {
  id: string;
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const ioaiGabonProgram: ScientificBlock[] = [
  {
    id: "mathematiques",
    icon: Sigma,
    title: "Mathématiques",
    items: ["Logique", "Probabilités", "Statistiques", "Algèbre", "Raisonnement mathématique"],
  },
  {
    id: "algorithmique",
    icon: Binary,
    title: "Algorithmique",
    items: ["Résolution de problèmes", "Complexité", "Structures de données", "Raisonnement algorithmique"],
  },
  {
    id: "python",
    icon: Terminal,
    title: "Python",
    items: ["Fondamentaux Python", "Manipulation de données", "Programmation scientifique"],
  },
  {
    id: "ia",
    icon: BrainCircuit,
    title: "Intelligence Artificielle",
    items: ["Machine Learning", "Deep Learning", "Modèles et entraînement", "Évaluation des modèles"],
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data",
    items: ["Analyse de données", "Statistiques", "Visualisation", "Interprétation des résultats"],
  },
];

export const ioaiGabonPreparationPath: string[] = [
  "Fondamentaux",
  "Entraînement",
  "Problèmes",
  "IA / Data",
  "Compétitions",
  "Préparation internationale",
];

export interface TeamSlot {
  id: string;
  index: number;
}

export const ioaiGabonTeam: TeamSlot[] = [
  { id: "member-1", index: 1 },
  { id: "member-2", index: 2 },
  { id: "member-3", index: 3 },
  { id: "member-4", index: 4 },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const REGLEMENT_A_VENIR = "Cette information sera précisée dans le règlement officiel de la sélection.";

export const ioaiGabonFaq: FaqItem[] = [
  {
    id: "qui-peut-participer",
    question: "Qui peut participer ?",
    answer:
      "Les élèves de l'enseignement secondaire remplissant les conditions d'âge et d'éligibilité du règlement IOAI applicable à l'édition concernée. " + REGLEMENT_A_VENIR,
  },
  {
    id: "gratuit",
    question: "La participation est-elle gratuite ?",
    answer:
      "Oui. La participation à la sélection nationale est gratuite pour les élèves. Aucun élève ne doit être exclu du processus pour des raisons financières.",
  },
  {
    id: "savoir-programmer",
    question: "Faut-il déjà savoir programmer ?",
    answer: REGLEMENT_A_VENIR,
  },
  {
    id: "connaitre-ia",
    question: "Faut-il connaître l'intelligence artificielle ?",
    answer: REGLEMENT_A_VENIR,
  },
  {
    id: "deroulement",
    question: "Comment se déroule la sélection ?",
    answer:
      "En plusieurs étapes : Round 1 (qualification nationale), Round 2 (sélection avancée), Training Camp (préparation intensive), puis Final Selection qui détermine l'équipe nationale.",
  },
  {
    id: "lieu-epreuves",
    question: "Où auront lieu les épreuves ?",
    answer: REGLEMENT_A_VENIR,
  },
  {
    id: "tout-gabon",
    question: "Les élèves de l'ensemble du Gabon peuvent-ils participer ?",
    answer:
      "Le processus national est conçu pour être ouvert et accessible. Les modalités précises seront communiquées avec le règlement officiel.",
  },
  {
    id: "debut-inscriptions",
    question: "Quand les inscriptions commenceront-elles ?",
    answer: "Ouverture prévisionnelle le 01 octobre 2026 — voir le calendrier prévisionnel ci-dessus.",
  },
  {
    id: "constitution-equipe",
    question: "Comment l'équipe nationale sera-t-elle constituée ?",
    answer:
      "Les performances obtenues aux différentes étapes de la sélection (Round 1, Round 2, Training Camp, Final Selection) déterminent les membres de l'équipe nationale, conformément au règlement de la sélection.",
  },
  {
    id: "reglement-officiel",
    question: "Où trouver le règlement officiel ?",
    answer:
      "Le règlement officiel de la sélection nationale sera publié sur cette page avant l'ouverture des inscriptions.",
  },
  {
    id: "contact",
    question: "Comment contacter l'organisation ?",
    answer: "Par email à contact@diam-ai.com, ou via les réseaux sociaux de DIAM-AI (voir section Contact ci-dessous).",
  },
];
