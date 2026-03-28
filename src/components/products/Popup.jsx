import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ title, children, buttonClass = "", dropdownClass = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 ${buttonClass}`}
      >
        {title} <FaChevronDown size={12} />
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4 z-20 ${dropdownClass}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;