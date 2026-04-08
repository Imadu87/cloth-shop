import React, { useState } from "react";
import Header from "../../common/Header";
import SearchBox from "../../common/SearchBox";
import FilterDropdown from "../../common/FilterDropdown";

import { customers } from "../../../../components/db/products";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import FormModal from "../../modals/FormModal";
import ViewModal from "../../modals/ViewModal";
import DeleteModal from "../../modals/DeleteModal";

const AdminCustomerPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [deleteCustomer, setDeleteCustomer] = useState(null);
  const [editCustomer, setEditCustomer] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [open, setOpen] = useState(false);

  // Fields
  const customerFields = [
    { key: "name", label: "Customer Name" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "city", label: "City" },
    { key: "address", label: "Address", type: "textarea", full: true },

    // form only
    { key: "avatar", label: "Profile Image", type: "file", hideInView: true },

    // view only
    { key: "orders", label: "Total Orders", hideInForm: true },

    { key: "status", label: "Status" },
  ];

  const filteredCustomers = customers
    // Status Filter
    .filter((customer) => {
      if (!filter) return true;
      return customer.status.toLowerCase() === filter;
    })

    // Search Filter
    .filter((customer) => {
      if (!search) return true;

      const term = search.toLowerCase();

      return (
        customer.id?.toLowerCase().includes(term) ||
        customer.name?.toLowerCase().includes(term)
      );
    });

  // Edit
  const handleEdit = (customer) => {
    setEditCustomer(customer);
    setOpen(true);
  };

  // Save
  const handleSave = (customer) => {
    if (editCustomer) {
      console.log("Updating customer:", customer);
    } else {
      console.log("Adding Customer");
    }
  };

  // Delete
  const handleDelete = (customer) => {
    console.log("Deleting customer:", customer);
    setDeleteCustomer(null);
  };

  return (
    <div className="p-6 md:ml-64">
      {/* Header */}
      <Header title={"Customers"} filteredObjects={filteredCustomers} />

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
            { label: "All Customers", value: "" },
            { label: "Active", value: "active" },
            { label: "Blocked", value: "blocked" },
          ]}
          selected={filter}
          onChange={setFilter}
        />
      </div>

      {/* Table */}
      <div className="bg-white border shadow-sm rounded-xl overflow-x-auto mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="hidden md:table-cell p-4 text-left">Avatar</th>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="hidden md:table-cell p-4 text-left">Phone</th>
              <th className="hidden md:table-cell p-4 text-left">Email</th>
              <th className="hidden md:table-cell p-4 text-left">Orders</th>
              <th className="hidden md:table-cell p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="8">
                  No Customers Found
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer) => {
                const badgeColor =
                  customer.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600";

                return (
                  <tr key={customer.id} className="border-b hover:bg-gray-50">
                    {/* Avatar */}
                    <td className="hidden md:table-cell p-4">
                      <img
                        src={customer.avatar}
                        alt={customer.name}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </td>

                    {/* ID */}
                    <td className="p-4">{customer.id}</td>

                    {/* Name */}
                    <td className="p-4 font-medium">{customer.name}</td>

                    {/* Phone */}
                    <td className="hidden md:table-cell p-4">
                      {customer.phone}
                    </td>

                    {/* Email */}
                    <td className="hidden md:table-cell p-4">
                      {customer.email}
                    </td>

                    {/* Orders Count */}
                    <td className="hidden md:table-cell p-4">
                      {customer.orders}
                    </td>

                    {/* Status */}
                    <td className="hidden md:table-cell p-4">
                      <span
                        className={`${badgeColor} px-3 py-1 rounded-full text-xs`}
                      >
                        {customer.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4 flex justify-center gap-2">
                      <button
                        onClick={() => setSelectedCustomer(customer)}
                        className="p-2 bg-blue-50 text-blue-600 rounded-lg"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() => handleEdit(customer)}
                        className="p-2 bg-yellow-50 text-yellow-600 rounded-lg"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => setDeleteCustomer(customer)}
                        className="p-2 bg-red-50 text-red-600 rounded-lg"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {open && (
        <FormModal
          title={"Edit Customer"}
          fields={customerFields.filter((f) => !f.hideInForm)}
          data={editCustomer}
          onClose={() => setOpen(false)}
          onSubmit={handleSave}
        />
      )}

      {/* View Modal */}
      {selectedCustomer && (
        <ViewModal
          title="Customer Details"
          data={selectedCustomer}
          imageKey="avatar"
          badge={{
            text: selectedCustomer?.status,
            class:
              selectedCustomer?.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600",
          }}
          fields={customerFields.filter((f) => !f.hideInView)}
          onClose={() => setSelectedCustomer(null)}
        />
      )}

      {/* Delete Modal */}
      {deleteCustomer && (
        <DeleteModal
          title="Delete Customer"
          itemName={deleteCustomer?.name}
          onClose={() => setDeleteCustomer(null)}
          onConfirm={() => handleDelete(deleteCustomer)}
        />
      )}
    </div>
  );
};

export default AdminCustomerPage;
