import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPage, page, info }) => {
  let [width, setWidth] = useState(window.innerWidth);
  let updateDimension = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .next,
          .prev {
            display: none;
          }
          .pagination {
            display: flex;
            font-size: 14px;
          }
        }
      `}</style>
      <ReactPaginate
        className="pagination pagination-xl justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-light btn-lg next"
        previousClassName="btn btn-light btn-lg prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        onPageChange={(data) => setPage(data.selected + 1)}
        activeLinkClassName="active"
        forcePage={page === 1 ? 0 : page - 1}
        pageCount={info?.pages}
        marginPagesDisplayed={width > 768 ? 2 : 0}
        pageRangeDisplayed={width > 768 ? 5 : 3}
      />
    </>
  );
};

export default Pagination;
