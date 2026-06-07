import componentRepository from "../repository/implement/mongo.component.js";
import { AppError } from "../utils/asyncHandler.utils.js";

class ComponentService {
  async createComponent(data) {
    const existingComponents = await componentRepository.getAllComponents(
      data.userId,
    );

    const duplicate = existingComponents.find(
      (item) => item.componentName === data.componentName,
    );

    if (duplicate) {
      throw new AppError(409, "Component name already exists");
    }

    return await componentRepository.createComponent(data);
  }

  async getAllComponents(userId) {
    return await componentRepository.getAllComponents(userId);
  }

  async getComponentById(id) {
    const component = await componentRepository.getComponentById(id);

    if (!component) {
      throw new AppError(404, "Component not found");
    }

    return component;
  }

  async updateComponent(id, data) {
    const updated = await componentRepository.updateComponent(id, data);

    if (!updated) {
      throw new AppError(400, "Update failed");
    }

    return updated;
  }

  async deleteComponent(id) {
    const deleted = await componentRepository.deleteComponent(id);

    if (!deleted) {
      throw new AppError(400, "Delete failed");
    }

    return deleted;
  }
}

export default ComponentService;
