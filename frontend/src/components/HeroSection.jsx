import React from "react";
import { Image } from "@nextui-org/react";
const HeroSection = () => {
  return (
    <div className="relative  sm:pl-56 lg:pl-72 xl:pl-96">
      <Image src="/dotGrid.png" className="absolute top-32 sm:left-12 md:left-16 lg:left-20 hidden sm:block"/>
      <div
        className="w-full h-[600px] sm:h-[860px] pt-20 bg-no-repeat sm:bg-cover bg-center bg-cover   "
        style={{ backgroundImage: "url( /banner.jpg )" }}
      >
        <div className=" max-w-lg w-full absolute sm:top-72 left-0 sm:left-12 md:left-16 lg:left-20  top-44   pt-5 sm:pt-10 p-6 pl-5  sm:pl-0  sm:bg-white/80 sm:backdrop-blur-md    flex flex-col space-y-3 items-start">
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl sm:text-[#254D4D] text-white font-volkhov md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.1] ">
            We Help You <br /> Make Modern Interior
          </h1>
          <h1 className="xl:text-3xl md:text-2xl text-lg leading-5 sm:text-[#254D4D]  text-white  p-0  pt-5 md:pt-8 lg:pt-10 font-roboto">
            We will help you make an elegant and
            luxurious  interior design by professional
             interior designer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
