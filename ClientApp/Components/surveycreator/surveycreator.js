import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SurveyEditor from '../common/SurveyEditor';

class SurveyCreator extends Component {

	render() {
       
            return (
                <React.Fragment>
                <SurveyEditor />
                </React.Fragment>

            );
        

    }

}

export default SurveyCreator