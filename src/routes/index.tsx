import { createFileRoute } from "@tanstack/react-router";
import Home from "../views/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UKAMILI DIGITAL CITY — L'écosystème numérique du Grand Katanga" },
      {
        name: "description",
        content:
          "Incubation, formation, innovation et accès au marché : UKAMILI DIGITAL CITY accompagne les startups et talents numériques du Grand Katanga.",
      },
      {
        property: "og:title",
        content: "UKAMILI DIGITAL CITY — L'écosystème numérique du Grand Katanga",
      },
      {
        property: "og:description",
        content:
          "Incubation, formation, innovation et accès au marché pour les startups et talents numériques du Grand Katanga.",
      },
    ],
  }),
  component: Home,
});
