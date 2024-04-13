import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import HotDeals from "../components/HotDeals";
import AboutUs from "../components/AboutUs";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import ProductHomePage from "../components/ProductHomePage";
const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <HotDeals />
      <AboutUs />
      <ProductHomePage/>
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
