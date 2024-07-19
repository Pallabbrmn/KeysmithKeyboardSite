import React from "react";
import VideoPlayer from "./VideoPlayer";

const Hero = () => {
  return (
    <div>
      <div className="  sm:h-[75vh] rounded-3xl overflow-hidden">
        <VideoPlayer />
      </div>
      <p className=" text-xl sm:text-4xl font-Montserrat font-extralight py-4">
        Introducing the Keysmith Altar I — an ultra-low profile, wireless
        mechanical keyboard forged in premium, sustainable materials.
      </p>
      <div className="gallery flex flex-col gap-4">
        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div className="rounded-3xl sm:h-[80vh] overflow-hidden hover:scale-[0.98] transition-transform duration-300 ease-in-out transform">
            <img
              className="object-cover w-full h-full"
              src="/public/img/hero-1.jpg"
            />
          </div>
          <div className="rounded-3xl sm:h-[80vh] overflow-hidden hover:scale-[0.98] transition-transform duration-300 ease-in-out transform">
            <img
              className="object-cover w-full h-full"
              src="/public/img/hero-2.jpg"
            />
          </div>
        </div>
        <div className="rounded-3xl sm:h-[90vh] overflow-hidden hover:scale-[0.98] transition-transform duration-300 ease-in-out transform">
          <img
            className="object-cover w-full h-full"
            src="/public/img/hero-3.jpg"
          />
        </div>
        <p className=" text-xl sm:text-4xl font-thin font-Montserrat">
          Altar I focuses on one idea: Less, but better. A precision machined
          aluminium monobody. Slim, tactile, mechanical switches.
          Typographically balanced. Bluetooth. Quietly understated. And it looks
          good on a desk.
        </p>
      </div>
    </div>
  );
};

export default Hero;
