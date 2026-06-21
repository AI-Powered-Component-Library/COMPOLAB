import joi from "joi"

function paymentValidator(paymentData) {

    const createPaymentSchema = joi.object({
        plan: joi.string().required().trim().valid("basic","medium","premium"),
        razorpayOrderId: joi.string().required().trim(),
        razorpayPaymentId: joi.string().optional().trim(),
        razorpaySignature: joi.string().optional().trim(),
        price: joi.object({
            amount: joi.number().required().trim(),
            currency: joi.string().required().trim(),
        }).required(),
        status: joi.string().optional().trim(),

    })

    const verifyPaymentSchema = joi.object({
        razorpayOrderId: joi.string().required().trim(),
        razorpayPaymentId: joi.string().required().trim(),
        razorpaySignature: joi.string().required().trim(),
    })

    return { createPaymentSchema, verifyPaymentSchema }.validate(paymentData)
}

export default paymentValidator;