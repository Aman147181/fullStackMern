import React from "react";

const NoProductsFound = () => {
  return (
    <div>
      <div className="flex flex-col space-y-6 ">
        <h1 className="text-5xl customsm:text-[60px] sm:text-[90px]   text-center font-volkhov text-[#345b92]">
          Oops!!
        </h1>
        <h1 className="uppercase text-center text-xl sm:text-2xl font-roboto font-bold">
          No Products Found
        </h1>
      </div>
      <h1 className=" text-center px-5 text-[#254D4D] text-base sm:text-xl mt-8  customsm:mt-10 sm:mt-16 font-roboto ">
        Your search did not match any product. please try again.
      </h1>
     
    </div>
  );
};

export default NoProductsFound;
