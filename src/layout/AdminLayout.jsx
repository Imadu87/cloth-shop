import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../page/admin/common/Sidebar";
import AdminNavbar from "../page/admin/common/Navbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <AdminNavbar />
        <Sidebar />

      <Outlet />
    </div>
  );
};

export default AdminLayout;
