import React from "react";
import { useLocation } from "react-router-dom";
import product1 from "../../assets/products/product1.jfif";

const OrderSummary = () => {
  const { state } = useLocation();
  // const order = state;

  const dummyOrder = {
    product: {
      name: "Premium Cotton Shirt",
      price: 3200,
      qty: 1,
      image: product1,
    },
    customer: {
      name: "Muhammad Ali",
      phone: "0300-1234567",
      address: "Street 10, Main Bazar",
      city: "Islamabad",
    },
  };

  // 👇 Agar state na ho to dummy use karo
  const order = state || dummyOrder;

  if (!order) return <div className="p-6 text-center">No order found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
          Order Summary
        </h2>

        {/* Product Section */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-gray-700">
            Product Details
          </h3>

          <div className="flex items-center gap-4 border rounded-lg p-4">
            <img
              src={order.product.image}
              alt="product"
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <p className="font-medium">
                {order.product.name}
              </p>

              <p className="text-sm text-gray-500">
                Quantity: {order.product.qty}
              </p>
            </div>

            <p className="font-semibold">
              Rs {order.product.price}
            </p>
          </div>
        </div>

        {/* Customer Section */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">
            Customer Details
          </h3>

          <div className="border rounded-lg p-4 space-y-2">
            <p>
              <span className="font-medium">Name:</span>{" "}
              {order.customer.name}
            </p>

            <p>
              <span className="font-medium">Phone:</span>{" "}
              {order.customer.phone}
            </p>

            <p>
              <span className="font-medium">Address:</span>{" "}
              {order.customer.address}
            </p>

            <p>
              <span className="font-medium">City:</span>{" "}
              {order.customer.city}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderSummary;