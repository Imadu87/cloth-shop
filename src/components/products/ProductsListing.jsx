import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

import { allProducts } from "../../db/products";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [priceFilter, setPriceFilter] = useState("");

  // Filter Logic
  const filteredProducts = allProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => {
      if (!priceFilter) return true;

      const [min, max] = priceFilter.split("-").map(Number);
      return p.price >= min && p.price <= max;
    });

  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2">Our Products</h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Premium quality men taan kapra aur chadar best price par available hai.
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">

          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-1/2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Latest Dropdown */}
          <select
            className="border rounded-lg px-4 py-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>

          {/* Price Filter */}
          <div className="relative">
            <select
              className="border rounded-lg px-4 py-2"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="">Price</option>
              <option value="0-1000">0 - 1000</option>
              <option value="1000-2000">1000 - 2000</option>
              <option value="2000-3000">2000 - 3000</option>
              <option value="3000-4000">3000 - 4000</option>
            </select>
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-700 font-medium mt-1">
                  RS {product.price}
                </p>

                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsPage;