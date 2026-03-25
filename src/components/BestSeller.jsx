import React from "react";

import product1 from "../assets/product1.jfif";
import product2 from "../assets/product2.jfif";
import product3 from "../assets/product3.jfif";
import product4 from "../assets/product4.jfif";

const bestSellers = [
  {
    id: 1,
    name: "Premium Taan Fabric - White",
    price: "RS 2,500",
    image: product1,
  },
  {
    id: 2,
    name: "Men Chadar - Blue",
    price: "RS 1,500",
    image: product2,
  },
  {
    id: 3,
    name: "Premium Taan Fabric - Black",
    price: "RS 2,800",
    image: product3,
  },
  {
    id: 4,
    name: "Men Chadar - Gray",
    price: "RS 1,700",
    image: product4,
  },
];

const BestSeller = () => {
  const handleWhatsAppOrder = (productName) => {
    const phoneNumber = "+923020629393";
    const message = `Assalamualaikum, mujhe yeh product chahiye: ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Best Sellers
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                {/* Badge */}
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  Best Seller
                </span>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>

                <button
                  onClick={() => handleWhatsAppOrder(product.name)}
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Order on WhatsApp
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSeller;