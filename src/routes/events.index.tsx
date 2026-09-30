import { createFileRoute } from "@tanstack/react-router";
import EventsList from "../views/EventsList";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — Les événements d'UKAMILI DIGITAL CITY" },
      {
        name: "description",
        content:
          "Sommets, ateliers et rencontres d'affaires organisés par UKAMILI DIGITAL CITY, dont le Ukamili Digital Summit 2026 à Lubumbashi.",
      },
      { property: "og:title", content: "Events — Les événements d'UKAMILI DIGITAL CITY" },
      {
        property: "og:description",
        content:
          "Sommets, ateliers et rencontres d'affaires d'UKAMILI DIGITAL CITY au Grand Katanga.",
      },
    ],
  }),
  component: EventsList,
});
