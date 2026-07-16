import express from "express";



import authMiddleware from "../middleware/cartMiddleware.js";
import { addCart, cartCount, clearCart, deleteCart, getCart, updateCart } from "../controllers/addToCartController.js";
import { getCartItems } from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", authMiddleware, addCart);

router.get("/all", authMiddleware, getCart);

router.delete("/delete/:productId", authMiddleware, deleteCart);

router.put("/update/:productId", authMiddleware, updateCart);

router.get("/count", authMiddleware, cartCount);

router.delete("/clear", authMiddleware, clearCart);
router.get("/cart-count",authMiddleware,getCartItems);

export default router;