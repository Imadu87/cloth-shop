import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b1d3a] text-gray-300 pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold text-white tracking-wide mb-3">
              Rubbah Cloths For Men
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Men's clothing ranges from structured formal wear (suits, blazers)
              to relaxed casual attire (jeans, t-shirts), focusing on comfort,
              durability, and style. Key fabrics include breathable cotton,
              durable wool, lightweight linen, and luxurious cashmere. Essential
              styles feature tailored fits, neutral palettes, and versatile
              layers suitable for various occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-white transition duration-200">
                Home
              </Link>
              <Link to="/collections/all" className="hover:text-white transition duration-200">
                Products
              </Link>
              <Link to="/pages/contact" className="hover:text-white transition duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Contact Us
            </h4>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg hover:bg-white/10 transition">
                <FaPhoneAlt className="text-gray-300" />
                <span className="text-sm">+92 302 0629393</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg hover:bg-white/10 transition">
                <FaWhatsapp className="text-green-500" />
                <span className="text-sm">WhatsApp Available</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg hover:bg-white/10 transition">
                <FaMapMarkerAlt className="text-red-400" />
                <span className="text-sm">Peshawar, Pakistan</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <Link className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition">
                <FaFacebookF />
              </Link>
              <Link className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition">
                <FaInstagram />
              </Link>
              <Link className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition">
                <FaTiktok />
              </Link>
              <Link className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition">
                <FaYoutube />
              </Link>
              <Link
                href="https://wa.me/+923020629393"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition"
              >
                <FaWhatsapp className="text-green-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Rubbah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
