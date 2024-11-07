import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function SideBar() {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <h3 className="text-3xl font-semibold  text-left">Latest Blogs</h3>
      <div>
        {popularBlogs.slice(0, 5).map((blog) => (
          <div
            key={blog.id}
            className="py-1 border-b-2 border-spacing-2 px-4 my-5"
          >
            <h4 className="font-medium mb-2">{blog.title}</h4>
            <Link
              to="/"
              className=" text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
            >
              Read more <FaArrowRight className="mt-1 ml-1" />
            </Link>
          </div>
        ))}
      </div>

      {/* Popular blog */}
      <div>
        <h3 className="text-3xl font-semibold px-4 mt-20 text-left">
          Popular Blogs
        </h3>
        <div>
          {popularBlogs.slice(5, 10).map((blog) => (
            <div
              key={blog.id}
              className="py-1 border-b-2 border-spacing-2 px-4 my-5"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className=" text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read more <FaArrowRight className="mt-1 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
