import { useEffect, useState } from "react";

const Topbar = () => {
  const messages = [
    "Free Delivery in Peshawar",
    "50000 plus satisfied customers",
    "Eid Special Collection Available Now",
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  // message slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 
      transition-all duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
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
    </div>
  );
};

export default Topbar;
