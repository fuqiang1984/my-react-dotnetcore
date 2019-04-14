import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//import DeleteButton from '../common/DeleteButton'

export default function DataListItem({checkAll,columns,item,onCheckboxchange}) {


    return (
        <tr>
            <td><input
              type="checkbox"
              id={item.Id}
              
              onChange={onCheckboxchange}
            /></td>

            {columns.map(column=>
                  <td>{item[column.accessor]}</td>

                )}
            <td><Link to={'/team/' + item.Id}>Edit</Link></td>
            
        </tr>
    );
    //<td><DeleteButton onHandleClick={onHandleClick} team={team} /></td>
}

DataListItem.propTypes = {
    Id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Name: PropTypes.string
};
