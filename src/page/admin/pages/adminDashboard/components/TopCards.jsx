import React from "react";
import {
  FaShoppingCart,
  FaClock,
  FaCheckCircle,
  FaDollarSign,
} from "react-icons/fa";

const TopCards = ({ data }) => {
  const getIcon = (title) => {
    switch (title) {
      case "Total Orders":
        return <FaShoppingCart />;
      case "Pending Orders":
        return <FaClock />;
      case "Completed Orders":
        return <FaCheckCircle />;
      case "Total Revenue":
        return <FaDollarSign />;
      default:
        return null;
    }
  };

  const getIconColor = (title) => {
    switch (title) {
      case "Total Orders":
        return "bg-blue-100 text-blue-600";
      case "Pending Orders":
        return "bg-yellow-100 text-yellow-600";
      case "Completed Orders":
        return "bg-green-100 text-green-600";
      case "Total Revenue":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      {data.map((card) => (
        <div
          key={card.title}
          className="bg-white border border-gray-200 rounded-xl p-5 
          flex items-center justify-between 
          shadow-sm hover:shadow-xl 
          hover:-translate-y-1 
          transition-all duration-300 cursor-pointer"
        >
          {/* Text */}
          <div>
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className="text-2xl font-bold text-gray-800">
              {card.value}
            </p>
          </div>

          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${getIconColor(
              card.title
            )}`}
          >
            {getIcon(card.title)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;