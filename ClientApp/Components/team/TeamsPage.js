import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TeamList from './TeamList';
import { Redirect } from 'react-router-dom'
//import axios from 'axios';

import { connect } from 'react-redux';
import { teamsFetchData } from ".././../../redux/actions/teamActions";

class TeamsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            appData: [],
            redirect: false,
            teamsResourceParameters:{PageNumber: 1}
        };
        //this.redirectToAddTeamPage=this.redirectToAddTeamPage.bind(this);
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/team' />
        }
    }

    componentDidMount() {
        //var teamsResourceParameters = {PageNumber: 3};
        this.props.teamsFetchData(this.state.teamsResourceParameters);
        console.log("didmount:"+this.state.teamsResourceParameters.PageNumber);
    }

    GoPrev=()=>{

    }
   
    
    GoNext=()=>{
       // var teamsResourceParameters = {PageNumber: 3};
      // this.setState({
             // teamsResourceParameters: {PageNumber: }
        // });
        event.preventDefault();
        this.setState(prevState => ({
            //profiles: [...prevState.profiles, profileData],
            
            teamsResourceParameters:{PageNumber:prevState.teamsResourceParameters.PageNumber+1}
        }));

        console.log(this.state.teamsResourceParameters.PageNumber);
        this.props.teamsFetchData(this.state.teamsResourceParameters);
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
                    <h1>Teams</h1>
                    {this.renderRedirect()}
                    <input type="submit"
                        value="Add Team"
                        className="btn btn-primary"
                        onClick={this.setRedirect}/>
                    <TeamList onPrev={this.GoPrev} onNext={this.GoNext} teams={this.props.teams} />
                </div>
            );
        }

    }
}

TeamsPage.propTypes = {};
TeamsPage.defaultProps = {};


const mapStateToProps = (state) => {

    return {
        teams: state.teamsReducer.data,       // to match this.props.speakers:reducers.state.speakers.data
        hasErrored: state.teamsReducer.hasErrored,
        isLoading: state.teamsReducer.isLoading,
        errorMessage: state.teamsReducer.errorMessage
    };
};


export default connect(mapStateToProps,
    { teamsFetchData })(TeamsPage)


