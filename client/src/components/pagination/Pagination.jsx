import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';
import style from './pagination.module.css';

const Pagination = ({  totalItems }) => {
  const currentPage = useSelector(state => state.currentPage)
  const dispatch = useDispatch()
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={style.buttonContainer}>
      <button
        onClick={() => dispatch(setCurrentPage(currentPage -1))}
        disabled={currentPage === 1}
      >
        -
      </button>
      <span className={style.pageNumber}>Página {currentPage}</span>
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
