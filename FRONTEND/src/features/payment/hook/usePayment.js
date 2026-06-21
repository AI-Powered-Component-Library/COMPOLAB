import { useRazorpay } from "react-razorpay";
import paymentService from "../service/payment.service";
import { useState } from "react";

const usePayment = () => {

    const { Razorpay } = useRazorpay();
    const [planDetail, setPlanDetail] = useState(null)


    const handleCheckoutDetail = async (plan) => {

        let { data } = await paymentService.checkoutService(plan)

        setPlanDetail(data)
    }


    const handlePayment = async (subscriber) => {

        const options = await paymentService.paymentService(subscriber)

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    }

    return { handlePayment, handleCheckoutDetail,planDetail }
}

export default usePayment