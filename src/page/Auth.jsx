import React from "react";
import { motion } from "framer-motion";

const Auth = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        {/* Logo */}
        <h2 className="text-center text-2xl font-semibold">
          Rubbah Fabrics
        </h2>

        {/* Heading */}
        <h3 className="text-center text-xl font-medium mt-6">
          Sign In
        </h3>

        <p className="text-center text-gray-500 text-sm mt-1">
          Sign in or create an account
        </p>

        {/* Shop Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-900 transition">
          Continue with Shop
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <hr className="flex-1" />
          <span className="text-sm text-gray-400">or</span>
          <hr className="flex-1" />
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Continue Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-900 transition">
          Continue
        </button>
      </motion.div>

    </div>
  );
};

export default Auth;