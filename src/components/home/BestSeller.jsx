import React from "react";
import { bestSellers } from "../../db/products";
import ProductCard from "../../utils/ProductCard";

const BestSeller = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
          Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, isBestSeller: true }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSeller;