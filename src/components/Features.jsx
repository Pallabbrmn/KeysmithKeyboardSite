import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Features = () => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <h1 className=" text-2xl sm:text-[5rem] sm:font-extralight font-Montserrat leading-none py-4">
          KEY FEATURES KEY FEATURES
        </h1>
      </motion.div>
      <div className="gallery flex flex-col gap-4">
        <div className="grid sm:grid-cols-3 gap-4 h-[90vh]">
          <div className="overflow-hidden rounded-3xl  hover:scale-[0.98] transition-transform duration-300 ease-in-out transform relative">
            <img
              className="h-full w-full object-cover"
              src="/public/img/bluetooth.jpg"
            />
            <div className="absolute bottom-[4%] left-[5%] font-Montserrat">
              <h1 className="sm:text-3xl opacity-[0.5]">Wireless-</h1>
              <p className="sm:text-3xl">Remember 2 Bluetooth devices</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl hover:scale-[0.98] transition-transform duration-300 ease-in-out transform relative">
            <img
              className="h-full w-full object-cover"
              src="/public/img/keycaps.jpg"
            />
            <div className="absolute bottom-[4%] left-[5%] font-Montserrat">
              <h1 className="sm:text-3xl opacity-[0.5]">Keycaps-</h1>
              <p className="sm:text-3xl">Novel key shapes</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl hover:scale-[0.98] transition-transform duration-300 ease-in-out transform relative">
            <img
              className="h-full w-full object-cover"
              src="/public/img/arrows.jpg"
            />
            <div className="absolute bottom-[4%] left-[5%] font-Montserrat">
              <h1 className="sm:text-3xl opacity-[0.5]">Layout-</h1>
              <p className="sm:text-3xl">Full sized arrow keys</p>
            </div>
          </div>
        </div>
        <div className=" rounded-3xl overflow-hidden relative hover:scale-[0.98] transition-transform duration-300 ease-in-out transform">
          <img
            className="w-full h-full object-cover"
            src="/public/img/thinness-desktop.jpg"
          />
          <div className="absolute bottom-[4%] left-[2%] font-Montserrat ">
            <h1 className="sm:text-3xl opacity-[0.5]">Ultra thin-</h1>
            <p className="sm:text-3xl">With a compact layout</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 h-[90vh]">
          <div className="overflow-hidden rounded-3xl  hover:scale-[0.98] transition-transform duration-300 ease-in-out transform relative">
            <img
              className="h-full w-full object-cover"
              src="/public/img/switches.jpg"
            />
            <div className="absolute bottom-[4%] left-[5%] font-Montserrat">
              <h1 className="sm:text-3xl opacity-[0.5]">Switches-</h1>
              <p className="sm:text-3xl">
                Kailh low-profile mechanical switches
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl hover:scale-[0.98] transition-transform duration-300 ease-in-out transform relative">
            <img
              className="h-full w-full object-cover"
              src="/public/img/london.jpg"
            />
            <div className="absolute bottom-[4%] left-[5%] font-Montserrat">
              <h1 className="sm:text-3xl opacity-[0.5]">London born-</h1>
              <p className="sm:text-3xl">Assembled in UK</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl hover:scale-[0.98] transition-transform duration-300 ease-in-out transform relative">
            <img
              className="h-full w-full object-cover"
              src="/public/img/layouts.jpg"
            />
            <div className="absolute bottom-[4%] left-[5%] font-Montserrat">
              <h1 className="sm:text-3xl opacity-[0.5]">Layout-</h1>
              <p className="sm:text-3xl">European and U.S. layouts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
