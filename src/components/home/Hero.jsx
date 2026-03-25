import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../assets/1.png";
import banner2 from "../../assets/2.jfif";
import banner3 from "../../assets/3.jfif";

const HeroSection = () => {
  const slides = [banner1, banner2, banner3];

  return (
    <section className="w-full flex justify-center mt-6">
      <div className="w-full max-w-[1200px] px-4">

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ el: ".hero-dots", clickable: true }}
          className="hero-swiper rounded-xl shadow-lg"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl">

                {/* Image */}
                <img
                  src={slide}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 text-center px-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    Premium Men Fabric & Chadar
                  </h1>
                  <p className="text-sm sm:text-lg md:text-xl mb-4">
                    Best Quality | Affordable Price
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                    Shop Now
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="hero-dots flex justify-center items-center gap-2" />
        </div>

        {/* Custom Styles */}
        <style>{`
          .hero-dots .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            opacity: 1;
            background: #1f2937;
            margin: 0 4px;
            border-radius: 9999px;
            transition: transform 0.25s ease, background 0.25s ease;
          }

          .hero-dots .swiper-pagination-bullet-active {
            background: #2563eb;
            transform: scale(1.3);
          }

          @media (min-width: 640px) {
            .hero-dots .swiper-pagination-bullet {
              width: 9px;
              height: 9px;
            }
          }
        `}</style>

      </div>
    </section>
  );
};

export default HeroSection;