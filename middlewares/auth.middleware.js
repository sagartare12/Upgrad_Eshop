const User = require('../models/user.model')
const jwt = require("jsonwebtoken")
const config = require("../configs/auth.config")

verifyToken=(req,res,next)=>{
    let token = req.headers["x-access-token"];
    if(!token){
        return res.status(403).send({
            message:`No token provided`
        })
    }

    jwt.verify(token,config.secret,(err,payload)=>{
        if(err){
            return res.status(401).send({
        message:"Unauthorised"
    })
    }
    console.log(payload)
    req.userId=payload.id;
    next();
    })
}


const authFunction ={
    verifyToken :verifyToken
}

module.exports = authFunction