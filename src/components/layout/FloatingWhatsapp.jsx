import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "+923020629393";

  const handleClick = () => {
    const message = "Assalamualaikum, mujhe product ke bare me info chahiye.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default FloatingWhatsApp;