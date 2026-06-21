import { useRazorpay } from "react-razorpay";
import { api } from "../../../utils/axios.utils"

const { Razorpay } = useRazorpay();

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

async function handlePayment(subscriber) {

    const response = await api.post('/payments/order', { plan: "medium" })

    const order = response.data;

    const options = {
        key: "rzp_test_SyFcxS7jGdvGXI",
        amount: order.amount, // Amount in paise
        currency: order.currency,
        name: "CompoLab",
        description: "CompoLab Test Transaction",
        order_id: order.orderId, // Generate order_id on server
        handler,
        prefill: {
            name: subscriber.name,
            email: subscriber.email,
        },
        theme: { color: "#F37254" }
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
}
