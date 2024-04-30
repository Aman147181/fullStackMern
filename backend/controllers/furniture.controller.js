import { Furniture } from "../models/Furniture.model.js";
export const postFurniture = async (req, res) => {
  const { furnitureName, description, category, imgUrl, price } = req.body;

  try {
    const furniture = await Furniture.create({
      furnitureName,
      category,
      description,
      imgUrl,
      price,
    });
    res.status(200).json(furniture);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getAllFurniture = async (req, res) => {
  try {
    const allfurniture = await Furniture.find();
    res.json(allfurniture);
  } catch (error) {
    console.error("Error fetching furniture data:", error);
  }
};
