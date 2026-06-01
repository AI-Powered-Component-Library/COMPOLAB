import { AppError, asyncHandler } from "../utils/asyncHandler.utils.js";
import componentValidationSchema from "../validators/component.validator.js";

class ComponentController {

    createComponent = asyncHandler(async (req, res) => {

        const role = req.user.role;

        if (role !== "admin") throw new AppError(403, "Forbidden: insufficient permission");

        const { error, value } = componentValidationSchema.validate(req.body);
        if (error) throw new AppError(400, "Validation Error", error.details[0].message)

        res.status(201).json({ message: "Component created successfully", component: value });
    })

    getAllComponents = asyncHandler(async (req, res) => {
        res.json({ message: "All components retrieved successfully", components: [] });
    })

    getComponentById = asyncHandler(async (req, res) => {
        const { id } = req.params;
        res.json({ message: `Component with ID ${id} retrieved successfully`, component: {} });
    })

    updateComponent = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const { error, value } = componentValidationSchema.validate(req.body);
        if (error) throw new AppError(400, "Validation Error", error.details[0].message)

        res.json({ message: `Component with ID ${id} updated successfully`, component: value });
    })

    deleteComponent = asyncHandler(async (req, res) => {
        const { id } = req.params;
        res.json({ message: `Component with ID ${id} deleted successfully` });
    });

}


export default new ComponentController();