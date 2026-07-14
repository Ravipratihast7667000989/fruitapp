import express from "express";

import {
  addCart,
  getCart,
  deleteCart,
  updateCart,
  cartCount,
  clearCart,
} from "../controllers/addToCartController.js";

import auth from "../middleware/cartMiddleware.js";

const router = express.Router();

router.post("/add", auth, addCart);

router.get("/all", auth, getCart);

router.delete("/delete/:id", auth, deleteCart);

router.put("/update/:id", auth, updateCart);

router.get("/count", auth, cartCount);

router.delete("/clear", auth, clearCart);

export default router;