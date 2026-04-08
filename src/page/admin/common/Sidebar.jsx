import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaClipboardList,
  FaTags,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const sidebarLinks = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin-dashboard" },
  {
    name: "Orders",
    icon: <FaClipboardList />,
    path: "/admin/orders",
  },
  { name: "Products", icon: <FaBoxOpen />, path: "/admin/products" },
  { name: "Categories", icon: <FaTags />, path: "/admin/categories" },
  { name: "Customers", icon: <FaUsers />, path: "/admin/customers" },
  { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
  { name: "Logout", icon: <FaSignOutAlt />, path: "/admin/logout" },
];

const AdminSidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-5 left-3 z-50">
        <button onClick={() => setMobileOpen(true)}>
          <RxHamburgerMenu size={24} className="text-gray-300" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/5 bg-[#0b1d3a] text-gray-300 transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="font-bold text-lg">Rubbah Fabrics</span>
          <button onClick={() => setMobileOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>

        <ul className="mt-4 flex flex-col gap-1">
          {sidebarLinks.map((link) =>
            link.children ? (
              <li key={link.name}>
                <button
                  onClick={() => toggleMenu(link.name)}
                  className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-800 rounded ${
                    openMenus[link.name] ? "bg-gray-800" : ""
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </button>
                {openMenus[link.name] &&
                  link.children.map((child) => (
                    <Link
                      to={child.path}
                      key={child.name}
                      className={`block px-6 py-2 rounded hover:bg-gray-700 ${
                        isActive(child.path) ? "bg-gray-700" : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded ${
                    isActive(link.path) ? "bg-gray-700" : ""
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:h-screen bg-[#0b1d3a] text-gray-300 fixed top-0 left-0 p-4">
        <div className="font-bold text-lg border-b border-gray-700 p-2">
          Admin Panel
        </div>
        <ul className="mt-4 flex flex-col gap-1">
          {sidebarLinks.map((link) =>
            link.children ? (
              <li key={link.name}>
                <button
                  onClick={() => toggleMenu(link.name)}
                  className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-800 rounded ${
                    openMenus[link.name] ? "bg-gray-800" : ""
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </button>
                {openMenus[link.name] &&
                  link.children.map((child) => (
                    <Link
                      to={child.path}
                      key={child.name}
                      className={`block px-6 py-2 rounded hover:bg-gray-700 ${
                        isActive(child.path) ? "bg-gray-700" : ""
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded ${
                    isActive(link.path) ? "bg-gray-700" : ""
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </aside>
    </>
  );
};

export default AdminSidebar;
