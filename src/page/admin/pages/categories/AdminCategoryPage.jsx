import React, { useState } from "react";

import Header from "../../common/Header";
import SearchBox from "../../common/SearchBox";
import FilterDropdown from "../../common/FilterDropdown";
import { category } from "../../../../components/db/products";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import ViewModal from "../../modals/ViewModal";
import DeleteModal from "../../modals/DeleteModal";
import FormModal from "../../modals/FormModal";

const AdminCategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [editCategory, setEditCategory] = useState(null);

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredCategory = category
    // Status Filter
    .filter((cat) => {
      if (!filter) return true;
      return cat.status.toLowerCase() === filter;
    })

    // Search Filter
    .filter((cat) => {
      if (!search) return true;

      const term = search.toLowerCase();

      return (
        cat.id?.toLowerCase().includes(term) ||
        cat.name?.toLowerCase().includes(term) ||
        cat.slug?.toLowerCase().includes(term)
      );
    });

  // Delete
  const handleDelete = (cat) => {
    console.log("Deleting Category:", cat);
    setDeleteCategory(null);
  };
  // Edit
  const handleEdit = (cat) => {
    setEditCategory(cat);
    setOpen(true);
  };

  // Add
  const handleAdd = () => {
    setEditCategory(null);
    setOpen(true);
  };

  // Save
  const handleSave = (cat) => {
    if (editCategory) {
      console.log("Updating Category:", cat);
    } else {
      console.log("Adding new Category:", cat);
    }
  };

  const categoryFields = [
    { key: "name", label: "Category Name" },
    { key: "slug", label: "Slug" },
    { key: "productCount", label: "Products" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="p-6 md:ml-64">
      {/* Header  */}
      <Header title={"Category"} filteredObjects={filteredCategory} />

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="w-full md:w-1/2">
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <FilterDropdown
          selected={filter}
          onChange={setFilter}
          options={[
            { label: "All", value: "" },
            { label: "Active", value: "active" },
            { label: "Hidden", value: "hidden" },
          ]}
        />
      </div>

      {/* Add Button */}
      <div className="flex justify-end">
        <button
          onClick={() => handleAdd()}
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
              {/* <th className="hidden md:table-cell p-4 text-left">Image</th> */}
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="hidden md:table-cell p-4 text-left">Slug</th>
              <th className="hidden md:table-cell p-4 text-left">Products</th>
              <th className="hidden md:table-cell p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCategory.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="7">
                  No Categories Found
                </td>
              </tr>
            ) : (
              filteredCategory.map((cat) => {
                const badgeColor =
                  cat.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600";

                return (
                  <tr
                    key={cat.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* Image */}
                    {/* <td className="hidden md:table-cell p-4">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-14 h-14 object-cover rounded"
                      />
                    </td> */}

                    {/* ID */}
                    <td className="p-4 font-medium">{cat.id}</td>

                    {/* Name */}
                    <td className="p-4">{cat.name}</td>

                    {/* Slug */}
                    <td className="hidden md:table-cell p-4">{cat.slug}</td>

                    {/* Product Count */}
                    <td className="hidden md:table-cell p-4">
                      {cat.productCount}
                    </td>

                    {/* Status */}
                    <td className="hidden md:table-cell p-4">
                      <span
                        className={`${badgeColor} px-3 py-1 rounded-full text-xs`}
                      >
                        {cat.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        {/* View */}
                        <button
                          onClick={() => setSelectedCategory(cat)}
                          className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                        >
                          <FaEye />
                        </button>

                        {/* Edit */}
                        <button
                          onClick={() => handleEdit(cat)}
                          className="p-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100"
                        >
                          <FaEdit />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => setDeleteCategory(cat)}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {open && (
        <FormModal
          title={editCategory ? "Edit Category" : "Add Category"}
          fields={categoryFields.filter((f) => !f.hideInForm)}
          data={editCategory}
          onClose={() => setOpen(false)}
          onSubmit={handleSave}
        />
      )}

      {/* View Modal */}
      {selectedCategory && (
        <ViewModal
          title="Category Details"
          data={selectedCategory}
          badge={{
            text: selectedCategory?.status,
            class:
              selectedCategory?.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600",
          }}
          fields={categoryFields}
          onClose={() => setSelectedCategory(null)}
        />
      )}

      {/* Delete View */}
      {deleteCategory && (
        <DeleteModal
          title={"Delete Category"}
          itemName={deleteCategory?.name}
          onClose={() => setDeleteCategory(null)}
          onConfirm={() => handleDelete(deleteCategory)}
        />
      )}
      
    </div>
  );
};

export default AdminCategoryPage;
