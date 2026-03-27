import React, { useState } from "react";
import { FaBoxOpen, FaSearch } from "react-icons/fa";

import { allProducts } from "../../db/products";
import Header from "./Header";
import ProductCard from "../../utils/ProductCard";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [priceFilter, setPriceFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  // Filter Logic
  const filteredProducts = allProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => {
      if (!priceFilter) return true;
      const [min, max] = priceFilter.split("-").map(Number);
      return p.price >= min && p.price <= max;
    });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <Header />

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div
            className="w-full max-w-[950px] 
                  bg-white border border-gray-200 
                  shadow-sm rounded-2xl 
                  p-4 md:p-5 
                  flex flex-col md:flex-row gap-4"
          >
            {/* Search */}
            <div
              className="flex items-center bg-gray-50 
                    border border-gray-200 
                    rounded-xl px-4 py-2 flex-1
                    focus-within:ring-2 focus-within:ring-black/5"
            >
              <FaSearch className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                className="appearance-none bg-gray-50 
                   border border-gray-200
                   rounded-xl px-4 py-2.5 pr-10
                   text-gray-700
                   hover:border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-black/5
                   transition"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
              </select>

              {/* Arrow */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                ▼
              </span>
            </div>

            {/* Price Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-gray-50 
                   border border-gray-200
                   rounded-xl px-4 py-2.5 pr-10
                   text-gray-700
                   hover:border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-black/5
                   transition"
                value={priceFilter}
                onChange={(e) => {
                  setPriceFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">Price</option>
                <option value="0-1000">0 - 1000</option>
                <option value="1000-2000">1000 - 2000</option>
                <option value="2000-3000">2000 - 3000</option>
                <option value="3000-4000">3000 - 4000</option>
              </select>

              {/* Arrow */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <FaBoxOpen className="text-4xl text-gray-300 mb-3" />
              <h3 className="text-xl font-semibold text-gray-700">
                No Products Found
              </h3>
              <p className="text-gray-400 mt-1 text-sm">
                Try changing search or filters
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50`}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
