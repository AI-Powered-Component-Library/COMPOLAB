import Joi from "joi";

class ComponentValidator {
  // Schema for creating a new component (user sends a prompt to generate)
  createSchema = Joi.object({
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

    theme: Joi.string()
      .valid("light", "dark", "system")
      .default("light")
      .messages({
        "any.only": "Theme must be one of: light, dark, system",
      }),

    framework: Joi.string()
      .valid("react", "vue", "angular", "svelte", "html")
      .default("react")
      .messages({
        "any.only":
          "Framework must be one of: react, vue, angular, svelte, html",
      }),

    cssLibrary: Joi.string()
      .valid("tailwind", "css", "scss", "styled-components", "material-ui")
      .default("tailwind")
      .messages({
        "any.only":
          "CSS library must be one of: tailwind, css, scss, styled-components, material-ui",
      }),

    tags: Joi.array()
      .items(Joi.string().trim().max(30))
      .max(10)
      .default([])
      .messages({
        "array.max": "Cannot have more than 10 tags",
        "string.max": "Each tag cannot exceed 30 characters",
      }),

    isPublic: Joi.boolean().default(false),
  });

  // Schema for updating an existing component
  updateSchema = Joi.object({
    componentName: Joi.string().min(2).max(100).trim().messages({
      "string.min": "Component name must be at least 2 characters",
      "string.max": "Component name cannot exceed 100 characters",
    }),

    prompt: Joi.string().min(5).max(2000).trim().messages({
      "string.min": "Prompt must be at least 5 characters",
      "string.max": "Prompt cannot exceed 2000 characters",
    }),

    generatedCode: Joi.string().allow(null, ""),

    theme: Joi.string().valid("light", "dark", "system").messages({
      "any.only": "Theme must be one of: light, dark, system",
    }),

    framework: Joi.string()
      .valid("react", "vue", "angular", "svelte", "html")
      .messages({
        "any.only":
          "Framework must be one of: react, vue, angular, svelte, html",
      }),

    cssLibrary: Joi.string()
      .valid("tailwind", "css", "scss", "styled-components", "material-ui")
      .messages({
        "any.only":
          "CSS library must be one of: tailwind, css, scss, styled-components, material-ui",
      }),

    tags: Joi.array()
      .items(Joi.string().trim().max(30))
      .max(10)
      .messages({
        "array.max": "Cannot have more than 10 tags",
        "string.max": "Each tag cannot exceed 30 characters",
      }),

    status: Joi.string()
      .valid("draft", "generated", "saved", "published", "archived")
      .messages({
        "any.only":
          "Status must be one of: draft, generated, saved, published, archived",
      }),

    isPublic: Joi.boolean(),
  }).min(1).messages({
    "object.min": "At least one field is required for update",
  });

  // Schema for validating component ID params
  idParamSchema = Joi.object({
    id: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        "string.pattern.base": "Invalid component ID format",
        "string.empty": "Component ID is required",
      }),
  });

  // Schema for query filters (GET /components with filters)
  querySchema = Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(50).default(10),
    status: Joi.string().valid(
      "draft",
      "generated",
      "saved",
      "published",
      "archived"
    ),
    framework: Joi.string().valid(
      "react",
      "vue",
      "angular",
      "svelte",
      "html"
    ),
    theme: Joi.string().valid("light", "dark", "system"),
    search: Joi.string().trim().max(200),
    sortBy: Joi.string()
      .valid("createdAt", "updatedAt", "componentName")
      .default("createdAt"),
    order: Joi.string().valid("asc", "desc").default("desc"),
  });

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

  validateIdParam(params) {
    return this.idParamSchema.validate(params, {
      abortEarly: false,
      stripUnknown: true,
    });
  }

  validateQuery(query) {
    return this.querySchema.validate(query, {
      abortEarly: false,
      stripUnknown: true,
    });
  }
}

export default new ComponentValidator();
