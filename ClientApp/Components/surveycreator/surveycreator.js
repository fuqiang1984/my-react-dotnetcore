import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SurveyEditor from '../common/SurveyEditor';

class SurveyCreator extends Component {



	sendDataToServer=(text)=>{
		console.log("123"+text);


	}

	render() {
       
            return (
                <React.Fragment>
                <SurveyEditor saveMySurvey={this.sendDataToServer}/>
                </React.Fragment>

            );
        

    }

}

export default SurveyCreator