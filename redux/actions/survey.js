export const SURVEY_LOAD = 'SURVEY_LOAD';
export const SURVEY_LOAD_SUCCESS = 'SURVEY_LOAD_SUCCESS';
export const SURVEY_LOAD_FAIL = 'SURVEY_LOAD_FAIL';

export function surveyFetchData() {
    return {
        type: SURVEY_LOAD,
        payload: {
            request:{
                url:'survey/f74d6899-9ed2-4137-9876-66b070553f8f'
            }
        }
    }
}
