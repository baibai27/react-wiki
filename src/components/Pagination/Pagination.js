<<<<<<< HEAD
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
=======
import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({setPage, page, info}) => {
  
  return (
    <ReactPaginate 
    className='pagination pagination-xl justify-content-center gap-4 my-4'
    nextLabel='Next'
    previousLabel='Prev'
    nextClassName='btn btn-light btn-lg'
    previousClassName='btn btn-light btn-lg'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    onPageChange={(data) => setPage(data.selected + 1)}
    activeLinkClassName='active'
    forcePage={page===1?0:page-1}
    pageCount={info?.pages}/>
  )
}
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5

export default Pagination;
