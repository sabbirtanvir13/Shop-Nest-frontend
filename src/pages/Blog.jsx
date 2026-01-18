// "use client";
// import React from 'react';
// import { Typography, Link, Rating } from '@mui/material';
// import { FormatQuote, ChevronLeft, ChevronRight } from '@mui/icons-material';

//  export const BlogAndTestimonial = () => {
//   const posts = [
//     {
//       id: 1,
//       date: 'FEB 22, 2023',
//       category: 'GADGETS',
//       title: 'GET SOME COOL GADGETS IN 2023',
//       image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80', // Console
//     },
//     {
//       id: 2,
//       date: 'FEB 25, 2023',
//       category: 'TECHNOLOGY',
//       title: 'TECHNOLOGY HACK YOU WON\'T GET',
//       image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80', // Earbuds
//     },
//     {
//       id: 3,
//       date: 'FEB 22, 2023',
//       category: 'CAMERA',
//       title: 'TOP 10 SMALL CAMERA IN THE WORLD',
//       image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80', // Camera
//     },
//   ];

//   return (
//     <section className="bg-white py-16 font-sans">
//       <div className="container mx-auto px-4">
        
//         {/* --- Latest Posts Header --- */}
//         <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
//           <Typography variant="h6" className="tracking-widest font-bold uppercase text-gray-800">
//             Latest Posts
//           </Typography>
//           <Link href="#" underline="hover" className="text-xs tracking-widest text-gray-500 font-bold">
//             READ BLOGS
//           </Link>
//         </div>

//         {/* --- Blog Grid --- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
//           {posts.map((post) => (
//             <div key={post.id} className="group cursor-pointer">
//               <div className="aspect-[4/3] overflow-hidden mb-4">
//                 <img 
//                   src={post.image} 
//                   alt={post.title} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Typography className="text-[10px] text-gray-400 tracking-widest font-medium">
//                   {post.date} — {post.category}
//                 </Typography>
//                 <Typography variant="subtitle1" className="font-bold leading-tight group-hover:text-blue-600 transition-colors">
//                   {post.title}
//                 </Typography>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* --- Testimonial Section --- */}
//         <div className="relative max-w-4xl mx-auto text-center px-12">
//           {/* Navigation Arrows */}
//           <button className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black transition-colors">
//             <ChevronLeft fontSize="large" />
//           </button>
//           <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black transition-colors">
//             <ChevronRight fontSize="large" />
//           </button>

//           {/* Quote Icon */}
//           <FormatQuote className="text-gray-200 text-6xl mb-2 rotate-180 mx-auto" />

//           {/* Quote Text */}
//           <Typography 
//             variant="h5" 
//             className="text-gray-500 italic font-light leading-relaxed mb-6"
//             sx={{ fontFamily: 'serif' }}
//           >
//             "Tempus arcu enim pellentesque este pretium in neque. elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi."
//           </Typography>

//           {/* Rating and Author */}
//           <div className="flex flex-col items-center gap-2">
//             <Rating value={5} readOnly size="small" sx={{ color: '#4cc9f0' }} />
//             <Typography variant="caption" className="tracking-[0.2em] font-bold text-gray-800 uppercase">
//               Emma Chambers
//             </Typography>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

"use client";

import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Tips for Shopping Online",
    excerpt: "Learn how to get the best deals and avoid common mistakes when shopping online.",
    date: "Jan 15, 2026",
    image: "https://images.pexels.com/photos/394568/pexels-photo-394568.jpeg",
    slug: "shopping-tips"
  },
  {
    id: 2,
    title: "How to Choose the Right Laptop",
    excerpt: "A complete guide to selecting a laptop that suits your needs perfectly.",
    date: "Jan 10, 2026",
    image: "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg",
    slug: "choose-laptop"
  },
  {
    id: 3,
    title: "Smart Home Devices You Need",
    excerpt: "Upgrade your home with the latest smart devices that make life easier.",
    date: "Jan 5, 2026",
    image: "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg",
    slug: "smart-home-devices"
  },
  {
    id: 4,
    title: "Best Bluetooth Speakers in 2026",
    excerpt: "Discover the top-rated Bluetooth speakers for crystal clear sound.",
    date: "Jan 2, 2026",
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
    slug: "bluetooth-speakers-2026"
  }
];

export const Blog = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Latest Blog Posts</h2>
          <p className="text-gray-500 mt-2">Tips, guides, and updates from ShopNest</p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <Link href={`/blog/${post.slug}`}>
                    <button className="text-blue-600 font-medium hover:underline">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

