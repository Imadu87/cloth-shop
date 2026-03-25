import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import ProductsPage from "./page/Products";
import Topbar from "./components/home/Topbar";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Topbar />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;