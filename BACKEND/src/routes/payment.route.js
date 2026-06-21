import { Router } from "express";
import paymentController from "../controllers/payment.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/create-payment", paymentController.createOrder)
router.post("/verify", paymentController.verifyPayment)

export default router;