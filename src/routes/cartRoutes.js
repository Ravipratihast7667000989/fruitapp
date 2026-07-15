import express from "express";

import {

addCart,

getCart,

deleteCart,

updateCart,

cartCount,

clearCart

} from "../controllers/addToCartController.js";

import authMiddleware from "../middleware/cartMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addCart);

router.get("/all", authMiddleware, getCart);

router.delete("/delete/:productId", authMiddleware, deleteCart);

router.put("/update/:productId", authMiddleware, updateCart);

router.get("/count", authMiddleware, cartCount);

router.delete("/clear", authMiddleware, clearCart);

export default router;