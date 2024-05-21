const express = require('express');
const routes = express.Router();

const categoryController= require("./category.controller");
const category= new categoryController();

const uploadUtils = require("../utils/upload.utils");
const _upload = new uploadUtils();

routes.post('/createCategory',_upload.uploadFile().single('image'),category.createOne);
routes.get('/search/:id',category.getCategoryById);
routes.put('/update/:id',category.updateNameAndDescription)
routes.delete('/delete/:id',category.deleteCategory)



module.exports = routes;
