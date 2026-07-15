import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },


    orderId: {
        type: String,
        required: true
    },


    items: [{


        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },

        productName: String,

        quantity: Number,

        price: Number,

        image: String


    }],


    totalAmount: Number,


    tracking: [

        {

            status: String,

            date: String,

            completed: Boolean

        }

    ]


});
export default mongoose.model("Order", orderSchema);