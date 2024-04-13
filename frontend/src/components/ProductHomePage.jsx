import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
const ProductHomePage = () => {
  const navigate = useNavigate();
  const furnitureapi = {
    payload: [
      {
        id: "frntrchc1",
        type: "couch",
        name: "Single Couch",
        description:
          "A small sofa for one person, perfect for relaxing on the porch, reading a book, or brewing warm tea.",
        currency: "Rp",
        price: 15990,
        img_link:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
      },
      {
        id: "frntrchc2",
        type: "couch",
        name: "Big Size Sofa",
        description:
          "A large-sized sofa suitable for gathering with family, using super-soft foam coated with fine and soft material for comfort on the skin.",
        currency: "Rp",
        price: 25990,
        img_link:
          "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80",
      },
      {
        id: "frntrchc3",
        type: "couch",
        name: "Big Size Leather Sofa",
        description:
          "A large-sized sofa suitable for gathering with family, using super-soft foam coated with high-quality leather material for comfort on the skin and crack resistance.",
        currency: "Rp",
        price: 45990,
        img_link:
          "https://images.unsplash.com/photo-1628512743826-2c28a508ad5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      },
      {
        id: "frntrchr1",
        type: "chair",
        name: "Single Black Chair",
        description:
          "A chair with wooden legs and high-quality plastic as the backrest, coated with super-soft foam for comfortable long-term use.",
        currency: "Rp",
        price: 5990,
        img_link:
          "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
      {
        id: "frntrchr2",
        type: "chair",
        name: "Simple Cafe Chair",
        description:
          "Tall wooden chair suitable for the kitchen with cafe-style, using high-quality wood for durability and resistance to decay.",
        currency: "Rp",
        price: 1990,
        img_link:
          "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrchr3",
        type: "chair",
        name: "Simple Metal Chair",
        description:
          "Chair made of rust-resistant metal material, strong and durable.",
        currency: "Rp",
        price: 2990,
        img_link:
          "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrshlf1",
        type: "shelf",
        name: "Long Hanging Shelf",
        description:
          "Minimalist wall shelf made of high-quality wood with a long size, suitable for decorating the living room to look more elegant.",
        currency: "Rp",
        price: 1590,
        img_link:
          "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      },
      {
        id: "frntrshlf2",
        type: "shelf",
        name: "Trigonometri Hanging Shelf",
        description:
          "Wall shelf made of high-quality wood with metal supports in trigonometric shape, making it look minimalistic and elegant to be placed on any side of the room.",
        currency: "Rp",
        price: 3590,
        img_link:
          "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80",
      },
      {
        id: "frntrshlf3",
        type: "shelf",
        name: "Bed-Side Shelf",
        description:
          "A small shelf that also serves as a table, suitable to be placed on the side of your bed to store books you are reading along with accompanying drinks and snacks.",
        currency: "Rp",
        price: 8290,
        img_link:
          "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrlmp1",
        type: "lamp",
        name: "Architec Lamp",
        description:
          "Elegant architect lamp with a minimalist design, suitable for creating an ambient effect in the corner of the room or on your work desk.",
        currency: "Rp",
        price: 3290,
        img_link:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrlmp2",
        type: "lamp",
        name: "Wooden Hanging Lamp",
        description:
          "Hanging lamp with geometric style and wooden texture, resulting in an elegant and minimalist design.",
        currency: "Rp",
        price: 2890,
        img_link:
          "https://images.unsplash.com/photo-1530603907829-659ab5ec057b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrlmp3",
        type: "lamp",
        name: "Mini Architec Lamp",
        description:
          "Small-sized architect lamp with an elegant and minimalist design, suitable for placing on your work desk or study area.",
        currency: "Rp",
        price: 2890,
        img_link:
          "https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrvs1",
        type: "vase",
        name: "Clear Minimalist Vase",
        description:
          "Clear glass flower vase with an elegant design, suitable for placing in the living room.",
        currency: "Rp",
        price: 2490,
        img_link:
          "https://images.unsplash.com/photo-1581912492723-688317ba2162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80",
      },
      {
        id: "frntrvs2",
        type: "vase",
        name: "Petal Vase",
        description:
          "White glass flower vase with a unique design symbolizing tranquility and warmth, suitable for placing on the family table.",
        currency: "Rp",
        price: 2890,
        img_link:
          "https://images.unsplash.com/photo-1612620535624-f6695d4864bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      },
      {
        id: "frntrvs3",
        type: "vase",
        name: "Hanano Vase",
        description:
          "Clear glass flower vase with smoke-brown accents and a tapered tube design, creating a full yet minimalistic effect.",
        currency: "Rp",
        price: 2690,
        img_link:
          "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrdrwr1",
        type: "drawer",
        name: "Single Drawer Set",
        description:
          "Single drawer with 3 levels, with the bottom part being the largest drawer, featuring a minimalist design suitable for placement in the family room or living room.",
        currency: "Rp",
        price: 4290,
        img_link:
          "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrtbl1",
        type: "table",
        name: "Round Simple Table",
        description:
          "Round table with a minimalist design, using wood for the legs and high-quality plastic for the tabletop, making it suitable for both indoor and outdoor use.",
        currency: "Rp",
        price: 6590,
        img_link:
          "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      },
      {
        id: "frntrdcr1",
        type: "decoration",
        name: "Artificial Succulent Plant Set",
        description:
          "Imitation succulent plants made of plastic with a 99% resemblance to real ones, suitable for decorating your work desk and providing a green ambiance to refresh your eyes.",
        currency: "Rp",
        price: 990,
        img_link:
          "https://images.unsplash.com/photo-1595351475754-8a520e0bc3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      },
      {
        id: "frntrdcr2",
        type: "decoration",
        name: "Artificial Cactus Set",
        description:
          "Imitation cactus plants made of plastic with a 99% resemblance to real ones, suitable for decorating the family room and providing a refreshing touch in the midst of a desert.",
        currency: "Rp",
        price: 1490,
        img_link:
          "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrdcr3",
        type: "decoration",
        name: 'Poster "GET SHIT DONE"',
        description:
          'Poster with the text "GET SHIT DONE" in a minimalist design and high-quality wooden frame, suitable for display in your work space.',
        currency: "Rp",
        price: 1790,
        img_link:
          "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    ],

    message: "Data sent successfully",
  };

  const [categoryArray] = useState([
    "all",
    "lamp",
    "decoration",
    "chair",
    "shelf",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredFurniture, setFilteredFurniture] = useState([]);

  useEffect(() => {
    setFilteredFurniture(() =>
      furnitureapi.payload.filter((furniture) => {
        // Filter by category (if not 'all' category)
        const categoryMatch =
          selectedCategory === "all" || furniture.type === selectedCategory;

        return categoryMatch;
      })
    );
  }, [selectedCategory]);
  return (
    <div className="w-full customsm:mt-20 mt-10 sm:mb-32  px-5 sm:px-20 lg:px-32 xl:px-40">
      <div className="flex w-full justify-between items-center ">
        <h1 className="font-volkhov text-[#254D4D] text-2xl customsm:text-3xl md:text-5xl">
          Products
        </h1>
        <div
          className=" text-[#254D4D] bg-gradient-to-r from-slate-100  via-slate-50 hover:font-medium hover:cursor-pointer to-white space-x-2 rounded-lg px-6 py-1 flex items-center "
          onClick={() => navigate("/shop")}
        >
          <h1>See All</h1>{" "}
          <h1 className="text-base customsm:text-xl sm:text-3xl">
            <IoIosArrowRoundForward />
          </h1>{" "}
        </div>
      </div>

      <div className="flex items-center justify-center my-5 uppercase font-roboto customsm:my-8 sm:my-12 lg:my-16 space-x-4 w-full">
        {categoryArray.map((el) => (
          <h1
            onClick={() => {
              setSelectedCategory((a) => el);
            }}
            className={
              selectedCategory == el
                ? "text-[#254D4D] font-medium hover:cursor-pointer"
                : "text-slate-400 hover:cursor-pointer"
            }
          >
            {el}
          </h1>
        ))}
      </div>

      {filteredFurniture.length > 0 && (
        <div className="w-full grid gap-4 sm:gap-10  grid-cols-1 customsm:grid-cols-2 lg:grid-cols-3 ">
          {filteredFurniture?.map((furniture, index) => {
            if (index > 4) {
              return <></>;
            } else
              return (
                <div className="col-span-1 h-96" key={index}>
                  <ProductCard furniture={furniture} />
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductHomePage;
