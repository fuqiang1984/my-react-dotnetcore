import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TeamForm from './TeamForm';
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
            return (
                <TeamForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
              />
            );
    }
}



const mapStateToProps = (state) => {

    return {
        teams: state.teamReducer.data,       // to match this.props.speakers:reducers.state.speakers.data
        hasErrored: state.teamReducer.hasErrored,
        isLoading: state.teamReducer.isLoading,
        errorMessage: state.teamReducer.errorMessage
    };
};


export default connect(mapStateToProps,
    { teamsFetchData })(ManageTeamPage)


