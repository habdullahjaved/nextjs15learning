import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(1, "Title is required"), // Title must be a non-empty string
});

// Type inference from Zod schema
export type TodoFormData = z.infer<typeof todoSchema>;
