import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close sidebar on menu click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="w-full bg-gray-100 border-t border-gray-200 relative z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Cloth Shop Logo"
            className="h-16 w-auto sm:h-20 md:h-24 lg:h-32"
          />
        </div>

        {/* Center - Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-gray-900 cursor-pointer">
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            <Link to="/products" onClick={handleLinkClick}>Products</Link>
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>

        {/* Right Side - Search Bar */}
        <div className="relative hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="pl-3 pr-8 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
          />
          <FaSearch className="absolute right-2 top-1.5 text-gray-500" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FaBars
            className="text-gray-700 text-xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-3/4 max-w-xs shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <FaTimes
            className="text-gray-700 text-xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 p-4 text-gray-700 font-medium">
          <li className="hover:text-gray-900 cursor-pointer">
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            <Link to="/products" onClick={handleLinkClick}>Products</Link>
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleSidebar}
        />
      )}
    </nav>
  );
};

export default Navbar;