import { createFileRoute } from "@tanstack/react-router";
import Engagement from "../views/Engagement";

export const Route = createFileRoute("/engagement")({
  head: () => ({
    meta: [
      { title: "Nous Rejoindre — UKAMILI DIGITAL CITY" },
      {
        name: "description",
        content:
          "Rejoignez UKAMILI DIGITAL CITY comme membre, mentor, partenaire ou bénévole et contribuez au numérique congolais.",
      },
      { property: "og:title", content: "Nous Rejoindre — UKAMILI DIGITAL CITY" },
      {
        property: "og:description",
        content: "Devenez membre, mentor, partenaire ou bénévole d'UKAMILI DIGITAL CITY.",
      },
    ],
  }),
  component: Engagement,
});
