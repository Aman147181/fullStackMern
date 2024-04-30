import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ furniture }) => {
  return (
    <div className="relative h-full w-full group">
      <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 opacity-0 bg-black bg-opacity-40 group-hover:opacity-100 p-2 flex flex-col items-start justify-end">
        <h2 className="text-lg text-white font-volkhov font-semibold">{furniture.furnitureName}</h2>
        <p className="text-sm line-clamp-2 font-roboto text-white">{furniture.description}</p>
        <p className="text-sm text-white font-roboto font-bold">{"Nrs. "}{furniture.price}</p>
      </div>
      <img src={furniture.imgUrl} className=" w-full h-full object-center object-cover" alt={furniture.furnitureName} />
      <div className="absolute top-1/3 right-3 flex items-center justify-center flex-col space-y-2 text-sm">
        <div className="bg-[#062338] w-7 h-7 text-white rounded-full flex items-center justify-center">
          <FaRegHeart />
        </div>
        <div className="bg-orange-100 w-7 h-7 text-[#062338] rounded-full flex items-center justify-center">
          <FiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
