import ComponentModel from "../../models/component.model.js";
import IComponentRepository from "../contract/component.contract.js";

class MongoComponentRepository extends IComponentRepository {
  async createComponent(data) {
    return ComponentModel.create(data);
  }

  async findComponentById(id) {
    return ComponentModel.findById(id);
  }

    async createComponent(component) {
        const newComponent = new this.ComponentModel(component);
        return await newComponent.save();
    }

    async getAllComponents() {
        return await this.ComponentModel.find();
    }

    async getComponentById(id) {
        return await this.ComponentModel.findById(id);
    }

    async updateComponent(id, component) {
        return await this.ComponentModel.findByIdAndUpdate(id, component, { new: true });
    }

    async deleteComponent(id) {
        return await this.ComponentModel.findByIdAndDelete(id);
    }

  async findAllComponents() {
    return ComponentModel.find();
  }

  async updateComponent(id, data) {
    return ComponentModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  async deleteComponent(id) {
    return ComponentModel.findByIdAndDelete(id);
  }
}

export default MongoComponentRepository;
