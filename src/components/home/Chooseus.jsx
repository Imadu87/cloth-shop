import React from "react";
import { FaCheckCircle, FaShippingFast, FaTags } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaCheckCircle size={36} className="text-black" />,
      title: "High Quality Fabric",
      desc: "Hum best quality ka taan kapra aur chadar provide karte hain.",
    },
    {
      id: 2,
      icon: <FaTags size={36} className="text-black" />,
      title: "Affordable Prices",
      desc: "Reasonable aur competitive prices jo har kisi ke liye suitable hain.",
    },
    {
      id: 3,
      icon: <FaShippingFast size={36} className="text-black" />,
      title: "Easy Ordering",
      desc: "WhatsApp ke through asaan aur fast order system.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Why Choose Us
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;