import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full py-20 px-5 sm:px-12 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 gap-12 xl:gap-20  lg:grid-cols-2">
        <div className="col-span-1 flex flex-col space-y-5">
          <h1 className="text-4xl font-medium font-volkhov text-[#254D4D]">About Us</h1>
          <h1 className="text-xl text-[#254D4D]  font-roboto">
            Founded in 2003, Urban Dwellings has been a labor of love, born out
            of a passion for design and a desire to redefine the way people
            experience their homes.{" "}
          </h1>
          <h1 className="text-3xl pt-5 font-volkhov font-medium text-[#254D4D]">What Sets Us Apart</h1>
          <div className="grid sm:grid-cols-2 gap-5 grid-cols-1">
            <div className="col-span-1">
              <h1 className="text-xl text-[#254D4D] font-bold font-roboto pb-2">Quality Craftsmanship</h1>
              <h1 className="text-lg text-[#254D4D] font-roboto">
                We source materials meticulously to ensure durability and
                longevity.
              </h1>
            </div>
            <div className="col-span-1">
            <h1 className="text-xl text-[#254D4D] font-bold font-roboto pb-2">Unique Designs</h1>
            <h1 className="text-lg text-[#254D4D] font-roboto">
                Discover unique designs that capture the essence of different
                styles
              </h1>
            </div>
            <div className="col-span-1">
            <h1 className="text-xl text-[#254D4D] font-bold font-roboto pb-2">Customer-Centric Approach</h1>
            <h1 className="text-lg text-[#254D4D] font-roboto">
                Our team is dedicated to ensuring you have a seamless enjoyable
                shopping experience
              </h1>
            </div>
            <div className="col-span-1">
            <h1 className="text-xl text-[#254D4D] font-bold font-roboto pb-2">Sustainable Practices</h1>
            <h1 className="text-lg text-[#254D4D] font-roboto">
                Many of our products are crafted using sustainable, 
                eco-friendly manufacturing processes.
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <img src="/aboutus.jpg" className="w-full max-h-[460px]" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
