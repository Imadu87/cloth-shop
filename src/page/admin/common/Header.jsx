import React from "react";

const Header = ({ title, filteredObjects }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        {filteredObjects.length} Orders
      </span>
    </div>
  );
};

export default Header;
