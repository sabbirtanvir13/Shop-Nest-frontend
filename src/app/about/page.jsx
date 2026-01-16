// pages/about.jsx
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              We aim to provide high-quality electronic products and services that
              make life easier and more enjoyable. Our focus is on customer
              satisfaction, innovation, and sustainability.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To become a leading brand in electronics by offering reliable,
              innovative, and affordable solutions for everyday needs.
            </p>
          </div>

          <div className="relative w-full h-80 md:h-96">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RlrEbVeA8R99KmQWWQY5VESxCJ64dD7ueQ&s"
              alt="About Image"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
