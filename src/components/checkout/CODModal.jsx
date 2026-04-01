import React from "react";
import { useSelector } from "react-redux";
import {
  FaTimes,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CODModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");

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

        {/* Products */}
        <div className="space-y-3 mb-4">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-3 items-center text-black"
            >
              <div className="relative">
                <img
                  src={item.product.image1}
                  className="w-16 h-16 object-cover border rounded"
                />

                {/* Quantity Badge */}
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {item.quantity}
                </span>
              </div>

              <div className="flex-1">
                <p className="font-medium text-sm">{item.product.name}</p>
              </div>

              <span className="font-medium text-sm">
                Rs {item.product.price * item.quantity}
              </span>
            </div>
          ))}
        </div>

        {/* Subtotal box */}
        <div className="border p-3 mb-3 text-black rounded">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>Rs {totalPrice}</span>
          </div>

          <div className="flex justify-between text-sm mt-1">
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between font-semibold border-b pb-3 mb-3 text-black">
          <span>Total</span>
          <span>Rs {totalPrice}</span>
        </div>

        {/* Shipping Method */}
        <div className="mb-4 text-black">
          <p className="font-medium mb-2">Shipping method</p>
          <div className="flex justify-between items-center border p-2 rounded">
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
            <div className="flex items-center border px-2 rounded">
              <FaUser className="text-gray-400" />
              <input
                placeholder="Complete Name"
                required
                className="w-full p-2 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex items-center border px-2 rounded">
              <FaPhone className="text-gray-400" />
              <input
                placeholder="Active Mobile Number"
                required
                className="w-full p-2 outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex items-center border px-2 rounded">
              <FaMapMarkerAlt className="text-gray-400" />
              <input
                placeholder="Complete Address with details"
                required
                className="w-full p-2 outline-none"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="flex items-center border px-2 rounded">
              <FaCity className="text-gray-400" />
              <input
                placeholder="City"
                required
                className="w-full p-2 outline-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <Link
          to="/order"
          state={{
            items: cartItems,
            customer: {
              name,
              phone,
              address,
              city,
            },
            total: totalPrice,
            status: "Pending",
          }}
        >
          <button
            className="w-full bg-[#0b1d3a] text-white py-3 mt-2 hover:bg-black transition rounded-lg disabled:bg-gray-300"
            onClick={onClose}
            disabled={
              cartItems.length === 0 || !name || !phone || !address || !city
            }
          >
            Complete Order • Rs {totalPrice}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CODModal;
