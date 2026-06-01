import IComponentRepository from "../contract/componenet.contract.js";

class MongoComponentRepository extends IComponentRepository {

    constructor(ComponentModel) {
        super();
        this.ComponentModel = ComponentModel;
    }

    async createComponent(component) {
        // Implement the logic to create a component in MongoDB
    }

}