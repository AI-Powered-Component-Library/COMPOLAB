import { Router } from "express";
import {
  createComponent,
  getComponentById,
  getComponentsByUserId,
  getAllComponents,
  updateComponent,
  deleteComponent
} from "../controllers/component.controller.js";

const router = Router();

router.post("/", createComponent);
router.get("/", getAllComponents);
router.get("/:id", getComponentById);
router.get("/user/:userId", getComponentsByUserId);
router.put("/:id", updateComponent);
router.delete("/:id", deleteComponent);

export default router;
