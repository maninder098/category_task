const categoryResourse = require("./category.resoures")
const _category = new categoryResourse();

module.exports = class CategoryController {

    async createOne(req, res) {
        let data = {
            name: req.body.name,
            // parent_id: req.body.parent_id,
            image: req.file.path,
            description: req.body.description
        };
        console.log("file path", req.file);
        console.log("data.....", data);

        let category = await _category.createOne(data);
        if (!category) {
            return response.exception('role not created successfully', res, false);
        }
        return res.status(200).json({ category: category });
    }

    async getCategoryById(req, res) {
        let id = req.params.id;

        console.log("id>>>>.", id);

        let category = await _category.getCategoryById(id);
        if (!category) {
            return res.status(200).json({ success: false, msg: "Category is not find" });
        }
        return res.status(200).json({ success: true, msg: "Category found", data: category });
    }

    async updateNameAndDescription(req, res) {

        let id = req.params.id;
        let data = {
            name: req.body.name,
            description: req.body.description
        }

        let updatedCategory = await _category.updateNameAndDescription(id, { data });

        if (!updatedCategory) {
            return res.status(200).json({ success: false, msg: "Category is not find" });
        }
        return res.status(200).json({ success: true, msg: "Category found", data: updatedCategory });

    }

    async deleteCategory(req, res) {

        let deleteCategory = await _category.deleteCategory(req.params.id);

        if(!deleteCategory){
            return res.status(200).json({success: false, msg: "Category not deleted"});
        }
        return res.status(200).json({success: true, msg: "Category deleted"});



    }
}
