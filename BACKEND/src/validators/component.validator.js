import Joi from "joi";

class ComponentValidator {
  // ── CREATE — required fields ───────────────────────────────────────────────
  createSchema = Joi.object({

    componentName: Joi.string().min(2).max(100).trim().required().messages({
      "string.empty": "Component name is required",
      "string.min": "Component name must be at least 2 characters",
      "string.max": "Component name cannot exceed 100 characters",
    }),

    code: Joi.string().required().messages({ "string.empty": "Code is required." }),

    theme: Joi.string()
      .valid("light", "dark", "system")
      .default("light")
      .messages({ "any.only": "Theme must be one of: light, dark, system" }),

    tags: Joi.array()
      .items(Joi.string().trim().max(30))
      .max(10)
      .default([])
      .messages({
        "array.max": "Cannot have more than 10 tags",
        "string.max": "Each tag cannot exceed 30 characters",
      }),

    isPublic: Joi.boolean().default(true),
  });

  saveAiCode = Joi.object({

    prompt: Joi.string().min(5).max(2000).trim().required().messages({
      "string.empty": "Prompt is required",
      "string.min": "Prompt must be at least 5 characters",
      "string.max": "Prompt cannot exceed 2000 characters",
    }),

    componentName: Joi.string().min(2).max(100).trim().required().messages({
      "string.empty": "Component name is required",
      "string.min": "Component name must be at least 2 characters",
      "string.max": "Component name cannot exceed 100 characters",
    }),

    generatedCode: Joi.string().allow(null, ""),


  })

  // ── UPDATE (PATCH) — all fields optional, at least one required ────────────
  updateSchema = Joi.object({
    prompt: Joi.string().min(5).max(2000).trim().messages({
      "string.min": "Prompt must be at least 5 characters",
      "string.max": "Prompt cannot exceed 2000 characters",
    }),

    componentName: Joi.string().min(2).max(100).trim().messages({
      "string.min": "Component name must be at least 2 characters",
      "string.max": "Component name cannot exceed 100 characters",
    }),

    generatedCode: Joi.string().allow(null, ""),

    theme: Joi.string()
      .valid("light", "dark", "system")
      .messages({ "any.only": "Theme must be one of: light, dark, system" }),

    tags: Joi.array().items(Joi.string().trim().max(30)).max(10).messages({
      "array.max": "Cannot have more than 10 tags",
      "string.max": "Each tag cannot exceed 30 characters",
    }),

    isPublic: Joi.boolean(),
  }).min(1); // at least one field must be sent

  // ── Methods ────────────────────────────────────────────────────────────────
  validateCreate(payload) {
    return this.createSchema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });
  }

  validateUpdate(payload) {
    return this.updateSchema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });
  }
}

export default new ComponentValidator();
