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
    <section className="py-14 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Kisi bhi product ke liye hum se directly WhatsApp par contact karein
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          
          {/* Phone */}
          <div className="flex items-center gap-3 justify-center">
            <FaPhoneAlt className="text-blue-600" />
            <span className="text-lg">+92 302 0629393</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 justify-center">
            <FaWhatsapp className="text-green-500" />
            <span className="text-lg">+923020629393</span>
          </div>

          {/* Address (Optional) */}
          <div className="flex items-center gap-3 justify-center">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="text-lg">New Town, London</span>
          </div>

        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg transition duration-300"
        >
          Chat on WhatsApp
        </button>

      </div>
    </section>
  );
};

export default Contact;