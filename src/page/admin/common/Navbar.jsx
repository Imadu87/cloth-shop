import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0b1d3a] text-gray-300 flex justify-between items-center py-4 px-10 md:px-10  shadow-md sticky top-0 z-50">
      {/* Left side: Logo */}
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-xl text-white">Rabbah Fabrics</h1>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/admin/products" className="hover:text-white transition">
          Products
        </Link>
        <Link to="/admin/orders" className="hover:text-white transition">
          Orders
        </Link>
        <Link to="/admin/customers" className="hover:text-white transition">
          Customers
        </Link>
      </div>

      {/* Right side: Notifications + Profile */}
      <div className="flex items-center gap-4 relative">
        {/* Notification */}
        <button className="relative hover:text-white transition">
          <FaBell size={20} />
          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2"
          >
            <FaUserCircle size={28} className="rounded-full" />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-[#0b1d3a] text-gray-300 rounded shadow-lg">
              <Link
                to="/admin/settings"
                className="block px-4 py-2 hover:bg-gray-700 transition"
                onClick={() => setDropdownOpen(false)}
              >
                Settings
              </Link>
              <button
                onClick={() => alert("Logout clicked")}
                className="w-full text-left px-4 py-2 hover:bg-gray-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
