import * as types from './actionTypes';

export function teamsFetchData(teamsResourceParameters) {
    return {
        type: types.TEAMS_LOAD,
        payload: {
            request:{
                url:'teams' + '?PageNumber=' + teamsResourceParameters.PageNumber
            }
        }
    }
}

export function teamCreate(team) {
    return {
        type: types.TEAM_CREATE,
        payload: {
            request: {
                method: 'POST', // UPDATE RECORD
                url: 'teams',
                data: team, 
                headers: {
                    // advancedsurveyRec
                    'Content-Type' : "application/vnd.marvin.author.full+json"
                    
                 },
            }
        }
    }    
}