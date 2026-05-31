import mongoose from "mongoose";

const componentMetadataSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User ID is required"],
        },

        prompt: {
            type: String,
            required: [true, "Prompt is required"],
            trim: true,
            minlength: [5, "Prompt must be at least 5 characters"],
        },

        componentName: {
            type: String,
            required: [true, "Component name is required"],
            trim: true,
            minlength: [2, "Component name must be at least 2 characters"],
            maxlength: [100, "Component name cannot exceed 100 characters"],
        },

        s3Key: {
            type: String,
            required: [true, "S3 key is required"],
            trim: true,
        },

        fileUrl: {
            type: String,
            required: [true, "File URL is required"],
            trim: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        versionKey: false,
    }
);

const ComponentMetadataModel = mongoose.model(
    "ComponentMetadata",
    componentMetadataSchema
);

export default ComponentMetadataModel;

