import React from "react";
import ReactPlayer from "react-player";
const url = "/vdo/Intro-desktop_v2.0.mp4";

const VideoPlayer = () => {
  return (
    <div className=" overflow-hidden rounded-3xl relative transition-transform duration-300 ease-in-out transform sm:w-full sm:h-full">
      <button className=" cursor-pointer z-50 text-xl sm:text-5xl sm:font-light font-Montserrat text-white bg-orange-500 px-4 py-2  sm:px-10 sm:py-4 rounded-xl sm:rounded-3xl absolute top-[65%] left-[32%] sm:top-[75%] sm:left-[40%] hover:bg-white hover:text-orange-500">
        Pre-order
      </button>
      <ReactPlayer
        url={url}
        loop={true}
        width={"full"}
        height={"full"}
        playing={true}
        controls={false}
        muted={true}
      />
    </div>
  );
};

export default VideoPlayer;
