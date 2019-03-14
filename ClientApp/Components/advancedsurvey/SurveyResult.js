import React, {PropTypes} from 'react';
import SurveyResultListRow from './SurveyResultListRow';

const SurveyResult = ({surveyResults}) => {
  return (
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
      {surveyResults.map(result =>
        <SurveyResultListRow key={result.id} result={result}/>
      )}
      </tbody>
    </table>
  );
};

SurveyResult.propTypes = {
    //surveyResults: PropTypes.array.isRequired
};

export default SurveyResult;
