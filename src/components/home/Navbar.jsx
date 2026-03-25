import { FaBars, FaSearch } from "react-icons/fa";

import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 border-t border-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Cloth Shop Logo"
            className="h-16 w-auto sm:h-20 md:h-24 lg:h-32"
          />
        </div>
        {/* Center - Menu */}
        <ul className="hidden sm:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">Products</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Contact</li>
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

        {/* Mobile Menu Icon (optional for future) */}
        <div className="md:hidden">
          <FaBars className="text-gray-700" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
