import { combineReducers } from 'redux';
import {speakers} from './speakers';
import {sessions} from './sessions';
import {surveys} from './surveys';
import {survey} from './survey';
import {advancedsurvey} from './advancedsurvey';
import {teamReducer} from './teamReducer';



export default combineReducers({
    speakers,
    sessions,
    surveys,
    survey,
    advancedsurvey,
    teamReducer
});