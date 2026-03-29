import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-10 text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-12">
            Kisi bhi sawal ya order ke liye hum se rabta karein
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left - Contact Info */}
          <div className="flex flex-col gap-6">
            
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl text-blue-600" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+92 302 0629393</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-xl text-green-500" />
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-gray-600">+92 302 0629393</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-red-500" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">info@clothshop.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-black" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">
                  Lahore, Pakistan
                </p>
              </div>
            </div>

          </div>

          {/* Right - Contact Form */}
          <form className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;