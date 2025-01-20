import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Image from "../assets/Image.jpg";

function Banner() {
  return (
    <div className="px-4 py-10 bg-black mx-auto relative">
      <div className="overlay absolute w-full h-[80vh] flex items-center justify-center bg-black opacity-60  "></div>

      <div
        className="text-white text-center  w-full h-[80vh] top-0 flex items-center justify-center flex-wrap bg-cover"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="absolute">
          <h1 className="text-5xl lg:text-7xl loading-snug font-bold mb-5 text-orange-500 ">
            Welcome to Innovage-+
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
