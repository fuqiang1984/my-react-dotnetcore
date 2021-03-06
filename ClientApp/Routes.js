import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';
import Home from "./Components/home/Home";
import Speakers from "./Components/speakers/Speakers";

import Surveys from "./Components/quiz/Surveys";
import Advancedsurvey from "./Components/advancedsurvey/Advancedsurvey";
import Mytest from "./Components/mytest/Mytest";
import Login from "./Components/common/Login";
import RouteNotFound from "./RouteNotFound";
import TeamsPage from './Components/team/TeamsPage';
import ManageTeamPage from './Components/team/ManageTeamPage';
import SurveyCreator from './Components/surveys/SurveyCreator';
import SurveysPage from './Components/surveys/SurveysPage';



class Routes extends Component {
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.props.action();
    }



    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/speakers" component={Speakers}/>
                    <Route exact path="/surveys" component={Surveys}/>
                    <Route exact path="/advancedsurvey" component={Advancedsurvey}/>
                    <Route exact path="/surveycreator" component={SurveyCreator}/>
                    <Route exact path="/surveyspage" component={SurveysPage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/mytest123" component={Mytest}/>
                    <Route exact path="/teams" component={TeamsPage}/>
                    <Route path="/team/:id?" component={ManageTeamPage} />
                    <Route render={() => <RouteNotFound />}></Route>
                </Switch>
            </div>
        );
    }
}

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;

