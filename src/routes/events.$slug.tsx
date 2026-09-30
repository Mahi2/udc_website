import { createFileRoute, notFound } from "@tanstack/react-router";
import UkamiliDigitalSummit from "../views/UkamiliDigitalSummit";
import { getEventBySlug } from "../data/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEventBySlug(params.slug);
    if (!event || !event.hasDetailPage) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Événement introuvable — UKAMILI DIGITAL CITY" }],
      };
    }
    const { event } = loaderData;
    const description = event.excerpt;
    return {
      meta: [
        { title: `${event.title} — UKAMILI DIGITAL CITY` },
        { name: "description", content: description },
        { property: "og:title", content: `${event.title} — UKAMILI DIGITAL CITY` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData();

  if (event.slug === "ukamili-digital-summit") {
    return <UkamiliDigitalSummit />;
  }

  return null;
}
