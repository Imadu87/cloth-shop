import React from "react";
import about from "../../assets/taan.jpg";

const About = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">About Us</h1>
          <p className="text-gray-600 max-w-[700px] mx-auto">
            Hum premium quality men taan kapra aur chadar best price par provide
            karte hain. Hamara mission hai customers ko affordable aur high
            quality fabric dena.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src={about}
              alt="About"
              className="w-full rounded-xl shadow-md"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Who We Are</h2>

            <p className="text-gray-600">
              Hamari shop men fabric industry me trusted naam ban chuki hai. Hum
              customers ko best quality kapra provide karte hain jo long lasting
              aur comfortable hota hai.
            </p>

            <p className="text-gray-600">
              Hamare products me taan, chadar aur premium fabric categories
              available hain jo modern trends ke mutabiq hain.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-xl font-bold">500+</h3>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-xl font-bold">100+</h3>
                <p className="text-gray-600 text-sm">Products</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-xl font-bold">5+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-xl font-bold">24/7</h3>
                <p className="text-gray-600 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
