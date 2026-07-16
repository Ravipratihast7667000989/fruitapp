
export const getCartItems = async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.user.id }).populate("product");

    const cartCount = await Cart.countDocuments({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      cart,
      cartCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};