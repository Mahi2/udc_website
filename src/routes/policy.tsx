import { createFileRoute } from "@tanstack/react-router";
import Policy from "../views/policy";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Politique de Confidentialité — UKAMILI DIGITAL CITY" },
      {
        name: "description",
        content:
          "Comment UKAMILI DIGITAL CITY collecte, utilise et protège les données personnelles des utilisateurs.",
      },
      { property: "og:title", content: "Politique de Confidentialité — UKAMILI DIGITAL CITY" },
      {
        property: "og:description",
        content: "Collecte, utilisation et protection des données personnelles.",
      },
    ],
  }),
  component: Policy,
});
