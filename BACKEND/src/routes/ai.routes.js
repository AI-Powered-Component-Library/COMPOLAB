import express from "express";
import { generateAIComponent } from "../controllers/ai.controller.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const router = express.Router();

router.post("/ai", asyncHandler(generateAIComponent));

export default router;
