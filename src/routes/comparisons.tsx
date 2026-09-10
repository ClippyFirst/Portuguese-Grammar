import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/comparisons")({
  component: () => <Outlet />,
});
