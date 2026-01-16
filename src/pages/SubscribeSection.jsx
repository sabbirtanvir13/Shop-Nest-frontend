import React from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';

const SubscribeSection = () => {
  return (
    <section className="bg-[#222222] py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
        
        {/* Left Side: Text Content */}
        <div className="text-white text-center md:text-left">
          <Typography 
            variant="h4" 
            className="font-bold tracking-widest mb-2 uppercase"
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            Subscribe Us Now
          </Typography>
          <Typography 
            variant="body2" 
            className="text-gray-400 tracking-wide font-light"
          >
            Get the latest updates and deals directly to your inbox every week.
          </Typography>
        </div>

        {/* Right Side: Input Field & Button */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-0 overflow-hidden rounded-sm">
          <Box
            component="input"
            placeholder="Your Email Address Here"
            className="bg-white px-6 py-4 outline-none w-full md:w-96 text-sm placeholder:text-gray-400"
          />
          <Button 
            variant="contained" 
            disableElevation
            className="bg-[#75b8cc] hover:bg-[#64a1b3] rounded-none px-10 py-4 text-sm font-bold tracking-widest transition-colors"
            sx={{ 
              backgroundColor: '#75b8cc', 
              '&:hover': { backgroundColor: '#64a1b3' },
              borderRadius: 0,
              minWidth: 'max-content'
            }}
          >
            SUBSCRIBE
          </Button>
        </div>

      </div>
    </section>
  );
};

export default SubscribeSection;