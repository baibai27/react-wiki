import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPage, page, info }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 mb-4"
      forcePage={page=== 1? 0 : page -1}
      previousLabel="Prev"
      nextLabel="Next"
      previousclassName="page-item pagination-lg"
      
      nextclassName="page-item pagination-lg"
      
      pageclassName="page-item"
      pageLinkclassName="page-link"
      onPageChange={(data) => {
        setPage(data.selected +1);
      }}
      activeclassName="active"
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
