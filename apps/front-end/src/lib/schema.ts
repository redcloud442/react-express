import { z } from "zod";

export const CreateFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  email: z.email({ message: "Invalid email" }).trim(),
  phone: z.string().max(10, { message: "Phone is required" }).optional(),
  utmData: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional(),
  }),
});

export type CreateFormType = z.infer<typeof CreateFormSchema>;
