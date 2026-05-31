import componentMetadataValidationSchema from "../validators/componentMetadata.validator.js";

const componentMetadata = async (req, res) => {
    try {
        // Validate request body
        const { error } = componentMetadataValidationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }


        res.status(201).json({
            success: true,
            message: "Metadata validated successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export default componentMetadata;