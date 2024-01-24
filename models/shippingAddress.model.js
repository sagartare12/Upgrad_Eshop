const mongoose= require('mongoose')

const shippingAddressSchema = new mongoose.Schema({
    zipCode:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    street:{
        type:String,
        required:true,
    },
    Landmark:String,
    city:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    user:{}
})

module.exports = mongoose.model("ShippingAddress",shippingAddressSchema)