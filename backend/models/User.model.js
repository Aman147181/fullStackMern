import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },
    coverImage: {
      type: String,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
