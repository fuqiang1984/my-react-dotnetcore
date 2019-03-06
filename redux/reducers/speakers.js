import {SPEAKER_LOAD1, SPEAKER_LOAD_FAIL, SPEAKER_LOAD1_SUCCESS} from "../actions/speakers";

export function speakers(state = {
    data: [],
    isLoading: true,
    hasErrored: false,
    errorMessage: ""
}, action) {
    switch (action.type) {

        case SPEAKER_LOAD1: {
            return Object.assign({}, state, {
                isLoading: true,
                hasErrored: false
            });
        }
        case SPEAKER_LOAD1_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: false
            });
        }

        case SPEAKER_LOAD_FAIL: {
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
