// pages/contact.jsx
import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-blue-600 text-2xl" />
              <span className="text-gray-700">123 Main Street, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-blue-600 text-2xl" />
              <span className="text-gray-700">+880 123 456 789</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiMail className="text-blue-600 text-2xl" />
              <span className="text-gray-700">support@example.com</span>
            </div>

            <div className="mt-6">
              <iframe
                className="w-full h-60 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902565853873!2d90.4000!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bd0f4d0d7b%3A0x7d4c7f9e3bb3e7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
