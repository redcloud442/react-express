import type { Analytics } from "@/lib/types";

export const getAnalytics = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/analytics`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to get analytics");
  }

  const { analytics } = await response.json();

  return analytics as Analytics;
};
