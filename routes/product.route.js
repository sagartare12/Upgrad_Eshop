
const {authMiddleware} = require('../middlewares')
const productController = require("../controllers/product.controller");


module.exports = function (app) {
  app.post("/eshop/api/v1/products", authMiddleware.verifyToken, authMiddleware.verifyAdmin, productController.saveProduct);
};


