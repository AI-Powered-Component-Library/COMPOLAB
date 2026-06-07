import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
    index: true,
  },

  prompt: {
    type: String,
    required: [true, "Prompt is required"],
    trim: true,
    minlength: [5, "Prompt must be at least 5 characters"],
    maxlength: [2000, "Prompt cannot exceed 2000 characters"],
  },

  componentName: {
    type: String,
    required: [true, "Component name is required"],
    trim: true,
    minlength: [2, "Component name must be at least 2 characters"],
    maxlength: [100, "Component name cannot exceed 100 characters"],
  },

  generatedCode: {
    type: String,
    default: null,
  },

  theme: {
    type: String,
    enum: ["light", "dark", "system"],
    default: "light",
  },

  framework: {
    type: String,
    enum: ["react", "vue", "angular", "svelte", "html"],
    default: "react",
  },

  cssLibrary: {
    type: String,
    enum: ["tailwind", "css", "scss", "styled-components", "material-ui"],
    default: "tailwind",
  },
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: (tags) => tags.length <= 10,
      message: "Cannot have more than 10 tags",
    },
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });


const ComponentModel = mongoose.model("Component", componentSchema);

export default ComponentModel;



// // S3 storage fields (metadata-only approach from project.md)
// s3Key: {
//   type: String,
//   default: null,
//   trim: true,
// },

// fileUrl: {
//   type: String,
//   default: null,
//   trim: true,
// },

// version: {
//   type: Number,
//   default: 1,
//   min: [1, "Version must be at least 1"],
// },

// status: {
//   type: String,
//   enum: ["draft", "generated", "saved", "published", "archived"],
//   default: "draft",
// },

// // AI generation metadata — useful for tracking costs, debugging, and analytics
// generationMeta: {
//   model: {
//     type: String,
//     default: null,
//   },
//   tokensUsed: {
//     type: Number,
//     default: null,
//   },
//   generationTimeMs: {
//     type: Number,
//     default: null,
//   },
// },