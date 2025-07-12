import { z } from "zod";

export const createFormSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string().min(1).optional(),
  utmData: z.object({
    source: z.string().min(1).optional(),
    medium: z.string().min(1).optional(),
    campaign: z.string().min(1).optional(),
  }),
});
