import Joi from "joi";

export const createComponentValidationSchema = Joi.object({
  userId: Joi.string()
    .required()
    .messages({
      "string.empty": "User ID is required",
    }),

  prompt: Joi.string()
    .min(5)
    .required()
    .messages({
      "string.min": "Prompt must be at least 5 characters",
      "string.empty": "Prompt is required",
    }),

  generatedCode: Joi.string()
    .required()
    .messages({
      "string.empty": "Generated code is required",
    }),

  componentName: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.min": "Component name must be at least 2 characters",
      "string.max": "Component name cannot exceed 100 characters",
      "string.empty": "Component name is required",
    }),

  theme: Joi.string()
    .valid("light", "dark", "custom")
    .required()
    .messages({
      "any.only": "Theme must be light, dark, or custom",
    }),
});

export const updateComponentValidationSchema = Joi.object({
  prompt: Joi.string().min(5).messages({
    "string.min": "Prompt must be at least 5 characters",
  }),
  generatedCode: Joi.string(),
  componentName: Joi.string().min(2).max(100).messages({
    "string.min": "Component name must be at least 2 characters",
    "string.max": "Component name cannot exceed 100 characters",
  }),
  theme: Joi.string().valid("light", "dark", "custom").messages({
    "any.only": "Theme must be light, dark, or custom",
  }),
});
