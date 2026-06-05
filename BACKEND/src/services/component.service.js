import mongoose from "mongoose";
import { AppError } from "../utils/asyncHandler.utils.js";

class ComponentService {
  constructor(componentRepository) {
    this.componentRepository = componentRepository;
  }

  validateObjectId(id, fieldName = "Component id") {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new AppError(400, `${fieldName} is invalid`);
    }
  }

  sanitizeComponent(component) {
    if (!component) return null;

    return {
      id: component._id,
      userId: component.userId,
      prompt: component.prompt,
      generatedCode: component.generatedCode,
      componentName: component.componentName,
      theme: component.theme,
      isActive: component.isActive,
      createdAt: component.createdAt,
      updatedAt: component.updatedAt,
    };
  }

  async createComponent(userId, payload) {
    const component = await this.componentRepository.createComponent({
      userId,
      prompt: payload.prompt,
      generatedCode: payload.generatedCode,
      componentName: payload.componentName,
      theme: payload.theme || "light",
    });

    return this.sanitizeComponent(component);
  }

  async getComponents(userId, filters) {
    const page = Number(filters.page) > 0 ? Number(filters.page) : 1;
    const limit = Number(filters.limit) > 0 ? Number(filters.limit) : 10;

    const [components, total] = await Promise.all([
      this.componentRepository.findComponentsByUser(userId, { ...filters, page, limit }),
      this.componentRepository.countComponentsByUser(userId, filters),
    ]);

    return {
      components: components.map((component) => this.sanitizeComponent(component)),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit) || 1,
      },
    };
  }

  async getComponentById(userId, componentId) {
    this.validateObjectId(componentId);

    const component = await this.componentRepository.findComponentById(componentId, userId);

    if (!component) {
      throw new AppError(404, "Component not found");
    }

    return this.sanitizeComponent(component);
  }

  async updateComponent(userId, componentId, payload) {
    this.validateObjectId(componentId);

    const component = await this.componentRepository.updateComponent(
      componentId,
      userId,
      payload
    );

    if (!component) {
      throw new AppError(404, "Component not found");
    }

    return this.sanitizeComponent(component);
  }

  async softDeleteComponent(userId, componentId) {
    this.validateObjectId(componentId);

    const component = await this.componentRepository.softDeleteComponent(componentId, userId);

    if (!component) {
      throw new AppError(404, "Component not found");
    }

    return true;
  }
}

export default ComponentService;
