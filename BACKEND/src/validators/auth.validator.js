import Joi from "joi";

const userValidationSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .trim()
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters",
            "string.max": "Name cannot exceed 50 characters",
        }),

    email: Joi.string()
        .email()
        .trim()
        .lowercase()
        .required()
        .messages({
            "string.email": "Invalid email format",
            "string.empty": "Email is required",
        }),

    password: Joi.string()
        .min(6)
        .max(20)
        .required()
        .messages({
            "string.min": "Password must be at least 6 characters",
            "string.max": "Password cannot exceed 20 characters",
            "string.empty": "Password is required",
        }),
});

export default userValidationSchema;

