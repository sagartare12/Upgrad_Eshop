
const {authMiddleware} = require('../middlewares')
const orderController = require("../controllers/order.controller");


module.exports = function (app) {
  app.post("/eshop/api/v1/orders", authMiddleware.verifyToken, authMiddleware.verifyUser, orderController.createOrder);

};


