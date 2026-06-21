import paymentValidator from "../validator/payment.validator.js"
import paymentService from "../services/payment.service.js";
import { AppError, asyncHandler } from "../utils/error.utils.js"
import Razorpay from "razorpay";
import { validatePaymentVerification } from 'razorpay/dist/utils/razorpay-utils.js'

class PaymentController {


    createOrder = asyncHandler(async (req, res) => {

        const { plan } = req.body;

        let totalAmount = 0;

        if (plan === "medium") {
            totalAmount = 399;
        }
        if (plan === "premium") {
            totalAmount = 599;
        }

        console.log(plan, totalAmount)

        const orderOptions = {
            amount: totalAmount * 100, // Convert to smallest currency unit (e.g., paise for INR)
            currency: "INR", // Assuming all products have the same currency
        };

        const order = await razorpay.orders.create(orderOptions);

        const paymentRecord = await paymentModel.create({
            razorpayOrderId: order.id,
            price: {
                amount: totalAmount,
                currency: "INR"
            },
            status: "pending"
        })

        res.success(201, "Order created successfully.", { orderId: order.id, amount: order.amount, currency: order.currency });
    });


    verifyPayment = asyncHandler(async (req, res) => {

        const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

        const isPaymentValid = validatePaymentVerification({
            order_id: razorpayOrderId,
            payment_id: razorpayPaymentId
        }, razorpaySignature, process.env.RAZORPAY_KEY_SECRET);

        if (!isPaymentValid) {
            await paymentModel.findOneAndUpdate(
                { razorpayOrderId },
                { status: "failed" }
            );
            return res.status(400).json({ error: "Payment verification failed." });
        }

        await paymentModel.findOneAndUpdate(
            { razorpayOrderId },
            {
                status: "completed",
                razorpayPaymentId,
                razorpaySignature
            }
        );

        /**
         * Here, you can also implement additional logic such as:
         * - Updating inventory based on the products purchased
         * - Sending a confirmation email to the user
         * - Generating an invoice or receipt
         */

        res.json({ message: "Payment verified successfully." });
    })


}

export default new PaymentController();