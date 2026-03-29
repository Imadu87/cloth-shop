import React from "react";
import {
  FaTimes,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
} from "react-icons/fa";
import product from "../../assets/products/product1.jfif";
import { Link } from "react-router-dom";

const CODModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-[95%] md:w-[500px] max-h-[90vh] overflow-auto shadow-xl rounded-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-3 text-black">
          <h3 className="font-semibold">CASH ON DELIVERY</h3>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Product */}
        <div className="flex gap-3 items-center mb-4 text-black">
          <div className="relative">
            <img src={product} className="w-16 h-16 object-cover border" />

            {/* Quantity Badge */}
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </div>

          <div className="flex-1 text-black">
            <p className="font-medium text-sm">Premium Cotton Shirt</p>
          </div>

          <span className="font-medium">Rs 3200</span>
        </div>

        {/* Subtotal box */}
        <div className="border p-3 mb-3 text-black">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>Rs 3200</span>
          </div>

          <div className="flex justify-between text-sm mt-1">
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between font-semibold border-b pb-3 mb-3 text-black">
          <span>Total</span>
          <span>Rs 3200</span>
        </div>

        {/* Shipping Method */}
        <div className="mb-4 text-black">
          <p className="font-medium mb-2">Shipping method</p>
          <div className="flex justify-between items-center border p-2">
            <label className="flex items-center gap-2">
              <input type="radio" checked readOnly />
              Free Shipping
            </label>
            <span>Free</span>
          </div>
        </div>

        {/* Address Form */}
        <div className="mb-3 text-black">
          <p className="font-medium mb-2">Complete Address with Details</p>

          <div className="space-y-2">
            <div className="flex items-center border px-2">
              <FaUser className="text-gray-400" />
              <input
                placeholder="Complete Name"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="flex items-center border px-2">
              <FaPhone className="text-gray-400" />
              <input
                placeholder="Active Phone Number"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="flex items-center border px-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <input
                placeholder="Complete Address with details"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="flex items-center border px-2">
              <FaCity className="text-gray-400" />
              <input placeholder="City" className="w-full p-2 outline-none" />
            </div>
          </div>
        </div>

        {/* Button */}
        <Link to="/order">
          <button
            className="w-full bg-black text-white py-3 mt-2"
            onClick={onClose}
          >
            Complete Order • Rs 3200
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CODModal;
