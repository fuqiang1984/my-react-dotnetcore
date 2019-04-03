import * as types from './actionTypes';

export function teamsFetchData(teamsResourceParameters) {
    return {
        type: types.TEAMS_LOAD,
        payload: {
            request: {
                //application/vnd.marvin.hateoas+json
                method: 'GET',
                headers: {
                    // advancedsurveyRec
                    'Accept': "application/vnd.marvin.hateoas+json"

                },
                url: 'teams' + '?PageNumber=' + teamsResourceParameters.PageNumber
                    + (typeof teamsResourceParameters.searchQuery === 'undefined' 
                    || teamsResourceParameters.searchQuery===""?"":'&searchQuery=' 
                    + teamsResourceParameters.searchQuery)
            }
        }
    }
}

export function teamSave(team) {
    console.log(team.Id);
    return team.Id ? {
        type: types.TEAM_UPDATE,
        payload: {
            request: {
                method: 'PUT', // UPDATE RECORD
                url: 'teams' + '/' + team.Id,
                data: team,
                headers: {
                    // advancedsurveyRec
                    'Content-Type': "application/json"

                },
            }
        }
    } :
        {
            type: types.TEAM_CREATE,
            payload: {
                request: {
                    method: 'POST', // UPDATE RECORD
                    url: 'teams',
                    data: team,
                    headers: {
                        // advancedsurveyRec
                        'Content-Type': "application/vnd.marvin.author.full+json"

                    },
                }
            }
        }
}

export function teamDelete(href) {
    return {
        type: types.TEAM_DELETE,
        payload: {
            request: {
                method: 'DELETE', // UPDATE RECORD
                url: href
            }
        }
    }
}