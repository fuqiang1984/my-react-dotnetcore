export const SPEAKER_LOAD1 = 'SPEAKER_LOAD1';
export const SPEAKER_LOAD1_SUCCESS = 'SPEAKER_LOAD1_SUCCESS';
export const SPEAKER_LOAD_FAIL = 'SPEAKER_LOAD_FAIL';

export function speakersFetchData() {
    return {

        type: SPEAKER_LOAD,
        payload: {
            request:{
                url:'speakers'
            }
        }
    }
}
