import { api } from "../../../utils/axios.utils"

const handler = async (response) => {

    console.log(response);

    try {
        await api.post('/payments/verify', {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature
        })
        alert("Payment Successful!");
    } catch (error) {
        console.error("Payment verification failed:", error);
        alert("Payment verification failed. Please try again.");
        return;
    }
}

const paymentService = {

    paymentService: async (subscriber) => {

        const { fullName: name, email } = subscriber;

        const response = await api.post('/payment/order', { plan: "medium" })

        const order = response.data.data;

        const options = {
            key: "rzp_test_TdsyB6VuIxFT5s",
            amount: order.amount,
            currency: order.currency,
            name: "CompoLab",
            description: "CompoLab Test Transaction",
            order_id: order.orderId,
            handler,
            prefill: { name, email },
            theme: { color: "#F37254" }
        };

        return options;
    },

    checkoutService: async (plan) => {
        const res = await api.get("/payment/checkout?plan=" + plan)
        return res.data
    }
}

export default paymentService;