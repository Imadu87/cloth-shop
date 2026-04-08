import React from "react";
import { FaSearch } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

const SearchBox = ({ value, onChange, placeholder = "Search by name / ID" }) => {
  const handleClear = () => {
    onChange({ target: { value: "" } });
  };

  return (
    <div className="relative w-full sm:w-80">
      
      {/* Search Icon */}
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-9 pr-9 py-2 
        border border-gray-200 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]/20 
        focus:border-[#0b1d3a]
        text-sm transition"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 
          text-gray-400 hover:text-gray-600"
        >
          <VscClose size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBox;