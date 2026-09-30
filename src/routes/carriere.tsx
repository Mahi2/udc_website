import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/carriere")({
  beforeLoad: () => {
    throw redirect({ to: "/engagement", replace: true });
  },
});
