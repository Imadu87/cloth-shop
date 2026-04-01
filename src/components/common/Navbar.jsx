import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaRegUser,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/logo/logo3.png";
import SearchOverlay from "./SearchOverlay";
import Cart from "../checkout/Cart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAtTop(false);
      } else {
        setAtTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuRow1 = [
    { label: "Home", path: "/" },
    { label: "Catalog", path: "/collections/all-products" },
    { label: "Contact", path: "/pages/contact" },
    {
      label: "ITALIAN BOSKI FLAT 50% OFF",
      path: "/collections/italian-boski-flat-50-off",
    },
    {
      label: "PREMIUM PAPER COTTON FLAT 50% OFF",
      path: "/collections/premium-paper-cotton-flat-50-off",
    },
    {
      label: "RAFALE WOOL FLAT 50% OFF",
      path: "/collections/rafale-wool-flat-50-off",
    },
  ];

  const menuRow2 = [
    {
      label: "ASAL DOUBLE GHORA BOSKI 33% OFF",
      path: "/collections/asal-double-ghora-boski-33-off",
    },
    {
      label: "PREMIUM ROYAL BOSKI 50% OFF",
      path: "/collections/premium-royal-boski-50-off",
    },
    {
      label: "UNIVERSAL WOOL FLAT 43% OFF",
      path: "/collections/universal-wool-flat-43-off",
    },
    {
      label: "CROSS HILL FLAT 39% OFF",
      path: "/collections/cross-hill-flat-39-off",
    },
  ];

  return (
    <header
      className={`bg-[#0b1d3a] text-gray-300 fixed left-0 w-full z-40
      transition-all duration-300
      ${atTop ? "top-9" : "top-0"}`}
    >
      {/* Top Row */}
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Menu */}
        <button
          className="lg:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Left Search */}
        <div className="hidden lg:block">
          <FaSearch
            className="cursor-pointer"
            onClick={() => setSearchOpen(true)}
          />
        </div>

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-14 md:h-16 w-20 md:w-30" />
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <FaSearch
            className="cursor-pointer lg:hidden"
            onClick={() => setSearchOpen(true)}
          />
          <div className="relative lg:hidden">
            <FaShoppingBag
              className="cursor-pointer"
              onClick={() => setCartOpen(true)}
            />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-3 h-3 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <Link to="/auth">
              <FaRegUser className="cursor-pointer hover:text-white" />
            </Link>
            <div className="relative">
              <FaShoppingBag
                className="cursor-pointer"
                onClick={() => setCartOpen(true)}
              />

              <span className="absolute -top-4 -right-2 bg-red-500  text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-col border-t border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex flex-wrap justify-center gap-6 text-sm">
          {menuRow1.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `hover:underline hover:text-gray-50 ${
                  isActive ? "underline text-gray-50" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto px-4 pb-3 flex flex-wrap justify-center gap-6 text-sm">
          {menuRow2.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `hover:underline hover:text-gray-50 ${
                  isActive ? "underline text-gray-50" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#0b1d3a] border-t border-gray-700 
        overflow-y-auto transition-all duration-300
        ${menuOpen ? "max-h-[calc(100vh-70px)] py-4" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-4 px-6 text-gray-300">
          {[...menuRow1, ...menuRow2].map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-all
        ${
          isActive ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5"
        }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-6 px-6 pt-4">
          <Link to="/auth">
            <div className="flex items-center gap-3 text-gray-400">
              <FaRegUser />
              <span>Login</span>
            </div>
          </Link>
        </div>
      </div>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Navbar;
