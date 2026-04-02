import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setAvailability,
  setMinPrice,
  setMaxPrice,
  resetPrice,
} from "../../../../store/slices/filterSlice";

import { IoFilterCircleOutline } from "react-icons/io5";

import SlideOver from "./SlideOver";

const ProductsFilterMobile = ({ products = [], filteredProducts = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  const { availability, minPrice, maxPrice } = useSelector(
    (state) => state.filters,
  );

  // counts
  const inStockCount = products.filter((p) => p.inStock > 0).length;
  const outStockCount = products.filter((p) => p.inStock === 0).length;

  const heading =
    location.pathname === "/"
      ? "HOME"
      : location.pathname
          .split("/")
          .filter(Boolean)
          .pop()
          .replace(/-/g, " ")
          .toUpperCase();

  const steps = [
    {
      id: "availability",
      title: "Availability",
      content: (
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={availability === "instock"}
              onChange={() => dispatch(setAvailability("instock"))}
            />{" "}
            In Stock ({inStockCount})
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={availability === "outofstock"}
              onChange={() => dispatch(setAvailability("outofstock"))}
            />{" "}
            Out of stock ({outStockCount})
          </label>
        </div>
      ),
      onRemoveAll: () => dispatch(setAvailability(null)),
      onApply: () => (setIsOpen(false)),
    },
    {
      id: "price",
      title: "Price",
      content: (
        <div className="flex flex-col gap-3">
          <span>The highest price range is 6500.00</span>
          <div className="flex gap-2 items-center">
            <span>Rs</span>
            <input
              type="number"
              placeholder="From"
              className="border rounded-xl px-2 py-1 w-full"
              value={minPrice || ""}
              onChange={(e) =>
                dispatch(
                  setMinPrice(
                    e.target.value === "" ? "" : Number(e.target.value),
                  ),
                )
              }
            />
            <span>Rs</span>
            <input
              type="number"
              placeholder="To"
              className="border rounded-xl px-2 py-1 w-full"
              value={maxPrice || ""}
              onChange={(e) =>
                dispatch(
                  setMaxPrice(
                    e.target.value === "" ? "" : Number(e.target.value),
                  ),
                )
              }
            />
          </div>
        </div>
      ),
      onRemoveAll: () => dispatch(resetPrice(null)),
      onApply: () => (setIsOpen(false)),
    },
    {
      id: "sort",
      title: "Sort",
      content: (
        <ul className="flex flex-col gap-2 text-sm ">
          <li className="px-3 py-2 hover:bg-gray-100">
            <input type="radio" name="sort" className="mr-2" /> Featured
          </li>
          <li className="px-3 py-2 hover:bg-gray-100">
            <input type="radio" name="sort" className="mr-2" /> Best Selling
          </li>
          <li className="px-3 py-2 hover:bg-gray-100">
            <input type="radio" name="sort" className="mr-2" /> A-Z
          </li>
          <li className="px-3 py-2 hover:bg-gray-100">
            <input type="radio" name="sort" className="mr-2" /> Z-A
          </li>
          <li className="px-3 py-2 hover:bg-gray-100">
            <input type="radio" name="sort" className="mr-2" /> Price: low to
            high
          </li>
          <li className="px-3 py-2 hover:bg-gray-100">
            <input type="radio" name="sort" className="mr-2" /> Price: high to
            low
          </li>
        </ul>
      ),
      onRemoveAll: () => console.log("Remove all Sort"),
      onApply: () => (setIsOpen(false)),
    },
  ];

  return (
    <div className="md:hidden">
      <div className="flex flex-col justify-between p-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">{heading}</h2>
        <div className="flex justify-between gap-2 items-center text-gray-500">
          <div className="flex gap-4 flex-wrap text-gray-500">
            <IoFilterCircleOutline className="text-2xl" />
            <span className="hover:underline" onClick={() => setIsOpen(true)}>
              Filter and Sort
            </span>
          </div>
          <div className="flex gap-2 items-center">
            {filteredProducts.length} Products
          </div>
        </div>
      </div>

      <SlideOver
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        steps={steps}
        filteredProducts={filteredProducts}
      />
    </div>
  );
};

export default ProductsFilterMobile;
