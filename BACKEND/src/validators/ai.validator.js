import { z } from "zod";

export const aiPromptSchema = z.object({
  prompt: z
    .string()
    .min(5, "Prompt must be at least 5 characters")
    .max(500, "Prompt too long"),
  // componentType: z.enum(["ui", "logic", "full-stack"]),
  // framework: z.enum(["react", "vue", "angular", "svelte"]),
  // language: z.enum(["javascript", "typescript"]),
});
