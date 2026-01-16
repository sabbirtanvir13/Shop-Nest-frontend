import React from 'react';
import { Typography, Link, Rating } from '@mui/material';
import { FormatQuote, ChevronLeft, ChevronRight } from '@mui/icons-material';

const BlogAndTestimonial = () => {
  const posts = [
    {
      id: 1,
      date: 'FEB 22, 2023',
      category: 'GADGETS',
      title: 'GET SOME COOL GADGETS IN 2023',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80', // Console
    },
    {
      id: 2,
      date: 'FEB 25, 2023',
      category: 'TECHNOLOGY',
      title: 'TECHNOLOGY HACK YOU WON\'T GET',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80', // Earbuds
    },
    {
      id: 3,
      date: 'FEB 22, 2023',
      category: 'CAMERA',
      title: 'TOP 10 SMALL CAMERA IN THE WORLD',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80', // Camera
    },
  ];

  return (
    <section className="bg-white py-16 font-sans">
      <div className="container mx-auto px-4">
        
        {/* --- Latest Posts Header --- */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <Typography variant="h6" className="tracking-widest font-bold uppercase text-gray-800">
            Latest Posts
          </Typography>
          <Link href="#" underline="hover" className="text-xs tracking-widest text-gray-500 font-bold">
            READ BLOGS
          </Link>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <Typography className="text-[10px] text-gray-400 tracking-widest font-medium">
                  {post.date} — {post.category}
                </Typography>
                <Typography variant="subtitle1" className="font-bold leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* --- Testimonial Section --- */}
        <div className="relative max-w-4xl mx-auto text-center px-12">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black transition-colors">
            <ChevronLeft fontSize="large" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black transition-colors">
            <ChevronRight fontSize="large" />
          </button>

          {/* Quote Icon */}
          <FormatQuote className="text-gray-200 text-6xl mb-2 rotate-180 mx-auto" />

          {/* Quote Text */}
          <Typography 
            variant="h5" 
            className="text-gray-500 italic font-light leading-relaxed mb-6"
            sx={{ fontFamily: 'serif' }}
          >
            "Tempus arcu enim pellentesque este pretium in neque. elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi."
          </Typography>

          {/* Rating and Author */}
          <div className="flex flex-col items-center gap-2">
            <Rating value={5} readOnly size="small" sx={{ color: '#4cc9f0' }} />
            <Typography variant="caption" className="tracking-[0.2em] font-bold text-gray-800 uppercase">
              Emma Chambers
            </Typography>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogAndTestimonial;