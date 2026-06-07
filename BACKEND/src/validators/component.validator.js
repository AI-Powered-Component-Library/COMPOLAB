import Joi from "joi";

class ComponentValidator {

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
    generatedCode: Joi.string().allow(null, ""),

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


  validateCreate(payload) {
    return this.createSchema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });
  }

}

export default new ComponentValidator();
