import PropTypes from 'prop-types';
import React from 'react';
import PaginationItem from './PaginationItem'

const Pagination = ({onPrev,onNext,links}) => {
  
  return (
    <React.Fragment>
     {
     	links.map(link =>
          <PaginationItem  link={link} onHandleClick={onNext} />
        )
     }
    
    </React.Fragment>
  );
};

//<a href="#" onClick={onPrev}>Prev</a>
    //<a href="#" onClick={onNext}>Next</a>

export default Pagination;
