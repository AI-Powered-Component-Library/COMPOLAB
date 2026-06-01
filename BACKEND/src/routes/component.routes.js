import { Router } from "express";
import componentController from "../controllers/component.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();


router.post("/", componentController.createComponent);


router.get("/", componentController.getAllComponents);


router.get("/:id", componentController.getComponentById);


router.put("/:id", componentController.updateComponent);

router.delete("/:id", componentController.deleteComponent);



export default router;