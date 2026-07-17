import Cart from "../models/cartModel.js";

// baaki exports...

export const getCartCount = async (req, res) => {
  try {
    const count = await Cart.countDocuments({
      userId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      count,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};