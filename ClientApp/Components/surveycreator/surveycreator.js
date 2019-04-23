import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SurveyEditor from '../common/SurveyEditor';
import { saveSurvey } from ".././../../redux/actions/surveyActions"; 

class SurveyCreator extends Component {



	sendDataToServer=(text)=>{
       // console.log("123"+text);
        let survey = {Id: '', Name: '123', Age: '', JSONDefinition: text};
        this.props.saveSurvey(survey)

	}

	render() {
       
            return (
                <React.Fragment>
                <SurveyEditor saveMySurvey={this.sendDataToServer}/>
                </React.Fragment>

            );
        

    }

}

const mapStateToProps = (state,ownProps) => {

    //debugger;
    
    const surveyId = ownProps.match.params.id; // from the path `/course/:id`
  
    let survey = {Id: '', Name: '', Age: '', Genre: ''};
  
    //if (surveyId && state.surveysReducer.data.length > 0) {
        //team = getTeamById(state.teamsReducer.data, teamId);
    //}
  
  
      return {
          survey: survey
      };
  };

export default connect(mapStateToProps,
    { saveSurvey })(SurveyCreator)
