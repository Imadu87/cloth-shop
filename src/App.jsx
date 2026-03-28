import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import ProductsPage from "./page/Products";
import Topbar from "./utils/Topbar";
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import ContactUs from "./page/ContactUs";
import FloatingWhatsApp from "./utils/FloatingWhatsapp";
import ScrollToTop from "./utils/ScrollToTop";
import ProductDetailPage from "./page/ProductDetail";
import SupportSection from "./utils/SupportSection";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <div className="pt-[100px] lg:pt-[180px]">
        <SupportSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/all" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/pages/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <FloatingWhatsApp />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
