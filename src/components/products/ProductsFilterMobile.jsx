import React, { useState } from "react";
import SlideOver from "./SlideOver";

const ProductsFilterMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              className="border px-2 py-1 w-full"
            />
            <span>Rs</span>
            <input
              type="number"
              placeholder="To"
              className="border px-2 py-1 w-full"
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
          <li className="px-3 py-2 border rounded hover:bg-gray-100">Featured</li>
          <li className="px-3 py-2 border rounded hover:bg-gray-100">Best Selling</li>
          <li className="px-3 py-2 border rounded hover:bg-gray-100">A-Z</li>
          <li className="px-3 py-2 border rounded hover:bg-gray-100">Z-A</li>
          <li className="px-3 py-2 border rounded hover:bg-gray-100">Price: low to high</li>
          <li className="px-3 py-2 border rounded hover:bg-gray-100">Price: high to low</li>
        </ul>
      ),
      onRemoveAll: () => console.log("Remove all Sort"),
      onApply: () => console.log("Apply Sort"),
    },
  ];

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Products</h2>
        <button
          className="px-3 py-2 border rounded"
          onClick={() => setIsOpen(true)}
        >
          Filter & Sort
        </button>
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