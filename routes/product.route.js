
const {authMiddleware} = require('../middlewares')
const productController = require("../controllers/product.controller");


module.exports = function (app) {
  app.post("/eshop/api/v1/products", authMiddleware.verifyToken, authMiddleware.verifyAdmin, productController.saveProduct);
  app.get("/eshop/api/v1/products",productController.getProducts);
  // Get Product Categories - '/products/categories'
  app.get("/eshop/api/v1/products/categories", productController.getProductCategories);
  app.get("/eshop/api/v1/products/:id", productController.getProductById);
  app.put("/eshop/api/v1/products/:id",authMiddleware.verifyToken, productController.updateProduct);
  app.delete("/eshop/api/v1/products/:id",authMiddleware.verifyToken, productController.deleteProduct);


};


