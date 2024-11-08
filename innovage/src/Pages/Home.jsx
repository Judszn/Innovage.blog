import React from "react";
import Banner from "../Components/Banner";
import BlogPage from "../Components/BlogPage";
function Home() {
  return (
    <div>
      <Banner />

      <div className="max-w-[90rem] mx-auto">
        <BlogPage />
      </div>
    </div>
  );
}

export default Home;
