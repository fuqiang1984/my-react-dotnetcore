import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { teamsFetchData } from ".././../../redux/actions/teamActions";
import { teamDelete, teamDeleteCollection } from ".././../../redux/actions/teamActions";

import ListPage from '../common/ListPage';


class TeamsPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            searchText: '',
            hasChecked: false

        };
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
                <ListPage columns={this.columns} {...this.props}/>
                </React.Fragment>

            );
        

    }
}

TeamsPage.propTypes = {};
TeamsPage.defaultProps = {};


const mapStateToProps = (state) => {

    return {
        data: state.teamsReducer.data,       // to match this.props.speakers:reducers.state.speakers.data
        isLoading: state.teamsReducer.isLoading,
        x_pagination: state.teamsReducer.x_pagination
    };
};


export default connect(mapStateToProps,
    { teamsFetchData, teamDelete, teamDeleteCollection })(TeamsPage)


