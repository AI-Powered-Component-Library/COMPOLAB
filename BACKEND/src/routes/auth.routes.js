import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import AuthService from "../services/auth.service.js";
import MongoUserRepository from "../repository/implement/mongo.user.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

const userRepository = new MongoUserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

router.post("/register", authController.register);
router.post("/login", asyncHandler(authController.login));
router.post("/refresh-token", asyncHandler(authController.refreshToken));
router.get("/user", authMiddleware.protect, asyncHandler(authController.getUser));
router.post("/logout", authMiddleware.protect, asyncHandler(authController.logout));

export default router;
