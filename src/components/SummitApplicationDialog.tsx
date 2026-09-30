import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, X } from "lucide-react";

import { submitSummitApplication } from "../lib/summit-applications.functions";
import {
  summitApplicationSchema,
  trackLabels,
  type SummitTrack,
} from "../lib/summit-application-schema";

type FormState = {
  organization: string;
  contactName: string;
  contactRole: string;
  email: string;
  phone: string;
  website: string;
  city: string;
  sector: string;
  teamSize: string;
  supportType: string;
  description: string;
  message: string;
};

const emptyForm: FormState = {
  organization: "",
  contactName: "",
  contactRole: "",
  email: "",
  phone: "",
  website: "",
  city: "",
  sector: "",
  teamSize: "",
  supportType: "",
  description: "",
  message: "",
};

type FieldName = keyof FormState;

type FieldConfig = {
  name: FieldName;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "url" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  full?: boolean;
};

const trackCopy: Record<
  SummitTrack,
  { title: string; intro: string; descriptionLabel: string; descriptionPlaceholder: string }
> = {
  startup: {
    title: "Candidature startup / PME numérique",
    intro:
      "Présentez votre solution pour intégrer le Parcours Digital de Mise en Conformité et d'Accès au Marché.",
    descriptionLabel: "Présentation de votre solution",
    descriptionPlaceholder:
      "Problème traité, solution proposée, stade d'avancement, clients ou utilisateurs actuels…",
  },
  enterprise: {
    title: "Participation entreprise / institution",
    intro:
      "Réservez votre participation au Summit et exprimez vos besoins métiers et exigences fournisseurs.",
    descriptionLabel: "Vos besoins et attentes",
    descriptionPlaceholder:
      "Besoins numériques prioritaires, exigences fournisseurs, type de solutions recherchées…",
  },
  sponsor: {
    title: "Sponsoring & partenariat",
    intro:
      "Indiquez la forme d'appui envisagée : nous revenons vers vous avec la note conceptuelle complète.",
    descriptionLabel: "Votre intention de partenariat",
    descriptionPlaceholder:
      "Forme d'appui envisagée, domaines d'intérêt, budget indicatif, attentes en visibilité…",
  },
};

const commonFields: FieldConfig[] = [
  { name: "organization", label: "Nom de l'organisation", required: true },
  { name: "contactName", label: "Nom et prénom du contact", required: true },
  { name: "contactRole", label: "Fonction", placeholder: "Ex. Fondateur, Directeur…" },
  { name: "email", label: "Email professionnel", type: "email", required: true },
  { name: "phone", label: "Téléphone / WhatsApp", type: "tel", required: true },
  { name: "website", label: "Site web ou réseau social", type: "url", placeholder: "https://" },
  { name: "city", label: "Ville et pays", placeholder: "Ex. Lubumbashi, RDC", required: true },
];

const trackFields: Record<SummitTrack, FieldConfig[]> = {
  startup: [
    {
      name: "sector",
      label: "Secteur d'activité",
      type: "select",
      options: ["MiningTech", "FinTech", "GreenTech", "HealthTech", "AgriTech", "EdTech", "Autre"],
    },
    {
      name: "teamSize",
      label: "Taille de l'équipe",
      type: "select",
      options: ["1 personne", "2 à 5 personnes", "6 à 15 personnes", "Plus de 15 personnes"],
    },
  ],
  enterprise: [
    {
      name: "sector",
      label: "Secteur d'activité",
      type: "select",
      options: [
        "Mines & métallurgie",
        "Énergie",
        "Banque & finance",
        "Télécommunications",
        "Transport & logistique",
        "Institution publique",
        "ONG / Coopération",
        "Autre",
      ],
    },
    {
      name: "supportType",
      label: "Objet de votre participation",
      type: "select",
      options: [
        "Rencontrer des fournisseurs numériques",
        "Exprimer des besoins métiers",
        "Participer aux panels",
        "Contribuer au référentiel de conformité",
        "Autre",
      ],
    },
  ],
  sponsor: [
    {
      name: "supportType",
      label: "Forme d'appui envisagée",
      type: "select",
      options: [
        "Sponsor financier",
        "Partenaire technique",
        "Partenaire industriel",
        "Partenaire institutionnel",
        "Partenaire média",
        "Autre",
      ],
    },
    { name: "sector", label: "Secteur d'activité" },
  ],
};

export default function SummitApplicationDialog({
  track,
  onClose,
}: {
  track: SummitTrack;
  onClose: () => void;
}) {
  const submit = useServerFn(submitSummitApplication);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "saved">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const copy = trackCopy[track];
  const fields: FieldConfig[] = [
    ...commonFields,
    ...trackFields[track],
    {
      name: "description",
      label: copy.descriptionLabel,
      placeholder: copy.descriptionPlaceholder,
      type: "textarea",
      required: true,
      full: true,
    },
    {
      name: "message",
      label: "Message complémentaire (facultatif)",
      type: "textarea",
      full: true,
    },
  ];

  const setField = (name: FieldName, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setServerError(null);

    const parsed = summitApplicationSchema.safeParse({ track, ...form });
    if (!parsed.success) {
      const nextErrors: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName;
        if (key && !nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");
    try {
      const result = await submit({ data: parsed.data });
      setStatus(result.notified ? "sent" : "saved");
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setServerError(
        "L'envoi a échoué. Merci de réessayer ou de nous écrire à contact@ukamili.africa.",
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-gray-900/60 p-4 backdrop-blur-sm sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={copy.title}
        className="relative my-8 w-full max-w-2xl rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer le formulaire"
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "sent" || status === "saved" ? (
          <div className="px-8 py-14 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
              <CheckCircle2 className="h-8 w-8 text-primary-500" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              {status === "sent" ? "Candidature envoyée" : "Candidature enregistrée"}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-gray-600">
              {status === "sent"
                ? `Merci ${form.contactName.split(" ")[0]} ! Votre dossier a été transmis à l'équipe UKAMILI. Nous revenons vers vous à l'adresse ${form.email}.`
                : `Merci ${form.contactName.split(" ")[0]} ! Votre dossier est bien sauvegardé. La notification email n'est pas encore active, mais aucune information n'est perdue.`}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-600"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-h-[85vh] overflow-y-auto px-6 py-8 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">
              {trackLabels[track]}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">{copy.title}</h3>
            <p className="mt-2 text-gray-600">{copy.intro}</p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className={field.full ? "sm:col-span-2" : undefined}>
                  <label
                    htmlFor={`summit-${field.name}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                    {field.required && <span className="ml-1 text-primary-500">*</span>}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={`summit-${field.name}`}
                      value={form[field.name]}
                      onChange={(event) => setField(field.name, event.target.value)}
                      rows={4}
                      maxLength={2000}
                      placeholder={field.placeholder}
                      className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={`summit-${field.name}`}
                      value={form[field.name]}
                      onChange={(event) => setField(field.name, event.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    >
                      <option value="">Sélectionnez…</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={`summit-${field.name}`}
                      type={field.type ?? "text"}
                      value={form[field.name]}
                      onChange={(event) => setField(field.name, event.target.value)}
                      placeholder={field.placeholder}
                      maxLength={255}
                      className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    />
                  )}

                  {errors[field.name] && (
                    <p className="mt-1.5 text-sm text-red-600">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>

            {serverError && (
              <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {serverError}
              </p>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-gray-500">
                Les informations transmises sont utilisées uniquement dans le cadre du Summit 2026.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {status === "sending" ? "Envoi en cours…" : "Envoyer ma candidature"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
