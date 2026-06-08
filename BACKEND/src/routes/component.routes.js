import express from "express";
import ComponentController from "../controllers/component.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// ── Instantiate controller (class → instance) ─────────────────────────────
const ctrl = new ComponentController();

// ── All component routes require a valid JWT ──────────────────────────────
router.post("/", authMiddleware.protect, (req, res, next) =>
  ctrl.create(req, res, next),
);
router.get("/", authMiddleware.protect, (req, res, next) =>
  ctrl.getAll(req, res, next),
);
router.get("/:id", authMiddleware.protect, (req, res, next) =>
  ctrl.getOne(req, res, next),
);
router.put("/:id", authMiddleware.protect, (req, res, next) =>
  ctrl.update(req, res, next),
);
router.delete("/:id", authMiddleware.protect, (req, res, next) =>
  ctrl.delete(req, res, next),
);

export default router;
