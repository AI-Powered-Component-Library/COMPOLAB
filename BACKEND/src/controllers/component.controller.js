import ComponentValidator from "../validators/component.validator.js";
import { AppError } from "../utils/asyncHandler.utils.js";

class ComponentController {
  constructor(componentService) {
    this.componentService = componentService;
  }

  formatValidationError(error) {
    return error.details.map((detail) => detail.message).join(", ");
  }

  createComponent = async (req, res) => {
    const { error, value } = ComponentValidator.validateCreate(req.body);

    if (error) {
      throw new AppError(400, this.formatValidationError(error));
    }

    const component = await this.componentService.createComponent(req.user.id, value);

    return res.success(201, "Component created successfully", { component });
  };

  getComponents = async (req, res) => {
    const { error, value } = ComponentValidator.validateQuery(req.query);

    if (error) {
      throw new AppError(400, this.formatValidationError(error));
    }

    const result = await this.componentService.getComponents(req.user.id, value);

    return res.success(200, "Components fetched successfully", result);
  };

  getComponentById = async (req, res) => {
    const component = await this.componentService.getComponentById(
      req.user.id,
      req.params.id
    );

    return res.success(200, "Component fetched successfully", { component });
  };

  updateComponent = async (req, res) => {
    const { error, value } = ComponentValidator.validateUpdate(req.body);

    if (error) {
      throw new AppError(400, this.formatValidationError(error));
    }

    const component = await this.componentService.updateComponent(
      req.user.id,
      req.params.id,
      value
    );

    return res.success(200, "Component updated successfully", { component });
  };

  softDeleteComponent = async (req, res) => {
    await this.componentService.softDeleteComponent(req.user.id, req.params.id);

    return res.success(200, "Component deleted successfully", null);
  };
}

export default ComponentController;
