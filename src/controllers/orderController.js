import productModel from "../models/productModel.js";
import Order from "../models/orderModel.js";



export const createOrder = async(req,res)=>{

try{


const {
    items,
    totalAmount,
    paymentStatus,
    address
}=req.body;



const order = await Order.create({

    user:req.user.id,


    orderId:"ORD"+Date.now(),


    items,


    totalAmount,


    paymentStatus,


    address,


    tracking:[

        {
            status:"Order Placed",
            date:new Date().toLocaleDateString(),
            completed:true
        },

        {
            status:"Processing",
            date:"",
            completed:false
        },

        {
            status:"Shipped",
            date:"",
            completed:false
        },

        {
            status:"Delivered",
            date:"",
            completed:false
        }

    ]


});



res.status(201).json({

success:true,

order

});


}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}


};
// GET Tracking
export const getTracking = async (req, res) => {
  try {
    const order = await productModel.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      tracking: order.tracking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE Tracking
export const updateTracking = async (req, res) => {
  try {
    const { step } = req.body;

    const order = await productModel.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    if (step < 0 || step >= order.tracking.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid tracking step",
      });
    }

    const today = new Date();

    const date = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const time = today.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Previous steps complete karo
    for (let i = 0; i <= step; i++) {
      order.tracking[i].completed = true;

      if (!order.tracking[i].date) {
        order.tracking[i].date = date;
      }

      if (!order.tracking[i].time) {
        order.tracking[i].time = time;
      }
    }

    await order.save();

    res.status(200).json({
      success: true,
      message: "Tracking Updated Successfully",
      tracking: order.tracking,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};