import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/slices/cartSlice";
import { addOrder } from "../../store/slices/orderSlice";
import {
  FaTimes,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { validateCheckoutForm } from "../../utils/validation";

const CODModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [errors, setErrors] = React.useState({});

  if (!isOpen) return null;

  const handleOrder = () => {
    const formData = { name, phone, address, city, email };
    const validationErrors = validateCheckoutForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const order = {
      id: Date.now(),
      items: cartItems,
      customer: formData,
      total: totalPrice,
      status: "Pending",
      date: new Date().toISOString(),
      userId: null, // can be set if user auth is implemented
    };

    dispatch(addOrder(order)); // save order
    dispatch(clearCart()); // clear cart

    navigate("/order", {
      state: order,
    });

    onClose();
  };

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

        {/* Subtotal */}
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

        {/* Address Form */}
        <div className="mb-3 text-black">
          <p className="font-medium mb-2">Complete Address with Details</p>

          <div className="space-y-2">
            {/* Name */}
            <div
              className={`flex items-center border px-2 rounded ${
                errors.name ? "border-red-500" : ""
              }`}
            >
              <FaUser className="text-gray-400" />
              <input
                placeholder="Complete Name"
                className="w-full p-2 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}

            {/* Phone */}
            <div
              className={`flex items-center border px-2 rounded ${
                errors.phone ? "border-red-500" : ""
              }`}
            >
              <FaPhone className="text-gray-400" />
              <input
                placeholder="Active Mobile Number"
                className="w-full p-2 outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}

            {/* Email */}
            <div
              className={`flex items-center border px-2 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
            >
              <FaEnvelope className="text-gray-400" />
              <input
                placeholder="Email Address"
                className="w-full p-2 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}

            {/* Address */}
            <div
              className={`flex items-center border px-2 rounded ${
                errors.address ? "border-red-500" : ""
              }`}
            >
              <FaMapMarkerAlt className="text-gray-400" />
              <input
                placeholder="Complete Address with details"
                className="w-full p-2 outline-none"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address}</p>
            )}

            {/* City */}
            <div
              className={`flex items-center border px-2 rounded ${
                errors.city ? "border-red-500" : ""
              }`}
            >
              <FaCity className="text-gray-400" />
              <input
                placeholder="City"
                className="w-full p-2 outline-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            {errors.city && (
              <p className="text-red-500 text-xs">{errors.city}</p>
            )}
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full bg-[#0b1d3a] text-white py-3 mt-2 hover:bg-black transition rounded-lg"
          onClick={handleOrder}
        >
          Complete Order • Rs {totalPrice}
        </button>
      </div>
    </div>
  );
};

export default CODModal;
