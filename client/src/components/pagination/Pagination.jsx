import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalItems }) => {
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
      -
      </button>
      <span>Página {currentPage}</span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        +
      </button>
    </div>
  );
};

export default Pagination;
