import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TeamListItem({team}) {


    return (
        <tr>
            <td>Watch</td>
            <td><Link to={'/team/' + team.Id}>{team.Name}</Link></td>
            <td>{team.Id}</td>
            <td>{team.Id}</td>
            <td>{team.Id}</td>
        </tr>
    );
}

TeamListItem.propTypes = {
    Id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Name: PropTypes.string
};
