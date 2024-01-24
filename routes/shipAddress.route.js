const shipingAddressController = require('../controllers/shipingAddress.controller');
const {authMiddleware} = require('../middlewares')

module.exports = (app)=>{
    app.post("/eshop/api/v1/addresses",authMiddleware.verifyToken,shipingAddressController.createShippingAddress);
}