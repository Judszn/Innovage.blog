import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
function Banner() {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl loading-snug font-bold mb-5">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Start your blog today and join a community of writers and readers who
          are passinionate about sharing their stories and ideas We offer
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
  );
}

export default Banner;
