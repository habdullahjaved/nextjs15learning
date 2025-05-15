import { z } from "zod";

export const titleSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
});

export type TitleFormData = z.infer<typeof titleSchema>;
