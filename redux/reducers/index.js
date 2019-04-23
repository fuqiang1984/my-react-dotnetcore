import { combineReducers } from 'redux';
import {speakers} from './speakers';
import {sessions} from './sessions';
import {surveyReducer} from './surveyReducer';
import {advancedsurvey} from './advancedsurvey';
import {teamsReducer} from './teamsReducer';
import {teamReducer} from './teamReducer';



export default combineReducers({
    speakers,
    sessions,
    surveyReducer,
    advancedsurvey,
    teamsReducer,
    teamReducer
});