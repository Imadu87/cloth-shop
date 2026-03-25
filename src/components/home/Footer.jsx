import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Shop Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">MenClothShop</h3>
          <p className="text-sm mt-2">
            Premium Men Taan Kapra & Chadar
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Products</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        {/* Right - Contact */}
        <div className="flex flex-col items-center md:items-end gap-2 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+92 302 0629393</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp Available</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © 2026 MenClothShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;