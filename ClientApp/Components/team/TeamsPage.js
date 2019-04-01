import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TeamList from './TeamList';
import { Redirect } from 'react-router-dom'
import Pagination from '../common/Pagination'
import ReactPaginate from 'react-paginate';

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
            teamsResourceParameters: { PageNumber: 1 }
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
        console.log("didmount:" + this.state.teamsResourceParameters.PageNumber);
    }



    GoPrev = () => {
        event.preventDefault();
        console.log("before set:" + this.state.teamsResourceParameters.PageNumber);
        this.setState(
            (prevstate, props) => (
                {
                    teamsResourceParameters: { PageNumber: prevstate.teamsResourceParameters.PageNumber - 1 }
                }
            ),
            () => {
                console.log("gonext:" + this.state.teamsResourceParameters.PageNumber);
                // this.props.teamsFetchData(this.state.teamsResourceParameters);
            }
        );

    }


    GoNext = (link) => {
        event.preventDefault();
        console.log(link.rel);
        /*
        console.log("before set:"+this.state.teamsResourceParameters.PageNumber);
        this.setState(
            (prevstate,props)=>(
                {
                    teamsResourceParameters:{PageNumber:prevstate.teamsResourceParameters.PageNumber+1}
                }
              ),
              ()=>{
                console.log("gonext:" + this.state.teamsResourceParameters.PageNumber);
                this.props.teamsFetchData(this.state.teamsResourceParameters);
              }
            );*/
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
        // console.log(newlink);

        this.props.teamDelete(newlink).then(() => this.props.teamsFetchData(this.state.teamsResourceParameters))
            .catch((response) => {
                //handle form errors
            });


    }


    handlePageClick = data => {
        //debugger;
        let selected = data.selected;
        //let offset = Math.ceil(selected * this.props.x_pagination.pageSize);
        console.log(selected);
        let pagenumber = selected + 1;
        let teamsResourceParameters = { PageNumber: pagenumber };
        console.log(teamsResourceParameters);
         this.props.teamsFetchData(teamsResourceParameters);
        /*
         this.setState(
             (prevstate,props)=>(
                 {
                     teamsResourceParameters:{PageNumber:prevstate.teamsResourceParameters.PageNumber+1}
                 }
               ),
               ()=>{
                 console.log("gonext:" + this.state.teamsResourceParameters.PageNumber);
                 this.props.teamsFetchData(this.state.teamsResourceParameters);
               }
             );
             */

        //this.props.teamsFetchData(this.state.teamsResourceParameters);
        //console.log(offset);
        //this.setState({ offset: offset }, () => {
        //this.loadCommentsFromServer();
        //});
    };


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
                        <input type="submit"
                            value="Add Team"
                            className="btn btn-primary"
                            onClick={this.setRedirect} />
                        <TeamList teams={this.props.teams} onHandleClick={this.handleDelete} />
                        <h1>{this.state.teamsResourceParameters.PageNumber}</h1>
                    </div>
                    <Pagination links={this.props.links} onPrev={this.GoPrev} onNext={this.GoPrev} />
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.props.x_pagination.totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
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


