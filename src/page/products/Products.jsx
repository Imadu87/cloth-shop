import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FilteredProductsPage from "./components/filter/ProductsFiltering";
import ProductsFilterMobile from "./components/filter/ProductsFilteringMobile";
import Pagination from "./components/Pagination";
import ProductCard from "../../components/products/ProductCard";
import { FaBoxOpen } from "react-icons/fa";
import Products from "../../components/products/Products";

const ProductsPage = () => {
  const { category } = useParams();

  const allProducts = useSelector((state) => state.products.products);

  const { availability, minPrice, maxPrice } = useSelector(
    (state) => state.filters,
  );

  // category filter first
  const categoryProducts = useMemo(() => {
    return category === "all-products"
      ? allProducts || []
      : (allProducts || []).filter((product) => product.category === category);
  }, [category, allProducts]);

  // apply redux filters
  const filteredProducts = useMemo(() => {
    let temp = [...categoryProducts];

    if (availability === "instock") {
      temp = temp.filter((p) => p.inStock > 0);
    }

    if (availability === "outofstock") {
      temp = temp.filter((p) => p.inStock === 0);
    }

    if (minPrice !== "" && minPrice !== null) {
      temp = temp.filter((p) => p.price >= minPrice);
    }

    if (maxPrice !== "" && maxPrice !== null) {
      temp = temp.filter((p) => p.price <= maxPrice);
    }

    return temp;
  }, [categoryProducts, availability, minPrice, maxPrice]);

  return (
    <div className="mb-4 md:mb-6">
      <FilteredProductsPage
        products={categoryProducts}
        filteredProducts={filteredProducts}
      />
      <ProductsFilterMobile
        products={categoryProducts}
        filteredProducts={filteredProducts}
      />

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
      <Products heading={"SHOP MORE HIT ARTICLES"} isBestSeller={true} />
    </div>
  );
};

export default ProductsPage;
