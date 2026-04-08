import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

import { allProducts as products } from "../../../../components/db/products";
import SearchBox from "../../common/SearchBox";
import FilterDropdown from "../../common/FilterDropdown";
import ViewModal from "../../modals/ViewModal";
import DeleteModal from "../../modals/DeleteModal";
import FormModal from "../../modals/FormModal";
import Header from "../../common/Header";

const AdminProductsPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const [open, setOpen] = useState(false);

  // Edit
  const handleEdit = (product) => {
    setEditProduct(product);
    setOpen(true);
  };

  // Add
  const handleAdd = () => {
    setEditProduct(null);
    setOpen(true);
  };

  // Delete
  const handleDelete = (product) => {
    console.log("Deleting product:", product);
    setDeleteProduct(null);
  };

  // Save
  const handleSave = (product) => {
    if (editProduct) {
      console.log("Updating product:", product);
    } else {
      console.log("Adding new product:", product);
    }
  };

  // Filtered Products
  const filteredProducts = products
    .filter((prod) => {
      if (filter === "inStock") return prod.inStock > 0;
      if (filter === "outOfStock") return prod.inStock === 0;
      return true;
    })
    .filter((prod) => {
      const term = search.toLowerCase();
      return (
        prod.id.toLowerCase().includes(term) ||
        prod.name.toLowerCase().includes(term)
      );
    });

  // Fields (single source of truth)
  const productFields = [
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price", type: "number" },
    { key: "discount", label: "Discount", type: "number" },
    { key: "inStock", label: "Stock", type: "number" },

    // sirf view me show hoga
    { key: "saleQuantity", label: "Sold", hideInForm: true },

    { key: "season", label: "Season" },
    { key: "material", label: "Material" },
    { key: "length", label: "Length" },
    { key: "width", label: "Width" },

    {
      key: "description",
      label: "Description",
      type: "textarea",
      full: true,
    },

    // sirf form me show hoga
    {
      key: "image1",
      label: "Image URL",
      type: "file",
      hideInView: true,
    },
  ];

  return (
    <div className="p-6 md:ml-64">
      {/* Header */}
      <Header title={"Products"} filteredObjects={filteredProducts} />

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="w-full md:w-1/2">
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <FilterDropdown
          options={[
            { label: "All Products", value: "" },
            { label: "In Stock", value: "inStock" },
            { label: "Out of Stock", value: "outOfStock" },
          ]}
          selected={filter}
          onChange={setFilter}
        />
      </div>

      {/* Add Button */}
      <div className="flex justify-end">
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700"
        >
          Add Product
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border shadow-sm rounded-xl overflow-x-auto mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="hidden md:table-cell p-4 text-left">Image</th>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="hidden md:table-cell p-4 text-left">Category</th>
              <th className="hidden md:table-cell p-4 text-left">Price</th>
              <th className="hidden md:table-cell p-4 text-left">Stock</th>
              <th className="hidden md:table-cell p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="7">
                  No Products Found
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="hidden md:table-cell p-4">
                    <img
                      src={product.image1}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>

                  <td className="p-4">{product.id}</td>
                  <td className="p-4">{product.name}</td>
                  <td className="hidden md:table-cell p-4">
                    {product.category}
                  </td>
                  <td className="hidden md:table-cell p-4">
                    Rs {product.price}
                  </td>
                  <td className="hidden md:table-cell p-4">
                    {product.inStock}
                  </td>

                  <td className="hidden md:table-cell p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        product.inStock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.inStock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>

                  <td className="p-4 flex justify-center gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => handleEdit(product)}
                      className="p-2 bg-yellow-50 text-yellow-600 rounded-lg"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => setDeleteProduct(product)}
                      className="p-2 bg-red-50 text-red-600 rounded-lg"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {open && (
        <FormModal
          title={editProduct ? "Edit Product" : "Add Product"}
          fields={productFields.filter((f) => !f.hideInForm)}
          data={editProduct}
          onClose={() => setOpen(false)}
          onSubmit={handleSave}
        />
      )}

      {/* View Modal */}
      {selectedProduct && (
        <ViewModal
          title="Product Details"
          data={selectedProduct}
          imageKey="image1"
          badge={{
            text: selectedProduct?.inStock > 0 ? "In Stock" : "Out of Stock",
            class:
              selectedProduct?.inStock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700",
          }}
          fields={productFields.filter((f) => !f.hideInView)}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Delete Modal */}
      {deleteProduct && (
        <DeleteModal
          title="Delete Product"
          itemName={deleteProduct?.name}
          onClose={() => setDeleteProduct(null)}
          onConfirm={() => handleDelete(deleteProduct)}
        />
      )}
    </div>
  );
};

export default AdminProductsPage;
