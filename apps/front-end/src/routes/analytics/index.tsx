import AnalyticsPage from "@/components/AnalyticsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/analytics/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AnalyticsPage />;
}
