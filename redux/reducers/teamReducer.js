import * as types from '../actions/actionTypes';


export function teamReducer(state = {
    team: [],
    saving: false,
    hasErrored: false,
    errors: "",
    success: false
}, action) {
    switch (action.type) {

       case types.TEAM_CREATE:{
            return Object.assign({}, state, {           
                saving: true
            });
        }

        case types.TEAM_CREATE_SUCCESS:{
            return Object.assign({}, state, {           
                saving: false,
                team: action.payload.data,
                success:true
            });
            
        }
        
        case types.TEAM_CREATE_FAIL:{
            return Object.assign({}, state, {           
                saving: false,
                hasErrored:true,
                errors:action.error.message
            });

        }

        default:
            return state;
    }
}
