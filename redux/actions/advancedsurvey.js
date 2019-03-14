export const ADVANCEDSURVEY_UPDATE = 'ADVANCEDSURVEY_UPDATE';
export const ADVANCEDSURVEY_UPDATE_SUCCESS = 'ADVANCEDSURVEY_UPDATE_SUCCESS';
export const ADVANCEDSURVEY_UPDATE_FAIL = 'ADVANCEDSURVEY_UPDATE_FAIL';



export function updateAdvancedsurvey(advancedsurveyRec) {
    //debugger;
    return {
        type: ADVANCEDSURVEY_UPDATE,
        payload: {
            request: {
                method: 'POST', // UPDATE RECORD
                url: 'surveyresult',
                data: advancedsurveyRec,
                headers: {
                    // advancedsurveyRec
                    'Content-Type' : "application/vnd.marvin.author.full+json"
                    
                 },
            }
        }
    }
}

