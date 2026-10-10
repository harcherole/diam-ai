/**
 * Configuration + données statiques du formulaire d'inscription — IOAI Gabon 2027.
 * À l'image de ioaiGabon.ts et siteConfig.ts : toute donnée amenée à changer
 * (listes déroulantes, textes du parcours, endpoint) vit ici plutôt que
 * dispersée dans les composants.
 *
 * Règle stricte reprise de la page /ioai-gabon : ne jamais inventer de
 * condition d'éligibilité, de texte juridique ou de champ non demandé.
 */

/**
 * Envoi vers un Google Apps Script Web App qui écrit chaque inscription
 * dans une Google Sheet (voir google-apps-script/Code.gs et
 * google-apps-script/README.md pour le script complet et la procédure de
 * déploiement, à faire une seule fois).
 *
 * Choisi plutôt que Formspree malgré sa simplicité : la version gratuite de
 * Formspree est plafonnée à 50 soumissions/mois et n'exporte pas en CSV —
 * insuffisant pour les 300-400 inscriptions attendues. Un Google Apps
 * Script Web App, lui, est gratuit et sans limite de volume réaliste pour
 * ce cas d'usage, et les données arrivent directement dans un vrai tableau
 * (Google Sheets), consultable et exportable à tout moment sans rien payer.
 * La contrepartie est une configuration à faire une seule fois (10-15 min,
 * voir google-apps-script/README.md) — jamais à refaire ensuite, y compris
 * à chaque nouveau déploiement du site.
 *
 * Annotation ":string" volontaire (et nécessaire) : sans elle, TypeScript
 * fige ce const comme le type littéral de la chaîne assignée plutôt que
 * "string", et la comparaison dans InscriptionForm.tsx (qui vérifie si la
 * valeur par défaut a bien été remplacée) est alors jugée "toujours
 * fausse" au typage — erreur TS2367, qui casse `tsc -b` et donc tout le
 * build.
 *
 * Cette URL n'est pas un secret : c'est l'adresse publique du formulaire
 * (comme l'identifiant Formspree de ContactForm.tsx), pas une clé d'accès.
 * Elle peut donc être commise dans le dépôt sans risque. Le token EduSpace
 * et toute autre information sensible, eux, ne doivent JAMAIS apparaître
 * ici ni dans le script Apps Script lui-même.
 */
export const IOAI_INSCRIPTION_ENDPOINT: string =
  "https://script.google.com/macros/s/AKfycbxu25TZtjB6PHrwvwkKA1MFT-co-hx8flCB7nBzJOYJ4pahcDPYZy5sFaiZdjGdegOW/exec"; // ex: "https://script.google.com/macros/s/AKfyc.../exec"

export const ioaiInscriptionConfig = {
  edition: "2027",
  adminEmail: "contact@diam-ai.com",
  // Période officielle du Round 1, communiquée par DIAM-AI — affichée telle
  // quelle dans le hero et la section d'information de la page d'inscription.
  round1Period: "20 – 22 novembre 2026",
};

export const provincesGabon: string[] = [
  "Estuaire",
  "Haut-Ogooué",
  "Moyen-Ogooué",
  "Ngounié",
  "Nyanga",
  "Ogooué-Ivindo",
  "Ogooué-Lolo",
  "Ogooué-Maritime",
  "Woleu-Ntem",
];

export const niveauxScolaires: string[] = ["Seconde", "Première", "Terminale", "Autre"];

export const genres: string[] = ["Masculin", "Féminin", "Préfère ne pas préciser"];

export const langagesOutils: string[] = [
  "Python",
  "C / C++",
  "Java",
  "JavaScript",
  "Scratch",
  "SQL",
  "Autre",
  "Aucun",
];

export interface InscriptionStep {
  id: string;
  label: string;
}

/** Indicateur visuel du parcours, affiché dans le hero de la page d'inscription. */
export const inscriptionParcours: InscriptionStep[] = [
  { id: "inscription", label: "Inscription" },
  { id: "round1", label: "1er Tour" },
  { id: "selection", label: "Sélection" },
  { id: "formation", label: "Formation" },
  { id: "equipe", label: "Équipe nationale" },
  { id: "ioai", label: "IOAI 2027 — Singapour" },
];
