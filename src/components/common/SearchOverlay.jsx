import React from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

const SearchOverlay = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Blur background */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Search bar */}
      <div className="fixed top-[110px] left-0 w-full z-50 px-4">
        <div className="max-w-[900px] mx-auto bg-[#0b1d3a] rounded-full shadow-lg">
          <div className="flex items-center px-5 py-3 gap-3">
            
            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400"
              autoFocus
            />

            <FaTimes
              className="text-gray-400 cursor-pointer hover:text-white"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchOverlay;