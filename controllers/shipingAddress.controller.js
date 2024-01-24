const ShippingAddress = require('../models/shippingAddress.model')
const User = require('../models/user.model')
exports.createShippingAddress=async(req,res)=>{
    const { zipCode,state,street,landmark,city,phoneNumber, name} =req.body

    const zipCodeValidate = /^\d{6}$/
    if(!zipCodeValidate.test(zipCode)) return res.status(403).json({ message: "'Invalid zip code!'" });
    if(phoneNumber.toString().length!==10) return res.status(403).json({ message: "'Invalid contact number!'" });


    try{
        const user = await User.findOne({email:req.userId})
        const shippingAddress= await ShippingAddress.create({
            zipCode,
            state,
            street,
            landmark,
            city,
            phoneNumber, 
            name,
            user
        })

        return res.status(200).json({shippingAddress})
        
    }catch(err){
        console.log(`Error while creating address ${err}`)
            res.status(500).json({
                message:'Error while creating address'
                
            })
    }
   
}