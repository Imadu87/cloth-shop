import React from "react";
import { allProducts } from "../../db/products";
import ProductCard from "../../utils/ProductCard";

const Products = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, isSale: true, discount: product.discount }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
