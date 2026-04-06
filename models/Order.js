import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  items: [
    {
      millet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Millet"
      },
      quantity: Number
    }
  ],

  totalPrice: Number,

  status: {
    type: String,
    default: "pending"
  }

});

export default mongoose.model("Order", orderSchema);