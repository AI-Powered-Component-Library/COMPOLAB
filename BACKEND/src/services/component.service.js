import MongoComponentRepository from "../repository/implement/mongo.component.js";
import ComponentModel from "../models/component.model.js";
import { AppError } from "../utils/asyncHandler.utils.js";

class ComponentService {
    constructor() {
        this.componentRepository = new MongoComponentRepository(ComponentModel);
    }

    async createComponent(componentData) {
        return await this.componentRepository.createComponent(componentData);
    }

    async getAllComponents() {
        return await this.componentRepository.getAllComponents();
    }

    async getComponentById(id) {
        const component = await this.componentRepository.getComponentById(id);
        if (!component) {
            throw new AppError(404, "Component not found");
        }
        return component;
    }

    async updateComponent(id, componentData) {
        const component = await this.componentRepository.updateComponent(id, componentData);
        if (!component) {
            throw new AppError(404, "Component not found");
        }
        return component;
    }

    async deleteComponent(id) {
        const component = await this.componentRepository.deleteComponent(id);
        if (!component) {
            throw new AppError(404, "Component not found");
        }
        return component;
    }
}

export default new ComponentService();
