import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[15%] px-6 md:px-14 absolute text-white sm:bg-gradient-to-r from-black sm:px-10 sm:text-md">
        <h1 className="font-semibold md:font-bold text-2xl py-4 md:py-0 md:text-4xl">{title}</h1>
        <p className="hidden sm:inline-block md:text-sm==md lg:text-xl md:w-1/3 md:py-6">{overview}</p> 
        <div className="flex gap-3 md:mt-0 sm:mt-5 sm:flex">
        <button className="bg-white sm:px-6 text-black hover:bg-opacity-80 md:text-xl py-2 px-4 md:px-12 rounded-lg flex gap-2 items-center">
          <FaPlay className="mr-2" /> Play
        </button>
        <button className="bg-gray-600 hidden sm:block sm:flex sm:px-6 sm:items-center text-white hover:bg-opacity-80 px-4 md:text-xl py-2 md:px-12 rounded-lg md:flex md:gap-2 md:items-center">
      <FaInfoCircle className="mr-2" /> More Info
    </button>
      </div>
    </div>
  );
}

export default VideoTitle;
    