import express from "express";
import { handleMessage } from "../controllers/ai.controller.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const router = express.Router();

router.post("/ai", asyncHandler(handleMessage));

export default router;
