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
