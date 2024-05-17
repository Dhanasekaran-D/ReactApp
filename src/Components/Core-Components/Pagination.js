import React from "react";
import './Pagination.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Pagination = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination mt-3 justify-content-between  " style={{backgroundColor:'#F8FAFC'}}>
      <div className="pagination-left p-1 px-3 align-content-center" style={{color:'rgba(24, 30, 37, 1)'}}>
        {startItem} to {endItem} out of {totalItems}
      </div>
      <div className="pagination-right p-1 px-3">
        <button className="" style={{border:'none', background:'transparent'}} onClick={handlePrevPage}><KeyboardArrowLeftIcon sx={{color:'rgba(24, 30, 37, 1)', opacity:'0.5 '}}/></button>
        {currentPage > 2 && <button className="btn" style={{color:'rgba(24, 30, 37, 1)',}} onClick={() => goToPage(1)}>1</button>}
        {currentPage > 3 && <span className="ellipsis">...</span>}
        {pages.map((page) => (
          <button key={page} className={`btn ${currentPage === page ? 'current-page' : ''}`} style={{color:'rgba(24, 30, 37, 1)',}} onClick={() => goToPage(page)}>{page}</button>
        ))}
        ...<button className="btn">{totalItems}</button>
        <button className=""style={{border:'none', background:'transparent'}} onClick={handleNextPage}><KeyboardArrowRightIcon sx={{color:'rgba(24, 30, 37, 1)', opacity:'0.5 '}}/></button>
      </div>
    </div>
  );
};

export default Pagination;
