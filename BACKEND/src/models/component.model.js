import mongoose from "mongoose";

const componentSchema = new mongoose.Schema(
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

        generatedCode: {
            type: String,
            required: [true, "Generated code is required"],
        },

        componentName: {
            type: String,
            required: [true, "Component name is required"],
            trim: true,
            minlength: [2, "Component name must be at least 2 characters"],
            maxlength: [100, "Component name cannot exceed 100 characters"],
        },

        theme: {
            type: String,
            enum: ["light", "dark", "custom"],
            default: "light",
        },
    },
    {
        timestamps: true,
    }
);

const ComponentModel = mongoose.model("Component", componentSchema);

export default ComponentModel;
