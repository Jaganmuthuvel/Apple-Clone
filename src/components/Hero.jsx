import React from 'react';
import iphoneVideo from '../assets/Video/iphone.mp4';

const Hero = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-center text-xs md:text-sm">
        <p className="text-center">
          Get up to 12 months of No Cost EMI* plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.
          <a href="#" className="text-blue-500 hover:underline ml-1">Shop ›</a>
        </p>
      </div>
      <video
        className="w-[90%] mx-auto rounded-2xl mt-6"
        src={iphoneVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
};

export default Hero;
