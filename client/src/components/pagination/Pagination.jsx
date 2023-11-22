import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';

const Pagination = ({  totalItems }) => {
  const currentPage = useSelector(state => state.currentPage)
  const dispatch = useDispatch()
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <button
        onClick={() => dispatch(setCurrentPage(currentPage -1))}
        disabled={currentPage === 1}
      >
      -
      </button>
      <span>Página {currentPage}</span>
      <button
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        +
      </button>
    </div>
  );
};

export default Pagination;
