import * as types from '../actions/actionTypes';

export function teamReducer(state = {
    data: [],
    isLoading: true,
    hasErrored: false,
    errorMessage: ""
}, action) {
    switch (action.type) {

        case types.TEAMS_LOAD: {
            return Object.assign({}, state, {
                isLoading: true,
                hasErrored: false
            });
        }
        case types.TEAMS_LOAD_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload.data,
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

        default:
            return state;
    }
}
