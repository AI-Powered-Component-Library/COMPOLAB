import componentValidationSchema from "../validators/component.validator.js";

const component = async (req, res) => {
    try {
        // Validate request body
        const { error } = componentValidationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }

        res.status(201).json({
            success: true,
            message: "Component validated successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export default component;


