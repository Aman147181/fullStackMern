import React, { useState, useEffect } from "react";
import { Slider, Pagination } from "@nextui-org/react";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import NoProductsFound from "../components/NoProductsFound";
import { RiFilterOffFill } from "react-icons/ri";
import { RiFilterFill } from "react-icons/ri";
import axios from "axios";
const Shop = () => {
  const [value, setValue] = useState([100, 60000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryArray] = useState([
    "all",
    "couch",
    "table",
    "lamp",
    "vase",
    "decoration",
    "chair",
    "shelf",
    "drawer",
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [furnitureToShow, setFurnitureToShow] = useState([]);
  const [filteredFurniture, setFilteredFurniture] = useState([]);
  const [allFurniture, setAllFurniture] = useState([]);
  const [furnituresPerPage] = useState(6);

  useEffect(() => {
    // Fetch all furniture data from the backend
    axios.get("/api/furniture/allfurniture")
      .then((response) => setAllFurniture(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Filter furniture based on selected category and price range
    const filteredData = allFurniture.filter((furniture) => {
      const priceInRange =
        furniture.price >= value[0] && furniture.price <= value[1];
      const categoryMatch =
        selectedCategory === "all" || furniture.category === selectedCategory;
      return priceInRange && categoryMatch;
    });
    setFilteredFurniture(filteredData);
  }, [selectedCategory, value, allFurniture]);

  useEffect(() => {
    // Calculate the current page of furniture to display
    const indexOfLastItem = currentPage * furnituresPerPage;
    const indexOfFirstItem = indexOfLastItem - furnituresPerPage;
    setFurnitureToShow(filteredFurniture.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, filteredFurniture, furnituresPerPage]);

  useEffect(() => {
    // Reset current page to 1 when price range changes
    setCurrentPage(1);
  }, [value]);
  const [filter, setFilter] = useState(false);
  return (
    <div className="py-20 pb-5 min-h-screen">
      <div className="flex flex-col w-full mt-10 space-y-5">
        <div className="flex justify-between w-full items-center md:hidden  px-5 sm:px-12">
          <div
            className="text-xl text-[#062338] flex hover:cursor-pointer items-center space-x-2 "
            onClick={() => setFilter((el) => !el)}
          >
            <h1 className="font-roboto font-medium">Filter</h1>{" "}
            {filter ? <RiFilterOffFill /> : <RiFilterFill />}
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 w-full gap-6 relative sm:gap-10 px-5 sm:px-12 md:px-16  lg:px-20">
          <div
            className={`absolute bg-white z-10 flex w-60 pt-0 p-12 pr-6 border-slate-200 border border-t-0 rounded-b-md shadow-md md:hidden flex-col transform transition-transform duration-500 ease-in-out ${
              filter ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h1 className="font-roboto font-semibold text-[#062338] mb-2">
              Filter By Price (Nrs)
            </h1>
            <Slider
              disableThumbScale={true}
              showTooltip={true}
              size="md"
              step={100}
              maxValue={100000}
              minValue={0}
              value={value}
              onChange={setValue}
              className="max-w-sm"
            />
            <h1 className="font-roboto font-semibold text-[#062338] mt-5 mb-2">
              Product Category
            </h1>
            <div className="flex flex-col w-full">
              {categoryArray.map((el) => (
                <h1
                  onClick={() => {
                    setSelectedCategory((a) => el);
                    setCurrentPage(1);
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
          </div>
          <div className="md:col-span-1 max-w-64 md:block hidden ">
            <div className="w-full fixed max-w-[170px] lg:max-w-56 xl:max-w-64 top-32 px-2">
              <h1 className="font-roboto font-semibold text-[#062338] mb-2">
                Filter By Price (Nrs)
              </h1>
              <Slider
                disableThumbScale={true}
                showTooltip={true}
                size="md"
                step={100}
                maxValue={100000}
                minValue={0}
                value={value}
                onChange={setValue}
                className="max-w-sm"
              />
              <h1 className="font-roboto font-semibold text-[#062338] mt-5 mb-2">
                Product Category
              </h1>
              <div className="flex flex-col w-full">
                {categoryArray.map((el) => (
                  <h1
                    onClick={() => {
                      setSelectedCategory((a) => el);
                      setCurrentPage(1);
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
            </div>
          </div>

          {filteredFurniture.length > 0 && (
            <div className="col-span-3 flex flex-col items-center  space-y-3">
              <div className="  w-full grid gap-4 sm:gap-10  grid-cols-1 customsm:grid-cols-2 xl:grid-cols-3">
                {furnitureToShow?.map((furniture, index) => (
                  <div className="col-span-1  h-96" key={index}>
                    <ProductCard furniture={furniture} />
                  </div>
                ))}
              </div>

              <Pagination
                variant="light"
                showControls
                radius="full"
                showShadow
                color="primary"
                page={currentPage}
                total={Math.ceil(filteredFurniture?.length / furnituresPerPage)}
                onChange={setCurrentPage}
              />
            </div>
          )}
          {filteredFurniture.length == 0 && (
            <div className="col-span-3 flex items-center justify-center">
              <NoProductsFound />
            </div>
          )}
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Shop;
