import React, { useEffect, useState } from "react";
import BlogPage from "../Components/BlogPage";
const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl loading-snug font-bold mb-5">
          Blog Page
        </h2>
      </div>
      {/* All blogs container */}
      <div className="max-w-[90rem] mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
