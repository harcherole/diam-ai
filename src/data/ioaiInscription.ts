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
 * Envoi via Formspree (https://formspree.io) — exactement le même principe
 * que ContactForm.tsx (voir ce fichier pour le détail). Choisi ici à la
 * place d'un backend Google Apps Script pour une raison simple : ce site
 * est 100% statique et déployé uniquement via GitHub Pages, donc tout ce
 * qui nécessite un déploiement séparé (créer un script, le publier comme
 * Web App, gérer ses versions) ajoute de la complexité évitable. Formspree
 * ne demande aucun déploiement : une fois le formulaire créé sur leur site,
 * il reçoit les soumissions, les envoie par email et les garde consultables
 * (et exportables en CSV) dans leur tableau de bord — sans aucune autre
 * étape de mise en ligne.
 *
 * Mise en route (5 minutes, à faire une seule fois) :
 *   1. Créer un compte sur https://formspree.io (offre gratuite : 50
 *      soumissions/mois — largement suffisant pour démarrer ; passer à
 *      l'offre payante seulement si le volume de candidatures le justifie).
 *   2. Créer un NOUVEAU formulaire dédié (séparé de celui de ContactForm,
 *      pour ne pas mélanger les candidatures avec les messages de contact),
 *      y associer et vérifier contact@diam-ai.com.
 *   3. Copier l'identifiant de formulaire affiché (ex. "abcdwxyz") et
 *      remplacer la valeur ci-dessous.
 *   4. Dans le tableau de bord Formspree, activer "Email Notifications"
 *      pour recevoir chaque candidature par email, et utiliser le bouton
 *      d'export CSV quand besoin de récupérer toutes les réponses d'un
 *      coup (ex. pour les ouvrir dans Excel / Google Sheets).
 *
 * Cet identifiant n'est pas un secret (il est déjà visible en clair dans
 * ContactForm.tsx) : c'est l'adresse publique du formulaire, pas une clé
 * d'accès. Il peut donc être commis dans le dépôt sans risque.
 */
export const INSCRIPTION_FORMSPREE_ID: string = "mvkzrgzg";
export const INSCRIPTION_FORMSPREE_ENDPOINT = `https://formspree.io/f/${INSCRIPTION_FORMSPREE_ID}`;

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
