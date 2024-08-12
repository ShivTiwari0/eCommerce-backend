const ProductModel = require("../models/productes_model");

const ProductController = {
  createProduct: async function (req, res) {
    try {
      const productData = req.body;
      newProduct = new ProductModel(productData);
      await newProduct.save();
      return res.status(201).json({
        success: true,
        data: newProduct,
        message: "Product Added",
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  },
  fetchAllproduct: async function (req, res) { 
    try {
      const products =await  ProductModel.find();
      return res.json({
        success: true,
        data: products,
      }); 
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  },
  fetchProductByID: async function (req, res) {
    try {
        const categoryid =req.params.id;
      const foundProduct = await ProductModel.find({category:categoryid});
    //    if(!foundCategory){
    //     return res.json({ success: false, message: "Product Not Found" });
    //    }
      return res.json({
        success: true, 
        data: foundProduct,
      });
    } catch (ex) {
      return res.json({ success: false, message: ex }); 
    }
  },
};
module.exports = ProductController;