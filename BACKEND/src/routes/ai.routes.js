import express from "express";

import {
    streamComponentController,
    streamWebsiteController,
} from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/component", streamComponentController);

router.post("/website", streamWebsiteController);

export default router;