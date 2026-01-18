"use client";

import React from "react";

const reviews = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment: "Amazing service and fast delivery! Highly recommend ShopNest.",
  },
  {
    id: 2,
    name: "Sara Khan",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    comment: "Great products, but packaging could be better.",
  },
  {
    id: 3,
    name: "Rifat Hossain",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    comment: "Excellent experience! Will shop again for sure.",
  },
  {
    id: 4,
    name: "Mariam Akter",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    rating: 4,
    comment: "Good quality products at reasonable prices.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Customer Reviews</h2>
          <p className="text-gray-500 mt-2">See what our happy customers are saying</p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-3 object-cover"
              />

              {/* Name */}
              <h3 className="font-semibold text-gray-800">{review.name}</h3>

              {/* Rating */}
              <div className="text-yellow-500 my-1">
                {"⭐".repeat(review.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-500 text-sm line-clamp-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
