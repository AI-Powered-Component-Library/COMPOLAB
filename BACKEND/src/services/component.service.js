import MongoComponentRepository from "../repository/implement/mongo.component.js";
import { AppError } from "../utils/asyncHandler.utils.js";

const componentRepository = new MongoComponentRepository();

class ComponentService {
  async createComponent(data) {
    return await componentRepository.createComponent(data);
  }

  async getComponentById(id) {
    const component = await componentRepository.findComponentById(id);
    if (!component) {
      throw new AppError(404, "Component not found");
    }
    return component;
  }

  async getComponentsByUserId(userId) {
    return await componentRepository.findComponentsByUserId(userId);
  }

  async getAllComponents() {
    return await componentRepository.findAllComponents();
  }

  async updateComponent(id, data) {
    const component = await componentRepository.findComponentById(id);
    if (!component) {
      throw new AppError(404, "Component not found");
    }

    return await componentRepository.updateComponent(id, data);
  }

  async deleteComponent(id) {
    const component = await componentRepository.findComponentById(id);
    if (!component) {
      throw new AppError(404, "Component not found");
    }

    return await componentRepository.deleteComponent(id);
  }
}

export default new ComponentService();
