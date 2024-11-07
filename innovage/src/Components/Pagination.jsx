import React from "react";

function Pagination({ onPageChange, currentPage, Blogs, pageSize }) {
  const totalPages = Math.ceil(Blogs.length / pageSize);
  //console.log(totalPages);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="{pageNumber}" onClick={() => onPageChange(pageNumber)}></a>
        </li>
      )
    );
  };
  return <div>Pagination</div>;
}

export default Pagination;
