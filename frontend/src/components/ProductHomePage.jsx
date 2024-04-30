import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
const ProductHomePage = () => {
  const navigate = useNavigate();
  

  const [categoryArray] = useState([
    "all",
    "lamp",
    "decoration",
    "chair",
    "shelf",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allFurniture, setAllFurniture] = useState([]);
  const [filteredFurniture, setFilteredFurniture] = useState([]);
  useEffect(() => {
    // Fetch all furniture data from the backend
    axios.get("/api/furniture/allfurniture")
      .then((response) => setAllFurniture(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Filter furniture based on selected category and price range
    const filteredData = allFurniture.filter((furniture) => {
      
      const categoryMatch =
        selectedCategory === "all" || furniture.category === selectedCategory;
      return  categoryMatch;
    });
    setFilteredFurniture(filteredData);
  }, [selectedCategory, allFurniture]);
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
