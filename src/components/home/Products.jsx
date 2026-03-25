import React from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../../db/products";
import ProductCard from "../../utils/ProductCard";

const Products = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {allProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                isSale: product.isSale || false,
                discount: product.discount || 0,
              }}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;