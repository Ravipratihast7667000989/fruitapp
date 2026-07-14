import Cart from "../models/cartModel.js";


// Add Cart

export const addCart = async (req, res) => {
  try {
    const {
      productId,
      productName,
      image,
      price,
      quantity,
    } = req.body;

    let cart = await Cart.findOne({
      userId: req.user.id,
      productId,
    });

    if (cart) {
      cart.quantity += quantity;

      await cart.save();

      return res.json({
        success: true,
        message: "Quantity Updated",
      });
    }

    cart = await Cart.create({
      userId: req.user.id,
      productId,
      productName,
      image,
      price,
      quantity,
    });

    res.status(201).json({
      success: true,
      message: "Added Successfully",
      cart,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};



// Get Cart

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      userId: req.user.id,
    });

    res.json({
      success: true,
      cart,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};



// Delete

export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};



// Update Qty

export const updateCart = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        quantity,
      },
      {
        new: true,
      }
    );

    res.json({
      success: true,
      cart,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};



// Count

export const cartCount = async (req, res) => {
  try {
    const count = await Cart.countDocuments({
      userId: req.user.id,
    });

    res.json({
      success: true,
      count,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};



// Clear

export const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({
      userId: req.user.id,
    });

    res.json({
      success: true,
      message: "Cart Cleared",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};