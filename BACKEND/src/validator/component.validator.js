import joi from "joi"

function componentValidator(compoData) {

    const createComponentSchema = joi.object({
        name: joi.string().required().trim(),
        code: joi.string().required().trim(),
        props: joi.array().optional(),
        owner : joi.string().required().trim(),
        visibility : joi.string().optional().trim(),
        npmPackage : joi.string().optional().trim()
    })

    return createComponentSchema.validate(compoData)
}

export default componentValidator;