import { Router } from "express";
import ComponentController from "../controllers/component.controller.js";
import ComponentService from "../services/component.service.js";
import MongoComponentRepository from "../repository/implement/mongo.component.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

const componentRepository = new MongoComponentRepository();
const componentService = new ComponentService(componentRepository);
const componentController = new ComponentController(componentService);

router.use(authMiddleware.protect);

router
  .route("/")
  .post(asyncHandler(componentController.createComponent))
  .get(asyncHandler(componentController.getComponents));

router
  .route("/:id")
  .get(asyncHandler(componentController.getComponentById))
  .patch(asyncHandler(componentController.updateComponent))
  .delete(asyncHandler(componentController.softDeleteComponent));

export default router;
