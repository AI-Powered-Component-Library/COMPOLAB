import mongoose from "mongoose";
import { MONGO_URI } from "./env.config.js";

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/compolab");

        console.log("✅ Database connected successfully");
    } catch (err) {
        console.error("❌ Mongo Error:", err.message);
        process.exit(1);
    }
}

export default connectDB;