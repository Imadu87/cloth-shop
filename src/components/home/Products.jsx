import React from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../db/products";
import ProductCard from "../layout/ProductCard";

const Products = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Featured products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {allProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                isSale: product.isSale || false,
                discount: product.discount || "",
              }}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            to="/collections/all-products"
            className="bg-[#0b1d3a] hover:bg-black text-white px-8 py-3 rounded-2xl font-semibold transition duration-300"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;