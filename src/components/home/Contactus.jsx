import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "+923020629393";

  const handleWhatsApp = () => {
    const message = "Assalamualaikum, mujhe product ke bare me info chahiye.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-12">
          Kisi bhi product ke liye hum se directly WhatsApp par contact karein
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
          
          {/* Phone */}
          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="bg-gray-100 p-4 rounded-full mb-3">
              <FaPhoneAlt className="text-black text-2xl" />
            </div>
            <span className="text-gray-900 text-lg font-medium">+92 302 0629393</span>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="bg-gray-100 p-4 rounded-full mb-3">
              <FaWhatsapp className="text-green-500 text-2xl" />
            </div>
            <span className="text-gray-900 text-lg font-medium">+92 302 0629393</span>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="bg-gray-100 p-4 rounded-full mb-3">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
            </div>
            <span className="text-gray-900 text-lg font-medium">New Town, London</span>
          </div>

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