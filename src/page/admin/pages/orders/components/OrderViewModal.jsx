import React from "react";
import { VscClose } from "react-icons/vsc";

const OrderViewModal = ({ order, onClose }) => {
  if (!order) return null;

  const statusColor =
    order.status === "pending"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b bg-gray-50 rounded-t-2xl">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Order Details
            </h2>
            <p className="text-sm text-gray-500">Order ID: #{order.id}</p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${statusColor}`}
            >
              {order.status}
            </span>

            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition"
            >
              <VscClose className="text-xl" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Customer Card */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">
              Customer Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-medium text-gray-600">Name:</span>{" "}
                {order.customer.name}
              </p>
              <p>
                <span className="font-medium text-gray-600">Phone:</span>{" "}
                {order.customer.phone}
              </p>
              <p>
                <span className="font-medium text-gray-600">Email:</span>{" "}
                {order.customer.email}
              </p>
              <p>
                <span className="font-medium text-gray-600">City:</span>{" "}
                {order.customer.city}
              </p>

              <p className="sm:col-span-2">
                <span className="font-medium text-gray-600">Address:</span>{" "}
                {order.customer.address}
              </p>
              <p>
                <span className="font-medium text-gray-600">Date:</span>{" "}
                {order.date}
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">
              Ordered Products
            </h3>

            <div className="space-y-3">
              {order.products?.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-white border rounded-xl p-4 hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />

                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {product.qty}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">Rs {product.price}</p>
                    <p className="font-semibold text-gray-800">
                      Rs {product.price * product.qty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-end border-t pt-5">
            <div className="bg-[#0b1d3a] text-white px-6 py-3 rounded-xl shadow-md">
              <p className="text-sm opacity-80">Total Amount</p>
              <p className="text-xl font-semibold">Rs {order.total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderViewModal;
