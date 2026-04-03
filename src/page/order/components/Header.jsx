import React, { useState } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-4 border-b bg-white">
      <div className="flex items-center gap-5">
        {/* Left - Brand */}
        <h1 className="text-2xl font-semibold">Rabbah Fabrics</h1>

        {/* Orders */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/order">
            <button className="hover:underline">Orders</button>
          </Link>
        </div>
        {/* Profile */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/profile">
            <button className="hover:underline">Profile</button>
          </Link>
        </div>
      </div>

      {/* Right - Profile */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 hover:underline"
        >
          <FaUserCircle className="text-xl" />
          <FaChevronDown className="text-sm" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md">
            <Link to="/profile">
              <button className="block md:hidden w-full text-left px-4 py-2 hover:text-gray-500">
                Profile
              </button>
            </Link>
            <Link to="/order">
              <button className="block md:hidden w-full text-left px-4 py-2 hover:text-gray-500">
                Orders
              </button>
            </Link>
            <Link to="/settings">
            <button className="block w-full text-left px-4 py-2 hover:text-gray-500">
              Settings
            </button>
            </Link>
            <button className="block w-full text-left px-4 py-2 hover:text-gray-500">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
