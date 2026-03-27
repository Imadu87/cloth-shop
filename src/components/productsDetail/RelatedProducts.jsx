import React from "react";
import { allProducts } from "../../db/products";
import ProductCard from "../../utils/ProductCard";

const RelatedProducts = () => {
  return (
    <div className="mt-20">
      <h2 className="text-xl font-semibold mb-6 text-center">You might also like</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
