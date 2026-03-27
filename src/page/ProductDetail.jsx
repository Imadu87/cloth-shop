import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { allProducts } from "../db/products";
import Reviews from "../components/productsDetail/Reviews";
import RelatedProducts from "../components/productsDetail/RelatedProducts";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.image1);

  if (!product) return <div>Product not found</div>;

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
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/products" className="hover:text-black">
            Shop
          </Link>
          <span className="mx-2">›</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Images */}
          <div className="flex gap-4">
            {/* Small Images */}
            <div className="hidden lg:flex flex-col gap-3">
              {[
                product.image1,
                product.image2,
                product.image3,
                product.image4,
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover border rounded-lg cursor-pointer 
            ${selectedImage === img ? "border-black" : "border-gray-200"}`}
                />
              ))}
            </div>

            {/* Big Image */}
            <div className="flex-1">
              <img
                src={selectedImage}
                className="w-full h-[450px] object-cover rounded-xl transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-500 ml-2">(4)</span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              {hasDiscount && (
                <span className="text-gray-400 line-through">
                  Rs {product.price}
                </span>
              )}
              <span className="text-2xl font-bold text-black">
                Rs {discountedPrice}
              </span>

              {hasDiscount && (
                <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-5 leading-relaxed">
              {product.description ||
                "Premium quality fabric. Comfortable and stylish for everyday use."}
            </p>

            {/* Quantity + Buy */}
            <div className="flex items-center gap-4 mt-6">
              {/* Qty */}
              <div className="flex items-center border rounded-lg">
                <button
                  className="px-3 py-2"
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                >
                  -
                </button>
                <span className="px-4">{qty}</span>
                <button className="px-3 py-2" onClick={() => setQty(qty + 1)}>
                  +
                </button>
              </div>

              {/* Buy Button */}
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="bg-black text-white px-6 py-3 rounded-xl"
                >
                  Buy Now
                </button>

                {open && (
                  <div className="absolute top-full mt-2 bg-white border shadow-lg rounded-xl w-48">
                    <button className="flex items-center gap-2 w-full px-4 py-3 hover:bg-gray-50">
                      <FaWhatsapp /> Order on WhatsApp
                    </button>
                    <button className="flex items-center gap-2 w-full px-4 py-3 hover:bg-gray-50">
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <Reviews />

        {/* Related Products */}
        <RelatedProducts />
      </div>
    </section>
  );
};

export default ProductDetailPage;
