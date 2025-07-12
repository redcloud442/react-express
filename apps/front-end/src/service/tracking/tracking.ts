export const trackPageVisit = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tracking`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to track page visit");
  }

  return response.json();
};
