import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Video from "../assets/bg.mp4";
function Banner() {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="overlay absolute top-0 w-full h-full bg-[rgba(0, 0, 0, 0.4)]"></div>
      <video
        src={Video}
        autoPlay
        loop
        muted
        plays-inline
        w-full
        className="w-full h-full object-cover"
      />
      <div className="text-white text-center absolute w-full h-[80vh] top-0 flex items-center justify-center flex-wrap">
        <div>
          <h1 className="text-5xl lg:text-7xl loading-snug font-bold mb-5 text-orange-600 ">
            Welcome to Our Blog
          </h1>
          <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
            Start your blog today and join a community of writers and readers
            who are passinionate about sharing their stories and ideas We offer
            everything you need to get started, from helpful tips and tutorials
          </p>
          <div>
            <Link
              to="/about"
              className="font-medium inline-flex items-center py-1 hover:text-orange-500"
            >
              Learn more
              <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
