const Order = require("../models/order.model")
const User = require('../models/user.model')
const Product = require("../models/product.model");
const ShippingAddress = require('../models/shippingAddress.model')


exports.createOrder = async(req,res)=>{

    const { productId, addressId,quantity} = req.body
    const user = await User.findOne({email:req.userId}).select('-password')
    
    try{
      const  address = await ShippingAddress.findOne({'user._id':user._id})
      const order=await Order.create({ productId:req.body.productId, addressId:address._id,quantity});

      const orderRes= await Order.findById(order._id).populate('addressId','productId')
      console.log(order)
      const product = await Product.findOne({_id:order.productId})
      if(!product) return res.status(400).json(`No address fround for id - ${req.body.productId}`);
      if(product.availableItems<1) return res.status(400).json(`Product with ID - ${req.body.productId} is currently out of stock!`);
        return res.status(200).send({
          id:order._id,
          user:user,
          product:product,
          shippingAddress:address

          });
        

 
}catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal Error",
    });
  }

    



}