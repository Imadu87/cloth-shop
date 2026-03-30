import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full bg-[#0b1d3a] text-white py-3 mt-2 hover:bg-black transition rounded-lg">
      {text}
    </button>
  );
};

export default Button;
