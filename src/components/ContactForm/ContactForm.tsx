import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type RequestType =
  | "Formation"
  | "Accompagnement"
  | "Projet IA"
  | "Partenariat"
  | "Intervention"
  | "Autre";

const requestTypes: RequestType[] = [
  "Formation",
  "Accompagnement",
  "Projet IA",
  "Partenariat",
  "Intervention",
  "Autre",
];

interface FormState {
  lastName: string;
  firstName: string;
  email: string;
  organization: string;
  subject: string;
  requestType: RequestType | "";
  message: string;
}

const initialState: FormState = {
  lastName: "",
  firstName: "",
  email: "",
  organization: "",
  subject: "",
  requestType: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.lastName.trim()) next.lastName = "Le nom est requis.";
    if (!form.firstName.trim()) next.firstName = "Le prénom est requis.";
    if (!form.email.trim()) next.email = "L'email est requis.";
    else if (!emailRegex.test(form.email)) next.email = "Format d'email invalide.";
    if (!form.subject.trim()) next.subject = "Le sujet est requis.";
    if (!form.requestType) next.requestType = "Sélectionnez un type de demande.";
    if (!form.message.trim()) next.message = "Le message est requis.";
    else if (form.message.trim().length < 20)
      next.message = "Merci de détailler votre message (20 caractères minimum).";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: brancher l'envoi réel (API / service email) une fois disponible.
    console.info("Contact form submission", form);
    setSubmitted(true);
    setForm(initialState);
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent ${
      hasError ? "border-red-400" : "border-navy-900/12"
    }`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-navy-900/8 bg-white px-8 py-14 text-center">
        <CheckCircle2 size={40} className="text-cyan" />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">Message envoyé</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-700">
          Merci pour votre message. L'équipe DIAM-AI reviendra vers vous dans les meilleurs délais.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-accent"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">Prénom</label>
          <input
            className={inputClass(!!errors.firstName)}
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">Nom</label>
          <input
            className={inputClass(!!errors.lastName)}
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">Email</label>
          <input
            type="email"
            className={inputClass(!!errors.email)}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Organisation <span className="text-ink-500">(optionnel)</span>
          </label>
          <input
            className={inputClass(false)}
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-800">Type de demande</label>
        <select
          className={inputClass(!!errors.requestType)}
          value={form.requestType}
          onChange={(e) => update("requestType", e.target.value as RequestType)}
        >
          <option value="">Sélectionnez un type de demande</option>
          {requestTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.requestType && <p className="mt-1 text-xs text-red-500">{errors.requestType}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-800">Sujet</label>
        <input
          className={inputClass(!!errors.subject)}
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
        />
        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-800">Message</label>
        <textarea
          rows={5}
          className={inputClass(!!errors.message)}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
      >
        Envoyer le message
      </button>
    </form>
  );
}
