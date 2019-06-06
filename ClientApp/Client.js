import React from "react"
import ReactDOM from "react-dom"
import FullPage from "./Components/common/FullPage";

import { browserHistory } from 'react-router';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from "../redux/configureStore";
import {  LayoutRoute, MainLayout } from './Components/Layout';
import TeamsPage from './Components/team/TeamsPage';
const store = configureStore(window.__STATE__);

ReactDOM.render(
	<Provider store={store}>
    <Router history={browserHistory}>
<<<<<<< HEAD
           <Switch>
                <LayoutRoute
                exact
                path="/teams"
                layout={MainLayout}
                component={TeamsPage}
              />
            </Switch>
                
            
    </Router></Provider>,
=======
        <FullPage/>
    </Router>
    </Provider>,
>>>>>>> ebfeda132414fe728b5b02f44cd4c6dae0b90403
    document.getElementById("app")
);