import React from "react";

const Preorder = () => {
  return (
    <div className="sm:h-[80vh] rounded-2xl overflow-hidden mt-10 bg-white relative">
      <img
        className="h-full object-left"
        src="/public/img/waitlist-image.jpg"
      />
      <div className="font-Montserrat absolute top-[70%] left-[10%] sm:top-[40%] sm:left-[53%] flex flex-col gap-6">
        <p className="sm:text-black sm:text-4xl">
          Pre-orders for Altar I are now open.
        </p>
        <div className="flex justify-center">
          <button className=" cursor-pointer z-50 text-xl sm:text-5xl sm:font-light font-Montserrat text-white bg-orange-500 px-4 py-2  sm:px-10 sm:py-4 rounded-xl sm:rounded-3xl ">
            Pre-order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preorder;
