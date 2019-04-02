import PropTypes from 'prop-types';
import React from 'react';
import PaginationItem from './PaginationItem'

const Pagination = ({ onPrev, onNext,onRangeClick, pagination }) => {

  let maxRangeNumber = Math.ceil(pagination.currentPage / 3) * 3;
  let acturalRangeNumber = maxRangeNumber > pagination.totalPages
    ? pagination.totalPages
    : maxRangeNumber;
  let startPage = (acturalRangeNumber - 2 <= 0) ? 1 : acturalRangeNumber - 2;
  var rangePages = [];
  for (var i = startPage; i <= acturalRangeNumber; i++) {
    rangePages.push(<li key={i} onClick={onRangeClick} className={pagination.currentPage == i ? "page-item active" : "page-item"}>
      <a class="page-link"
        href="#">{i}</a>
    </li>);
  }

  return (

    <React.Fragment>
      <nav aria-label="...">
        <ul class="pagination">
          <li className={pagination.currentPage == 1 ? "page-item disabled" : "page-item"}>
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true" onClick={onPrev}>Previous</a>
          </li>
          {rangePages}

          <li className={pagination.currentPage == pagination.totalPages ? "page-item disabled" : "page-item"}>
            <a class="page-link" href="#" onClick={onNext}>Next</a>
          </li>
        </ul>
      </nav>


    </React.Fragment>

    /*
      <a href="#" onClick={onPrev}>{pagination.totalCount}</a>
        <a href="#" onClick={onNext}>Next</a>
    {
      links.map(link =>
         <PaginationItem  link={link} onHandleClick={onNext} />
       )
    }*/
  );
};



export default Pagination;
