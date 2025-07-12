import type { CreateFormType } from "@/lib/schema";

export const createForm = async (params: CreateFormType) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error("Failed to create form");
  }

  return response.json();
};
