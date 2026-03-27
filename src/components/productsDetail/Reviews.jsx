import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold mb-4 text-center">Reviews</h2>

      <div className="flex justify-between mb-6">
        <span className="font-medium">All Reviews</span>
        <button className="border px-4 py-2 rounded-lg">Write a Review</button>
      </div>

      {/* Review Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((r) => (
          <div key={r} className="border p-4 rounded-xl">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Very good quality. Highly recommended.
            </p>
            <span className="text-xs text-gray-400 mt-2 block">
              Customer {r}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="border px-6 py-2 rounded-lg">
          Show All Reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;
