import React, { useState } from "react";
import SlideOver from "./SlideOver";
import { useLocation } from "react-router-dom";
import { IoFilterCircleOutline } from "react-icons/io5";

const ProductsFilterMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

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
            <input type="checkbox" /> In Stock (100)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Out of stock (0)
          </label>
        </div>
      ),
      onRemoveAll: () => console.log("Remove all Availability"),
      onApply: () => console.log("Apply Availability"),
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
            />
            <span>Rs</span>
            <input
              type="number"
              placeholder="To"
              className="border rounded-xl px-2 py-1 w-full"
            />
          </div>
        </div>
      ),
      onRemoveAll: () => console.log("Remove all Price"),
      onApply: () => console.log("Apply Price"),
    },
    {
      id: "sort",
      title: "Sort",
      content: (
        <ul className="flex flex-col gap-2 text-sm">
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
            <input type="radio" name="sort" className="mr-2" /> Price: low to high
          </li>
          <li className="px-3 py-2 hover:bg-gray-100">
            <input type="radio" name="sort" className="mr-2" /> Price: high to low
          </li>
        </ul>
      ),
      onRemoveAll: () => console.log("Remove all Sort"),
      onApply: () => console.log("Apply Sort"),
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
          <div className="flex gap-2 items-center">100 Products</div>
        </div>
      </div>

      <SlideOver
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        steps={steps}
      />
    </div>
  );
};

export default ProductsFilterMobile;
