import IComponentRepository from "../contract/componenet.contract.js";

class MongoComponentRepository extends IComponentRepository {

    constructor(ComponentModel) {
        super();
        this.ComponentModel = ComponentModel;
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

}