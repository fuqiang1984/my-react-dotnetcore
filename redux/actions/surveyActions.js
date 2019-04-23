import * as types from './actionTypes';

export function surveyFetchData() {
    return {
        type: types.SURVEY_LOAD,
        payload: {
            request:{
                url:'survey/59ff9322-8708-468f-a77e-f2354dd1f8f8'
            }
        }
    }
}

export function surveysFetchData(params) {
    return {
        type: types.TEAMS_LOAD,
        payload: {
            request: {
               
                method: 'GET',
                headers: {
                    // advancedsurveyRec
                    'Accept': "application/vnd.marvin.hateoas+json"

                },
                url: 'survey' + '?PageNumber=' + params.PageNumber
                    + (typeof params.searchQuery === 'undefined' 
                    || params.searchQuery===""?"":'&searchQuery=' 
                    + params.searchQuery)
            }
        }
    }
}


export function saveSurvey(survey) {
    return {
        type: types.SURVEY_CREATE,
        payload: {
            request: {
                method: 'POST', // UPDATE RECORD
                url: 'survey',
                data: survey,
                headers: {
                    // advancedsurveyRec
                    'Content-Type': "application/vnd.marvin.author.full+json"

                },
            }
        }
    }    
}

export function surveyDelete(href) {
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

export function surveyDeleteCollection(teams) {
   // let myJsonString = JSON.stringify(teams);
    return {
        type: types.TEAM_DELETE_COLLECTION,
        payload: {
            request: {
                method: 'DELETE', // UPDATE RECORD
                url: 'authorcollections' + '/' + '('+teams.join(',')+')'
            }
        }
    }
}
