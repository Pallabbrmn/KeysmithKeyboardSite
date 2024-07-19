import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between font-Lora py-4 w-full px-1 sm:px-0">
      <h1 className="text-2xl sm:text-4xl font-thin cursor-pointer">
        Keysmith
      </h1>
      <div className="flex sm:gap-10 gap-2 ">
        <h1 className="text-md sm:text-2xl font-thin cursor-pointer hover:opacity-60">
          About
        </h1>
        <h1 className="text-md sm:text-2xl font-thin cursor-pointer hover:opacity-60">
          Updates
        </h1>
        <h1 className="text-md sm:text-2xl font-thin cursor-pointer hover:opacity-60">
          Product
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
