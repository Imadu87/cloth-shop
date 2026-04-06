import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
// import AddProductModal from "./components/AddProductModal";
// import ProductViewModal from "./components/ProductViewModal";

import { allProducts as products } from "../../../../components/db/products";
import SearchBox from "../orders/components/SearchBox";
import FilterDropdown from "./components/FilterDropdown";

const AdminProductsPage = () => {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Filtered Products logic
  const filteredProducts = products
    .filter((prod) => {
      if (filter === "inStock") return prod.inStock > 0;
      if (filter === "outOfStock") return prod.inStock === 0;
      return true; // all
    })
    .filter((prod) => {
      // Search by id or name
      const searchTerm = search.toLowerCase();
      return (
        prod.id.toLowerCase().includes(searchTerm) ||
        prod.name.toLowerCase().includes(searchTerm)
      );
    });

  return (
    <div className="p-6 md:ml-64">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="flex items-center gap-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {filteredProducts.length} Products
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-4">
        {/* Search Box */}
        <div className="w-full md:w-1/2">
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter Dropdown */}
        <div className="w-full md:w-auto">
          <FilterDropdown
            options={[
              { label: "All Products", value: "all" },
              { label: "In Stock", value: "inStock" },
              { label: "Out of Stock", value: "outOfStock" },
            ]}
            selected={filter}
            onChange={setFilter}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition"
        >
          Add Product
        </button>
      </div>
      
      {/* Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-x-auto mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Product ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="8">
                  No Products Found
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4">
                    <img
                      src={product.image1}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="p-4 font-medium">{product.id}</td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">Rs {product.price}</td>
                  <td className="p-4">{product.inStock}</td>
                  <td className="p-4">
                    <span
                      className={`${
                        product.inStock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-3 py-1 rounded-full text-xs`}
                    >
                      {product.inStock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="p-4 flex justify-center gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                    >
                      <FaEye />
                    </button>
                    <button className="p-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition">
                      <FaEdit />
                    </button>
                    <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {/* {selectedProduct && (
        <ProductViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )} */}

      {/* {showAddModal && <AddProductModal onClose={() => setShowAddModal(false)} />} */}
    </div>
  );
};

export default AdminProductsPage;
