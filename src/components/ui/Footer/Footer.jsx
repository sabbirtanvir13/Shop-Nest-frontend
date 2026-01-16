import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Pinterest, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  // Real placeholder images for the Instagram section
  const instaPosts = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", // Phone
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", // Watch
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", // Headphones
    "https://png.pngtree.com/png-vector/20241210/ourmid/pngtree-smart-watch-transparent-background-image-png-image_14691060.png", // Earbuds
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", // Camera
  ];

  return (
    <footer className="w-full bg-white pt-10 pb-16">
      {/* --- Instagram Section --- */}
      <div className="container mx-auto px-4 mb-16">
        <Typography 
          variant="h5" 
          align="center" 
          className="uppercase tracking-widest mb-8 font-light"
        >
          Shop Our Insta
        </Typography>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {instaPosts.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden group cursor-pointer">
              <img 
                src={src} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-100 mb-12" />

      {/* --- Footer Links Section --- */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <Typography variant="h6" className="font-bold">MiniStore</Typography>
          <Typography variant="body2" className="text-gray-500 leading-relaxed">
            Nibh ipsum consequat nisl vel pretium lectus quam id leo. 
            Facilisis magna etiam tempor orci eu lobortis elementum.
          </Typography>
          <div className="flex space-x-2 text-gray-400">
            <Facebook fontSize="small" className="hover:text-blue-600 cursor-pointer" />
            <Twitter fontSize="small" className="hover:text-blue-400 cursor-pointer" />
            <Pinterest fontSize="small" className="hover:text-red-600 cursor-pointer" />
            <Instagram fontSize="small" className="hover:text-pink-600 cursor-pointer" />
            <YouTube fontSize="small" className="hover:text-red-700 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <Typography variant="subtitle2" className="font-bold mb-4 uppercase">Quick Links</Typography>
          <ul className="space-y-2 text-sm text-gray-500 uppercase tracking-tighter">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">Blogs</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Help & Info */}
        <div>
          <Typography variant="subtitle2" className="font-bold mb-4 uppercase">Help & Info</Typography>
          <ul className="space-y-2 text-sm text-gray-500 uppercase tracking-tighter">
            <li className="hover:text-black cursor-pointer">Track Your Order</li>
            <li className="hover:text-black cursor-pointer">Returns Policies</li>
            <li className="hover:text-black cursor-pointer">Shipping + Delivery</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <Typography variant="subtitle2" className="font-bold mb-4 uppercase">Contact Us</Typography>
          <div className="space-y-3 text-sm text-gray-500">
            <p>Do you have any queries? <br />
               <span className="text-black font-medium underline">yourinfo@gmail.com</span>
            </p>
            <p>11 West 52nd Street, Manhattan <br />
               New York, NY 10019 <br />
               <span className="text-black font-medium">+10 123 456 789</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;