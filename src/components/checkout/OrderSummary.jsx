import React from "react";
import { useLocation } from "react-router-dom";

const OrderSummary = () => {
  const { state } = useLocation();
  const order = state;

  if (!order)
    return <div className="p-6 text-center text-gray-500">No order found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
          Order Summary
        </h2>

        {/* Status */}
        <div className="mb-6">
          <span className="text-sm font-medium text-gray-600">
            Order Status:
          </span>
          <span className="ml-2 px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
            {order.status || "Pending"}
          </span>
        </div>

        {/* Products */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-gray-700">Product Details</h3>

          <div className="space-y-3">
            {order.items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-4 border rounded-lg p-4"
              >
                <img
                  src={item.product.image1}
                  alt="product"
                  className="w-20 h-20 object-cover rounded"
                />

                <div className="flex-1">
                  <p className="font-medium">{item.product.name}</p>

                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">
                  Rs {item.product.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between font-semibold border-t pt-4 mb-6">
          <span>Total</span>
          <span>Rs {order.total}</span>
        </div>

        {/* Customer */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">Customer Details</h3>

          <div className="border rounded-lg p-4 space-y-2">
            <p>
              <span className="font-medium">Name:</span> {order.customer.name}
            </p>

            <p>
              <span className="font-medium">Phone:</span> {order.customer.phone}
            </p>

            <p>
              <span className="font-medium">Address:</span>{" "}
              {order.customer.address}
            </p>

            <p>
              <span className="font-medium">City:</span> {order.customer.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
