const mongoose = require('mongoose');
const validator=require('validator');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
  
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        // validate:[validator.isEmail, 'Please provide valid email ID']
      },
      password:{
        type:String,
        required:true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER'
      },
      cratedAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now();
        }
      },
      updatedAt:{
        type:Date,
        default:()=>{
            return Date.now();
        }
      }

})

module.exports = mongoose.model("User",userSchema);