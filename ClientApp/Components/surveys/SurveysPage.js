import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { surveyFetchData } from ".././../../redux/actions/surveyActions";
import { teamDelete, teamDeleteCollection } from ".././../../redux/actions/teamActions";

import ListPage from '../common/ListPage';


class SurveysPage extends Component {


    constructor(props) {
        super(props);

        this.columns=[

            {
              Header: "Name",
              accessor: "Name"
            },
            {
              Header: "Age",
              accessor: "Age"
            },
            {
              Header: "Genre",
              accessor: "Genre"
            }
            
          ];
    }  

    render() {
       
            return (
                <React.Fragment>
                <ListPage columns={this.columns} fetchData={this.props.teamsFetchData} 
                x_pagination={this.props.x_pagination} data={this.props.data}
                isLoading={this.props.isLoading}
                hasErrored={this.props.hasErrored}
                errorMessage={this.props.errorMessage}
                teamDeleteCollection={this.props.teamDeleteCollection}
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
    { teamsFetchData, teamDelete, teamDeleteCollection })(SurveysPage)


