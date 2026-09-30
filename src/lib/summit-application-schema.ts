import { z } from "zod";

export const summitTracks = ["startup", "enterprise", "sponsor"] as const;
export type SummitTrack = (typeof summitTracks)[number];

const text = (max: number) => z.string().trim().max(max);

export const summitApplicationSchema = z.object({
  track: z.enum(summitTracks),
  organization: text(160).min(2, { message: "Indiquez le nom de votre organisation" }),
  contactName: text(120).min(2, { message: "Indiquez le nom du contact" }),
  contactRole: text(120).optional().or(z.literal("")),
  email: text(255).email({ message: "Adresse email invalide" }),
  phone: text(40).min(6, { message: "Indiquez un numéro de téléphone joignable" }),
  website: text(200).optional().or(z.literal("")),
  city: text(120).min(2, { message: "Indiquez votre ville et pays" }),
  sector: text(120).optional().or(z.literal("")),
  teamSize: text(60).optional().or(z.literal("")),
  supportType: text(120).optional().or(z.literal("")),
  description: text(2000).min(20, { message: "Décrivez votre projet en quelques lignes (20 caractères minimum)" }),
  message: text(2000).optional().or(z.literal("")),
});

export type SummitApplicationInput = z.infer<typeof summitApplicationSchema>;

export const trackLabels: Record<SummitTrack, string> = {
  startup: "Startups & PME numériques",
  enterprise: "Entreprises & institutions",
  sponsor: "Sponsors & partenaires",
};
