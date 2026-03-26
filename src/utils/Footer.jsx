import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left - Brand Name & Tagline */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-4xl font-bold text-white tracking-wide">
            Rubbah
          </h2>
          <p className="text-gray-400 text-sm">
            Premium Men Taan Kapra & Chadar Premium Men Taan Kapra & Chadar
            Premium Men Taan Kapra & Chadar Premium Men Taan Kapra & Chadar
            Premium Men Taan Kapra & Chadar Premium Men Taan Kapra & Chadar
            Premium Men Taan Kapra & Chadar Premium Men Taan Kapra & Chadar
            Premium Men Taan Kapra & Chadar Premium Men Taan Kapra & Chadar
            Premium Men Taan Kapra & Chadar Premium Men Taan Kapra & Chadar
            Premium Men Taan Kapra & Chadar Premium Men Taan Kapra & Chadar
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Products</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* Right - Contact & Social */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-white">Contact Us</h4>
          <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-700 transition">
            <FaPhoneAlt className="text-white" />
            <span className="text-gray-300">+92 302 0629393</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-700 transition">
            <FaWhatsapp className="text-green-500" />
            <span className="text-gray-300">WhatsApp Available</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-700 transition">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="text-gray-300">New Town, London</span>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
              <FaTiktok className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
              <FaYoutube className="text-white" />
            </a>
            <a href="https://wa.me/+923020629393" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
              <FaWhatsapp className="text-green-500" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Rubbah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;