import { createFileRoute } from "@tanstack/react-router";
import Ecosystem from "../views/Ecosystem";

export const Route = createFileRoute("/ecosysteme")({
  head: () => ({
    meta: [
      { title: "Notre Écosystème — UKAMILI DIGITAL CITY" },
      {
        name: "description",
        content:
          "Startups, partenaires, institutions et talents : découvrez l'écosystème numérique animé par UKAMILI DIGITAL CITY.",
      },
      { property: "og:title", content: "Notre Écosystème — UKAMILI DIGITAL CITY" },
      {
        property: "og:description",
        content: "Startups, partenaires, institutions et talents de l'écosystème UKAMILI.",
      },
    ],
  }),
  component: Ecosystem,
});
