import express from "express";
import { Furniture } from "../models/Furniture.model.js";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("hello world!");
});
router.get("/allfurniture", async (req, res) => {
  try {
    const allfurniture = await Furniture.find();
    res.json(allfurniture);
  } catch (error) {
    console.error("Error fetching furniture data:", error);
  }
});

router.post("/furniture", async (req, res) => {
  const { furnitureName, description, imgUrl, price } = req.body;

  try {
    const furniture = await Furniture.create({
      furnitureName,
      description,
      imgUrl,
      price,
    });
    res.status(200).json(furniture);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
export default router;

const furnitureapi = [
    {
      "category": "couch",
      "furnitureName": "Single Couch",
      "description": "A small sofa for one person, perfect for relaxing on the porch, reading a book, or brewing warm tea.",
      "price": 15990,
      "imgUrl": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
    },
    {
      "category": "couch",
      "furnitureName": "Big Size Sofa",
      "description": "A large-sized sofa suitable for gathering with family, using super-soft foam coated with fine and soft material for comfort on the skin.",
      "price": 25990,
      "imgUrl": "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80"
    },
    {
      "category": "couch",
      "furnitureName": "Big Size Leather Sofa",
      "description": "A large-sized sofa suitable for gathering with family, using super-soft foam coated with high-quality leather material for comfort on the skin and crack resistance.",
      "price": 45990,
      "imgUrl": "https://images.unsplash.com/photo-1628512743826-2c28a508ad5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
    },
    {
      "category": "chair",
      "furnitureName": "Single Black Chair",
      "description": "A chair with wooden legs and high-quality plastic as the backrest, coated with super-soft foam for comfortable long-term use.",
      "price": 5990,
      "imgUrl": "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
      "category": "chair",
      "furnitureName": "Simple Cafe Chair",
      "description": "Tall wooden chair suitable for the kitchen with cafe-style, using high-quality wood for durability and resistance to decay.",
      "price": 1990,
      "imgUrl": "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "chair",
      "furnitureName": "Simple Metal Chair",
      "description": "Chair made of rust-resistant metal material, strong and durable.",
      "price": 2990,
      "imgUrl": "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "shelf",
      "furnitureName": "Long Hanging Shelf",
      "description": "Minimalist wall shelf made of high-quality wood with a long size, suitable for decorating the living room to look more elegant.",
      "price": 1590,
      "imgUrl": "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    },
    {
      "category": "shelf",
      "furnitureName": "Trigonometri Hanging Shelf",
      "description": "Wall shelf made of high-quality wood with metal supports in trigonometric shape, making it look minimalistic and elegant to be placed on any side of the room.",
      "price": 3590,
      "imgUrl": "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80"
    },
    {
      "category": "shelf",
      "furnitureName": "Bed-Side Shelf",
      "description": "A small shelf that also serves as a table, suitable to be placed on the side of your bed to store books you are reading along with accompanying drinks and snacks.",
      "price": 8290,
      "imgUrl": "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "lamp",
      "furnitureName": "Architec Lamp",
      "description": "Elegant architect lamp with a minimalist design, suitable for creating an ambient effect in the corner of the room or on your work desk.",
      "price": 3290,
      "imgUrl": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "lamp",
      "furnitureName": "Wooden Hanging Lamp",
      "description": "Hanging lamp with geometric style and wooden texture, resulting in an elegant and minimalist design.",
      "price": 2890,
      "imgUrl": "https://images.unsplash.com/photo-1530603907829-659ab5ec057b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "lamp",
      "furnitureName": "Mini Architec Lamp",
      "description": "Small-sized architect lamp with an elegant and minimalist design, suitable for placing on your work desk or study area.",
      "price": 2890,
      "imgUrl": "https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "vase",
      "furnitureName": "Clear Minimalist Vase",
      "description": "Clear glass flower vase with an elegant design, suitable for placing in the living room.",
      "price": 2490,
      "imgUrl": "https://images.unsplash.com/photo-1581912492723-688317ba2162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80"
    },
    {
      "category": "vase",
      "furnitureName": "Petal Vase",
      "description": "White glass flower vase with a unique design symbolizing tranquility and warmth, suitable for placing on the family table.",
      "price": 2890,
      "imgUrl": "https://images.unsplash.com/photo-1612620535624-f6695d4864bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    {
      "category": "vase",
      "furnitureName": "Hanano Vase",
      "description": "Clear glass flower vase with smoke-brown accents and a tapered tube design, creating a full yet minimalistic effect.",
      "price": 2690,
      "imgUrl": "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "drawer",
      "furnitureName": "Single Drawer Set",
      "description": "Single drawer with 3 levels, with the bottom part being the largest drawer, featuring a minimalist design suitable for placement in the family room or living room.",
      "price": 4290,
      "imgUrl": "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "table",
      "furnitureName": "Round Simple Table",
      "description": "Round table with a minimalist design, using wood for the legs and high-quality plastic for the tabletop, making it suitable for both indoor and outdoor use.",
      "price": 6590,
      "imgUrl": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    {
      "category": "decoration",
      "furnitureName": "Artificial Succulent Plant Set",
      "description": "Imitation succulent plants made of plastic with a 99% resemblance to real ones, suitable for decorating your work desk and providing a green ambiance to refresh your eyes.",
      "price": 990,
      "imgUrl": "https://images.unsplash.com/photo-1595351475754-8a520e0bc3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
    },
    {
      "category": "decoration",
      "furnitureName": "Artificial Cactus Set",
      "description": "Imitation cactus plants made of plastic with a 99% resemblance to real ones, suitable for decorating the family room and providing a refreshing touch in the midst of a desert.",
      "price": 1490,
      "imgUrl": "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "category": "decoration",
      "furnitureName": 'Poster "GET SHIT DONE"',
      "description": 'Poster with the text "GET SHIT DONE" in a minimalist design and high-quality wooden frame, suitable for display in your work space.',
      "price": 1790,
      "imgUrl": "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]
  
