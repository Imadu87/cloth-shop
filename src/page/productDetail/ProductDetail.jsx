import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  resetCount,
} from "../../store/slices/counterSlice";
import { addToCart } from "../../store/slices/cartSlice";

import { FaWhatsapp } from "react-icons/fa";
// import Reviews from "./components/Reviews";
import Products from "../../components/products/Products";

const ProductDetailPage = () => {
  const { id } = useParams();

  const products = useSelector((state) => state.products.products);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(resetCount());
}, [id]);

  const product = products.find((p) => p.id === Number(id));

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.image1);

  if (!product)
    return (
      <div className="text-2xl font-bold text-center mt-20">
        Product not found
      </div>
    );

  const hasDiscount = product.discount > 0;
  const discountedPrice = hasDiscount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  useEffect(() => {
    if (product?.image1) {
      setSelectedImage(product.image1);
    }
  }, [product]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/collections/all-products" className="hover:text-black">
            Shop
          </Link>
          <span className="mx-2">›</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="flex gap-4">
            {/* Big Image */}
            <div className="flex-1">
              <img
                src={selectedImage}
                className="w-full h-[500px] object-cover rounded-xl transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            {/* Product Name */}
            <h1 className="text-4xl font-extrabold text-gray-900">
              {product.name}
            </h1>

            {/* Rating */}
            {/* <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-500 ml-2">(4 Reviews)</span>
            </div> */}

            {/* Price & Discount */}
            <div className="flex items-center gap-4 text-2xl">
              {hasDiscount && (
                <span className="text-gray-400 line-through text-lg">
                  Rs {product.price}
                </span>
              )}
              <span className="font-bold text-black">{discountedPrice} Rs</span>
              {hasDiscount && (
                <span className="bg-black text-white text-xs px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex flex-col gap-2 w-max">
              <span className="font-medium text-gray-700 text-sm">
                Quantity
              </span>
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                <button
                  className={`w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors ${
                    count === 1
                      ? "opacity-50 cursor-not-allowed hover:bg-gray-100"
                      : ""
                  }`}
                  onClick={() => dispatch(decrement())}
                  disabled={count === 1}
                >
                  -
                </button>
                <span className="w-12 text-center text-lg font-semibold">
                  {count}
                </span>
                <button
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={() => dispatch(increment())}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add To Cart / Buy Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  dispatch(addToCart({ product, quantity: count }));
                  dispatch(resetCount());
                }}
                className="bg-[#0b1d3a] hover:bg-black text-white px-6 py-3 rounded-xl text-lg font-medium"
              >
                Add To Cart
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50"
              >
                <FaWhatsapp className="text-green-500" /> Buy on WhatsApp
              </button>
            </div>

            {/* Description */}
            <div className="mt-6 space-y-3 text-gray-700 leading-relaxed">
              <p>{product.description}</p>
              <p>
                <span className="font-bold">Season:</span> {product.season}
              </p>
              <p>
                <span className="font-bold">Material:</span> {product.material}
              </p>
              <p>
                <span className="font-bold">Length:</span> {product.length}
              </p>
              <p>
                <span className="font-bold">Width:</span> {product.width}
              </p>
              <p className="text-sm text-gray-500">
                Note: "The fabric color of the product may vary by up to 5% to
                10% from the actual image. Additionally, the color of the fabric
                may also vary slightly depending on the brand of mobile phone
                you use"
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {/* <Reviews /> */}

        {/* Related Products */}
        <Products heading={"SHOP MORE HIT ARTICLES"} isBestSeller={true} />
      </div>
    </section>
  );
};

export default ProductDetailPage;
