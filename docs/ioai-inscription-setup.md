# Inscription IOAI Gabon — mise en route (sans déploiement séparé)

Le formulaire de `/ioai-gabon/inscription` envoie les candidatures via
**Formspree**, exactement comme le fait déjà le formulaire de contact du
site (`ContactForm.tsx`). Aucun backend à écrire ni à déployer : une fois le
formulaire créé sur Formspree, tout fonctionne avec le déploiement GitHub
Pages déjà en place.

## 1. Créer le formulaire Formspree (5 minutes, une seule fois)

1. Créer un compte sur [formspree.io](https://formspree.io) (offre gratuite :
   50 soumissions/mois — largement suffisant pour démarrer).
2. Créer un **nouveau** formulaire, dédié aux inscriptions (ne pas réutiliser
   celui du formulaire de contact, pour ne pas mélanger les deux).
3. Associer et vérifier l'adresse `contact@diam-ai.com` (Formspree envoie un
   email de confirmation à cliquer).
4. Copier l'identifiant du formulaire affiché dans le tableau de bord
   (ex. `abcdwxyz`, visible dans l'URL `https://formspree.io/f/abcdwxyz`).

## 2. Brancher l'identifiant dans le code

Ouvrir `src/data/ioaiInscription.ts` et remplacer :

```ts
export const INSCRIPTION_FORMSPREE_ID = "VOTRE_ID_FORMSPREE";
```

par le véritable identifiant copié à l'étape 1, par exemple :

```ts
export const INSCRIPTION_FORMSPREE_ID = "abcdwxyz";
```

Committer et pousser ce changement — le prochain déploiement GitHub Pages
(déclenché automatiquement par le workflow déjà en place) suffit, il n'y a
rien d'autre à publier ailleurs.

Tant que l'identifiant reste à `"VOTRE_ID_FORMSPREE"`, le formulaire reste
utilisable à l'écran mais affiche un message clair ("l'envoi des
inscriptions n'est pas encore configuré") plutôt que d'échouer silencieusement.

## 3. Récupérer les candidatures après soumission

Deux façons, sans rien configurer de plus :

- **Par email** : dans le tableau de bord Formspree → Settings → Email
  Notifications, vérifier que les notifications sont actives sur
  `contact@diam-ai.com`. Chaque inscription arrive alors par email, avec
  toutes les réponses du candidat.
- **Toutes les candidatures d'un coup** : dans le tableau de bord Formspree
  → onglet du formulaire → bouton **Export / Download CSV**. Le fichier
  obtenu s'ouvre directement dans Excel ou Google Sheets, avec une colonne
  par champ du formulaire (Nom, Prénom, Email, Établissement, Motivation,
  etc.).

Pas de Google Sheet à créer ni de script à maintenir : Formspree joue déjà
ce rôle de "boîte de réception + export" pour les candidatures.

## 4. Procédure de test

1. `npm run dev`, ouvrir `/ioai-gabon/inscription`.
2. Remplir le formulaire avec des données de test et envoyer.
3. Vérifier :
   - l'écran "Inscription enregistrée" s'affiche ;
   - l'email de notification arrive sur `contact@diam-ai.com` ;
   - la candidature apparaît dans le tableau de bord Formspree et dans un
     export CSV.
4. Candidat mineur : renseigner une date de naissance de moins de 18 ans →
   les champs "Responsable légal" doivent devenir obligatoires ; la
   soumission doit être bloquée tant qu'ils sont vides.
5. Double clic sur "Envoyer mon inscription" → une seule candidature doit
   être enregistrée (le bouton se désactive dès le premier clic).
6. Identifiant non configuré : remettre `INSCRIPTION_FORMSPREE_ID` à
   `"VOTRE_ID_FORMSPREE"` pour vérifier que le message d'erreur explicite
   s'affiche bien, puis remettre le vrai identifiant.

## Pourquoi pas de Google Apps Script / Google Sheets ?

Une première version de ce formulaire envisageait un backend Google Apps
Script écrivant directement dans une Google Sheet, avec génération d'un
numéro de candidat séquentiel. Cette approche a été abandonnée au profit de
Formspree pour rester cohérente avec la contrainte du site (aucun
déploiement en dehors de GitHub Pages) : un Apps Script doit être déployé et
redéployé séparément à chaque modification, ce qui ajoute une étape
récurrente que Formspree évite entièrement. Conséquence : il n'y a plus de
numéro de candidat généré automatiquement — si un identifiant de suivi est
utile plus tard, il peut être attribué manuellement lors du traitement des
candidatures (par exemple directement dans le fichier exporté).

## Rappel sécurité (inchangé)

Aucun token EduSpace, mot de passe ou clé API n'est, ni ne doit être, présent
dans ce code. La gestion de l'accès EduSpace des candidats admis reste
entièrement manuelle et séparée de ce formulaire.
