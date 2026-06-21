import paymentValidator from "../validator/payment.validator.js"
import paymentService from "../services/payment.service.js";
import { AppError, asyncHandler } from "../utils/error.utils.js"
import Razorpay from "razorpay";
import { validatePaymentVerification } from 'razorpay/dist/utils/razorpay-utils.js'
import { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } from "../configs/env.config.js"


class PaymentController {

    constructor() {

        this.razorpay = new Razorpay({
            key_id: RAZORPAY_KEY_ID,
            key_secret: RAZORPAY_KEY_SECRET
        });

        this.planDetail = (plan) => {

            let totalAmount = 0;
            let tokens = 0;

            if (plan === "basic") {
                totalAmount = 199;
                tokens = 10
            } else if (plan === "medium") {
                totalAmount = 399;
                tokens = 50
            } else if (plan === "premium") {
                totalAmount = 599;
                tokens = 100
            } else {
                throw new AppError(400, "Invalid Plan", plan)
            }

            return {
                name: plan,
                price: totalAmount,
                tokens: `${tokens}K / month`
            };
        }
    }


    checkOutDetail = asyncHandler(async (req, res) => {
        const plan = req.query.plan

        if (!plan) {
            throw new AppError(400, "Please choose a plan first")
        }

        const detail = this.planDetail(plan)

        res.success(200, "Checkout Data Fetched.", detail)

    })


    createOrder = asyncHandler(async (req, res) => {

        const { plan } = req.body;

        const planDetail = this.planDetail(plan)

        const orderOptions = {
            amount: planDetail.price * 100,
            currency: "INR"
        };

        const order = await this.razorpay.orders.create(orderOptions);

        // const paymentRecord = await paymentModel.create({
        //     razorpayOrderId: order.id,
        //     price: {
        //         amount: planDetail.price,
        //         currency: "INR"
        //     },
        //     status: "pending"
        // })

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