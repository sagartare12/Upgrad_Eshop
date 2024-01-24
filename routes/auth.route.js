const authController = require('../controllers/auth.controller');
const {authMiddleware} = require('../middlewares')


module.exports = (app)=>{
    app.post("/eshop/api/v1/users",authController.signUp);
    app.post("/eshop/api/v1/auth",authController.signIn);
}