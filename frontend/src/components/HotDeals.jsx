import React from "react";

const HotDeals = () => {
  return (
    <div className="w-full customsm:mt-20 mt-10 sm:mt-32 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 px-5 sm:px-12  md:px-16 lg:px-20 ">
      <div className="col-span-1 flex space-y-3 flex-col mr-5">
        <h1 className="text-4xl font-volkhov text-[#254D4D]">
          Hot<br className="hidden xl:block"/> Deals For You
        </h1>
        <h1 className="text-slate-900">
        Explore exclusive offers for unbeatable discounts on stylish and quality pieces for your home.
        </h1>
      </div>
      <div className="col-span-1 pt-2 space-y-1 flex flex-col">
        <h1 className="text-2xl font-roboto text-[#254D4D]">
          2.5% Cashback
        </h1>
        <h1 className="text-slate-900">
        Elevate your space with cashback on every furniture purchase. Enjoy savings and style! </h1>
      </div>
      <div className="col-span-1 pt-2 space-y-1 flex flex-col">
        <h1 className="text-2xl font-roboto text-[#254D4D]">
          30-day Term
        </h1>
        <h1 className="text-slate-900">
        Stress-free furniture shopping with flexible 30-day terms. Discover comfort and design effortlessly. </h1>
      </div>
      <div className="col-span-1 pt-2 space-y-1 flex flex-col">
        <h1 className="text-2xl font-roboto text-[#254D4D]">
          Save Money
        </h1>
        <h1 className="text-slate-900">
        Smart shopping for budget-friendly, quality pieces. Transform your space stylishly and affordably. </h1>
      </div>
    </div>
  );
};

export default HotDeals;
