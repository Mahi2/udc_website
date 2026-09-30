import { createFileRoute } from "@tanstack/react-router";
import Contact from "../views/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — UKAMILI DIGITAL CITY" },
      {
        name: "description",
        content:
          "Contactez UKAMILI DIGITAL CITY à Lubumbashi : adresse, téléphone, email et formulaire de contact.",
      },
      { property: "og:title", content: "Contact — UKAMILI DIGITAL CITY" },
      {
        property: "og:description",
        content: "Adresse, téléphone, email et formulaire de contact d'UKAMILI DIGITAL CITY.",
      },
    ],
  }),
  component: Contact,
});
