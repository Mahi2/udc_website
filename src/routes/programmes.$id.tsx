import { createFileRoute } from "@tanstack/react-router";
import ProgrammeDetails from "../views/ProgrammeDetails";

export const Route = createFileRoute("/programmes/$id")({
  head: () => ({
    meta: [
      { title: "Détails du programme — UKAMILI DIGITAL CITY" },
      {
        name: "description",
        content:
          "Objectifs, contenu et modalités de participation au programme proposé par UKAMILI DIGITAL CITY.",
      },
      { property: "og:title", content: "Détails du programme — UKAMILI DIGITAL CITY" },
      {
        property: "og:description",
        content: "Objectifs, contenu et modalités de participation au programme.",
      },
    ],
  }),
  component: ProgrammeDetails,
});
