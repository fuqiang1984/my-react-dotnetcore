export const ADVANCEDSURVEY_LOAD = 'ADVANCEDSURVEY_LOAD';
export const ADVANCEDSURVEY_LOAD_SUCCESS = 'ADVANCEDSURVEY_LOAD_SUCCESS';
export const ADVANCEDSURVEY_LOAD_FAIL = 'ADVANCEDSURVEY_LOAD_FAIL';

export const ADVANCEDSURVEY_UPDATE = 'ADVANCEDSURVEY_UPDATE';
export const ADVANCEDSURVEY_UPDATE_SUCCESS = 'ADVANCEDSURVEY_UPDATE_SUCCESS';
export const ADVANCEDSURVEY_UPDATE_FAIL = 'ADVANCEDSURVEY_UPDATE_FAIL';

export function advancedsurveyFetchData() {
    console.log("actions/advancedsurvey.js/advancedsurveyFetchData ADVANCEDSURVEY_LOAD....");
    //debugger;
    return {
        type: ADVANCEDSURVEY_LOAD,
        payload: {
            request:{
                url:'surveyresult'
            }
        }
    }
}


export function updateAdvancedsurvey(advancedsurveyRec) {
    //debugger;
    return {
        type: ADVANCEDSURVEY_UPDATE,
        payload: {
            request: {
                method: 'POST', // UPDATE RECORD
                url: 'surveyresult',
                data: {
                    advancedsurveyRec
                }
            }
        }
    }
}

