import ComponentService from "../services/component.service.js";
import ComponentValidator from "../validators/component.validator.js";
import { AppError } from "../utils/asyncHandler.utils.js";

const componentService = new ComponentService();

class ComponentController {
  // ── helper: flatten Joi errors into one readable string ──────────────────
  #validationError(error) {
    return error.details.map((d) => d.message).join(", ");
  }

  // ── POST /api/v1/components ───────────────────────────────────────────────
  async create(req, res, next) {
    try {
      const { error, value } = ComponentValidator.validateCreate(req.body);

      if (error) {
        throw new AppError(400, this.#validationError(error));
      }

      const component = await componentService.createComponent({
        ...value,
        userId: req.user.id,
      });

      return res.status(201).json({
        success: true,
        message: "Component created",
        data: component,
      });
    } catch (error) {
      next(error);
    }
  }

  // ── GET /api/v1/components ────────────────────────────────────────────────
  async getAll(req, res, next) {
    try {
      const components = await componentService.getAllComponents(req.user.id);

      return res.status(200).json({
        success: true,
        data: components,
      });
    } catch (error) {
      next(error);
    }
  }

  // ── GET /api/v1/components/:id ────────────────────────────────────────────
  async getOne(req, res, next) {
    try {
      const component = await componentService.getComponentById(req.params.id);

      return res.status(200).json({
        success: true,
        data: component,
      });
    } catch (error) {
      next(error);
    }
  }

  // ── PATCH /api/v1/components/:id ──────────────────────────────────────────
  async update(req, res, next) {
    try {
      const { error, value } = ComponentValidator.validateUpdate(req.body);

      if (error) {
        throw new AppError(400, this.#validationError(error));
      }

      const updated = await componentService.updateComponent(
        req.params.id,
        value,
      );

      return res.status(200).json({
        success: true,
        message: "Updated successfully",
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  }

  // ── DELETE /api/v1/components/:id ─────────────────────────────────────────
  async delete(req, res, next) {
    try {
      await componentService.deleteComponent(req.params.id);

      return res.status(200).json({
        success: true,
        message: "Deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ComponentController;
