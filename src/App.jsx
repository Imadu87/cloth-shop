import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import OrderLayout from "./layout/OrderLayout";
import AdminLayout from "./layout/AdminLayout";

// User Pages
import Home from "./page/home/Home";
import ProductsPage from "./page/products/Products";
import ContactUs from "./page/contactus/ContactUs";
import ProductDetailPage from "./page/productDetail/ProductDetail";
import OrderSummary from "./page/order/OrderSummary";
import Auth from "./page/auth/Auth";
import Profile from "./page/order/components/Profile";
import ProfileSettings from "./page/order/components/Setting";

// Admin Pages
import AdminDashboard from "./page/admin/pages/adminDashboard/AdminDashboard";
import Orders from "./page/admin/pages/orders/Orders";
import AdminProductsPage from "./page/admin/pages/products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:category" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/pages/contact" element={<ContactUs />} />
        </Route>

        {/* Authentication Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        {/* Order Layout */}
        <Route element={<OrderLayout />}>
          <Route path="/order" element={<OrderSummary />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            path="/admin/pending-orders"
            element={<Orders title="Pending Orders" status="Pending" />}
          />
          <Route
            path="/admin/completed-orders"
            element={<Orders title="Completed Orders" status="Completed" />}
          />
          <Route
            path="/admin/cancelled-orders"
            element={<Orders title="Cancelled Orders" status="Cancelled" />}
          />
          <Route path="/admin/products" element={<AdminProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
