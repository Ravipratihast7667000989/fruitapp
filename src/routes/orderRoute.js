import express from "express";

import {
    createOrder,
    getTracking,
    updateTracking,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/track/:id", getTracking);

router.put("/track/:id", updateTracking);
router.post("/create", createOrder);

export default router;