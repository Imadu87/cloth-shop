import React from "react";

const Breadcrumb = () => {
  return (
    <div className="text-sm text-gray-500 mb-6">
      <Link to="/products" className="hover:text-black">
        Shop
      </Link>
      <span className="mx-2">›</span>
      <span className="text-black font-medium">{product.name}</span>
    </div>
  );
};

export default Breadcrumb;
