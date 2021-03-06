import * as types from '../actions/actionTypes';

export function teamsReducer(state = {
    data: [],
    isLoading: true,
    hasErrored: false,
    errorMessage: "",
    links:[]
}, action) {
    switch (action.type) {

        case types.TEAMS_LOAD: {
            return Object.assign({}, state, {
            });
        }
        case types.TEAMS_LOAD_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload.data.value,
                links:action.payload.data.links,
                x_pagination: JSON.parse(action.payload.headers["x-pagination"]),
                isLoading: false,
                hasErrored: false
            });
        }

        case types.TEAMS_LOAD_FAIL: {
            return Object.assign({}, state, {
                isLoading: false,
                hasErrored: true,
                errorMessage: action.error.message
            });
        }
        /*

        case types.TEAM_CREATE:{
            return Object.assign({}, state, {           
                saving: true
            });
        }

        case types.TEAM_CREATE_SUCCESS:{
            return Object.assign({}, state, {           
                saving: false,
                team: action.payload.data,
            });
            
        }
        
        case types.TEAM_CREATE_FAIL:{
            return Object.assign({}, state, {           
                saving: false,
                errors:action.error.message
            });

        }
        */

        default:
            return state;
    }
}
