import mongoose from "mongoose";
const furnitureSchema = new mongoose.Schema(
  {
    furnitureName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            
    }
  },

  { timestamps: true }
);
export const Furniture = mongoose.model("Furniture", furnitureSchema);
