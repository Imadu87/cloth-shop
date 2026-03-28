import React from "react";
import Dropdown from "./Popup";

const ProductsFilter = () => {
  return (
    <div className="hidden md:block w-full max-w-[1200px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      <div className="flex flex-wrap justify-between items-center gap-4 pb-4">
        {/* Left Filters */}
        <div className="flex items-center gap-6 flex-wrap text-gray-500">
          <span>Filter:</span>

          {/* Availability */}
          <Dropdown title="Availability" dropdownClass="w-84">
            <div className="flex justify-between text-sm mb-3">
              <span>Selected 0</span>
              <button>Reset</button>
            </div>
            <hr className="mb-3" />
            <label className="flex items-center gap-2 mb-2">
              <input type="checkbox" /> In Stock (100)
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Out of stock (0)
            </label>
          </Dropdown>

          {/* Price */}
          <Dropdown title="Price" dropdownClass="w-84">
            <div className="flex justify-between text-sm mb-3">
              <span>The highest price is 6500.00</span>
              <button>Reset</button>
            </div>
            <hr className="mb-3" />
            <div className="flex gap-2 items-center">
              <span>Rs</span>
              <input
                type="number"
                placeholder="From"
                className="border rounded-lg px-2 py-1 w-full"
              />
              <span>Rs</span>
              <input
                type="number"
                placeholder="To"
                className="border rounded-lg px-2 py-1 w-full"
              />
            </div>
          </Dropdown>
        </div>

        {/* Right Sort */}
        <div className="flex items-center gap-4 text-gray-500">
          <span>Sort by:</span>

          <Dropdown title="Featured" dropdownClass="w-56 right-0">
            <ul className="text-sm">
              <li className="px-3 py-2 hover:bg-gray-100">Featured</li>
              <li className="px-3 py-2 hover:bg-gray-100">Best Selling</li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Alphabetically A-Z
              </li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Alphabetically Z-A
              </li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Price: low to high
              </li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Price: high to low
              </li>
            </ul>
          </Dropdown>

          <span className="text-sm text-gray-500">100 Products</span>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8 text-gray-500">
        <button className="px-3 py-1">{`<`}</button>
        <button className="px-3 py-1">1</button>
        <button className="px-3 py-1">2</button>
        <button className="px-3 py-1">3</button>
        <button className="px-3 py-1">4</button>
        <button className="px-3 py-1">{`>`}</button>
      </div>
    </div>
  );
};

export default ProductsFilter;
