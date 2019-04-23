import * as types from '../actions/actionTypes';

export function surveyReducer(state = {
      isLoading: true,
      hasErrored: false,
      data: [],
      errorMessage: ""
    }, action) {
    switch (action.type) {

        case types.SURVEY_LOAD: {
            return Object.assign({}, state, {
                isLoading: true,
                hasErrored: false
            });
        }
        case types.SURVEY_LOAD_SUCCESS: {

            return Object.assign({}, state, {
                data: action.payload.data.value,
                links:action.payload.data.links,
                x_pagination: JSON.parse(action.payload.headers["x-pagination"]),
                isLoading: false,
                hasErrored: false
            });
        }

        case types.SURVEY_LOAD_FAIL: {
            return Object.assign({}, state, {
                isLoading: false,
                hasErrored: true,
                errorMessage: action.error.message
            });
        }

        case types.SURVEY_CREATE:{
            return Object.assign({}, state, {           
                saving: true
            });
        }

        case types.SURVEY_CREATE_SUCCESS:{
            return Object.assign({}, state, {           
                saving: false,
                survey: action.payload.data,
                success:true
            });
            
        }
        
        case types.SURVEY_CREATE_FAIL:{
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
