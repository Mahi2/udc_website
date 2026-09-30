import summitCover from "../assets/summit-2026-cover.jpg";

export interface UkamiliEvent {
  slug: string;
  title: string;
  subtitle: string;
  status: "upcoming" | "past";
  category: string;
  dateLabel: string;
  periodLabel: string;
  location: string;
  audience: string;
  excerpt: string;
  image: string;
  hasDetailPage: boolean;
}

export const events: UkamiliEvent[] = [
  {
    slug: "ukamili-digital-summit",
    title: "UKAMILI DIGITAL SUMMIT 2026",
    subtitle:
      "Le rendez-vous des acteurs du digital, de l'innovation et de la croissance dans le Haut-Katanga.",
    status: "upcoming",
    category: "Sommet",
    dateLabel: "Octobre 2026",
    periodLabel: "Parcours : octobre 2026 – mai 2027",
    location: "Lubumbashi, Haut-Katanga (RDC)",
    audience: "Startups, PME numériques, grandes entreprises, institutions et partenaires",
    excerpt:
      "Phase 1 du Parcours Digital de Mise en Conformité et d'Accès au Marché : mobilisation de l'écosystème, identification des solutions locales, diagnostic initial et dialogue direct avec les donneurs d'ordre.",
    image: summitCover,
    hasDetailPage: true,
  },
];

export const getEventBySlug = (slug: string) => events.find((event) => event.slug === slug);
