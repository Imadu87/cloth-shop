import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ value, onChange, placeholder = "Search by name / ID" }) => {
  return (
    <div className="relative w-full sm:w-80">
      
      {/* Icon */}
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-9 pr-3 py-2 
        border border-gray-200 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 
        focus:border-[#0b1d3a]
        text-sm transition"
      />
    </div>
  );
};

export default SearchBox;