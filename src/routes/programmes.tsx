import { createFileRoute } from "@tanstack/react-router";
import Programmes from "../views/Programmes";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Nos Programmes — UKAMILI DIGITAL CITY" },
      {
        name: "description",
        content:
          "Découvrez les programmes d'incubation, de formation et d'accompagnement proposés par UKAMILI DIGITAL CITY.",
      },
      { property: "og:title", content: "Nos Programmes — UKAMILI DIGITAL CITY" },
      {
        property: "og:description",
        content: "Programmes d'incubation, de formation et d'accompagnement d'UKAMILI DIGITAL CITY.",
      },
    ],
  }),
  component: Programmes,
});
