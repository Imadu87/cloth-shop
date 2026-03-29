import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

import Home from "./page/Home";
import ProductsPage from "./page/Products";
import ContactUs from "./page/ContactUs";
import ProductDetailPage from "./page/ProductDetail";
import OrderSummary from "./components/checkout/OrderSummary";
import Auth from "./page/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections/all" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/pages/contact" element={<ContactUs />} />
          <Route path="/order" element={<OrderSummary />} />
        </Route>

        {/* Authentication Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
