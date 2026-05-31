import Joi from "joi";

const componentMetadataValidationSchema = Joi.object({
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

    componentName: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            "string.min": "Component name must be at least 2 characters",
            "string.max": "Component name cannot exceed 100 characters",
            "string.empty": "Component name is required",
        }),

    s3Key: Joi.string()
        .required()
        .messages({
            "string.empty": "S3 key is required",
        }),

    fileUrl: Joi.string()
        .uri()
        .required()
        .messages({
            "string.uri": "File URL must be a valid URL",
            "string.empty": "File URL is required",
        }),
});

export default componentMetadataValidationSchema;

