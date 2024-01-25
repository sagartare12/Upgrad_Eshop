const express = require('express');
const app=express();


app.use(express.json());

require("./routes/auth.route")(app);
require("./routes/shipAddress.route")(app);
require("./routes/product.route")(app)
require("./routes/order.route")(app)

module.exports=app;