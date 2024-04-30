import { User } from "../models/User.model.js";

export const verifyToken = async (req, res, next) => {
  let token;
  try {
    if (req.header.authorization) {
       token = req.header.authorization.split(" ")[1];
    }
    
    if (!token) {
      throw new Error("No token Found!!!");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
