import { User } from "../models/User.model.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";
export const userSignup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("Email not valid");
    }

    const exists = await User.findOne({ email });

    if (exists) {
      throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ username, email, password: hash });

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(email, password);
    if (!email || !password) {
      throw Error("All fields must be filled");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Email not found");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Incorrect password");
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "3d" }
    );
   
    res.json({
      username: user.username,
      id: user._id,
      email: user.email,
      token: token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
