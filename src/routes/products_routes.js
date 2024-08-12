const ProductRoutes = require('express').Router();
const ProductController = require('./../controllers/products_controller');

ProductRoutes.get("/", ProductController.fetchAllproduct);
ProductRoutes.get("/category/:id", ProductController.fetchProductByID);
ProductRoutes.post("/", ProductController.createProduct);

module.exports = ProductRoutes;   