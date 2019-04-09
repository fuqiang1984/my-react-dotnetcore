import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TeamList from './TeamList';
import { Redirect } from 'react-router-dom';
import Pagination from '../common/Pagination';
import SearchBar from '../common/SearchBar';


//import axios from 'axios';

import { connect } from 'react-redux';
import { teamsFetchData } from ".././../../redux/actions/teamActions";
import { teamDelete,teamDeleteCollection } from ".././../../redux/actions/teamActions";
import arrayRemove from '../utils/Helper';

class TeamsPage extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            appData: [],
            redirect: false,
            searchText:'',
            hasChecked:false
           

        };
        this.checkedData=[];
     
        
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
        let teamsResourceParameters = { PageNumber: pageNumber,searchQuery:this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);
        console.log("didmount");
    }

    onRangeClick = (event) => {
        const field = event.target.text;
        let teamsResourceParameters = { PageNumber: field,searchQuery:this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);

    }


    GoPrev = () => {
        event.preventDefault();
        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage - 1,searchQuery:this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);


    }


    GoNext = (link) => {
        event.preventDefault();
        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage + 1,searchQuery:this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);

    }

    getLinkById = (links, method) => {
        const link = links.filter(link => link.method == method);
        if (link) return link[0]; //since filter returns an array, have to grab the first.
        return null;
    }

    handleCheckboxchange=(event)=>{

        const field = event.target.id;
        const checked=event.target.checked;
        
        if(checked){
            console.log("push");
            this.checkedData.push(field);
        }else{
             console.log("filter");
             arrayRemove(this.checkedData,field);

           // this.checkedData.filter(id=>id!=field);
        }
         
        if(this.checkedData.length===0){
            this.setState({hasChecked:false});
        }else if(this.checkedData.length===1 && checked===true){
            this.setState({hasChecked:true});
        }
        //this.checkedData=checked?this.checkedData.push(field):this.checkedData.filter(id=>id!=field);
        
        console.log(this.checkedData);
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
        this.props.teamDelete(newlink).then(
                () => {

                    this.props.teamsFetchData(teamsResourceParameters);
                    
                }
               
            )
            .catch((response) => {
                //handle form errors
            });


    }

    handleDeleteMultiple=()=>{
         let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage,searchQuery:this.state.searchText };
         this.props.teamDeleteCollection(this.checkedData).then(() => {
                     this.checkedData=[];
                     this.props.teamsFetchData(teamsResourceParameters);


               }).then(()=>this.setState({hasChecked:false}))

            
            .catch((response) => {
                //handle form errors
            });

    }

    updateSearchText=(event)=>{
        const field = event.target.value;
        console.log(field);

        this.setState({
            searchText:field
        });
        //let team = Object.assign({}, this.state.team);
        //team[field] = event.target.value;
        //return this.setState({team: team});
    }

    Search=(event)=>{
        let teamsResourceParameters = { PageNumber:1,searchQuery:this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);
    }

    render() {
        console.log("Begin render")
        console.log("search text is:" +this.state.searchText);
        //let filteredteams=this.state.searchText===""?this.props.teams:this.props.teams.filter(team=>team.Name.includes(this.state.searchText));
        //debugger;
        if (this.props.isLoading) {
            return <span><i>Loading...</i></span>
        }
        else if (this.props.hasErrored) {
            return <span><b>Failed to load data: {this.props.errorMessage}</b></span>
        }
        else {
            //  <TeamList teams={this.state.searchText===""?this.props.teams:
            //            this.props.teams.filter(team=>team.Name.includes(this.state.searchText))} 
           //             onHandleClick={this.handleDelete} />
            return (
                <React.Fragment>
                    <div>
                        <h1>Teams</h1>
                        {this.renderRedirect()}
                       
                         <SearchBar onChange={this.updateSearchText} onClick={this.Search} searchText={this.state.searchText} placeholder="Search" />
                        
                        <input type="submit"
                            value="Add Team"
                            className="btn btn-primary"
                            onClick={this.setRedirect} />

                        <input type={this.state.hasChecked?"submit":"hidden"}
                            value="Delete Team"
                            className="btn btn-primary"
                            onClick={this.handleDeleteMultiple} />

                        <TeamList onCheckboxchange={this.handleCheckboxchange} teams={this.props.teams} onHandleClick={this.handleDelete} />
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
    { teamsFetchData, teamDelete, teamDeleteCollection })(TeamsPage)


