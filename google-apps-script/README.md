# IOAI Gabon 2027 — Backend d'inscription (Google Apps Script)

Backend du formulaire `/ioai-gabon/inscription`. Le site (GitHub Pages) est
100 % statique et n'a pas de serveur : ce Google Apps Script Web App est le
seul composant côté serveur de toute la fonctionnalité d'inscription.

Aucun secret (token EduSpace, mot de passe, clé API) ne doit jamais être
écrit dans `Code.gs`, ni dans le dépôt GitHub. La gestion de l'accès
EduSpace est volontairement hors-scope de ce script.

---

## 1. Structure de la Google Sheet (25 colonnes)

Créer une Google Sheet, lui donner un nom (ex. `IOAI Gabon 2027 — Inscriptions`),
puis **ne rien créer manuellement dans les colonnes** : la première exécution
de `doPost` crée automatiquement une feuille nommée `Inscriptions` avec les
en-têtes ci-dessous (fonction `getOrCreateSheet()` dans `Code.gs`). C'est
volontaire : il n'y a qu'un seul endroit (`HEADERS` dans `Code.gs`) qui
définit la structure, pour éviter tout désalignement entre la feuille et le
script.

| # | Colonne | Rempli par |
|---|---|---|
| A | ID candidat | Généré (`IOAI-GA-2027-0001`, ...) |
| B | Date d'inscription | Généré (horodatage serveur) |
| C | Nom | Formulaire |
| D | Prénom | Formulaire |
| E | Date de naissance | Formulaire |
| F | Email | Formulaire |
| G | Téléphone | Formulaire (optionnel) |
| H | Sexe | Formulaire (optionnel) |
| I | Établissement | Formulaire |
| J | Classe / niveau | Formulaire |
| K | Filière | Formulaire (optionnel) |
| L | Province | Formulaire |
| M | Ville | Formulaire |
| N | A déjà programmé | Formulaire (Oui/Non) |
| O | Langages / outils | Formulaire (liste séparée par virgules) |
| P | Projet IA | Formulaire (Oui/Non) |
| Q | Description du projet | Formulaire (optionnel) |
| R | Motivation | Formulaire (500 car. max) |
| S | Responsable légal - Nom | Formulaire (requis si mineur) |
| T | Responsable légal - Email | Formulaire (requis si mineur) |
| U | Responsable légal - Téléphone | Formulaire (requis si mineur) |
| V | Newsletter | Formulaire (Oui/Non) |
| W | Statut inscription | **Admin** — ex. Nouvelle / Validée / Rejetée |
| X | Statut EduSpace | **Admin** — géré manuellement, séparément |
| Y | Commentaires admin | **Admin** — libre |

Les colonnes **W, X, Y** sont initialisées par le script (`"Nouvelle"`,
`"Non applicable"`, `""`) et destinées à être modifiées manuellement par
l'équipe DIAM-AI au fil du traitement des candidatures — jamais par le
formulaire.

---

## 2. Création du script et déploiement

1. Ouvrir la Google Sheet créée à l'étape 1.
2. Menu **Extensions → Apps Script**. Cela crée un projet Apps Script lié à
   la feuille (c'est important : ça permet à `SpreadsheetApp.getActiveSpreadsheet()`
   de retrouver la bonne feuille sans configuration supplémentaire).
3. Remplacer le contenu de `Code.gs` (fichier généré par défaut) par le
   contenu de **`google-apps-script/Code.gs`** de ce dépôt.
4. Si besoin, changer la constante `ADMIN_EMAIL` en haut du fichier.
5. Enregistrer (icône disquette ou `Ctrl+S`).
6. **Déployer → Nouveau déploiement**.
   - Type : **Application Web**.
   - Exécuter en tant que : **Moi** (le compte propriétaire du script).
   - Qui a accès : **Tout le monde** (nécessaire pour que le site public
     puisse appeler l'endpoint sans authentification Google).
7. Cliquer sur **Déployer**. Google demande d'autoriser le script (accès à
   Gmail pour `MailApp`, et à la feuille) — accepter via le compte
   propriétaire.
8. Copier l'**URL de l'application Web** obtenue (se termine par `/exec`).
   C'est l'URL à mettre dans `.env` du frontend (voir section 4).

### Mettre à jour le script après un changement de code

Modifier `Code.gs` dans l'éditeur Apps Script, enregistrer, puis
**Déployer → Gérer les déploiements → ✏️ (modifier) → Nouvelle version →
Déployer**. Simplement enregistrer le fichier ne suffit pas : il faut créer
une nouvelle version du déploiement pour que l'URL `/exec` publique serve le
nouveau code.

---

## 3. Configuration du frontend

Le frontend lit l'URL du Web App depuis une variable d'environnement Vite,
jamais codée en dur dans le code source (`src/data/ioaiInscription.ts`).

1. Copier `.env.example` (racine du dépôt) vers `.env` :
   ```
   cp .env.example .env
   ```
2. Renseigner :
   ```
   VITE_IOAI_INSCRIPTION_ENDPOINT=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
   ```
3. `.env` est déjà exclu par `.gitignore` — il ne doit **jamais** être
   commité.
4. Pour le déploiement GitHub Pages (via GitHub Actions), ajouter la même
   valeur comme **secret du dépôt** :
   - GitHub → Settings → Secrets and variables → Actions → **New repository
     secret**.
   - Nom : `VITE_IOAI_INSCRIPTION_ENDPOINT`.
   - Valeur : l'URL `/exec` copiée à l'étape précédente.
   - Dans `.github/workflows/deploy.yml`, avant l'étape `npm run build`,
     exposer le secret en variable d'environnement du job, par exemple :
     ```yaml
     - run: npm run build
       env:
         VITE_IOAI_INSCRIPTION_ENDPOINT: ${{ secrets.VITE_IOAI_INSCRIPTION_ENDPOINT }}
     ```
   Vite inline les variables `VITE_*` **au moment du build** — c'est pourquoi
   le secret doit être disponible pendant l'étape `npm run build` du
   workflow, pas seulement dans un `.env` local.

   Cette URL `/exec` n'est pas un secret au sens strict (c'est l'adresse
   publique du formulaire, comme l'identifiant Formspree déjà utilisé par
   `ContactForm.tsx`) ; elle est tout de même passée en secret GitHub ici par
   simplicité, pour éviter d'avoir à la committer en clair dans le workflow.

---

## 4. Procédure de test complète

1. **Déploiement du script** : ouvrir l'URL `/exec` directement dans un
   navigateur → doit répondre un JSON `{"status":"ok","message":"IOAI Gabon — endpoint d'inscription actif."}`
   (c'est `doGet()`, qui confirme que le déploiement est public et actif).
2. **En local** : `npm run dev`, avec `.env` renseigné (section 3), ouvrir
   `/ioai-gabon/inscription`.
3. **Soumission valide** : remplir tous les champs obligatoires d'un
   candidat majeur, cocher les deux cases de confirmation, envoyer.
   - Le formulaire doit afficher l'écran "INSCRIPTION ENREGISTRÉE" avec un
     numéro candidat au format `IOAI-GA-2027-000X`.
   - Vérifier dans la Google Sheet qu'une nouvelle ligne est apparue dans
     `Inscriptions`, avec toutes les colonnes correctement remplies et W/X/Y
     initialisées à `Nouvelle` / `Non applicable` / vide.
   - Vérifier la réception de l'email admin (`ADMIN_EMAIL`) et de l'email de
     confirmation (adresse du candidat saisie dans le formulaire).
4. **Candidat mineur** : indiquer une date de naissance de moins de 18 ans
   → les champs "Responsable légal" doivent devenir obligatoires côté
   formulaire, avec le message explicatif. Soumettre sans les remplir →
   l'envoi doit être bloqué côté frontend. Les remplir → la soumission doit
   réussir et la ligne Sheet doit contenir les coordonnées du responsable.
5. **Validations backend** : avec un outil comme `curl` ou Postman, envoyer
   une requête POST directe à l'URL `/exec` **sans** passer par le
   formulaire (par exemple en omettant `email`) :
   ```bash
   curl -X POST "$ENDPOINT" \
     -H "Content-Type: text/plain;charset=utf-8" \
     -d '{"nom":"Test"}'
   ```
   → doit répondre `{"status":"error","message":"Champ manquant : ..."}`
   sans créer de ligne dans la feuille. Confirme que la validation ne
   repose pas uniquement sur le frontend.
6. **Anti-spam honeypot** : soumettre une requête avec `"honeypot":"rempli"`
   → doit répondre `{"status":"ok","idCandidat":"—"}` **sans** créer de
   ligne ni envoyer d'email (vérifier la feuille).
7. **Anti-spam délai** : soumettre avec `"elapsedMs": 100` → même
   comportement neutre (aucune ligne créée).
8. **Doubles soumissions** : dans le formulaire, cliquer plusieurs fois
   rapidement sur "Envoyer mon inscription" → un seul enregistrement doit
   apparaître (le bouton se désactive dès le premier clic via `isSubmitting`).
9. **IDs séquentiels sous charge concurrente** (optionnel, avant une
   ouverture publique) : envoyer plusieurs requêtes POST valides en
   parallèle (ex. script avec plusieurs `curl` lancés simultanément en
   arrière-plan) → vérifier qu'aucun `ID candidat` n'est dupliqué dans la
   feuille (le `LockService` dans `doPost` est là pour garantir ça).
10. **Endpoint non configuré** : vider `VITE_IOAI_INSCRIPTION_ENDPOINT` dans
    `.env`, relancer `npm run dev`, soumettre le formulaire → doit afficher
    un message d'erreur clair ("L'envoi des inscriptions n'est pas encore
    configuré...") plutôt qu'une erreur réseau brute.

---

## 5. Rappels de sécurité (à ne jamais changer)

- Jamais de token EduSpace, mot de passe Google ou clé API en dur dans
  `Code.gs` ou dans le frontend React.
- L'accès EduSpace des candidats admis est géré **manuellement, en dehors**
  de ce script (colonne "Statut EduSpace" mise à jour à la main).
- Le dépôt GitHub ne contient jamais `.env` (vérifié par `.gitignore`) — seule
  l'URL publique `/exec` circule, via un secret GitHub Actions ou un `.env`
  local non commité.
- Les données collectées se limitent à ce qui est strictement nécessaire à
  l'organisation de la sélection (pas de champs superflus).
