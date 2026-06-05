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

router.use(authMiddleware);

export default router;
