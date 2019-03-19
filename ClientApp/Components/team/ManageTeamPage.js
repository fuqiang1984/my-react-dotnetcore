import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TeamForm from './TeamForm';
//import axios from 'axios';

import { connect } from 'react-redux';
import { teamCreate } from ".././../../redux/actions/teamActions";
import { Redirect } from 'react-router-dom'; 

class ManageTeamPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: Object.assign({}, props.team),
            errors: {},
            saving: false,
            success:props.success
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
        const field = event.target.name;
        let team = Object.assign({}, this.state.team);
        team[field] = event.target.value;
        return this.setState({team: team});
    }

    saveTeam(event) {
        event.preventDefault();
       
        if (!this.teamFormIsValid()) {
          return;
        }
    
        this.setState({saving: true});
       
        this.props.teamCreate(this.state.team);
    
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
            if(this.props.success==true){
                this.props.success=false;
                return <Redirect to='/teams' />
            }
            return (

                //this.renderRedirect()
                
                <TeamForm
               
                onChange={this.updateTeamState}
                onSave={this.saveTeam}
                team={this.state.team}
                errors={this.props.errors}
                saving={this.props.saving}
              />
            );
    }
}



const mapStateToProps = (state) => {

    return {
        team: state.teamReducer.data,
        success:state.teamReducer.success,
        errors:state.teamReducer.errors,
        saving:state.teamReducer.saving
    };
};


export default connect(mapStateToProps,
    { teamCreate })(ManageTeamPage)


