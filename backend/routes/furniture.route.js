import express from "express";
import {
  getAllFurniture,
  postFurniture,
} from "../controllers/furniture.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/allfurniture", getAllFurniture);

router.post("/furniture", postFurniture);
export default router;
