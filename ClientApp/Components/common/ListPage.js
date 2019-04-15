import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import DataList from './DataList'

import arrayRemove from '../utils/Helper';


class ListPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            searchText: '',
            hasChecked: false,
            checkAll:false,
            selected: {}, 
            selectAll: 0
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

        //const field = event.target.id;
        //const checked = event.target.checked;
        //console.log("123");


        const { checked,id } = event.target;

        const newSelected = Object.assign({}, this.state.selected);
        newSelected[id] = !this.state.selected[id];
        this.setState({
            selected: newSelected,
            selectAll: 2
        });

        /*

        if (checked) {
            this.checkedData.push(id);
        } else {
            arrayRemove(this.checkedData, id);
        }

        if (this.checkedData.length === 0) {
            this.setState({ hasChecked: false });
        } else if (this.checkedData.length === 1 && checked === true) {
            this.setState({ hasChecked: true });
        }
        */
    }

    handleCheckall=(event)=>{


        let newSelected = {};

        if (this.state.selectAll === 0) {
            this.props.data.forEach(x => {
                newSelected[x.Id] = true;
            });
        }

        this.setState({
            selected: newSelected,
            selectAll: this.state.selectAll === 0 ? 1 : 0
        });
       //const field = event.target.id;
       //const checked = event.target.checked;


       /*

       const { checked } = event.target;
       //console.log(value);
       //console.log(checked);
       if (checked) {
           // this.checkedData.push(field);
           this.setState({checkAll:true});
        } else {
           this.setState({checkAll:false});
        }

        */

    }



    handleDeleteMultiple = () => {
        let teamsResourceParameters = { PageNumber: this.props.x_pagination.currentPage, searchQuery: this.state.searchText };
        
        

        this.props.teamDeleteCollection(Object.keys(this.state.selected).filter(k=>this.state.selected[k]===true)).then(() => {
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
        //console.log(this.state.selected.filter(s=>s.value==true));

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

                        <input type={Object.values(this.state.selected).filter(v=>v===true).length>0?"submit":"hidden"}
                            value="Delete Team"
                            className="btn btn-primary"
                            onClick={this.handleDeleteMultiple} />

                        <DataList selected={this.state.selected}  checkAll={this.state.selectAll} onCheckall={this.handleCheckall} columns={this.props.columns} onCheckboxchange={this.handleCheckboxchange} data={this.props.data} />
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


