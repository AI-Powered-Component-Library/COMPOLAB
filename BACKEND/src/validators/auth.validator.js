import Joi from "joi";

class AuthValidator {
  registerSchema = Joi.object({
    fullName: Joi.string().min(3).max(50).trim().required().messages({
      "string.empty": "fullName is required",
      "string.min": "fullName must be at least 3 characters",
      "string.max": "fullName cannot exceed 50 characters",
    }),

    email: Joi.string().email().trim().lowercase().required().messages({
      "string.email": "Invalid email format",
      "string.empty": "Email is required",
    }),

    password: Joi.string().min(6).max(20).required().messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password cannot exceed 20 characters",
      "string.empty": "Password is required",
    }),
  });

  loginSchema = Joi.object({
    email: Joi.string().email().trim().lowercase().required().messages({
      "string.email": "Invalid email format",
      "string.empty": "Email is required",
    }),

    password: Joi.string().required().messages({
      "string.empty": "Password is required",
    }),
  });

  validateRegister(payload) {
    return this.registerSchema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });
  }

  validateLogin(payload) {
    return this.loginSchema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });
  }
}

export default new AuthValidator();
