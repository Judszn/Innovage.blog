import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
const BlogPage = () => {
  const [Blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //Blogs per page
  const [selectedCategory, saveselectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    async function fetchBlogs() {
      let url =
        "http://localhost:5000/blogs?pages=$%7BcurrentPage%7D&limit=$%7BpageSize%7D";

      //if filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
      // console.log(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  //page changing button
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    saveselectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };
  console.log(Blogs);
  return (
    <div>
      {/* category section */}
      <div>Page Category</div>

      {/*  blogCards section*/}
      <div>
        <BlogCard
          blogs={Blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>

      {/* pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          Blogs={Blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
