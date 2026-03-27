import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "+923020629393";

  const handleWhatsApp = () => {
    const message = "Assalamualaikum, mujhe product ke bare me info chahiye.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const features = [
    {
      id: 1,
      icon: <FaPhoneAlt size={36} className="text-black" />,
      desc: "+92 302 0629393",
    },
    {
      id: 2,
      icon: <FaWhatsapp size={36} className="text-black" />,
      desc: "+92 302 0629393",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt size={36} className="text-black" />,
      desc: "New City, London",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-12">
          Kisi bhi product ke liye hum se directly WhatsApp par contact karein
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="bg-black hover:bg-gray-800 text-white px-10 py-3 rounded-2xl text-lg font-semibold transition duration-300"
        >
          Chat on WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Contact;
