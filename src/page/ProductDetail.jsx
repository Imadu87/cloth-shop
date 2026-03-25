import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ProductDetail = () => {
  const product = {
    name: "Premium Taan Fabric - White",
    price: "RS 2,500",
    image: "/src/assets/product1.jfif",
    description:
      "High quality taan fabric, soft aur comfortable. Daily wear ke liye perfect choice.",
    fabric: "Wash & Wear",
    color: "White",
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "+923020629393";
    const message = `Assalamualaikum, mujhe yeh product chahiye: ${product.name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Right - Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-xl text-gray-800 font-semibold">
            {product.price}
          </p>

          <p className="text-gray-600 text-sm">
            {product.description}
          </p>

          {/* Extra Info */}
          <div className="text-sm text-gray-700">
            <p><strong>Fabric:</strong> {product.fabric}</p>
            <p><strong>Color:</strong> {product.color}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </button>

            {/* Optional Add to Cart */}
            <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg text-lg">
              Add to Cart
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDetail;