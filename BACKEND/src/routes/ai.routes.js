import express from "express";

import { streamComponentController } from "../controllers/ai.controller.js";
const router = express.Router();

router.post("/",(streamComponentController));

export default router;