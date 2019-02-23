export const SURVEY_LOAD = 'SURVEY_LOAD';
export const SURVEY_LOAD_SUCCESS = 'SURVEY_LOAD_SUCCESS';
export const SURVEY_LOAD_FAIL = 'SURVEY_LOAD_FAIL';

export function surveysFetchData() {
    return {
        type: SURVEY_LOAD,
        payload: {
            request:{
                url:'quizQuestions'
            }
        }
    }
}
