const Category = require("./category.model");


module.exports = class CategoryResource {

    async createOne(data = null) {

        console.log('CategoryResource@createOne');
        if (!data || data === '') {
            throw new Error('data is required');
        }
        console.log("data=====", data)
        let category = await Category.create(data);

        if (!category) {
            return false;
        }

        return category;
    }

    async getCategoryById(_id = null) {

        if (!_id || _id === '') {
            throw new Error('id is required');
        }
        console.log("_id============", _id);

        let category = await Category.findById({ _id })

        if (!category) {
            return false;
        }
        return category;
    }

    async updateNameAndDescription(_id = null, { data }) {

        if (!_id || _id === '' || !data || data === '') {
            throw new Error('id is required');
        }
        let category = await Category.updateOne({ _id }, { $set: { name: data.name, description: data.description } });

        if (!category) {
            return false;
        }
        return category;
    }

    async deleteCategory(_id = null) {

        if (!_id || _id === '') {
            throw new Error('id is required');
        }

        let deleteCategory = await Category.deleteOne({ _id });

        console.log("delete>>>>>>>>>>",deleteCategory);

        if (!deleteCategory) {
            return false;
        }
        return deleteCategory
    }
}