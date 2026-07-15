
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import bannerRoutes from "./src/routes/bannerRoutes.js";
import productRoutes from "./src/routes/productRoutes.js"
import bestsellingRoutes from "./src/routes/bestsellingRoutes.js"
import cartRoutes from "./src/routes/cartRoutes.js";
import userBlockRoutes from "./src/routes/blockRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js"
import orderRoutes from "./src/routes/orderRoute.js"
import cors from "cors";
dotenv.config();

connectDB();
const app = express();
app.use(cors({
  origin: "*",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/auth", authRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/product",productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/user", userBlockRoutes);
app.use("/api/bestselling",bestsellingRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/order",orderRoutes);


app.listen(process.env.PORT||5000, () =>
  console.log("Server running on port 5000")
);
