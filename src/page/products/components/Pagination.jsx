import React from "react";

const Pagination = () => {
  return (
    <div>
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8 text-gray-500">
        <button className="px-3 py-1">{`<`}</button>
        <button className="px-3 py-1">1</button>
        <button className="px-3 py-1">2</button>
        <button className="px-3 py-1">3</button>
        <button className="px-3 py-1">4</button>
        <button className="px-3 py-1">{`>`}</button>
      </div>
    </div>
  );
};

export default Pagination;
