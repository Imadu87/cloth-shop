import React from "react";
import { allProducts } from "../db/products";
import ProductCard from "../layout/ProductCard";

const RelatedProducts = () => {
  return (
    <div className="mt-20 max-w-[1200px] mx-auto px-4 mb-4 md:mb-6">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">
        SHOP MORE HIT ARTICLES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
