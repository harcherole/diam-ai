/**
 * IOAI Gabon 2027 — Backend d'inscription (Google Apps Script Web App)
 * =====================================================================
 *
 * Reçoit les soumissions du formulaire React de /ioai-gabon/inscription,
 * les valide, les écrit dans la Google Sheet "Inscriptions", génère un
 * identifiant candidat séquentiel, puis envoie un email à l'admin et un
 * email de confirmation au candidat.
 *
 * SÉCURITÉ — à ne jamais oublier :
 * - Aucun token EduSpace, mot de passe ou clé API ne doit jamais être
 *   écrit ici en dur. La gestion de l'accès EduSpace est hors-scope de ce
 *   script (traitée séparément, manuellement, par l'équipe DIAM-AI).
 * - Ce fichier vit dans l'éditeur Apps Script (script.google.com), PAS
 *   dans le dépôt GitHub du site. Le dépôt ne contient que l'URL publique
 *   du Web App déployé (voir .env.example), qui n'est pas un secret.
 * - ADMIN_EMAIL est la seule adresse à modifier si elle change — elle
 *   n'est dupliquée nulle part ailleurs dans ce fichier.
 */

const ADMIN_EMAIL = "contact@diam-ai.com";
const SHEET_NAME = "Inscriptions";
const EDITION = "2027";

// En-têtes de la feuille, dans l'ordre exact des colonnes (A → Y, 25 colonnes).
// Voir google-apps-script/README.md pour la description complète de chaque colonne.
const HEADERS = [
  "ID candidat", // A
  "Date d'inscription", // B
  "Nom", // C
  "Prénom", // D
  "Date de naissance", // E
  "Email", // F
  "Téléphone", // G
  "Sexe", // H
  "Établissement", // I
  "Classe / niveau", // J
  "Filière", // K
  "Province", // L
  "Ville", // M
  "A déjà programmé", // N
  "Langages / outils", // O
  "Projet IA", // P
  "Description du projet", // Q
  "Motivation", // R
  "Responsable légal - Nom", // S
  "Responsable légal - Email", // T
  "Responsable légal - Téléphone", // U
  "Newsletter", // V
  "Statut inscription", // W
  "Statut EduSpace", // X
  "Commentaires admin", // Y
];

// Durée minimale (ms) entre le chargement du formulaire et sa soumission.
// Un envoi plus rapide que ça est un signal fort de bot plutôt qu'un
// humain qui a réellement lu puis rempli le formulaire.
const DUREE_MIN_SOUMISSION_MS = 4000;

/**
 * Point d'entrée HTTP POST. Le frontend envoie du JSON avec un
 * Content-Type "text/plain;charset=utf-8" (et non "application/json")
 * pour éviter que le navigateur déclenche une pré-vérification CORS
 * (OPTIONS) à laquelle Apps Script Web App ne sait pas répondre. On lit
 * donc toujours le JSON depuis e.postData.contents, indépendamment du
 * Content-Type déclaré.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // --- Anti-spam : honeypot ---------------------------------------
    // Champ invisible côté frontend ; un humain ne le remplit jamais.
    if (data.honeypot) {
      return jsonResponse({ status: "ok", idCandidat: "—" }); // réponse neutre, silencieuse pour le bot
    }

    // --- Anti-spam : délai de soumission -----------------------------
    if (typeof data.elapsedMs === "number" && data.elapsedMs < DUREE_MIN_SOUMISSION_MS) {
      return jsonResponse({ status: "ok", idCandidat: "—" }); // idem : pas d'indice donné au bot
    }

    // --- Validation backend (ne jamais faire confiance au frontend seul) ---
    const erreur = validerPayload(data);
    if (erreur) {
      return jsonResponse({ status: "error", message: erreur });
    }

    // --- Écriture dans la feuille, sous verrou pour éviter les ID en doublon ---
    const lock = LockService.getScriptLock();
    lock.waitLock(30000);
    let idCandidat;
    try {
      const sheet = getOrCreateSheet();
      idCandidat = genererIdCandidat(sheet);
      ajouterLigne(sheet, idCandidat, data);
    } finally {
      lock.releaseLock();
    }

    // --- Emails (best-effort : un échec d'email ne doit pas faire échouer l'inscription) ---
    try {
      envoyerEmailAdmin(idCandidat, data);
    } catch (err) {
      console.error("Échec email admin : " + err);
    }
    try {
      envoyerEmailCandidat(idCandidat, data);
    } catch (err) {
      console.error("Échec email candidat : " + err);
    }

    return jsonResponse({ status: "ok", idCandidat: idCandidat });
  } catch (err) {
    console.error("Erreur doPost : " + err);
    return jsonResponse({ status: "error", message: "Erreur serveur. Merci de réessayer." });
  }
}

/** Réponse de secours pour un GET accidentel (ex. ouverture de l'URL dans un navigateur). */
function doGet() {
  return jsonResponse({ status: "ok", message: "IOAI Gabon — endpoint d'inscription actif." });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Validation backend minimale — reprend les règles obligatoires du
 * frontend. Ne vérifie pas plus que nécessaire (voir contrainte de
 * minimisation des données personnelles : on ne collecte / ne contrôle
 * que ce qui est réellement utile).
 */
function validerPayload(data) {
  const requis = ["nom", "prenom", "dateNaissance", "email", "etablissement", "classe", "province", "ville", "motivation"];
  for (const champ of requis) {
    if (!data[champ] || String(data[champ]).trim() === "") {
      return "Champ manquant : " + champ;
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) return "Email candidat invalide.";

  if (data.motivation.length > 500) return "Motivation trop longue (500 caractères max).";

  if (!data.consentementExactitude || !data.consentementTraitement) {
    return "Les cases de confirmation sont obligatoires.";
  }

  const age = ageDepuisDate(data.dateNaissance);
  if (age !== null && age < 18) {
    if (!data.responsableNom || !data.responsableEmail || !data.responsableTelephone) {
      return "Coordonnées du responsable légal requises pour un candidat mineur.";
    }
    if (!emailRegex.test(data.responsableEmail)) return "Email du responsable légal invalide.";
  }

  return null; // pas d'erreur
}

function ageDepuisDate(dateStr) {
  const naissance = new Date(dateStr);
  if (isNaN(naissance.getTime())) return null;
  const aujourdhui = new Date();
  let age = aujourdhui.getFullYear() - naissance.getFullYear();
  const pasEncoreAnniversaire =
    aujourdhui.getMonth() < naissance.getMonth() ||
    (aujourdhui.getMonth() === naissance.getMonth() && aujourdhui.getDate() < naissance.getDate());
  if (pasEncoreAnniversaire) age -= 1;
  return age;
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * ID séquentiel au format IOAI-GA-2027-0001. Toujours appelé À L'INTÉRIEUR
 * du LockService.getScriptLock() ci-dessus pour éviter que deux
 * soumissions simultanées obtiennent le même numéro.
 */
function genererIdCandidat(sheet) {
  const dernierRow = sheet.getLastRow();
  const nombreCandidats = dernierRow > 1 ? dernierRow - 1 : 0; // -1 pour l'en-tête
  const prochainNumero = nombreCandidats + 1;
  const numeroFormatte = ("0000" + prochainNumero).slice(-4);
  return "IOAI-GA-" + EDITION + "-" + numeroFormatte;
}

function ajouterLigne(sheet, idCandidat, data) {
  const maintenant = new Date();
  sheet.appendRow([
    idCandidat,
    maintenant,
    data.nom || "",
    data.prenom || "",
    data.dateNaissance || "",
    data.email || "",
    data.telephone || "",
    data.sexe || "",
    data.etablissement || "",
    data.classe || "",
    data.filiere || "",
    data.province || "",
    data.ville || "",
    data.aDejaProgramme || "",
    data.langages || "",
    data.projetIA || "",
    data.descriptionProjet || "",
    data.motivation || "",
    data.responsableNom || "",
    data.responsableEmail || "",
    data.responsableTelephone || "",
    data.newsletter ? "Oui" : "Non",
    "Nouvelle", // Statut inscription
    "Non applicable", // Statut EduSpace — géré séparément, hors-scope ici
    "", // Commentaires admin
  ]);
}

function envoyerEmailAdmin(idCandidat, data) {
  const sujet = "[IOAI Gabon " + EDITION + "] Nouvelle inscription — " + idCandidat;
  const corps =
    "Nouvelle inscription à la sélection nationale IOAI Gabon " + EDITION + ".\n\n" +
    "ID candidat : " + idCandidat + "\n" +
    "Nom : " + data.nom + " " + data.prenom + "\n" +
    "Date de naissance : " + data.dateNaissance + "\n" +
    "Email : " + data.email + "\n" +
    "Téléphone : " + (data.telephone || "—") + "\n" +
    "Établissement : " + data.etablissement + " (" + data.classe + ")\n" +
    "Province / Ville : " + data.province + " / " + data.ville + "\n" +
    "A déjà programmé : " + data.aDejaProgramme + "\n" +
    "Langages / outils : " + (data.langages || "—") + "\n" +
    "Projet IA : " + data.projetIA + "\n" +
    (data.responsableNom ? "Responsable légal : " + data.responsableNom + " / " + data.responsableEmail + " / " + data.responsableTelephone + "\n" : "") +
    "\nMotivation :\n" + data.motivation + "\n";

  MailApp.sendEmail(ADMIN_EMAIL, sujet, corps);
}

function envoyerEmailCandidat(idCandidat, data) {
  const sujet = "Confirmation d'inscription — IOAI Gabon " + EDITION;
  const corps =
    "Bonjour " + data.prenom + ",\n\n" +
    "Ton inscription à la sélection nationale IOAI Gabon " + EDITION + " a bien été enregistrée.\n\n" +
    "Ton numéro candidat : " + idCandidat + "\n\n" +
    "Les informations relatives au premier tour et, le cas échéant, à l'accès à la plateforme " +
    "EduSpace te seront communiquées ultérieurement par ce même email.\n\n" +
    "Merci de conserver ce message.\n\n" +
    "— L'équipe DIAM-AI\n" +
    "Organisation accréditée pour représenter le Gabon auprès de l'IOAI\n" +
    "www.diam-ai.com/ioai-gabon";

  MailApp.sendEmail(data.email, sujet, corps);
}
