const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required:true,
    },
    addressId:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
})