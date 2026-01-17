import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const PromoBanner = () => {
  return (
    <section className="bg-[#cdd1d4] w-full min-h-[500px] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start space-y-6 animate-fadeIn">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-gray-400"></div>
            <Typography 
              variant="overline" 
              className="text-gray-500 tracking-[0.3em] font-medium"
            >
              10% OFF
            </Typography>
          </div>

          <Typography 
            variant="h1" 
            className="text-gray-800 font-light tracking-widest uppercase leading-tight"
            sx={{ fontSize: { xs: '3rem', md: '5rem' } }}
          >
            New Year <br /> Sale
          </Typography>

          <Button 
            variant="contained" 
            disableElevation
            className="bg-[#222222] hover:bg-black text-white px-10 py-3 rounded-none tracking-widest text-xs transition-all duration-300"
            sx={{ 
              backgroundColor: '#222222',
              '&:hover': { backgroundColor: '#000' },
              borderRadius: 0
            }}
          >
            SHOP NOW
          </Button>
        </div>

        {/* Right Side: Image */}
        <div className="relative flex justify-center md:justify-end">
          {/* Subtle background circle for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl -z-10"></div>
          
          <img 
            src="https://i.ibb.co.com/ZzxVgmWg/download-25.png" 
            alt="New Year Sale Smartphone" 
            className="w-full max-w-[500px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;