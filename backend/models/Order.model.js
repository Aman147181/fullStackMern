import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    orderPrice: {
        
    }
}, { timestamps: true });
export const Order = mongoose.model("Order", orderSchema)