import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";

const OrderTable = ({ orders }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
      case "Delivered":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 overflow-x-auto">
      <h3 className="font-semibold text-gray-700 mb-4">
        Recent Orders
      </h3>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="py-3 px-4">Order ID</th>
            <th className="py-3 px-4">Customer</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Total</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b last:border-none hover:bg-gray-50 transition"
            >
              <td className="py-3 px-4 font-medium text-gray-700">
                #{order.id}
              </td>

              <td className="py-3 px-4 text-gray-600">
                {order.customer.name}
              </td>

              <td className="py-3 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>

              <td className="py-3 px-4 font-medium text-gray-700">
                Rs {order.total}
              </td>

              <td className="py-3 px-4 text-gray-500">
                {new Date(order.date).toLocaleDateString()}
              </td>

              <td className="py-3 px-4">
                <div className="flex justify-center gap-3">
                  <Link
                    to={`/admin/orders/view/${order.id}`}
                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                  >
                    <FaEye size={14} />
                  </Link>

                  <Link
                    to={`/admin/orders/edit/${order.id}`}
                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition"
                  >
                    <FaEdit size={14} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;