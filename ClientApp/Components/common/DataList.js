import PropTypes from 'prop-types';
import React from 'react';
import DataListItem from './DataListItem';

export default function DataList({ data,onPrev,onNext,onCheckboxchange }) {
  return (
      <div>
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map(item =>
                <DataListItem onCheckboxchange={onCheckboxchange} key={item.Id} item={item}/>
                )}
               
            </tbody>
        </table>
      </div>
       
  );
}

DataList.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      Name: PropTypes.string
    })
  ),
};
