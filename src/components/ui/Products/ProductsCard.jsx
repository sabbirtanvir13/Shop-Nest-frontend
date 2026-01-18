

"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductsCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 w-full h-full">
      
      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Price */}
        <span className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-2 py-1 rounded-full shadow-md">
          ৳ {item.price}
        </span>

        {/* Discount */}
        {item.discount && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow-md">
            {item.discount}% Off
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1 justify-between">
        <div className="mb-2">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
          <p className="text-xs text-gray-500 line-clamp-3">{item.description}</p>
        </div>

        <div className="flex flex-col gap-1 mb-2 text-xs text-gray-600">
          <div className="flex justify-between">
            <span>Category: {item.category || "General"}</span>
            <span>Brand: {item.brand || "Unknown"}</span>
          </div>
          {item.rating && (
            <div className="text-yellow-500 text-xs">
              {"⭐".repeat(Math.round(item.rating))} ({item.rating})
            </div>
          )}
          <div className={`font-medium ${item.stock ? "text-green-600" : "text-red-600"}`}>
            {item.stock ? "In Stock" : "Out of Stock"}
          </div>
        </div>

        {/* Button */}
        <Link href={`/products/${item.slug}`}>
          <button className="w-full py-2 cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm hover:opacity-90 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
