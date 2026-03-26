import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaTimes,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo1.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo (Bigger) */}
        <img src={logo} alt="Logo" className="h-16 sm:h-18 md:h-20 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {/* <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-3 pr-8 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black text-sm"
            />
            <FaSearch className="absolute right-2 top-3 text-gray-500" />
          </div> */}

          <div className="flex items-center space-x-6">
            {/* Cart */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-black text-gray-700">
              <FaShoppingCart />
              <span>Cart</span>
            </div>

            {/* Sign In */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-black text-gray-700">
              <FaUser />
              <span>Sign In</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <FaBars className="text-xl text-gray-700" onClick={toggleSidebar} />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-3/4 max-w-xs shadow-xl z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <FaTimes className="text-xl text-gray-700" onClick={toggleSidebar} />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 px-6 py-4 text-gray-700 font-medium border-b">
          <li className="hover:text-black">
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="hover:text-black">
            <Link to="/products" onClick={handleLinkClick}>
              Products
            </Link>
          </li>
          <li className="hover:text-black">
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className="hover:text-black">
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart & Signin */}
        <div className="flex flex-col gap-4 px-6 py-6">
          <Link
            to="/cart"
            onClick={handleLinkClick}
            className="flex items-center gap-3 text-gray-700 hover:text-black"
          >
            <FaShoppingCart />
            Cart
          </Link>

          <Link
            to="/login"
            onClick={handleLinkClick}
            className="flex items-center gap-3 text-gray-700 hover:text-black"
          >
            <FaUser />
            Sign In
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleSidebar}
        />
      )}
    </nav>
  );
};

export default Navbar;
