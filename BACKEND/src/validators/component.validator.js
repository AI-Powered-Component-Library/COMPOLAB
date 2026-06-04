import Joi from "joi";

class ComponentValidator {
  static createComponentSchema = Joi.object({
    prompt: Joi.string().trim().min(5).required().messages({
      "string.min": "Prompt must be at least 5 characters",
      "string.empty": "Prompt is required",
      "any.required": "Prompt is required",
    }),

    generatedCode: Joi.string().required().messages({
      "string.empty": "Generated code is required",
      "any.required": "Generated code is required",
    }),

    componentName: Joi.string().trim().min(2).max(100).required().messages({
      "string.min": "Component name must be at least 2 characters",
      "string.max": "Component name cannot exceed 100 characters",
      "string.empty": "Component name is required",
      "any.required": "Component name is required",
    }),

    theme: Joi.string().valid("light", "dark", "custom").default("light").messages({
      "any.only": "Theme must be light, dark, or custom",
    }),
  });

  static updateComponentSchema = Joi.object({
    prompt: Joi.string().trim().min(5).optional().messages({
      "string.min": "Prompt must be at least 5 characters",
    }),

    generatedCode: Joi.string().optional(),

    componentName: Joi.string().trim().min(2).max(100).optional().messages({
      "string.min": "Component name must be at least 2 characters",
      "string.max": "Component name cannot exceed 100 characters",
    }),

    theme: Joi.string().valid("light", "dark", "custom").optional().messages({
      "any.only": "Theme must be light, dark, or custom",
    }),
  }).min(1).messages({
    "object.min": "At least one field is required to update component",
  });

  static queryComponentSchema = Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    search: Joi.string().trim().allow("").optional(),
    theme: Joi.string().valid("light", "dark", "custom").optional(),
  });

  static validateCreate(payload) {
    return this.createComponentSchema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });
  }

  static validateUpdate(payload) {
    return this.updateComponentSchema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });
  }

  static validateQuery(query) {
    return this.queryComponentSchema.validate(query, {
      abortEarly: false,
      stripUnknown: true,
    });
  }
}

export default ComponentValidator;
