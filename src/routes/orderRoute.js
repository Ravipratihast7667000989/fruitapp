import express from "express";

import {
  getTracking,
  updateTracking,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/track/:id", getTracking);

router.put("/track/:id", updateTracking);

export default router;