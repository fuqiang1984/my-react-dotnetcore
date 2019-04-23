import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { surveysFetchData } from ".././../../redux/actions/surveyActions";
import { surveyDelete, surveyDeleteCollection } from ".././../../redux/actions/surveyActions";

import ListPage from '../common/ListPage';


class SurveysPage extends Component {


    constructor(props) {
        super(props);

        this.columns=[
            {
              Header: "Name",
              accessor: "Name"
            }
            
          ];
    }  

    render() {
       
            return (
                <React.Fragment>
                <ListPage columns={this.columns} fetchData={this.props.surveysFetchData} 
                x_pagination={this.props.x_pagination} data={this.props.data}
                isLoading={this.props.isLoading}
                hasErrored={this.props.hasErrored}
                errorMessage={this.props.errorMessage}
                teamDeleteCollection={this.props.surveyDeleteCollection}
                />

               
                </React.Fragment>

            );
        

    }
}

SurveysPage.propTypes = {};
SurveysPage.defaultProps = {};


const mapStateToProps = (state) => {

    return {
        data: state.teamsReducer.data,       // to match this.props.speakers:reducers.state.speakers.data
        isLoading: state.teamsReducer.isLoading,
        x_pagination: state.teamsReducer.x_pagination
    };
};


export default connect(mapStateToProps,
    { surveysFetchData, surveyDelete, surveyDeleteCollection })(SurveysPage)


