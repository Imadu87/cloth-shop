import React from "react";

const products = [
  {
    id: 1,
    name: "Premium Taan Fabric - White",
    price: "RS 2,500",
    image: "/src/assets/product1.jfif",
  },
  {
    id: 2,
    name: "Premium Taan Fabric - Cream",
    price: "RS 2,800",
    image: "/src/assets/product2.jfif",
  },
  {
    id: 3,
    name: "Men Chadar - Blue",
    price: "RS 1,500",
    image: "/src/assets/product3.jfif",
  },
  {
    id: 4,
    name: "Men Chadar - Gray",
    price: "RS 1,700",
    image: "/src/assets/product4.jfif",
  },
];

const Products = () => {
  const handleWhatsAppOrder = (productName) => {
    const phoneNumber = "+923020629393"; // Your WhatsApp number
    const message = `Assalamualaikum, mujhe yeh product chahiye: ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
              
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
                
                {/* WhatsApp Order Button */}
                <button
                  onClick={() => handleWhatsAppOrder(product.name)}
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300"
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

export default Products;