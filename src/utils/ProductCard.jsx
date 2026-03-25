import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = "+923020629393";
    const message = `Assalamualaikum, mujhe yeh product chahiye: ${product.name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", product);
    setOpen(false);
  };

  // discount formula
  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  return (
    <div className="border border-gray-200 rounded-xl bg-white hover:shadow-lg transition duration-300 relative">
      {product.badge && (
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          {product.badge}
        </span>
      )}
      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />

          {/* Best Seller */}
          {product.isBestSeller && (
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              Best Seller
            </span>
          )}

          {/* New Arrival */}
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}

          {/* Sale */}
          {product.isSale && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}

          {/* Discount */}
          {product.discount && (
            <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 text-center">
        <h4 className="font-semibold text-lg">{product.name}</h4>

        <div className="flex items-center justify-center gap-2">
          {hasDiscount && (
            <span className="text-gray-400 line-through text-sm">
              RS {product.price}
            </span>
          )}

          <span className="text-gray-800 font-semibold text-lg">
            RS {discountedPrice}
          </span>
        </div>

        {/* Buy Button */}
        <div className="relative mt-3">
          <button
            onClick={() => setOpen(!open)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Buy
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border rounded-lg shadow-lg z-50">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <FaWhatsapp className="text-green-500" />
                Order on WhatsApp
              </button>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
          )}
        </div>

        {/* View */}
        <Link
          to={`/product/${product.id}`}
          className="text-sm font-semibold hover:underline mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
