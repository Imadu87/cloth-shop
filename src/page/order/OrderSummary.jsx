import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

const OrderSummary = () => {
  const location = useLocation();

  // Redux orders
  const orders = useSelector((state) => state.orders.orders);

  // navigation state OR fallback latest order
  const order = location.state || orders[orders.length - 1];

  if (!order)
    return (
      <div className="p-6 text-center text-gray-500">
        No order found
      </div>
    );

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 space-y-6">

        {/* Confirmation */}
        <div className="flex flex-col items-center text-center space-y-2">
          <FaCheckCircle className="text-5xl text-blue-500" />

          <h2 className="text-xl font-semibold">
            Confirmation #{order.id}
          </h2>

          <p className="text-gray-700">
            Thank you, {order.customer?.name}
          </p>

          <div className="bg-white rounded-xl shadow p-6 text-gray-700 space-y-2">
            <p className="font-medium text-lg">
              Your order is confirmed
            </p>

            <p>
              We'll contact you soon on {order.customer?.phone}
            </p>

            <span className="inline-block mt-2 px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
              Status: {order.status || "Pending"}
            </span>
          </div>
        </div>

        {/* Orders Detail */}
        <div className="bg-white rounded-xl shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">
            Orders Detail
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Left */}
            <div className="space-y-4">
              <div>
                <p className="font-medium">
                  Contact Information
                </p>
                <p>{order.customer?.phone}</p>
              </div>

              <div>
                <p className="font-medium">
                  Shipping Address
                </p>
                <p>{order.customer?.name}</p>
                <p>{order.customer?.address}</p>
                <p>{order.customer?.city}</p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div>
                <p className="font-medium">
                  Payment Method
                </p>
                <p>Cash on Delivery</p>

                <p className="font-medium mt-2">
                  Price
                </p>
                <p>Rs {order.total}</p>

                <p className="font-medium mt-2">
                  Date
                </p>
                <p>
                  {order.date
                    ? new Date(order.date).toLocaleDateString()
                    : ""}
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Billing Address
                </p>
                <p>{order.customer?.name}</p>
                <p>{order.customer?.address}</p>
                <p>{order.customer?.city}</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">
              Items Ordered
            </h3>

            <div className="space-y-3 mb-4">
              {order.items?.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 items-center text-black"
                >
                  <div className="relative">
                    <img
                      src={item.product.image1}
                      className="w-16 h-16 object-cover border rounded"
                    />

                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      {item.product.name}
                    </p>
                  </div>

                  <span className="font-medium text-sm">
                    Rs {item.product.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <span className="font-medium">
              Total Price: Rs {order.total}
            </span>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
            <p className="text-gray-700">
              Need help? Contact Us
            </p>

            <Link to="/">
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;