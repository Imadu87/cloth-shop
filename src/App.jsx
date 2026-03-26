import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import ProductsPage from "./page/Products";
import Topbar from "./utils/Topbar";
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import AboutPage from "./page/About";
import ContactUs from "./page/ContactUs";
import FloatingWhatsApp from "./utils/FloatingWhatsapp";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
