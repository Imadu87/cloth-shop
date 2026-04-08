import React, { useState } from "react";
import { FaEye, FaCheck, FaTrash } from "react-icons/fa";

import SearchBox from "../../common/SearchBox";
import FilterDropdown from "../../common/FilterDropdown";
import OrderViewModal from "../../modals/OrderViewModal";
import DeleteModal from "../../modals/DeleteModal";
import { orders as allOrders } from "../../../../components/db/products";
import Header from "../../common/Header";

const AdminOrdersPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(""); // All / Pending / Completed / Cancelled
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [deleteOrder, setDeleteOrder] = useState(null);

  // Filtered Orders
  const filteredOrders = allOrders
    .filter((order) => {
      if (!filter || filter === "All") return true;
      return order.status === filter;
    })
    .filter((order) => {
      const term = search.toLowerCase();
      return (
        order.id.toLowerCase().includes(term) ||
        order.customer.name.toLowerCase().includes(term)
      );
    });

  const handleStatusChange = (orderId, newStatus) => {
    console.log("Updating Order Status", orderId, newStatus);
    // API call ya state update yaha
  };

  const handleDelete = (order) => {
    console.log("Deleting order", order);
    setDeleteOrder(null);
  };

  const orderFields = [
    { key: "id", label: "Order ID" },
    { key: "date", label: "Order Date" },
    { key: "total", label: "Total Amount" },

    // customer
    { key: "customer.name", label: "Customer Name" },
    { key: "customer.phone", label: "Phone" },
    { key: "customer.email", label: "Email" },
    { key: "customer.address", label: "Address" },
    { key: "customer.city", label: "City" },
  ];

  return (
    <div className="p-6 md:ml-64">
      {/* Header */}
      <Header title={"Orders"} filteredObjects={filteredOrders} />

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
            { label: "All", value: "All" },
            { label: "Pending", value: "Pending" },
            { label: "Completed", value: "Completed" },
            { label: "Cancelled", value: "Cancelled" },
          ]}
        />
      </div>

      {/* Table */}
      <div className="bg-white border shadow-sm rounded-xl overflow-x-auto mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="hidden md:table-cell p-4 text-left">Phone</th>
              <th className="hidden md:table-cell p-4 text-left">Items</th>
              <th className="p-4 text-left">Total</th>
              <th className="hidden md:table-cell p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="7">
                  No Orders Found
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => {
                const badgeColor =
                  order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : order.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700";

                return (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium">#{order.id}</td>
                    <td className="p-4">{order.customer.name}</td>
                    <td className="hidden md:table-cell p-4">
                      {order.customer.phone}
                    </td>
                    <td className="hidden md:table-cell p-4">
                      {order.products.length}
                    </td>
                    <td className="p-4 font-medium">{order.total}</td>
                    <td className="hidden md:table-cell p-4">
                      <span
                        className={`${badgeColor} px-3 py-1 rounded-full text-xs`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        {/* View */}
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                        >
                          <FaEye />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => setDeleteOrder(order)}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                        >
                          <FaTrash />
                        </button>

                        {/* Mark Completed */}
                        {/* {order.status === "Pending" && (
                          <button
                            onClick={() =>
                              handleStatusChange(order.id, "Completed")
                            }
                            className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"
                          >
                            <FaCheck />
                          </button>
                        )} */}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {selectedOrder && (
        <OrderViewModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusChange={handleStatusChange}
          fields={orderFields}
        />
      )}

      {/* Delete Modal */}
      {deleteOrder && (
        <DeleteModal
          title="Delete Order"
          itemName={`Order #${deleteOrder.id}`}
          onClose={() => setDeleteOrder(null)}
          onConfirm={() => handleDelete(deleteOrder)}
        />
      )}
    </div>
  );
};

export default AdminOrdersPage;
