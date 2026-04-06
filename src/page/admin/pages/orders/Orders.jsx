import React from "react";
import { FaEye, FaCheck, FaTimes } from "react-icons/fa";
import SearchBox from "./components/SearchBox";
import OrderViewModal from "./components/OrderViewModal";
import { image } from "framer-motion/client";

import product1 from "../../../../assets/products/product1.jfif";
import product2 from "../../../../assets/products/product2.webp";

const Orders = ({ title, status }) => {
  const [search, setSearch] = React.useState("");
  const [selectedOrder, setSelectedOrder] = React.useState(null);

  const handleStatusChange = (status) => {
    setSelectedOrder({ ...selectedOrder, status });
  };

  const orders = [
    {
      id: "ORD-001",
      customer: {
        name: "Ali Muhammad",
        phone: "03001234567",
        email: "ali@example.com",
        address: "Gulshan-e-Iqbal, Karachi",
        city: "Karachi",
      },
      products: [
        {
          id: "P001",
          image: product1,
          name: "Shirt",
          price: 1000,
          qty: 2,
        },
        {
          id: "P002",
          image: product2,
          name: "Jeans",
          price: 1500,
          qty: 1,
        },
      ],

      total: 2500,
      status: "Completed",
      date: "2026-04-05",
    },
    {
      id: "ORD-002",
      customer: {
        name: "Sameer Qazi",
        phone: "03001234567",
        email: "sameer@example.com",
        address: "Gulshan-e-Iqbal, Peshawar",
        city: "Peshawar",
      },
      items: [
        { name: "Shirt", qty: 2 },
        { name: "Jeans", qty: 1 },
      ],
      products: [
        {
          id: "P001",
          image: product1,
          name: "Shirt",
          price: 1000,
          qty: 2,
        },
        {
          id: "P002",
          image: product2,
          name: "Jeans",
          price: 1500,
          qty: 1,
        },
      ],

      total: 2500,
      status: "Cancelled",
      date: "2026-04-05",
    },
    {
      id: "ORD-003",
      customer: {
        name: "Samavia Qazi",
        phone: "03001234567",
        email: "samavia@example.com",
        address: "Sheikh Muhammadi, Peshawar",
        city: "Peshawar",
      },
      items: [
        { name: "Shirt", qty: 2 },
        { name: "Jeans", qty: 1 },
      ],
      products: [
        {
          id: "P001",
          image: product1,
          name: "Shirt",
          price: 1000,
          qty: 2,
        },
        {
          id: "P002",
          image: product2,
          name: "Jeans",
          price: 1500,
          qty: 1,
        },
      ],

      total: 2500,
      status: "Pending",
      date: "2026-04-05",
    },
  ];

  const filteredOrders = orders
    .filter((order) => order.status === status)
    .filter(
      (order) =>
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.name.toLowerCase().includes(search.toLowerCase()),
    );

  const badgeColor =
    status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div className="p-6 md:ml-64">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
          {filteredOrders.length} {title}
        </span>
      </div>
      <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} />

      {/* Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-x-auto mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Items</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
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
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">#{order.id}</td>

                  <td className="p-4">
                    <div className="font-medium">{order.customer.name}</div>
                    {/* <div className="text-sm text-gray-500">
                    {order.customer.phone}
                  </div> */}
                  </td>
                  <td className="p-4">{order.customer.phone}</td>

                  <td className="p-4">{order.products.length}</td>

                  <td className="p-4 font-medium">{order.total}</td>

                  <td className="p-4">
                    <span
                      className={`{badgeColor} px-3 py-1 rounded-full text-xs`}
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

                      {/* Mark Delivered */}
                      {status === "Pending" && (
                        <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
                          <FaCheck />
                        </button>
                      )}

                      {/* Cancel */}
                      <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                        <FaTimes />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* modal */}
      {selectedOrder && (
        <OrderViewModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

export default Orders;
