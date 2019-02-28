import { ADVANCEDSURVEY_LOAD,ADVANCEDSURVEY_LOAD_FAIL,ADVANCEDSURVEY_LOAD_SUCCESS,
    ADVANCEDSURVEY_UPDATE,
    ADVANCEDSURVEY_UPDATE_FAIL,
    ADVANCEDSURVEY_UPDATE_SUCCESS   } from "../actions/advancedsurvey";

//import {STATUS_ERROR, STATUS_SAVING} from "../../ClientApp/Components/common/AdvancedsurveyButton";


export function advancedsurvey(state = {
                             data: [],
                             isLoading: true,
                             hasErrored: false,
                             errorMessage: ""
                         },
                         action) {
    function updateOneAdvancedsurvey(state, advancedsurveyIdToUpdate, newInterestLevel) {
        // STILL PROBLEM WITH DATE, fails because newState nested nested data still references old state
        // let newState = Object.assign({}, state);
        // let newData = [];
        // newState.data.map(function(rec){
        //     if (rec.id === advancedsurveyIdToUpdate) {
        //         rec.interestLevel = newInterestLevel;
        //         newData.push(rec);
        //     } else {
        //         newData.push(rec);
        //     }
        // });
        // newState.data = newData;
        // return newState;

        // THIS WORKS
        //qfu so complex what mean?
        return {
            ...state,
            data: state.data.map((rec) => {
                    return rec.id === advancedsurveyIdToUpdate ?
                        {...rec, interestLevel: newInterestLevel} : rec
                }
            )
        };
    }
    switch (action.type) {
        case ADVANCEDSURVEY_LOAD: {
            return Object.assign({}, state, {
                isLoading: true,
                hasErrored: false
            });
        }
        case ADVANCEDSURVEY_LOAD_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: false
            });
        }
        case ADVANCEDSURVEY_LOAD_FAIL: {
            return Object.assign({}, state, {
                isLoading: false,
                hasErrored: true,
                errorMessage: action.error.message //where is this qfu
            });
        }

        ///////////// ADVANCEDSURVEY_UPDATE* (PUT) /////////////////////////////////////////////////////////////////
        case ADVANCEDSURVEY_UPDATE: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: false
            });
            //const advancedsurveyIdToUpdate = action.payload.request.data.id;
           // const newInterestLevel = STATUS_SAVING;

            //const newState = updateOneAdvancedsurvey(
               // state,advancedsurveyIdToUpdate,newInterestLevel);
            //return newState;
        }
        case ADVANCEDSURVEY_UPDATE_SUCCESS: {
           return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: false
            });
        }
        case ADVANCEDSURVEY_UPDATE_FAIL: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: false
            });
        }
        default:
            return state;
    }
}
