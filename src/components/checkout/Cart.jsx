import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import product from "../../assets/products/product1.jfif";
import CODModal from "./CODModal";

const Cart = ({ isOpen, onClose }) => {
  const [codOpen, setCodOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
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

        {/* Product */}
        <div className="p-4 flex-1 overflow-auto">
          <div className="flex gap-3">
            <img
              src={product}
              alt="example product"
              className="w-20 h-20 object-cover"
            />

            <div className="flex-1 text-black">
              <p className="font-medium">Premium Cotton Shirt</p>
              <p className="text-sm text-gray-500">Rs 3200</p>

              {/* Qty */}
              <div className="flex items-center gap-2 mt-2">
                <button className="border px-2">-</button>
                <span>1</span>
                <button className="border px-2">+</button>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Total */}
          <div className="flex justify-between font-medium text-black">
            <span>Total</span>
            <span>Rs 3,200 PKR</span>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Taxes, discounts and shipping calculated at checkout.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <button
            className="w-full bg-[#0b1d3a] text-white py-3 hover:bg-black transition rounded-lg"
            onClick={() => setCodOpen(true)}
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
