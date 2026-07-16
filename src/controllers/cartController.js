import cartModel from "../models/cartModel.js"
import Cart from "../models/cartModel.js"

export const getCartCount = async (req,res) =>{
    try {
        
        const cartCount = await cartModel.countDocuments({
            user:req.user.id,
        });
        res.status(200).json({
            sucess:true,
            cartCount,
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message,
        });
        
    }
};