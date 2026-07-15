import mongoose from "mongoose";

const trackingSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
      },
    ],

    totalPrice: Number,

    paymentStatus: {
      type: String,
      default: "Paid",
    },

    tracking: {
      type: [trackingSchema],
      default: [
        {
          status: "Order Placed",
          completed: true,
        },
        {
          status: "Order Confirmed",
          completed: false,
        },
        {
          status: "Packed",
          completed: false,
        },
        {
          status: "Shipped",
          completed: false,
        },
        {
          status: "Out for Delivery",
          completed: false,
        },
        {
          status: "Delivered",
          completed: false,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);