"use client";

import { Typography } from '@mui/material';
import { LocalShippingOutlined, VerifiedOutlined, SellOutlined, SecurityOutlined } from '@mui/icons-material';

const Features = () => {
  const items = [
    { icon: <LocalShippingOutlined className="text-gray-400" />, title: 'Free Delivery', desc: 'Consectetur adipi elit lorem ipsum dolor sit amet.' },
    { icon: <VerifiedOutlined className="text-gray-400" />, title: 'Quality Guarantee', desc: 'Dolor sit amet lorem ipsum consectetur adipi.' },
    { icon: <SellOutlined className="text-gray-400" />, title: 'Daily Offers', desc: 'Amet consectetur adipi elit lorem ipsum dolor sit.' },
    { icon: <SecurityOutlined className="text-gray-400" />, title: '100% Secure Payment', desc: 'Rem ipsum dolor sit amet, consectetur adipi elit.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-3">
            <div className="mb-2 transform scale-125">
              {item.icon}
            </div>
            <Typography variant="subtitle2" className="font-bold uppercase tracking-widest text-gray-800">
              {item.title}
            </Typography>
            <Typography variant="body2" className="text-gray-500 leading-relaxed font-light">
              {item.desc}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features