import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SurveyResultListRow = ({result}) => {
  return (
    <tr>
      <td><a href={result.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.result}</Link></td>
      <td>{result.authorId}</td>
      <td>{result.category}</td>
      <td>{result.length}</td>
    </tr>
  );
};

SurveyResultListRow.propTypes = {
    //result: PropTypes.object.isRequired
};

export default SurveyResultListRow;
