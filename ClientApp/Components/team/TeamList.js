import PropTypes from 'prop-types';
import React from 'react';
import TeamListItem from './TeamListItem';

export default function TeamList({ teams,onPrev,onNext }) {
  return (
    <React.Fragment>
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {teams.map(team =>
                <TeamListItem key={team.Id} team={team}/>
                )}
                
            </tbody>
        </table>
        
             <a href="#" onClick={onPrev}>Prev</a>
             <a href="#" onClick={onNext}>Next</a>
         </React.Fragment>
       
  );
}

TeamList.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      Name: PropTypes.string
    })
  ),
};
