import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {

  const [sidebar, setSidebar] = useState(false);
  return (
    <div >
      <Header sidebar={sidebar} setSidebar={setSidebar}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default App;
