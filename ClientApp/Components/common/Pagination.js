import PropTypes from 'prop-types';
import React from 'react';

const Pagination = ({onPrev,onNext}) => {
  
  return (
    <React.Fragment>
    <a href="#" onClick={onPrev}>Prev</a>
    <a href="#" onClick={onNext}>Next</a>
    </React.Fragment>
  );
};



export default Pagination;
