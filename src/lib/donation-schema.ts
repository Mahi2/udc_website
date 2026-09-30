import { z } from "zod";

export const donationMethods = ["mobile_money", "bank_transfer"] as const;
export type DonationMethod = (typeof donationMethods)[number];

export const donationMethodLabels: Record<DonationMethod, string> = {
  mobile_money: "Mobile money",
  bank_transfer: "Virement bancaire",
};

export const donationCurrencies = ["USD", "CDF"] as const;
export type DonationCurrency = (typeof donationCurrencies)[number];

/** Opérateurs mobile money disponibles en RDC. */
export const mobileMoneyOperators = [
  { value: "airtel", label: "Airtel Money" },
  { value: "orange", label: "Orange Money" },
  { value: "mpesa", label: "M-Pesa (Vodacom)" },
  { value: "afrimoney", label: "Afrimoney (Africell)" },
] as const;

export const donationPresets: Record<DonationCurrency, number[]> = {
  USD: [25, 100, 500],
  CDF: [50000, 250000, 1000000],
};

export const minimumAmount: Record<DonationCurrency, number> = {
  USD: 1,
  CDF: 1000,
};

const text = (max: number) => z.string().trim().max(max);

export const donationSchema = z
  .object({
    amount: z.coerce
      .number({ message: "Indiquez un montant valide" })
      .positive({ message: "Le montant doit être supérieur à zéro" })
      .max(1_000_000_000, { message: "Montant trop élevé" }),
    currency: z.enum(donationCurrencies),
    method: z.enum(donationMethods),
    operator: text(40).optional().or(z.literal("")),
    phone: text(40).optional().or(z.literal("")),
    donorName: text(120).optional().or(z.literal("")),
    donorEmail: text(255).email({ message: "Adresse email invalide" }).optional().or(z.literal("")),
    message: text(1000).optional().or(z.literal("")),
    isAnonymous: z.boolean().default(false),
  })
  .superRefine((data, ctx) => {
    if (data.amount < minimumAmount[data.currency]) {
      ctx.addIssue({
        code: "custom",
        path: ["amount"],
        message: `Le don minimum est de ${minimumAmount[data.currency]} ${data.currency}`,
      });
    }
    if (data.method === "mobile_money") {
      if (!data.operator) {
        ctx.addIssue({ code: "custom", path: ["operator"], message: "Choisissez un opérateur" });
      }
      const digits = (data.phone ?? "").replace(/\D/g, "");
      if (digits.length < 9) {
        ctx.addIssue({
          code: "custom",
          path: ["phone"],
          message: "Indiquez le numéro mobile money (ex. +243 99 000 0000)",
        });
      }
    }
  });

export type DonationInput = z.infer<typeof donationSchema>;

export function formatAmount(amount: number, currency: DonationCurrency) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "CDF" ? 0 : 2,
  }).format(amount);
}
