import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteButton from '../common/DeleteButton'

export default function TeamListItem({team,onHandleClick}) {


    return (
        <tr>
            <td>Watch</td>
            <td><Link to={'/team/' + team.Id}>{team.Name}</Link></td>
            <td>{team.Id}</td>
            <td>{team.Id}</td>
            <td>{team.Id}</td>
            <td><DeleteButton onHandleClick={onHandleClick} team={team} /></td>
        </tr>
    );
}

TeamListItem.propTypes = {
    Id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Name: PropTypes.string
};
