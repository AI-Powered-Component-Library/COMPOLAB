import ComponentModel from "../../models/component.model.js";
import IComponentRepository from "../contract/component.contract.js";

class MongoComponentRepository extends IComponentRepository {
  buildUserFilter(userId, filters = {}) {
    const query = {
      userId,
      isActive: true,
    };

    if (filters.theme) {
      query.theme = filters.theme;
    }

    if (filters.search) {
      query.$or = [
        { componentName: { $regex: filters.search, $options: "i" } },
        { prompt: { $regex: filters.search, $options: "i" } },
      ];
    }

    return query;
  }

  async createComponent(componentData) {
    return ComponentModel.create(componentData);
  }

  async findComponentsByUser(userId, filters = {}) {
    const page = Number(filters.page) > 0 ? Number(filters.page) : 1;
    const limit = Number(filters.limit) > 0 ? Number(filters.limit) : 10;
    const skip = (page - 1) * limit;

    return ComponentModel.find(this.buildUserFilter(userId, filters))
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
  }

  async countComponentsByUser(userId, filters = {}) {
    return ComponentModel.countDocuments(this.buildUserFilter(userId, filters));
  }

  async findComponentById(id, userId) {
    return ComponentModel.findOne({ _id: id, userId, isActive: true });
  }

  async updateComponent(id, userId, componentData) {
    return ComponentModel.findOneAndUpdate(
      { _id: id, userId, isActive: true },
      componentData,
      { new: true, runValidators: true }
    );
  }

  async softDeleteComponent(id, userId) {
    return ComponentModel.findOneAndUpdate(
      { _id: id, userId, isActive: true },
      { isActive: false },
      { new: true }
    );
  }
}

export default MongoComponentRepository;
