import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteButton from '../common/DeleteButton'

export default function TeamListItem({team,onCheckboxchange}) {


    return (
        <tr>
            <td><input
              type="checkbox"
              id={team.Id}
              onChange={onCheckboxchange}
            /></td>
            <td>Watch</td>
            <td><Link to={'/team/' + team.Id}>{team.Name}</Link></td>
            <td>{team.Id}</td>
            <td>{team.Id}</td>
            <td>{team.Id}</td>
            
        </tr>
    );
    //<td><DeleteButton onHandleClick={onHandleClick} team={team} /></td>
}

TeamListItem.propTypes = {
    Id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Name: PropTypes.string
};
