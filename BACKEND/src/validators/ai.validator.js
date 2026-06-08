import joi from "joi";

export const aiPromptSchema = joi.object({
  prompt: joi
    .string()
    .min(5, "Prompt must be at least 5 characters")
    .max(500, "Prompt too long"),
  // componentType: joi.enum(["ui", "logic", "full-stack"]),
  // framework: joi.enum(["react", "vue", "angular", "svelte"]),
  // language: joi.enum(["javascript", "typescript"]),
});
