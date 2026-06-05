import ComponentModel from "../../models/component.model.js";
import IComponentRepository from "../contract/component.contract.js";

class MongoComponentRepository extends IComponentRepository {
  async createComponent(data) {
    return ComponentModel.create(data);
  }

  async findComponentById(id) {
    return ComponentModel.findById(id);
  }

  async findComponentsByUserId(userId) {
    return ComponentModel.find({ userId });
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
