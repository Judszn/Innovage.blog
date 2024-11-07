import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
const BlogPage = () => {
  const [Blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //Blogs per page
  const [selectedCategory, saveselectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    async function fetchBlogs() {
      let url = "http://localhost:5000/blogs";
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
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        {/*  blogCards section*/}
        <div>
          {/* blog cards components */}
          <BlogCard
            blogs={Blogs}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
            pageSize={pageSize}
          />
        </div>

        {/* SideBar section */}
        <div>
          <SideBar />
        </div>
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
