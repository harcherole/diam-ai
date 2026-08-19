/**
 * Préparation multilingue (FR aujourd'hui, EN plus tard).
 *
 * Choix d'architecture : le texte éditorial de chaque page vit dans une
 * constante locale au fichier de la page (ex. `content` en haut de Home.tsx),
 * et les données structurées (projets, activités, cours...) vivent dans
 * `src/data/*.ts`.
 *
 * Pour ajouter l'anglais plus tard, sans refactorer l'application :
 *  1. Déplacer chaque objet `content` de page vers `src/content/fr/<page>.ts`
 *     puis dupliquer en `src/content/en/<page>.ts`.
 *  2. Introduire un `LanguageContext` (React context) exposant `lang` et
 *     `setLang`, consommé par un hook `useContent(page)` qui sélectionne
 *     le bon dictionnaire.
 *  3. Les composants ne changent pas : ils consomment déjà des props/objets
 *     de contenu plutôt que du texte en dur dispersé dans le JSX.
 *
 * Ce fichier ne fait rien à l'exécution : c'est une note d'architecture.
 */
export type Lang = "fr" | "en";

export const DEFAULT_LANG: Lang = "fr";
