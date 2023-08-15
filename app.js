const express = require('express');
const app=express();


app.use(express.json());

require("./routes/auth.route")(app);



module.exports=app;