import PropTypes from 'prop-types';
import React from 'react';
import DataListItem from './DataListItem';

export default function DataList({ columns,data,onPrev,onNext,onCheckboxchange,onCheckall,checkAll,selected }) {
  //console.log(checkAll);
  return (
      <div>
        <table className="table">
            <thead>
                <tr>
                <th><input
              type="checkbox"
              checked={checkAll===1}
              onChange={onCheckall}
              ref={input => {
                    if (input) {
                      input.indeterminate = checkAll === 2;
                    }
                  }}

            /></th>
                {columns.map(column=><th>{column.Header}</th>)}
                    
                    
                </tr>
            </thead>
            <tbody>
                {data.map(item =>
                <DataListItem  selected={selected} columns={columns} onCheckboxchange={onCheckboxchange} key={item.Id} item={item}/>
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
