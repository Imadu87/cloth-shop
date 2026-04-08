import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";

import { addToCart } from "../../store/slices/cartSlice";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleWhatsApp = () => {
    const phoneNumber = "+923020629393";
    const message = `Assalamualaikum, mujhe yeh product chahiye: ${product.name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  return (
    <div className="relative border border-gray-200 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-transform duration-300 overflow-hidden group">
      {/* Badges */}
      <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
        {product.badge && (
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        {product.isSale && (
          <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}
      </div>

      {hasDiscount && (
        <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded z-10">
          {product.discount}% OFF
        </span>
      )}

      {/* Image with 3D hover effect */}
      <Link to={`/product/${product.id}`}>
        <div
          className="relative w-full h-64 overflow-hidden rounded-xl"
          style={{ perspective: "1200px" }}
        >
          <img
            src={product.image1}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 transform-gpu
                 group-hover:scale-110 group-hover:rotate-y-3 group-hover:rotate-x-2"
          />
        </div>
      </Link>
      {/* Content */}
      <div className="p-4 flex flex-col gap-2 text-center">
        <h4 className="text-gray-900 font-semibold text-lg">{product.name}</h4>

        <div className="flex items-center justify-center gap-2">
          {hasDiscount && (
            <span className="text-gray-400 line-through text-sm">
              RS {product.price}
            </span>
          )}
          <span className="text-gray-900 font-bold text-lg">
            RS {discountedPrice}
          </span>
        </div>

        {/* Buy Button */}
        <div className="relative mt-3">
          <button
            onClick={() => setOpen(!open)}
            className="w-full bg-[#0b1d3a] text-white py-2 rounded-xl font-semibold hover:bg-black transition duration-300"
          >
            Buy
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border rounded-xl shadow-lg ">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center gap-2 px-4 py-2 hover:text-green-500 transition"
              >
                <FaWhatsapp className="text-green-500" />
                Order on WhatsApp
              </button>

              <button
                onClick={() => {
                  dispatch(addToCart({ product, quantity: 1 }));
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 hover:text-blue-500 transition"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
          )}
        </div>

        {/* View Details */}
        <Link
          to={`/product/${product.id}`}
          className="text-sm font-semibold  text-gray-800 hover:underline mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
