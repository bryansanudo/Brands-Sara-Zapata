import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import heroVideo from "@/assets/heroVideo.mp4";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div
      name="inicio"
      className="flex items-end justify-center h-[70vh] w-full md:h-screen text-center   "
    >
      <video
        ref={videoRef}
        autoPlay
        src={heroVideo}
        loop
        type="video/mp4"
        playsInline
        muted
        className=" object-cover w-[400px] h-[300px] md:h-full md:w-full absolute -z-10 "
      />

      <div
        className={`w-full p-8 flex flex-row items-center justify-center duration-500 gap-10 ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
        {isVideoPlaying ? (
          <FaPauseCircle
            size={25}
            onClick={handleVideoPause}
            className="cursor-pointer hover:scale-105 duration-300 text-thSecondary"
          />
        ) : (
          <FaPlayCircle
            size={25}
            onClick={handleVideoPlay}
            className="cursor-pointer hover:scale-100 duration-300 text-thSecondary"
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
