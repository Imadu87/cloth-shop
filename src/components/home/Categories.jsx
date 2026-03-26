import React from "react";

import taanImage from "../../assets/taan.jpg";
import chadarImage from "../../assets/chaddar.jfif";

const categories = [
  {
    id: 1,
    name: "Taan Kapra",
    image: taanImage,
  },
  {
    id: 2,
    name: "Men Chadar",
    image: chadarImage,
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl bg-white"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-3xl font-bold tracking-wide">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;