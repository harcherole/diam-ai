# DIAM-AI — Site officiel

Site institutionnel de DIAM-AI (Data, Intelligence Artificielle & Mathématiques),
construit avec React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Prérequis

- Node.js 18+ et npm

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site est alors disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Génère le dossier `dist/` prêt à déployer.

## Prévisualiser le build

```bash
npm run preview
```

---

## Éditer le contenu du site

Toute donnée éditable vit dans `src/data/` :

| Fichier | Contenu |
|---|---|
| `siteConfig.ts` | Coordonnées, réseaux sociaux, lien Parcours DIAM, chiffres clés |
| `navigation.ts` | Liens de la navbar et du footer |
| `activities.ts` | Les 4 cartes d'activités (accueil) |
| `expertise.ts` | Domaines d'expertise |
| `projects.ts` | Projets (page Projets) |
| `partners.ts` | Partenaires (vide au lancement — à remplir) |
| `courses.ts` | Parcours proposés sur Parcours DIAM |
| `values.ts` | Valeurs (page À propos) |
| `africaFocus.ts` | Domaines de la section "IA au service des enjeux africains" |
| `initiatives.ts` | Initiatives (Club DIAM, hackathons, etc.) |

**Aucun chiffre n'est inventé.** Dans `siteConfig.ts`, `keyFigures[].value` est à
`null` tant qu'un chiffre officiel n'est pas confirmé — le composant
`StatBlock` affiche alors "À venir" plutôt qu'un nombre fictif.

## Remplacer les images

Voir `src/assets/images/`. Les projets référencent leurs visuels via le champ
`image` dans `src/data/projects.ts` — remplacer le chemin une fois les
visuels définitifs disponibles.

## Préparation multilingue (FR → FR/EN)

Voir le commentaire d'architecture dans `src/content/i18n.ts`. Le texte
éditorial de chaque page est isolé dans une constante en tête de fichier,
prêt à être extrait vers des dictionnaires `fr`/`en` sans refactoring
profond.

---

## Déploiement

Le projet est un site statique standard (Vite) : il se déploie sur
Netlify, Vercel, Cloudflare Pages ou tout hébergement statique.

### Exemple — Netlify

1. Connecter le dépôt Git à Netlify.
2. Build command : `npm run build`
3. Publish directory : `dist`
4. Déployer.

### Exemple — Vercel

1. Importer le dépôt sur Vercel.
2. Framework preset : Vite (détecté automatiquement).
3. Déployer.

### Connecter un nom de domaine Hostinger

1. Déployer le site sur la plateforme choisie (Netlify/Vercel/etc.) et
   récupérer les enregistrements DNS demandés (généralement un `CNAME`
   ou des `A records`).
2. Dans le panneau Hostinger : **Domaines → [votre domaine] → DNS / Zone
   Editor**.
3. Ajouter les enregistrements fournis par la plateforme d'hébergement :
   - `CNAME` `www` → URL fournie par la plateforme, ou
   - `A record` `@` → IP fournie par la plateforme.
4. Sur la plateforme d'hébergement, ajouter le domaine personnalisé dans
   les paramètres du projet et attendre la propagation DNS (jusqu'à 24-48h).
5. Activer le HTTPS (généralement automatique une fois le domaine vérifié).

### Variables d'environnement

Aucune variable d'environnement n'est requise pour le fonctionnement actuel
du site (le formulaire de contact est en attente de branchement à un
service d'envoi réel — voir le `TODO` dans
`src/components/ContactForm/ContactForm.tsx`). Lorsque ce service sera
choisi (ex. Formspree, Resend, API interne), ses clés devront être
ajoutées dans un fichier `.env` (non versionné, voir `.gitignore`) et
exposées via le préfixe `VITE_` requis par Vite, par ex. :

```bash
VITE_CONTACT_API_URL=...
VITE_CONTACT_API_KEY=...
```

---

## ⚠️ Note sur cette livraison

Ce projet a été généré dans un environnement **sans accès Internet** : il
n'a donc pas été possible d'exécuter `npm install` ni de vérifier le build
avec les dépendances réelles (React Router, Tailwind, Framer Motion,
Lucide React). Le code a été écrit et relu avec rigueur (équilibrage des
imports/exports vérifié par script), mais **le premier `npm install &&
npm run build` doit être fait par vous en local**, dans un environnement
avec accès réseau. Si une erreur de compilation apparaît malgré tout,
copiez-la telle quelle et je la corrige.
