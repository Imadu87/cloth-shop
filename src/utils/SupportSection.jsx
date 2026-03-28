import React from "react";

const SupportSection = () => {
  return (
    <div className="w-full mt-6 lg:mt-10">
      
      {/* Top dark blue line */}
      <div className="bg-[#0b1d3a] text-white text-center py-3 text-sm tracking-wide">
        ALL CITIES AREAS PARCEL ALLOW TO OPEN BEFORE PAYMENT FEEL FREE TO ORDER
      </div>

      {/* Floating white strip */}
      <div className="flex justify-center mt-2 relative z-10">
        <div className="bg-white shadow-md px-6 py-2 text-sm text-gray-700 rounded-sm">
          24 hours whatsapp support avaiable
        </div>
      </div>

      {/* Bottom gray line */}
      <div className="bg-gray-50 h-6 mt-[-10px]"></div>

    </div>
  );
};

export default SupportSection;