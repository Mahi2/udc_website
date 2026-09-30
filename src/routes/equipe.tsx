import { createFileRoute } from "@tanstack/react-router";
import Equipe from "../views/Equipe";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Notre Équipe — UKAMILI DIGITAL CITY" },
      {
        name: "description",
        content:
          "Rencontrez l'équipe qui pilote UKAMILI DIGITAL CITY et accompagne les entrepreneurs du Grand Katanga.",
      },
      { property: "og:title", content: "Notre Équipe — UKAMILI DIGITAL CITY" },
      {
        property: "og:description",
        content: "L'équipe qui pilote UKAMILI DIGITAL CITY au Grand Katanga.",
      },
    ],
  }),
  component: Equipe,
});
