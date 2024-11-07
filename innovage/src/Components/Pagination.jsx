import React from "react";

function Pagination({ onPageChange, currentPage, Blogs, pageSize }) {
  const totalPages = Math.ceil(Blogs.length / pageSize);
  // console.log(totalPages);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className="pagination my-8 mt-20 flex-wrap gap-4 ">
      <li>
        <button
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div>{renderPaginationLinks()}</div>
      <li>
        <button
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
