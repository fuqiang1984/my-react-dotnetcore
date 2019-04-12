import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import TeamList from './TeamList';

//import TeamGrid from './TeamGrid';
//import TeamGridWithSort from './TeamGridWithSort';
import { Redirect } from 'react-router-dom';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import DataList from './DataList'



//import axios from 'axios';

import { connect } from 'react-redux';
import { teamsFetchData } from ".././../../redux/actions/teamActions";
import { teamDelete, teamDeleteCollection } from ".././../../redux/actions/teamActions";
import arrayRemove from '../utils/Helper';


class ListPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            searchText: '',
            hasChecked: false

        };
        this.checkedData = [];
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
        let teamsResourceParameters = { PageNumber: pageNumber, searchQuery: this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);
    }



    onRangeClick = (event) => {
        const field = event.target.text;
        let teamsResourceParameters = { PageNumber: field, searchQuery: this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);

    }


    GoPrev = () => {
        event.preventDefault();
        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage - 1, searchQuery: this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);


    }


    GoNext = (link) => {
        event.preventDefault();
        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage + 1, searchQuery: this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);

    }

    handleCheckboxchange = (event) => {

        const field = event.target.id;
        const checked = event.target.checked;

        if (checked) {
            this.checkedData.push(field);
        } else {
            arrayRemove(this.checkedData, field);
        }

        if (this.checkedData.length === 0) {
            this.setState({ hasChecked: false });
        } else if (this.checkedData.length === 1 && checked === true) {
            this.setState({ hasChecked: true });
        }
    }



    handleDeleteMultiple = () => {
        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage, searchQuery: this.state.searchText };
        this.props.teamDeleteCollection(this.checkedData).then(() => {
            this.checkedData = [];
            this.props.teamsFetchData(teamsResourceParameters);


        }).then(() => this.setState({ hasChecked: false }))


            .catch((response) => {
                //handle form errors
            });

    }

    updateSearchText = (event) => {
        const field = event.target.value;
        console.log(field);

        this.setState({
            searchText: field
        });
    }

    Search = (event) => {
        let teamsResourceParameters = { PageNumber: 1, searchQuery: this.state.searchText };
        this.props.teamsFetchData(teamsResourceParameters);
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
                       
                         <SearchBar onChange={this.updateSearchText} onClick={this.Search} searchText={this.state.searchText} placeholder="Search" />
                        
                        <input type="submit"
                            value="Add Team"
                            className="btn btn-primary"
                            onClick={this.setRedirect} />

                        <input type={this.state.hasChecked?"submit":"hidden"}
                            value="Delete Team"
                            className="btn btn-primary"
                            onClick={this.handleDeleteMultiple} />

                        <DataList onCheckboxchange={this.handleCheckboxchange} data={this.props.teams} />
                    </div>


                    <Pagination pagination={this.props.x_pagination} onRangeClick={this.onRangeClick} onPrev={this.GoPrev} onNext={this.GoNext} />
                </React.Fragment>

            );
        }

    }
}

ListPage.propTypes = {};
ListPage.defaultProps = {};



export default ListPage;


