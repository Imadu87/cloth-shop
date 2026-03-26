import { useEffect, useState } from "react";

const Topbar = () => {
  const messages = [
    "Free Delivery in Peshawar",
    "Pakistan Day Sale - Flat 20% OFF",
    "Eid Special Collection Available Now"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-100 hover:bg-black transition-colors duration-300 group">
      <div className="flex justify-center items-center py-2 overflow-hidden">
        
        <div
          key={index}
          className="px-4 py-1 rounded-full bg-white text-gray-700 text-sm 
          group-hover:bg-gray-900 group-hover:text-gray-300
          transition-all duration-500 animate-bubble"
        >
          {messages[index]}
        </div>

      </div>

      <style>{`
        @keyframes bubble {
          0% { transform: translateY(20px); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-20px); opacity: 0; }
        }

        .animate-bubble {
          animation: bubble 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Topbar;