const app=require('./app')
const mongoose = require('mongoose');
const serverConfig=require('./configs/server.config')
const dbConfig=require('./configs/db.config')

mongoose.connect(dbConfig.db_url);
const db=mongoose.connection;

db.on("error",()=>{
    console.log("Error while connecting to the DataBase");
})

db.once("open",()=>{
    console.log("Connected to the DataBase")
})

const server=app.listen(serverConfig.PORT,()=>{
    console.log(`App runing on port:${serverConfig.PORT}`)
})