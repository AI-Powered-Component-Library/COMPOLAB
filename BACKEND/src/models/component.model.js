import { Schema, model } from "mongoose";

const componentSchema = new Schema({

    name: String,
    code: String,
    props: [String],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    visibility: {
        type: String,
        enum: ["private", "public"],
        default: "private"
    },
    npmPackage: String

}, { timestamps: true })


export default model("Component", componentSchema)