import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { FaTimes, FaTrash } from "react-icons/fa";
import { removeFromCart, updateQuantity } from "../../store/slices/cartSlice";
import CODModal from "./CODModal";

const Cart = ({ isOpen, onClose }) => {
  const [codOpen, setCodOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // Close cart on route change
  useEffect(() => {
    if (isOpen) onClose();
  }, [location]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-[90%] md:w-[400px]
        bg-white shadow-xl flex flex-col
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold text-lg text-black">Your Cart</h3>
          <button onClick={onClose}>
            <FaTimes className="text-black" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex-1 overflow-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.product.id}>
                <div className="flex gap-3">
                  {/* Image */}
                  <img
                    src={item.product.image1}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div className="flex-1 text-black">
                    {/* Name + Delete */}
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-sm">
                        {item.product.name}
                      </p>

                      <button
                        onClick={() =>
                          dispatch(removeFromCart(item.product.id))
                        }
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-sm text-gray-500 mt-1">
                      Rs {item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex flex-col gap-2 mt-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Quantity {item.quantity}
                      </span>

                      <div className="flex items-center w-fit border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        {/* Decrement */}
                        <button
                          className={`w-8 h-8 flex items-center justify-center text-lg border-r
                          ${
                            item.quantity === 1
                              ? "text-gray-300 cursor-not-allowed bg-gray-50"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.product.id,
                                quantity: item.quantity - 1,
                              })
                            )
                          }
                          disabled={item.quantity === 1}
                        >
                          −
                        </button>

                        {/* Count */}
                        <span className="w-10 text-center text-sm font-semibold text-gray-800">
                          {item.quantity}
                        </span>

                        {/* Increment */}
                        <button
                          className="w-8 h-8 flex items-center justify-center text-lg text-gray-600 border-l hover:bg-gray-100"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.product.id,
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
              </div>
            ))
          )}

          {/* Total */}
          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between font-medium text-black mt-2">
                <span>Total</span>
                <span>Rs {totalPrice} PKR</span>
              </div>

              <p className="text-sm text-gray-500 mt-3">
                Taxes, discounts and shipping calculated at checkout.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <button
            className="w-full bg-[#0b1d3a] text-white py-3 hover:bg-black transition rounded-lg disabled:bg-gray-300"
            onClick={() => setCodOpen(true)}
            disabled={cartItems.length === 0}
          >
            Buy Now
          </button>
        </div>
      </div>

      <CODModal isOpen={codOpen} onClose={() => setCodOpen(false)} />
    </div>
  );
};

export default Cart;