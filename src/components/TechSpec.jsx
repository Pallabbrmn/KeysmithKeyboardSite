import React from "react";
import { motion } from "framer-motion";

const TechSpec = () => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <h1 className="text-2xl sm:text-[5rem] sm:font-extralight font-Montserrat leading-none py-4">
          TECHNICAL SPECIFICATION
        </h1>
      </motion.div>
      <div className="grid grid-cols-2 sm:h-[90vh] gap-4">
        <div className="bg-[#202020] rounded-3xl overflow-hidden hover:scale-[0.98] transition-transform duration-300 ease-in-out transform">
          <img
            className="h-full w-full object-cover"
            src="/public/img/drawing-orthographic.png"
          />
        </div>
        <div className="bg-[#202020] rounded-3xl overflow-hidden hover:scale-[0.98] transition-transform duration-300 ease-in-out transform">
          <img
            className="h-full w-full object-cover"
            src="/public/img/drawing-isometric.png"
          />
        </div>
      </div>
      <div className="spec font-Montserrat  text-lg sm:text-3xl ">
        <div
          className="grid grid-cols-[1fr,2fr]
          py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform "
        >
          <h1 className="opacity-[0.5]">Layouts</h1>
          <p>
            U.K. English (ISO-like, 78 key layout)
            <br />
            <span>U.S. English (ANSI-like, 77 key layout)</span>
          </p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform ">
          <h1 className="opacity-[0.5]">Height</h1>
          <p>15mm</p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Width</h1>
          <p>305.5mm</p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Depth</h1>
          <p>121mm</p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Weight</h1>
          <p>635g</p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Switches</h1>
          <p>
            Kailh Choc Low Profile v1 — Red
            <br />
            <span>Linear feel</span>
            <br />
            <span>50±10gf actuation force</span>
            <br />
            <span>1.5±0.5mm actuation travel</span>
          </p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Firmware</h1>
          <p>ZMK</p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Materials</h1>
          <p>
            6061 aluminium
            <br />
            <span>50% recycled content PBT</span>
            <br />
            <span>Silicone</span>
          </p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Battery</h1>
          <p>200mAh Lithium Polymer</p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Connectivity</h1>
          <p>
            2x Bluetooth 5.0 Low Energy (BLE) channels <br />{" "}
            <span>1x USB-C</span>
          </p>
        </div>

        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">OS support</h1>
          <p>
            Apple macOS 12 and up <br />{" "}
            <span>Microsoft Windows 10 and up</span>
          </p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Typography</h1>
          <p>
            Tobias by Display Type Foundry
            <br />
            <span>GT by Grilli Type</span>
          </p>
        </div>
        <div className="grid grid-cols-[1fr,2fr] py-8 border-b-2 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out transform">
          <h1 className="opacity-[0.5]">Box Contents</h1>
          <p>
            Alter I Keyboard <br />
            <span>Coiled USB-C to USB-C cable</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechSpec;
