import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//import DeleteButton from '../common/DeleteButton'

export default function DataListItem({item,onCheckboxchange}) {


    return (
        <tr>
            <td><input
              type="checkbox"
              id={item.Id}
              onChange={onCheckboxchange}
            /></td>

            
            <td>Watch</td>
            <td><Link to={'/team/' + item.Id}>{item.Name}</Link></td>
            <td>{item.Id}</td>
            <td>{item.Id}</td>
            <td>{item.Id}</td>
            
        </tr>
    );
    //<td><DeleteButton onHandleClick={onHandleClick} team={team} /></td>
}

DataListItem.propTypes = {
    Id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Name: PropTypes.string
};
