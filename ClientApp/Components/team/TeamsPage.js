import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { teamsFetchData } from ".././../../redux/actions/teamActions";
import { teamDelete, teamDeleteCollection } from ".././../../redux/actions/teamActions";

import ListPage from '../common/ListPage';


class TeamsPage extends Component {


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
        this.handleFetchData=this.handleFetchData.bind(this);
    }  

    handleFetchData(teamsResourceParameters){
      this.props.teamsFetchData(teamsResourceParameters);
    }

    render() {
       
            return (
                <React.Fragment>
<<<<<<< HEAD
                  <h1>{this.props.randomvalue}</h1>
                <ListPage columns={this.columns} fetchData={this.props.teamsFetchData} 
                x_pagination={this.props.x_pagination} data={this.props.data}
=======
                <ListPage columns={this.columns} 
                onFetchData={this.handleFetchData} 
                x_pagination={this.props.x_pagination} 
                data={this.props.data}
>>>>>>> ebfeda132414fe728b5b02f44cd4c6dae0b90403
                isLoading={this.props.isLoading}
                hasErrored={this.props.hasErrored}
                errorMessage={this.props.errorMessage}
                teamDeleteCollection={this.props.teamDeleteCollection}
                />

               
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
        x_pagination: state.teamsReducer.x_pagination,
        randomvalue:state.teamReducer.rvalue
    };
};


export default connect(mapStateToProps,
    { teamsFetchData, teamDelete, teamDeleteCollection })(TeamsPage)


