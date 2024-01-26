const mongoose = require('mongoose')
const Product = require('./product.model')
const ShippingAddress = require('./shippingAddress.model')
const orderSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // This is optional, and it establishes a reference to another model (e.g., 'User')
      },
    addressId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShippingAddress', // This is optional, and it establishes a reference to another model (e.g., 'User')
      },
    quantity:{
        type:Number,
        required:true,
    },
})
module.exports = mongoose.model("Order",orderSchema)