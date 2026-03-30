import React from "react";
import { allProducts } from "../components/db/products";

import { useParams } from "react-router-dom";

import FilteredProductsPage from "../components/shared/filter/ProductsFiltering";
import ProductsFilterMobile from "../components/shared/filter/ProductsFilteringMobile";
import Pagination from "../components/products/Pagination";
import ProductCard from "../components/layout/ProductCard";
import { FaBoxOpen } from "react-icons/fa";
import RelatedProducts from "../components/productsDetail/RelatedProducts";

const Products = () => {
  const { category } = useParams();

  const filteredProducts =
    category === "all-products"
      ? allProducts
      : allProducts.filter((product) => product.category === category);

  return (
    <div className="mb-4 md:mb-6">
      <FilteredProductsPage />
      <ProductsFilterMobile />
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  isSale: product.isSale || false,
                  discount: product.discount || "",
                }}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <FaBoxOpen className="text-5xl text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-700">
                No Products Found
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>

      <Pagination />

      <RelatedProducts />
    </div>
  );
};

export default Products;
