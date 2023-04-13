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

export default Pagination;
