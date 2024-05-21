const express = require("express");
const app = express();
const mongoose = require("./database");
const bodyParser =require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:true}));
const category_route = require("./category/category.routes");
app.use(category_route);

app.listen(4000, () => {
    console.log("Server is ready");
})