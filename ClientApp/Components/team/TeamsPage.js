import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TeamList from './TeamList';
import { Redirect } from 'react-router-dom';
import Pagination from '../common/Pagination';
import SearchBar from '../common/SearchBar';


//import axios from 'axios';

import { connect } from 'react-redux';
import { teamsFetchData } from ".././../../redux/actions/teamActions";
import { teamDelete } from ".././../../redux/actions/teamActions";

class TeamsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            appData: [],
            redirect: false,

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
        let pageNumber = this.props.x_pagination == null ? 1 : this.props.x_pagination.currentPage > 0 ? this.props.x_pagination.currentPage : 1;
        let teamsResourceParameters = { PageNumber: pageNumber };
        this.props.teamsFetchData(teamsResourceParameters);
        console.log("didmount");
    }

    onRangeClick = (event) => {
        const field = event.target.text;
        let teamsResourceParameters = { PageNumber: field };
        this.props.teamsFetchData(teamsResourceParameters);

    }


    GoPrev = () => {
        event.preventDefault();
        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage - 1 };
        this.props.teamsFetchData(teamsResourceParameters);


    }


    GoNext = (link) => {
        event.preventDefault();
        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage + 1 };
        this.props.teamsFetchData(teamsResourceParameters);

    }

    getLinkById = (links, method) => {
        const link = links.filter(link => link.method == method);
        if (link) return link[0]; //since filter returns an array, have to grab the first.
        return null;
    }

    handleDelete = (team) => {
        var link = null;
        console.log(team.Id);
        if (team.links.length > 0) {
            link = this.getLinkById(team.links, "DELETE");
        }
        //console.log(link);
        const production = process.env.NODE_ENV &&
            process.env.NODE_ENV === "production";
        const restUrl = production ?
            process.env.PROD_RESTURL :
            process.env.JSONSERVER_RESTURL;
        var newlink = link.href.replace(restUrl, '');

        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage };
        this.props.teamDelete(newlink).then(() => this.props.teamsFetchData(teamsResourceParameters))
            .catch((response) => {
                //handle form errors
            });


    }

    render() {
        console.log("Begin render")
        if (this.props.isLoading) {
            return <span><i>Loading...</i></span>
        }
        else if (this.props.hasErrored) {
            return <span><b>Failed to load data: {this.props.errorMessage}</b></span>
        }
        else {
            return (
                <React.Fragment>
                    <div>
                        <h1>Teams</h1>
                        {this.renderRedirect()}
                       
                         <SearchBar placeholder="Search" />
                        
                        <input type="submit"
                            value="Add Team"
                            className="btn btn-primary"
                            onClick={this.setRedirect} />

                        <TeamList teams={this.props.teams} onHandleClick={this.handleDelete} />
                    </div>


                    <Pagination pagination={this.props.x_pagination} onRangeClick={this.onRangeClick} onPrev={this.GoPrev} onNext={this.GoNext} />

                </React.Fragment>
            );
        }

    }
}

TeamsPage.propTypes = {};
TeamsPage.defaultProps = {};


const mapStateToProps = (state) => {

    return {
        teams: state.teamsReducer.data,       // to match this.props.speakers:reducers.state.speakers.data
        links: state.teamsReducer.links,
        hasErrored: state.teamsReducer.hasErrored,
        isLoading: state.teamsReducer.isLoading,
        x_pagination: state.teamsReducer.x_pagination,
        errorMessage: state.teamsReducer.errorMessage
    };
};


export default connect(mapStateToProps,
    { teamsFetchData, teamDelete })(TeamsPage)


