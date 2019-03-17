import * as types from './actionTypes';

export function teamsFetchData() {
    debugger;
    return {
        type: types.TEAMS_LOAD,
        payload: {
            request:{
                url:'teams'
            }
        }
    }
}