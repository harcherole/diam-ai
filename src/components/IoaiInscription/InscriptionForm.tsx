import { useState } from "react";
import type { FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  INSCRIPTION_FORMSPREE_ENDPOINT,
  INSCRIPTION_FORMSPREE_ID,
  genres,
  langagesOutils,
  niveauxScolaires,
  provincesGabon,
} from "@/data/ioaiInscription";

const MOTIVATION_MAX = 500;

type OuiNon = "Oui" | "Non" | "";

interface FormState {
  // Section 1 — informations personnelles
  nom: string;
  prenom: string;
  dateNaissance: string;
  email: string;
  telephone: string;
  sexe: string;
  // Section 2 — scolarité
  etablissement: string;
  classe: string;
  province: string;
  ville: string;
  filiere: string;
  // Section 3 — expérience programmation / IA
  aDejaProgramme: OuiNon;
  langages: string[];
  projetIA: OuiNon;
  descriptionProjet: string;
  // Section 4 — motivation
  motivation: string;
  // Section 5 — responsable légal
  responsableNom: string;
  responsableEmail: string;
  responsableTelephone: string;
  // Section 6 — confirmation
  consentementExactitude: boolean;
  consentementTraitement: boolean;
  newsletter: boolean;
  // anti-spam, invisible pour un visiteur humain
  honeypot: string;
}

const initialState: FormState = {
  nom: "",
  prenom: "",
  dateNaissance: "",
  email: "",
  telephone: "",
  sexe: "",
  etablissement: "",
  classe: "",
  province: "",
  ville: "",
  filiere: "",
  aDejaProgramme: "",
  langages: [],
  projetIA: "",
  descriptionProjet: "",
  motivation: "",
  responsableNom: "",
  responsableEmail: "",
  responsableTelephone: "",
  consentementExactitude: false,
  consentementTraitement: false,
  newsletter: false,
  honeypot: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Âge en années à partir d'une date de naissance (chaîne "YYYY-MM-DD").
 * Utilisé uniquement pour déterminer si les coordonnées du responsable
 * légal doivent devenir obligatoires — jamais pour filtrer l'éligibilité
 * à la sélection, qui n'est pas de notre ressort ici (cf. règlement
 * officiel, non encore publié).
 */
function ageAnsDepuis(dateNaissance: string): number | null {
  if (!dateNaissance) return null;
  const naissance = new Date(dateNaissance);
  if (Number.isNaN(naissance.getTime())) return null;
  const aujourdhui = new Date();
  let age = aujourdhui.getFullYear() - naissance.getFullYear();
  const pasEncoreAnniversaire =
    aujourdhui.getMonth() < naissance.getMonth() ||
    (aujourdhui.getMonth() === naissance.getMonth() && aujourdhui.getDate() < naissance.getDate());
  if (pasEncoreAnniversaire) age -= 1;
  return age;
}

export default function InscriptionForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState(false);

  const age = ageAnsDepuis(form.dateNaissance);
  const responsableRequis = age !== null && age < 18;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleLangage = (langage: string) => {
    setForm((prev) => ({
      ...prev,
      langages: prev.langages.includes(langage)
        ? prev.langages.filter((l) => l !== langage)
        : [...prev.langages, langage],
    }));
  };

  const validate = (): boolean => {
    const next: Errors = {};

    if (!form.nom.trim()) next.nom = "Le nom est requis.";
    if (!form.prenom.trim()) next.prenom = "Le prénom est requis.";

    if (!form.dateNaissance) {
      next.dateNaissance = "La date de naissance est requise.";
    } else {
      const d = new Date(form.dateNaissance);
      if (Number.isNaN(d.getTime())) next.dateNaissance = "Date invalide.";
      else if (d.getTime() > Date.now()) next.dateNaissance = "La date ne peut pas être dans le futur.";
    }

    if (!form.email.trim()) next.email = "L'email est requis.";
    else if (!emailRegex.test(form.email)) next.email = "Format d'email invalide.";

    if (!form.etablissement.trim()) next.etablissement = "L'établissement est requis.";
    if (!form.classe) next.classe = "Sélectionnez une classe.";
    if (!form.province) next.province = "Sélectionnez une province.";
    if (!form.ville.trim()) next.ville = "La ville est requise.";

    if (!form.aDejaProgramme) next.aDejaProgramme = "Merci de répondre à cette question.";
    if (!form.projetIA) next.projetIA = "Merci de répondre à cette question.";

    if (!form.motivation.trim()) next.motivation = "Ce champ est requis.";
    else if (form.motivation.length > MOTIVATION_MAX)
      next.motivation = `500 caractères maximum (${form.motivation.length} actuellement).`;

    if (responsableRequis) {
      if (!form.responsableNom.trim())
        next.responsableNom = "Requis : le candidat est mineur d'après la date de naissance renseignée.";
      if (!form.responsableEmail.trim()) next.responsableEmail = "Requis pour un candidat mineur.";
      else if (!emailRegex.test(form.responsableEmail)) next.responsableEmail = "Format d'email invalide.";
      if (!form.responsableTelephone.trim()) next.responsableTelephone = "Requis pour un candidat mineur.";
    } else if (form.responsableEmail.trim() && !emailRegex.test(form.responsableEmail)) {
      next.responsableEmail = "Format d'email invalide.";
    }

    if (!form.consentementExactitude)
      next.consentementExactitude = "Cette confirmation est requise pour envoyer l'inscription.";
    if (!form.consentementTraitement)
      next.consentementTraitement = "Cette confirmation est requise pour envoyer l'inscription.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // garde-fou supplémentaire contre la double soumission

    // Honeypot : un champ invisible qu'un humain ne remplit jamais. S'il est
    // rempli, on affiche un succès silencieux sans rien envoyer — ni au
    // candidat ni au bot l'intérêt de savoir qu'il a été démasqué.
    if (form.honeypot) {
      setConfirmation(true);
      setForm(initialState);
      return;
    }

    if (!validate()) return;

    if (INSCRIPTION_FORMSPREE_ID === "https://formspree.io/f/mvkzrgzg") {
      setSubmitError(
        "L'envoi des inscriptions n'est pas encore configuré sur ce site (identifiant Formspree manquant). Merci de réessayer plus tard ou d'écrire à contact@diam-ai.com."
      );
      return;
    }

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch(INSCRIPTION_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nom: form.nom.trim(),
          Prénom: form.prenom.trim(),
          "Date de naissance": form.dateNaissance,
          Email: form.email.trim(),
          Téléphone: form.telephone.trim() || "—",
          Sexe: form.sexe || "—",
          Établissement: form.etablissement.trim(),
          "Classe / niveau": form.classe,
          Filière: form.filiere.trim() || "—",
          Province: form.province,
          Ville: form.ville.trim(),
          "A déjà programmé": form.aDejaProgramme,
          "Langages / outils": form.langages.join(", ") || "—",
          "Projet IA": form.projetIA,
          "Description du projet": form.descriptionProjet.trim() || "—",
          Motivation: form.motivation.trim(),
          "Responsable légal - Nom": form.responsableNom.trim() || "—",
          "Responsable légal - Email": form.responsableEmail.trim() || "—",
          "Responsable légal - Téléphone": form.responsableTelephone.trim() || "—",
          Newsletter: form.newsletter ? "Oui" : "Non",
          _replyto: form.email.trim(),
          _subject: `[IOAI Gabon 2027] Nouvelle inscription — ${form.prenom} ${form.nom}`,
        }),
      });

      if (!res.ok) throw new Error(`Formspree a répondu ${res.status}`);

      setConfirmation(true);
      setForm(initialState);
    } catch (err) {
      console.error("Échec de l'envoi de l'inscription IOAI Gabon :", err);
      setSubmitError(
        "L'envoi a échoué. Vérifie ta connexion et réessaie, ou écris-nous directement à contact@diam-ai.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent ${
      hasError ? "border-red-400" : "border-navy-900/12"
    }`;

  const fieldError = (key: keyof FormState) =>
    errors[key] ? <p className="mt-1 text-xs text-red-500">{errors[key]}</p> : null;

  // ---------------------------------------------------------------
  // Écran de confirmation
  // ---------------------------------------------------------------
  if (confirmation) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-navy-900/8 bg-white px-8 py-14 text-center shadow-sm">
        <CheckCircle2 size={44} className="text-cyan" />
        <h2 className="mt-5 text-2xl font-bold text-navy-900">Inscription enregistrée</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-700">
          Merci pour ton inscription à la sélection nationale IOAI Gabon 2027. Ton
          inscription a bien été enregistrée.
        </p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-700">
          Le Round 1 se déroulera du <strong>20 au 22 novembre 2026</strong>. Les
          informations relatives à son déroulement et, le cas échéant, à l'accès à
          la plateforme EduSpace te seront communiquées par email avant son
          ouverture.
        </p>
        <Link
          to="/ioai-gabon"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
        >
          Retour à la page IOAI Gabon
        </Link>
      </div>
    );
  }

  // ---------------------------------------------------------------
  // Formulaire
  // ---------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm sm:p-10">
      {/* Honeypot — invisible pour un humain, souvent rempli par un bot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="siteweb">Ne pas remplir ce champ</label>
        <input
          id="siteweb"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => update("honeypot", e.target.value)}
        />
      </div>

      {/* Section 1 — Informations personnelles */}
      <fieldset>
        <legend className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          01 — Informations personnelles
        </legend>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">Nom *</label>
            <input
              className={inputClass(!!errors.nom)}
              value={form.nom}
              onChange={(e) => update("nom", e.target.value)}
              aria-invalid={!!errors.nom}
            />
            {fieldError("nom")}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">Prénom *</label>
            <input
              className={inputClass(!!errors.prenom)}
              value={form.prenom}
              onChange={(e) => update("prenom", e.target.value)}
              aria-invalid={!!errors.prenom}
            />
            {fieldError("prenom")}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">Date de naissance *</label>
            <input
              type="date"
              className={inputClass(!!errors.dateNaissance)}
              value={form.dateNaissance}
              onChange={(e) => update("dateNaissance", e.target.value)}
              aria-invalid={!!errors.dateNaissance}
            />
            {fieldError("dateNaissance")}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">Email *</label>
            <input
              type="email"
              className={inputClass(!!errors.email)}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
            />
            {fieldError("email")}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">
              Téléphone / WhatsApp <span className="text-ink-500">(optionnel)</span>
            </label>
            <input
              type="tel"
              className={inputClass(false)}
              value={form.telephone}
              onChange={(e) => update("telephone", e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">
              Sexe <span className="text-ink-500">(optionnel)</span>
            </label>
            <select
              className={inputClass(false)}
              value={form.sexe}
              onChange={(e) => update("sexe", e.target.value)}
            >
              <option value="">Ne pas préciser</option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Section 2 — Scolarité */}
      <fieldset className="mt-10 border-t border-navy-900/8 pt-8">
        <legend className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          02 — Scolarité
        </legend>

        <div className="mt-5">
          <label className="mb-1.5 block text-sm font-medium text-navy-800">Établissement scolaire *</label>
          <input
            className={inputClass(!!errors.etablissement)}
            value={form.etablissement}
            onChange={(e) => update("etablissement", e.target.value)}
            aria-invalid={!!errors.etablissement}
          />
          {fieldError("etablissement")}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">Classe / niveau *</label>
            <select
              className={inputClass(!!errors.classe)}
              value={form.classe}
              onChange={(e) => update("classe", e.target.value)}
              aria-invalid={!!errors.classe}
            >
              <option value="">Sélectionner</option>
              {niveauxScolaires.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            {fieldError("classe")}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">
              Série / filière <span className="text-ink-500">(optionnel)</span>
            </label>
            <input
              className={inputClass(false)}
              value={form.filiere}
              onChange={(e) => update("filiere", e.target.value)}
            />
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">Province *</label>
            <select
              className={inputClass(!!errors.province)}
              value={form.province}
              onChange={(e) => update("province", e.target.value)}
              aria-invalid={!!errors.province}
            >
              <option value="">Sélectionner</option>
              {provincesGabon.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            {fieldError("province")}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">Ville *</label>
            <input
              className={inputClass(!!errors.ville)}
              value={form.ville}
              onChange={(e) => update("ville", e.target.value)}
              aria-invalid={!!errors.ville}
            />
            {fieldError("ville")}
          </div>
        </div>
      </fieldset>

      {/* Section 3 — Expérience en programmation et IA */}
      <fieldset className="mt-10 border-t border-navy-900/8 pt-8">
        <legend className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          03 — Expérience en programmation et IA
        </legend>

        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-navy-800">As-tu déjà programmé ? *</p>
          <div className="flex gap-3">
            {(["Oui", "Non"] as const).map((opt) => (
              <label
                key={opt}
                className={`flex-1 cursor-pointer rounded-lg border px-4 py-3 text-center text-sm font-medium transition-colors ${
                  form.aDejaProgramme === opt
                    ? "border-accent bg-accent/5 text-accent"
                    : "border-navy-900/12 text-ink-700"
                }`}
              >
                <input
                  type="radio"
                  name="aDejaProgramme"
                  value={opt}
                  checked={form.aDejaProgramme === opt}
                  onChange={() => update("aDejaProgramme", opt)}
                  className="sr-only"
                />
                {opt}
              </label>
            ))}
          </div>
          {fieldError("aDejaProgramme")}
        </div>

        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-navy-800">
            Quels langages ou outils connais-tu ? <span className="text-ink-500">(plusieurs choix possibles)</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {langagesOutils.map((langage) => {
              const active = form.langages.includes(langage);
              return (
                <label
                  key={langage}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                    active ? "border-accent bg-accent/5 text-accent" : "border-navy-900/12 text-ink-700"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => toggleLangage(langage)}
                    className="sr-only"
                  />
                  {langage}
                </label>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-navy-800">
            As-tu déjà réalisé un projet en informatique, data science ou intelligence
            artificielle ? *
          </p>
          <div className="flex gap-3">
            {(["Oui", "Non"] as const).map((opt) => (
              <label
                key={opt}
                className={`flex-1 cursor-pointer rounded-lg border px-4 py-3 text-center text-sm font-medium transition-colors ${
                  form.projetIA === opt ? "border-accent bg-accent/5 text-accent" : "border-navy-900/12 text-ink-700"
                }`}
              >
                <input
                  type="radio"
                  name="projetIA"
                  value={opt}
                  checked={form.projetIA === opt}
                  onChange={() => update("projetIA", opt)}
                  className="sr-only"
                />
                {opt}
              </label>
            ))}
          </div>
          {fieldError("projetIA")}
        </div>

        {form.projetIA === "Oui" && (
          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-medium text-navy-800">
              Décris brièvement ton projet. <span className="text-ink-500">(optionnel)</span>
            </label>
            <textarea
              rows={3}
              className={inputClass(false)}
              value={form.descriptionProjet}
              onChange={(e) => update("descriptionProjet", e.target.value)}
            />
          </div>
        )}
      </fieldset>

      {/* Section 4 — Motivation */}
      <fieldset className="mt-10 border-t border-navy-900/8 pt-8">
        <legend className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          04 — Motivation
        </legend>

        <div className="mt-5">
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Pourquoi souhaites-tu participer à la sélection nationale IOAI Gabon 2027 ? *
          </label>
          <textarea
            rows={5}
            maxLength={MOTIVATION_MAX}
            className={inputClass(!!errors.motivation)}
            value={form.motivation}
            onChange={(e) => update("motivation", e.target.value)}
            aria-invalid={!!errors.motivation}
          />
          <div className="mt-1 flex items-center justify-between">
            {fieldError("motivation")}
            <span className="ml-auto text-xs text-ink-500">
              {form.motivation.length}/{MOTIVATION_MAX}
            </span>
          </div>
        </div>
      </fieldset>

      {/* Section 5 — Responsable légal */}
      <fieldset className="mt-10 border-t border-navy-900/8 pt-8">
        <legend className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          05 — Responsable légal
        </legend>
        <p className="mt-2 text-xs leading-relaxed text-ink-500">
          {responsableRequis
            ? "D'après la date de naissance renseignée, le candidat est mineur : les coordonnées d'un responsable légal sont nécessaires pour cette inscription."
            : "Optionnel si le candidat est majeur. Recommandé si un parent ou tuteur doit pouvoir être contacté."}
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">
              Nom et prénom {responsableRequis ? "*" : <span className="text-ink-500">(optionnel)</span>}
            </label>
            <input
              className={inputClass(!!errors.responsableNom)}
              value={form.responsableNom}
              onChange={(e) => update("responsableNom", e.target.value)}
              aria-invalid={!!errors.responsableNom}
            />
            {fieldError("responsableNom")}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-800">
              Email {responsableRequis ? "*" : <span className="text-ink-500">(optionnel)</span>}
            </label>
            <input
              type="email"
              className={inputClass(!!errors.responsableEmail)}
              value={form.responsableEmail}
              onChange={(e) => update("responsableEmail", e.target.value)}
              aria-invalid={!!errors.responsableEmail}
            />
            {fieldError("responsableEmail")}
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Téléphone {responsableRequis ? "*" : <span className="text-ink-500">(optionnel)</span>}
          </label>
          <input
            type="tel"
            className={inputClass(!!errors.responsableTelephone)}
            value={form.responsableTelephone}
            onChange={(e) => update("responsableTelephone", e.target.value)}
            aria-invalid={!!errors.responsableTelephone}
          />
          {fieldError("responsableTelephone")}
        </div>
      </fieldset>

      {/* Section 6 — Confirmation */}
      <fieldset className="mt-10 border-t border-navy-900/8 pt-8">
        <legend className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          06 — Confirmation
        </legend>

        <div className="mt-5 space-y-3">
          <label className="flex items-start gap-3 text-sm text-ink-700">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-900/20 text-accent focus:ring-accent"
              checked={form.consentementExactitude}
              onChange={(e) => update("consentementExactitude", e.target.checked)}
              aria-invalid={!!errors.consentementExactitude}
            />
            <span>Je certifie que les informations renseignées sont exactes. *</span>
          </label>
          {fieldError("consentementExactitude")}

          <label className="flex items-start gap-3 text-sm text-ink-700">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-900/20 text-accent focus:ring-accent"
              checked={form.consentementTraitement}
              onChange={(e) => update("consentementTraitement", e.target.checked)}
              aria-invalid={!!errors.consentementTraitement}
            />
            <span>
              J'accepte que les informations fournies soient utilisées dans le cadre de
              l'organisation de la sélection nationale IOAI Gabon 2027. *
            </span>
          </label>
          {fieldError("consentementTraitement")}

          <label className="flex items-start gap-3 text-sm text-ink-700">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-900/20 text-accent focus:ring-accent"
              checked={form.newsletter}
              onChange={(e) => update("newsletter", e.target.checked)}
            />
            <span>
              Je souhaite recevoir les communications de DIAM-AI relatives aux activités
              et programmes liés à l'IA et à l'IOAI.{" "}
              <span className="text-ink-500">(optionnel)</span>
            </span>
          </label>
        </div>
      </fieldset>

      <div className="mt-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Enregistrement en cours..." : "Envoyer mon inscription"}
        </button>

        {submitError && (
          <div
            role="alert"
            className="mt-4 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            <AlertCircle size={17} className="mt-0.5 shrink-0" />
            <span>{submitError}</span>
          </div>
        )}
      </div>
    </form>
  );
}
