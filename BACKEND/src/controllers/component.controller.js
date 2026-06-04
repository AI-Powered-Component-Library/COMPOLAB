import { AppError, asyncHandler } from "../utils/asyncHandler.utils.js";
import componentValidationSchema from "../validators/component.validator.js";
import componentService from "../services/component.service.js";

class ComponentController {

    createComponent = asyncHandler(async (req, res) => {
        const { error, value } = componentValidationSchema.validate(req.body);
        if (error) throw new AppError(400, "Validation Error", error.details[0].message);

        const component = await componentService.createComponent({ ...value, userId: req.user._id });
        res.status(201).json({ message: "Component created successfully", component });
    })

    getAllComponents = asyncHandler(async (req, res) => {
        const components = await componentService.getAllComponents();
        res.json({ message: "All components retrieved successfully", components });
    })

    getComponentById = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const component = await componentService.getComponentById(id);
        res.json({ message: `Component with ID ${id} retrieved successfully`, component });
    })

    updateComponent = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const { error, value } = componentValidationSchema.validate(req.body);
        if (error) throw new AppError(400, "Validation Error", error.details[0].message);

        const component = await componentService.updateComponent(id, value);
        res.json({ message: `Component with ID ${id} updated successfully`, component });
    })

    deleteComponent = asyncHandler(async (req, res) => {
        const { id } = req.params;
        await componentService.deleteComponent(id);
        res.json({ message: `Component with ID ${id} deleted successfully` });
    });

}


export default new ComponentController();