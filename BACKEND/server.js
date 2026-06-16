import express from "express";
import connectDB from "./src/configs/db.config.js";
import app from "./src/app.js";
import { PORT } from "./src/configs/env.config.js"

connectDB()

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

