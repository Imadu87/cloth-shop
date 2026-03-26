import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import banner1 from "../../assets/1.png";
import banner2 from "../../assets/2026.png";

const HeroSection = () => {
  const slides = [banner1, banner2];

  const fullText = "Premium Men Fabric & Chadar";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 60);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="w-full relative">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 10000 }}
        className="z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px]">
              <img src={slide} alt="" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black/40 text-white text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          {text}
          <span className="ml-1 animate-blink">|</span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-5">
          Best Quality • Affordable Price
        </p>

        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      <style>{`
        @keyframes blink {
          0%,100%{opacity:1}
          50%{opacity:0}
        }
        .animate-blink{
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
