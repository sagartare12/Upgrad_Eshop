const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const authConfig = require("../configs/auth.config")
// const authMiddleware = require('../middlewares/auth.middleware')


exports.signUp=async(req,res)=>{
    const hashedPass = bcrypt.hashSync(req.body.password,10);
    
    if(req.body.phoneNumber.toString().length!=10){
        return res.status(403).send({
            message:`Phone number is invalid`
        })
    }

    if(await User.findOne({email:req.body.email})){
        return res.status(403).send({
            message:'Try any other email, this email is already registered!'
        })
            };

            const emailRequirement = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
            if (!emailRequirement.test(req.body.email)) {
              return res.status(400).json({ message: "Invalid email-id format!" });
            }
          
        //     if (!/^[a-zA-Z0-9._-]+$/.test(req.body.email.split("@")[0])) {
        //       return res.status(400).json({ message: "Invalid email-id format!" });
        //     }


    const userObj={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        email:req.body.email,
        password:hashedPass,
        phoneNumber:req.body.phoneNumber,
        role:req.body.role
        
    }
try{
    const userCreate = await User.create(userObj);
    const postResponse = {
        _id:userCreate._id,
        firstName:userCreate.firstName,
        lastName:userCreate.lastName,
        // userName:userCreate.userName,
        email:userCreate.email,
        // phoneNumber:userCreate.phoneNumber,
        // createdAt:userCreate.createdAt,
        // role:userCreate.role
    };
    

    res.status(200).json(postResponse)
}catch(err){
    console.log(`Error while sign Up ${err}`)
        res.status(500).json({
            message:'Error while registration'
            
        })
}
}

exports.signIn=async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        console.log("Enter user and password")
        res.status(500).send({
            message:`Enter usernamme  & password`
        })
    }

    const user= await User.findOne({email});

    if(!user){
        return res.status(403).send({
            message:'This email has not been registered!'
        })
        };
        const isCorrectPassword = bcrypt.compareSync(password,user.password);
        if(!isCorrectPassword){
            return res.status(401).json({
                message:'Invalid Credentials!'
            })
        }

        const token = jwt.sign({id:user.email},authConfig.secret,{expiresIn:1200});
        // res.header(field, [value])
        const name=`${user.firstName} ${user.lastName}`
    

        return res.status(201).json({
            email:user.email,
            name:name,
            token:token
        })

}