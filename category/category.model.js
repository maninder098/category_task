const mongoose = require("mongoose");

const categoryModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parent_id: {
        type: String,
        allowNull: true,
        default: null
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("categoryModel", categoryModel);