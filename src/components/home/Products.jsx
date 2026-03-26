import React from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../../db/products";
import ProductCard from "../../utils/ProductCard";

const Products = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
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
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-2xl font-semibold transition duration-300"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;