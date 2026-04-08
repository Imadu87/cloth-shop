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
import AdminProductsPage from "./page/admin/pages/products/AdminProductsPage";
import AdminOrdersPage from "./page/admin/pages/orders/AdminOrdersPage";
import AdminCategoryPage from "./page/admin/pages/categories/AdminCategoryPage";
import AdminCustomerPage from "./page/admin/pages/customer/AdminCustomerPage";
import AdminSettingsPage from "./page/admin/pages/setting/AdminSettingPage";
import AdminLogoutPage from "./page/admin/pages/logout/AdminLogoutPage";

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
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/categories" element={<AdminCategoryPage />} />
          <Route path="/admin/customers" element={<AdminCustomerPage />} />
          <Route path="/admin/settings" element={<AdminSettingsPage />} />
          <Route path="/admin/logout" element={<AdminLogoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
