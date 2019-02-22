import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';



const production = process.env.NODE_ENV &&
    process.env.NODE_ENV === "production";
console.log(process.env.NODE_ENV);

const restUrl = production ?
    process.env.PROD_RESTURL :
    process.env.JSONSERVER_RESTURL;
console.log(restUrl);
let middleware = [
    thunk,
    axiosMiddleware(axios.create({baseURL:restUrl}))
];

//if (!production) {
  //  middleware.push(require('redux-immutable-state-invariant').default());
   // console.log('added redux-immutable-state-invariant');
//}

export default function configureStore(initialState = {}) {

    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });

    //const restUrl = 'http://localhost:4000/rest';


    return createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware))
    );
}
