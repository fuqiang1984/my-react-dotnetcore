import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TeamList from './TeamList';
//import axios from 'axios';

import { connect } from 'react-redux';
import { teamsFetchData } from ".././../../redux/actions/teamActions";

class TeamsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            appData: []
        };
    }

    componentDidMount() {
        this.props.teamsFetchData();
    }


    render() {

        if (this.props.isLoading) {
            return <span><i>Loading...</i></span>
        }
        else if (this.props.hasErrored) {
            return <span><b>Failed to load data: {this.props.errorMessage}</b></span>
        }
        else {
            return (
                <div>
                    <TeamList teams={this.props.teams} />
                </div>
            );
        }

    }
}

TeamsPage.propTypes = {};
TeamsPage.defaultProps = {};


const mapStateToProps = (state) => {

    return {
        teams: state.teamReducer.data,       // to match this.props.speakers:reducers.state.speakers.data
        hasErrored: state.teamReducer.hasErrored,
        isLoading: state.teamReducer.isLoading,
        errorMessage: state.teamReducer.errorMessage
    };
};


export default connect(mapStateToProps,
    { teamsFetchData })(TeamsPage)


