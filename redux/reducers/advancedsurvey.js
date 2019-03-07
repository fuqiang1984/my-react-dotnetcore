import { 
    ADVANCEDSURVEY_UPDATE,
    ADVANCEDSURVEY_UPDATE_FAIL,
    ADVANCEDSURVEY_UPDATE_SUCCESS   } from "../actions/advancedsurvey";

//import {STATUS_ERROR, STATUS_SAVING} from "../../ClientApp/Components/common/AdvancedsurveyButton";


export function advancedsurvey(state = {
                             data: [],
                             isLoading: true,
                             hasErrored: false,
                             errorMessage: "",
                             submitted:false
                         },
                         action) {
    function updateOneAdvancedsurvey(state, advancedsurveyIdToUpdate, newInterestLevel) {
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
        

        ///////////// ADVANCEDSURVEY_UPDATE* (POST) /////////////////////////////////////////////////////////////////
        case ADVANCEDSURVEY_UPDATE: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: true,
                hasErrored: false,
                submitted:false
            });
           
        }
        case ADVANCEDSURVEY_UPDATE_SUCCESS: {
           return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: false,
                submitted:true
            });
        }
        case ADVANCEDSURVEY_UPDATE_FAIL: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: true,
                errorMessage: action.error.message,
                submitted:false 
            });
        }
        default:
            return state;
    }
}
