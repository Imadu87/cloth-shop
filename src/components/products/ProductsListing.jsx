import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { allProducts } from "../../db/products";
import Header from "./Header";
import ProductCard from "../../utils/ProductCard";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [priceFilter, setPriceFilter] = useState("");

  // Filter Logic
  const filteredProducts = allProducts
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) => {
      if (!priceFilter) return true;

      const [min, max] = priceFilter.split("-").map(Number);
      return p.price >= min && p.price <= max;
    });

  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Heading */}
        <Header />

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-4">
            
            {/* Search */}
            <div className="flex items-center border rounded-lg px-3 py-2 flex-1">
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
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsPage;