class IComponentRepository {
  async createComponent(componentData) {
    throw new Error("Method not implemented");
  }

  async findComponentsByUser(userId, filters = {}) {
    throw new Error("Method not implemented");
  }

  async countComponentsByUser(userId, filters = {}) {
    throw new Error("Method not implemented");
  }

  async findComponentById(id, userId) {
    throw new Error("Method not implemented");
  }

  async updateComponent(id, userId, componentData) {
    throw new Error("Method not implemented");
  }

  async softDeleteComponent(id, userId) {
    throw new Error("Method not implemented");
  }
}

export default IComponentRepository;
