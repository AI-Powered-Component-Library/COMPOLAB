import ComponentModel from "../../models/component.model.js";
import ComponentContract from "../contract/component.contract.js";

class MongoComponentRepository extends ComponentContract {

  async createComponent(data) {
    return await ComponentModel.create(data);
  }

  async getAllComponents(userId) {
    return await ComponentModel.find({ userId });
  }

  async getComponentById(id) {
    return await ComponentModel.findById(id);
  }

  async updateComponent(id, data) {
    return await ComponentModel.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
  }
  
  async deleteComponent(id) {
    return await ComponentModel.findByIdAndDelete(id);
  }
}

export default new MongoComponentRepository();