import { createFileRoute, redirect } from "@tanstack/react-router";

// Ancienne page « Agenda » fusionnée dans /events : redirection permanente.
export const Route = createFileRoute("/evenements")({
  beforeLoad: () => {
    throw redirect({ to: "/events", statusCode: 301 });
  },
});
