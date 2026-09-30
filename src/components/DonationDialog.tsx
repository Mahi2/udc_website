import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Building2, CheckCircle2, HeartHandshake, Loader2, Smartphone, X } from "lucide-react";

import { createDonation, type DonationResult } from "../lib/donations.functions";
import {
  donationCurrencies,
  donationPresets,
  donationSchema,
  formatAmount,
  mobileMoneyOperators,
  type DonationCurrency,
  type DonationMethod,
} from "../lib/donation-schema";

type FormState = {
  amount: string;
  currency: DonationCurrency;
  method: DonationMethod;
  operator: string;
  phone: string;
  donorName: string;
  donorEmail: string;
  message: string;
  isAnonymous: boolean;
};

const initialForm: FormState = {
  amount: "",
  currency: "USD",
  method: "mobile_money",
  operator: "",
  phone: "",
  donorName: "",
  donorEmail: "",
  message: "",
  isAnonymous: false,
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100";

export default function DonationDialog({ onClose }: { onClose: () => void }) {
  const submit = useServerFn(createDonation);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [result, setResult] = useState<DonationResult | null>(null);
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

  const setField = <K extends keyof FormState>(name: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setServerError(null);

    const parsed = donationSchema.safeParse({
      ...form,
      amount: form.amount.replace(",", "."),
    });

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus("sending");
    try {
      const response = await submit({ data: parsed.data });
      setResult(response);
      setStatus("done");
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setServerError(
        "L'enregistrement du don a échoué. Merci de réessayer ou de nous écrire à contact@ukamili.africa.",
      );
    }
  };

  const presets = donationPresets[form.currency];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-gray-900/60 p-4 backdrop-blur-sm sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Faire un don au Ukamili Digital Summit 2026"
        className="relative my-8 w-full max-w-xl rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "done" ? (
          <div className="px-8 py-14 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
              <CheckCircle2 className="h-8 w-8 text-primary-500" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900">Promesse de don enregistrée</h3>
            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Merci pour votre générosité ! Finalisez votre don par mobile money ou virement
              bancaire : l'équipe UKAMILI vous contactera avec les instructions de paiement et
              confirmera la réception de votre don.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Référence à mentionner :{" "}
              <span className="font-semibold text-gray-700">{result?.reference}</span>
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
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary-50 p-3">
                <HeartHandshake className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Faire un don</h3>
                <p className="text-sm text-gray-500">Ukamili Digital Summit 2026</p>
              </div>
            </div>

            {/* Devise */}
            <div className="mt-8">
              <span className="block text-sm font-medium text-gray-700">Devise</span>
              <div className="mt-2 inline-flex rounded-lg border border-gray-200 p-1">
                {donationCurrencies.map((currency) => (
                  <button
                    key={currency}
                    type="button"
                    onClick={() => setField("currency", currency)}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      form.currency === currency
                        ? "bg-primary-500 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            </div>

            {/* Montant */}
            <div className="mt-6">
              <label htmlFor="donation-amount" className="block text-sm font-medium text-gray-700">
                Montant du don <span className="text-primary-500">*</span>
              </label>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {presets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setField("amount", String(preset))}
                    className={`rounded-lg border px-3 py-3 text-center text-sm font-semibold transition-colors ${
                      form.amount === String(preset)
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-gray-200 text-gray-700 hover:border-primary-300"
                    }`}
                  >
                    {formatAmount(preset, form.currency)}
                  </button>
                ))}
              </div>
              <input
                id="donation-amount"
                inputMode="decimal"
                value={form.amount}
                onChange={(event) => setField("amount", event.target.value)}
                placeholder={`Autre montant en ${form.currency}`}
                className={inputClass}
              />
              {errors.amount && <p className="mt-1.5 text-sm text-red-600">{errors.amount}</p>}
            </div>

            {/* Mode de paiement */}
            <div className="mt-6">
              <span className="block text-sm font-medium text-gray-700">Mode de paiement</span>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setField("method", "mobile_money")}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors ${
                    form.method === "mobile_money"
                      ? "border-primary-500 bg-primary-50"
                      : "border-gray-200 hover:border-primary-300"
                  }`}
                >
                  <Smartphone className="h-5 w-5 text-primary-500" />
                  <span>
                    <span className="block text-sm font-semibold text-gray-900">Mobile money</span>
                    <span className="block text-xs text-gray-500">Airtel, Orange, M-Pesa…</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setField("method", "bank_transfer")}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors ${
                    form.method === "bank_transfer"
                      ? "border-primary-500 bg-primary-50"
                      : "border-gray-200 hover:border-primary-300"
                  }`}
                >
                  <Building2 className="h-5 w-5 text-primary-500" />
                  <span>
                    <span className="block text-sm font-semibold text-gray-900">
                      Virement bancaire
                    </span>
                    <span className="block text-xs text-gray-500">Banque locale ou internationale</span>
                  </span>
                </button>
              </div>
            </div>

            {form.method === "mobile_money" ? (
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="donation-operator"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Opérateur <span className="text-primary-500">*</span>
                  </label>
                  <select
                    id="donation-operator"
                    value={form.operator}
                    onChange={(event) => setField("operator", event.target.value)}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Sélectionnez…</option>
                    {mobileMoneyOperators.map((operator) => (
                      <option key={operator.value} value={operator.value}>
                        {operator.label}
                      </option>
                    ))}
                  </select>
                  {errors.operator && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.operator}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="donation-phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Numéro mobile money <span className="text-primary-500">*</span>
                  </label>
                  <input
                    id="donation-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) => setField("phone", event.target.value)}
                    placeholder="+243 99 000 0000"
                    className={inputClass}
                  />
                  {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>
            ) : (
              <p className="mt-6 rounded-lg bg-secondary-50 px-4 py-3 text-sm text-gray-600">
                Après validation, vous recevrez les coordonnées bancaires d'UKAMILI pour effectuer
                le virement. Mentionnez la référence de votre don dans la communication.
              </p>
            )}

            {/* Donateur */}
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="donation-name" className="block text-sm font-medium text-gray-700">
                  Nom du donateur
                </label>
                <input
                  id="donation-name"
                  value={form.donorName}
                  onChange={(event) => setField("donorName", event.target.value)}
                  maxLength={120}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="donation-email" className="block text-sm font-medium text-gray-700">
                  Email (pour le reçu)
                </label>
                <input
                  id="donation-email"
                  type="email"
                  value={form.donorEmail}
                  onChange={(event) => setField("donorEmail", event.target.value)}
                  maxLength={255}
                  className={inputClass}
                />
                {errors.donorEmail && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.donorEmail}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="donation-message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message (facultatif)
                </label>
                <textarea
                  id="donation-message"
                  rows={3}
                  maxLength={1000}
                  value={form.message}
                  onChange={(event) => setField("message", event.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={form.isAnonymous}
                onChange={(event) => setField("isAnonymous", event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
              />
              Je souhaite que mon don reste anonyme.
            </label>

            {serverError && (
              <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {serverError}
              </p>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-gray-500">
                L'équipe UKAMILI vous contactera pour finaliser le paiement.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {status === "sending" ? "Envoi…" : "Confirmer ma promesse de don"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
