import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../page/order/components/Header";

const OrderLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-6 py-4">
        <Header />
      </header>

      <Outlet />
    </div>
  );
};

export default OrderLayout;
