import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TeamForm from './TeamForm';
//import axios from 'axios';

import { connect } from 'react-redux';
import { teamSave } from ".././../../redux/actions/teamActions";
import { Redirect } from 'react-router-dom'; 


class ManageTeamPage extends Component {

    constructor(props,context) {
        super(props);
        this.state = {
            team: Object.assign({}, props.team),
            errors: {},
            saving: false,
            success:false
          };
        this.updateTeamState=this.updateTeamState.bind(this); 
        this.saveTeam=this.saveTeam.bind(this); 

    }

    
    teamFormIsValid() {
        /*
        let formIsValid = true;
        let errors = {};
    
        if (this.state.team.name.length < 5) {
          errors.name = 'Name must be at least 5 characters.';
          formIsValid = false;
        }
    
        this.setState({errors: errors});
        return formIsValid;
        */
        return true;
      }


    updateTeamState(event) {
        //debugger;
        const field = event.target.name;
        let team = Object.assign({}, this.state.team);
        team[field] = event.target.value;
        return this.setState({team: team});
    }

    redirect() {
      this.setState({saving: false});
      //toastr.success('Course saved');
      this.setState({success:true});
      //this.context.router.push('/teams');
    }

    saveTeam(event) {
        event.preventDefault();
       
        if (!this.teamFormIsValid()) {
          return;
        }
    
        this.setState({saving: true});
       
        this.props.teamSave(this.state.team)
        .then(() => this.redirect())
        .catch((response) => {
               //handle form errors
        });
    
        /*
        this.props.actions.saveCourse(this.state.course)
          .then(() => this.redirect())
          .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
          });
        */
    }

    


    render() {    
            console.log("Render ManageTeamPage");
            if(this.state.success==true){
                
                return <Redirect to='/teams' />
            }
            return (

                //this.renderRedirect()
                
                <TeamForm
               
                onChange={this.updateTeamState}
                onSave={this.saveTeam}
                team={this.state.team}
                errors={this.state.errors}
                saving={this.state.saving}
              />
              
            );
    }
}

function getTeamById(teams, id) {
  const team = teams.filter(team => team.Id == id);
  if (team) return team[0]; //since filter returns an array, have to grab the first.
  return null;
}

const mapStateToProps = (state,ownProps) => {

  //debugger;
  
  const teamId = ownProps.match.params.id; // from the path `/course/:id`

  let team = {Id: '', Name: '', Age: '', Genre: ''};

  if (teamId && state.teamsReducer.data.length > 0) {
    team = getTeamById(state.teamsReducer.data, teamId);
  }

  //return {
  //  course: course,
  //  authors: authorsFormattedForDropdown(state.authors)
  //};

    return {
        team: team
        //success:state.teamReducer.success,
        //errors:state.teamReducer.errors,
        //saving:state.teamReducer.saving
    };
};


export default connect(mapStateToProps,
    { teamSave })(ManageTeamPage)


